import Link from "next/link";
import { createPost } from "@/app/admin/posts/actions";

export default function NewPostPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Create post</h1>
        <Link href="/admin/posts" className="rounded-xl border border-white/20 px-4 py-2 hover:bg-white/10">
          Back
        </Link>
      </div>

      <form action={createPost} className="space-y-4">
        <input name="title" placeholder="Title" required className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3" />
        <input name="slug" placeholder="Slug (optional)" className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3" />
        <input name="categoryName" placeholder="Category (optional)" className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3" />
        <input name="coverImageUrl" placeholder="Cloudinary image URL (optional)" className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3" />
        <textarea name="excerpt" placeholder="Excerpt" required rows={3} className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3" />
        <textarea name="content" placeholder="Content" required rows={12} className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3" />
        <label className="flex items-center gap-2">
          <input type="checkbox" name="isPublished" />
          <span>Publish now</span>
        </label>
        <button type="submit" className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 font-medium">
          Save post
        </button>
      </form>
    </div>
  );
}
