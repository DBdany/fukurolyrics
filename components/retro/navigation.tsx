"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Disc, FileText, MessageSquare, Users, BookOpen, Menu, X } from "lucide-react"
import { useState } from "react"
import { useUser, UserButton, SignInButton } from "@clerk/nextjs"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/discography", label: "Discography", icon: Disc, comingSoon: true },
  { href: "/lyrics", label: "Lyrics", icon: FileText },
  { href: "/forum", label: "Forum", icon: MessageSquare },
  { href: "/members", label: "Members", icon: Users, comingSoon: true },
  { href: "/guestbook", label: "Guestbook", icon: BookOpen },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isSignedIn, user } = useUser()

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex flex-col w-48 shrink-0 border-r border-border bg-sidebar-background/80 backdrop-blur-sm fixed top-0 left-0 h-screen overflow-y-auto z-40">
        <div className="p-4 border-b border-border">
          <Link href="/" className="block">
            <h1 className="font-[family-name:var(--font-pixel)] text-xl text-primary glow-pink tracking-wider">
              FUKURO
            </h1>
            <p className="font-[family-name:var(--font-jp)] text-xs text-muted-foreground mt-1">
              梟の祠
            </p>
          </Link>
        </div>

        <div className="flex-1 py-4">
          <div className="px-3 mb-2">
            <span className="font-[family-name:var(--font-pixel)] text-[10px] text-muted-foreground tracking-widest">
              {"// NAVIGATION"}
            </span>
          </div>
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
              const Icon = item.icon

              if (item.comingSoon) {
                return (
                  <li key={item.href}>
                    <div
                      className={cn(
                        "flex items-center gap-3 px-4 py-2.5",
                        "border-l-2 border-transparent",
                        "text-muted-foreground/50 cursor-not-allowed"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      <div className="flex flex-col">
                        <span className="text-sm">{item.label}</span>
                        <span className="font-[family-name:var(--font-pixel)] text-[10px]">
                          coming soon
                        </span>
                      </div>
                    </div>
                  </li>
                )
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2.5 transition-all duration-200",
                      "hover:bg-sidebar-accent hover:text-primary",
                      "border-l-2 border-transparent",
                      isActive && "bg-sidebar-accent border-l-primary text-primary"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Auth Section */}
        <div className="px-4 py-3 border-t border-border">
          {isSignedIn ? (
            <div className="flex items-center gap-3">
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: { avatarBox: "w-8 h-8" }
                }}
              />
              <span className="font-[family-name:var(--font-pixel)] text-xs text-primary truncate">
                {user.firstName ?? user.username ?? "user"}
              </span>
            </div>
          ) : (
            <SignInButton mode="redirect">
              <button className="w-full px-3 py-2 bg-primary text-primary-foreground rounded text-xs font-[family-name:var(--font-pixel)] hover:bg-primary/90 transition-colors">
                Sign In
              </button>
            </SignInButton>
          )}
        </div>

        {/* Decorative divider */}
        <div className="px-4 py-2">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        {/* Decorative elements */}
        <div className="p-4 text-center">
          <p className="font-[family-name:var(--font-pixel)] text-[10px] text-muted-foreground">
            {"<< "}est. 2026{" >>"}
          </p>
          <div className="mt-2 flex justify-center gap-1">
            {["♠", "♥", "♦", "♣"].map((suit, i) => (
              <span key={i} className={cn("text-xs", i % 2 === 1 ? "text-primary" : "text-muted-foreground")}>
                {suit}
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-pixel)] text-lg text-primary glow-pink">FUKURO</span>
            <span className="font-[family-name:var(--font-jp)] text-xs text-muted-foreground">梟の祠</span>
          </Link>
          <div className="flex items-center gap-2">
            {isSignedIn ? (
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: { avatarBox: "w-7 h-7" }
                }}
              />
            ) : (
              <SignInButton mode="redirect">
                <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded text-xs font-[family-name:var(--font-pixel)] hover:bg-primary/90 transition-colors">
                  Sign In
                </button>
              </SignInButton>
            )}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 hover:bg-secondary rounded"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t border-border bg-background/95 backdrop-blur-sm">
            <ul className="py-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                const Icon = item.icon

                if (item.comingSoon) {
                  return (
                    <li key={item.href}>
                      <div
                        className={cn(
                          "flex items-center gap-3 px-4 py-3",
                          "text-muted-foreground/50 cursor-not-allowed"
                        )}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                        <span className="font-[family-name:var(--font-pixel)] text-xs ml-auto">
                          coming soon
                        </span>
                      </div>
                    </li>
                  )
                }

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3",
                        "hover:bg-secondary",
                        isActive && "bg-secondary text-primary"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}
