"use client"

import { useState } from "react"
import { PenLine, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { RetroWindow } from "@/components/retro/retro-window"

export function GuestbookForm() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [signature, setSignature] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission with server action
    alert("Guestbook signing coming soon!")
  }

  return (
    <RetroWindow title="sign_guestbook.html">
      <form onSubmit={handleSubmit} className="space-y-4">
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
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name or alias"
              required
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Leave your message here..."
              rows={4}
              required
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
              type="text"
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
              placeholder="~*~ your signature ~*~"
              className={cn(
                "w-full px-3 py-2 bg-black/30 border border-border rounded",
                "text-foreground placeholder:text-muted-foreground/50 text-sm italic",
                "focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
              )}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2 bg-accent text-accent-foreground rounded font-[family-name:var(--font-pixel)] text-sm hover:bg-accent/90 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              Sign Guestbook
            </button>
          </div>
        </div>
      </form>
    </RetroWindow>
  )
}
