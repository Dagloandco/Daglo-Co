// contact/page.tsx
//
// The Contact page with a working contact form connected to the real Formspree endpoint
// and a newsletter subscription option for visitors who want to receive forthcoming
// articles by email.
//
// The contact form uses the @formspree/react package which provides proper form state
// management, error handling, and submission status tracking. The form ID xvzybbdk
// is the endpoint identifier from your Formspree dashboard. Both the inquiry form and
// the newsletter subscription submit to the same Formspree endpoint, but they include
// different _subject tags so you can distinguish article subscribers from inquiry
// messages in your Formspree dashboard.

"use client";

import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import { useLanguage } from "../lib/LanguageContext";

// The FORMSPREE_FORM_ID is your endpoint identifier from your Formspree dashboard.
// It is the part after the slash in https://formspree.io/f/xvzybbdk
const FORMSPREE_FORM_ID = "xvzybbdk";

export default function ContactPage() {
  const { t } = useLanguage();

  // Each form gets its own state object from the useForm hook. The hook provides the
  // submission status, any validation errors, and the submit handler. The two forms
  // share the same Formspree endpoint but maintain separate state, so submitting one
  // does not affect the other.
  const [inquiryState, handleInquirySubmit] = useForm(FORMSPREE_FORM_ID);
  const [newsletterState, handleNewsletterSubmit] = useForm(FORMSPREE_FORM_ID);

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

      {/* The contact form section. The form uses the @formspree/react useForm hook
          which handles the submission, state tracking, and error handling. When the
          form succeeds, the state.succeeded flag becomes true and we show a success
          message instead of the form. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column">
            <div className="text-center mb-16">
              <div className="eyebrow mb-6">{t("contact.form.eyebrow")}</div>
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 leading-tight">{t("contact.form.heading")}</h2>
            </div>

            {inquiryState.succeeded ? (
              <div
                style={{
                  padding: "32px",
                  backgroundColor: "#0a1f3d",
                  color: "#ffffff",
                  textAlign: "center",
                  borderRadius: "4px",
                }}
              >
                <p style={{ fontSize: "18px", lineHeight: 1.7, margin: 0 }}>{t("contact.form.success")}</p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit}>
                {/* Hidden field tags this submission as an inquiry message in the
                    Formspree dashboard so you can distinguish it from newsletter
                    subscriptions when reviewing submissions. */}
                <input type="hidden" name="_subject" value="New inquiry from daglo.co" />
                <input type="hidden" name="form_type" value="inquiry" />

                <div style={{ marginBottom: "32px" }}>
                  <label htmlFor="name" style={labelStyle}>
                    {t("contact.form.name")} <span style={{ color: "#b8945a" }} aria-label={t("contact.form.required")}>*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder={t("contact.form.name.placeholder")}
                    style={inputStyle}
                    className="contact-form-input"
                  />
                  <ValidationError prefix="Name" field="name" errors={inquiryState.errors} style={errorStyle} />
                </div>

                <div style={{ marginBottom: "32px" }}>
                  <label htmlFor="email" style={labelStyle}>
                    {t("contact.form.email")} <span style={{ color: "#b8945a" }} aria-label={t("contact.form.required")}>*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder={t("contact.form.email.placeholder")}
                    style={inputStyle}
                    className="contact-form-input"
                  />
                  <ValidationError prefix="Email" field="email" errors={inquiryState.errors} style={errorStyle} />
                </div>

                <div style={{ marginBottom: "32px" }}>
                  <label htmlFor="message" style={labelStyle}>
                    {t("contact.form.message")} <span style={{ color: "#b8945a" }} aria-label={t("contact.form.required")}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder={t("contact.form.message.placeholder")}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "140px" }}
                    className="contact-form-input"
                  />
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
          .contact-form-input:focus {
            outline: none;
            border-color: #0a1f3d !important;
          }
          .contact-form-submit:hover:not(:disabled) {
            background-color: #061730 !important;
          }
        `}</style>
      </section>

      {/* The newsletter subscription section gives visitors the option to receive
          forthcoming articles by email. This is a separate form from the inquiry
          form because the two have different purposes: the inquiry form is for
          governance questions and engagement discussions, and the newsletter form
          is for staying informed about published writing. Submissions are tagged
          differently so you can sort them in your Formspree dashboard. */}
      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="content-column">
          <div className="reading-column">
            <div className="text-center mb-12">
              <div className="eyebrow-light mb-6">{t("newsletter.eyebrow")}</div>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 leading-tight">{t("newsletter.heading")}</h2>
              <p className="text-base md:text-lg text-text-light-body leading-relaxed">{t("newsletter.intro")}</p>
            </div>

            {newsletterState.succeeded ? (
              <div
                style={{
                  padding: "24px",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: "#ffffff",
                  textAlign: "center",
                  borderRadius: "4px",
                  border: "1px solid rgba(216,185,127,0.3)",
                }}
              >
                <p style={{ fontSize: "16px", lineHeight: 1.7, margin: 0 }}>{t("newsletter.success")}</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit}>
                <input type="hidden" name="_subject" value="New newsletter subscription from daglo.co" />
                <input type="hidden" name="form_type" value="newsletter" />

                <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "520px", margin: "0 auto" }}>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t("newsletter.email.placeholder")}
                    aria-label={t("contact.form.email")}
                    style={{
                      width: "100%",
                      padding: "16px 20px",
                      fontSize: "16px",
                      backgroundColor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "4px",
                      color: "#ffffff",
                      fontFamily: "'Inter', system-ui, sans-serif",
                      transition: "border-color 0.2s ease",
                    }}
                    className="newsletter-input"
                  />
                  <ValidationError prefix="Email" field="email" errors={newsletterState.errors} style={{ ...errorStyle, color: "#f5b94a" }} />

                  {/* Consent checkbox explicitly captures opt-in for receiving emails.
                      Email consent is a regulatory requirement in many jurisdictions
                      and is a good practice everywhere. The hidden value field ensures
                      the consent is captured in the submission. */}
                  <label style={{ display: "flex", alignItems: "flex-start", gap: "10px", cursor: "pointer", color: "#e8e6e0", fontSize: "14px", lineHeight: 1.5 }}>
                    <input
                      type="checkbox"
                      name="consent"
                      value="yes"
                      required
                      style={{
                        marginTop: "3px",
                        width: "16px",
                        height: "16px",
                        accentColor: "#d4b97f",
                        cursor: "pointer",
                        flexShrink: 0,
                      }}
                    />
                    <span>{t("newsletter.consent")}</span>
                  </label>

                  <button
                    type="submit"
                    disabled={newsletterState.submitting}
                    style={{
                      width: "100%",
                      padding: "16px",
                      fontSize: "14px",
                      fontWeight: 500,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      backgroundColor: newsletterState.submitting ? "#3a3a38" : "#d4b97f",
                      color: "#0a1f3d",
                      border: "none",
                      borderRadius: "4px",
                      cursor: newsletterState.submitting ? "wait" : "pointer",
                      transition: "background-color 0.2s ease",
                      marginTop: "8px",
                    }}
                    className="newsletter-submit"
                  >
                    {newsletterState.submitting ? t("newsletter.submitting") : t("newsletter.submit")}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <style>{`
          .newsletter-input:focus {
            outline: none;
            border-color: #d4b97f !important;
            background-color: rgba(255,255,255,0.12) !important;
          }
          .newsletter-input::placeholder {
            color: rgba(232,230,224,0.5);
          }
          .newsletter-submit:hover:not(:disabled) {
            background-color: #c4a86b !important;
          }
        `}</style>
      </section>

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

      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow-light mb-6">{t("contact.paths.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-16 leading-tight">{t("contact.paths.heading")}</h2>

            <div className="space-y-12">
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-gold-light mb-3">{t("contact.paths.email.label")}</div>
                <a href="mailto:donald@daglo.co" className="block text-xl text-white hover:text-gold-light transition-colors mb-3">
                  donald@daglo.co
                </a>
                <p className="text-base text-text-light-body leading-relaxed">{t("contact.paths.email.desc")}</p>
              </div>

              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-gold-light mb-3">{t("contact.paths.li.label")}</div>
                <a href="https://www.linkedin.com/in/donalddaglo" target="_blank" rel="noopener noreferrer" className="block text-xl text-white hover:text-gold-light transition-colors mb-3">
                  {t("contact.paths.li.link")}
                </a>
                <p className="text-base text-text-light-body leading-relaxed">{t("contact.paths.li.desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Reusable inline style objects for the form inputs.
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
