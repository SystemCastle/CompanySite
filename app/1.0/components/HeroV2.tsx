'use client'

import { useEffect, useRef } from 'react'

/**
 * Hero v2 — dark, "connected product" software agency hero.
 * Self-contained: no Tailwind config, no external CSS, no image assets.
 * Drop into app/page.tsx or any route as <HeroV2 />.
 */
export default function HeroV2() {
  const sceneRef = useRef<HTMLDivElement>(null)

  // Subtle parallax: cards drift toward the cursor. Skipped for
  // reduced-motion users; harmless no-op on touch devices.
  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const cards = scene.querySelectorAll<HTMLElement>('[data-depth]')

    function handleMove(e: MouseEvent) {
      const rect = scene!.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      cards.forEach((card) => {
        const depth = parseFloat(card.dataset.depth || '0')
        card.style.transform = `translate(${x * depth}px, ${y * depth}px)`
      })
    }

    function handleLeave() {
      cards.forEach((card) => {
        card.style.transform = 'translate(0px, 0px)'
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
          {/* <div className="mobile-proof">Strategy / UI UX / Engineering</div> */}
          <h1>
            We turn ideas into
            <br />
            <span className="accent">powerful</span> software.
          </h1>
          <p>Strategy, design and engineering that helps you build better products, faster.</p>
          <div className="ctas">
            <a href="#contact" className="btn-primary">
              Start a Project <span aria-hidden>&rarr;</span>
            </a>
            <a href="#process" className="btn-secondary">
              Our Process <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </div>

        <div className="scene" ref={sceneRef}>
          {/* connector lines */}
          <svg className="wires" viewBox="0 0 640 420" fill="none">
            <path className="wire" d="M120 260 C 160 220, 190 200, 230 190" />
            <path className="wire" d="M270 250 C 300 220, 320 200, 340 180" />
            <path className="wire" d="M300 90 C 330 100, 350 110, 370 120" />
            <path className="wire" d="M330 150 C 360 180, 390 210, 410 235" />
            <path className="wire" d="M470 230 C 500 200, 520 180, 540 155" />
          </svg>

          <div className="node" style={{ top: '58%', left: '19%' }} />
          <div className="node" style={{ top: '46%', left: '42%' }} />
          <div className="node" style={{ top: '63%', left: '78%' }} />

          {/* Analytics card */}
          <div className="card card-analytics" data-depth="10">
            <span className="card-label">Analytics</span>
            <span className="card-stat up">&uarr; 24.8%</span>
            <svg className="sparkline" viewBox="0 0 120 40" fill="none">
              <path
                d="M2 30 L20 22 L38 26 L56 12 L74 18 L92 6 L118 10"
                stroke="#8b7cf6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Dashboard card */}
          <div className="card card-dashboard" data-depth="16">
            <span className="card-label">Dashboard</span>
            <div className="dashboard-row">
              <span className="dashboard-sub">Users</span>
              <span className="card-stat up small">&uarr; 18.2%</span>
            </div>
            <div className="dashboard-number">12,540</div>
            <div className="bars">
              <span style={{ height: '30%' }} />
              <span style={{ height: '50%' }} />
              <span style={{ height: '40%' }} />
              <span style={{ height: '70%' }} />
              <span style={{ height: '55%' }} />
              <span style={{ height: '85%' }} />
            </div>
          </div>

          {/* code icon */}
          <div className="icon-box code-box" data-depth="22">
            <span>&lt;/&gt;</span>
          </div>

          {/* API response card */}
          <div className="card card-api" data-depth="14">
            <div className="api-head">
              <span className="card-label">API Response</span>
              <span className="status-dot" />
            </div>
            <pre className="json">
              {`{
  `}<span className="tok-key">&quot;status&quot;</span>{`: `}<span className="tok-str">&quot;success&quot;</span>{`,
  `}<span className="tok-key">&quot;data&quot;</span>{`: `}<span className="tok-bool">true</span>{`
}`}
            </pre>
          </div>

          {/* cloud icon */}
          <div className="icon-box cloud-box" data-depth="20">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M6.5 17.5a4 4 0 0 1-.5-7.97A5 5 0 0 1 15.9 8.1 4.5 4.5 0 0 1 17.5 17H6.5Z"
                stroke="white"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Mobile app card */}
          <div className="card card-mobile" data-depth="12">
            <span className="card-label">Mobile App</span>
            <div className="progress-ring-wrap">
              <svg className="progress-ring" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="34" className="ring-track" />
                <circle cx="40" cy="40" r="34" className="ring-fill" />
              </svg>
              <span className="progress-label">75%</span>
            </div>
            <div className="mini-bar">
              <span />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          background: radial-gradient(ellipse 90% 60% at 75% 20%, #16142a 0%, #0a0a12 55%, #08080c 100%);
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .hero-inner {
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          padding: 72px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 20px;
        }

        .copy {
          animation: rise 0.7s ease both;
        }

        .mobile-proof {
          display: none;
        }

        h1 {
          font-family: system-ui, -apple-system, sans-serif;
          font-size: 48px;
          line-height: 1.15;
          font-weight: 600;
          letter-spacing: -1.3px;
          color: #f5f5f7;
          margin: 0;
        }

        .accent {
          color: #8b7cf6;
        }

        .copy p {
          margin-top: 22px;
          color: #9a9aa8;
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
          background: #f5f5f7;
          color: #0a0a12;
          border-radius: 8px;
          padding: 13px 20px;
        }

        .btn-primary:hover {
          transform: translateY(-1px);
        }

        .btn-secondary {
          color: #f5f5f7;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 8px;
          padding: 13px 20px;
        }

        .btn-secondary:hover {
          opacity: 0.7;
        }

        /* --- scene --- */
        .scene {
          position: relative;
          height: 420px;
          width: 100%;
          animation: fade-in 1s ease both 0.2s;
        }

        .wires {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .wire {
          stroke: rgba(139, 124, 246, 0.35);
          stroke-width: 1.5;
          stroke-dasharray: 4 5;
          animation: dash 3s linear infinite;
        }

        .node {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #8b7cf6;
          box-shadow: 0 0 10px 3px rgba(139, 124, 246, 0.7);
          animation: pulse 2.4s ease-in-out infinite;
        }

        .card {
          position: absolute;
          background: linear-gradient(165deg, rgba(30, 28, 48, 0.9), rgba(18, 17, 28, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 16px 18px;
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          animation: float 7s ease-in-out infinite;
        }

        .card-label {
          display: block;
          font-size: 12.5px;
          font-weight: 500;
          color: #cfcfe0;
        }

        .card-stat {
          font-size: 11.5px;
          font-weight: 600;
          padding: 2px 6px;
          border-radius: 5px;
        }

        .card-stat.up {
          color: #6ee7a8;
          background: rgba(110, 231, 168, 0.12);
        }

        .card-stat.small {
          font-size: 10.5px;
        }

        .card-analytics {
          width: 155px;
          top: 26%;
          left: 4%;
          animation-delay: 0.2s;
        }
        .card-analytics .card-stat {
          display: inline-block;
          margin-top: 8px;
        }
        .sparkline {
          width: 100%;
          height: 34px;
          margin-top: 10px;
        }

        .card-dashboard {
          width: 200px;
          top: 2%;
          left: 30%;
          animation-delay: 0.6s;
        }
        .dashboard-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 12px;
        }
        .dashboard-sub {
          font-size: 12px;
          color: #9a9aa8;
        }
        .dashboard-number {
          font-size: 26px;
          font-weight: 700;
          color: #f5f5f7;
          letter-spacing: -0.5px;
          margin-top: 4px;
        }
        .bars {
          display: flex;
          align-items: flex-end;
          gap: 5px;
          height: 32px;
          margin-top: 10px;
        }
        .bars span {
          flex: 1;
          background: linear-gradient(180deg, #a89bfa, #6f5fe0);
          border-radius: 2px;
        }

        .icon-box {
          position: absolute;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: float 7s ease-in-out infinite;
        }

        .code-box {
          top: 8%;
          left: 60%;
          background: linear-gradient(160deg, #8b7cf6, #5a49c9);
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          font-family: 'SF Mono', Menlo, monospace;
          animation-delay: 1s;
        }

        .cloud-box {
          top: 58%;
          left: 40%;
          background: linear-gradient(160deg, #8b7cf6, #5a49c9);
          animation-delay: 1.4s;
        }

        .card-api {
          width: 190px;
          top: 50%;
          left: 55%;
          animation-delay: 1s;
        }
        .api-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #6ee7a8;
          box-shadow: 0 0 6px 2px rgba(110, 231, 168, 0.6);
        }
        .json {
          margin-top: 10px;
          font-family: 'SF Mono', Menlo, monospace;
          font-size: 11.5px;
          line-height: 1.6;
          color: #cfcfe0;
          white-space: pre;
        }
        .tok-key {
          color: #8b7cf6;
        }
        .tok-str {
          color: #6ee7a8;
        }
        .tok-bool {
          color: #f5a97f;
        }

        .card-mobile {
          width: 130px;
          top: 30%;
          left: 82%;
          text-align: center;
          animation-delay: 0.8s;
        }
        .progress-ring-wrap {
          position: relative;
          width: 68px;
          height: 68px;
          margin: 12px auto 0;
        }
        .progress-ring {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }
        .ring-track {
          fill: none;
          stroke: rgba(255, 255, 255, 0.08);
          stroke-width: 6;
        }
        .ring-fill {
          fill: none;
          stroke: #8b7cf6;
          stroke-width: 6;
          stroke-linecap: round;
          stroke-dasharray: 213.6;
          stroke-dashoffset: 53.4; /* 75% */
        }
        .progress-label {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 600;
          color: #f5f5f7;
        }
        .mini-bar {
          margin-top: 10px;
          height: 4px;
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }
        .mini-bar span {
          display: block;
          width: 75%;
          height: 100%;
          background: #8b7cf6;
        }

        @keyframes float {
          0%,
          100% {
            translate: 0 0px;
          }
          50% {
            translate: 0 -8px;
          }
        }

        @keyframes dash {
          to {
            stroke-dashoffset: -18;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
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
          .card,
          .icon-box,
          .node,
          .wire {
            animation: none !important;
          }
        }

        @media (max-width: 900px) {
          .hero {
            min-height: 100svh;
            align-items: center;
            background:
              linear-gradient(180deg, rgba(8, 8, 12, 0.08), rgba(8, 8, 12, 0.55)),
              radial-gradient(ellipse 120% 70% at 50% 8%, #221b48 0%, #0a0a12 54%, #08080c 100%);
          }

          .hero-inner {
            grid-template-columns: 1fr;
            min-height: 100svh;
            padding: 78px 18px 32px;
            align-content: center;
            gap: 80px;
          }

          .copy {
            text-align: center;
            max-width: 390px;
            margin: 0 auto;
            position: relative;
            z-index: 2;
          }

          .mobile-proof {
            width: fit-content;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 14px;
            padding: 7px 11px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.06);
            color: #d8d6ff;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0;
            backdrop-filter: blur(10px);
          }

          .scene {
            height: clamp(270px, 47svh, 350px);
            max-width: 390px;
            margin: 0 auto;
            transform: none;
          }

          h1 {
            font-size: clamp(36px, 10.8vw, 48px);
            line-height: 1.06;
            letter-spacing: 0;
          }

          h1 br {
            display: none;
          }

          .copy p {
            max-width: 330px;
            margin: 16px auto 0;
            color: #b8b8c8;
            font-size: 15.5px;
            line-height: 1.55;
          }

          .ctas {
            display: none;
          }

          .wires {
            left: 50%;
            width: 118%;
            max-width: none;
            opacity: 0.72;
            transform: translateX(-50%);
          }

          .wire {
            stroke-width: 1.2;
          }

          .node {
            width: 7px;
            height: 7px;
          }

          .card {
            border-radius: 16px;
            padding: 12px 13px;
            box-shadow: 0 18px 36px rgba(0, 0, 0, 0.34);
          }

          .card-label {
            font-size: 11px;
          }

          .card-analytics {
            width: 132px;
            top: 38%;
            left: 0;
          }

          .sparkline {
            height: 28px;
            margin-top: 7px;
          }

          .card-dashboard {
            width: 174px;
            top: 2%;
            left: 26%;
          }

          .dashboard-row {
            margin-top: 9px;
          }

          .dashboard-number {
            font-size: 22px;
          }

          .bars {
            height: 26px;
          }

          .code-box {
            top: 11%;
            left: 5%;
          }

          .cloud-box {
            top: 73%;
            left: 43%;
          }

          .card-api {
            width: 160px;
            top: 58%;
            left: 47%;
          }

          .json {
            font-size: 10px;
            line-height: 1.5;
          }

          .card-mobile {
            width: 112px;
            top: 25%;
            left: auto;
            right: 0;
          }

          .progress-ring-wrap {
            width: 54px;
            height: 54px;
            margin-top: 9px;
          }

          .progress-label {
            font-size: 11px;
          }
        }

        @media (max-width: 420px) {
          .hero-inner {
            padding: 72px 16px 28px;
            gap: 34px;
          }

          .copy {
            max-width: 340px;
          }

          .scene {
            height: 292px;
            max-width: 342px;
          }

          .card-dashboard {
            left: 23%;
          }

          .card-analytics {
            top: 40%;
          }

          .card-api {
            top: 62%;
            left: 45%;
          }

          .card-mobile {
            top: 28%;
          }
        }

        @media (max-width: 360px) {
          .hero-inner {
            padding-left: 14px;
            padding-right: 14px;
          }

          h1 {
            font-size: 33px;
          }

          .copy p {
            font-size: 14.5px;
          }

          .scene {
            height: 270px;
            max-width: 316px;
          }

          .card-dashboard {
            width: 160px;
          }

          .card-analytics {
            width: 120px;
          }

          .card-api {
            width: 146px;
          }

          .card-mobile {
            width: 102px;
          }
        }
      `}</style>
    </section>
  )
}
