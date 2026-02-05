import { SiteLayout } from "@/components/retro/site-layout"
import { RetroWindow } from "@/components/retro/retro-window"
import { getForumCategory } from "@/lib/queries"
import Link from "next/link"
import { ArrowLeft, MessageSquare, Pin, Lock, Eye, PenLine } from "lucide-react"
import { cn } from "@/lib/utils"
import { notFound } from "next/navigation"

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>
}

export default async function ForumCategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = await params

  const category = await getForumCategory(categoryId)

  if (!category) {
    notFound()
  }

  return (
    <SiteLayout>
      <div className="p-4 lg:p-8 max-w-5xl mx-auto">
        {/* Back navigation */}
        <Link
          href="/forum"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-[family-name:var(--font-pixel)]">{"<< back to forum"}</span>
        </Link>

        {/* New Thread Button */}
        <div className="flex justify-end mb-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded font-[family-name:var(--font-pixel)] text-sm hover:bg-primary/90 transition-colors">
            <PenLine className="w-4 h-4" />
            New Thread
          </button>
        </div>

        {/* Thread List */}
        <RetroWindow title={`${category.name.toLowerCase().replace(/\s+/g, "_")}.dir`}>
          {/* Table Header */}
          <div className="hidden lg:grid grid-cols-12 gap-4 pb-3 mb-3 border-b border-border text-xs font-[family-name:var(--font-pixel)] text-muted-foreground">
            <div className="col-span-6">Topic</div>
            <div className="col-span-2">Author</div>
            <div className="col-span-1 text-center">Replies</div>
            <div className="col-span-1 text-center">Views</div>
            <div className="col-span-2 text-right">Last Post</div>
          </div>

          {/* Threads */}
          <ul className="space-y-2">
            {category.threads.map((thread) => (
              <li key={thread.id}>
                <Link
                  href={`/forum/${categoryId}/${thread.slug}`}
                  className={cn(
                    "block lg:grid lg:grid-cols-12 gap-4 p-3 -mx-3 rounded transition-colors",
                    "hover:bg-secondary/50 group",
                    thread.isPinned && "bg-secondary/30"
                  )}
                >
                  {/* Topic */}
                  <div className="lg:col-span-6 flex items-start gap-2">
                    <div className="flex items-center gap-1 shrink-0 mt-0.5">
                      {thread.isPinned && (
                        <Pin className="w-3.5 h-3.5 text-[hsl(45_100%_60%)]" aria-label="Pinned" />
                      )}
                      {thread.isLocked && (
                        <Lock className="w-3.5 h-3.5 text-muted-foreground" aria-label="Locked" />
                      )}
                      <MessageSquare className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span
                      className={cn(
                        "group-hover:text-primary transition-colors",
                        thread.isPinned ? "text-[hsl(45_100%_60%)] font-medium" : "text-foreground"
                      )}
                    >
                      {thread.title}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="lg:col-span-2 text-sm text-primary mt-1 lg:mt-0">
                    {thread.author}
                  </div>

                  {/* Mobile Stats */}
                  <div className="lg:hidden flex items-center gap-4 text-xs text-muted-foreground mt-2">
                    <span>{thread.replyCount} replies</span>
                    <span>{thread.views} views</span>
                    <span>{thread.lastActivity}</span>
                  </div>

                  {/* Desktop Stats */}
                  <div className="hidden lg:block lg:col-span-1 text-sm text-center text-muted-foreground">
                    {thread.replyCount}
                  </div>
                  <div className="hidden lg:flex lg:col-span-1 items-center justify-center gap-1 text-sm text-muted-foreground">
                    <Eye className="w-3 h-3" />
                    {thread.views}
                  </div>
                  <div className="hidden lg:block lg:col-span-2 text-right text-xs font-[family-name:var(--font-pixel)] text-muted-foreground">
                    {thread.lastActivity}
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {category.threads.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <p className="font-[family-name:var(--font-pixel)]">{">> No threads yet"}</p>
              <p className="text-sm mt-2">Be the first to start a discussion!</p>
            </div>
          )}
        </RetroWindow>

        {/* Pagination */}
        <div className="mt-6 flex justify-center">
          <div className="flex items-center gap-2 font-[family-name:var(--font-pixel)] text-sm">
            <span className="text-muted-foreground">Page:</span>
            <button className="px-2 py-1 bg-primary text-primary-foreground rounded">1</button>
            <button className="px-2 py-1 text-muted-foreground hover:text-foreground">2</button>
            <button className="px-2 py-1 text-muted-foreground hover:text-foreground">3</button>
            <span className="text-muted-foreground">...</span>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}
