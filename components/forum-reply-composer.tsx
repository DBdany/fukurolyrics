"use client"

import { useState, useTransition } from "react"
import { useUser } from "@clerk/nextjs"
import { RetroWindow } from "@/components/retro/retro-window"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { createForumReply } from "@/app/forum/actions"

interface ForumReplyComposerProps {
  threadId: string
}

export function ForumReplyComposer({ threadId }: ForumReplyComposerProps) {
  const { isSignedIn, user } = useUser()
  const [replyContent, setReplyContent] = useState("")
  const [isPending, startTransition] = useTransition()
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null)

  if (!isSignedIn) {
    return (
      <RetroWindow title="compose_reply.txt">
        <div className="text-center py-6">
          <p className="font-[family-name:var(--font-pixel)] text-sm text-muted-foreground">
            {">> "}
            <a href="/sign-in" className="text-primary hover:underline">Sign in</a>
            {" to post a reply"}
          </p>
        </div>
      </RetroWindow>
    )
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!replyContent.trim()) return

    const formData = new FormData()
    formData.set("content", replyContent)
    formData.set("threadId", threadId)

    setFeedback(null)
    startTransition(async () => {
      const result = await createForumReply(formData)
      if (result.success) {
        setReplyContent("")
        setFeedback({ type: "success", message: "Reply posted!" })
        setTimeout(() => setFeedback(null), 3000)
      } else {
        setFeedback({ type: "error", message: result.error })
      }
    })
  }

  return (
    <RetroWindow title="compose_reply.txt">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-[family-name:var(--font-pixel)] text-muted-foreground">
          <span>{">> Posting as:"}</span>
          <span className="text-primary">{user.firstName ?? user.username ?? "user"}</span>
        </div>

        <textarea
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          placeholder="Write your reply..."
          maxLength={10000}
          className={cn(
            "w-full h-32 p-3 bg-black/30 border border-border rounded resize-none",
            "text-foreground placeholder:text-muted-foreground/50",
            "focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
          )}
        />

        {feedback && (
          <div className={cn(
            "text-xs font-[family-name:var(--font-pixel)] px-3 py-2 rounded border",
            feedback.type === "success"
              ? "text-green-400 border-green-400/30 bg-green-400/5"
              : "text-red-400 border-red-400/30 bg-red-400/5"
          )}>
            {feedback.message}
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isPending || !replyContent.trim()}
            className={cn(
              "flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded text-sm font-[family-name:var(--font-pixel)] transition-colors",
              (isPending || !replyContent.trim()) ? "opacity-60 cursor-not-allowed" : "hover:bg-primary/90"
            )}
          >
            {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
            {isPending ? "Posting..." : "Post Reply"}
          </button>
        </div>
      </form>
    </RetroWindow>
  )
}
