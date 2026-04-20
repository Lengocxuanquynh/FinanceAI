import type { Metadata } from "next";
import Link from "next/link";
import { seoSeedPosts } from "@/lib/seo-posts";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Finance Blog",
  description: "Actionable finance insights, AI budgeting guides, and portfolio optimization tutorials.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">FinanceAI Blog</p>
          <h1 className="text-4xl font-bold">SEO Content Hub</h1>
          <p className="max-w-3xl text-gray-400">
            Cluster-based content structure to capture high-intent search traffic and convert readers to
            product users.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {seoSeedPosts.map((post) => (
            <article key={post.slug} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="mb-2 text-sm text-gray-400">{post.publishedAt}</p>
              <h2 className="mb-3 text-2xl font-semibold">{post.title}</h2>
              <p className="mb-4 text-gray-300">{post.excerpt}</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {post.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-200">
                    {keyword}
                  </span>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`} className="text-cyan-300 hover:text-cyan-200">
                Read article &rarr;
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
