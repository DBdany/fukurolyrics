"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface HitCounterProps {
  className?: string
}

export function HitCounter({ className }: HitCounterProps) {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    // Call API to increment and get visitor count
    fetch('/api/visitors', { method: 'POST' })
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(0))
  }, [])

  const digits = (count ?? 0).toString().padStart(7, "0").split("")

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="font-[family-name:var(--font-pixel)] text-sm text-muted-foreground">
        visitors:
      </span>
      <div className="flex">
        {digits.map((digit, i) => (
          <div
            key={i}
            className={cn(
              "w-6 h-8 bg-black border border-border flex items-center justify-center font-[family-name:var(--font-pixel)] text-base",
              count === null ? "text-muted-foreground" : "text-accent"
            )}
          >
            {count === null ? "-" : digit}
          </div>
        ))}
      </div>
    </div>
  )
}
