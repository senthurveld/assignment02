const COUNTRIES = [
  "Georgia",
  "Uzbekistan",
  "Kazakhstan",
  "Bulgaria",
  "Nepal",
  "Russia",
  "Philippines",
  "Armenia",
  "Kyrgyzstan",
  "China",
];

const FEATURES = [
  "Official Partnerships",
  "Personalized Counseling",
  "Admission & Visa Guidance",
  "Trusted Platform",
];

const TESTIMONIALS = [
  {
    name: "Arun Kumar",
    role: "MBBS Student – Georgia",
    text: "The counseling clarity helped me choose the right university without confusion.",
  },
  {
    name: "Meena Ravi",
    role: "Parent",
    text: "Transparent process, no hidden charges, and full guidance till admission.",
  },
  {
    name: "Santhosh",
    role: "BSc Nursing – Philippines",
    text: "They handled everything from shortlist to visa. Highly reliable team.",
  },
];

export default function CountriesSection() {
  return (
    <>
      <style>{`
      .country-sec{
        position:relative;
        padding:6rem 2.5rem;
        overflow:hidden;
      }

      .country-bg1,.country-bg2{
        position:absolute;
        border-radius:50%;
        pointer-events:none;
        opacity:.55;
      }
      .country-bg1{
        width:620px;height:620px;
        background:radial-gradient(circle,var(--color-primary-light),transparent 70%);
        top:-200px;left:-180px;
        animation:float1 16s ease-in-out infinite;
      }
      .country-bg2{
        width:520px;height:520px;
        background:radial-gradient(circle,var(--color-accent-light),transparent 70%);
        bottom:-180px;right:-160px;
        animation:float2 18s ease-in-out infinite;
      }

      @keyframes float1{
        0%,100%{transform:translate(0,0)}
        50%{transform:translate(40px,30px)}
      }
      @keyframes float2{
        0%,100%{transform:translate(0,0)}
        50%{transform:translate(-40px,-35px)}
      }

      .country-wrap{
        max-width:1200px;
        margin:auto;
        display:flex;
        flex-direction:column;
        gap:4rem;
        animation:fadeUp .9s cubic-bezier(.16,1,.3,1) forwards;
      }

      @keyframes fadeUp{
        from{opacity:0;transform:translateY(40px)}
        to{opacity:1;transform:translateY(0)}
      }

      /* header */
      .country-head{text-align:center;}

      .country-eyebrow{
        font-family:var(--font-head2);
        font-size:.75rem;
        letter-spacing:.25em;
        text-transform:uppercase;
        color:var(--color-accent-dark);
        margin-bottom:.8rem;
      }

      .country-title{
        font-family:var(--font-head1);
        font-size:clamp(2.3rem,4.2vw,3rem);
        font-weight:900;
        margin-bottom:.7rem;
      }

      .country-title span{
        background:var(--gradient-logo);
        -webkit-background-clip:text;
        color:transparent;
      }

      .country-sub{
        color:var(--color-muted);
        font-size:.95rem;
      }

      /* countries */
      .country-grid{
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
        gap:1rem;
      }

      .country-pill{
        background:var(--color-surface);
        border:1px solid var(--color-border);
        padding:.8rem 1rem;
        border-radius:12px;
        font-weight:600;
        font-size:.9rem;
        text-align:center;
        transition:.25s;
        box-shadow:0 3px 12px rgba(56,189,248,.08);
      }
      .country-pill:hover{
        transform:translateY(-4px);
        border-color:var(--color-primary);
      }

      /* features */
      .feature-wrap{
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
        gap:1.2rem;
      }

      .feature{
        background:var(--color-surface);
        border:1px solid var(--color-border);
        border-radius:18px;
        padding:1.4rem;
        font-weight:600;
        display:flex;
        gap:.7rem;
        align-items:center;
        box-shadow:0 8px 30px rgba(56,189,248,.08);
        transition:.25s;
      }
      .feature:hover{transform:translateY(-5px)}

      .check{
        width:26px;height:26px;
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:.7rem;
        font-weight:900;
        color:#fff;
        background:linear-gradient(135deg,var(--color-primary-dark),var(--color-primary));
      }

      /* testimonials */
      .test-wrap{
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
        gap:1.5rem;
      }

      .test{
        background:var(--color-surface);
        border:1px solid var(--color-border);
        border-radius:20px;
        padding:1.6rem;
        box-shadow:0 10px 36px rgba(0,0,0,.06);
        transition:.3s;
      }
      .test:hover{transform:translateY(-6px)}

      .test-text{
        font-style:italic;
        line-height:1.6;
        margin-bottom:1.1rem;
        color:var(--color-body);
      }

      .test-name{
        font-weight:700;
        font-size:.92rem;
        color:var(--color-heading);
      }

      .test-role{
        font-size:.78rem;
        color:var(--color-muted);
      }

      @media(max-width:600px){
        .country-sec{padding:4rem 1.4rem;}
      }
      `}</style>

      <section className="country-sec" id="countries">
        <div className="country-bg1" />
        <div className="country-bg2" />

        <div className="country-wrap">
          {/* header */}
          <div className="country-head">
            <div className="country-eyebrow">Global Opportunities</div>
            <h2 className="country-title">
              Explore <span>15+ Countries</span>
            </h2>
            <p className="country-sub">
              Choose from top medical universities across Europe and Asia
            </p>
          </div>

          {/* countries */}
          <div className="country-grid">
            {COUNTRIES.map((c) => (
              <div className="country-pill" key={c}>
                {c}
              </div>
            ))}
          </div>

          {/* features */}
          <div>
            <div className="country-head" style={{ marginBottom: "1.8rem" }}>
              <div className="country-eyebrow">Why Choose Us</div>
              <h2 className="country-title">
                <span>Trusted Guidance</span>
              </h2>
            </div>

            <div className="feature-wrap">
              {FEATURES.map((f) => (
                <div className="feature" key={f}>
                  <div className="check">✔</div>
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* testimonials */}
          <div>
            <div className="country-head" style={{ marginBottom: "1.8rem" }}>
              <div className="country-eyebrow">Success Stories</div>
              <h2 className="country-title">
                <span>Testimonials</span>
              </h2>
            </div>

            <div className="test-wrap">
              {TESTIMONIALS.map((t) => (
                <div className="test" key={t.name}>
                  <div className="test-text">“{t.text}”</div>
                  <div className="test-name">{t.name}</div>
                  <div className="test-role">{t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
