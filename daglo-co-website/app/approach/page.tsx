// approach/page.tsx
//
// Approach page with full English and French translation support.

"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../lib/LanguageContext";

export default function ApproachPage() {
  const { t } = useLanguage();

  const terrainElements = [
    { labelKey: "approach.terrain1.label", titleKey: "approach.terrain1.title", bodyKey: "approach.terrain1.body" },
    { labelKey: "approach.terrain2.label", titleKey: "approach.terrain2.title", bodyKey: "approach.terrain2.body" },
    { labelKey: "approach.terrain3.label", titleKey: "approach.terrain3.title", bodyKey: "approach.terrain3.body" },
    { labelKey: "approach.terrain4.label", titleKey: "approach.terrain4.title", bodyKey: "approach.terrain4.body" },
  ];

  const commitments = [
    { num: "01", nameKey: "approach.c1.name", statementKey: "approach.c1.statement", expansionKey: "approach.c1.expansion" },
    { num: "02", nameKey: "approach.c2.name", statementKey: "approach.c2.statement", expansionKey: "approach.c2.expansion" },
    { num: "03", nameKey: "approach.c3.name", statementKey: "approach.c3.statement", expansionKey: "approach.c3.expansion" },
    { num: "04", nameKey: "approach.c4.name", statementKey: "approach.c4.statement", expansionKey: "approach.c4.expansion" },
  ];

  return (
    <>
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/geospatial.jpg" alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-navy-deep/75" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.35em] uppercase text-gold-light mb-8">{t("approach.eyebrow")}</div>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">{t("approach.hero")}</h1>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("approach.geo.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">{t("approach.geo.heading")}</h2>
            <p className="text-lg text-text-body mb-6 leading-relaxed">{t("approach.geo.p1")}</p>
            <p className="text-lg text-text-body mb-6 leading-relaxed">{t("approach.geo.p2")}</p>
            <p className="text-lg text-text-body leading-relaxed">{t("approach.geo.p3")}</p>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("approach.boards.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">{t("approach.boards.heading")}</h2>
            <p className="text-lg text-text-body mb-20 leading-relaxed">{t("approach.boards.intro")}</p>

            <div className="space-y-16">
              {terrainElements.map((element) => (
                <div key={element.labelKey}>
                  <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">{t(element.labelKey)}</div>
                  <h3 className="text-2xl md:text-3xl font-serif text-navy mb-4 leading-tight">{t(element.titleKey)}</h3>
                  <p className="text-base md:text-lg text-text-body leading-relaxed">{t(element.bodyKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow-light mb-6">{t("approach.zt.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-10 leading-tight">{t("approach.zt.heading")}</h2>
            <p className="text-lg text-text-light-body mb-6 leading-relaxed">{t("approach.zt.p1")}</p>
            <p className="text-lg text-text-light-body leading-relaxed">{t("approach.zt.p2")}</p>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("approach.commit.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">{t("approach.commit.heading")}</h2>
            <p className="text-lg text-text-body mb-20 leading-relaxed">{t("approach.commit.intro")}</p>

            <div className="space-y-20">
              {commitments.map((commitment) => (
                <div key={commitment.num}>
                  <div className="flex items-baseline justify-center gap-5 mb-4">
                    <div className="text-4xl font-serif text-gold leading-none">{commitment.num}</div>
                    <div className="text-xs tracking-[0.3em] uppercase text-gold">{t(commitment.nameKey)}</div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-navy mb-5 leading-snug">{t(commitment.statementKey)}</h3>
                  <p className="text-base md:text-lg text-text-body leading-relaxed">{t(commitment.expansionKey)}</p>
                </div>
              ))}
            </div>

            <div className="mt-24">
              <Link href="/engagement" className="text-sm tracking-[0.3em] uppercase font-medium text-navy border-b border-navy pb-2 hover:text-gold hover:border-gold transition-colors">{t("approach.commit.cta")}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
