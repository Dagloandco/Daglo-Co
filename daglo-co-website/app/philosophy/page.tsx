// philosophy/page.tsx
//
// Philosophy page with full English and French translation support.

"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../lib/LanguageContext";

export default function PhilosophyPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/b2-spirit.jpg" alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-navy-deep/80" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.35em] uppercase text-gold-light mb-8">{t("philosophy.eyebrow")}</div>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">{t("philosophy.hero")}</h1>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <p className="text-2xl md:text-3xl font-serif text-navy leading-relaxed mb-10">{t("philosophy.lead")}</p>
            <p className="text-lg text-text-body leading-relaxed">{t("philosophy.intro")}</p>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("philosophy.p1.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">{t("philosophy.p1.heading")}</h2>
            <p className="text-lg text-text-body mb-6 leading-relaxed">{t("philosophy.p1.body1")}</p>
            <p className="text-lg text-text-body mb-10 leading-relaxed">{t("philosophy.p1.body2")}</p>
            <p className="text-2xl md:text-3xl font-serif italic text-navy mb-10 leading-snug">{t("philosophy.p1.quote")}</p>
            <p className="text-lg text-text-body leading-relaxed">{t("philosophy.p1.body3")}</p>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("philosophy.p2.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">{t("philosophy.p2.heading")}</h2>
            <p className="text-lg text-text-body mb-6 leading-relaxed">{t("philosophy.p2.body1")}</p>
            <p className="text-lg text-text-body leading-relaxed">{t("philosophy.p2.body2")}</p>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow-light mb-6">{t("philosophy.p3.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-10 leading-tight">{t("philosophy.p3.heading")}</h2>
            <p className="text-lg text-text-light-body mb-6 leading-relaxed">{t("philosophy.p3.body1")}</p>
            <p className="text-lg text-text-light-body leading-relaxed mb-14">{t("philosophy.p3.body2")}</p>
            <Link href="/approach" className="inline-block text-sm tracking-[0.3em] uppercase font-medium text-white border-b border-white pb-2 hover:text-gold-light hover:border-gold-light transition-colors duration-300">{t("philosophy.p3.cta")}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
