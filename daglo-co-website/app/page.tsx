// page.tsx
// This file defines the homepage of the Daglo and Co. website.
// The homepage is the most important page on the site because it shapes first impressions.
// We use a dramatic hero image, our manifesto language, and clean editorial layouts
// to create immediate gravitas and signal what kind of advisory practice we are.

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* The hero section opens the homepage with a dramatic full-width image and our manifesto.
       * We use a sophisticated overlay treatment that darkens the image enough to ensure
       * the text remains highly readable while preserving the atmospheric quality of the imagery.
       */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* The background image fills the entire hero section using absolute positioning. */}
        <div className="absolute inset-0">
          <Image
            src="/images/f47-formation.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          {/* The gradient overlay sits on top of the image to ensure text readability. */}
          {/* It darkens the image more heavily at the bottom where the text appears. */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/60 to-navy/85" />
        </div>

        {/* The hero content sits on top of the image and overlay. */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
            Daglo &amp; Co.
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-ivory mb-8 leading-tight">
            The castle has already fallen.
          </h1>
          <p className="text-xl md:text-2xl font-serif italic text-ivory/90 mb-12 font-light">
            Counsel for the decisions that define you.
          </p>
          <p className="text-base md:text-lg text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            Build the enterprise that can see, verify, adapt, and survive in contested terrain.
          </p>

          {/* A subtle call-to-action button invites visitors to explore further. */}
          <div className="mt-12">
            <Link
              href="/philosophy"
              className="inline-block border border-gold text-gold px-10 py-4 text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all duration-300"
            >
              Begin
            </Link>
          </div>
        </div>
      </section>

      {/* The introduction section provides a brief statement of who we are and what we do.
       * This section uses generous white space and serif typography to feel substantial.
       */}
      <section className="py-24 md:py-32 bg-ivory-warm">
        <div className="container-narrow text-center">
          <div className="eyebrow">An Advisory Practice</div>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8">
            Governance is not paperwork.
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Governance is the discipline of seeing reality clearly, making decisions under pressure,
            and deciding where an organization is willing to place trust. Daglo and Co. provides
            counsel to boards and executives navigating that responsibility in environments where
            the old governance models can no longer keep up.
          </p>
        </div>
      </section>

      {/* The four pillars section introduces the core philosophical framework.
       * Each pillar is presented as a card with a strong statement and supporting context.
       * This grid layout creates visual rhythm and makes the philosophy easy to scan.
       */}
      <section className="py-24 bg-navy text-ivory">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              The Four Pillars
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-ivory mb-6">
              One operating system.
            </h2>
            <p className="text-lg text-ivory/70 max-w-2xl mx-auto">
              Most boards treat governance, risk, and leadership as separate functions.
              They are not. They form a unified operating system where every decision about trust
              cascades through the enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="border-l-2 border-gold pl-6">
              <div className="text-3xl font-serif text-gold mb-3">01</div>
              <h3 className="text-xl font-serif text-ivory mb-3">See clearly</h3>
              <p className="text-sm text-ivory/70 leading-relaxed">
                Boards receive sanitized reports after risk has already matured. Real governance
                begins with seeing the terrain as it is, not as it was.
              </p>
            </div>
            <div className="border-l-2 border-gold pl-6">
              <div className="text-3xl font-serif text-gold mb-3">02</div>
              <h3 className="text-xl font-serif text-ivory mb-3">Verify trust</h3>
              <p className="text-sm text-ivory/70 leading-relaxed">
                Where are we implicitly trusting something we have not verified? The answer
                determines where the next failure will originate.
              </p>
            </div>
            <div className="border-l-2 border-gold pl-6">
              <div className="text-3xl font-serif text-gold mb-3">03</div>
              <h3 className="text-xl font-serif text-ivory mb-3">Adapt under pressure</h3>
              <p className="text-sm text-ivory/70 leading-relaxed">
                Risk no longer moves linearly. Cyber incidents become supply chain disruptions
                become market confidence crises in the same week.
              </p>
            </div>
            <div className="border-l-2 border-gold pl-6">
              <div className="text-3xl font-serif text-gold mb-3">04</div>
              <h3 className="text-xl font-serif text-ivory mb-3">Survive contested terrain</h3>
              <p className="text-sm text-ivory/70 leading-relaxed">
                Governance must hold under stress, not collapse to compliance theater.
                The enterprise must be built to function when assumptions fail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The approach preview section uses imagery to introduce the GEOINT framing.
       * It links to the dedicated Approach page where the full thesis is developed.
       */}
      <section className="py-24 bg-ivory-warm">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="eyebrow">The Approach</div>
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 leading-tight">
                Enterprise risk as terrain.
              </h2>
              <p className="text-lg text-muted mb-6 leading-relaxed">
                I think about risk the way a geospatial intelligence analyst thinks about contested
                terrain. You must understand the movement, the timing, the pattern of life, the
                dependencies, the chokepoints, and the adversary&apos;s likely path.
              </p>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                In enterprise terms, that means understanding how data flows, where access is
                overextended, where third-party exposure exists, and where a single failure could
                cascade across the organization.
              </p>
              <Link
                href="/approach"
                className="inline-block text-sm tracking-widest uppercase text-gold border-b border-gold pb-1 hover:text-navy hover:border-navy transition-colors"
              >
                Read the Approach
              </Link>
            </div>
            <div className="relative h-96 lg:h-[500px] overflow-hidden">
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

      {/* The engagement preview section gives a brief look at how we work with clients.
       * It links to the dedicated Engagement page where the four engagement types are detailed.
       */}
      <section className="py-24 bg-ivory">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="eyebrow">How We Engage</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">
              Limited engagements. Considered counsel.
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              We work with a limited number of boards and executives navigating complexity,
              high-value assets, sensitive data, and risks that move faster than traditional
              governance models can handle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="border-t border-border pt-6">
              <h3 className="text-xl font-serif text-navy mb-2">Board governance advisory</h3>
              <p className="text-sm text-muted">
                Helping boards and committees understand the terrain they operate in.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-xl font-serif text-navy mb-2">Enterprise risk strategy</h3>
              <p className="text-sm text-muted">
                Designing governance structures that see risk clearly before it matures.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-xl font-serif text-navy mb-2">Governance architecture</h3>
              <p className="text-sm text-muted">
                AI governance, data governance, and emerging technology risk frameworks.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-xl font-serif text-navy mb-2">Executive counsel</h3>
              <p className="text-sm text-muted">
                Strategic counsel for leaders navigating decisions under pressure.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/engagement"
              className="inline-block text-sm tracking-widest uppercase text-gold border-b border-gold pb-1 hover:text-navy hover:border-navy transition-colors"
            >
              How Engagements Work
            </Link>
          </div>
        </div>
      </section>

      {/* The closing call-to-action section invites visitors to begin a conversation.
       * It uses the navy background to provide a strong visual ending to the homepage journey.
       */}
      <section className="py-24 bg-navy text-ivory">
        <div className="container-narrow text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-ivory mb-6">
            Let us talk about your governance challenges.
          </h2>
          <p className="text-lg text-ivory/70 mb-10 leading-relaxed">
            Conversations begin with an email. Tell us what you are navigating and we will
            respond with a thoughtful next step.
          </p>
          <a
            href="mailto:donald@daglo.co"
            className="inline-block border border-gold text-gold px-10 py-4 text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all duration-300"
          >
            donald@daglo.co
          </a>
        </div>
      </section>
    </>
  );
}
