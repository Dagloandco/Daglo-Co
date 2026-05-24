// page.tsx
// The homepage of the Daglo and Co. website.
//
// This refined version preserves the dramatic airplane hero you loved while addressing
// the readability issues that needed correction. The key changes include:
//
// First, all text on dark backgrounds now uses the dedicated dark-background text colors
// from the design system rather than relying on opacity adjustments to white text.
// This produces text that maintains strong contrast and feels warm rather than gray.
//
// Second, section transitions are now handled with intentional visual treatments rather
// than just spacing. Each major section change is marked with either a color shift, a
// section divider, or both, so visitors always understand they are entering new territory.
//
// Third, the spacing rhythm has been refined so that sections breathe more generously
// without feeling sparse. The vertical spacing between major elements has been increased
// throughout, which is one of the foundational moves that distinguishes editorial design
// from marketing design.

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* The hero section preserves the F-47 fighter aircraft imagery you specifically asked
          to keep. The gradient overlay has been refined to create stronger contrast at the
          bottom of the section where the call-to-action button sits, ensuring all elements
          remain highly readable against the atmospheric background. */}
      <section className="relative h-[90vh] min-h-[640px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/f47-formation.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          {/* The gradient overlay now uses a more sophisticated three-stop gradient that
              ensures readability at every vertical position. The darkest concentration is
              at the bottom where text appears, while the top remains atmospheric to preserve
              the dramatic quality of the aircraft imagery. */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/65 to-navy-deep/90" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="text-xs tracking-[0.35em] uppercase text-gold-light mb-8">
            Daglo &amp; Co.
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-text-on-dark-primary mb-10 leading-[1.05]">
            The castle has<br />already fallen.
          </h1>
          <p className="text-xl md:text-2xl font-serif italic text-text-on-dark-secondary mb-10 font-light">
            Counsel for the decisions that define you.
          </p>
          <p className="text-base md:text-lg text-text-on-dark-secondary max-w-2xl mx-auto leading-relaxed">
            Build the enterprise that can see, verify, adapt, and survive in contested terrain.
          </p>

          <div className="mt-14">
            <Link
              href="/philosophy"
              className="inline-block border border-gold-light text-gold-light px-12 py-4 text-xs tracking-[0.3em] uppercase font-medium hover:bg-gold-light hover:text-navy-deep transition-all duration-300"
            >
              Begin
            </Link>
          </div>
        </div>
      </section>

      {/* The introduction section provides a refined editorial entry point.
          The section uses our warm ivory background which creates immediate visual relief
          from the dramatic hero, signaling a shift from atmospheric statement to substantive content. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="container-narrow text-center">
          <div className="eyebrow">An Advisory Practice</div>
          <h2 className="text-4xl md:text-6xl font-serif text-navy mb-10 leading-tight">
            Governance is not paperwork.
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Governance is the discipline of seeing reality clearly, making decisions under pressure,
            and deciding where an organization is willing to place trust. Daglo and Co. provides
            counsel to boards and executives navigating that responsibility in environments where
            the old governance models can no longer keep up.
          </p>
        </div>
      </section>

      {/* The four pillars section presents the core philosophical framework on a navy background.
          This is where the readability improvements matter most because the previous version had
          dark text on dark backgrounds in some places. The new version uses the dedicated
          dark-background text tokens that maintain warmth and ensure strong contrast. */}
      <section className="py-28 bg-navy-deep text-text-on-dark-primary">
        <div className="container-wide">
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.3em] uppercase text-gold-light mb-6">
              The Four Pillars
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-text-on-dark-primary mb-8 leading-tight">
              One operating system.
            </h2>
            <p className="text-lg text-text-on-dark-secondary max-w-2xl mx-auto leading-relaxed">
              Most boards treat governance, risk, and leadership as separate functions.
              They are not. They form a unified operating system where every decision about trust
              cascades through the enterprise.
            </p>
          </div>

          {/* The pillars grid uses our surface-dark utility class which creates subtle
              card elevation through a slightly lighter navy-rich background and a refined
              border. This treatment gives each pillar visual identity without creating
              heavy boxes that would feel busy. */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="surface-dark p-8 border-t-2 border-t-gold">
              <div className="text-5xl font-serif text-gold-light mb-4">01</div>
              <h3 className="text-xl font-serif text-text-on-dark-primary mb-4">
                See clearly
              </h3>
              <p className="text-sm text-text-on-dark-secondary leading-relaxed">
                Boards receive sanitized reports after risk has already matured. Real governance
                begins with seeing the terrain as it is, not as it was.
              </p>
            </div>
            <div className="surface-dark p-8 border-t-2 border-t-gold">
              <div className="text-5xl font-serif text-gold-light mb-4">02</div>
              <h3 className="text-xl font-serif text-text-on-dark-primary mb-4">
                Verify trust
              </h3>
              <p className="text-sm text-text-on-dark-secondary leading-relaxed">
                Where are we implicitly trusting something we have not verified? The answer
                determines where the next failure will originate.
              </p>
            </div>
            <div className="surface-dark p-8 border-t-2 border-t-gold">
              <div className="text-5xl font-serif text-gold-light mb-4">03</div>
              <h3 className="text-xl font-serif text-text-on-dark-primary mb-4">
                Adapt under pressure
              </h3>
              <p className="text-sm text-text-on-dark-secondary leading-relaxed">
                Risk no longer moves linearly. Cyber incidents become supply chain disruptions
                become market confidence crises in the same week.
              </p>
            </div>
            <div className="surface-dark p-8 border-t-2 border-t-gold">
              <div className="text-5xl font-serif text-gold-light mb-4">04</div>
              <h3 className="text-xl font-serif text-text-on-dark-primary mb-4">
                Survive contested terrain
              </h3>
              <p className="text-sm text-text-on-dark-secondary leading-relaxed">
                Governance must hold under stress, not collapse to compliance theater.
                The enterprise must be built to function when assumptions fail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The approach preview section reintroduces light backgrounds with the geospatial imagery.
          The two-column layout creates editorial rhythm and gives both the text and the image
          appropriate weight on the page. */}
      <section className="py-28 bg-ivory-warm">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="eyebrow">The Approach</div>
              <h2 className="text-4xl md:text-6xl font-serif text-navy mb-8 leading-tight">
                Enterprise risk as terrain.
              </h2>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                I think about risk the way a geospatial intelligence analyst thinks about contested
                terrain. You must understand the movement, the timing, the pattern of life, the
                dependencies, the chokepoints, and the adversary&apos;s likely path.
              </p>
              <p className="text-lg text-text-secondary mb-10 leading-relaxed">
                In enterprise terms, that means understanding how data flows, where access is
                overextended, where third-party exposure exists, and where a single failure could
                cascade across the organization.
              </p>
              <Link
                href="/approach"
                className="inline-block text-xs tracking-[0.3em] uppercase font-medium text-gold border-b border-gold pb-2 hover:text-navy hover:border-navy transition-colors"
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

      {/* The engagement preview section uses the lighter ivory variation to create a subtle
          visual shift from the previous section while maintaining the light background context.
          This kind of nuanced background variation is what creates editorial rhythm without
          requiring heavy dividers between sections. */}
      <section className="py-28 bg-ivory-pure">
        <div className="container-wide">
          <div className="text-center mb-20">
            <div className="eyebrow">How We Engage</div>
            <h2 className="text-4xl md:text-6xl font-serif text-navy mb-8 leading-tight">
              Limited engagements.<br />Considered counsel.
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              We work with a limited number of boards and executives navigating complexity,
              high-value assets, sensitive data, and risks that move faster than traditional
              governance models can handle.
            </p>
          </div>

          {/* The engagement types grid uses surface-light cards with gold border accents.
              This treatment is more refined than the previous border-top approach because
              it gives each engagement type a contained visual identity that reads as
              substantive rather than as a list item. */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="surface-light p-10 border-l-2 border-l-gold">
              <h3 className="text-xl font-serif text-navy mb-3">Board governance advisory</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Helping boards and committees understand the terrain they operate in.
              </p>
            </div>
            <div className="surface-light p-10 border-l-2 border-l-gold">
              <h3 className="text-xl font-serif text-navy mb-3">Enterprise risk strategy</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Designing governance structures that see risk clearly before it matures.
              </p>
            </div>
            <div className="surface-light p-10 border-l-2 border-l-gold">
              <h3 className="text-xl font-serif text-navy mb-3">Governance architecture</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                AI governance, data governance, and emerging technology risk frameworks.
              </p>
            </div>
            <div className="surface-light p-10 border-l-2 border-l-gold">
              <h3 className="text-xl font-serif text-navy mb-3">Executive counsel</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Strategic counsel for leaders navigating decisions under pressure.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/engagement"
              className="inline-block text-xs tracking-[0.3em] uppercase font-medium text-gold border-b border-gold pb-2 hover:text-navy hover:border-navy transition-colors"
            >
              How Engagements Work
            </Link>
          </div>
        </div>
      </section>

      {/* The closing call-to-action section provides a strong ending to the homepage journey.
          The deep navy background creates dramatic visual contrast with the preceding light
          sections, and the text uses the dedicated dark-background colors to ensure readability. */}
      <section className="py-28 bg-navy-deep text-text-on-dark-primary">
        <div className="container-narrow text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-text-on-dark-primary mb-8 leading-tight">
            Begin a conversation.
          </h2>
          <p className="text-lg text-text-on-dark-secondary mb-12 leading-relaxed">
            Tell us what you are navigating. We will respond with a thoughtful next step.
          </p>
          <a
            href="mailto:donald@daglo.co"
            className="inline-block border border-gold-light text-gold-light px-12 py-4 text-xs tracking-[0.3em] uppercase font-medium hover:bg-gold-light hover:text-navy-deep transition-all duration-300"
          >
            donald@daglo.co
          </a>
        </div>
      </section>
    </>
  );
}
