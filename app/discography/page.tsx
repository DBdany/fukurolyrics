import { SiteLayout } from "@/components/retro/site-layout"
import { RetroWindow } from "@/components/retro/retro-window"
import { getAllReleases } from "@/lib/queries"
import { Disc } from "lucide-react"
import { DiscographyList } from "@/components/discography-list"

export default async function DiscographyPage() {
  const discography = await getAllReleases()

  const albumCount = discography.filter((d) => d.type === "album").length
  const singleCount = discography.filter((d) => d.type === "single").length
  const epCount = discography.filter((d) => d.type === "ep" || d.type === "mini-album").length
  const trackCount = discography.reduce((acc, album) => acc + album.tracks.length, 0)

  return (
    <SiteLayout>
      <div className="p-4 lg:p-8 max-w-4xl mx-auto">
        {/* Stats bar */}
        <div className="mb-6 flex flex-wrap gap-4 justify-center font-[family-name:var(--font-pixel)] text-xs text-muted-foreground">
          <span>Albums: {albumCount}</span>
          <span className="text-border">|</span>
          <span>Singles: {singleCount}</span>
          <span className="text-border">|</span>
          <span>EPs: {epCount}</span>
          <span className="text-border">|</span>
          <span>Total Tracks: {trackCount}</span>
        </div>

        {/* Album List */}
        <DiscographyList albums={discography} />

        {/* Decorative footer */}
        <div className="mt-12 text-center">
          <p className="font-[family-name:var(--font-pixel)] text-xs text-muted-foreground">
            {"~*~ click on any track to view lyrics ~*~"}
          </p>
        </div>
      </div>
    </SiteLayout>
  )
}
