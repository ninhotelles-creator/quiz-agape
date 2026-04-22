"use client";

import { useEffect, useState } from "react";
import { Book } from "@/lib/types";

export default function LivrosPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<Book | null>(null);
  const [form, setForm] = useState({ title: "", author: "", cover_url: "" });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  const load = async () => {
    setLoading(true);
    const res = await fetch("/api/admin/books");
    const data = await res.json();
    setBooks(data || []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const openNew = () => {
    setEditing({ id: "", title: "", author: "", cover_url: null });
    setForm({ title: "", author: "", cover_url: "" });
    setMsg("");
  };

  const openEdit = (b: Book) => {
    setEditing(b);
    setForm({ title: b.title, author: b.author, cover_url: b.cover_url || "" });
    setMsg("");
  };

  const closeModal = () => {
    setEditing(null);
    setMsg("");
  };

  const handleSave = async () => {
    if (!form.title || !form.author) return;
    setSaving(true);
    setMsg("");
    const isNew = !editing?.id;
    const res = await fetch("/api/admin/books", {
      method: isNew ? "POST" : "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(isNew
        ? form
        : { id: editing!.id, ...form }),
    });
    if (res.ok) {
      setMsg("Salvo com sucesso!");
      await load();
      setTimeout(closeModal, 800);
    } else {
      const d = await res.json();
      setMsg(d.error || "Erro ao salvar.");
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Excluir este livro?")) return;
    await fetch("/api/admin/books", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    await load();
  };

  const filtered = books.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-brand-white text-2xl font-bold">Livros</h1>
        <button
          onClick={openNew}
          className="px-4 py-2 bg-brand-red hover:bg-[#c72522] text-white text-sm font-bold rounded-xl transition-colors"
        >
          + Novo livro
        </button>
      </div>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar por título ou autor..."
        className="w-full mb-6 px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-brand-white placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-red"
      />

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-2 border-brand-red border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-border">
                  <th className="text-left px-4 py-3 text-brand-muted font-semibold">Título</th>
                  <th className="text-left px-4 py-3 text-brand-muted font-semibold">Autor</th>
                  <th className="text-left px-4 py-3 text-brand-muted font-semibold hidden sm:table-cell">Capa</th>
                  <th className="text-right px-4 py-3 text-brand-muted font-semibold">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((book) => (
                  <tr key={book.id} className="border-b border-brand-border last:border-0 hover:bg-brand-border/30 transition-colors">
                    <td className="px-4 py-3 text-brand-white font-medium">{book.title}</td>
                    <td className="px-4 py-3 text-brand-muted">{book.author}</td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      {book.cover_url ? (
                        <span className="text-green-400 text-xs">✓ URL salva</span>
                      ) : (
                        <span className="text-brand-muted text-xs">Sem capa</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex gap-2 justify-end">
                        <button
                          onClick={() => openEdit(book)}
                          className="px-3 py-1 text-xs bg-brand-border hover:bg-brand-muted/30 text-brand-white rounded-lg transition-colors"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleDelete(book.id)}
                          className="px-3 py-1 text-xs bg-brand-red/20 hover:bg-brand-red/40 text-brand-red rounded-lg transition-colors"
                        >
                          Excluir
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-4 py-8 text-center text-brand-muted">
                      Nenhum livro encontrado.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal */}
      {editing !== null && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-brand-card border border-brand-border rounded-2xl w-full max-w-md p-6">
            <h2 className="text-brand-white font-bold text-lg mb-5">
              {editing.id ? "Editar livro" : "Novo livro"}
            </h2>

            <div className="space-y-4">
              <div>
                <label className="text-brand-muted text-xs uppercase tracking-widest font-semibold block mb-2">Título *</label>
                <input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-white focus:outline-none focus:ring-2 focus:ring-brand-red"
                />
              </div>
              <div>
                <label className="text-brand-muted text-xs uppercase tracking-widest font-semibold block mb-2">Autor *</label>
                <input
                  value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-white focus:outline-none focus:ring-2 focus:ring-brand-red"
                />
              </div>
              <div>
                <label className="text-brand-muted text-xs uppercase tracking-widest font-semibold block mb-2">URL da capa</label>
                <input
                  value={form.cover_url}
                  onChange={(e) => setForm({ ...form, cover_url: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-white placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-red"
                />
              </div>
            </div>

            {msg && <p className={`mt-3 text-sm ${msg.includes("sucesso") ? "text-green-400" : "text-brand-red"}`}>{msg}</p>}

            <div className="flex gap-3 mt-6">
              <button
                onClick={closeModal}
                className="flex-1 py-3 rounded-xl bg-brand-border text-brand-white text-sm font-semibold hover:bg-brand-muted/30 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex-1 py-3 rounded-xl bg-brand-red hover:bg-[#c72522] text-white text-sm font-bold transition-colors disabled:opacity-50"
              >
                {saving ? "Salvando..." : "Salvar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
