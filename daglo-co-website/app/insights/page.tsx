// insights/page.tsx
//
// Insights page with full English and French translation support.

"use client";

import Image from "next/image";
import { useLanguage } from "../lib/LanguageContext";

export default function InsightsPage() {
  const { t } = useLanguage();

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
