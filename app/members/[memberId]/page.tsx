export const dynamic = "force-dynamic"

import { SiteLayout } from "@/components/retro/site-layout"
import { RetroWindow } from "@/components/retro/retro-window"
import { getMember } from "@/lib/queries"
import Link from "next/link"
import { ArrowLeft, Crown, Shield, Users, Calendar, MessageSquare, Music } from "lucide-react"
import { cn } from "@/lib/utils"
import { notFound } from "next/navigation"

interface MemberPageProps {
  params: Promise<{ memberId: string }>
}

export default async function MemberProfilePage({ params }: MemberPageProps) {
  const { memberId } = await params

  const member = await getMember(memberId)

  if (!member) {
    notFound()
  }

  const roleIcons = {
    admin: Crown,
    moderator: Shield,
    member: Users,
  }

  const roleLabels = {
    admin: "Administrator",
    moderator: "Moderator",
    member: "Member",
  }

  const RoleIcon = roleIcons[member.role]

  return (
    <SiteLayout>
      <div className="p-4 lg:p-8 max-w-4xl mx-auto">
        {/* Back navigation */}
        <Link
          href="/members"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-[family-name:var(--font-pixel)]">{"<< back to members"}</span>
        </Link>

        {/* Profile Header */}
        <header className="mb-6">
          <RetroWindow variant="ornate" className="py-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Avatar */}
              <div
                className="w-24 h-24 shrink-0 rounded border-4 flex items-center justify-center"
                style={{ borderColor: member.accentColor, backgroundColor: `${member.accentColor}20` }}
              >
                <span
                  className="font-[family-name:var(--font-pixel)] text-4xl"
                  style={{ color: member.accentColor }}
                >
                  {member.displayName.charAt(0)}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <h1
                    className="font-[family-name:var(--font-pixel)] text-2xl lg:text-3xl"
                    style={{ color: member.accentColor }}
                  >
                    {member.displayName}
                  </h1>
                  <RoleIcon
                    className={cn(
                      "w-5 h-5",
                      member.role === "admin" && "text-[hsl(45_100%_60%)]",
                      member.role === "moderator" && "text-accent",
                      member.role === "member" && "text-muted-foreground"
                    )}
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  @{member.username} | {roleLabels[member.role]}
                </p>

                <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">Joined:</span>
                    <span className="font-[family-name:var(--font-pixel)] text-foreground">{member.joinDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Posts:</span>
                    <span className="text-foreground">{member.postCount.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </RetroWindow>
        </header>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio */}
            <RetroWindow title="about.txt">
              <p className="text-foreground/90 leading-relaxed">
                {member.bio || "No bio yet."}
              </p>
            </RetroWindow>

            {/* Recent Activity Placeholder */}
            <RetroWindow title="recent_activity.log">
              <p className="text-sm text-muted-foreground">
                {">> Activity history coming soon..."}
              </p>
            </RetroWindow>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Favorite Song */}
            {member.favoriteSong && (
              <RetroWindow title="favorite.mp3">
                <div className="flex items-center gap-2">
                  <Music className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-foreground">{member.favoriteSong}</p>
                    <p className="text-xs text-muted-foreground">Favorite track</p>
                  </div>
                </div>
              </RetroWindow>
            )}

            {/* Profile Color */}
            <RetroWindow title="profile_color.css">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded border border-border"
                  style={{ backgroundColor: member.accentColor }}
                />
                <div>
                  <p className="font-[family-name:var(--font-pixel)] text-sm" style={{ color: member.accentColor }}>
                    {member.accentColor}
                  </p>
                  <p className="text-xs text-muted-foreground">Custom accent</p>
                </div>
              </div>
            </RetroWindow>

            {/* Stats */}
            <RetroWindow title="stats.dat">
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Member since</span>
                  <span className="text-foreground">{member.joinDate}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Total posts</span>
                  <span className="text-foreground">{member.postCount.toLocaleString()}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Role</span>
                  <span style={{ color: member.accentColor }}>{roleLabels[member.role]}</span>
                </li>
              </ul>
            </RetroWindow>
          </aside>
        </div>
      </div>
    </SiteLayout>
  )
}
