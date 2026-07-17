'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './HeroV2.module.css'

const videos = [
  '/hero/Hero1.mp4',
  '/hero/Hero2.mov',
  '/hero/Hero3.mp4',
  '/hero/Hero4.mov',
]

// How many seconds before the current video ends should we start
// buffering the next one in the background.
const PRELOAD_LEAD_TIME = 1.5

export default function HeroV2() {
  const refs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ]

  const [active, setActive] = useState(0)
  const [index, setIndex] = useState(0)
  // Controls the gray-screen fix: we don't reveal ANY video until
  // the very first frame has actually been painted.
  const [firstFrameReady, setFirstFrameReady] = useState(false)

  const preloadedRef = useRef(false)

  // --- Attach listeners to whichever video is currently active ---
  useEffect(() => {
    const current = refs[active].current
    if (!current) return

    preloadedRef.current = false

    const handleTimeUpdate = () => {
      if (
        !preloadedRef.current &&
        current.duration &&
        current.currentTime > current.duration - PRELOAD_LEAD_TIME
      ) {
        preloadedRef.current = true
        preloadNext()
      }
    }

    const handleEnded = () => {
      swapToNext()
    }

    const handleError = () => {
      // current video is broken -> skip it immediately
      skipBroken()
    }

    current.addEventListener('timeupdate', handleTimeUpdate)
    current.addEventListener('ended', handleEnded)
    current.addEventListener('error', handleError)

    return () => {
      current.removeEventListener('timeupdate', handleTimeUpdate)
      current.removeEventListener('ended', handleEnded)
      current.removeEventListener('error', handleError)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, index])

  // --- Buffer the next video in the hidden element while current plays ---
  const preloadNext = () => {
    const nextVideoIndex = (index + 1) % videos.length
    const hidden = refs[1 - active].current
    if (!hidden) return

    hidden.src = videos[nextVideoIndex]
    hidden.preload = 'auto'
    hidden.load()
  }

  // --- Instantly swap to the (already-preloaded) hidden video ---
  const swapToNext = () => {
    const nextVideoIndex = (index + 1) % videos.length
    const hidden = refs[1 - active].current
    if (!hidden) return

    // If for some reason it never finished buffering (slow network),
    // fall back gracefully instead of showing a blank frame:
    // wait for it to become playable, then swap.
    const doSwap = () => {
      hidden.currentTime = 0
      hidden.play().catch(() => { })
      setIndex(nextVideoIndex)
      setActive(prev => 1 - prev)
    }

    if (hidden.readyState >= 3 /* HAVE_FUTURE_DATA */) {
      doSwap()
    } else {
      hidden.src = videos[nextVideoIndex]
      hidden.load()
      const onReady = () => {
        hidden.removeEventListener('canplay', onReady)
        doSwap()
      }
      hidden.addEventListener('canplay', onReady)
    }
  }

  // --- If a video fails outright (404 / unsupported codec), skip it ---
  const skipBroken = () => {
    const nextVideoIndex = (index + 1) % videos.length
    const hidden = refs[1 - active].current
    if (!hidden) return

    hidden.src = videos[nextVideoIndex]
    hidden.load()

    const onCanPlay = () => {
      hidden.removeEventListener('canplay', onCanPlay)
      hidden.removeEventListener('error', onError)
      hidden.play().catch(() => { })
      setIndex(nextVideoIndex)
      setActive(prev => 1 - prev)
    }

    const onError = () => {
      hidden.removeEventListener('canplay', onCanPlay)
      hidden.removeEventListener('error', onError)
      setIndex(nextVideoIndex)
      skipBroken() // try the one after that
    }

    hidden.addEventListener('canplay', onCanPlay)
    hidden.addEventListener('error', onError)
  }

  // --- Initial load: only reveal the video once a real frame exists ---
  useEffect(() => {
    const first = refs[0].current
    if (!first) return

    const handleLoadedData = () => {
      // loadeddata fires once the browser has enough data for the
      // CURRENT frame -> safe to reveal without a gray flash.
      setFirstFrameReady(true)
      first.removeEventListener('loadeddata', handleLoadedData)
    }

    first.addEventListener('loadeddata', handleLoadedData)

    first.src = videos[0]
    first.load()
    first.play().catch(() => { })

    return () => {
      first.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [])

  return (
    <section className={styles.hero}>
      {/* Fallback background shown until the first real video frame is ready.
          Replace this solid color / gradient with a blurred still image
          of your first video for an even smoother first impression. */}
      <div
        className={styles.videoFallback}
        style={{ opacity: firstFrameReady ? 0 : 1 }}
      />

      <video
        ref={refs[0]}
        className={`${styles.videoBackground} ${active === 0 && firstFrameReady ? styles.active : ''
          }`}
        muted
        playsInline
        preload="auto"
      />

      <video
        ref={refs[1]}
        className={`${styles.videoBackground} ${active === 1 ? styles.active : ''
          }`}
        muted
        playsInline
        preload="auto"
      />

      <div className={styles.overlay} />

      <div className={styles.heroInner}>
        <h1>
          <span className={styles.heroLine}>
            Digitally Transforming Businesses Through
          </span>

          <span className={styles.heroLineDominant}>
            AI-Powered Software Innovations
          </span>

          <span className={styles.heroLine}>
            and Smart Communication Technologies.
          </span>
        </h1>

        <p>Scaling your business with code and connectivity</p>
      </div>
    </section>
  )
}