// philosophy/page.tsx
// The Philosophy page houses the full governance thesis that defines Daglo and Co.
//
// This refined version applies the same readability improvements used on the other pages.
// The argument develops across three principles, with the central thesis statements
// elevated to pull-quote treatment so the most quotable lines have the visual weight
// they deserve.

import Image from "next/image";
import Link from "next/link";

export default function PhilosophyPage() {
  return (
    <>
      {/* The page hero uses the B-2 Spirit imagery, which is a meaningful visual choice because
          the aircraft represents the kind of asset that operates in contested environments where
          governance decisions about trust and verification have life-or-death consequences. */}
      <section className="relative h-[60vh] min-h-[440px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/b2-spirit.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-deep/80" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.35em] uppercase text-gold-light mb-8">
            Philosophy
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-text-on-dark-primary leading-[1.1]">
            Governance is not paperwork.
          </h1>
        </div>
      </section>

      {/* The opening section establishes the central thesis with editorial gravitas.
          The first paragraph is set in larger serif typography to create an editorial entry point. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="container-narrow">
          <p className="text-2xl md:text-3xl font-serif text-navy leading-relaxed mb-10">
            Governance is the discipline of seeing reality clearly, making decisions under
            pressure, and deciding where an organization is willing to place trust.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            This is not a metaphor. It is the actual work of governance at the board level and
            the executive level in environments where compliance frameworks were designed for a
            slower, more predictable world. The organizations that survive contested terrain are
            the ones that understand governance, risk, and leadership as a single operating
            system rather than three separate functions.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* The first principle section develops the idea that governance and risk are unified. */}
      <section className="py-28 bg-ivory-warm">
        <div className="container-narrow">
          <div className="eyebrow">First Principle</div>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
            One operating system.
          </h2>
          <p className="text-lg text-text-secondary mb-6 leading-relaxed">
            Most boards treat governance, risk, and leadership as separate functions. They are
            not. They form a unified operating system where every decision about trust cascades
            through the enterprise.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            When a board approves a vendor relationship, that decision is simultaneously a
            governance act, a risk act, and a leadership act. Treating these as separate
            workstreams creates seams where exposure accumulates. The work is to design the
            organization so the three move together.
          </p>

          {/* The pull quote elevates the most quotable line from this principle into the visual
              treatment it deserves. This is a line that an executive could quote in a meeting,
              and the pull-quote treatment signals that the line carries that kind of weight. */}
          <div className="pull-quote">
            Where are we implicitly trusting something we have not verified?
          </div>

          <p className="text-lg text-text-secondary leading-relaxed">
            This question shifts boardroom focus from compliance to proactive risk verification.
            It engages leaders to identify vulnerabilities and ensure trust is grounded only in
            proven reality, not inherited assumptions. The strongest boards make this question a
            standing item on the agenda rather than an exception triggered by incidents.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* The second principle addresses the nonlinear nature of modern risk. */}
      <section className="py-28 bg-ivory-warm">
        <div className="container-narrow">
          <div className="eyebrow">Second Principle</div>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
            Risk no longer moves linearly.
          </h2>
          <p className="text-lg text-text-secondary mb-6 leading-relaxed">
            Cyber incidents become supply chain disruptions become regulatory disclosures become
            market confidence crises in the same week. In contested environments, geography,
            logistics, data, cyber, and adversary intent are all part of the same battlespace.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            Boards that still process risk as a quarterly review cycle are operating on a clock
            that no longer matches the speed of events. The work is to build governance
            machinery that can see, decide, and act inside the timeframe of the actual
            environment.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* The closing principle ties the philosophy back to the work of leadership.
          The deep navy background creates dramatic visual emphasis for the closing argument,
          and all text uses the dedicated dark-background text colors for strong readability. */}
      <section className="py-28 bg-navy-deep text-text-on-dark-primary">
        <div className="container-narrow">
          <div className="text-xs tracking-[0.3em] uppercase text-gold-light mb-8">
            Closing Principle
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-text-on-dark-primary mb-10 leading-tight">
            Trust is not a control. Verification is.
          </h2>
          <p className="text-lg text-text-on-dark-secondary mb-6 leading-relaxed">
            Compliance frameworks ask whether the right policies exist. Governance asks whether
            the policies actually hold under pressure. Those are different questions and they
            produce different organizations.
          </p>
          <p className="text-lg text-text-on-dark-secondary leading-relaxed">
            The enterprises that survive contested terrain are not the ones with the most
            comprehensive policy library. They are the ones whose leaders have built the
            discipline to verify rather than assume, to see rather than report, and to act
            inside the timing of the environment rather than the timing of the calendar.
          </p>

          <div className="mt-14">
            <Link
              href="/approach"
              className="inline-block border border-gold-light text-gold-light px-12 py-4 text-xs tracking-[0.3em] uppercase font-medium hover:bg-gold-light hover:text-navy-deep transition-all duration-300"
            >
              Read the Approach
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
