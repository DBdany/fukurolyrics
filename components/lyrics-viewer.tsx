"use client"

import { useState } from "react"
import { Columns, Rows } from "lucide-react"
import { cn } from "@/lib/utils"
import { RetroWindow } from "@/components/retro/retro-window"
import type { LyricsData } from "@/lib/types"

interface LyricsViewerProps {
  lyrics: LyricsData
}

export function LyricsViewer({ lyrics }: LyricsViewerProps) {
  const [displayMode, setDisplayMode] = useState<"side-by-side" | "stacked">("side-by-side")

  // Split lyrics into lines
  const japaneseLines = lyrics.japanese.split('\n')
  const romajiLines = lyrics.romaji.split('\n')
  const englishLines = lyrics.english.split('\n')

  return (
    <>
      {/* Display Mode Toggle */}
      <div className="flex justify-end mb-4">
        <div className="flex items-center gap-2 bg-secondary/50 rounded p-1">
          <button
            onClick={() => setDisplayMode("side-by-side")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-[family-name:var(--font-pixel)] transition-colors",
              displayMode === "side-by-side"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
            aria-label="Side by side view"
          >
            <Columns className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Side by Side</span>
          </button>
          <button
            onClick={() => setDisplayMode("stacked")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-[family-name:var(--font-pixel)] transition-colors",
              displayMode === "stacked"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
            aria-label="Stacked view"
          >
            <Rows className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Stacked</span>
          </button>
        </div>
      </div>

      {/* Lyrics Content */}
      {displayMode === "side-by-side" ? (
        <div className="grid lg:grid-cols-3 gap-4">
          <RetroWindow title="japanese.txt">
            <div className="space-y-1">
              {japaneseLines.map((line, i) => (
                <p
                  key={i}
                  className={cn(
                    "font-[family-name:var(--font-jp)] text-sm leading-relaxed",
                    line === "" ? "h-4" : "text-foreground/90"
                  )}
                >
                  {line || "\u00A0"}
                </p>
              ))}
            </div>
          </RetroWindow>

          <RetroWindow title="romaji.txt">
            <div className="space-y-1">
              {romajiLines.map((line, i) => (
                <p
                  key={i}
                  className={cn(
                    "text-sm leading-relaxed italic",
                    line === "" ? "h-4" : "text-accent/80"
                  )}
                >
                  {line || "\u00A0"}
                </p>
              ))}
            </div>
          </RetroWindow>

          <RetroWindow title="english.txt">
            <div className="space-y-1">
              {englishLines.map((line, i) => (
                <p
                  key={i}
                  className={cn(
                    "text-sm leading-relaxed",
                    line === "" ? "h-4" : "text-foreground/80"
                  )}
                >
                  {line || "\u00A0"}
                </p>
              ))}
            </div>
          </RetroWindow>
        </div>
      ) : (
        <RetroWindow title="lyrics.txt">
          <div className="space-y-6">
            {japaneseLines.map((line, i) => (
              <div key={i} className={line === "" ? "h-2" : "space-y-1"}>
                {line && (
                  <>
                    <p className="font-[family-name:var(--font-jp)] text-foreground/90">{line}</p>
                    <p className="text-sm italic text-accent/70">{romajiLines[i]}</p>
                    <p className="text-sm text-muted-foreground">{englishLines[i]}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </RetroWindow>
      )}
    </>
  )
}
