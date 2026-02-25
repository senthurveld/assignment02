import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function RegistrationFormSection() {
  const formRef = useRef(null);

  const SERVICE_ID = "service_2jzwa2d";
  const ADMIN_TEMPLATE = "template_0e7se4h";
  const REPLY_TEMPLATE = "template_be3q9wi";
  const PUBLIC_KEY = "wvgNGSfnuh4m-mFtS";

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShow(true),
      { threshold: 0.2 },
    );
    ob.observe(formRef.current);
    return () => ob.disconnect();
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        ADMIN_TEMPLATE,
        formRef.current,
        PUBLIC_KEY,
      );

      await emailjs.sendForm(
        SERVICE_ID,
        REPLY_TEMPLATE,
        formRef.current,
        PUBLIC_KEY,
      );

      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      setStatus("error", err.message);
      console.log(err, err.message);
      
    }

    setLoading(false);
  };

  return (
    <section id="register" className="reg-sec">
      <style>{`
        .reg-sec{
          position:relative;
          padding:6rem 2.5rem;
          overflow:hidden;
          margin-bottom: 1% ;
        }

        .reg-wrap{
          max-width:780px;
          margin:auto;
          text-align:center;
          opacity:0;
          transform:translateY(40px);
          transition:.9s cubic-bezier(.16,1,.3,1);
        }
        .reg-show{opacity:1;transform:none;}

        .reg-eyebrow{
          font-family:var(--font-head2);
          font-size:.75rem;
          letter-spacing:.25em;
          text-transform:uppercase;
          color:var(--color-accent-dark);
          margin-bottom:.7rem;
        }

        .reg-title{
          font-family:var(--font-head1);
          font-size:clamp(2.2rem,4vw,3rem);
          font-weight:900;
          margin-bottom:1rem;
          color:var(--color-heading);
        }

        .reg-desc{
          max-width:560px;
          margin:auto;
          margin-bottom:2.5rem;
          color:var(--color-body);
        }

        .reg-form{
          background:var(--color-surface);
          border:1px solid var(--color-border);
          padding:2.5rem 2.2rem;
          border-radius:22px;
          box-shadow:0 14px 38px rgba(56,189,248,.09);
          display:grid;
          gap:1.15rem;
        }

        .reg-row{
          display:grid;
          gap:1.1rem;
        }
        @media(min-width:650px){
          .reg-row{grid-template-columns:1fr 1fr;}
        }

        .reg-input,
        .reg-select{
          width:100%;
          padding:13px 14px;
          border-radius:12px;
          border:1px solid var(--color-border);
          font-family:var(--font-body);
          font-size:.9rem;
          outline:none;
          transition:.2s;
          background:#fff;
        }

        .reg-input:focus,
        .reg-select:focus{
          border-color:var(--color-primary);
          box-shadow:0 0 0 3px rgba(56,189,248,.15);
        }

        .reg-btn{
          margin-top:.5rem;
          display:inline-flex;
          justify-content:center;
          align-items:center;
          gap:8px;
          padding:13px;
          border:none;
          border-radius:12px;
          font-weight:600;
          letter-spacing:.02em;
          color:#fff;
          cursor:pointer;
          background:linear-gradient(135deg,var(--color-accent),var(--color-accent-dark));
          box-shadow:0 4px 18px rgba(251,146,60,0.32);
          transition:.25s;
        }
        .reg-btn:hover{
          transform:translateY(-2px);
          box-shadow:0 8px 30px rgba(251,146,60,0.45);
        }
        .reg-btn:disabled{
          opacity:.6;
          cursor:not-allowed;
        }

        .msg{
          font-size:.85rem;
          margin-top:.4rem;
        }
        .success{color:#16a34a}
        .error{color:#dc2626}
      `}</style>

      <div className={`reg-wrap ${show ? "reg-show" : ""} `}>
        <div className="reg-eyebrow">Registration</div>
        <h2 className="reg-title">
          Secure Your Seat at{" "}
          <span
            style={{
              background: "var(--gradient-logo)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Medico Expo
          </span>
        </h2>

        <p className="reg-desc">
          Register now to receive personalized admission guidance, counseling
          sessions, and university options.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="reg-form ">
          <input
            className="reg-input"
            name="name"
            placeholder="Full Name *"
            required
          />
          <input
            className="reg-input"
            name="user_email"
            type="email"
            placeholder="Email Address *"
            required
          />

          <div className="reg-row">
            <input
              className="reg-input"
              name="phone"
              placeholder="Mobile Number *"
              required
            />
            <input
              className="reg-input"
              name="city"
              placeholder="City *"
              required
            />
          </div>

          <div className="reg-row">
            <select name="neet" className="reg-select" required>
              <option value="">NEET Status *</option>
              <option>Qualified</option>
              <option>Appearing</option>
              <option>Not Qualified</option>
            </select>

            <select name="college" className="reg-select" required>
              <option value="">College Preference *</option>
              <option>Government</option>
              <option>Private</option>
              <option>Abroad</option>
              <option>Not Sure</option>
            </select>
          </div>

          <select name="loan" className="reg-select" required>
            <option value="">Education Loan Needed? *</option>
            <option>Yes</option>
            <option>No</option>
          </select>

          <button className="reg-btn" disabled={loading}>
            {loading ? "Sending..." : "Submit Registration"}
          </button>

          {status === "success" && (
            <div className="msg success">
              ✔ Registration submitted successfully!
            </div>
          )}
          {status === "error" && (
            <div className="msg error">❌ Something went wrong. Try again.</div>
          )}
        </form>
      </div>
    </section>
  );
}
