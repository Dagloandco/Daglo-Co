// insights/page.tsx
//
// The Insights page with full English and French translation support and an inline
// newsletter subscription option. The newsletter subscription form appears just before
// the existing LinkedIn follow section, giving readers two ways to stay informed about
// new articles: email subscription for direct delivery, or LinkedIn for the broader
// thinking and announcements.

"use client";

import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import { useLanguage } from "../lib/LanguageContext";

const FORMSPREE_FORM_ID = "xvzybbdk";

export default function InsightsPage() {
  const { t } = useLanguage();
  const [newsletterState, handleNewsletterSubmit] = useForm(FORMSPREE_FORM_ID);

  const articles = [
    { num: "01", labelKey: "insights.a1.label", titleKey: "insights.a1.title", descKey: "insights.a1.desc", statusKey: "insights.a1.status" },
    { num: "02", labelKey: "insights.a2.label", titleKey: "insights.a2.title", descKey: "insights.a2.desc", statusKey: "insights.a2.status" },
    { num: "03", labelKey: "insights.a3.label", titleKey: "insights.a3.title", descKey: "insights.a3.desc", statusKey: "insights.a3.status" },
  ];

  return (
    <>
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/open-book.jpg" alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-navy-deep/85" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.35em] uppercase text-gold-light mb-8">{t("insights.eyebrow")}</div>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">{t("insights.hero")}</h1>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("insights.intro.eyebrow")}</div>
            <h2 className="text-3xl md:text-5xl font-serif text-navy mb-10 leading-tight">{t("insights.intro.heading")}</h2>
            <p className="text-lg text-text-body leading-relaxed">{t("insights.intro.body")}</p>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("insights.pipeline.eyebrow")}</div>
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-20 leading-tight">{t("insights.pipeline.heading")}</h2>

            <div className="space-y-24">
              {articles.map((article) => (
                <article key={article.num}>
                  <div className="flex items-baseline justify-center gap-4 mb-6 flex-wrap">
                    <div className="flex items-baseline gap-4">
                      <div className="text-3xl font-serif text-gold leading-none">{article.num}</div>
                      <div className="text-xs tracking-[0.3em] uppercase text-gold">{t(article.labelKey)}</div>
                    </div>
                    <div className="text-xs tracking-[0.25em] uppercase text-text-tertiary">&middot; {t(article.statusKey)}</div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-navy mb-5 leading-tight">{t(article.titleKey)}</h3>
                  <p className="text-base md:text-lg text-text-body leading-relaxed">{t(article.descKey)}</p>
                </article>
              ))}
            </div>

            <p className="text-2xl md:text-3xl font-serif italic text-navy leading-snug mt-32">{t("insights.closing")}</p>
          </div>
        </div>
      </section>

      {/* Newsletter subscription on the Insights page. Readers who reach this page are
          already interested in the writing, so offering them a way to receive each
          article when it publishes is the natural next step. The form sits on the
          ivory background to feel like a continuation of the editorial content above. */}
      <section className="py-28 md:py-36 bg-ivory-warm" style={{ borderTop: "1px solid #e8e4dc" }}>
        <div className="content-column">
          <div className="reading-column">
            <div className="text-center mb-12">
              <div className="eyebrow mb-6">{t("newsletter.eyebrow")}</div>
              <h2 className="text-3xl md:text-4xl font-serif text-navy mb-8 leading-tight">{t("newsletter.heading")}</h2>
              <p className="text-base md:text-lg text-text-body leading-relaxed">{t("newsletter.intro")}</p>
            </div>

            {newsletterState.succeeded ? (
              <div
                style={{
                  padding: "24px",
                  backgroundColor: "#ffffff",
                  color: "#0a1f3d",
                  textAlign: "center",
                  borderRadius: "4px",
                  border: "1px solid #d4b97f",
                }}
              >
                <p style={{ fontSize: "16px", lineHeight: 1.7, margin: 0 }}>{t("newsletter.success")}</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit}>
                <input type="hidden" name="_subject" value="New newsletter subscription from daglo.co Insights page" />
                <input type="hidden" name="form_type" value="newsletter" />
                <input type="hidden" name="source" value="insights_page" />

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
                      backgroundColor: "#ffffff",
                      border: "1px solid #d8d4cc",
                      borderRadius: "4px",
                      color: "#0a1f3d",
                      fontFamily: "'Inter', system-ui, sans-serif",
                      transition: "border-color 0.2s ease",
                    }}
                    className="insights-newsletter-input"
                  />
                  <ValidationError prefix="Email" field="email" errors={newsletterState.errors} style={{ fontSize: "13px", color: "#9a3a3a", marginTop: "-8px" }} />

                  <label style={{ display: "flex", alignItems: "flex-start", gap: "10px", cursor: "pointer", color: "#3a3a38", fontSize: "14px", lineHeight: 1.5 }}>
                    <input
                      type="checkbox"
                      name="consent"
                      value="yes"
                      required
                      style={{
                        marginTop: "3px",
                        width: "16px",
                        height: "16px",
                        accentColor: "#0a1f3d",
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
                      backgroundColor: newsletterState.submitting ? "#3a3a38" : "#0a1f3d",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: newsletterState.submitting ? "wait" : "pointer",
                      transition: "background-color 0.2s ease",
                      marginTop: "8px",
                    }}
                    className="insights-newsletter-submit"
                  >
                    {newsletterState.submitting ? t("newsletter.submitting") : t("newsletter.submit")}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <style>{`
          .insights-newsletter-input:focus {
            outline: none;
            border-color: #0a1f3d !important;
          }
          .insights-newsletter-submit:hover:not(:disabled) {
            background-color: #061730 !important;
          }
        `}</style>
      </section>

      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow-light mb-6">{t("insights.follow.eyebrow")}</div>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-10 leading-tight">{t("insights.follow.heading")}</h2>
            <p className="text-lg text-text-light-body mb-12 leading-relaxed">{t("insights.follow.body")}</p>
            <a href="https://www.linkedin.com/in/donalddaglo" target="_blank" rel="noopener noreferrer" className="inline-block text-base text-white border-b border-white pb-2 hover:text-gold-light hover:border-gold-light transition-colors duration-300">{t("insights.follow.cta")}</a>
          </div>
        </div>
      </section>
    </>
  );
}
