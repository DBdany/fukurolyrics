'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface CollapsibleBannerProps {
  imageSrc: string
  title: string
  subtitle?: string
  titleJp?: string
}

export function CollapsibleBanner({
  imageSrc,
  title,
  subtitle,
  titleJp,
}: CollapsibleBannerProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When sentinel exits viewport (scrolled past), collapse banner
        setIsCollapsed(!entry.isIntersecting)
      },
      {
        threshold: 0,
        rootMargin: '-100px 0px 0px 0px',
      }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Invisible sentinel element that triggers collapse */}
      <div
        ref={sentinelRef}
        className="pointer-events-none absolute left-0 top-0 h-1 w-full"
        aria-hidden="true"
      />

      <header
        className={`
          banner relative
          ${isCollapsed ? 'banner--collapsed' : 'banner--expanded'}
        `}
      >
        {/* Background image */}
        <div className="banner-bg">
          <Image
            src={imageSrc}
            alt=""
            fill
            priority
            sizes="100vw"
            className={`
              object-cover transition-transform duration-500
              ${isCollapsed ? 'scale-110' : 'scale-100'}
            `}
          />
        </div>

        {/* Gradient overlay */}
        <div className="banner-overlay" />

        {/* Title content */}
        <div
          className={`
            absolute bottom-0 left-0 right-0 p-6
            transition-all duration-300 ease-out
            ${isCollapsed ? 'pb-3' : 'pb-8'}
          `}
        >
          <div className="mx-auto max-w-3xl">
            {titleJp && (
              <p
                lang="ja"
                className={`
                  font-medium text-[var(--accent-gold)] transition-all duration-300
                  ${isCollapsed ? 'text-xs opacity-0' : 'text-sm mb-1 opacity-100'}
                `}
              >
                {titleJp}
              </p>
            )}
            <h1
              className={`
                font-bold text-white drop-shadow-lg transition-all duration-300
                ${isCollapsed ? 'text-xl' : 'text-4xl'}
              `}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={`
                  text-white/80 transition-all duration-300
                  ${isCollapsed ? 'text-xs opacity-0 h-0' : 'text-lg mt-2 opacity-100'}
                `}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </header>
    </>
  )
}
