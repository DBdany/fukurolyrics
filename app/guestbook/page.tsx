import { SiteLayout } from "@/components/retro/site-layout"
import { RetroWindow } from "@/components/retro/retro-window"
import { getGuestbookEntries } from "@/lib/queries"
import { cn } from "@/lib/utils"
import { GuestbookForm } from "@/components/guestbook-form"

export default async function GuestbookPage() {
  const entries = await getGuestbookEntries()

  return (
    <SiteLayout>
      <div className="p-4 lg:p-8 max-w-3xl mx-auto">
        {/* Intro */}
        <RetroWindow title="readme.txt" className="mb-8">
          <p className="text-sm text-foreground/80 leading-relaxed">
            leave a message if you want. say hi, tell me where you found the site,
            whatever. i check these when i can. nice to know someone&apos;s actually out there.
          </p>
        </RetroWindow>

        {/* Sign Guestbook Form */}
        <div className="mb-8">
          <GuestbookForm />
        </div>

        {/* Guestbook Entries */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-[family-name:var(--font-pixel)] text-muted-foreground">
            <span>{">> "}</span>
            <span>{entries.length} entries</span>
            <span className="ml-auto">newest first</span>
          </div>

          {entries.map((entry, index) => (
            <RetroWindow key={entry.id}>
              <article className="space-y-3">
                {/* Entry Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-secondary border border-border flex items-center justify-center">
                      <span className="font-[family-name:var(--font-pixel)] text-sm text-primary">
                        {entry.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-pixel)] text-sm text-primary">{entry.name}</p>
                      <p className="text-xs text-muted-foreground">{entry.timestamp}</p>
                    </div>
                  </div>
                  <span className="text-xs font-[family-name:var(--font-pixel)] text-muted-foreground">
                    #{entries.length - index}
                  </span>
                </div>

                {/* Entry Content */}
                <p className="text-sm text-foreground/90 leading-relaxed">{entry.message}</p>

                {/* Signature */}
                {entry.signature && (
                  <p className="text-sm text-accent/70 italic text-right">{entry.signature}</p>
                )}
              </article>
            </RetroWindow>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 font-[family-name:var(--font-pixel)] text-sm">
            <span className="text-muted-foreground">Page:</span>
            <button className="px-2 py-1 bg-accent text-accent-foreground rounded">1</button>
            <button className="px-2 py-1 text-muted-foreground hover:text-foreground">2</button>
            <button className="px-2 py-1 text-muted-foreground hover:text-foreground">3</button>
          </div>
        </div>

        {/* Decorative footer */}
        <div className="mt-8 text-center">
          <p className="font-[family-name:var(--font-pixel)] text-xs text-muted-foreground">
            {"~*~ thank you for visiting the shrine ~*~"}
          </p>
          <div className="mt-2 flex justify-center gap-2 text-muted-foreground/30">
            {["*", ".", "*", ".", "*"].map((char, i) => (
              <span key={i} className={cn(i % 2 === 0 && "text-accent/30")}>{char}</span>
            ))}
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}
