import Link from "next/link";

export const dynamic = "force-dynamic";

const adminLinks = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/posts", label: "Posts" },
  { href: "/dashboard", label: "Finance Dashboard" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white">
      <div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 gap-6 p-6 lg:grid-cols-[240px_1fr]">
        <aside className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2 className="mb-6 text-lg font-semibold">Admin Panel</h2>
          <nav className="space-y-2">
            {adminLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block rounded-xl px-3 py-2 text-gray-200 hover:bg-white/10">
                {link.label}
              </Link>
            ))}
          </nav>
          <form action="/api/auth/logout" method="post" className="mt-8">
            <button type="submit" className="w-full rounded-xl border border-white/20 px-3 py-2 text-sm hover:bg-white/10">
              Sign out
            </button>
          </form>
        </aside>
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">{children}</section>
      </div>
    </div>
  );
}
