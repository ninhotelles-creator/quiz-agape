import { createAdminClient } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

async function getMetrics() {
  const supabase = createAdminClient();

  const [totalResult, todayResult, topBooksResult, byProfileResult, booksCountResult] = await Promise.all([
    supabase.from("click_events").select("id", { count: "exact", head: true }),
    supabase.from("click_events")
      .select("id", { count: "exact", head: true })
      .gte("created_at", new Date(new Date().setHours(0, 0, 0, 0)).toISOString()),
    supabase.from("click_events")
      .select("book_title, author, book_id")
      .not("book_title", "is", null)
      .order("created_at", { ascending: false })
      .limit(200),
    supabase.from("click_events")
      .select("profile")
      .not("profile", "is", null),
    supabase.from("books").select("id", { count: "exact", head: true }),
  ]);

  // Count top books
  const bookCounts: Record<string, { title: string; author: string; count: number }> = {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  for (const row of ((topBooksResult.data || []) as any[])) {
    const key = row.book_id || row.book_title || "unknown";
    if (!bookCounts[key]) {
      bookCounts[key] = { title: row.book_title, author: row.author, count: 0 };
    }
    bookCounts[key].count++;
  }
  const topBooks = Object.values(bookCounts)
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  // Count by profile
  const profileCounts: Record<string, number> = {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  for (const row of ((byProfileResult.data || []) as any[])) {
    const p = row.profile as string;
    profileCounts[p] = (profileCounts[p] || 0) + 1;
  }

  return {
    total: totalResult.count ?? 0,
    today: todayResult.count ?? 0,
    booksTotal: booksCountResult.count ?? 0,
    topBooks,
    profileCounts,
  };
}

const PROFILE_LABELS: Record<string, string> = {
  "homem-adulto": "Homem Adulto",
  "mulher-adulta": "Mulher Adulta",
  "homem-jovem": "Homem Jovem",
  "mulher-jovem": "Mulher Jovem",
};

export default async function DashboardPage() {
  const { total, today, booksTotal, topBooks, profileCounts } = await getMetrics();

  return (
    <div>
      <h1 className="text-brand-white text-2xl font-bold mb-8">Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <MetricCard label="Cliques totais" value={total} />
        <MetricCard label="Hoje" value={today} />
        <MetricCard label="Livros no catálogo" value={booksTotal} />
        <MetricCard label="Conversão estimada" value={total > 0 ? `${((today / total) * 100).toFixed(0)}%` : "—"} />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top Books */}
        <div className="bg-brand-card border border-brand-border rounded-xl p-6">
          <h2 className="text-brand-white font-bold mb-4">Livros mais indicados (cliques)</h2>
          {topBooks.length === 0 ? (
            <p className="text-brand-muted text-sm">Nenhum dado ainda.</p>
          ) : (
            <div className="space-y-3">
              {topBooks.map((book, i) => (
                <div key={book.title} className="flex items-center gap-3">
                  <span className="text-brand-muted text-xs font-bold w-5 text-right">{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-brand-white text-sm font-medium truncate">{book.title}</p>
                    <p className="text-brand-muted text-xs truncate">{book.author}</p>
                  </div>
                  <span className="text-brand-red font-bold text-sm shrink-0">{book.count}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* By Profile */}
        <div className="bg-brand-card border border-brand-border rounded-xl p-6">
          <h2 className="text-brand-white font-bold mb-4">Cliques por perfil</h2>
          {Object.keys(profileCounts).length === 0 ? (
            <p className="text-brand-muted text-sm">Nenhum dado ainda.</p>
          ) : (
            <div className="space-y-3">
              {Object.entries(profileCounts)
                .sort(([, a], [, b]) => b - a)
                .map(([profile, count]) => {
                  const max = Math.max(...Object.values(profileCounts));
                  return (
                    <div key={profile}>
                      <div className="flex justify-between mb-1">
                        <span className="text-brand-white text-sm">
                          {PROFILE_LABELS[profile] || profile}
                        </span>
                        <span className="text-brand-red font-bold text-sm">{count}</span>
                      </div>
                      <div className="h-1.5 bg-brand-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-brand-red rounded-full"
                          style={{ width: `${(count / max) * 100}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  label, value,
}: {
  label: string;
  value: number | string;
}) {
  return (
    <div className="bg-brand-card border border-brand-border rounded-xl p-5">
      <p className="text-brand-muted text-xs uppercase tracking-widest font-semibold mb-3">{label}</p>
      <p className="text-brand-white text-3xl font-bold">{value}</p>
    </div>
  );
}
