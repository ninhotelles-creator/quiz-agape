"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Book } from "@/lib/types";
import { trackPixelEvent } from "@/components/MetaPixel";

const LOGO_URL = "https://i.imgur.com/zD8tLjj.png";

interface ResultClientProps {
  book: Book;
  whatsappUrl: string;
}

export default function ResultClient({ book, whatsappUrl }: ResultClientProps) {
  const [profile, setProfile] = useState("");
  const [themeCode, setThemeCode] = useState("");
  const [tracked, setTracked] = useState(false);

  useEffect(() => {
    setProfile(sessionStorage.getItem("quiz_profile") || "");
    setThemeCode(sessionStorage.getItem("quiz_theme_code") || "");
  }, []);

  const handleWhatsApp = async () => {
    if (!tracked) {
      setTracked(true);
      trackPixelEvent("Lead", { content_name: book.title, content_category: "book_quiz" });

      try {
        await fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            book_id: book.id,
            book_title: book.title,
            author: book.author,
            profile,
            theme_code: themeCode,
          }),
        });
      } catch {}
    }
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-dvh bg-brand-bg flex flex-col">
      {/* Header */}
      <header className="px-5 pt-8 pb-4">
        <div className="max-w-lg mx-auto">
          <Image
            src={LOGO_URL}
            alt="Livraria Ágape"
            width={200}
            height={60}
            className="object-contain"
            priority
          />
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 px-5 py-6">
        <div className="max-w-lg mx-auto">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6 animate-fade-in">
            <div className="h-px flex-1 bg-brand-border" />
            <span className="text-brand-muted text-xs uppercase tracking-widest font-semibold px-3">
              Sua indicação personalizada
            </span>
            <div className="h-px flex-1 bg-brand-border" />
          </div>

          {/* Book Card */}
          <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden mb-6 animate-slide-up">
            {/* Cover */}
            <div className="relative w-full bg-[#1a1a19] flex items-center justify-center"
              style={{ minHeight: "280px" }}>
              {book.cover_url ? (
                <Image
                  src={book.cover_url}
                  alt={`Capa de ${book.title}`}
                  fill
                  className="object-contain p-4"
                  priority
                />
              ) : (
                <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
                  <span className="text-6xl mb-4">📚</span>
                  <p className="text-brand-muted text-xs">Capa indisponível</p>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-6">
              <p className="text-brand-red text-xs uppercase tracking-widest font-semibold mb-2">
                Livro indicado
              </p>
              <h1 className="text-brand-white text-2xl font-bold leading-tight mb-2">
                {book.title}
              </h1>
              <p className="text-brand-muted text-base">
                {book.author}
              </p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <button
            onClick={handleWhatsApp}
            className="
              w-full py-4 rounded-xl
              bg-brand-red hover:bg-[#c72522]
              text-white font-bold text-base
              flex items-center justify-center gap-3
              transition-all duration-200
              active:scale-[0.98]
              animate-slide-up
              shadow-lg shadow-brand-red/20
            "
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.098.541 4.07 1.491 5.792L.057 23.093c-.07.275.02.568.236.755.162.138.368.209.579.209.063 0 .127-.007.19-.023l5.532-1.391A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.82 9.82 0 01-4.997-1.364l-.358-.213-3.278.824.84-3.17-.234-.374A9.82 9.82 0 012.182 12C2.182 6.556 6.556 2.182 12 2.182S21.818 6.556 21.818 12 17.444 21.818 12 21.818z"/>
            </svg>
            Quero saber mais sobre este livro
          </button>

          {/* Restart */}
          <div className="mt-6 text-center animate-fade-in">
            <Link
              href="/"
              className="text-brand-muted text-sm hover:text-brand-white transition-colors underline underline-offset-4"
            >
              Refazer o quiz
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-5 pb-8 pt-4">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-brand-muted text-xs">
            Quiz de curadoria personalizada · Livraria Ágape
          </p>
        </div>
      </footer>
    </div>
  );
}
