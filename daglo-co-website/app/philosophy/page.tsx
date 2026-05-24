// philosophy/page.tsx
//
// The Philosophy page houses the full governance thesis that defines Daglo and Co.
//
// This version uses the same type-and-space discipline as the other pages. The opening
// statement is set in larger serif typography to create an editorial entry point. The
// pull-quote treatment elevates the most quotable line in the document. The closing
// principle section uses white text on the deep navy background for strong readability.

import Image from "next/image";
import Link from "next/link";

export default function PhilosophyPage() {
  return (
    <>
      {/* The page hero uses the B-2 Spirit imagery, which represents the kind of asset that
          operates in contested environments where governance decisions about trust and
          verification carry operational consequence. */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
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
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">
            Governance is not paperwork.
          </h1>
        </div>
      </section>

      {/* The opening section establishes the central thesis. The first paragraph is set
          in larger serif typography to function as an editorial lead. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="container-narrow">
          <p className="text-2xl md:text-3xl font-serif text-navy leading-relaxed mb-10">
            Governance is the discipline of seeing reality clearly, making decisions under
            pressure, and deciding where an organization is willing to place trust.
          </p>
          <p className="text-lg text-text-body leading-relaxed">
            This is not a metaphor. It is the actual work of governance at the board level
            and the executive level in environments where compliance frameworks were designed
            for a slower, more predictable world. The organizations that survive contested
            terrain are the ones that understand governance, risk, and leadership as a single
            operating system rather than three separate functions.
          </p>
        </div>
      </section>

      {/* The first principle develops the unified operating system idea. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="container-narrow">
          <div className="eyebrow mb-6">First Principle</div>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
            One operating system.
          </h2>
          <p className="text-lg text-text-body mb-6 leading-relaxed">
            Most boards treat governance, risk, and leadership as separate functions. They
            are not. They form a unified operating system where every decision about trust
            cascades through the enterprise.
          </p>
          <p className="text-lg text-text-body leading-relaxed">
            When a board approves a vendor relationship, that decision is simultaneously a
            governance act, a risk act, and a leadership act. Treating these as separate
            workstreams creates seams where exposure accumulates. The work is to design the
            organization so the three move together.
          </p>

          {/* The pull quote elevates the most quotable line in this principle into the
              visual treatment it deserves. */}
          <div className="pull-quote">
            Where are we implicitly trusting something we have not verified?
          </div>

          <p className="text-lg text-text-body leading-relaxed">
            This question shifts boardroom focus from compliance to proactive risk
            verification. It engages leaders to identify vulnerabilities and ensure trust
            is grounded only in proven reality, not inherited assumptions. The strongest
            boards make this question a standing item on the agenda rather than an exception
            triggered by incidents.
          </p>
        </div>
      </section>

      {/* The second principle addresses the nonlinear nature of modern risk. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="container-narrow">
          <div className="eyebrow mb-6">Second Principle</div>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
            Risk no longer moves linearly.
          </h2>
          <p className="text-lg text-text-body mb-6 leading-relaxed">
            Cyber incidents become supply chain disruptions become regulatory disclosures
            become market confidence crises in the same week. In contested environments,
            geography, logistics, data, cyber, and adversary intent are all part of the
            same battlespace.
          </p>
          <p className="text-lg text-text-body leading-relaxed">
            Boards that still process risk as a quarterly review cycle are operating on a
            clock that no longer matches the speed of events. The work is to build governance
            machinery that can see, decide, and act inside the timeframe of the actual
            environment.
          </p>
        </div>
      </section>

      {/* The closing principle section uses white text on the deep navy background for
          strong readability and dramatic visual emphasis on the central commitment. */}
      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="container-narrow">
          <div className="eyebrow-light mb-6">Closing Principle</div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-10 leading-tight">
            Trust is not a control. Verification is.
          </h2>
          <p className="text-lg text-text-light-body mb-6 leading-relaxed">
            Compliance frameworks ask whether the right policies exist. Governance asks
            whether the policies actually hold under pressure. Those are different questions
            and they produce different organizations.
          </p>
          <p className="text-lg text-text-light-body leading-relaxed">
            The enterprises that survive contested terrain are not the ones with the most
            comprehensive policy library. They are the ones whose leaders have built the
            discipline to verify rather than assume, to see rather than report, and to act
            inside the timing of the environment rather than the timing of the calendar.
          </p>

          <div className="mt-14">
            <Link
              href="/approach"
              className="text-sm tracking-[0.3em] uppercase font-medium text-white border-b border-white pb-2 hover:text-gold-light hover:border-gold-light transition-colors duration-300"
            >
              Read the Approach
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
