'use client'

import { useEffect, useRef } from 'react'

/**
 * Hero — software agency landing hero.
 * Self-contained: no Tailwind config, no external CSS, no image assets.
 * Drop into app/page.tsx or any route as <Hero />.
 */
export default function HeroV3() {
  const sceneRef = useRef<HTMLDivElement>(null)

  // Subtle parallax: shapes drift toward the cursor. Skipped entirely
  // for touch devices and respects prefers-reduced-motion.
  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const shapes = scene.querySelectorAll<HTMLElement>('[data-depth]')

    function handleMove(e: MouseEvent) {
      const rect = scene!.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      shapes.forEach((shape) => {
        const depth = parseFloat(shape.dataset.depth || '0')
        shape.style.transform = `translate(${x * depth}px, ${y * depth}px)`
      })
    }

    function handleLeave() {
      shapes.forEach((shape) => {
        shape.style.transform = 'translate(0px, 0px)'
      })
    }

    scene.addEventListener('mousemove', handleMove)
    scene.addEventListener('mouseleave', handleLeave)
    return () => {
      scene.removeEventListener('mousemove', handleMove)
      scene.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="copy">
          <span className="eyebrow">Software Engineering Studio</span>
          <h1>
            We build the software
            <br />
            other agencies won&apos;t.
          </h1>
          <p>
            System Castle partners with founders and product teams to design,
            build, and ship systems that hold up under real traffic —
            not just demo day.
          </p>
          <div className="ctas">
            <a href="#contact" className="btn-primary">
              Start a project
              <span aria-hidden>&rarr;</span>
            </a>
            <a href="#work" className="btn-secondary">
              See our work
              <span aria-hidden>&rarr;</span>
            </a>
          </div>

          <div className="proof">
            <div className="proof-item">
              <strong>40+</strong>
              <span>Products shipped</span>
            </div>
            <div className="proof-divider" />
            <div className="proof-item">
              <strong>6yrs</strong>
              <span>In production</span>
            </div>
            <div className="proof-divider" />
            <div className="proof-item">
              <strong>99.98%</strong>
              <span>Uptime avg.</span>
            </div>
          </div>
        </div>

        <div className="scene" ref={sceneRef}>
          <div className="ring ring-1" />
          <div className="ring ring-2" />
          <div className="ground-shadow" />

          <div className="shape sphere-frost" data-depth="14" />
          <div className="shape sphere-purple" data-depth="26" />
          <div className="shape cube" data-depth="10" />
          <div className="shape prism" data-depth="20" />
          <div className="dot dot-1" data-depth="34" />
          <div className="dot dot-2" data-depth="30" />
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          background: linear-gradient(160deg, #eef0f5, #e4e7ee);
          overflow: hidden;
        }

        .hero-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 40px 120px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 20px;
        }

        .copy {
          animation: rise 0.7s ease both;
        }

        .eyebrow {
          display: inline-block;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #5b5f6b;
          margin-bottom: 20px;
        }

        h1 {
          font-size: 48px;
          line-height: 1.12;
          font-weight: 600;
          letter-spacing: -1.3px;
          color: #15161a;
          margin: 0;
        }

        .copy p {
          margin-top: 22px;
          color: #5b5f6b;
          font-size: 16.5px;
          line-height: 1.65;
          max-width: 420px;
        }

        .ctas {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-top: 34px;
        }

        .btn-primary,
        .btn-secondary {
          font-family: inherit;
          font-size: 14.5px;
          font-weight: 500;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: transform 0.15s ease, opacity 0.15s ease;
        }

        .btn-primary {
          background: #15161a;
          color: #fff;
          border-radius: 8px;
          padding: 13px 20px;
        }

        .btn-primary:hover {
          transform: translateY(-1px);
        }

        .btn-secondary {
          color: #15161a;
        }

        .btn-secondary:hover {
          opacity: 0.65;
        }

        .proof {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 56px;
          padding-top: 28px;
          border-top: 1px solid rgba(20, 20, 30, 0.08);
          max-width: 420px;
        }

        .proof-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .proof-item strong {
          font-size: 20px;
          font-weight: 600;
          color: #15161a;
          letter-spacing: -0.3px;
        }

        .proof-item span {
          font-size: 12.5px;
          color: #5b5f6b;
        }

        .proof-divider {
          width: 1px;
          height: 28px;
          background: rgba(20, 20, 30, 0.1);
        }

        /* --- 3D scene --- */
        .scene {
          position: relative;
          height: 440px;
          width: 100%;
          animation: fade-in 1s ease both 0.2s;
        }

        .ring {
          position: absolute;
          border: 1px solid rgba(30, 30, 50, 0.14);
          border-radius: 50%;
        }

        .ring-1 {
          width: 640px;
          height: 230px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-6deg);
        }

        .ring-2 {
          width: 520px;
          height: 320px;
          top: 46%;
          left: 54%;
          transform: translate(-50%, -50%) rotate(4deg);
          border-color: rgba(30, 30, 50, 0.08);
        }

        .shape {
          position: absolute;
          filter: drop-shadow(0 30px 40px rgba(30, 30, 60, 0.12));
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          animation: float 7s ease-in-out infinite;
        }

        .sphere-frost {
          width: 190px;
          height: 190px;
          border-radius: 50%;
          top: 38%;
          left: 34%;
          background: radial-gradient(
              circle at 32% 28%,
              rgba(255, 255, 255, 0.95) 0%,
              rgba(255, 255, 255, 0.35) 16%,
              rgba(255, 255, 255, 0.05) 30%,
              transparent 45%
            ),
            radial-gradient(circle at 65% 70%, rgba(150, 160, 190, 0.25), transparent 60%),
            linear-gradient(155deg, rgba(255, 255, 255, 0.55), rgba(200, 205, 220, 0.25));
          box-shadow: inset 0 0 30px rgba(255, 255, 255, 0.5),
            inset 0 -20px 40px rgba(120, 120, 150, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.6);
          animation-delay: 0s;
        }

        .sphere-purple {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          top: 8%;
          left: 52%;
          background: radial-gradient(
              circle at 30% 25%,
              rgba(255, 255, 255, 0.9),
              rgba(255, 255, 255, 0.1) 22%,
              transparent 40%
            ),
            radial-gradient(circle at 60% 75%, #7a6de0, #9b8cf0 45%, #b9adf5 75%);
          border: 1px solid rgba(255, 255, 255, 0.4);
          animation-delay: 1.2s;
        }

        .cube {
          width: 140px;
          height: 140px;
          top: 52%;
          left: 56%;
          background: linear-gradient(160deg, rgba(255, 255, 255, 0.85), rgba(210, 215, 230, 0.35));
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 6px;
          box-shadow: inset 0 0 25px rgba(255, 255, 255, 0.6),
            inset -10px -10px 30px rgba(140, 145, 170, 0.2);
          animation-delay: 0.6s;
        }
        .cube::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 6px;
          transform: perspective(600px) rotateX(8deg) rotateY(-18deg);
        }

        .prism {
          width: 0;
          height: 0;
          top: 24%;
          left: 70%;
          border-left: 60px solid transparent;
          border-right: 60px solid transparent;
          border-bottom: 110px solid rgba(230, 232, 240, 0.55);
          filter: drop-shadow(-6px 10px 4px rgba(255, 255, 255, 0.5))
            drop-shadow(0 25px 30px rgba(30, 30, 60, 0.1));
          animation-delay: 1.8s;
        }

        .dot {
          position: absolute;
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .dot-1 {
          width: 16px;
          height: 16px;
          top: 30%;
          left: 20%;
          background: radial-gradient(circle at 35% 30%, #fff, #cfd3e0 70%);
          box-shadow: 0 4px 10px rgba(30, 30, 60, 0.15);
          animation-delay: 0.3s;
        }

        .dot-2 {
          width: 14px;
          height: 14px;
          top: 64%;
          left: 85%;
          background: radial-gradient(circle at 35% 30%, #fff, #cfd3e0 70%);
          box-shadow: 0 4px 10px rgba(30, 30, 60, 0.15);
          animation-delay: 2s;
        }

        .ground-shadow {
          position: absolute;
          width: 140px;
          height: 14px;
          border-radius: 50%;
          background: rgba(60, 60, 90, 0.15);
          filter: blur(6px);
          top: 80%;
          left: 38%;
        }

        @keyframes float {
          0%,
          100% {
            translate: 0 0px;
          }
          50% {
            translate: 0 -10px;
          }
        }

        @keyframes rise {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .copy,
          .scene,
          .shape,
          .dot {
            animation: none !important;
          }
        }

        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr;
            padding: 60px 24px 80px;
          }
          .scene {
            height: 320px;
            margin-top: 30px;
          }
          h1 {
            font-size: 34px;
          }
          .proof {
            gap: 16px;
          }
        }
      `}</style>
    </section>
  )
}