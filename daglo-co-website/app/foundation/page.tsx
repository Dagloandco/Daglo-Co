// foundation/page.tsx
//
// Foundation page with full English and French translation support.

"use client";

import Image from "next/image";
import { useLanguage } from "../lib/LanguageContext";

export default function FoundationPage() {
  const { t } = useLanguage();

  const credentials = [
    { nameKey: "foundation.c1.name", ctxKey: "foundation.c1.ctx" },
    { nameKey: "foundation.c2.name", ctxKey: "foundation.c2.ctx" },
    { nameKey: "foundation.c3.name", ctxKey: "foundation.c3.ctx" },
    { nameKey: "foundation.c4.name", ctxKey: "foundation.c4.ctx" },
    { nameKey: "foundation.c5.name", ctxKey: "foundation.c5.ctx" },
  ];

  return (
    <>
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/open-book.jpg" alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-navy-deep/85" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.35em] uppercase text-gold-light mb-8">{t("foundation.eyebrow")}</div>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">{t("foundation.hero")}</h1>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("foundation.bg.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">{t("foundation.bg.heading")}</h2>
            <p className="text-lg text-text-body mb-6 leading-relaxed">
              <span className="font-medium text-navy">{t("foundation.bg.veteran")}</span>
              {t("foundation.bg.p1rest")}
            </p>
            <p className="text-lg text-text-body leading-relaxed">{t("foundation.bg.p2")}</p>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">{t("foundation.cred.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">{t("foundation.cred.heading")}</h2>
            <p className="text-lg text-text-body leading-relaxed mb-20">{t("foundation.cred.intro")}</p>

            <div className="space-y-16">
              {credentials.map((credential) => (
                <div key={credential.nameKey}>
                  <h3 className="text-2xl md:text-3xl font-serif text-navy mb-4 leading-tight">{t(credential.nameKey)}</h3>
                  <p className="text-base md:text-lg text-text-body leading-relaxed">{t(credential.ctxKey)}</p>
                </div>
              ))}
            </div>

            <p className="text-lg md:text-xl font-serif italic text-navy leading-relaxed mt-24">{t("foundation.cred.closing")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
