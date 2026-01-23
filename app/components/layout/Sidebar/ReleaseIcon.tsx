'use client'

import Image from 'next/image'

const R2_BASE_URL = 'https://pub-2bc3a6c5a2eb4902b5da3f71447725ae.r2.dev'

interface ReleaseIconProps {
  coverArt: string | null
  titleRomaji: string
  isSelected: boolean
  onClick: () => void
}

export function ReleaseIcon({ coverArt, titleRomaji, isSelected, onClick }: ReleaseIconProps) {
  const imageUrl = coverArt
    ? coverArt.startsWith('https://') ? coverArt : `${R2_BASE_URL}/${coverArt}`
    : null

  return (
    <button
      onClick={onClick}
      title={titleRomaji}
      className={`
        group relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full
        transition-all duration-200
        ${isSelected
          ? 'rounded-2xl ring-2 ring-[var(--accent-primary)]'
          : 'hover:rounded-2xl'
        }
      `}
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={titleRomaji}
          fill
          sizes="48px"
          className="object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[var(--bg-tertiary)] text-xs text-[var(--text-muted)]">
          {titleRomaji.charAt(0)}
        </div>
      )}

      {/* Selection indicator bar */}
      <div
        className={`
          absolute left-0 top-1/2 h-2 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full
          transition-all duration-200
          ${isSelected
            ? 'h-10 bg-[var(--accent-primary)]'
            : 'bg-transparent group-hover:h-5 group-hover:bg-[var(--text-muted)]'
          }
        `}
      />
    </button>
  )
}
