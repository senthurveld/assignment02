import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handle = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer className="ft">
        <style>{`
          .ft{
            margin-top:5rem;
            background:var(--color-surface);
            border-top:1px solid var(--color-border);
            padding-top:4.5rem;
            font-family:var(--font-body);
          }

          .ft-wrap{
            max-width:1200px;
            margin:auto;
            padding:0 2.5rem 3rem;
            display:grid;
            grid-template-columns:1.3fr 1fr 1fr 1.4fr;
            gap:2.8rem;
          }

          @media(max-width:1000px){
            .ft-wrap{grid-template-columns:1fr 1fr;}
          }
          @media(max-width:600px){
            .ft-wrap{grid-template-columns:1fr;}
          }

          /* headings */
          .ft-title{
            font-family:var(--font-head2);
            font-size:.9rem;
            letter-spacing:.18em;
            text-transform:uppercase;
            margin-bottom:1.2rem;
            color:#1e293b; /* new distinct heading tone */
          }

          .ft-logo{
            font-family:var(--font-head2);
            font-size:1.6rem;
            font-weight:800;
            background:var(--gradient-logo);
            -webkit-background-clip:text;
            color:transparent;
            margin-bottom:.6rem;
          }

          .ft-desc{
            font-size:.9rem;
            line-height:1.7;
            color:var(--color-body);
            max-width:260px;
            margin-bottom:1.3rem;
          }

          /* social icons */
          .ft-social{
            display:flex;
            gap:.6rem;
          }

          .ft-icon{
            width:38px;
            height:38px;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:12px;
            border:1px solid var(--color-border);
            background:#fff;
            cursor:pointer;
            transition:.3s;
            color:var(--color-body);
          }

            .ft-icon:nth-child(1):hover{background:#FF0000;} /* YouTube */
            .ft-icon:nth-child(2):hover{background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
} /* Instagram */
            .ft-icon:nth-child(3):hover{background:#000;} /* X */
            .ft-icon:nth-child(4):hover{background:#1877F2;} /* Facebook */


          .ft-list{
            display:flex;
            flex-direction:column;
            gap:.6rem;
          }

          .ft-link{
            font-size:.9rem;
            color:var(--color-body);
            text-decoration:none;
            transition:.25s;
          }
          .ft-link:hover{
            color:#0EA5E9;
            transform:translateX(5px);
          }

          .ft-contact{
            font-size:.9rem;
            line-height:1.7;
            color:var(--color-body);
          }

          .ft-map{
            width:100%;
            height:160px;
            border-radius:16px;
            border:1px solid var(--color-border);
            box-shadow:0 10px 30px rgba(56,189,248,.12);
          }

          .ft-bottom{
            border-top:1px solid var(--color-border);
            text-align:center;
            padding:1.2rem;
            font-size:.8rem;
            color:#64748b;
            background:linear-gradient(180deg,#fff,#f8fbff);
          }

          .ft-highlight{
            background:var(--gradient-logo);
            -webkit-background-clip:text;
            color:transparent;
            font-weight:600;
          }

          /* Scroll Button */
          .scrollTop{
            position:fixed;
            right:22px;
            bottom:24px;
            width:48px;
            height:48px;
            border:none;
            border-radius:16px;
            cursor:pointer;
            background:linear-gradient(135deg,#0EA5E9,#2563EB);
            color:#fff;
            display:flex;
            align-items:center;
            justify-content:center;
            box-shadow:0 12px 30px rgba(37,99,235,.35);
            transition:.35s;
            opacity:0;
            pointer-events:none;
            transform:translateY(15px);
            z-index:999;
          }

          .scrollTop.show{
            opacity:1;
            pointer-events:auto;
            transform:none;
          }

          .scrollTop:hover{
            transform:translateY(-6px) scale(1.07);
            box-shadow:0 20px 45px rgba(37,99,235,.45);
          }
            .ft-title{
            font-family:var(--font-head2);
            font-size:.75rem;
            letter-spacing:.25em;
            text-transform:uppercase;
            color:var(--color-accent-dark);
            margin-bottom:.8rem;
          }
        `}</style>

        <div className="ft-wrap" id="contact">
          {/* Brand */}
          <div>
            <div className="ft-logo">Medico Expo</div>
            <p className="ft-desc">
              Helping students choose the right medical career path through
              expert counseling, trusted universities, and admission guidance.
            </p>

            <div className="ft-social">
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ft-icon"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C15.8 5 12 5 12 5h0s-3.8 0-6.9.1c-.4 0-1.3 0-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.3v1.4C2 14.4 2.2 16 2.2 16s.2 1.4.8 2c.8.8 1.9.8 2.4.9 1.7.2 6.6.2 6.6.2s3.8 0 6.9-.1c.4 0 1.3 0 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.4C22 9.6 21.8 8 21.8 8ZM9.8 15.3V8.7l6.3 3.3-6.3 3.3Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ft-icon"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm5 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.5-.8a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                </svg>
              </a>

              {/* X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ft-icon"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M18.9 2H22l-6.6 7.5L23 22h-6.8l-5.3-6.9L4.8 22H2l7-8L1 2h6.9l4.8 6.3L18.9 2Z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ft-icon"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.6V12h2.6V9.7c0-2.6 1.6-4.1 4-4.1 1.2 0 2.4.2 2.4.2v2.6h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="ft-title">Quick Links</div>
            <div className="ft-list">
              <a href="#about" className="ft-link">
                About
              </a>
              <a href="#benefits" className="ft-link">
                Benefits
              </a>
              <a href="#countries" className="ft-link">
                Countries
              </a>
              <a href="#register" className="ft-link">
                Register
              </a>
              <a href="#contact" className="ft-link">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="ft-title">Contact</div>
            <div className="ft-contact">
              📍 Chennai, Tamil Nadu
              <br />
              📞 +91 98765 43210
              <br />
              ✉ info@medicoexpo.com
              <br />
              🕒 Mon–Sat : 9AM–7PM
            </div>
          </div>

          {/* Map */}
          <div>
            <div className="ft-title">Location</div>
            <iframe
              className="ft-map"
              src="https://maps.google.com/maps?q=Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />
          </div>
        </div>

        <div className="ft-bottom">
          © {new Date().getFullYear()}{" "}
          <span className="ft-highlight">Medico Expo</span>. All Rights
          Reserved.
        </div>
      </footer>

      {/* Scroll button */}
      <button
        className={`scrollTop ${showTop ? "show" : ""}`}
        onClick={scrollTop}
      >
        ↑
      </button>
    </>
  );
}
