// about/page.tsx
//
// The About page is the substantive governance leadership page of the site.
//
// This page consolidates the previous Philosophy, Approach, and Foundation pages into
// a single long-form executive platform page. The content is organized into four
// clearly defined sections rather than flattened into one continuous narrative, which
// preserves the structural distinction between Donald's background, the governance
// thesis, the enterprise risk framework, and the credentials.
//
// The page is positioned for a board nominating committee, executive recruiter, or
// senior executive who needs to understand Donald's governance perspective and the
// substance behind it. The hero uses the boardroom imagery as the institutional
// anchor, and the B-2 Spirit and geospatial imagery appear inside the page as
// supporting section anchors rather than as primary identity signals.

"use client";

import Image from "next/image";
import { useLanguage } from "../lib/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  // The terrain elements support the enterprise risk section.
  const terrainElements = [
    { labelKey: "about.risk.t1.label", titleKey: "about.risk.t1.title", bodyKey: "about.risk.t1.body" },
    { labelKey: "about.risk.t2.label", titleKey: "about.risk.t2.title", bodyKey: "about.risk.t2.body" },
    { labelKey: "about.risk.t3.label", titleKey: "about.risk.t3.title", bodyKey: "about.risk.t3.body" },
    { labelKey: "about.risk.t4.label", titleKey: "about.risk.t4.title", bodyKey: "about.risk.t4.body" },
  ];

  // The credentials list anchors the final section.
  const credentials = [
    { nameKey: "about.cred1.name", ctxKey: "about.cred1.ctx" },
    { nameKey: "about.cred2.name", ctxKey: "about.cred2.ctx" },
    { nameKey: "about.cred3.name", ctxKey: "about.cred3.ctx" },
    { nameKey: "about.cred4.name", ctxKey: "about.cred4.ctx" },
    { nameKey: "about.cred5.name", ctxKey: "about.cred5.ctx" },
  ];

  return (
    <>
      {/* Page hero anchors the About page in institutional gravitas via the boardroom
          imagery. The headline establishes the governance leadership positioning that
          the rest of the page develops. */}
      <section className="relative h-[60vh] min-h-[460px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/boardroom.webp" alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-navy-deep/85" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="text-xs tracking-[0.35em] uppercase text-gold-light mb-8">
            {t("about.eyebrow")}
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white leading-[1.15]">
            {t("about.hero")}
          </h1>
        </div>
      </section>

      {/* Section 1: Background and Leadership Perspective. The opening section establishes
          who Donald is, what shaped his governance perspective, and what he brings to
          boards and senior leadership. The language is institutional throughout, framing
          Donald through his work and the discipline that informs it rather than through
          personal narrative. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("about.bg.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
              {t("about.bg.heading")}
            </h2>
            <p className="text-lg text-text-body mb-6 leading-relaxed">
              {t("about.bg.p1")}
            </p>
            <p className="text-lg text-text-body mb-6 leading-relaxed">
              {t("about.bg.p2")}
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              {t("about.bg.p3")}
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Governance Thesis. This is the heart of the page. The B-2 Spirit
          imagery appears here as a supporting section anchor, providing visual
          punctuation between the biographical section above and the substantive thesis
          content below. The imagery is treated as a slim banner rather than a full hero
          so it reinforces rather than dominates. */}
      <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/b2-spirit.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-navy-deep/75" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.35em] uppercase text-gold-light mb-6">
            {t("about.thesis.eyebrow")}
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
            {t("about.thesis.heading")}
          </h2>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <p className="text-2xl md:text-3xl font-serif text-navy leading-relaxed mb-10">
              {t("about.thesis.lead")}
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              {t("about.thesis.intro")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("about.thesis.p1.eyebrow")}</div>
            <h3 className="text-3xl md:text-4xl font-serif text-navy mb-10 leading-tight">
              {t("about.thesis.p1.heading")}
            </h3>
            <p className="text-lg text-text-body mb-6 leading-relaxed">
              {t("about.thesis.p1.body1")}
            </p>
            <p className="text-lg text-text-body mb-10 leading-relaxed">
              {t("about.thesis.p1.body2")}
            </p>
            <p className="text-2xl md:text-3xl font-serif italic text-navy mb-10 leading-snug">
              {t("about.thesis.p1.quote")}
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              {t("about.thesis.p1.body3")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("about.thesis.p2.eyebrow")}</div>
            <h3 className="text-3xl md:text-4xl font-serif text-navy mb-10 leading-tight">
              {t("about.thesis.p2.heading")}
            </h3>
            <p className="text-lg text-text-body mb-6 leading-relaxed">
              {t("about.thesis.p2.body1")}
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              {t("about.thesis.p2.body2")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow-light mb-6">{t("about.thesis.p3.eyebrow")}</div>
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-10 leading-tight">
              {t("about.thesis.p3.heading")}
            </h3>
            <p className="text-lg text-text-light-body mb-6 leading-relaxed">
              {t("about.thesis.p3.body1")}
            </p>
            <p className="text-lg text-text-light-body leading-relaxed">
              {t("about.thesis.p3.body2")}
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: How I Think About Enterprise Risk. The geospatial imagery appears
          here as a supporting section anchor, signaling the shift from governance
          thesis to the analytical framework Donald brings to enterprise risk. */}
      <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/geospatial.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-navy-deep/75" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.35em] uppercase text-gold-light mb-6">
            {t("about.risk.eyebrow")}
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
            {t("about.risk.heading")}
          </h2>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <p className="text-lg text-text-body mb-6 leading-relaxed">
              {t("about.risk.p1")}
            </p>
            <p className="text-lg text-text-body mb-6 leading-relaxed">
              {t("about.risk.p2")}
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              {t("about.risk.p3")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("about.risk.boards.eyebrow")}</div>
            <h3 className="text-3xl md:text-4xl font-serif text-navy mb-10 leading-tight">
              {t("about.risk.boards.heading")}
            </h3>
            <p className="text-lg text-text-body mb-20 leading-relaxed">
              {t("about.risk.boards.intro")}
            </p>

            <div className="space-y-16">
              {terrainElements.map((element) => (
                <div key={element.labelKey}>
                  <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                    {t(element.labelKey)}
                  </div>
                  <h4 className="text-xl md:text-2xl font-serif text-navy mb-4 leading-tight">
                    {t(element.titleKey)}
                  </h4>
                  <p className="text-base md:text-lg text-text-body leading-relaxed">
                    {t(element.bodyKey)}
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
            <div className="eyebrow-light mb-6">{t("about.risk.zt.eyebrow")}</div>
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-10 leading-tight">
              {t("about.risk.zt.heading")}
            </h3>
            <p className="text-lg text-text-light-body mb-6 leading-relaxed">
              {t("about.risk.zt.p1")}
            </p>
            <p className="text-lg text-text-light-body leading-relaxed">
              {t("about.risk.zt.p2")}
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Frameworks and Credentials. The final section presents the
          institutional frameworks that shape Donald's governance perspective. The list
          uses the same elegant treatment as the previous Foundation page, with each
          credential presented as a clean editorial entry rather than as a certification
          inventory. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("about.cred.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
              {t("about.cred.heading")}
            </h2>
            <p className="text-lg text-text-body leading-relaxed mb-20">
              {t("about.cred.intro")}
            </p>

            <div className="space-y-16">
              {credentials.map((credential) => (
                <div key={credential.nameKey}>
                  <h3 className="text-2xl md:text-3xl font-serif text-navy mb-4 leading-tight">
                    {t(credential.nameKey)}
                  </h3>
                  <p className="text-base md:text-lg text-text-body leading-relaxed">
                    {t(credential.ctxKey)}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-lg md:text-xl font-serif italic text-navy leading-relaxed mt-24">
              {t("about.cred.closing")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
