'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface TabBarItemProps {
  href: string
  icon: React.ReactNode
  label: string
}

export function TabBarItem({ href, icon, label }: TabBarItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <Link
      href={href}
      className={`
        flex flex-col items-center justify-center gap-1 px-3 py-2
        transition-colors duration-150
        ${isActive
          ? 'text-[var(--accent-crimson)]'
          : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
        }
      `}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-xs font-medium">{label}</span>
    </Link>
  )
}
