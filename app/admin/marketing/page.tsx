import { createAdminClient } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";
import MarketingClient from "./MarketingClient";

export default async function MarketingPage() {
  const supabase = createAdminClient();
  const { data: settings } = await supabase.from("settings").select("*");

  const settingsMap = Object.fromEntries(
    (settings || []).map((s) => [s.key, s.value])
  );

  return <MarketingClient settings={settingsMap} />;
}
