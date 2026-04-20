import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { updatePost } from "@/app/admin/posts/actions";

type EditPostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditPostPage({ params }: EditPostPageProps) {
  const { id } = await params;
  const post = await prisma.post.findUnique({
    where: { id },
    include: { category: true },
  });

  if (!post) notFound();

  const updateWithId = updatePost.bind(null, post.id);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Edit post</h1>
        <Link href="/admin/posts" className="rounded-xl border border-white/20 px-4 py-2 hover:bg-white/10">
          Back
        </Link>
      </div>

      <form action={updateWithId} className="space-y-4">
        <input defaultValue={post.title} name="title" placeholder="Title" required className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3" />
        <input defaultValue={post.slug} name="slug" placeholder="Slug" className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3" />
        <input defaultValue={post.category?.name ?? ""} name="categoryName" placeholder="Category" className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3" />
        <input defaultValue={post.coverImageUrl ?? ""} name="coverImageUrl" placeholder="Cloudinary image URL" className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3" />
        <textarea defaultValue={post.excerpt} name="excerpt" placeholder="Excerpt" required rows={3} className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3" />
        <textarea defaultValue={post.content} name="content" placeholder="Content" required rows={12} className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3" />
        <label className="flex items-center gap-2">
          <input type="checkbox" name="isPublished" defaultChecked={post.isPublished} />
          <span>Published</span>
        </label>
        <button type="submit" className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 font-medium">
          Update post
        </button>
      </form>
    </div>
  );
}
