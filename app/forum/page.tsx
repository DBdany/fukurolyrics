export const dynamic = "force-dynamic"

import { SiteLayout } from "@/components/retro/site-layout"
import { RetroWindow } from "@/components/retro/retro-window"
import { getForumCategories } from "@/lib/queries"
import { db } from "@/lib/db"
import Link from "next/link"
import { MessageSquare, FolderOpen, Pin, Lock, Users } from "lucide-react"
import { cn } from "@/lib/utils"

export default async function ForumPage() {
  const forumCategories = await getForumCategories()

  // Get latest threads for recent activity
  const latestThreads = await db.forumThread.findMany({
    include: {
      category: true,
      posts: true,
    },
    orderBy: { updatedAt: 'desc' },
    take: 5,
  })

  // Get stats
  const memberCount = await db.member.count()
  const totalPosts = await db.forumPost.count()
  const totalThreads = await db.forumThread.count()

  return (
    <SiteLayout>
      <div className="p-4 lg:p-8 max-w-5xl mx-auto">
        {/* Forum Stats Bar */}
        <RetroWindow className="mb-6">
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8 text-xs font-[family-name:var(--font-pixel)]">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Members:</span>
              <span className="text-foreground">{memberCount}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">Total Posts:</span>
              <span className="text-foreground">{totalPosts.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <FolderOpen className="w-4 h-4 text-[hsl(45_100%_60%)]" />
              <span className="text-muted-foreground">Threads:</span>
              <span className="text-foreground">{totalThreads}</span>
            </div>
          </div>
        </RetroWindow>

        {/* Forum Rules */}
        <RetroWindow title="rules.txt" className="mb-6">
          <p className="text-sm text-foreground/80 leading-relaxed">
            hey, just be normal. don&apos;t hotlink stuff, don&apos;t spam, be chill with each other.
            if you&apos;re here you probably already get it. spam gets you banned, everything else
            is usually fine.
          </p>
        </RetroWindow>

        {/* Categories */}
        <div className="space-y-4">
          {forumCategories.map((category) => {
            return (
              <RetroWindow key={category.id}>
                <Link href={`/forum/${category.slug}`} className="block group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 bg-secondary rounded flex items-center justify-center">
                      <FolderOpen className="w-6 h-6 text-[hsl(45_100%_60%)] group-hover:text-primary transition-colors" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 mb-1">
                        <h2 className="font-[family-name:var(--font-pixel)] text-lg text-foreground group-hover:text-primary transition-colors">
                          {category.name}
                        </h2>
                        {category.nameJp && (
                          <span className="font-[family-name:var(--font-jp)] text-xs text-muted-foreground">
                            {category.nameJp}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {category.description}
                      </p>
                    </div>

                    <div className="hidden sm:flex flex-col items-end gap-1 text-xs font-[family-name:var(--font-pixel)]">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <span>{category.threadCount}</span>
                        <span>threads</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <span>{category.postCount}</span>
                        <span>posts</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </RetroWindow>
            )
          })}
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <RetroWindow title="recent_activity.log">
            <div className="text-xs font-[family-name:var(--font-pixel)] text-muted-foreground mb-4">
              {">> Latest threads across all categories"}
            </div>
            {latestThreads.length === 0 && (
              <div className="text-center py-4 text-muted-foreground font-[family-name:var(--font-pixel)] text-sm">
                {">> No threads yet. Be the first to start a discussion!"}
              </div>
            )}
            <ul className="space-y-3">
              {latestThreads.map((thread) => {
                return (
                  <li key={thread.id}>
                    <Link
                      href={`/forum/${thread.category.slug}/${thread.slug}`}
                      className="flex items-start gap-3 p-2 -mx-2 rounded hover:bg-secondary/50 transition-colors group"
                    >
                      <div className="flex items-center gap-1 shrink-0">
                        {thread.isPinned && <Pin className="w-3 h-3 text-[hsl(45_100%_60%)]" />}
                        {thread.isLocked && <Lock className="w-3 h-3 text-muted-foreground" />}
                        <MessageSquare className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span className={cn(
                            "text-sm group-hover:text-primary transition-colors truncate",
                            thread.isPinned && "text-[hsl(45_100%_60%)]"
                          )}>
                            {thread.title}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          <span className="text-primary">{thread.authorName}</span>
                          <span className="mx-1">in</span>
                          <span className="text-accent">{thread.category.name}</span>
                          <span className="mx-1">|</span>
                          <span>{thread.posts.length} replies</span>
                        </div>
                      </div>
                      <span className="text-xs font-[family-name:var(--font-pixel)] text-muted-foreground shrink-0">
                        {thread.updatedAt.toISOString().slice(0, 10).replace(/-/g, '.')}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </RetroWindow>
        </div>

      </div>
    </SiteLayout>
  )
}
