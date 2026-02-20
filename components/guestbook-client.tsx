"use client"

import { useOptimistic } from "react"
import type { GuestbookEntry } from "@/lib/types"
import { signGuestbook } from "@/app/guestbook/actions"
import { GuestbookForm } from "@/components/guestbook-form"
import { RetroWindow } from "@/components/retro/retro-window"
import { cn } from "@/lib/utils"

export function GuestbookClient({ entries }: { entries: GuestbookEntry[] }) {
  const [optimisticEntries, addOptimisticEntry] = useOptimistic(
    entries,
    (state, newEntry: GuestbookEntry) => [newEntry, ...state],
  )

  async function formAction(formData: FormData) {
    const name = (formData.get("name") as string) ?? ""
    const message = (formData.get("message") as string) ?? ""
    const signature = (formData.get("signature") as string) || null

    addOptimisticEntry({
      id: `optimistic-${Date.now()}`,
      name,
      message,
      timestamp: "just now",
      signature,
    })

    return signGuestbook(formData)
  }

  return (
    <>
      {/* Sign Guestbook Form */}
      <div className="mb-8">
        <GuestbookForm action={formAction} />
      </div>

      {/* Guestbook Entries */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-[family-name:var(--font-pixel)] text-muted-foreground">
          <span>{">> "}</span>
          <span>{optimisticEntries.length} entries</span>
          <span className="ml-auto">newest first</span>
        </div>

        {optimisticEntries.map((entry, index) => {
          const isOptimistic = entry.id.startsWith("optimistic-")
          return (
            <RetroWindow key={entry.id}>
              <article className={cn("space-y-3", isOptimistic && "opacity-60")}>
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
                    #{optimisticEntries.length - index}
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
          )
        })}
      </div>
    </>
  )
}
