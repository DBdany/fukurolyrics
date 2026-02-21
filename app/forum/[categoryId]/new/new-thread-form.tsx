"use client"

import { useTransition, useState } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Loader2, PenLine } from "lucide-react"
import { createForumThread } from "@/app/forum/actions"

interface NewThreadFormProps {
  categorySlug: string
  categoryName: string
}

export function NewThreadForm({ categorySlug, categoryName }: NewThreadFormProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    formData.set("categorySlug", categorySlug)

    setError(null)
    startTransition(async () => {
      const result = await createForumThread(formData)
      if (result.success) {
        router.push(`/forum/${result.categorySlug}/${result.threadSlug}`)
      } else {
        setError(result.error)
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-xs font-[family-name:var(--font-pixel)] text-muted-foreground mb-2">
        {">> Posting in: "}<span className="text-accent">{categoryName}</span>
      </div>

      <div>
        <label htmlFor="title" className="block text-xs font-[family-name:var(--font-pixel)] text-muted-foreground mb-1">
          Thread Title *
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          maxLength={200}
          placeholder="What's on your mind?"
          className={cn(
            "w-full px-3 py-2 bg-black/30 border border-border rounded",
            "text-foreground placeholder:text-muted-foreground/50 text-sm",
            "focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
          )}
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-xs font-[family-name:var(--font-pixel)] text-muted-foreground mb-1">
          First Post *
        </label>
        <textarea
          id="content"
          name="content"
          required
          rows={8}
          maxLength={10000}
          placeholder="Write your opening post..."
          className={cn(
            "w-full px-3 py-2 bg-black/30 border border-border rounded resize-none",
            "text-foreground placeholder:text-muted-foreground/50 text-sm",
            "focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
          )}
        />
      </div>

      {error && (
        <div className="text-xs font-[family-name:var(--font-pixel)] px-3 py-2 rounded border text-red-400 border-red-400/30 bg-red-400/5">
          {error}
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isPending}
          className={cn(
            "flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded font-[family-name:var(--font-pixel)] text-sm transition-colors",
            isPending ? "opacity-60 cursor-not-allowed" : "hover:bg-primary/90"
          )}
        >
          {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <PenLine className="w-4 h-4" />}
          {isPending ? "Creating..." : "Create Thread"}
        </button>
      </div>
    </form>
  )
}
