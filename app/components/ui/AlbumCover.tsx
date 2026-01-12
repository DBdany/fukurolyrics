import Image from 'next/image'

const R2_BASE_URL = 'https://pub-2bc3a6c5a2eb4902b5da3f71447725ae.r2.dev'

interface AlbumCoverProps {
  src: string | null
  alt: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
  priority?: boolean
}

const sizeMap = {
  sm: { width: 64, height: 64 },
  md: { width: 128, height: 128 },
  lg: { width: 300, height: 300 },
}

export function AlbumCover({
  src,
  alt,
  size = 'md',
  className = '',
  priority = false,
}: AlbumCoverProps) {
  const { width, height } = sizeMap[size]

  if (!src) {
    return (
      <div
        className={`flex items-center justify-center rounded-lg bg-neutral-100 ${className}`}
        style={{ width, height }}
      >
        <span className="text-2xl text-neutral-300" lang="ja">梟</span>
      </div>
    )
  }

  const imageUrl = src.startsWith('https://') ? src : `${R2_BASE_URL}/${src}`

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={`rounded-lg object-cover ${className}`}
      priority={priority}
      sizes={`${width}px`}
    />
  )
}
