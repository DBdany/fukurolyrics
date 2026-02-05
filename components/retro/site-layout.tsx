"use client"

import { Navigation } from "./navigation"
import { Footer } from "./footer"
import { Starfield } from "./starfield"
import { Marquee } from "./marquee"
import type { ReactNode } from "react"

interface SiteLayoutProps {
  children: ReactNode
  announcement?: string
}

export function SiteLayout({ children, announcement }: SiteLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <Starfield />
      
      <div className="flex flex-1 relative z-10">
        <Navigation />

        <div className="flex-1 flex flex-col lg:pt-0 pt-14 min-w-0 lg:ml-48">
          {announcement && (
            <Marquee 
              text={announcement}
              className="border-t-0"
            />
          )}
          
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
          
          <Footer />
        </div>
      </div>
    </div>
  )
}
