export const dynamic = "force-dynamic"

import { SiteLayout } from "@/components/retro/site-layout"
import { RetroWindow } from "@/components/retro/retro-window"
import { HitCounter } from "@/components/retro/hit-counter"
import { getSiteStats } from "@/lib/queries"
import Link from "next/link"
import { Disc, FileText, MessageSquare, Sparkles } from "lucide-react"

export default async function HomePage() {
  const stats = await getSiteStats()
  return (
    <SiteLayout announcement="NEW: this is a test report YEEHAWWW ~*~">
      <div className="p-4 lg:p-8 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Welcome Section */}
          <div className="lg:col-span-2 space-y-6">
            <RetroWindow title="welcome.txt">
              <div className="space-y-4">
                <p className="text-foreground/90 leading-relaxed">
                  hey, welcome to the owl forest 
                  this is a fan-made site for <span className="text-primary font-semibold">梟 </span> (fukuro) 
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  everything here is fan-contributed so if something&apos;s off let us know on{" "}
                  <a 
                    href="https://discord.gg/f9ZrRuQSfd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent underline underline-offset-2 transition-colors"
                  >
                    discord
                  </a>.
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-muted-foreground text-sm">—</span>
                  <span className="font-[family-name:var(--font-pixel)] text-sm text-muted-foreground">
                    micah
                  </span>
                </div>
              </div>
            </RetroWindow>

            {/* Quick Links */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="cursor-not-allowed opacity-50">
                <RetroWindow className="h-full">
                  <div className="text-center py-2">
                    <Disc className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <h3 className="font-[family-name:var(--font-pixel)] text-base text-muted-foreground">Discography</h3>
                    <p className="font-[family-name:var(--font-pixel)] text-xs text-muted-foreground mt-1">coming soon</p>
                  </div>
                </RetroWindow>
              </div>

              <Link href="/lyrics" className="group">
                <RetroWindow className="h-full transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_hsl(195_100%_50%/0.2)]">
                  <div className="text-center py-2">
                    <FileText className="w-8 h-8 mx-auto mb-2 text-accent group-hover:animate-pulse-glow" />
                    <h3 className="font-[family-name:var(--font-pixel)] text-base text-foreground">Lyrics</h3>
                    <p className="font-[family-name:var(--font-jp)] text-sm text-muted-foreground mt-1">{"歌詞"}</p>
                  </div>
                </RetroWindow>
              </Link>

              <div className="cursor-not-allowed opacity-50">
                <RetroWindow className="h-full">
                  <div className="text-center py-2">
                    <MessageSquare className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <h3 className="font-[family-name:var(--font-pixel)] text-base text-muted-foreground">Forum</h3>
                    <p className="font-[family-name:var(--font-pixel)] text-xs text-muted-foreground mt-1">coming soon</p>
                  </div>
                </RetroWindow>
              </div>
            </div>

            {/* Latest Updates */}
            <RetroWindow title="latest_updates.log">
              <ul className="space-y-3 font-[family-name:var(--font-pixel)] text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-accent shrink-0">[2024.01.20]</span>
                  <span className="text-foreground/80">{"Test \"Post\""}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent shrink-0">[2024.01.15]</span>
                  <span className="text-foreground/80">Test post</span>
                  <span className="text-primary">NEW!</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent shrink-0">[2024.01.08]</span>
                  <span className="text-foreground/80">{"Test"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent shrink-0">[2023.12.25]</span>
                  <span className="text-foreground/80">Test post</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent shrink-0">[2023.12.18]</span>
                  <span className="text-foreground/80">Test post</span>
                </li>
              </ul>
            </RetroWindow>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Band Members */}
            <RetroWindow title="members.dat">
              <ul className="space-y-3">
                {[
                  { name: "yoshiatsu", role: "vocals" },
                  { name: "daisuke", role: "piano" },
                  { name: "yutara", role: "bass" },
                  { name: "lotto", role: "drums" },
                ].map((member) => (
                  <li key={member.name} className="flex items-center justify-between">
                    <span className="font-[family-name:var(--font-pixel)] text-base text-primary">{member.name}</span>
                    <span className="text-sm text-muted-foreground">{member.role}</span>
                  </li>
                ))}
              </ul>
            </RetroWindow>

            {/* Now Playing */}
            <RetroWindow title="now_playing.mp3">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                  <span className="text-sm text-foreground/90">bakemono no watashi ni wa</span>
                </div>
                <div className="text-sm text-muted-foreground font-[family-name:var(--font-pixel)]">
                  {"バケモノの私には"}
                </div>
                {/* Fake audio player */}
                <div className="bg-black/50 rounded p-2 space-y-2">
                  <div className="h-1 bg-secondary rounded overflow-hidden">
                    <div className="h-full w-1/3 bg-gradient-to-r from-primary to-accent" />
                  </div>
                  <div className="flex justify-between text-xs font-[family-name:var(--font-pixel)] text-muted-foreground">
                    <span>1:24</span>
                    <span>4:56</span>
                  </div>
                  <div className="flex justify-center gap-4 text-muted-foreground">
                    <button className="hover:text-primary transition-colors" aria-label="Previous">{"<<"}</button>
                    <button className="hover:text-primary transition-colors text-primary" aria-label="Play">{"▶"}</button>
                    <button className="hover:text-primary transition-colors" aria-label="Next">{">>"}</button>
                  </div>
                </div>
              </div>
            </RetroWindow>

            {/* Hit Counter & Stats */}
            <RetroWindow title="stats.txt">
              <div className="space-y-4">
                <HitCounter />
                <div className="text-sm font-[family-name:var(--font-pixel)] space-y-1 text-muted-foreground">
                  <p>last updated: {stats.lastUpdated}</p>
                  <p>lyrics archived: {stats.songCount}</p>
                  <p>releases: {stats.releaseCount}</p>
                </div>
              </div>
            </RetroWindow>

            {/* Affiliate Links */}
            <RetroWindow title="links.html">
              <div className="space-y-2">
                <p className="text-sm font-[family-name:var(--font-pixel)] text-muted-foreground mb-3">
                  {">> Sister Sites"}
                </p>
                <ul className="space-y-2 text-base">
                  <li>
                    <span className="text-primary hover:glow-pink cursor-pointer">Link your sister site here</span>
                    <span className="text-sm text-muted-foreground ml-1">(Test)</span>
                  </li>
                  <li>
                    <span className="text-accent hover:glow-blue cursor-pointer">{"Link your sister site here"}</span>
                    <span className="text-sm text-muted-foreground ml-1">(Test)</span>
                  </li>
                  <li>
                    <span className="text-[hsl(45_100%_60%)] hover:glow-gold cursor-pointer">Link your sister site here</span>
                    <span className="text-sm text-muted-foreground ml-1">(test)</span>
                  </li>
                </ul>
              </div>
            </RetroWindow>
          </aside>
        </div>

        {/* Decorative bottom section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 text-muted-foreground/30">
            <span className="text-lg">{"═══════"}</span>
            <span className="text-primary/50 animate-float">{"✦"}</span>
            <span className="text-lg">{"═══════"}</span>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}
