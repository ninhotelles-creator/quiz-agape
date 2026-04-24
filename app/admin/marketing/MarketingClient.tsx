"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  settings: Record<string, string | null>;
}

export default function MarketingClient({ settings }: Props) {
  const router = useRouter();
  const [pixelId, setPixelId] = useState(settings.pixel_id || "");
  const [accessToken, setAccessToken] = useState(settings.meta_access_token || "");
  const [whatsapp, setWhatsapp] = useState(settings.whatsapp_number || "5582988782681");
  const [message, setMessage] = useState(
    settings.whatsapp_message ||
    "Olá! Fiz o quiz da Livraria Ágape e recebi a indicação do livro: [NOME DO LIVRO] de [AUTOR]. Gostaria de saber mais!"
  );
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  const save = async (key: string, value: string, label: string) => {
    setSaving(true);
    setMsg("");
    const res = await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, value }),
    });
    if (res.ok) {
      setMsg(`${label} salvo com sucesso!`);
      router.refresh();
    } else {
      setMsg("Erro ao salvar.");
    }
    setSaving(false);
  };

  return (
    <div>
      <h1 className="text-brand-white text-2xl font-bold mb-8">Marketing</h1>

      <div className="max-w-2xl space-y-6">
        {/* Meta Pixel */}
        <div className="bg-brand-card border border-brand-border rounded-xl p-6">
          <div className="mb-4">
            <h2 className="text-brand-white font-bold">Meta Pixel</h2>
          </div>
          <p className="text-brand-muted text-sm mb-4">
            O Pixel é carregado dinamicamente. Ao salvar um novo ID, ele entra em vigor no próximo acesso ao site.
          </p>
          <div className="flex gap-3">
            <input
              value={pixelId}
              onChange={(e) => setPixelId(e.target.value)}
              placeholder="Ex: 1234567890123456"
              className="flex-1 px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-white placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-red"
            />
            <button
              onClick={() => save("pixel_id", pixelId, "Pixel ID")}
              disabled={saving}
              className="px-5 py-3 bg-brand-red hover:bg-[#c72522] text-white font-bold rounded-xl transition-colors disabled:opacity-50"
            >
              Salvar
            </button>
          </div>
          {settings.pixel_id && (
            <p className="text-brand-muted text-xs mt-3">
              Pixel atual: <span className="text-brand-white font-mono">{settings.pixel_id}</span>
            </p>
          )}
        </div>

        {/* Meta Conversions API */}
        <div className="bg-brand-card border border-brand-border rounded-xl p-6">
          <div className="mb-4">
            <h2 className="text-brand-white font-bold">Meta Conversions API</h2>
          </div>
          <p className="text-brand-muted text-sm mb-4">
            Token de acesso para eventos server-side (PageView e Lead). Gerado no Gerenciador de Eventos do Meta
            → Configurações → API de Conversões → Gerar token de acesso.
          </p>
          <div className="flex gap-3">
            <input
              type="password"
              value={accessToken}
              onChange={(e) => setAccessToken(e.target.value)}
              placeholder="EAAxxxxxxxxxxxxxxxx..."
              className="flex-1 px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-white placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-red font-mono text-sm"
            />
            <button
              onClick={() => save("meta_access_token", accessToken, "Token")}
              disabled={saving}
              className="px-5 py-3 bg-brand-red hover:bg-[#c72522] text-white font-bold rounded-xl transition-colors disabled:opacity-50"
            >
              Salvar
            </button>
          </div>
          {settings.meta_access_token ? (
            <p className="text-brand-muted text-xs mt-3">
              Status: <span className="text-green-400 font-medium">● configurado</span>
            </p>
          ) : (
            <p className="text-brand-muted text-xs mt-3">
              Status: <span className="text-yellow-500 font-medium">● não configurado</span> — eventos server-side desativados
            </p>
          )}
        </div>

        {/* WhatsApp */}
        <div className="bg-brand-card border border-brand-border rounded-xl p-6">
          <div className="mb-4">
            <h2 className="text-brand-white font-bold">WhatsApp</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-brand-muted text-xs uppercase tracking-widest font-semibold block mb-2">
                Número (com código do país, sem +)
              </label>
              <div className="flex gap-3">
                <input
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="5582988782681"
                  className="flex-1 px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-white placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-red"
                />
                <button
                  onClick={() => save("whatsapp_number", whatsapp, "Número")}
                  disabled={saving}
                  className="px-5 py-3 bg-brand-red hover:bg-[#c72522] text-white font-bold rounded-xl transition-colors disabled:opacity-50"
                >
                  Salvar
                </button>
              </div>
            </div>

            <div>
              <label className="text-brand-muted text-xs uppercase tracking-widest font-semibold block mb-2">
                Mensagem padrão
              </label>
              <p className="text-brand-muted text-xs mb-2">
                Use <code className="text-brand-red">[NOME DO LIVRO]</code> e <code className="text-brand-red">[AUTOR]</code> como variáveis.
              </p>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-white placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-red resize-none"
              />
              <button
                onClick={() => save("whatsapp_message", message, "Mensagem")}
                disabled={saving}
                className="mt-3 px-5 py-3 bg-brand-red hover:bg-[#c72522] text-white font-bold rounded-xl transition-colors disabled:opacity-50"
              >
                Salvar mensagem
              </button>
            </div>
          </div>
        </div>

        {msg && (
          <div className={`p-4 rounded-xl text-sm font-medium ${
            msg.includes("sucesso") ? "bg-green-900/30 text-green-400" : "bg-red-900/30 text-brand-red"
          }`}>
            {msg}
          </div>
        )}

        {/* Info */}
        <div className="bg-brand-card border border-brand-border rounded-xl p-6">
          <div className="mb-3">
            <h2 className="text-brand-white font-bold">Rastreamento de cliques</h2>
          </div>
          <p className="text-brand-muted text-sm">
            Cada clique no botão WhatsApp é registrado no banco de dados com: livro indicado, perfil do usuário, tema e timestamp.
            Os dados são exibidos no Dashboard.
          </p>
          <p className="text-brand-muted text-sm mt-2">
            O evento <code className="text-brand-red">Lead</code> é disparado para o Meta Pixel (browser) e para a Conversions API (server-side) com o mesmo <code className="text-brand-red">event_id</code> — o Meta deduplica automaticamente. O evento <code className="text-brand-red">PageView</code> também é enviado via Conversions API ao iniciar o quiz.
          </p>
        </div>
      </div>
    </div>
  );
}
