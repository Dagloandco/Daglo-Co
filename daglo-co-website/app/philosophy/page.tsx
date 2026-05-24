// philosophy/page.tsx
// This page houses the full governance thesis that defines Daglo and Co.
// It expands on the philosophical foundation introduced briefly on the homepage,
// giving visitors the depth and texture they need to understand the practice.

import Image from "next/image";
import Link from "next/link";

export default function PhilosophyPage() {
  return (
    <>
      {/* The page hero introduces the topic with a strong headline and supporting imagery. */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/b2-spirit.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/75" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Philosophy</div>
          <h1 className="text-5xl md:text-6xl font-serif text-ivory leading-tight">
            Governance is not paperwork.
          </h1>
        </div>
      </section>

      {/* The opening statement establishes the central thesis with editorial gravitas. */}
      <section className="py-20 md:py-28 bg-ivory-warm">
        <div className="container-narrow">
          <p className="text-2xl md:text-3xl font-serif text-navy leading-relaxed mb-8">
            Governance is the discipline of seeing reality clearly, making decisions under
            pressure, and deciding where an organization is willing to place trust.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            This is not a metaphor. It is the actual work of governance at the board level and the
            executive level in environments where compliance frameworks were designed for a slower,
            more predictable world. The organizations that survive contested terrain are the ones
            that understand governance, risk, and leadership as a single operating system rather
            than three separate functions.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* The first principle section develops the idea that governance and risk are unified. */}
      <section className="py-20 bg-ivory-warm">
        <div className="container-narrow">
          <div className="eyebrow">First Principle</div>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8">
            One operating system.
          </h2>
          <p className="text-lg text-muted mb-6 leading-relaxed">
            Most boards treat governance, risk, and leadership as separate functions. They are not.
            They form a unified operating system where every decision about trust cascades through
            the enterprise.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            When a board approves a vendor relationship, that decision is simultaneously a
            governance act, a risk act, and a leadership act. Treating these as separate
            workstreams creates seams where exposure accumulates. The work is to design the
            organization so the three move together.
          </p>

          <div className="pull-quote">
            Where are we implicitly trusting something we have not verified?
          </div>

          <p className="text-lg text-muted leading-relaxed">
            This question shifts boardroom focus from compliance to proactive risk verification.
            It engages leaders to identify vulnerabilities and ensure trust is grounded only in
            proven reality, not inherited assumptions. The strongest boards make this question a
            standing item on the agenda rather than an exception triggered by incidents.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* The second principle addresses the nonlinear nature of modern risk. */}
      <section className="py-20 bg-ivory-warm">
        <div className="container-narrow">
          <div className="eyebrow">Second Principle</div>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8">
            Risk no longer moves linearly.
          </h2>
          <p className="text-lg text-muted mb-6 leading-relaxed">
            Cyber incidents become supply chain disruptions become regulatory disclosures become
            market confidence crises in the same week. In contested environments, geography,
            logistics, data, cyber, and adversary intent are all part of the same battlespace.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            Boards that still process risk as a quarterly review cycle are operating on a clock
            that no longer matches the speed of events. The work is to build governance machinery
            that can see, decide, and act inside the timeframe of the actual environment.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* The closing principle ties the philosophy back to the work of leadership. */}
      <section className="py-20 bg-navy text-ivory">
        <div className="container-narrow">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Closing Principle</div>
          <h2 className="text-4xl md:text-5xl font-serif text-ivory mb-8">
            Trust is not a control. Verification is.
          </h2>
          <p className="text-lg text-ivory/80 mb-6 leading-relaxed">
            Compliance frameworks ask whether the right policies exist. Governance asks whether
            the policies actually hold under pressure. Those are different questions and they
            produce different organizations.
          </p>
          <p className="text-lg text-ivory/80 leading-relaxed">
            The enterprises that survive contested terrain are not the ones with the most
            comprehensive policy library. They are the ones whose leaders have built the discipline
            to verify rather than assume, to see rather than report, and to act inside the timing
            of the environment rather than the timing of the calendar.
          </p>

          <div className="mt-12">
            <Link
              href="/approach"
              className="inline-block border border-gold text-gold px-10 py-4 text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all duration-300"
            >
              Read the Approach
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
