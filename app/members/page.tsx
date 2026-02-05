import { SiteLayout } from "@/components/retro/site-layout"
import { RetroWindow } from "@/components/retro/retro-window"
import { getMembers } from "@/lib/queries"
import Link from "next/link"
import { Users, Crown, Shield, Music, Calendar, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

export default async function MembersPage() {
  const members = await getMembers()

  const roleIcons = {
    admin: Crown,
    moderator: Shield,
    member: Users,
  }

  const roleLabels = {
    admin: "Admin",
    moderator: "Moderator",
    member: "Member",
  }

  return (
    <SiteLayout>
      <div className="p-4 lg:p-8 max-w-5xl mx-auto">
        {/* Stats */}
        <RetroWindow className="mb-6">
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8 text-xs font-[family-name:var(--font-pixel)]">
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-[hsl(45_100%_60%)]" />
              <span className="text-muted-foreground">Admins:</span>
              <span className="text-foreground">{members.filter((m) => m.role === "admin").length}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">Moderators:</span>
              <span className="text-foreground">{members.filter((m) => m.role === "moderator").length}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Members:</span>
              <span className="text-foreground">{members.filter((m) => m.role === "member").length}</span>
            </div>
          </div>
        </RetroWindow>

        {/* Member Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {members.map((member) => {
            const RoleIcon = roleIcons[member.role]
            return (
              <RetroWindow key={member.id}>
                <Link href={`/members/${member.username}`} className="block group">
                  <div className="flex gap-4">
                    {/* Avatar */}
                    <div
                      className="w-16 h-16 shrink-0 rounded border-2 flex items-center justify-center"
                      style={{ borderColor: member.accentColor, backgroundColor: `${member.accentColor}20` }}
                    >
                      <span
                        className="font-[family-name:var(--font-pixel)] text-2xl"
                        style={{ color: member.accentColor }}
                      >
                        {member.displayName.charAt(0)}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h2
                          className="font-[family-name:var(--font-pixel)] text-lg group-hover:opacity-80 transition-opacity"
                          style={{ color: member.accentColor }}
                        >
                          {member.displayName}
                        </h2>
                        <RoleIcon
                          className={cn(
                            "w-4 h-4",
                            member.role === "admin" && "text-[hsl(45_100%_60%)]",
                            member.role === "moderator" && "text-accent",
                            member.role === "member" && "text-muted-foreground"
                          )}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">@{member.username}</p>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>{member.joinDate}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MessageSquare className="w-3 h-3" />
                          <span>{member.postCount.toLocaleString()} posts</span>
                        </div>
                      </div>

                      {member.favoriteSong && (
                        <div className="flex items-center gap-1 mt-2 text-xs">
                          <Music className="w-3 h-3 text-primary" />
                          <span className="text-muted-foreground">Favorite:</span>
                          <span className="text-foreground/80">{member.favoriteSong}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bio preview */}
                  {member.bio && (
                    <p className="mt-3 pt-3 border-t border-border text-sm text-foreground/70 line-clamp-2">
                      {member.bio}
                    </p>
                  )}
                </Link>
              </RetroWindow>
            )
          })}
        </div>

        {/* Join CTA */}
        <div className="mt-8">
          <RetroWindow className="text-center py-6">
            <p className="font-[family-name:var(--font-pixel)] text-sm text-muted-foreground mb-4">
              {">> Want to join the shrine?"}
            </p>
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded font-[family-name:var(--font-pixel)] text-sm hover:bg-primary/90 transition-colors">
              Register Account
            </button>
            <p className="text-xs text-muted-foreground/70 mt-3">
              {"~*~ free registration | instant access to forum ~*~"}
            </p>
          </RetroWindow>
        </div>
      </div>
    </SiteLayout>
  )
}
