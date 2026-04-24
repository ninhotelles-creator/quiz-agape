import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { createAdminClient } from "@/lib/supabase-admin";
import { sendMetaConversionEvent } from "@/lib/meta-conversions";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { book_id, book_title, author, profile, theme_code, event_id, event_source_url } = body;

    const supabase = createAdminClient();
    const { error } = await supabase.from("click_events").insert({
      book_id: book_id || null,
      book_title: book_title || null,
      author: author || null,
      profile: profile || null,
      theme_code: theme_code || null,
    });

    if (error) {
      console.error("[track] supabase insert error:", error.message);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || undefined;
    const userAgent = req.headers.get("user-agent") || undefined;

    await sendMetaConversionEvent({
      event_name: "Lead",
      event_id: event_id || randomUUID(),
      event_source_url: event_source_url || "",
      user_data: { client_ip_address: ip, client_user_agent: userAgent },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[track] unexpected error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
