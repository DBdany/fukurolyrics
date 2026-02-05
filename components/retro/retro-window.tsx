import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface RetroWindowProps {
  title?: string
  children: ReactNode
  className?: string
  titleClassName?: string
  variant?: "default" | "ornate" | "simple"
}

export function RetroWindow({ title, children, className, titleClassName, variant = "default" }: RetroWindowProps) {
  return (
    <div
      className={cn(
        "retro-window relative",
        variant === "ornate" && "border-2 border-primary/50",
        className
      )}
    >
      {/* Corner decorations for ornate variant */}
      {variant === "ornate" && (
        <>
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-primary" />
          <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-primary" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-primary" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-primary" />
        </>
      )}

      {title && (
        <div
          className={cn(
            "px-3 py-1.5 border-b border-border/50 font-[family-name:var(--font-pixel)] text-sm tracking-wider",
            "bg-gradient-to-r from-secondary/80 to-secondary/40",
            "flex items-center gap-2",
            titleClassName
          )}
        >
          <span className="text-primary">{">"}</span>
          <span className="text-foreground/90">{title}</span>
          <div className="ml-auto flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  )
}
