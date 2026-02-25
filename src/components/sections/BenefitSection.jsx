import React from "react";

export default function BenefitSection() {
  const benefits = [
    {
      title: "Clear Admission Roadmap",
      desc: "Understand every step of MBBS & Nursing admission from eligibility to final enrollment.",
    },
    {
      title: "Compare Colleges Easily",
      desc: "Get structured comparisons between Government, Private, and Abroad universities.",
    },
    {
      title: "Expert Career Guidance",
      desc: "Professional counselors help you choose the right country and college based on your score.",
    },
    {
      title: "Scholarship Awareness",
      desc: "Know available scholarships, fee structures, and financial options in advance.",
    },
    {
      title: "Document Support",
      desc: "Step-by-step assistance for application forms, verification, and official paperwork.",
    },
    {
      title: "Visa & Travel Help",
      desc: "Guidance for visa process, travel planning, and student onboarding abroad.",
    },
    {
      title: "Trusted Information",
      desc: "Get verified details directly from official university representatives.",
    },
    {
      title: "Parent Confidence",
      desc: "Parents receive clarity about safety, recognition, and career value of courses.",
    },
  ];

  return (
    <section className="benefits-sec" id="benefits">
      <div className="benefits-wrap">
        {/* heading */}
        <div className="benefits-head">
          <div className="benefits-eyebrow">EVENT ADVANTAGES</div>

          <h2 className="benefits-title">
            Why Attend <span>Medico Expo?</span>
          </h2>

          <p className="benefits-text">
            Everything you need to confidently choose your medical career path —
            in one place.
          </p>
        </div>

        {/* grid */}
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className="benefit-card">
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`

.benefits-sec{
padding:6rem 2.5rem;
position:relative;
overflow:hidden;
}

/* container */
.benefits-wrap{
max-width:1180px;
margin:auto;
}

/* heading */
.benefits-head{
text-align:center;
margin-bottom:3.8rem;
}

/* eyebrow */
.benefits-eyebrow{
font-family:var(--font-head2);
font-size:.75rem;
letter-spacing:.25em;
text-transform:uppercase;
color:var(--color-accent-dark);
margin-bottom:.9rem;
}

/* title */
.benefits-title{
font-family:var(--font-head1);
font-size:clamp(2.4rem,4.5vw,3.2rem);
font-weight:900;
line-height:1.05;
letter-spacing:-.02em;
margin-bottom:1.2rem;
color:var(--color-heading);
}

.benefits-title span{
background:var(--gradient-logo);
-webkit-background-clip:text;
background-clip:text;
color:transparent;
}

/* subtitle */
.benefits-text{
font-size:1rem;
line-height:1.75;
color:var(--color-body);
max-width:620px;
margin:auto;
}

/* grid */
.benefits-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:1.6rem;
}

/* card */
.benefit-card{
background:var(--color-surface);
border:1px solid var(--color-border);
padding:1.8rem;
border-radius:22px;
transition:.35s cubic-bezier(.16,1,.3,1);
box-shadow:
0 2px 6px rgba(0,0,0,.04),
0 14px 38px rgba(56,189,248,.09);
}

.benefit-card:hover{
transform:translateY(-7px);
box-shadow:
0 10px 26px rgba(0,0,0,.08),
0 18px 44px rgba(56,189,248,.14);
}

.benefit-card h3{
font-family:var(--font-head2);
font-size:1.05rem;
letter-spacing:.04em;
margin-bottom:.6rem;
color:var(--color-heading);
}

.benefit-card p{
font-size:.95rem;
line-height:1.6;
color:var(--color-body);
}

/* responsive */
@media(max-width:900px){
.benefits-sec{
padding:5rem 1.6rem;
}
}

@media(max-width:600px){
.benefits-sec{
padding:4rem 1.2rem;
}

.benefits-title{
font-size:2rem;
}
}

`}</style>
    </section>
  );
}
