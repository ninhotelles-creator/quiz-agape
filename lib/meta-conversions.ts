import { createAdminClient } from "./supabase-admin";

interface MetaEventParams {
  event_name: string;
  event_id: string;
  event_source_url: string;
  user_data?: {
    client_ip_address?: string;
    client_user_agent?: string;
  };
}

export async function sendMetaConversionEvent(params: MetaEventParams): Promise<void> {
  try {
    const supabase = createAdminClient();
    const { data: rows } = await supabase
      .from("settings")
      .select("key, value")
      .in("key", ["pixel_id", "meta_access_token"]);

    const pixelId = rows?.find((r) => r.key === "pixel_id")?.value;
    const accessToken = rows?.find((r) => r.key === "meta_access_token")?.value;

    if (!pixelId || !accessToken) return;

    const res = await fetch(`https://graph.facebook.com/v18.0/${pixelId}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: [
          {
            event_name: params.event_name,
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website",
            event_source_url: params.event_source_url,
            event_id: params.event_id,
            user_data: params.user_data ?? {},
          },
        ],
        access_token: accessToken,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`[meta-conversions] ${params.event_name} error:`, body);
    }
  } catch (err) {
    console.error("[meta-conversions] unexpected error:", err);
  }
}
