import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { book_id, book_title, author, profile, theme_code } = body;

    const supabase = createAdminClient();
    await supabase.from("click_events").insert({
      book_id: book_id || null,
      book_title: book_title || null,
      author: author || null,
      profile: profile || null,
      theme_code: theme_code || null,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
