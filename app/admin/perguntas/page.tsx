import { createAdminClient } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";
import PerguntasClient from "./PerguntasClient";

export default async function PerguntasPage() {
  const supabase = createAdminClient();
  const { data: themes } = await supabase
    .from("themes")
    .select("*")
    .order("profile")
    .order("order_index");

  const { data: filters } = await supabase
    .from("filters")
    .select("*")
    .order("order_index");

  const { data: results } = await supabase
    .from("results")
    .select("*, book:books(title, author)")
    .order("order_index");

  return (
    <PerguntasClient
      themes={themes || []}
      filters={filters || []}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      results={(results || []) as any[]}
    />
  );
}
