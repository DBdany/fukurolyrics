"use client"

import { useState } from "react"
import { RetroWindow } from "@/components/retro/retro-window"
import { cn } from "@/lib/utils"

export function ForumReplyComposer() {
  const [replyContent, setReplyContent] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission with server action
    alert("Reply posting coming soon!")
  }

  return (
    <RetroWindow title="compose_reply.txt">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-[family-name:var(--font-pixel)] text-muted-foreground">
          <span>{">> Posting as:"}</span>
          <span className="text-primary">Guest</span>
          <span className="text-foreground/50">(login to post as member)</span>
        </div>

        <textarea
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          placeholder="Write your reply..."
          className={cn(
            "w-full h-32 p-3 bg-black/30 border border-border rounded resize-none",
            "text-foreground placeholder:text-muted-foreground/50",
            "focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
          )}
        />

        {/* Formatting toolbar */}
        <div className="flex items-center gap-2 text-xs font-[family-name:var(--font-pixel)]">
          <button type="button" className="px-2 py-1 bg-secondary hover:bg-secondary/80 rounded font-bold">B</button>
          <button type="button" className="px-2 py-1 bg-secondary hover:bg-secondary/80 rounded italic">I</button>
          <button type="button" className="px-2 py-1 bg-secondary hover:bg-secondary/80 rounded underline">U</button>
          <span className="text-muted-foreground mx-2">|</span>
          <button type="button" className="px-2 py-1 bg-secondary hover:bg-secondary/80 rounded">Link</button>
          <button type="button" className="px-2 py-1 bg-secondary hover:bg-secondary/80 rounded">Quote</button>
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            className="px-4 py-2 text-sm font-[family-name:var(--font-pixel)] text-muted-foreground hover:text-foreground transition-colors"
          >
            Preview
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm font-[family-name:var(--font-pixel)] hover:bg-primary/90 transition-colors"
          >
            Post Reply
          </button>
        </div>
      </form>
    </RetroWindow>
  )
}
