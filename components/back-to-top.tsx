"use client"

import { ChevronUp } from "lucide-react"

export function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="inline-flex items-center gap-1 text-xs font-[family-name:var(--font-pixel)] text-muted-foreground hover:text-primary transition-colors"
    >
      <ChevronUp className="w-4 h-4" />
      Back to top
    </button>
  )
}
