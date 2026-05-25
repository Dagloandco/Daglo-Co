// engagement/page.tsx
//
// Engagement page with full English and French translation support.

"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../lib/LanguageContext";

export default function EngagementPage() {
  const { t } = useLanguage();

  const types = [
    { num: "01", titleKey: "engagement.t1.title", descKey: "engagement.t1.desc" },
    { num: "02", titleKey: "engagement.t2.title", descKey: "engagement.t2.desc" },
    { num: "03", titleKey: "engagement.t3.title", descKey: "engagement.t3.desc" },
    { num: "04", titleKey: "engagement.t4.title", descKey: "engagement.t4.desc" },
  ];

  return (
    <>
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/boardroom.webp" alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-navy-deep/80" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.35em] uppercase text-gold-light mb-8">{t("engagement.eyebrow")}</div>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">{t("engagement.hero")}</h1>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("engagement.intro.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">{t("engagement.intro.heading")}</h2>
            <p className="text-lg text-text-body mb-6 leading-relaxed">{t("engagement.intro.p1")}</p>
            <p className="text-lg text-text-body leading-relaxed">{t("engagement.intro.p2")}</p>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("engagement.types.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-20 leading-tight">{t("engagement.types.heading")}</h2>

            <div className="space-y-20">
              {types.map((engagement) => (
                <div key={engagement.num}>
                  <div className="text-4xl font-serif text-gold leading-none mb-4">{engagement.num}</div>
                  <h3 className="text-2xl md:text-3xl font-serif text-navy mb-5 leading-tight">{t(engagement.titleKey)}</h3>
                  <p className="text-base md:text-lg text-text-body leading-relaxed">{t(engagement.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="content-column">
          <div className="reading-column text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">{t("engagement.cta.heading")}</h2>
            <p className="text-lg text-text-light-body mb-12 leading-relaxed">{t("engagement.cta.intro")}</p>
            <div className="space-y-6">
              <a href="mailto:donald@daglo.co" className="block text-xl text-white hover:text-gold-light transition-colors duration-300">donald@daglo.co</a>
              <Link href="/contact" className="inline-block text-sm tracking-[0.3em] uppercase font-medium text-text-light-body border-b border-text-light-secondary pb-2 hover:text-white hover:border-white transition-colors">{t("engagement.cta.link")}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
