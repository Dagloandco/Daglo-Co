// page.tsx
//
// Homepage with full English and French translation support.

"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./lib/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const pillars = [
    { num: "01", titleKey: "home.pillar1.title", descKey: "home.pillar1.desc" },
    { num: "02", titleKey: "home.pillar2.title", descKey: "home.pillar2.desc" },
    { num: "03", titleKey: "home.pillar3.title", descKey: "home.pillar3.desc" },
    { num: "04", titleKey: "home.pillar4.title", descKey: "home.pillar4.desc" },
  ];

  const engagementPreview = [
    { titleKey: "home.engage1.title", descKey: "home.engage1.desc" },
    { titleKey: "home.engage2.title", descKey: "home.engage2.desc" },
    { titleKey: "home.engage3.title", descKey: "home.engage3.desc" },
    { titleKey: "home.engage4.title", descKey: "home.engage4.desc" },
  ];

  return (
    <>
      <section className="relative h-[90vh] min-h-[640px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/f47-formation.jpg" alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-navy-deep/70 to-navy-deep/95" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="text-xs tracking-[0.35em] uppercase text-gold-light mb-8">{t("home.eyebrow")}</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-10 leading-[1.05]">
            {t("home.hero.line1")}<br />{t("home.hero.line2")}
          </h1>
          <p className="text-xl md:text-2xl font-serif italic text-text-light-body mb-10 font-light">{t("home.hero.tagline")}</p>
          <p className="text-base md:text-lg text-text-light-body max-w-2xl mx-auto leading-relaxed">{t("home.hero.subtext")}</p>
          <div className="mt-14">
            <Link href="/philosophy" className="inline-block text-sm tracking-[0.3em] uppercase font-medium text-white border-b border-white pb-2 hover:text-gold-light hover:border-gold-light transition-colors duration-300">{t("home.hero.cta")}</Link>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("home.intro.eyebrow")}</div>
            <h2 className="text-4xl md:text-6xl font-serif text-navy mb-10 leading-tight">{t("home.intro.heading")}</h2>
            <p className="text-lg md:text-xl text-text-body leading-relaxed">{t("home.intro.body")}</p>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow-light mb-6">{t("home.pillars.eyebrow")}</div>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-10 leading-tight">{t("home.pillars.heading")}</h2>
            <p className="text-lg text-text-light-body mb-20 leading-relaxed">{t("home.pillars.intro")}</p>

            <div className="space-y-16">
              {pillars.map((pillar) => (
                <div key={pillar.num}>
                  <div className="text-4xl font-serif text-gold-light leading-none mb-4">{pillar.num}</div>
                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 leading-tight">{t(pillar.titleKey)}</h3>
                  <p className="text-base md:text-lg text-text-light-body leading-relaxed">{t(pillar.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="text-center lg:text-left">
              <div className="eyebrow mb-6">{t("home.approach.eyebrow")}</div>
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8 leading-tight">{t("home.approach.heading")}</h2>
              <p className="text-lg text-text-body mb-6 leading-relaxed">{t("home.approach.p1")}</p>
              <p className="text-lg text-text-body mb-10 leading-relaxed">{t("home.approach.p2")}</p>
              <Link href="/approach" className="inline-block text-sm tracking-[0.3em] uppercase font-medium text-navy border-b border-navy pb-2 hover:text-gold hover:border-gold transition-colors">{t("home.approach.cta")}</Link>
            </div>
            <div className="relative h-96 lg:h-[560px] overflow-hidden">
              <Image src="/images/geospatial.jpg" alt="Networked geospatial intelligence visualization" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("home.engage.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">{t("home.engage.heading")}</h2>
            <p className="text-lg text-text-body mb-20 leading-relaxed">{t("home.engage.intro")}</p>

            <div className="space-y-12 mb-16">
              {engagementPreview.map((engagement) => (
                <div key={engagement.titleKey}>
                  <h3 className="text-2xl font-serif text-navy mb-3">{t(engagement.titleKey)}</h3>
                  <p className="text-base md:text-lg text-text-body leading-relaxed">{t(engagement.descKey)}</p>
                </div>
              ))}
            </div>

            <Link href="/engagement" className="inline-block text-sm tracking-[0.3em] uppercase font-medium text-navy border-b border-navy pb-2 hover:text-gold hover:border-gold transition-colors">{t("home.engage.cta")}</Link>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="content-column">
          <div className="reading-column text-center">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">{t("home.cta.heading")}</h2>
            <p className="text-lg text-text-light-body mb-12 leading-relaxed">{t("home.cta.intro")}</p>
            <a href="mailto:donald@daglo.co" className="inline-block text-base text-white border-b border-white pb-2 hover:text-gold-light hover:border-gold-light transition-colors duration-300">donald@daglo.co</a>
          </div>
        </div>
      </section>
    </>
  );
}
