"use client"

import { useRef, useState, useTransition } from "react"
import { PenLine, Sparkles, Loader2, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { RetroWindow } from "@/components/retro/retro-window"
import type { SignGuestbookResult } from "@/app/guestbook/actions"

export function GuestbookForm({
  action,
}: {
  action: (formData: FormData) => Promise<SignGuestbookResult>
}) {
  const formRef = useRef<HTMLFormElement>(null)
  const [isPending, startTransition] = useTransition()
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    setFeedback(null)

    startTransition(async () => {
      const result = await action(formData)

      if (result.success) {
        formRef.current?.reset()
        setFeedback({ type: "success", message: "signed! thanks for stopping by ♥" })
        setTimeout(() => setFeedback(null), 4000)
      } else {
        setFeedback({ type: "error", message: result.error })
      }
    })
  }

  return (
    <RetroWindow title="sign_guestbook.html">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-[family-name:var(--font-pixel)] text-primary mb-4">
          <PenLine className="w-4 h-4" />
          <span>{">> Sign the guestbook"}</span>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-[family-name:var(--font-pixel)] text-muted-foreground mb-1">
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name or alias"
              required
              maxLength={50}
              className={cn(
                "w-full px-3 py-2 bg-black/30 border border-border rounded",
                "text-foreground placeholder:text-muted-foreground/50 text-sm",
                "focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
              )}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-[family-name:var(--font-pixel)] text-muted-foreground mb-1">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Leave your message here..."
              rows={4}
              required
              maxLength={500}
              className={cn(
                "w-full px-3 py-2 bg-black/30 border border-border rounded resize-none",
                "text-foreground placeholder:text-muted-foreground/50 text-sm",
                "focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
              )}
            />
          </div>

          <div>
            <label htmlFor="signature" className="block text-xs font-[family-name:var(--font-pixel)] text-muted-foreground mb-1">
              Signature (optional)
            </label>
            <input
              id="signature"
              name="signature"
              type="text"
              placeholder="~*~ your signature ~*~"
              maxLength={100}
              className={cn(
                "w-full px-3 py-2 bg-black/30 border border-border rounded",
                "text-foreground placeholder:text-muted-foreground/50 text-sm italic",
                "focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
              )}
            />
          </div>

          {/* Feedback message */}
          {feedback && (
            <div
              className={cn(
                "text-xs font-[family-name:var(--font-pixel)] px-3 py-2 rounded border",
                feedback.type === "success"
                  ? "text-green-400 border-green-400/30 bg-green-400/5"
                  : "text-red-400 border-red-400/30 bg-red-400/5"
              )}
            >
              {feedback.message}
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isPending}
              className={cn(
                "flex items-center gap-2 px-6 py-2 bg-accent text-accent-foreground rounded font-[family-name:var(--font-pixel)] text-sm transition-colors",
                isPending ? "opacity-60 cursor-not-allowed" : "hover:bg-accent/90"
              )}
            >
              {isPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : feedback?.type === "success" ? (
                <Check className="w-4 h-4" />
              ) : (
                <Sparkles className="w-4 h-4" />
              )}
              {isPending ? "Signing..." : "Sign Guestbook"}
            </button>
          </div>
        </div>
      </form>
    </RetroWindow>
  )
}
