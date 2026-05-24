// insights/the-castle-has-already-fallen/page.tsx
// This page contains the full text of your first article.
// It uses an editorial layout with narrow reading width, large opening typography,
// and careful spacing to create the experience of reading a thoughtful publication.

import Link from "next/link";
import Image from "next/image";

export default function CastleArticlePage() {
  return (
    <>
      {/* The article hero presents the title with editorial gravitas. */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/b2-spirit.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/70 to-navy/90" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
            First Article &middot; Daglo &amp; Co.
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-ivory leading-tight mb-8">
            The castle has already fallen.
          </h1>
          <p className="text-xl font-serif italic text-ivory/80">
            Why traditional governance models cannot keep up with contested terrain.
          </p>
        </div>
      </section>

      {/* The article body uses narrow reading width to support sustained reading. */}
      <article className="py-20 md:py-28 bg-ivory-warm">
        <div className="container-narrow">
          {/* The opening paragraph sets the stakes and orients the reader. */}
          <p className="text-2xl font-serif text-navy leading-relaxed mb-12">
            The castle metaphor is comfortable. It suggests that an organization can build walls,
            station guards, and decide each morning whether to lower the drawbridge. It implies
            that governance is a perimeter problem and that the work is to make the perimeter
            thicker. None of that has been true for years.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-6">
            The organizations that still operate as if the castle holds are not actually defended.
            They are simply unaware of the breaches that have already occurred and the assumptions
            that no longer apply. Their boards receive compliance reports that describe a world
            that existed when the frameworks were written, not the world the enterprise is
            currently operating in.
          </p>

          <p className="text-lg text-muted leading-relaxed mb-12">
            This article makes the case that governance must be rebuilt around a different
            premise. The castle has already fallen. The work is not to restore the walls. The
            work is to build the enterprise that can see clearly, verify what matters, adapt to
            actual conditions, and survive in terrain where the old governance models cannot
            keep up.
          </p>

          <div className="pull-quote">
            Governance is not paperwork. It is the discipline of seeing reality clearly,
            making decisions under pressure, and deciding where an organization is willing
            to place trust.
          </div>

          {/* The first major section develops the failure of perimeter thinking. */}
          <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6 mt-16">
            The failure of perimeter thinking.
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-6">
            For decades, governance and risk operated on a perimeter model. The organization
            existed inside a boundary. Threats came from outside the boundary. Controls were
            designed to detect when something crossed the boundary, and policies established
            what should be allowed in and what should be kept out.
          </p>
          <p className="text-lg text-muted leading-relaxed mb-6">
            That model worked when the boundary was real. When data lived in a data center.
            When employees worked from offices. When vendors had defined and limited access. When
            the threats were external and the internal operations were trusted by default.
          </p>
          <p className="text-lg text-muted leading-relaxed mb-12">
            None of those conditions hold anymore. Data lives in clouds operated by third parties.
            Employees work from anywhere. Vendors have ongoing access through APIs, integrations,
            and identity federations that no one has fully mapped. Threats come from inside the
            perimeter as often as from outside it, and the perimeter itself has dissolved into a
            network of trust relationships that no policy framework adequately describes.
          </p>

          {/* The second section introduces the alternative framing. */}
          <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6">
            Governance as terrain.
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-6">
            A different framing is needed. Instead of thinking about governance as a perimeter
            problem, think about it as a terrain problem. The enterprise operates in terrain.
            The terrain has features. Some features are advantageous and others create exposure.
            The work of governance is to understand the terrain, identify the chokepoints and
            cascade paths, and design the organization to operate effectively in the actual
            conditions it faces.
          </p>
          <p className="text-lg text-muted leading-relaxed mb-12">
            This framing is borrowed from geospatial intelligence analysis. When intelligence
            analysts study contested terrain, they do not draw a line and call everything inside
            the line safe. They map the actual movement, the timing patterns, the dependencies,
            the chokepoints, and the adversary&apos;s likely paths. They build a picture of the
            terrain that lets leaders make decisions inside the timing of the environment rather
            than the timing of the calendar.
          </p>

          {/* The third section translates the framing into practical board work. */}
          <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6">
            What boards must do.
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-6">
            For boards, the terrain framing translates into four practical questions that should
            be standing items on the governance agenda rather than exceptions triggered by
            incidents.
          </p>
          <p className="text-lg text-muted leading-relaxed mb-6">
            First, what assets matter most. Not every system is equally valuable to the mission,
            and the board should be able to name with precision which assets would create
            disproportionate damage if compromised. If the board cannot answer that question
            clearly, the organization is governing by accident.
          </p>
          <p className="text-lg text-muted leading-relaxed mb-6">
            Second, who can reach those assets. Access maps reveal trust assumptions that no
            policy library can describe. The organizations prepared for contested operations are
            the ones that have mapped their actual access patterns rather than their policy
            intentions.
          </p>
          <p className="text-lg text-muted leading-relaxed mb-6">
            Third, under what conditions. Access that is acceptable under normal operations may
            be unacceptable under stress. The governance work is to design access that holds
            under the actual conditions the organization will face, not just the conditions
            described in the audit.
          </p>
          <p className="text-lg text-muted leading-relaxed mb-12">
            Fourth, what happens if assumptions fail. Every governance structure rests on
            assumptions. The question is whether the board has explicitly identified those
            assumptions and stress-tested what happens when each one fails. Most boards have not.
            That is the work.
          </p>

          {/* The closing section connects back to the opening metaphor and calls for action. */}
          <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6">
            Building what comes next.
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-6">
            The castle metaphor is comfortable because it suggests that defense is possible
            through accumulation. More walls. More controls. More policies. More audit cycles.
            The terrain framing is uncomfortable because it suggests that defense requires
            discipline rather than accumulation. The discipline of seeing rather than reporting.
            The discipline of verifying rather than assuming. The discipline of acting inside
            the timing of the environment rather than the timing of the calendar.
          </p>
          <p className="text-lg text-muted leading-relaxed mb-6">
            The enterprises that survive contested terrain are not the ones with the most
            comprehensive policy library. They are the ones whose leaders have built the
            organizational discipline to operate on what is actually true rather than what is
            documented to be true.
          </p>
          <p className="text-lg text-muted leading-relaxed mb-12">
            That is the work. And it begins with the recognition that the castle has already
            fallen, and the question is no longer how to restore it, but what to build in its
            place.
          </p>

          {/* The article signature provides closure and identity. */}
          <div className="border-t border-border pt-8 mt-16">
            <div className="text-sm text-muted italic">
              Daglo &amp; Co. provides counsel to boards and executives navigating governance,
              risk, and leadership in contested terrain.
            </div>
          </div>
        </div>
      </article>

      {/* The closing call-to-action invites readers to continue the conversation. */}
      <section className="py-20 bg-navy text-ivory">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-ivory mb-6">
            Continue the conversation.
          </h2>
          <p className="text-lg text-ivory/70 mb-10 leading-relaxed">
            If this thinking resonates with what your organization is navigating, reach out.
          </p>
          <a
            href="mailto:donald@daglo.co"
            className="inline-block border border-gold text-gold px-10 py-4 text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all duration-300 mr-4"
          >
            donald@daglo.co
          </a>
          <Link
            href="/insights"
            className="inline-block text-sm tracking-widest uppercase text-ivory/70 border-b border-ivory/30 pb-1 hover:text-gold hover:border-gold transition-colors mt-4 md:mt-0"
          >
            Back to Insights
          </Link>
        </div>
      </section>
    </>
  );
}
