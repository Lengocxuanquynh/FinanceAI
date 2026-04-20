import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const [totalPosts, publishedPosts, categories] = await Promise.all([
    prisma.post.count(),
    prisma.post.count({ where: { isPublished: true } }),
    prisma.category.count(),
  ]);

  return (
    <div>
      <h1 className="mb-6 text-3xl font-semibold">Admin overview</h1>
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-black/20 p-5">
          <p className="text-sm text-gray-400">Total posts</p>
          <p className="mt-2 text-3xl font-semibold">{totalPosts}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/20 p-5">
          <p className="text-sm text-gray-400">Published posts</p>
          <p className="mt-2 text-3xl font-semibold">{publishedPosts}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/20 p-5">
          <p className="text-sm text-gray-400">Categories</p>
          <p className="mt-2 text-3xl font-semibold">{categories}</p>
        </div>
      </div>
      <Link href="/admin/posts/new" className="inline-flex rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 font-medium">
        Create new post
      </Link>
    </div>
  );
}
