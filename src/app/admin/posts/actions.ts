"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

function normalizeSlug(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function createPost(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const slugInput = String(formData.get("slug") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();
  const coverImageUrl = String(formData.get("coverImageUrl") ?? "").trim();
  const categoryName = String(formData.get("categoryName") ?? "").trim();
  const isPublished = String(formData.get("isPublished") ?? "") === "on";

  if (!title || !excerpt || !content) {
    throw new Error("Title, excerpt and content are required.");
  }

  const slug = normalizeSlug(slugInput || title);
  if (!slug) throw new Error("Invalid slug.");

  let categoryId: string | undefined;
  if (categoryName) {
    const category = await prisma.category.upsert({
      where: { slug: normalizeSlug(categoryName) },
      update: { name: categoryName },
      create: { name: categoryName, slug: normalizeSlug(categoryName) },
    });
    categoryId = category.id;
  }

  await prisma.post.create({
    data: {
      title,
      slug,
      excerpt,
      content,
      coverImageUrl: coverImageUrl || null,
      categoryId,
      isPublished,
      publishedAt: isPublished ? new Date() : null,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/admin/posts");
  revalidatePath("/blog");
  redirect("/admin/posts");
}

export async function updatePost(postId: string, formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const slugInput = String(formData.get("slug") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();
  const coverImageUrl = String(formData.get("coverImageUrl") ?? "").trim();
  const categoryName = String(formData.get("categoryName") ?? "").trim();
  const isPublished = String(formData.get("isPublished") ?? "") === "on";

  if (!title || !excerpt || !content) {
    throw new Error("Title, excerpt and content are required.");
  }

  const slug = normalizeSlug(slugInput || title);
  if (!slug) throw new Error("Invalid slug.");

  let categoryId: string | null = null;
  if (categoryName) {
    const category = await prisma.category.upsert({
      where: { slug: normalizeSlug(categoryName) },
      update: { name: categoryName },
      create: { name: categoryName, slug: normalizeSlug(categoryName) },
    });
    categoryId = category.id;
  }

  await prisma.post.update({
    where: { id: postId },
    data: {
      title,
      slug,
      excerpt,
      content,
      coverImageUrl: coverImageUrl || null,
      categoryId,
      isPublished,
      publishedAt: isPublished ? new Date() : null,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/admin/posts");
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  redirect("/admin/posts");
}

export async function deletePost(formData: FormData) {
  const postId = String(formData.get("postId") ?? "");
  if (!postId) return;
  await prisma.post.delete({ where: { id: postId } });
  revalidatePath("/admin");
  revalidatePath("/admin/posts");
  revalidatePath("/blog");
}
