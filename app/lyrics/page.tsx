export const dynamic = "force-dynamic"

import { SiteLayout } from "@/components/retro/site-layout"
import { RetroWindow } from "@/components/retro/retro-window"
import { getAllReleases } from "@/lib/queries"
import Link from "next/link"
import { Music, Check } from "lucide-react"

export default async function LyricsIndexPage() {
  const discography = await getAllReleases()

  return (
    <SiteLayout>
      <div className="p-4 lg:p-8 max-w-4xl mx-auto">
        {/* Instructions */}
        <RetroWindow title="readme.txt" className="mb-6">
          <p className="text-sm text-foreground/80 leading-relaxed">
            all the lyrics i&apos;ve managed to transcribe so far. click on a song to see japanese,
            romaji, and english side by side. there&apos;s a toggle to stack them if that&apos;s easier
            to read. still working on some of these so check back.
          </p>
        </RetroWindow>

        {/* Songs by Album */}
        <div className="space-y-6">
          {discography.map((album) => (
            <RetroWindow key={album.id} title={`${album.title}.dir`}>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-[family-name:var(--font-jp)] text-sm text-foreground/70">{album.titleJp}</span>
                <span className="text-xs text-muted-foreground">({album.releaseDate})</span>
              </div>

              <ul className="space-y-1">
                {album.tracks.map((track) => (
                  <li key={track.id}>
                    <Link
                      href={`/lyrics/${album.slug}/${track.slug}`}
                      className="flex items-center gap-3 p-2 -mx-2 rounded hover:bg-secondary/50 group transition-colors"
                    >
                      <Music className="w-4 h-4 text-accent/50 group-hover:text-accent transition-colors" />
                      <span className="text-sm text-foreground group-hover:text-accent transition-colors">
                        {track.title}
                      </span>
                      <span className="font-[family-name:var(--font-jp)] text-xs text-foreground/50">
                        {track.titleJp}
                      </span>
                      {track.hasLyrics && (
                        <Check className="w-4 h-4 text-purple-500 ml-auto" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </RetroWindow>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="font-[family-name:var(--font-pixel)] text-xs text-muted-foreground">
            {"~*~ translations are fan-made and may not be 100% accurate ~*~"}
          </p>
        </div>
      </div>
    </SiteLayout>
  )
}
