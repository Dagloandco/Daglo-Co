// foundation/page.tsx
//
// The Foundation page presents background and credentials in centered editorial format.
//
// The five credentials now use centered text alignment within the reading column. Each
// credential name and its context sentence center along the page axis, which gives the
// list a ceremonial, balanced feeling rather than the anchored editorial feeling of the
// left-aligned version. The closing italic paragraph also centers, completing the
// symmetrical composition of the credentials section.

import Image from "next/image";

export default function FoundationPage() {
  const credentials = [
    {
      name: "COSO Enterprise Risk Management",
      context:
        "Enterprise risk discipline grounded in strategy, performance, governance, and organizational resilience.",
    },
    {
      name: "National Association of Corporate Directors",
      context:
        "Director credentials through the National Association of Corporate Directors.",
    },
    {
      name: "INSEAD Executive Education",
      context:
        "Global executive education supporting strategy, leadership, and enterprise-level decision-making.",
    },
    {
      name: "Forrester Zero Trust Strategist",
      context:
        "Zero Trust strategy applied beyond technical architecture to governance, data, vendors, access, and enterprise risk.",
    },
    {
      name: "Fellow of Information Privacy",
      context:
        "Privacy and information governance expertise supporting responsible data use, regulatory awareness, and trust-based leadership.",
    },
  ];

  return (
    <>
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/open-book.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-deep/85" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.35em] uppercase text-gold-light mb-8">
            Foundation
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">
            Background and credentials.
          </h1>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">Background</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
              The lens that informs the work.
            </h2>
            <p className="text-lg text-text-body mb-6 leading-relaxed">
              <span className="font-medium text-navy">U.S. Air Force veteran.</span> Founder
              of Lumeva LLC, an advisory and government contracting firm working at the
              intersection of enterprise risk, governance architecture, and cybersecurity.
              Practitioner depth in Zero Trust strategy, data governance, internal control,
              and decision-making under uncertainty.
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              Military service shaped how I think about risk appetite, command judgment,
              and the discipline of operating with incomplete information. That perspective
              informs how I work with boards on enterprise risk management, governance
              structures, and the question that defines every executive conversation: where
              is the organization placing trust, and is that trust still warranted?
            </p>
          </div>
        </div>
      </section>

      {/* The credentials section now centers every credential along the page axis.
          Each credential name appears as a centered serif headline with its context
          sentence centered below it in body text. This produces the ceremonial,
          balanced feeling of a curated list rather than the anchored editorial feeling
          of the left-aligned version. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">Foundation of Practice</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
              Built for board-level judgment.
            </h2>
            <p className="text-lg text-text-body leading-relaxed mb-20">
              Daglo and Co. is built on a foundation of enterprise risk, governance, cyber
              resilience, data protection, and board-level judgment. The credentials below
              reflect a disciplined approach to helping leaders make decisions under
              complexity, uncertainty, and operational pressure.
            </p>

            <div className="space-y-16">
              {credentials.map((credential) => (
                <div key={credential.name}>
                  <h3 className="text-2xl md:text-3xl font-serif text-navy mb-4 leading-tight">
                    {credential.name}
                  </h3>
                  <p className="text-base md:text-lg text-text-body leading-relaxed">
                    {credential.context}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-lg md:text-xl font-serif italic text-navy leading-relaxed mt-24">
              Together, these credentials support a practice built for boards, executives,
              and organizations navigating enterprise risk, cyber resilience, data
              governance, regulatory complexity, and strategic uncertainty across both
              public and private-sector environments.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
