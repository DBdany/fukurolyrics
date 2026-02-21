export const dynamic = "force-dynamic"

import { SiteLayout } from "@/components/retro/site-layout"
import { RetroWindow } from "@/components/retro/retro-window"
import { getForumThread, getForumCategory } from "@/lib/queries"
import Link from "next/link"
import { Pin, Lock } from "lucide-react"
import { notFound } from "next/navigation"
import { ForumReplyComposer } from "@/components/forum-reply-composer"
import { ForumPostActions } from "@/components/forum-post-actions"
import { BackToTop } from "@/components/back-to-top"

interface ThreadPageProps {
  params: Promise<{ categoryId: string; threadId: string }>
}

export default async function ForumThreadPage({ params }: ThreadPageProps) {
  const { categoryId, threadId } = await params

  const category = await getForumCategory(categoryId)
  const thread = await getForumThread(threadId)

  if (!category || !thread) {
    notFound()
  }

  return (
    <SiteLayout>
      <div className="p-4 lg:p-8 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
          <Link href="/forum" className="hover:text-primary transition-colors">
            Forum
          </Link>
          <span>{">"}</span>
          <Link href={`/forum/${categoryId}`} className="hover:text-primary transition-colors">
            {category.name}
          </Link>
          <span>{">"}</span>
          <span className="text-foreground truncate">{thread.title}</span>
        </nav>

        {/* Thread Header */}
        <header className="mb-6">
          <RetroWindow variant="ornate" className="py-4">
            <div className="flex items-start gap-3">
              <div className="flex items-center gap-1 shrink-0 mt-1">
                {thread.isPinned && <Pin className="w-4 h-4 text-[hsl(45_100%_60%)]" />}
                {thread.isLocked && <Lock className="w-4 h-4 text-muted-foreground" />}
              </div>
              <div className="flex-1">
                <h1 className="font-[family-name:var(--font-pixel)] text-xl lg:text-2xl text-primary glow-pink mb-2">
                  {thread.title}
                </h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-[family-name:var(--font-pixel)] text-muted-foreground">
                  <span>
                    Started by <span className="text-accent">{thread.author}</span>
                  </span>
                  <span>on {thread.createdAt}</span>
                  <span>{thread.replyCount} replies</span>
                  <span>{thread.views} views</span>
                </div>
              </div>
            </div>
          </RetroWindow>
        </header>

        {/* Posts */}
        <div className="space-y-4">
          {thread.posts.map((post, index) => (
            <RetroWindow key={post.id}>
              <article className="space-y-4">
                {/* Post Header */}
                <div className="flex items-start justify-between gap-4 pb-3 border-b border-border">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded bg-secondary border border-border flex items-center justify-center">
                      <span className="font-[family-name:var(--font-pixel)] text-lg text-primary">
                        {post.author.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-pixel)] text-primary">{post.author}</p>
                      <p className="text-xs text-muted-foreground">{post.createdAt}</p>
                    </div>
                  </div>
                  <span className="text-xs font-[family-name:var(--font-pixel)] text-muted-foreground">
                    #{index + 1}
                  </span>
                </div>

                {/* Post Content */}
                <div className="text-foreground/90 leading-relaxed whitespace-pre-wrap">
                  {post.content}
                </div>

                {/* Post Footer */}
                <ForumPostActions postId={post.id} initialLikes={post.likes} />
              </article>
            </RetroWindow>
          ))}
        </div>

        {/* Reply Composer */}
        {!thread.isLocked && (
          <div className="mt-8">
            <ForumReplyComposer threadId={thread.id} />
          </div>
        )}

        {thread.isLocked && (
          <div className="mt-8 text-center">
            <p className="font-[family-name:var(--font-pixel)] text-sm text-muted-foreground">
              <Lock className="w-4 h-4 inline mr-2" />
              This thread is locked. No new replies can be posted.
            </p>
          </div>
        )}

        {/* Back to top */}
        <div className="mt-8 text-center">
          <BackToTop />
        </div>
      </div>
    </SiteLayout>
  )
}
