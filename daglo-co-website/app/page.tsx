// page.tsx
//
// The homepage of the Daglo and Co. website.
//
// This version preserves the airplane hero you specifically asked to keep, and rebuilds
// every other section using the type-and-space design philosophy rather than the card-based
// approach that produced the boxed-template feeling.
//
// The most significant change is in the Four Pillars section. The previous version put each
// pillar in a card with a top border, which created four visible boxes on the page. The new
// version presents the pillars as a typographic system with no containers, just numbered
// headlines and supporting text arranged in a grid that lets the type do the work.
//
// All headlines on dark backgrounds now use white as their primary color, which fixes the
// readability disaster where dark navy text was floating against dark navy backgrounds.

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* The hero section preserves the F-47 aircraft imagery exactly as you requested.
          The gradient overlay creates strong contrast at the bottom where text appears
          while keeping the top atmospheric to preserve the dramatic quality of the imagery. */}
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
          {/* The headline uses pure white rather than the muted ivory tones that were
              causing the readability problems. This headline must be the most prominent
              element on the page when visitors first arrive. */}
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

      {/* The introduction section provides editorial entry into the substantive content.
          The headline uses navy on the warm ivory background, which produces strong contrast
          and ensures readability. The previous version had this same headline floating in
          a low-contrast state that made it disappear. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="container-narrow text-center">
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
      </section>

      {/* The Four Pillars section is now built around typography rather than cards.
          The previous version put each pillar in a bordered container with a top accent line,
          which created the boxed feeling. This version presents the pillars as a clean
          typographic grid with no containers, where the structure comes from the numbering,
          the headline treatment, and the generous gaps between items. */}
      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="container-wide">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <div className="eyebrow-light mb-6">The Four Pillars</div>
            {/* The section headline now uses pure white, which fixes the readability problem
                where the previous version had dark navy text on the navy background. */}
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              One operating system.
            </h2>
            <p className="text-lg text-text-light-body leading-relaxed">
              Most boards treat governance, risk, and leadership as separate functions.
              They are not. They form a unified operating system where every decision about
              trust cascades through the enterprise.
            </p>
          </div>

          {/* The pillars grid presents each pillar as pure typography with no container.
              The large gold number provides visual anchoring, the white serif headline
              provides the substantive identity, and the body text supports the argument.
              No borders, no backgrounds, no cards. Just type and space. */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            <div>
              <div className="text-5xl font-serif text-gold-light mb-6 leading-none">01</div>
              <h3 className="text-2xl font-serif text-white mb-5 leading-tight">
                See clearly
              </h3>
              <p className="text-base text-text-light-body leading-relaxed">
                Boards receive sanitized reports after risk has already matured. Real
                governance begins with seeing the terrain as it is, not as it was.
              </p>
            </div>
            <div>
              <div className="text-5xl font-serif text-gold-light mb-6 leading-none">02</div>
              <h3 className="text-2xl font-serif text-white mb-5 leading-tight">
                Verify trust
              </h3>
              <p className="text-base text-text-light-body leading-relaxed">
                Where are we implicitly trusting something we have not verified? The answer
                determines where the next failure will originate.
              </p>
            </div>
            <div>
              <div className="text-5xl font-serif text-gold-light mb-6 leading-none">03</div>
              <h3 className="text-2xl font-serif text-white mb-5 leading-tight">
                Adapt under pressure
              </h3>
              <p className="text-base text-text-light-body leading-relaxed">
                Risk no longer moves linearly. Cyber incidents become supply chain
                disruptions become market confidence crises in the same week.
              </p>
            </div>
            <div>
              <div className="text-5xl font-serif text-gold-light mb-6 leading-none">04</div>
              <h3 className="text-2xl font-serif text-white mb-5 leading-tight">
                Survive contested terrain
              </h3>
              <p className="text-base text-text-light-body leading-relaxed">
                Governance must hold under stress, not collapse to compliance theater.
                The enterprise must be built to function when assumptions fail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Approach preview reintroduces light backgrounds with the geospatial imagery.
          The two-column layout creates editorial rhythm and gives both the text and the
          image appropriate weight. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="eyebrow mb-6">The Approach</div>
              <h2 className="text-4xl md:text-6xl font-serif text-navy mb-8 leading-tight">
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

      {/* The Engagement preview section uses the same type-and-space treatment as the pillars.
          No cards, no boxes around the engagement types. Just clean typography with subtle
          horizontal rules to provide minimal structural separation. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="container-wide">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="eyebrow mb-6">How We Engage</div>
            <h2 className="text-4xl md:text-6xl font-serif text-navy mb-8 leading-tight">
              Limited engagements.<br />Considered counsel.
            </h2>
            <p className="text-lg text-text-body leading-relaxed">
              We work with a limited number of boards and executives navigating complexity,
              high-value assets, sensitive data, and risks that move faster than traditional
              governance models can handle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-serif text-navy mb-4">Board governance advisory</h3>
              <p className="text-base text-text-body leading-relaxed">
                Helping boards and committees understand the terrain they operate in.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-navy mb-4">Enterprise risk strategy</h3>
              <p className="text-base text-text-body leading-relaxed">
                Designing governance structures that see risk clearly before it matures.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-navy mb-4">Governance architecture</h3>
              <p className="text-base text-text-body leading-relaxed">
                AI governance, data governance, and emerging technology risk frameworks.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-navy mb-4">Executive counsel</h3>
              <p className="text-base text-text-body leading-relaxed">
                Strategic counsel for leaders navigating decisions under pressure.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/engagement"
              className="inline-block text-sm tracking-[0.3em] uppercase font-medium text-navy border-b border-navy pb-2 hover:text-gold hover:border-gold transition-colors"
            >
              How Engagements Work
            </Link>
          </div>
        </div>
      </section>

      {/* The closing call-to-action uses white text on the deep navy background.
          The text is now high-contrast and immediately readable. */}
      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="container-narrow text-center">
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
      </section>
    </>
  );
}
