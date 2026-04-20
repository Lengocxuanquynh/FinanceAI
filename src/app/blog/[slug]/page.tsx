import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { seoSeedPosts } from "@/lib/seo-posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600;

export function generateStaticParams() {
  return seoSeedPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = seoSeedPosts.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = seoSeedPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "FinanceAI Editorial Team",
    },
  };

  return (
    <main className="min-h-screen bg-[#0B0F1A] px-6 py-16 text-white">
      <article className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <p className="text-sm text-gray-400">{post.publishedAt}</p>
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="text-lg text-gray-300">{post.excerpt}</p>
        </header>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 leading-8 text-gray-200">
          <p>{post.content}</p>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </main>
  );
}
