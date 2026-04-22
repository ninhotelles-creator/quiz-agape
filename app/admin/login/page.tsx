"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.push("/admin/dashboard");
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error || "Erro ao autenticar");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-dvh bg-brand-bg flex items-center justify-center px-5">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <span className="text-brand-red font-bold tracking-widest text-sm uppercase block mb-2">
            Livraria Ágape
          </span>
          <h1 className="text-brand-white text-2xl font-bold">Painel Admin</h1>
          <p className="text-brand-muted text-sm mt-2">Acesso restrito</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-brand-muted text-xs uppercase tracking-widest font-semibold block mb-2">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full px-4 py-3 rounded-xl
                bg-brand-card border border-brand-border
                text-brand-white placeholder-brand-muted
                focus:outline-none focus:ring-2 focus:ring-brand-red
                transition-all
              "
              placeholder="Digite a senha"
              required
              autoFocus
            />
          </div>

          {error && (
            <p className="text-brand-red text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3 rounded-xl
              bg-brand-red hover:bg-[#c72522]
              text-white font-bold
              transition-all duration-200
              disabled:opacity-50
            "
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
