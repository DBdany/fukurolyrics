"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp, Disc, Music } from "lucide-react"
import { cn } from "@/lib/utils"
import { RetroWindow } from "@/components/retro/retro-window"
import type { Album } from "@/lib/types"

interface DiscographyListProps {
  albums: Album[]
}

const typeLabels: Record<Album['type'], string> = {
  album: "Full Album",
  single: "Single",
  "mini-album": "Mini Album",
  ep: "EP",
}

export function DiscographyList({ albums }: DiscographyListProps) {
  const [expandedAlbum, setExpandedAlbum] = useState<string | null>(albums[0]?.slug ?? null)

  return (
    <div className="space-y-4">
      {albums.map((album) => (
        <RetroWindow key={album.id} className="overflow-hidden">
          <button
            onClick={() => setExpandedAlbum(expandedAlbum === album.slug ? null : album.slug)}
            className="w-full text-left"
            aria-expanded={expandedAlbum === album.slug}
          >
            <div className="flex items-start gap-4">
              {/* Album Art Placeholder */}
              <div className="w-20 h-20 lg:w-24 lg:h-24 shrink-0 bg-secondary border border-border flex items-center justify-center">
                <Disc className="w-8 h-8 text-primary/50" />
              </div>

              {/* Album Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h2 className="font-[family-name:var(--font-pixel)] text-lg text-primary">
                      {album.title}
                    </h2>
                    <p className="font-[family-name:var(--font-jp)] text-sm text-foreground/70">
                      {album.titleJp}
                    </p>
                  </div>
                  {expandedAlbum === album.slug ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                  )}
                </div>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs font-[family-name:var(--font-pixel)]">
                  <span className="text-accent">{album.releaseDate}</span>
                  <span className="text-muted-foreground">{typeLabels[album.type]}</span>
                  <span className="text-muted-foreground">{album.tracks.length} tracks</span>
                </div>
              </div>
            </div>
          </button>

          {/* Tracklist */}
          {expandedAlbum === album.slug && (
            <div className="mt-4 pt-4 border-t border-border">
              <div className="text-xs font-[family-name:var(--font-pixel)] text-muted-foreground mb-3">
                {">> TRACKLIST"}
              </div>
              <ul className="space-y-2">
                {album.tracks.map((track) => (
                  <li key={track.id}>
                    <Link
                      href={`/lyrics/${album.slug}/${track.slug}`}
                      className={cn(
                        "flex items-center gap-3 p-2 -mx-2 rounded transition-colors",
                        "hover:bg-secondary/50 group"
                      )}
                    >
                      <span className="w-6 text-center font-[family-name:var(--font-pixel)] text-xs text-muted-foreground">
                        {track.number.toString().padStart(2, "0")}
                      </span>
                      <Music className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                            {track.title}
                          </span>
                          <span className="font-[family-name:var(--font-jp)] text-xs text-foreground/50">
                            {track.titleJp}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </RetroWindow>
      ))}
    </div>
  )
}
