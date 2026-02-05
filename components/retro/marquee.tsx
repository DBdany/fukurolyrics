"use client"

import { cn } from "@/lib/utils"

interface MarqueeProps {
  text: string
  className?: string
  speed?: "slow" | "normal" | "fast"
}

export function Marquee({ text, className, speed = "normal" }: MarqueeProps) {
  const speedClass = {
    slow: "animate-[marquee_30s_linear_infinite]",
    normal: "animate-[marquee_20s_linear_infinite]",
    fast: "animate-[marquee_10s_linear_infinite]",
  }

  return (
    <div
      className={cn(
        "overflow-hidden bg-secondary/50 border-y border-border py-2",
        className
      )}
      aria-live="polite"
    >
      <div className={cn("whitespace-nowrap", speedClass[speed])}>
        <span className="font-[family-name:var(--font-pixel)] text-sm tracking-wide">
          <span className="text-primary mx-4">{"★"}</span>
          {text}
          <span className="text-accent mx-4">{"★"}</span>
          {text}
          <span className="text-primary mx-4">{"★"}</span>
        </span>
      </div>
    </div>
  )
}
