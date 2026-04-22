"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";

function LoadingContent() {
  const router = useRouter();
  const params = useSearchParams();
  const bookId = params.get("book");
  const [verse, setVerse] = useState("");
  const [verseRef, setVerseRef] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const v = sessionStorage.getItem("quiz_verse") || "Chegai-vos a Deus e ele se chegará a vós";
    const vr = sessionStorage.getItem("quiz_verse_ref") || "Tiago 4:8";
    setVerse(v);
    setVerseRef(vr);
  }, []);

  useEffect(() => {
    if (!bookId) return;

    const DURATION = 8000;
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          router.push(`/resultado/${bookId}`);
        }, 300);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [router, bookId]);

  return (
    <div className="min-h-dvh bg-brand-bg flex flex-col items-center justify-center px-6">
      {/* Logo */}
      <div className="mb-12 animate-fade-in">
        <Image
          src="https://i.imgur.com/zD8tLjj.png"
          alt="Livraria Ágape"
          width={200}
          height={60}
          className="object-contain"
          priority
        />
      </div>

      {/* Mensagem */}
      <p className="text-brand-muted text-sm uppercase tracking-widest mb-8 animate-fade-in">
        Encontrando o livro certo para você...
      </p>

      {/* Versículo */}
      {verse && (
        <div className="max-w-sm text-center mb-12 animate-slide-up">
          <p className="text-brand-white text-lg font-light italic leading-relaxed mb-3">
            &ldquo;{verse}&rdquo;
          </p>
          <p className="text-brand-red text-sm font-semibold tracking-wide">
            — {verseRef}
          </p>
        </div>
      )}

      {/* Progress bar */}
      <div className="w-full max-w-xs">
        <div className="h-[2px] w-full bg-brand-border rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-red rounded-full transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function CarregandoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-dvh bg-brand-bg flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-brand-red border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <LoadingContent />
    </Suspense>
  );
}
