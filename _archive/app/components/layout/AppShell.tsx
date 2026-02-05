'use client'

import type { ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { BottomTabBar } from './MobileNav'

interface AppShellProps {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="flex min-h-screen flex-col overflow-x-hidden">
        {children}
      </div>
      <BottomTabBar />
    </div>
  )
}
