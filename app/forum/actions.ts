"use server"

import { auth, currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { db } from '@/lib/db'

// --- Schemas ---

const createThreadSchema = z.object({
  title: z.string().trim().min(3, "Title must be at least 3 characters").max(200, "Title is too long"),
  content: z.string().trim().min(1, "Post content is required").max(10000, "Post is too long"),
  categorySlug: z.string().min(1),
})

const createReplySchema = z.object({
  content: z.string().trim().min(1, "Reply content is required").max(10000, "Reply is too long"),
  threadId: z.string().min(1),
})

// --- Result types ---

export type CreateThreadResult =
  | { success: true; threadSlug: string; categorySlug: string }
  | { success: false; error: string }

export type CreateReplyResult =
  | { success: true }
  | { success: false; error: string }

export type LikePostResult =
  | { success: true; newLikeCount: number }
  | { success: false; error: string }

// --- Slug helper ---

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
}

// --- Actions ---

export async function createForumThread(formData: FormData): Promise<CreateThreadResult> {
  const { userId } = await auth()
  if (!userId) {
    return { success: false, error: "You must be signed in to create a thread" }
  }

  const user = await currentUser()
  const displayName = user?.firstName ?? user?.username ?? "Anonymous"

  const raw = {
    title: formData.get("title"),
    content: formData.get("content"),
    categorySlug: formData.get("categorySlug"),
  }

  const parsed = createThreadSchema.safeParse(raw)
  if (!parsed.success) {
    const firstError = parsed.error.errors[0]?.message ?? "Invalid input"
    return { success: false, error: firstError }
  }

  const category = await db.forumCategory.findUnique({
    where: { slug: parsed.data.categorySlug },
  })
  if (!category) {
    return { success: false, error: "Category not found" }
  }

  const baseSlug = slugify(parsed.data.title)
  const slug = `${baseSlug}-${Date.now().toString(36)}`

  await db.$transaction(async (tx) => {
    const thread = await tx.forumThread.create({
      data: {
        slug,
        title: parsed.data.title,
        categoryId: category.id,
        clerkUserId: userId,
        authorName: displayName,
      },
    })

    await tx.forumPost.create({
      data: {
        threadId: thread.id,
        clerkUserId: userId,
        authorName: displayName,
        content: parsed.data.content,
      },
    })
  })

  revalidatePath(`/forum/${parsed.data.categorySlug}`)
  revalidatePath('/forum')

  return { success: true, threadSlug: slug, categorySlug: parsed.data.categorySlug }
}

export async function createForumReply(formData: FormData): Promise<CreateReplyResult> {
  const { userId } = await auth()
  if (!userId) {
    return { success: false, error: "You must be signed in to reply" }
  }

  const user = await currentUser()
  const displayName = user?.firstName ?? user?.username ?? "Anonymous"

  const raw = {
    content: formData.get("content"),
    threadId: formData.get("threadId"),
  }

  const parsed = createReplySchema.safeParse(raw)
  if (!parsed.success) {
    const firstError = parsed.error.errors[0]?.message ?? "Invalid input"
    return { success: false, error: firstError }
  }

  const thread = await db.forumThread.findUnique({
    where: { id: parsed.data.threadId },
    include: { category: true },
  })
  if (!thread) {
    return { success: false, error: "Thread not found" }
  }
  if (thread.isLocked) {
    return { success: false, error: "This thread is locked" }
  }

  await db.$transaction(async (tx) => {
    await tx.forumPost.create({
      data: {
        threadId: thread.id,
        clerkUserId: userId,
        authorName: displayName,
        content: parsed.data.content,
      },
    })

    await tx.forumThread.update({
      where: { id: thread.id },
      data: { updatedAt: new Date() },
    })
  })

  revalidatePath(`/forum/${thread.category.slug}/${thread.slug}`)
  revalidatePath(`/forum/${thread.category.slug}`)
  revalidatePath('/forum')

  return { success: true }
}

export async function likeForumPost(postId: string): Promise<LikePostResult> {
  const { userId } = await auth()
  if (!userId) {
    return { success: false, error: "You must be signed in to like a post" }
  }

  const post = await db.forumPost.findUnique({
    where: { id: postId },
    include: { thread: { include: { category: true } } },
  })
  if (!post) {
    return { success: false, error: "Post not found" }
  }

  const updated = await db.forumPost.update({
    where: { id: postId },
    data: { likes: { increment: 1 } },
  })

  revalidatePath(`/forum/${post.thread.category.slug}/${post.thread.slug}`)

  return { success: true, newLikeCount: updated.likes }
}
