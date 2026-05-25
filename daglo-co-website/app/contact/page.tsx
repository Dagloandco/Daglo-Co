// contact/page.tsx
//
// The Contact page provides the entry point for beginning a conversation with the practice.
//
// This revision adds two major features. First, every text string on the page now uses
// the translation function so the page switches between English and French based on the
// user's language selection. Second, the page now includes a working contact form with
// Name, Email, and Message fields that submits to Formspree for email delivery.
//
// The contact form uses Formspree as the delivery service. You will need to sign up
// for a free Formspree account at formspree.io and replace the YOUR_FORMSPREE_ID
// placeholder in the form action with your actual Formspree form ID. Until you do that,
// the form will display correctly but submissions will not be delivered.

"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";
import { useLanguage } from "../lib/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  // Form state tracks the current values of the three input fields plus the
  // submission status which controls the user-facing feedback after they submit.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // The handleSubmit function intercepts the form submission, sends the data to
  // Formspree as JSON, and updates the status to give the user feedback. We use
  // JSON submission rather than the default HTML form post because JSON gives us
  // more control over the success and error handling.
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const stages = [
    { num: "01", titleKey: "contact.s1.title", descKey: "contact.s1.desc" },
    { num: "02", titleKey: "contact.s2.title", descKey: "contact.s2.desc" },
    { num: "03", titleKey: "contact.s3.title", descKey: "contact.s3.desc" },
  ];

  return (
    <>
      {/* The page hero uses centered composition against the boardroom imagery. */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-navy-deep">
          <Image
            src="/images/boardroom.webp"
            alt=""
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-navy-deep/75" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.35em] uppercase text-gold-light mb-8">
            {t("contact.eyebrow")}
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">
            {t("contact.hero")}
          </h1>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("contact.begin.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
              {t("contact.begin.heading")}
            </h2>
            <p className="text-lg text-text-body mb-6 leading-relaxed">
              {t("contact.begin.p1")}
            </p>
            <p className="text-lg text-text-body mb-14 leading-relaxed">
              {t("contact.begin.p2")}
            </p>

            <a
              href="mailto:donald@daglo.co"
              className="inline-block text-xl text-navy border-b border-navy pb-2 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              donald@daglo.co
            </a>
          </div>
        </div>
      </section>

      {/* The contact form section. The form uses a clean editorial layout with the
          field labels on the left of each input and the inputs themselves spanning
          the full width of the reading column. The styling matches the rest of the
          site, using the navy color for borders and focused states, and the gold
          color for the submit button. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column">
            <div className="text-center mb-16">
              <div className="eyebrow mb-6">{t("contact.form.eyebrow")}</div>
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 leading-tight">
                {t("contact.form.heading")}
              </h2>
            </div>

            {/* Conditional rendering: show the success message after a successful
                submission, the error message if something went wrong, or the form
                itself otherwise. */}
            {status === "success" ? (
              <div
                style={{
                  padding: "32px",
                  backgroundColor: "#0a1f3d",
                  color: "#ffffff",
                  textAlign: "center",
                  borderRadius: "4px",
                }}
              >
                <p style={{ fontSize: "18px", lineHeight: 1.7, margin: 0 }}>
                  {t("contact.form.success")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Name field. */}
                <div style={{ marginBottom: "32px" }}>
                  <label
                    htmlFor="name"
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#0a1f3d",
                      marginBottom: "8px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {t("contact.form.name")}{" "}
                    <span style={{ color: "#b8945a" }} aria-label={t("contact.form.required")}>
                      *
                    </span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("contact.form.name.placeholder")}
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      fontSize: "16px",
                      backgroundColor: "#ffffff",
                      border: "1px solid #d8d4cc",
                      borderRadius: "4px",
                      color: "#0a1f3d",
                      fontFamily: "'Inter', system-ui, sans-serif",
                      transition: "border-color 0.2s ease",
                    }}
                    className="contact-form-input"
                  />
                </div>

                {/* Email field. */}
                <div style={{ marginBottom: "32px" }}>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#0a1f3d",
                      marginBottom: "8px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {t("contact.form.email")}{" "}
                    <span style={{ color: "#b8945a" }} aria-label={t("contact.form.required")}>
                      *
                    </span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("contact.form.email.placeholder")}
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      fontSize: "16px",
                      backgroundColor: "#ffffff",
                      border: "1px solid #d8d4cc",
                      borderRadius: "4px",
                      color: "#0a1f3d",
                      fontFamily: "'Inter', system-ui, sans-serif",
                      transition: "border-color 0.2s ease",
                    }}
                    className="contact-form-input"
                  />
                </div>

                {/* Message field uses a textarea so users can write longer messages. */}
                <div style={{ marginBottom: "32px" }}>
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#0a1f3d",
                      marginBottom: "8px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {t("contact.form.message")}{" "}
                    <span style={{ color: "#b8945a" }} aria-label={t("contact.form.required")}>
                      *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t("contact.form.message.placeholder")}
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      fontSize: "16px",
                      backgroundColor: "#ffffff",
                      border: "1px solid #d8d4cc",
                      borderRadius: "4px",
                      color: "#0a1f3d",
                      fontFamily: "'Inter', system-ui, sans-serif",
                      transition: "border-color 0.2s ease",
                      resize: "vertical",
                      minHeight: "140px",
                    }}
                    className="contact-form-input"
                  />
                </div>

                {/* Submit button uses the navy primary color for a polished, executive feel
                    rather than the bright orange of the reference screenshot. */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    width: "100%",
                    padding: "18px",
                    fontSize: "15px",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    backgroundColor: status === "sending" ? "#3a3a38" : "#0a1f3d",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: status === "sending" ? "wait" : "pointer",
                    transition: "background-color 0.2s ease",
                  }}
                  className="contact-form-submit"
                >
                  {status === "sending" ? t("contact.form.submitting") : t("contact.form.submit")}
                </button>

                {status === "error" && (
                  <p
                    style={{
                      marginTop: "16px",
                      fontSize: "14px",
                      color: "#9a3a3a",
                      textAlign: "center",
                    }}
                  >
                    {t("contact.form.error")}
                  </p>
                )}
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

      {/* The arc of an engagement section presents the three stages of how engagements
          begin and progress. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("contact.arc.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
              {t("contact.arc.heading")}
            </h2>
            <p className="text-lg text-text-body mb-20 leading-relaxed">
              {t("contact.arc.intro")}
            </p>

            <div className="space-y-16">
              {stages.map((stage) => (
                <div key={stage.num}>
                  <div className="text-4xl font-serif text-gold leading-none mb-4">
                    {stage.num}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-navy mb-4 leading-tight">
                    {t(stage.titleKey)}
                  </h3>
                  <p className="text-base md:text-lg text-text-body leading-relaxed">
                    {t(stage.descKey)}
                  </p>
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
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-16 leading-tight">
              {t("contact.paths.heading")}
            </h2>

            <div className="space-y-12">
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-gold-light mb-3">
                  {t("contact.paths.email.label")}
                </div>
                <a
                  href="mailto:donald@daglo.co"
                  className="block text-xl text-white hover:text-gold-light transition-colors mb-3"
                >
                  donald@daglo.co
                </a>
                <p className="text-base text-text-light-body leading-relaxed">
                  {t("contact.paths.email.desc")}
                </p>
              </div>

              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-gold-light mb-3">
                  {t("contact.paths.li.label")}
                </div>
                <a
                  href="https://www.linkedin.com/in/donalddaglo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xl text-white hover:text-gold-light transition-colors mb-3"
                >
                  {t("contact.paths.li.link")}
                </a>
                <p className="text-base text-text-light-body leading-relaxed">
                  {t("contact.paths.li.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
