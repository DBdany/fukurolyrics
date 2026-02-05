import { cn } from "@/lib/utils"

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("border-t border-border bg-secondary/30 py-6 px-4", className)}>
      <div className="max-w-4xl mx-auto">
        {/* Webring badges area */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="retro-window px-4 py-2 text-sm font-[family-name:var(--font-pixel)]">
            <span className="text-muted-foreground">{"<"}</span>
            <span className="text-primary mx-2">test</span>
            <span className="text-muted-foreground">{">"}</span>
          </div>
          <div className="retro-window px-4 py-2 text-sm font-[family-name:var(--font-pixel)]">
            <span className="text-accent">test</span>
          </div>
          <div className="retro-window px-4 py-2 text-sm font-[family-name:var(--font-pixel)]">
            <span className="text-muted-foreground">test of</span>
            <span className="text-primary ml-1">test</span>
          </div>
        </div>

        {/* Credits */}
        <div className="text-center space-y-3">
          <p className="font-[family-name:var(--font-pixel)] text-sm text-muted-foreground">
            best viewed in 800x600 | Netscape Navigator 4.0+ | IE 5.5+
          </p>
          <p className="font-[family-name:var(--font-pixel)] text-sm text-muted-foreground">
            {">>> "}this site is a fan creation and is not affiliated with FUKURO or their management{" <<<"}
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <span className="text-sm text-muted-foreground">Site by</span>
            <span className="font-[family-name:var(--font-pixel)] text-base text-primary">enchantedruin</span>
          </div>
          <p className="font-[family-name:var(--font-pixel)] text-sm text-muted-foreground/70 pt-2">
            {"~*~ "}All lyrics are property of their respective owners{" ~*~"}
          </p>
        </div>

        {/* Decorative bottom */}
        <div className="mt-6 flex justify-center">
          <div className="flex items-center gap-3 text-muted-foreground/30">
            {Array.from({ length: 7 }).map((_, i) => (
              <span key={i} className="text-sm">{"✦"}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
