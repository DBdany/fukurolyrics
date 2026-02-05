export const dynamic = "force-dynamic"

import { SiteLayout } from "@/components/retro/site-layout"
import { RetroWindow } from "@/components/retro/retro-window"
import { getSongBySlug, getReleaseBySlug } from "@/lib/queries"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { LyricsViewer } from "@/components/lyrics-viewer"

interface LyricsPageProps {
  params: Promise<{ albumId: string; trackId: string }>
}

export default async function LyricsPage({ params }: LyricsPageProps) {
  const { albumId, trackId } = await params

  const lyrics = await getSongBySlug(trackId, albumId)
  const album = await getReleaseBySlug(albumId)

  if (!lyrics || !album) {
    notFound()
  }

  const track = album.tracks.find((t) => t.slug === trackId)
  const otherTracks = album.tracks.filter((t) => t.slug !== trackId)

  // Check if lyrics are placeholder
  const isPlaceholder = lyrics.japanese.includes('[Japanese lyrics to be added]')

  return (
    <SiteLayout>
      <div className="p-4 lg:p-8 max-w-5xl mx-auto">
        {/* Back navigation */}
        <Link
          href="/lyrics"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-[family-name:var(--font-pixel)]">{"<< back to lyrics"}</span>
        </Link>

        {/* Song Header */}
        <header className="mb-6">
          <RetroWindow variant="ornate" className="py-6">
            <div className="text-center mb-4">
              <h1 className="font-[family-name:var(--font-pixel)] text-2xl lg:text-3xl text-primary glow-pink tracking-wider mb-1">
                {lyrics.titleRomaji}
              </h1>
              <p className="font-[family-name:var(--font-jp)] text-xl text-foreground/80">
                {lyrics.titleJp}
              </p>
              {lyrics.titleEn && (
                <p className="text-sm text-muted-foreground mt-1">
                  {lyrics.titleEn}
                </p>
              )}
            </div>

            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-4" />

            {/* Metadata */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-[family-name:var(--font-pixel)]">
              <div>
                <span className="text-muted-foreground">Album: </span>
                <Link href="/discography" className="text-accent hover:underline">
                  {album.title}
                </Link>
              </div>
              {track && (
                <div>
                  <span className="text-muted-foreground">Track: </span>
                  <span className="text-foreground">{track.number.toString().padStart(2, "0")}</span>
                </div>
              )}
            </div>
          </RetroWindow>
        </header>

        {/* Lyrics Content */}
        {!isPlaceholder ? (
          <>
            <LyricsViewer lyrics={lyrics} />

            {/* Translation Credits */}
            <div className="mt-6 text-center">
              <p className="font-[family-name:var(--font-pixel)] text-xs text-muted-foreground">
                {"translation by community | corrections welcome"}
              </p>
            </div>
          </>
        ) : (
          <RetroWindow title="lyrics.txt" className="text-center py-12">
            <p className="text-muted-foreground font-[family-name:var(--font-pixel)]">
              {">> Lyrics not yet available for this track"}
            </p>
            <p className="text-xs text-muted-foreground/70 mt-2">
              Want to contribute? Visit the forum to submit translations!
            </p>
          </RetroWindow>
        )}

        {/* Notes */}
        {lyrics.notes && (
          <RetroWindow title="notes.txt" className="mt-6">
            <p className="text-sm text-foreground/80">{lyrics.notes}</p>
          </RetroWindow>
        )}

        {/* Navigation to other tracks */}
        {otherTracks.length > 0 && (
          <div className="mt-8 pt-6 border-t border-border">
            <p className="font-[family-name:var(--font-pixel)] text-xs text-muted-foreground mb-4 text-center">
              {">> Other tracks from this album"}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {otherTracks.map((t) => (
                <Link
                  key={t.id}
                  href={`/lyrics/${albumId}/${t.slug}`}
                  className="text-xs font-[family-name:var(--font-pixel)] px-3 py-1.5 bg-secondary/50 hover:bg-secondary rounded transition-colors"
                >
                  {t.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </SiteLayout>
  )
}
