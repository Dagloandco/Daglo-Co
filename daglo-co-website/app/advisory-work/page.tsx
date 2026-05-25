// advisory-work/page.tsx
//
// The Advisory Work page is the renamed and repositioned successor to the Engagement
// page. The page describes how Donald works with boards, executives, and leadership
// teams using language that emphasizes strategic counsel, governance dialogue, and
// high-consequence decisions rather than consulting services and billable engagements.
//
// The four engagement types are preserved with their content largely intact, but the
// framing language throughout has shifted from a consulting voice to an executive
// counsel voice. The four operating commitments from the previous Approach page also
// move here because they describe how Donald engages with clients rather than how he
// thinks about risk, which is a better fit with this page than with the new About page.

"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../lib/LanguageContext";

export default function AdvisoryWorkPage() {
  const { t } = useLanguage();

  const types = [
    { num: "01", titleKey: "advisory.t1.title", descKey: "advisory.t1.desc" },
    { num: "02", titleKey: "advisory.t2.title", descKey: "advisory.t2.desc" },
    { num: "03", titleKey: "advisory.t3.title", descKey: "advisory.t3.desc" },
    { num: "04", titleKey: "advisory.t4.title", descKey: "advisory.t4.desc" },
  ];

  const commitments = [
    { num: "01", nameKey: "advisory.c1.name", statementKey: "advisory.c1.statement", expansionKey: "advisory.c1.expansion" },
    { num: "02", nameKey: "advisory.c2.name", statementKey: "advisory.c2.statement", expansionKey: "advisory.c2.expansion" },
    { num: "03", nameKey: "advisory.c3.name", statementKey: "advisory.c3.statement", expansionKey: "advisory.c3.expansion" },
    { num: "04", nameKey: "advisory.c4.name", statementKey: "advisory.c4.statement", expansionKey: "advisory.c4.expansion" },
  ];

  return (
    <>
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/boardroom.webp" alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-navy-deep/80" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.35em] uppercase text-gold-light mb-8">
            {t("advisory.eyebrow")}
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white leading-[1.15]">
            {t("advisory.hero")}
          </h1>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("advisory.intro.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
              {t("advisory.intro.heading")}
            </h2>
            <p className="text-lg text-text-body mb-6 leading-relaxed">
              {t("advisory.intro.p1")}
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              {t("advisory.intro.p2")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("advisory.types.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-20 leading-tight">
              {t("advisory.types.heading")}
            </h2>

            <div className="space-y-20">
              {types.map((engagement) => (
                <div key={engagement.num}>
                  <div className="text-4xl font-serif text-gold leading-none mb-4">{engagement.num}</div>
                  <h3 className="text-2xl md:text-3xl font-serif text-navy mb-5 leading-tight">
                    {t(engagement.titleKey)}
                  </h3>
                  <p className="text-base md:text-lg text-text-body leading-relaxed">
                    {t(engagement.descKey)}
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
            <div className="eyebrow-light mb-6">{t("advisory.commit.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-10 leading-tight">
              {t("advisory.commit.heading")}
            </h2>
            <p className="text-lg text-text-light-body mb-20 leading-relaxed">
              {t("advisory.commit.intro")}
            </p>

            <div className="space-y-20">
              {commitments.map((commitment) => (
                <div key={commitment.num}>
                  <div className="flex items-baseline justify-center gap-5 mb-4">
                    <div className="text-4xl font-serif text-gold-light leading-none">{commitment.num}</div>
                    <div className="text-xs tracking-[0.3em] uppercase text-gold-light">{t(commitment.nameKey)}</div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-white mb-5 leading-snug">
                    {t(commitment.statementKey)}
                  </h3>
                  <p className="text-base md:text-lg text-text-light-body leading-relaxed">
                    {t(commitment.expansionKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8 leading-tight">
              {t("advisory.cta.heading")}
            </h2>
            <p className="text-lg text-text-body mb-12 leading-relaxed">
              {t("advisory.cta.intro")}
            </p>
            <div className="space-y-6">
              <a href="mailto:donald@daglo.co" className="block text-xl text-navy hover:text-gold transition-colors duration-300">
                donald@daglo.co
              </a>
              <Link href="/contact" className="inline-block text-sm tracking-[0.3em] uppercase font-medium text-navy border-b border-navy pb-2 hover:text-gold hover:border-gold transition-colors">
                {t("advisory.cta.link")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
