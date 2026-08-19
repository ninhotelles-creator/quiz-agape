"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  settings: Record<string, string | null>;
}

interface Vendedor {
  slug: string;
  nome: string;
  numero: string;
}

const DIACRITICS_REGEX = new RegExp("[\\u0300-\\u036f]", "g");

function slugify(nome: string) {
  return nome
    .toLowerCase()
    .normalize("NFD")
    .replace(DIACRITICS_REGEX, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function parseVendedores(raw: string | null): Vendedor[] {
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function sanitizePhone(raw: string) {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return "";
  // Número local (DDD + número, 10 ou 11 dígitos) sem código do país: adiciona 55
  if ((digits.length === 10 || digits.length === 11) && !digits.startsWith("55")) {
    return `55${digits}`;
  }
  return digits;
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
  const [vendedores, setVendedores] = useState<Vendedor[]>(() => {
    const existentes = parseVendedores(settings.whatsapp_vendedores);
    while (existentes.length < 2) existentes.push({ slug: "", nome: "", numero: "" });
    return existentes;
  });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const [copiedSlug, setCopiedSlug] = useState("");

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

  const updateVendedor = (index: number, field: "nome" | "numero", value: string) => {
    setVendedores((prev) => {
      const next = [...prev];
      const item = { ...next[index], [field]: value };
      if (field === "nome") item.slug = slugify(value);
      next[index] = item;
      return next;
    });
  };

  const saveVendedores = () => {
    const validos = vendedores.filter((v) => v.nome && v.numero);
    save("whatsapp_vendedores", JSON.stringify(validos), "Funcionários");
  };

  const copyLink = (slug: string) => {
    const url = `${window.location.origin}/?v=${encodeURIComponent(slug)}`;
    navigator.clipboard.writeText(url);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(""), 2000);
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

        {/* Vendedores */}
        <div className="bg-brand-card border border-brand-border rounded-xl p-6">
          <div className="mb-4">
            <h2 className="text-brand-white font-bold">Links por funcionário</h2>
            <p className="text-brand-muted text-sm mt-1">
              Cadastre o WhatsApp de cada funcionário e compartilhe o link gerado. Quem responder o quiz por esse link
              cai no WhatsApp dele ao clicar no botão final.
            </p>
          </div>
          <div className="space-y-5">
            {vendedores.map((v, i) => (
              <div key={i} className="border border-brand-border rounded-xl p-4 space-y-3">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="text-brand-muted text-xs uppercase tracking-widest font-semibold block mb-2">
                      Nome do funcionário
                    </label>
                    <input
                      value={v.nome}
                      onChange={(e) => updateVendedor(i, "nome", e.target.value)}
                      placeholder={`Ex: Funcionário ${i + 1}`}
                      className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-white placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-red"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-brand-muted text-xs uppercase tracking-widest font-semibold block mb-2">
                      WhatsApp (com código do país, sem +)
                    </label>
                    <input
                      value={v.numero}
                      onChange={(e) => updateVendedor(i, "numero", e.target.value)}
                      onBlur={(e) => updateVendedor(i, "numero", sanitizePhone(e.target.value))}
                      placeholder="5582988782681"
                      className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-white placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-red"
                    />
                  </div>
                </div>
                {v.slug && v.numero && (
                  <div className="flex items-center gap-3">
                    <code className="flex-1 text-brand-muted text-xs bg-brand-bg border border-brand-border rounded-lg px-3 py-2 truncate">
                      {typeof window !== "undefined" ? window.location.origin : ""}/?v={v.slug}
                    </code>
                    <button
                      onClick={() => copyLink(v.slug)}
                      className="px-4 py-2 bg-brand-bg border border-brand-border hover:border-brand-red text-brand-white text-sm font-semibold rounded-lg transition-colors"
                    >
                      {copiedSlug === v.slug ? "Copiado!" : "Copiar link"}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <button
            onClick={saveVendedores}
            disabled={saving}
            className="mt-4 px-5 py-3 bg-brand-red hover:bg-[#c72522] text-white font-bold rounded-xl transition-colors disabled:opacity-50"
          >
            Salvar funcionários
          </button>
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
