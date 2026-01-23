'use client'

import { useSidebar } from '@/components/SidebarProvider'
import { SidebarRail } from './SidebarRail'
import { SidebarPanel } from './SidebarPanel'

export function Sidebar() {
  const { isOpen } = useSidebar()

  return (
    <aside
      className={`
        sidebar
        ${!isOpen ? 'sidebar--collapsed' : ''}
      `}
    >
      <SidebarRail />
      {isOpen && <SidebarPanel />}
    </aside>
  )
}
