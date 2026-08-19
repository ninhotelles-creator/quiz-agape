import { createAdminClient } from "@/lib/supabase-admin";
import { notFound } from "next/navigation";
import ResultClient from "./ResultClient";

export const dynamic = "force-dynamic";

interface PageProps {
  params: { id: string };
  searchParams: { v?: string };
}

export default async function ResultadoPage({ params, searchParams }: PageProps) {
  const supabase = createAdminClient();
  const { data: book } = await supabase
    .from("books")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!book) notFound();

  const { data: settings } = await supabase
    .from("settings")
    .select("key, value")
    .in("key", ["whatsapp_number", "whatsapp_message", "whatsapp_vendedores"]);

  let whatsapp = settings?.find((s) => s.key === "whatsapp_number")?.value || "5582988782681";
  const message = settings?.find((s) => s.key === "whatsapp_message")?.value ||
    "Olá! Fiz o quiz da Livraria Ágape e recebi a indicação do livro: [NOME DO LIVRO] de [AUTOR]. Gostaria de saber mais!";

  console.log("[DEBUG] searchParams.v =", JSON.stringify(searchParams.v));
  console.log("[DEBUG] settings rows =", JSON.stringify(settings));

  if (searchParams.v) {
    const vendedoresRaw = settings?.find((s) => s.key === "whatsapp_vendedores")?.value;
    console.log("[DEBUG] vendedoresRaw =", JSON.stringify(vendedoresRaw));
    try {
      const vendedores: { slug: string; numero: string }[] = vendedoresRaw ? JSON.parse(vendedoresRaw) : [];
      console.log("[DEBUG] vendedores parsed =", JSON.stringify(vendedores));
      const match = vendedores.find((v) => v.slug === searchParams.v);
      console.log("[DEBUG] match =", JSON.stringify(match));
      if (match?.numero) whatsapp = match.numero;
    } catch (e) {
      console.log("[DEBUG] catch error =", String(e));
    }
  }

  const finalMessage = message
    .replace("[NOME DO LIVRO]", book.title)
    .replace("[AUTOR]", book.author);

  const whatsappDigits = whatsapp.replace(/\D/g, "");
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappDigits}&text=${encodeURIComponent(finalMessage)}`;

  return (
    <ResultClient
      book={book}
      whatsappUrl={whatsappUrl}
    />
  );
}
