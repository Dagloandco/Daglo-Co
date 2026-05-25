// contact/page.tsx
//
// The Contact page now consolidates around three clean sections: the contact form for
// initiating a substantive inquiry, the arc of an engagement explaining how
// conversations progress, and a new Direct Contact section that presents Donald's
// email, phone, and LinkedIn in a discreet executive treatment.
//
// The previous newsletter subscription section has been removed because it produced
// a marketing-funnel feeling that conflicts with the executive governance positioning.
// Readers who want ongoing engagement can either send a direct inquiry through the
// form or connect on LinkedIn, both of which are appropriate for the executive
// dialogue this page exists to support.

"use client";

import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import { useLanguage } from "../lib/LanguageContext";

const FORMSPREE_FORM_ID = "xvzybbdk";

export default function ContactPage() {
  const { t } = useLanguage();
  const [inquiryState, handleInquirySubmit] = useForm(FORMSPREE_FORM_ID);

  const stages = [
    { num: "01", titleKey: "contact.s1.title", descKey: "contact.s1.desc" },
    { num: "02", titleKey: "contact.s2.title", descKey: "contact.s2.desc" },
    { num: "03", titleKey: "contact.s3.title", descKey: "contact.s3.desc" },
  ];

  return (
    <>
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-navy-deep">
          <Image src="/images/boardroom.webp" alt="" fill priority className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-navy-deep/75" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.35em] uppercase text-gold-light mb-8">{t("contact.eyebrow")}</div>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">{t("contact.hero")}</h1>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("contact.begin.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">{t("contact.begin.heading")}</h2>
            <p className="text-lg text-text-body mb-6 leading-relaxed">{t("contact.begin.p1")}</p>
            <p className="text-lg text-text-body mb-14 leading-relaxed">{t("contact.begin.p2")}</p>
            <a href="mailto:donald@daglo.co" className="inline-block text-xl text-navy border-b border-navy pb-2 hover:text-gold hover:border-gold transition-colors duration-300">
              donald@daglo.co
            </a>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column">
            <div className="text-center mb-16">
              <div className="eyebrow mb-6">{t("contact.form.eyebrow")}</div>
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 leading-tight">{t("contact.form.heading")}</h2>
            </div>

            {inquiryState.succeeded ? (
              <div style={{ padding: "32px", backgroundColor: "#0a1f3d", color: "#ffffff", textAlign: "center", borderRadius: "4px" }}>
                <p style={{ fontSize: "18px", lineHeight: 1.7, margin: 0 }}>{t("contact.form.success")}</p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit}>
                <input type="hidden" name="_subject" value="New inquiry from daglo.co" />
                <input type="hidden" name="form_type" value="inquiry" />

                <div style={{ marginBottom: "32px" }}>
                  <label htmlFor="name" style={labelStyle}>
                    {t("contact.form.name")} <span style={{ color: "#b8945a" }} aria-label={t("contact.form.required")}>*</span>
                  </label>
                  <input id="name" type="text" name="name" required placeholder={t("contact.form.name.placeholder")} style={inputStyle} className="contact-form-input" />
                  <ValidationError prefix="Name" field="name" errors={inquiryState.errors} style={errorStyle} />
                </div>

                <div style={{ marginBottom: "32px" }}>
                  <label htmlFor="email" style={labelStyle}>
                    {t("contact.form.email")} <span style={{ color: "#b8945a" }} aria-label={t("contact.form.required")}>*</span>
                  </label>
                  <input id="email" type="email" name="email" required placeholder={t("contact.form.email.placeholder")} style={inputStyle} className="contact-form-input" />
                  <ValidationError prefix="Email" field="email" errors={inquiryState.errors} style={errorStyle} />
                </div>

                <div style={{ marginBottom: "32px" }}>
                  <label htmlFor="message" style={labelStyle}>
                    {t("contact.form.message")} <span style={{ color: "#b8945a" }} aria-label={t("contact.form.required")}>*</span>
                  </label>
                  <textarea id="message" name="message" required rows={6} placeholder={t("contact.form.message.placeholder")} style={{ ...inputStyle, resize: "vertical", minHeight: "140px" }} className="contact-form-input" />
                  <ValidationError prefix="Message" field="message" errors={inquiryState.errors} style={errorStyle} />
                </div>

                <button
                  type="submit"
                  disabled={inquiryState.submitting}
                  style={{
                    width: "100%",
                    padding: "18px",
                    fontSize: "15px",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    backgroundColor: inquiryState.submitting ? "#3a3a38" : "#0a1f3d",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: inquiryState.submitting ? "wait" : "pointer",
                    transition: "background-color 0.2s ease",
                  }}
                  className="contact-form-submit"
                >
                  {inquiryState.submitting ? t("contact.form.submitting") : t("contact.form.submit")}
                </button>
              </form>
            )}
          </div>
        </div>

        <style>{`
          .contact-form-input:focus { outline: none; border-color: #0a1f3d !important; }
          .contact-form-submit:hover:not(:disabled) { background-color: #061730 !important; }
        `}</style>
      </section>

      {/* The arc of an engagement section explains how conversations progress through
          three deliberate stages. This treatment is preserved from the previous version
          because it works as written. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("contact.arc.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">{t("contact.arc.heading")}</h2>
            <p className="text-lg text-text-body mb-20 leading-relaxed">{t("contact.arc.intro")}</p>

            <div className="space-y-16">
              {stages.map((stage) => (
                <div key={stage.num}>
                  <div className="text-4xl font-serif text-gold leading-none mb-4">{stage.num}</div>
                  <h3 className="text-2xl md:text-3xl font-serif text-navy mb-4 leading-tight">{t(stage.titleKey)}</h3>
                  <p className="text-base md:text-lg text-text-body leading-relaxed">{t(stage.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Direct Contact section presents Donald's email, phone, and LinkedIn in a
          discreet executive treatment. The phone number is included tastefully without
          aggressive call-to-action language. Each contact channel sits in its own
          centered block with the channel label as a small uppercase eyebrow above the
          contact value, which reads as legitimate executive accessibility rather than
          as a consulting funnel. */}
      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow-light mb-6">{t("contact.direct.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-10 leading-tight">{t("contact.direct.heading")}</h2>
            <p className="text-lg text-text-light-body mb-20 leading-relaxed">{t("contact.direct.intro")}</p>

            <div className="space-y-14">
              {/* Email channel. The email is the primary direct contact method, which
                  is why it sits first in the list and uses the most visible typography. */}
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-gold-light mb-4">
                  {t("contact.direct.email.label")}
                </div>
                <a
                  href="mailto:donald@daglo.co"
                  className="block text-xl md:text-2xl text-white hover:text-gold-light transition-colors"
                >
                  donald@daglo.co
                </a>
              </div>

              {/* Direct line phone channel. The phone number is presented as a clickable
                  tel link so mobile users can tap to call, but the visual treatment is
                  understated rather than functioning as a prominent CTA. */}
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-gold-light mb-4">
                  {t("contact.direct.phone.label")}
                </div>
                <a
                  href="tel:+12028139618"
                  className="block text-xl md:text-2xl text-white hover:text-gold-light transition-colors"
                >
                  +1 (202) 813-9618
                </a>
              </div>

              {/* LinkedIn channel for professional network connection. */}
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-gold-light mb-4">
                  {t("contact.direct.li.label")}
                </div>
                <a
                  href="https://www.linkedin.com/in/donalddaglo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xl md:text-2xl text-white hover:text-gold-light transition-colors"
                >
                  {t("contact.paths.li.link")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "14px",
  fontWeight: 500,
  color: "#0a1f3d",
  marginBottom: "8px",
  letterSpacing: "0.02em",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 18px",
  fontSize: "16px",
  backgroundColor: "#ffffff",
  border: "1px solid #d8d4cc",
  borderRadius: "4px",
  color: "#0a1f3d",
  fontFamily: "'Inter', system-ui, sans-serif",
  transition: "border-color 0.2s ease",
};

const errorStyle: React.CSSProperties = {
  fontSize: "13px",
  color: "#9a3a3a",
  marginTop: "6px",
};
