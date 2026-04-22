import type { Metadata } from "next";

export const dynamic = "force-dynamic";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";
import { createAdminClient } from "@/lib/supabase-admin";

export const metadata: Metadata = {
  title: "Quiz de Curadoria de Livros — Livraria Ágape",
  description: "Descubra qual livro cristão foi feito para você. Responda o quiz e receba uma indicação personalizada da Livraria Ágape.",
};

async function getPixelId(): Promise<string | null> {
  try {
    const supabase = createAdminClient();
    const { data } = await supabase
      .from("settings")
      .select("value")
      .eq("key", "pixel_id")
      .single();
    return data?.value || null;
  } catch {
    return null;
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pixelId = await getPixelId();

  return (
    <html lang="pt-BR">
      <body className="bg-brand-bg min-h-dvh">
        {pixelId && <MetaPixel pixelId={pixelId} />}
        {children}
      </body>
    </html>
  );
}
