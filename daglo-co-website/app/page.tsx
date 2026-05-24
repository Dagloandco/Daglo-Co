// page.tsx
//
// The homepage of the Daglo and Co. website.
//
// This revision applies the unified editorial composition system. The airplane hero you
// specifically asked to preserve remains untouched. Every substantive content section now
// uses left-aligned editorial composition anchored to the consistent left margin within
// the unified content column. The four pillars stack vertically as editorial entries
// rather than spreading across a four-column grid, which gives each pillar substantial
// visual weight and clear typographic identity.

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // The four pillars are defined as data so the rendering code stays clean.
  const pillars = [
    {
      number: "01",
      title: "See clearly",
      description:
        "Boards receive sanitized reports after risk has already matured. Real governance begins with seeing the terrain as it is, not as it was. The discipline of clear-eyed observation is what distinguishes governance from reporting.",
    },
    {
      number: "02",
      title: "Verify trust",
      description:
        "Where are we implicitly trusting something we have not verified? The answer determines where the next failure will originate. Every implicit trust relationship is an exposure surface until it has been examined and made explicit.",
    },
    {
      number: "03",
      title: "Adapt under pressure",
      description:
        "Risk no longer moves linearly. Cyber incidents become supply chain disruptions become market confidence crises in the same week. Governance machinery must operate at the speed of the actual environment, not the speed of the calendar.",
    },
    {
      number: "04",
      title: "Survive contested terrain",
      description:
        "Governance must hold under stress, not collapse to compliance theater. The enterprise must be built to function when assumptions fail. Resilience is engineered into the structure rather than added through emergency measures.",
    },
  ];

  // The four engagement types previewed on the homepage.
  const engagementPreview = [
    {
      title: "Board governance advisory",
      description:
        "Helping boards and committees understand the terrain they operate in.",
    },
    {
      title: "Enterprise risk strategy",
      description:
        "Designing governance structures that see risk clearly before it matures.",
    },
    {
      title: "Governance architecture",
      description:
        "AI governance, data governance, and emerging technology risk frameworks.",
    },
    {
      title: "Executive counsel",
      description:
        "Strategic counsel for leaders navigating decisions under pressure.",
    },
  ];

  return (
    <>
      {/* The hero section preserves the F-47 aircraft imagery exactly as you requested.
          The centered composition is the appropriate treatment for a hero because it
          functions as a brief ceremonial opening rather than as sustained reading content. */}
      <section className="relative h-[90vh] min-h-[640px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/f47-formation.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-navy-deep/70 to-navy-deep/95" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="text-xs tracking-[0.35em] uppercase text-gold-light mb-8">
            Daglo &amp; Co.
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-10 leading-[1.05]">
            The castle has<br />already fallen.
          </h1>
          <p className="text-xl md:text-2xl font-serif italic text-text-light-body mb-10 font-light">
            Counsel for the decisions that define you.
          </p>
          <p className="text-base md:text-lg text-text-light-body max-w-2xl mx-auto leading-relaxed">
            Build the enterprise that can see, verify, adapt, and survive in contested terrain.
          </p>

          <div className="mt-14">
            <Link
              href="/philosophy"
              className="inline-block text-sm tracking-[0.3em] uppercase font-medium text-white border-b border-white pb-2 hover:text-gold-light hover:border-gold-light transition-colors duration-300"
            >
              Begin
            </Link>
          </div>
        </div>
      </section>

      {/* The introduction section uses left-aligned editorial composition. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column">
            <div className="eyebrow mb-6">An Advisory Practice</div>
            <h2 className="text-4xl md:text-6xl font-serif text-navy mb-10 leading-tight">
              Governance is not paperwork.
            </h2>
            <p className="text-lg md:text-xl text-text-body leading-relaxed">
              Governance is the discipline of seeing reality clearly, making decisions under
              pressure, and deciding where an organization is willing to place trust. Daglo
              and Co. provides counsel to boards and executives navigating that responsibility
              in environments where the old governance models can no longer keep up.
            </p>
          </div>
        </div>
      </section>

      {/* The four pillars now stack vertically as left-aligned editorial entries on the
          deep navy background. White text ensures strong contrast. */}
      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="content-column">
          <div className="reading-column">
            <div className="eyebrow-light mb-6">The Four Pillars</div>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-10 leading-tight">
              One operating system.
            </h2>
            <p className="text-lg text-text-light-body mb-20 leading-relaxed">
              Most boards treat governance, risk, and leadership as separate functions.
              They are not. They form a unified operating system where every decision about
              trust cascades through the enterprise.
            </p>

            <div className="space-y-16">
              {pillars.map((pillar) => (
                <div key={pillar.number}>
                  <div className="text-4xl font-serif text-gold-light leading-none mb-4">
                    {pillar.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-base md:text-lg text-text-light-body leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Approach preview keeps the two-column layout because the imagery and text
          are designed to balance each other as visual partners. This is a different kind
          of composition than the editorial single-column pattern used elsewhere. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="eyebrow mb-6">The Approach</div>
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8 leading-tight">
                Enterprise risk as terrain.
              </h2>
              <p className="text-lg text-text-body mb-6 leading-relaxed">
                I think about risk the way a geospatial intelligence analyst thinks about
                contested terrain. You must understand the movement, the timing, the pattern
                of life, the dependencies, the chokepoints, and the adversary&apos;s likely path.
              </p>
              <p className="text-lg text-text-body mb-10 leading-relaxed">
                In enterprise terms, that means understanding how data flows, where access
                is overextended, where third-party exposure exists, and where a single
                failure could cascade across the organization.
              </p>
              <Link
                href="/approach"
                className="inline-block text-sm tracking-[0.3em] uppercase font-medium text-navy border-b border-navy pb-2 hover:text-gold hover:border-gold transition-colors"
              >
                Read the Approach
              </Link>
            </div>
            <div className="relative h-96 lg:h-[560px] overflow-hidden">
              <Image
                src="/images/geospatial.jpg"
                alt="Networked geospatial intelligence visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The engagement preview uses left-aligned editorial composition with the four
          engagement types presented as stacked entries. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column">
            <div className="eyebrow mb-6">How We Engage</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
              Limited engagements. Considered counsel.
            </h2>
            <p className="text-lg text-text-body mb-20 leading-relaxed">
              We work with a limited number of boards and executives navigating complexity,
              high-value assets, sensitive data, and risks that move faster than traditional
              governance models can handle.
            </p>

            <div className="space-y-12 mb-16">
              {engagementPreview.map((engagement) => (
                <div key={engagement.title}>
                  <h3 className="text-2xl font-serif text-navy mb-3">{engagement.title}</h3>
                  <p className="text-base md:text-lg text-text-body leading-relaxed">
                    {engagement.description}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/engagement"
              className="inline-block text-sm tracking-[0.3em] uppercase font-medium text-navy border-b border-navy pb-2 hover:text-gold hover:border-gold transition-colors"
            >
              How Engagements Work
            </Link>
          </div>
        </div>
      </section>

      {/* The closing call-to-action uses left-aligned editorial composition on the deep
          navy background. */}
      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="content-column">
          <div className="reading-column">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              Begin a conversation.
            </h2>
            <p className="text-lg text-text-light-body mb-12 leading-relaxed">
              Tell us what you are navigating. We will respond with a thoughtful next step.
            </p>
            <a
              href="mailto:donald@daglo.co"
              className="inline-block text-base text-white border-b border-white pb-2 hover:text-gold-light hover:border-gold-light transition-colors duration-300"
            >
              donald@daglo.co
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
