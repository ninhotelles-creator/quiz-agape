import Link from "next/link";
import AdminLogout from "./AdminLogout";

const NAV = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/livros", label: "Livros" },
  { href: "/admin/perguntas", label: "Perguntas" },
  { href: "/admin/marketing", label: "Marketing" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-brand-bg">
      {/* Top nav */}
      <nav className="bg-brand-card border-b border-brand-border sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
          <div className="flex items-center gap-1">
            <span className="text-brand-red font-bold text-xs uppercase tracking-widest mr-4">
              Ágape Admin
            </span>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  px-3 py-1.5 rounded-lg text-sm text-brand-muted
                  hover:text-brand-white hover:bg-brand-border
                  transition-colors
                "
              >
                {item.label}
              </Link>
            ))}
          </div>
          <AdminLogout />
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
