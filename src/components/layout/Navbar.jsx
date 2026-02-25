import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Benefits", href: "#benefits" },
  { label: "Countries", href: "#countries" },
  { label: "Register", href: "#register" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handle = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setMenuOpen(false);
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [menuOpen]);

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href));
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = "";
      sections.forEach((section, i) => {
        if (section && scrollPos >= section.offsetTop) {
          current = navLinks[i].href;
        }
      });
      setActiveLink(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const yOffset = -72;   
      const y =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveLink(href);
      setMenuOpen(false); 
    }
  };

  return (
    <>
      <style>{`
        .nb {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          transition: all 0.38s cubic-bezier(0.4,0,0.2,1);
          font-family: var(--font-body);
        }

        .nb-clear { background: transparent; }
        .nb-glass {
          background: rgba(240,249,255,0.09);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 4px 28px rgba(56,189,248,0.09);
        }

        .nb-inner {
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
          transition: height 0.3s ease;
        }
        .nb-glass .nb-inner { height: 62px; }

        .nb-logo { display: flex; align-items: center; gap: 11px; text-decoration: none; flex-shrink: 0; }
        .nb-logo-img {
          height: 42px;
          width: auto;
          object-fit: contain;
          border-radius: 8px;
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), filter 0.3s;
          filter: drop-shadow(0 2px 8px rgba(56,189,248,0.25));
        }
        .nb-logo:hover .nb-logo-img {
          transform: scale(1.08) rotate(-3deg);
          filter: drop-shadow(0 4px 16px rgba(56,189,248,0.45));
        }
        .nb-logo-text { display: flex; flex-direction: column; line-height: 1.1; }
        .nb-logo-name {
          font-family: var(--font-head2);
          font-size: 1.35rem;
          font-weight: 600;
          background: var(--gradient-logo);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.01em;
        }
        .nb-logo-tag {
          font-family: var(--font-body);
          font-size: 0.55rem;
          font-weight: 600;
          letter-spacing: 0.19em;
          background: var(--gradient-logo);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-top: 1px;
        }

        .nb-links { display: flex; align-items: center; gap: 2px; list-style: none; }
        .nb-link {
          position: relative;
          padding: 7px 15px;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--color-body);
          text-decoration: none;
          border-radius: 9px;
          transition: color 0.22s ease, background 0.22s ease;
        }
        .nb-link::after {
          content: '';
          position: absolute;
          bottom: 3px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 60%;
          height: 2.5px;
          background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
          border-radius: 99px;
          transition: transform 0.32s cubic-bezier(0.34,1.56,0.64,1);
        }
        .nb-link:hover { color: var(--color-primary-dark); background: rgba(56,189,248,0.08); }
        .nb-link:hover::after,
        .nb-link.active::after { transform: translateX(-50%) scaleX(1); }
        .nb-link.active { color: var(--color-primary-dark); background: rgba(56,189,248,0.1); }

        .nb-cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 10px 22px;
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
          color: #fff;
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          border: none;
          border-radius: 11px;
          text-decoration: none;
          cursor: pointer;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 4px 18px rgba(251,146,60,0.32);
          white-space: nowrap;
        }
        .nb-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.22s;
        }
        .nb-cta:hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 8px 30px rgba(251,146,60,0.44); }
        .nb-cta:hover::before { opacity: 1; }
        .nb-cta:active { transform: translateY(0) scale(0.98); }

        .nb-cta-ring {
          position: absolute;
          inset: 0;
          border-radius: 11px;
          border: 2px solid rgba(251,146,60,0.5);
          animation: nbpulse 2.6s ease-out infinite;
        }
        @keyframes nbpulse {
          0%   { transform: scale(1);    opacity: 0.7; }
          100% { transform: scale(1.18); opacity: 0;   }
        }

        .nb-ham {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 42px; height: 42px;
          gap: 5px;
          background: rgba(56,189,248,0.08);
          border: 1px solid var(--color-border);
          border-radius: 10px;
          cursor: pointer;
          padding: 0;
          transition: background 0.22s;
        }
        .nb-ham:hover { background: rgba(56,189,248,0.15); }
        .nb-bar {
          width: 20px; height: 2px;
          background: var(--color-primary-dark);
          border-radius: 99px;
          transition: all 0.32s cubic-bezier(0.4,0,0.2,1);
          transform-origin: center;
        }
        .nb-ham.open .nb-bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nb-ham.open .nb-bar:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nb-ham.open .nb-bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .nb-mobile {
          position: fixed;
          top: 72px; left: 0; right: 0;
          z-index: 999;
          background: rgba(240,249,255,0.96);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--color-border);
          padding: 1rem 2.5rem 1.6rem;
          transform: translateY(-8px);
          opacity: 0;
          pointer-events: none;
          transition: all 0.32s cubic-bezier(0.4,0,0.2,1);
          box-shadow: 0 20px 40px rgba(56,189,248,0.07);
        }
        .nb-mobile.open { transform: translateY(0); opacity: 1; pointer-events: all; }
        .nb-mobile-list { list-style: none; display: flex; flex-direction: column; gap: 3px; margin-bottom: 1rem; }
        .nb-mlink {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 10px;
          font-size: 0.93rem;
          font-weight: 500;
          color: var(--color-body);
          text-decoration: none;
          border: 1px solid transparent;
          transition: all 0.2s ease;
        }
        .nb-mlink:hover, .nb-mlink.active { background: rgba(56,189,248,0.09); color: var(--color-primary-dark); border-color: var(--color-border); }
        .nb-dot { width: 6px; height: 6px; border-radius: 50%; background: linear-gradient(135deg, var(--color-primary), var(--color-accent)); opacity: 0; flex-shrink: 0; transition: opacity 0.2s; }
        .nb-mlink:hover .nb-dot, .nb-mlink.active .nb-dot { opacity: 1; }
        .nb-cta-full { width: 100%; justify-content: center; padding: 13px; font-size: 0.93rem; border-radius: 12px; }
        .nb-mobile.open .nb-mlink { animation: nbslide 0.3s ease both; }
        .nb-mobile.open .nb-mlink:nth-child(1) { animation-delay: 0.04s; }
        .nb-mobile.open .nb-mlink:nth-child(2) { animation-delay: 0.09s; }
        .nb-mobile.open .nb-mlink:nth-child(3) { animation-delay: 0.14s; }
        .nb-mobile.open .nb-mlink:nth-child(4) { animation-delay: 0.19s; }
        .nb-mobile.open .nb-mlink:nth-child(5) { animation-delay: 0.24s; }
        @keyframes nbslide { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
        @media (max-width: 900px) { .nb-links, .nb-cta-desk { display: none !important; } .nb-ham { display: flex; } }
        @media (max-width: 520px) { .nb-inner { padding: 0 1.25rem; } .nb-mobile { padding: 1rem 1.25rem 1.5rem; } }
      `}</style>

      <nav className={`nb ${scrolled ? "nb-glass" : "nb-clear"}`} ref={menuRef}>
        <div className="nb-inner">
          <a href="#" className="nb-logo">
            <img
              src="logo.png"
              alt="Medico Expo logo"
              className="nb-logo-img relative -top-1"
            />
            <div className="nb-logo-text">
              <span className="nb-logo-name">Medico Expo</span>
              <span className="nb-logo-tag text-center">2026</span>
            </div>
          </a>

          <ul className="nb-links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`nb-link ${activeLink === l.href ? "active" : ""}`}
                  onClick={(e) => handleLinkClick(e, l.href)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#register"
            className="nb-cta nb-cta-desk"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(e, "#register");
            }}
          >
            <span className="nb-cta-ring" />
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
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

          <button
            className={`nb-ham ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="nb-bar" />
            <span className="nb-bar" />
            <span className="nb-bar" />
          </button>
        </div>

        <div className={`nb-mobile ${menuOpen ? "open" : ""}`}>
          <ul className="nb-mobile-list">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`nb-mlink ${activeLink === l.href ? "active" : ""}`}
                  onClick={(e) => handleLinkClick(e, l.href)}
                >
                  <span className="nb-dot" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#register"
            className="nb-cta nb-cta-full"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(e, "#register");
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
            </svg>
            Register Now
          </a>
        </div>
      </nav>
    </>
  );
}
