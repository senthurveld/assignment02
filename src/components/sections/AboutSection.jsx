import { useEffect, useRef } from "react";

const AUDIENCE = [
  "NEET Aspirants",
  "MBBS / BSc Nursing Students",
  "Parents",
  "Students unsure about Govt vs Private vs Abroad",
];

export default function AboutSection() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("about-show");
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
  }, []);

  return (
    <>
      <style>{`
        .about-sec{
          position:relative;
          overflow:hidden;
          padding:6rem 2.5rem;
        }

        .about-bg1,.about-bg2{
          position:absolute;
          border-radius:50%;
          pointer-events:none;
          opacity:.55;
        }
        .about-bg1{
          width:620px;height:620px;
          background:radial-gradient(circle,var(--color-primary-light,#BAE6FD),transparent 70%);
          top:-200px;left:-180px;
          animation:abFloat1 16s ease-in-out infinite;
        }
        .about-bg2{
          width:520px;height:520px;
          background:radial-gradient(circle,var(--accent-light,#FED7AA),transparent 70%);
          bottom:-180px;right:-160px;
          animation:abFloat2 18s ease-in-out infinite;
        }

        @keyframes abFloat1{
          0%,100%{transform:translate(0,0)}
          50%{transform:translate(40px,30px)}
        }
        @keyframes abFloat2{
          0%,100%{transform:translate(0,0)}
          50%{transform:translate(-35px,-40px)}
        }

        .about-wrap{
          position:relative;
          max-width:1180px;
          margin:auto;
          display:grid;
          grid-template-columns:1.1fr .9fr;
          gap:4rem;
          align-items:center;
          opacity:0;
          transform:translateY(40px);
          transition:.9s cubic-bezier(.16,1,.3,1);
        }
        .about-show{opacity:1;transform:none;}

        .about-eyebrow{
          font-family:var(--font-head2);
          font-size:.75rem;
          letter-spacing:.25em;
          text-transform:uppercase;
          color:var(--color-accent-dark,#EA580C);
          margin-bottom:.8rem;
        }

        .about-title{
          font-family:var(--font-head1);
          font-size:clamp(2.4rem,4.5vw,3.2rem);
          font-weight:900;
          line-height:1.05;
          margin-bottom:1.3rem;
          letter-spacing:-.02em;
          color:var(--color-heading,#0C1A2E);
        }

        .about-title span{
          background:var(--gradient-logo);
          -webkit-background-clip:text;
          background-clip:text;
          color:transparent;
        }

        .about-text{
          font-size:1rem;
          line-height:1.75;
          color:var(--color-body,#374151);
          max-width:560px;
        }

        .about-card{
          background:var(--color-surface,#fff);
          border:1px solid var(--color-border,#E0F2FE);
          border-radius:22px;
          padding:2rem 2.2rem;
          box-shadow:
            0 2px 6px rgba(0,0,0,.04),
            0 14px 38px rgba(56,189,248,.09);
          animation:cardFloat 6s ease-in-out infinite;
        }
        @keyframes cardFloat{
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-12px)}
        }

        .about-card-title{
          font-family:var(--font-head2);
          font-size:1.1rem;
          letter-spacing:.08em;
          text-transform:uppercase;
          margin-bottom:1.2rem;
          color:var(--color-heading,#0C1A2E);
        }

        .about-list{
          display:flex;
          flex-direction:column;
          gap:.7rem;
        }

        .about-item{
          display:flex;
          align-items:flex-start;
          gap:.65rem;
          font-size:.92rem;
          font-weight:500;
          color:var(--color-body,#374151);
        }

        .about-dot{
          width:20px;height:20px;
          border-radius:50%;
          flex-shrink:0;
          background:linear-gradient(135deg,var(--color-primary-dark,#0EA5E9),var(--color-primary,#38BDF8));
          display:flex;align-items:center;justify-content:center;
          font-size:.65rem;
          color:#fff;
          margin-top:2px;
          box-shadow:0 3px 10px rgba(56,189,248,.35);
        }

        @media(max-width:900px){
          .about-wrap{
            grid-template-columns:1fr;
            text-align:center;
            gap:2.8rem;
          }
          .about-text{margin:auto;}
          .about-item{justify-content:left;text-align:left;}
        }

        @media(max-width:600px){
          .about-sec{padding:4rem 1.4rem;}
        }
      `}</style>

      <section className="about-sec" ref={ref} id="about">
        <div className="about-bg1" />
        <div className="about-bg2" />

        <div className="about-wrap">
          <div>
            <div className="about-eyebrow">About Event</div>

            <h2 className="about-title">
              What is <span>Medico Expo?</span>
            </h2>

            <p className="about-text">
              A medical education exhibition for NEET aspirants and parents
              offering clear guidance for <strong>MBBS</strong> and
              <strong> BSc Nursing</strong> admissions in India and abroad.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-title">Who Should Attend</div>

            <div className="about-list lg:text-start">
              {AUDIENCE.map((a) => (
                <div className="about-item" key={a}>
                  <div className="about-dot">✓</div>
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
