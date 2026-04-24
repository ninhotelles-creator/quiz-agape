"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
import OptionButton from "./OptionButton";
import { supabase } from "@/lib/supabase";
import { AgeGroup, Gender, Profile, Theme, Filter, Result } from "@/lib/types";
import { trackPixelEvent } from "@/components/MetaPixel";

type Step = 1 | 2 | 3 | 4 | 5;

interface QuizState {
  step: Step;
  age?: AgeGroup;
  gender?: Gender;
  profile?: Profile;
  themeId?: string;
  themeCode?: string;
  filterId?: string;
}

const PROFILE_QUESTION: Record<string, string> = {
  "homem-adulto": "O que melhor descreve sua vida agora?",
  "mulher-adulta": "O que melhor descreve sua vida agora?",
  "homem-jovem": "O que melhor descreve você agora?",
  "mulher-jovem": "O que melhor descreve você agora?",
};

export default function QuizContainer({ pageViewEventId }: { pageViewEventId: string }) {
  const router = useRouter();
  const [state, setState] = useState<QuizState>({ step: 1 });

  useEffect(() => {
    trackPixelEvent("PageView", {}, { eventID: pageViewEventId });
    fetch("/api/meta-conversions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_name: "PageView",
        event_id: pageViewEventId,
        event_source_url: window.location.href,
      }),
    }).catch(() => {});
  }, [pageViewEventId]);
  const [themes, setThemes] = useState<Theme[]>([]);
  const [filters, setFilters] = useState<Filter[]>([]);
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);

  const goBack = () => {
    setState((s) => {
      const prev = { ...s };
      if (prev.step === 2) return { step: 1 };
      if (prev.step === 3) return { step: 2, age: prev.age, gender: prev.gender };
      if (prev.step === 4) return { step: 3, age: prev.age, gender: prev.gender, profile: prev.profile };
      if (prev.step === 5) return { step: 4, age: prev.age, gender: prev.gender, profile: prev.profile, themeId: prev.themeId, themeCode: prev.themeCode };
      return { step: 1 };
    });
  };

  const selectAge = useCallback((age: AgeGroup) => {
    trackPixelEvent("InitiateCheckout");
    setState({ step: 2, age });
  }, []);

  const selectGender = useCallback(async (gender: Gender) => {
    const age = state.age!;
    const ageLabel = gender === "mulher" && age === "adulto" ? "adulta" : age;
    const profile: Profile = `${gender}-${ageLabel}` as Profile;
    setLoading(true);
    const { data } = await supabase
      .from("themes")
      .select("*")
      .eq("profile", profile)
      .order("order_index");
    setThemes(data || []);
    setLoading(false);
    setState((s) => ({ ...s, step: 3, gender, profile }));
  }, [state.age]);

  const selectTheme = useCallback(async (theme: Theme) => {
    setLoading(true);
    const { data } = await supabase
      .from("filters")
      .select("*")
      .eq("theme_id", theme.id)
      .order("order_index");
    setFilters(data || []);
    setLoading(false);
    setState((s) => ({
      ...s,
      step: 4,
      themeId: theme.id,
      themeCode: theme.code,
    }));
  }, []);

  const selectFilter = useCallback(async (filter: Filter) => {
    setLoading(true);
    const { data } = await supabase
      .from("results")
      .select("*, book:books(*)")
      .eq("filter_id", filter.id)
      .order("order_index");
    setResults((data || []) as Result[]);
    setLoading(false);
    setState((s) => ({ ...s, step: 5, filterId: filter.id }));
  }, []);

  const selectResult = useCallback((result: Result) => {
    const theme = themes.find((t) => t.id === state.themeId);
    sessionStorage.setItem("quiz_profile", state.profile || "");
    sessionStorage.setItem("quiz_theme_code", state.themeCode || "");
    sessionStorage.setItem("quiz_verse", theme?.verse || "");
    sessionStorage.setItem("quiz_verse_ref", theme?.verse_reference || "");
    router.push(`/carregando?book=${result.book_id}&theme=${state.themeCode}`);
  }, [router, state, themes]);

  const currentTheme = themes.find((t) => t.id === state.themeId);
  const currentFilter = filters.find((f) => f.id === state.filterId);

  const renderStep = () => {
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center py-12 gap-4 animate-fade-in">
          <div className="w-8 h-8 border-2 border-brand-red border-t-transparent rounded-full animate-spin" />
          <p className="text-brand-muted text-sm">Carregando...</p>
        </div>
      );
    }

    switch (state.step) {
      case 1:
        return (
          <div className="animate-fade-in">
            <h2 className="text-xl font-bold text-brand-white mb-2">Qual é a sua faixa etária?</h2>
            <p className="text-brand-muted text-sm mb-6">Isso nos ajuda a encontrar o livro certo para você.</p>
            <div className="flex flex-col gap-3">
              <OptionButton label="Sou jovem (até 25 anos)" onClick={() => selectAge("jovem")} />
              <OptionButton label="Sou adulto (acima de 25 anos)" onClick={() => selectAge("adulto")} />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="animate-fade-in">
            <h2 className="text-xl font-bold text-brand-white mb-2">Qual é o seu gênero?</h2>
            <p className="text-brand-muted text-sm mb-6">Isso nos permite personalizar melhor a indicação.</p>
            <div className="flex flex-col gap-3">
              <OptionButton label="Homem" onClick={() => selectGender("homem")} />
              <OptionButton label="Mulher" onClick={() => selectGender("mulher")} />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="animate-fade-in">
            <h2 className="text-xl font-bold text-brand-white mb-2">
              {state.profile ? PROFILE_QUESTION[state.profile] : "O que melhor descreve você agora?"}
            </h2>
            <p className="text-brand-muted text-sm mb-6">Escolha a opção que mais ressoa com você neste momento.</p>
            <div className="flex flex-col gap-3">
              {themes.map((theme) => (
                <OptionButton
                  key={theme.id}
                  label={theme.label}
                  onClick={() => selectTheme(theme)}
                />
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="animate-fade-in">
            <h2 className="text-xl font-bold text-brand-white mb-2">
              {currentTheme?.step4_question || "Qual é sua maior realidade agora?"}
            </h2>
            <p className="text-brand-muted text-sm mb-6">Seja honesto — vamos encontrar o livro certo.</p>
            <div className="flex flex-col gap-3">
              {filters.map((filter) => (
                <OptionButton
                  key={filter.id}
                  label={filter.label}
                  onClick={() => selectFilter(filter)}
                />
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="animate-fade-in">
            <h2 className="text-xl font-bold text-brand-white mb-2">
              {currentFilter?.step5_question || "O que mais se encaixa?"}
            </h2>
            <p className="text-brand-muted text-sm mb-6">Quase lá! Escolha a que mais combina.</p>
            <div className="flex flex-col gap-3">
              {results.map((result) => (
                <OptionButton
                  key={result.id}
                  label={result.label}
                  onClick={() => selectResult(result)}
                />
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-dvh bg-brand-bg flex flex-col">
      {/* Header */}
      <header className="px-5 pt-8 pb-4">
        <div className="max-w-lg mx-auto">
          <div className="relative flex items-center justify-center mb-6">
            <Image
              src="https://i.imgur.com/zD8tLjj.png"
              alt="Livraria Ágape"
              width={200}
              height={60}
              className="object-contain"
              priority
            />
            {state.step > 1 && (
              <button
                onClick={goBack}
                className="absolute right-0 text-brand-muted text-sm hover:text-brand-white transition-colors"
              >
                ← Voltar
              </button>
            )}
          </div>
          <ProgressBar step={state.step} total={5} />
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 px-5 py-6">
        <div className="max-w-lg mx-auto">
          {renderStep()}
        </div>
      </main>

      {/* Footer */}
      <footer className="px-5 pb-8 pt-4">
        <div className="max-w-lg mx-auto">
          <p className="text-center text-brand-muted text-xs">
            Quiz de curadoria personalizada · Livraria Ágape
          </p>
        </div>
      </footer>
    </div>
  );
}
