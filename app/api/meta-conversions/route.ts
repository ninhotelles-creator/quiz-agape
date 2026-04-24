import { NextRequest, NextResponse } from "next/server";
import { sendMetaConversionEvent } from "@/lib/meta-conversions";

export async function POST(req: NextRequest) {
  try {
    const { event_name, event_id, event_source_url } = await req.json();

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || undefined;
    const userAgent = req.headers.get("user-agent") || undefined;

    await sendMetaConversionEvent({
      event_name,
      event_id,
      event_source_url,
      user_data: { client_ip_address: ip, client_user_agent: userAgent },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[meta-conversions route]", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
