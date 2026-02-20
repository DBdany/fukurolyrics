export const dynamic = "force-dynamic"

import { SiteLayout } from "@/components/retro/site-layout"
import { RetroWindow } from "@/components/retro/retro-window"
import { getGuestbookEntries } from "@/lib/queries"
import { GuestbookClient } from "@/components/guestbook-client"

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

        {/* Form + Entries (client-managed for optimistic updates) */}
        <GuestbookClient entries={entries} />

        {/* Decorative footer */}
        <div className="mt-8 text-center">
          <p className="font-[family-name:var(--font-pixel)] text-xs text-muted-foreground">
            {"~*~ thank you for visiting the shrine ~*~"}
          </p>
          <div className="mt-2 flex justify-center gap-2 text-muted-foreground/30">
            {["*", ".", "*", ".", "*"].map((char, i) => (
              <span key={i} className={i % 2 === 0 ? "text-accent/30" : undefined}>{char}</span>
            ))}
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}
