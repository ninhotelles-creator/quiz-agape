"use client";

import { useState } from "react";
import { Theme, Filter } from "@/lib/types";

interface ResultWithBook {
  id: string;
  filter_id: string;
  label: string;
  book_id: string;
  order_index: number;
  book?: { title: string; author: string };
}

interface Props {
  themes: Theme[];
  filters: Filter[];
  results: ResultWithBook[];
}

const PROFILE_LABELS: Record<string, string> = {
  "homem-adulto": "Homem Adulto",
  "mulher-adulta": "Mulher Adulta",
  "homem-jovem": "Homem Jovem",
  "mulher-jovem": "Mulher Jovem",
};

export default function PerguntasClient({ themes, filters, results }: Props) {
  const [selectedProfile, setSelectedProfile] = useState("homem-adulto");
  const [expandedTheme, setExpandedTheme] = useState<string | null>(null);
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null);

  const profiles = Array.from(new Set(themes.map((t) => t.profile)));
  const profileThemes = themes.filter((t) => t.profile === selectedProfile);

  return (
    <div>
      <h1 className="text-brand-white text-2xl font-bold mb-6">Estrutura do Quiz</h1>
      <p className="text-brand-muted text-sm mb-8">
        Visualize a árvore completa de perguntas. Para editar, acesse o painel Supabase ou use os CRUDs nas próximas versões.
      </p>

      {/* Profile Tabs */}
      <div className="flex gap-2 flex-wrap mb-8">
        {profiles.map((profile) => (
          <button
            key={profile}
            onClick={() => { setSelectedProfile(profile); setExpandedTheme(null); setExpandedFilter(null); }}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
              selectedProfile === profile
                ? "bg-brand-red text-white"
                : "bg-brand-card border border-brand-border text-brand-muted hover:text-brand-white"
            }`}
          >
            {PROFILE_LABELS[profile] || profile}
          </button>
        ))}
      </div>

      {/* Step 3 - Themes */}
      <div className="mb-2">
        <p className="text-brand-muted text-xs uppercase tracking-widest font-semibold mb-3">
          Etapa 3 — Temas ({profileThemes[0]?.step4_question ? "Selecione o tema" : ""})
        </p>
        <div className="space-y-2">
          {profileThemes.map((theme) => {
            const themeFilters = filters.filter((f) => f.theme_id === theme.id);
            const isExpanded = expandedTheme === theme.id;

            return (
              <div key={theme.id} className="bg-brand-card border border-brand-border rounded-xl overflow-hidden">
                <button
                  className="w-full text-left px-5 py-4 flex items-center justify-between"
                  onClick={() => setExpandedTheme(isExpanded ? null : theme.id)}
                >
                  <div className="flex items-center gap-3">
                    <span>{theme.emoji}</span>
                    <div>
                      <p className="text-brand-white font-medium text-sm">{theme.label}</p>
                      <p className="text-brand-muted text-xs">{theme.step4_question}</p>
                    </div>
                  </div>
                  <span className="text-brand-muted text-xs">{isExpanded ? "▲" : "▼"}</span>
                </button>

                {isExpanded && (
                  <div className="border-t border-brand-border">
                    {/* Verse */}
                    {theme.verse && (
                      <div className="px-5 py-3 bg-brand-bg/40 border-b border-brand-border">
                        <p className="text-brand-muted text-xs">
                          Versículo: &ldquo;{theme.verse}&rdquo; — {theme.verse_reference}
                        </p>
                      </div>
                    )}

                    {/* Step 4 - Filters */}
                    <div className="p-4 space-y-2">
                      <p className="text-brand-muted text-xs uppercase tracking-widest font-semibold mb-3">
                        Etapa 4 — Afunilamento
                      </p>
                      {themeFilters.map((filter) => {
                        const filterResults = results.filter((r) => r.filter_id === filter.id);
                        const isFilterExpanded = expandedFilter === filter.id;

                        return (
                          <div key={filter.id} className="bg-brand-bg border border-brand-border rounded-xl overflow-hidden">
                            <button
                              className="w-full text-left px-4 py-3 flex items-center justify-between"
                              onClick={() => setExpandedFilter(isFilterExpanded ? null : filter.id)}
                            >
                              <div className="flex items-center gap-2">
                                <span>{filter.emoji}</span>
                                <div>
                                  <p className="text-brand-white text-sm">{filter.label}</p>
                                  <p className="text-brand-muted text-xs">{filter.step5_question}</p>
                                </div>
                              </div>
                              <span className="text-brand-muted text-xs">{isFilterExpanded ? "▲" : "▼"}</span>
                            </button>

                            {isFilterExpanded && (
                              <div className="border-t border-brand-border p-3 space-y-2">
                                <p className="text-brand-muted text-xs uppercase tracking-widest font-semibold">
                                  Etapa 5 — Resultado
                                </p>
                                {filterResults.map((result) => (
                                  <div key={result.id} className="flex items-center gap-3 px-3 py-2 bg-brand-card rounded-lg">
                                    <span className="text-brand-red text-lg shrink-0">📗</span>
                                    <div className="min-w-0">
                                      <p className="text-brand-white text-xs font-medium truncate">{result.label}</p>
                                      <p className="text-brand-red text-xs truncate">
                                        {result.book?.title} — {result.book?.author}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
