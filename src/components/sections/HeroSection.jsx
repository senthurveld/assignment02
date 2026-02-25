import { useState, useEffect } from "react";

const LOCATIONS = ["Coimbatore", "Chennai", "Trichy", "Madurai", "Salem"];

const HIGHLIGHTS = [
  "15+ Countries",
  "Govt & Private College Representatives",
  "Medical Education Experts",
];

const FLAGS = ["🇮🇳", "🇷🇺", "🇨🇳", "🇺🇿", "🇰🇿", "🇧🇾", "🇵🇭", "🇬🇪", "🇦🇲", "🇦🇿"];

export default function HeroSection() {
  const [locIdx, setLocIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setLocIdx((i) => (i + 1) % LOCATIONS.length),
      2200,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{`
        .hero {
          position: relative;
          min-height: calc(100vh - 72px);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-family: var(--font-body);
        }

        /* ── decorative background ── */
        .hero-orb-1 {
          position: absolute;
          width: 750px; height: 750px;
          border-radius: 50%;
          background: radial-gradient(circle,
            rgba(186,230,253,0.6) 0%,
            rgba(56,189,248,0.1) 45%,
            transparent 70%);
          top: -28%; left: -16%;
          pointer-events: none;
          animation: heroOrb1 15s ease-in-out infinite;
        }
        .hero-orb-2 {
          position: absolute;
          width: 580px; height: 580px;
          border-radius: 50%;
          background: radial-gradient(circle,
            rgba(254,215,170,0.6) 0%,
            rgba(251,146,60,0.1) 45%,
            transparent 70%);
          bottom: -20%; right: -12%;
          pointer-events: none;
          animation: heroOrb2 19s ease-in-out infinite;
        }
        .hero-dots {
          position: absolute; inset: 0;
          background-image: radial-gradient(
            circle, rgba(14,165,233,0.11) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }
        .hero-diag {
          position: absolute; inset: 0;
          background: repeating-linear-gradient(
            -50deg, transparent, transparent 68px,
            rgba(56,189,248,0.022) 68px, rgba(56,189,248,0.022) 69px);
          pointer-events: none;
        }

        @keyframes heroOrb1 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(3%,5%) scale(1.06); }
        }
        @keyframes heroOrb2 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(-4%,-4%) scale(1.08); }
        }

        /* ── inner layout ── */
        .hero-body {
          position: relative;
          z-index: 2;
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 300px;
          align-items: center;
          gap: 4rem;
          max-width: 1380px;
          margin: 0 auto;
          width: 100%;
          padding: 2rem 2.5rem 4rem;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
        }

        /* badge */
        .h-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          background: rgba(56,189,248,0.08);
          border: 1px solid rgba(56,189,248,0.25);
          border-radius: 99px;
          padding: 0.36rem 1rem 0.36rem 0.65rem;
          width: fit-content;
          font-size: 0.73rem;
          font-weight: 600;
          color: var(--color-primary-dark);
          letter-spacing: 0.05em;
          opacity: 0;
          animation: hFadeUp 0.55s 0.05s ease forwards;
        }
        .h-badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--color-primary-dark);
          animation: hDotPulse 2s ease infinite;
          flex-shrink: 0;
        }
        @keyframes hDotPulse {
          0%   { box-shadow: 0 0 0 0 rgba(14,165,233,0.55); }
          70%  { box-shadow: 0 0 0 7px rgba(14,165,233,0); }
          100% { box-shadow: 0 0 0 0 rgba(14,165,233,0); }
        }

        /* eyebrow */
        .h-eyebrow {
          font-family: var(--font-head2);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--color-accent-dark);
          opacity: 0;
          animation: hFadeUp 0.55s 0.1s ease forwards;
        }

        /* headline */
        .h-title {
          font-family: var(--font-head1);
          font-size: clamp(3rem, 5.8vw, 5rem);
          font-weight: 900;
          line-height: 0.96;
          letter-spacing: -0.025em;
          text-transform: uppercase;
          margin: 0;
          opacity: 0;
          animation: hFadeUp 0.6s 0.15s ease forwards;
        }
        .h-title-plain {
          display: block;
          color: var(--color-heading);
        }
        .h-title-grad {
          display: block;
          background: var(--gradient-logo);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* tagline */
        .h-tagline {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(1rem, 1.7vw, 1.18rem);
          color: var(--color-muted);
          line-height: 1.5;
          border-left: 3px solid var(--color-primary);
          padding-left: 1rem;
          opacity: 0;
          animation: hFadeUp 0.6s 0.22s ease forwards;
        }

        /* subtext */
        .h-sub {
          font-size: 0.97rem;
          color: var(--color-body);
          line-height: 1.75;
          max-width: 540px;
          opacity: 0;
          animation: hFadeUp 0.6s 0.28s ease forwards;
        }
        .h-sub em {
          font-style: normal;
          color: var(--color-primary-dark);
          font-weight: 600;
        }

        /* highlights */
        .h-highlights {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          opacity: 0;
          animation: hFadeUp 0.6s 0.34s ease forwards;
        }
        .h-hl {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--color-body);
        }
        .h-hl-check {
          width: 20px; height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
          display: flex; align-items: center; justify-content: center;
          font-size: 0.6rem;
          color: #fff;
          font-weight: 900;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(14,165,233,0.28);
        }

        /* location ticker */
        .h-loc {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          color: var(--color-muted);
          font-weight: 500;
          opacity: 0;
          animation: hFadeUp 0.6s 0.4s ease forwards;
        }
        .h-loc-pin {
          color: var(--color-accent-dark);
          flex-shrink: 0;
        }
        .h-loc-ticker {
          font-weight: 700;
          color: var(--color-accent-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.76rem;
          animation: hLocSwap 2.2s ease infinite;
          display: inline-block;
          min-width: 100px;
        }
        @keyframes hLocSwap {
          0%   { opacity: 0; transform: translateY(5px); }
          12%  { opacity: 1; transform: translateY(0); }
          85%  { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-5px); }
        }
        .h-loc-dim { color: var(--color-muted); }

        /* CTA row */
        .h-ctas {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
          opacity: 0;
          animation: hFadeUp 0.6s 0.45s ease forwards;
        }

        .h-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.88rem 2rem;
          background: linear-gradient(135deg, var(--color-accent), var(--color-accent-dark));
          color: #fff;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          border: none;
          border-radius: 11px;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 18px rgba(251,146,60,0.3);
          position: relative;
          overflow: hidden;
        }
        .h-btn-primary::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .h-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 26px rgba(251,146,60,0.4); }
        .h-btn-primary:hover::after { opacity: 1; }
        .h-btn-primary:active { transform: translateY(0); }

        .h-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.88rem 1.75rem;
          background: rgba(56,189,248,0.07);
          color: var(--color-primary-dark);
          font-family: var(--font-body);
          font-size: 0.88rem;
          font-weight: 600;
          border: 1.5px solid rgba(56,189,248,0.28);
          border-radius: 11px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .h-btn-ghost:hover {
          background: rgba(56,189,248,0.12);
          border-color: var(--color-primary);
          transform: translateY(-2px);
        }

        /* proof */
        .h-proof {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          opacity: 0;
          animation: hFadeUp 0.6s 0.5s ease forwards;
        }
        .h-avs { display: flex; }
        .h-av {
          width: 28px; height: 28px;
          border-radius: 50%;
          border: 2px solid var(--color-bgmain);
          margin-left: -7px;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.6rem;
          font-weight: 700;
          color: #fff;
        }
        .h-av:first-child { margin-left: 0; }
        .av1 { background: linear-gradient(135deg,#0EA5E9,#38BDF8); }
        .av2 { background: linear-gradient(135deg,#FB923C,#EA580C); }
        .av3 { background: linear-gradient(135deg,#10B981,#059669); }
        .av4 { background: linear-gradient(135deg,#8B5CF6,#7C3AED); }
        .h-proof-txt {
          font-size: 0.76rem;
          color: var(--color-muted);
          line-height: 1.4;
        }
        .h-proof-txt strong { color: var(--color-heading); font-weight: 700; }

        .hero-right {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          opacity: 0;
          animation: hFadeRight 0.7s 0.25s ease forwards;
        }

        @keyframes hFadeRight {
          from { opacity: 0; transform: translateX(28px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* card */
        .ev-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 20px;
          padding: 1.6rem;
          box-shadow:
            0 1px 3px rgba(0,0,0,0.04),
            0 8px 24px rgba(56,189,248,0.09),
            0 24px 52px rgba(56,189,248,0.06);
          animation: evFloat 5s ease-in-out infinite;
        }
        @keyframes evFloat {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-9px); }
        }

        .ev-live {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(251,146,60,0.09);
          border: 1px solid rgba(251,146,60,0.22);
          border-radius: 6px;
          padding: 0.26rem 0.65rem;
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-accent-dark);
          margin-bottom: 1rem;
        }
        .ev-live-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--color-accent);
          animation: hDotPulse 2s ease infinite;
        }

        .ev-name {
          font-family: var(--font-head1);
          font-size: 1.55rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 1;
          background: var(--gradient-logo);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.2rem;
        }
        .ev-type {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-muted);
          margin-bottom: 1.2rem;
        }

        .ev-rule {
          height: 1px;
          background: var(--color-border);
          margin-bottom: 1.1rem;
        }

        .ev-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.65rem;
          margin-bottom: 1.1rem;
        }
        .ev-stat {
          background: var(--color-bgmain);
          border: 1px solid var(--color-border);
          border-radius: 10px;
          padding: 0.65rem 0.7rem;
        }
        .ev-stat-n {
          font-family: var(--font-head2);
          font-size: 1.35rem;
          font-weight: 700;
          line-height: 1;
          display: block;
        }
        .ev-stat-n.b {
          background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ev-stat-n.o {
          background: linear-gradient(135deg, var(--color-accent-dark), var(--color-accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ev-stat-l {
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--color-muted);
          display: block;
          margin-top: 0.18rem;
        }

        .ev-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          width: 100%;
          padding: 0.72rem;
          background: linear-gradient(135deg, var(--color-accent), var(--color-accent-dark));
          color: #fff;
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 3px 12px rgba(251,146,60,0.26);
        }
        .ev-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(251,146,60,0.36); }

        /* flags card */
        .ev-flags-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 14px;
          padding: 1rem 1.1rem;
          box-shadow: 0 4px 18px rgba(56,189,248,0.07);
        }
        .ef-label {
          font-size: 0.63rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-muted);
          margin-bottom: 0.6rem;
        }
        .ef-row {
          display: flex;
          gap: 5px;
          flex-wrap: wrap;
        }
        .ef-flag {
          width: 28px; height: 19px;
          border-radius: 4px;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.95rem;
          background: var(--color-bgmain);
          border: 1px solid var(--color-border);
          transition: transform 0.15s;
          cursor: default;
        }
        .ef-flag:hover { transform: scale(1.22); }
        .ef-more {
          width: 26px; height: 19px;
          border-radius: 4px;
          background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
          display: flex; align-items: center; justify-content: center;
          font-size: 0.57rem;
          font-weight: 700;
          color: #fff;
        }

        .hero-locbar {
          position: relative;
          z-index: 2;
        //   background: var(--color-surface);
          border-top: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.8rem 2rem;
          opacity: 0;
          animation: hFadeUp 0.6s 0.58s ease forwards;
        }
        .lb-inner {
          display: flex;
          align-items: center;
          gap: 0;
        }
        .lb-item {
          display: flex;
          align-items: center;
          gap: 0.42rem;
          padding: 0.18rem 1.1rem;
          font-size: 0.73rem;
          font-weight: 600;
          color: var(--color-muted);
          letter-spacing: 0.07em;
          text-transform: uppercase;
          cursor: default;
          transition: color 0.18s;
          white-space: nowrap;
        }
        .lb-item:hover { color: var(--color-primary-dark); }
        .lb-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
          flex-shrink: 0;
        }
        .lb-pipe {
          width: 1px; height: 16px;
          background: var(--color-border);
          flex-shrink: 0;
        }

        /* ── Shared keyframes ── */
        @keyframes hFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Responsive ── */
        @media (max-width: 1060px) {
          .hero-body {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 3.5rem 2rem 3rem;
            gap: 2.5rem;
            justify-items: center;
          }
          .hero-left { align-items: center; }
          .h-tagline { text-align: left; }
          .h-highlights { align-items: flex-start; }
          .h-loc { justify-content: center; }
          .hero-right { max-width: 340px; width: 100%; }
        }
        @media (max-width: 600px) {
          .hero-body { padding: 2.5rem 1.25rem 2rem; }
          .h-title { font-size: clamp(2.5rem, 11vw, 3.6rem); }
          .h-ctas { flex-direction: column; width: 100%; }
          .h-btn-primary, .h-btn-ghost { width: 100%; justify-content: center; }
          .hero-locbar { padding: 0.65rem 1rem; flex-wrap: wrap; }
          .lb-item { font-size: 0.66rem; padding: 0.2rem 0.6rem; }
        }
      `}</style>

      <section className="hero" id="">
        {/* BG */}
        <div className="hero-orb-1" />
        <div className="hero-orb-2" />
        <div className="hero-dots" />
        <div className="hero-diag" />

        <div className="hero-body">
          
          <div className="hero-left">
            <div className="h-badge">
              <span className="h-badge-dot" />
              Registration Open · 2026
            </div>

            <p className="h-eyebrow">
              Tamil Nadu's Premier Medical Education Event
            </p>

            <h1 className="h-title">
              <span className="h-title-plain">Medico</span>
              <span className="h-title-grad">Expo 2026</span>
            </h1>

            <p className="h-tagline">
              Your Trusted Guide to Medical Admissions
            </p>

            <p className="h-sub">
              Meet <em>15+ Country Delegates</em> &amp; Medical Education
              Experts — all under one roof to guide your path to a global
              medical career.
            </p>

            <div className="h-highlights">
              {HIGHLIGHTS.map((h) => (
                <div className="h-hl" key={h}>
                  <span className="h-hl-check">✔</span>
                  {h}
                </div>
              ))}
            </div>

            <div className="h-loc">
              <svg
                className="h-loc-pin"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="h-loc-dim">Coming to:</span>
              <span className="h-loc-ticker" key={locIdx}>
                {LOCATIONS[locIdx]}
              </span>
              <span className="h-loc-dim">· 5 Cities Across TN</span>
            </div>

            <div className="h-ctas">
              <a href="#register" className="h-btn-primary">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Register Now
              </a>
              <a href="#about" className="h-btn-ghost">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                Learn More
              </a>
            </div>

            <div className="h-proof">
              <div className="h-avs">
                <div className="h-av av1">AK</div>
                <div className="h-av av2">JM</div>
                <div className="h-av av3">SR</div>
                <div className="h-av av4">TP</div>
              </div>
              <p className="h-proof-txt">
                <strong>2,000+</strong> students guided last year
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            {/* Event card */}
            <div className="ev-card">
              <div className="ev-live">
                <span className="ev-live-dot" />
                Live Event · 2026
              </div>
              <div className="ev-name">Medico Expo</div>
              <div className="ev-type">Medical Admissions Fair</div>
              <div className="ev-rule" />
              <div className="ev-stats">
                <div className="ev-stat">
                  <span className="ev-stat-n b">15+</span>
                  <span className="ev-stat-l">Countries</span>
                </div>
                <div className="ev-stat">
                  <span className="ev-stat-n o">5</span>
                  <span className="ev-stat-l">City Venues</span>
                </div>
                <div className="ev-stat">
                  <span className="ev-stat-n b">50+</span>
                  <span className="ev-stat-l">Counsellors</span>
                </div>
                <div className="ev-stat">
                  <span className="ev-stat-n o">Free</span>
                  <span className="ev-stat-l">Entry</span>
                </div>
              </div>
              <button className="ev-btn">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
                Register for Free →
              </button>
            </div>

            {/* Flags card */}
            <div className="ev-flags-card">
              <div className="ef-label">Participating Countries</div>
              <div className="ef-row">
                {FLAGS.map((f, i) => (
                  <div className="ef-flag" key={i}>
                    {f}
                  </div>
                ))}
                <div className="ef-more">+5</div>
              </div>
            </div>
          </div>
        </div>

        {/* Location bar */}
        <div className="hero-locbar">
          <div className="lb-inner">
            {LOCATIONS.map((loc, i) => (
              <div key={loc} style={{ display: "flex", alignItems: "center" }}>
                <div className="lb-item">
                  <span className="lb-dot" />
                  {loc}
                </div>
                {i < LOCATIONS.length - 1 && <span className="lb-pipe" />}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
