// foundation/page.tsx
//
// The Foundation page presents background and credentials in a clean editorial format.
//
// This revision implements a significant shift in how credentials are presented. The
// previous version organized many credentials into four technical categories, which
// produced a comprehensive resume-style inventory. That treatment was technically
// accurate but it positioned the page as a list of qualifications rather than as a
// statement of executive credibility.
//
// The new version presents five carefully curated credentials, each chosen for its
// direct relevance to board-level work: enterprise risk management, director governance,
// executive education, zero trust strategy, and information privacy. Each credential
// has a single sentence of context that frames what the credential means in practice
// for the kind of work the practice does.
//
// The reduction in credentials is paradoxically a credibility improvement rather than a
// loss. At the board level, curation is itself a signal of judgment. A practice that
// shows five credentials chosen for their relevance reads as more confident than a
// practice that lists everything it has earned.

import Image from "next/image";

export default function FoundationPage() {
  // The five credentials are defined as a data array so the rendering code stays clean
  // and so future revisions to wording or order only require changes in one place.
  // Each credential has a name and a one-sentence context line that frames its meaning
  // in board-relevant terms rather than technical-certification terms.
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
      {/* The page hero uses the open-book imagery to suggest scholarship and reflection.
          The headline uses pure white text for strong contrast against the dark background,
          which we know works correctly from the previous deployment. */}
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

      {/* The biographical section is preserved from the previous version because it works
          correctly and uses the mature governance voice that comes from working in
          enterprise risk management at the board level. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="container-narrow">
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
      </section>

      {/* The credentials section is now built around five carefully selected credentials.
          The structure is intentionally simple: a centered heading and intro paragraph
          above, followed by the five credentials listed vertically with generous spacing
          between them.

          Each credential appears as a clean editorial entry with no container, no border,
          and no separator line beneath it. The credential name sits in large serif type
          as the visual anchor, and the context sentence appears below it in body text.
          The spacing between credentials does the structural work that boxes or dividers
          would otherwise be required to do. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="container-wide">
          {/* The centered introduction sets up the credentials section with both a heading
              and a substantive paragraph that frames what the credentials mean in practice.
              The intro paragraph performs important work because it tells the reader how
              to interpret the list that follows: not as a resume but as a deliberate
              foundation for executive advisory work. */}
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <div className="eyebrow mb-6">Foundation of Practice</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
              Built for board-level judgment.
            </h2>
            <p className="text-lg text-text-body leading-relaxed">
              Daglo and Co. is built on a foundation of enterprise risk, governance, cyber
              resilience, data protection, and board-level judgment. The credentials below
              reflect a disciplined approach to helping leaders make decisions under
              complexity, uncertainty, and operational pressure.
            </p>
          </div>

          {/* The five credentials are presented as a single column of editorial entries.
              A single-column layout is the right choice for five items because it preserves
              the editorial rhythm of the page and gives each credential its full visual
              weight, rather than forcing them into a grid that would create artificial
              category groupings.

              The max-w-3xl constraint keeps the credentials at a comfortable reading width
              centered on the page, and the space-y-16 utility produces substantial vertical
              gaps between each entry. These gaps are intentionally generous because in a
              clean editorial layout, white space is what creates the premium feeling that
              dense designs cannot achieve regardless of how good the typography is. */}
          <div className="max-w-3xl mx-auto space-y-16">
            {credentials.map((credential) => (
              <div key={credential.name} className="text-center">
                <h3 className="text-2xl md:text-3xl font-serif text-navy mb-4 leading-tight">
                  {credential.name}
                </h3>
                <p className="text-base md:text-lg text-text-body leading-relaxed max-w-xl mx-auto">
                  {credential.context}
                </p>
              </div>
            ))}
          </div>

          {/* The closing paragraph uses your refined wording about credentials supporting
              a practice built for boards navigating enterprise risk, cyber resilience,
              data governance, regulatory complexity, and strategic uncertainty. This
              wording works because it ties the credentials directly to the practice areas,
              giving the reader a concrete sense of when to engage the practice and which
              problems it is built to address. */}
          <div className="max-w-3xl mx-auto mt-24 text-center">
            <div className="hairline-rule mb-12" />
            <p className="text-lg text-text-body leading-relaxed italic font-serif">
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
