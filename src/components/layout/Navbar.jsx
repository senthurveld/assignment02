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

  // Scroll effect for navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu if clicked outside
  useEffect(() => {
    if (!menuOpen) return;
    const handle = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setMenuOpen(false);
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [menuOpen]);

  // Track section in view for active link
  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href));
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3; // trigger earlier
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

  // Smooth scroll for mobile links
  const handleMobileClick = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveLink(href);
      setMenuOpen(false);
    }
  };

  // Smooth scroll for desktop links
  const handleLinkClick = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveLink(href);
    }
  };

  return (
    <>
      {/* --- Keep all your existing style block unchanged --- */}

      <nav className={`nb ${scrolled ? "nb-glass" : "nb-clear"}`} ref={menuRef}>
        <div className="nb-inner">
          {/* Logo */}
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

          {/* Desktop links */}
          <ul className="nb-links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`nb-link ${activeLink === l.href ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(l.href);
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#register"
            className="nb-cta nb-cta-desk"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#register");
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

          {/* Hamburger */}
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
      </nav>

      {/* Mobile Drawer */}
      <div className={`nb-mobile ${menuOpen ? "open" : ""}`}>
        <ul className="nb-mobile-list">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`nb-mlink ${activeLink === l.href ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileClick(l.href);
                }}
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
            handleMobileClick("#register");
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

      {/* Spacer */}
      <div style={{ height: "72px" }} />
    </>
  );
}
