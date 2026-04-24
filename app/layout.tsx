import type { Metadata } from "next";
import "./globals.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Quiz de Curadoria de Livros — Livraria Ágape",
  description: "Descubra qual livro cristão foi feito para você. Responda o quiz e receba uma indicação personalizada da Livraria Ágape.",
};

// Pixel ID hardcoded temporariamente para testar injeção do script.
// Se o pixel aparecer no Meta Pixel Helper, o problema era na busca do Supabase.
// Após confirmar, restaurar a busca dinâmica.
const PIXEL_ID = "965219096476416";

// PageView é disparado pelo QuizContainer com event_id para deduplicação com a Conversions API.
const pixelScript = `
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '${PIXEL_ID}');
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script dangerouslySetInnerHTML={{ __html: pixelScript }} />
      </head>
      <body className="bg-brand-bg min-h-dvh">
        {children}
      </body>
    </html>
  );
}
