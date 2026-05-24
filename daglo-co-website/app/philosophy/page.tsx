// philosophy/page.tsx
//
// The Philosophy page houses the full governance thesis that defines Daglo and Co.
//
// This revision adds center alignment to every content section while preserving the
// editorial composition system established in the previous revision. The unified content
// column and reading column constraints remain in place, but the text within those
// containers now centers along the page axis rather than left-aligning to a margin.
//
// Center alignment produces a different feeling than left alignment. Left alignment
// feels anchored and editorial, like a serious publication. Center alignment feels
// ceremonial and balanced, like a formal document or invitation. Both can work for
// premium content, and you have specifically asked for the centered treatment because
// it matches the symmetrical, formal feeling you want for the practice.

import Image from "next/image";
import Link from "next/link";

export default function PhilosophyPage() {
  return (
    <>
      {/* The page hero remains centered as it was. */}
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

      {/* The opening section now uses center alignment within the reading column.
          The text-center utility cascades center alignment down to every child element,
          which means the lead paragraph and the body paragraph both center along the
          page axis. The reading column itself is centered within the content column
          through the margin-auto we added to the global stylesheet. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
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
        </div>
      </section>

      {/* The first principle section centers every element within the reading column.
          The eyebrow, headline, body paragraphs, and italic emphasis paragraph all
          center along the same vertical axis through the middle of the page. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">First Principle</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
              One operating system.
            </h2>
            <p className="text-lg text-text-body mb-6 leading-relaxed">
              Most boards treat governance, risk, and leadership as separate functions. They
              are not. They form a unified operating system where every decision about trust
              cascades through the enterprise.
            </p>
            <p className="text-lg text-text-body mb-10 leading-relaxed">
              When a board approves a vendor relationship, that decision is simultaneously a
              governance act, a risk act, and a leadership act. Treating these as separate
              workstreams creates seams where exposure accumulates. The work is to design the
              organization so the three move together.
            </p>

            {/* The italic emphasis paragraph centers along with everything else, which
                gives the central question of this section the visual weight of a ceremonial
                statement positioned at the heart of the page. */}
            <p className="text-2xl md:text-3xl font-serif italic text-navy mb-10 leading-snug">
              Where are we implicitly trusting something we have not verified?
            </p>

            <p className="text-lg text-text-body leading-relaxed">
              This question shifts boardroom focus from compliance to proactive risk
              verification. It engages leaders to identify vulnerabilities and ensure trust
              is grounded only in proven reality, not inherited assumptions. The strongest
              boards make this question a standing item on the agenda rather than an exception
              triggered by incidents.
            </p>
          </div>
        </div>
      </section>

      {/* The second principle continues the centered composition pattern. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
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
        </div>
      </section>

      {/* The closing principle uses centered composition on the deep navy background.
          The Read the Approach link sits centered as a small inline-block element below
          the closing paragraph, completing the ceremonial centered composition. */}
      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow-light mb-6">Closing Principle</div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-10 leading-tight">
              Trust is not a control. Verification is.
            </h2>
            <p className="text-lg text-text-light-body mb-6 leading-relaxed">
              Compliance frameworks ask whether the right policies exist. Governance asks
              whether the policies actually hold under pressure. Those are different questions
              and they produce different organizations.
            </p>
            <p className="text-lg text-text-light-body leading-relaxed mb-14">
              The enterprises that survive contested terrain are not the ones with the most
              comprehensive policy library. They are the ones whose leaders have built the
              discipline to verify rather than assume, to see rather than report, and to act
              inside the timing of the environment rather than the timing of the calendar.
            </p>

            <Link
              href="/approach"
              className="inline-block text-sm tracking-[0.3em] uppercase font-medium text-white border-b border-white pb-2 hover:text-gold-light hover:border-gold-light transition-colors duration-300"
            >
              Read the Approach
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
