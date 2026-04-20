import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deletePost } from "@/app/admin/posts/actions";

export default async function AdminPostsPage() {
  const posts = await prisma.post.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Manage posts</h1>
        <Link href="/admin/posts/new" className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 font-medium">
          New post
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/10 text-gray-300">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Slug</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post: any) => (
              <tr key={post.id} className="border-t border-white/10">
                <td className="px-4 py-3">{post.title}</td>
                <td className="px-4 py-3 text-gray-300">{post.slug}</td>
                <td className="px-4 py-3">
                  <span className={post.isPublished ? "text-emerald-300" : "text-yellow-300"}>
                    {post.isPublished ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-300">{post.category?.name ?? "-"}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <Link href={`/admin/posts/${post.id}/edit`} className="rounded-lg border border-white/20 px-3 py-1 hover:bg-white/10">
                      Edit
                    </Link>
                    <form action={deletePost}>
                      <input type="hidden" name="postId" value={post.id} />
                      <button type="submit" className="rounded-lg border border-red-400/30 px-3 py-1 text-red-200 hover:bg-red-500/15">
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {posts.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-gray-400">
                  No posts yet. Create your first one.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
