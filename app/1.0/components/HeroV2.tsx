'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './HeroV2.module.css'

const videos = [
  '/hero/Hero1.mp4',
  '/hero/Hero2.mov',
  '/hero/Hero3.mp4',
  '/hero/Hero4.mov',
]

export default function HeroV2() {
  const refs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ]

  const [active, setActive] = useState(0)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const current = refs[active].current
    if (!current) return

    const handleEnded = () => {
      playNext()
    }

    const handleError = () => {
      playNext()
    }

    current.addEventListener('ended', handleEnded)
    current.addEventListener('error', handleError)

    return () => {
      current.removeEventListener('ended', handleEnded)
      current.removeEventListener('error', handleError)
    }
  }, [active, index])

  const playNext = () => {
    const nextVideoIndex = (index + 1) % videos.length
    const hidden = refs[1 - active].current

    if (!hidden) return

    hidden.src = videos[nextVideoIndex]
    hidden.load()

    const onCanPlay = () => {
      hidden.play().catch(() => { })
      setIndex(nextVideoIndex)
      setActive(prev => 1 - prev)
      hidden.removeEventListener('canplay', onCanPlay)
    }

    const onError = () => {
      hidden.removeEventListener('error', onError)
      setIndex(nextVideoIndex)
      playNext()
    }

    hidden.addEventListener('canplay', onCanPlay)
    hidden.addEventListener('error', onError)
  }

  useEffect(() => {
    const first = refs[0].current
    if (!first) return

    first.src = videos[0]
    first.load()
    first.play().catch(() => { })
  }, [])

  return (
    <section className={styles.hero}>
      <video
        ref={refs[0]}
        className={`${styles.videoBackground} ${active === 0 ? styles.active : ''
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