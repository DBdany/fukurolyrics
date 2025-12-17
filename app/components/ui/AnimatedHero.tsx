'use client'

import { useState, useEffect, useRef } from 'react'

interface AnimatedHeroProps {
  onAnimationComplete?: () => void
}

export function AnimatedHero({ onAnimationComplete }: AnimatedHeroProps) {
  const [stage, setStage] = useState<'initial' | 'kanji' | 'english' | 'settle' | 'done'>('initial')
  const hasRun = useRef(false)

  useEffect(() => {
    // Check if animation already played this session (prevents replay on client-side nav)
    const hasPlayedThisSession = sessionStorage.getItem('fukuro-intro-played')

    if (hasPlayedThisSession || hasRun.current) {
      // Skip animation, go straight to done
      setStage('done')
      onAnimationComplete?.()
      return
    }

    hasRun.current = true

    const timers = [
      // Start kanji fade in (centered)
      setTimeout(() => setStage('kanji'), 100),
      // Show FUKURO sliding in, kanji shifts left
      setTimeout(() => setStage('english'), 900),
      // Begin settling
      setTimeout(() => setStage('settle'), 1500),
      // Animation complete - hide overlay
      setTimeout(() => {
        setStage('done')
        sessionStorage.setItem('fukuro-intro-played', 'true')
        onAnimationComplete?.()
      }, 2000),
    ]

    return () => timers.forEach(clearTimeout)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Hide completely when done
  if (stage === 'done') {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div
        className={`
          flex items-center justify-center text-4xl font-bold tracking-tight
          transition-all duration-500 ease-out
          ${stage === 'settle' ? 'opacity-0 -translate-y-4' : ''}
        `}
      >
        {/* Kanji - starts centered, shifts left when FUKURO appears */}
        <span
          lang="ja"
          className={`
            transition-all duration-700 ease-out
            ${stage === 'initial' ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
            ${stage === 'english' || stage === 'settle' ? 'mr-3' : 'mr-0'}
          `}
        >
          梟
        </span>

        {/* FUKURO text - hidden initially, slides in from left */}
        <span
          className={`
            text-neutral-400 transition-all duration-600 ease-out
            ${stage === 'initial' || stage === 'kanji'
              ? 'opacity-0 w-0 -translate-x-2'
              : 'opacity-100 w-auto translate-x-0'
            }
          `}
        >
          FUKURO
        </span>
      </div>
    </div>
  )
}
