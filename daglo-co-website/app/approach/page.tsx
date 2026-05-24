// approach/page.tsx
// The Approach page develops the GEOINT framing and Zero Trust governance philosophy.
//
// This refined version uses your sharper language for the Four Commitments section.
// The previous wording was generic. The new wording reads as boardroom commitments
// that an executive could actually quote in a meeting and sound credible doing it.

import Image from "next/image";
import Link from "next/link";

export default function ApproachPage() {
  // The four commitments are stored as data so the rendering code stays clean.
  // Each commitment has a label name, a short statement that captures the principle,
  // and a brief expansion that develops the practical meaning.
  const commitments = [
    {
      number: "01",
      name: "Never assume",
      statement: "Governance should challenge inherited assumptions before the environment does.",
      expansion:
        "Every governance structure rests on assumptions that were true when the organization was smaller, slower, or less exposed. The work of the board is to surface those assumptions while they can still be revised in a meeting, not after they have been revised by a crisis.",
    },
    {
      number: "02",
      name: "Verify what matters",
      statement: "Trust is not a control. Verification is.",
      expansion:
        "A policy is not a control. A check that is actually performed is a control. The discipline is to know the difference and to build the organization around what actually holds under stress, rather than what is documented to hold in the audit binder.",
    },
    {
      number: "03",
      name: "Reduce hidden exposure",
      statement:
        "Implicit trust should be surfaced, tested, and converted into deliberate decisions.",
      expansion:
        "Every implicit trust relationship across data, vendors, geographies, and partnerships is a place where the organization is exposed without knowing it. The work is to convert those relationships into explicit decisions the board has actually made.",
    },
    {
      number: "04",
      name: "Make risk visible",
      statement: "Boards cannot govern what they cannot see.",
      expansion:
        "Most boards cannot see what actually matters. The work is to build the visibility machinery that lets governance act on actual conditions rather than reported conditions. Visibility is treated as critical infrastructure, not as a reporting function.",
    },
  ];

  // The terrain elements are stored similarly. These are the four things the board
  // must see, framed as a decision framework rather than a list of topics.
  const terrainElements = [
    {
      label: "Movement",
      title: "What assets matter most",
      body: "Not every asset is equally valuable to the mission. Real governance requires clarity about which assets carry the most weight and where the loss of any one would create disproportionate impact.",
    },
    {
      label: "Dependencies",
      title: "Who can reach them",
      body: "Access maps reveal trust assumptions. The organizations that have mapped their actual access patterns rather than their policy intentions are the ones prepared for contested operations.",
    },
    {
      label: "Conditions",
      title: "Under what conditions",
      body: "Access that is acceptable under normal operations may be unacceptable under stress. The governance work is to design access that holds under the actual conditions the organization will face.",
    },
    {
      label: "Cascade",
      title: "What happens if assumptions fail",
      body: "Every governance structure rests on assumptions. The question is whether the board has explicitly identified those assumptions and stress-tested what happens when each one fails.",
    },
  ];

  return (
    <>
      {/* The page hero uses the geospatial imagery to visually establish the GEOINT framing. */}
      <section className="relative h-[60vh] min-h-[440px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/geospatial.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-deep/75" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.35em] uppercase text-gold-light mb-8">
            Approach
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-text-on-dark-primary leading-[1.1]">
            Understanding the terrain.
          </h1>
        </div>
      </section>

      {/* The opening section introduces the GEOINT analogy that anchors the approach. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="container-narrow">
          <div className="eyebrow">A GEOINT Perspective</div>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
            Enterprise risk as contested terrain.
          </h2>
          <p className="text-lg text-text-secondary mb-6 leading-relaxed">
            Traditional governance is backward-looking. Boards receive sanitized reports after
            risk has already matured, see compliance dashboards and red-yellow-green charts, but
            often miss the actual terrain the organization is operating in.
          </p>
          <p className="text-lg text-text-secondary mb-6 leading-relaxed">
            I think about risk the way a geospatial intelligence analyst thinks about contested
            terrain. You must understand the movement, the timing, the pattern of life, the
            dependencies, the chokepoints, and the adversary&apos;s likely path.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            In enterprise terms, that means understanding how data flows, where access is
            overextended, where third-party exposure exists, where geopolitical instability
            affects the mission, and where a single failure could cascade across the organization.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* The What Boards Must See section presents the terrain framework as a clean board-level
          decision matrix. Each element gets equal visual weight in the grid, with consistent
          card structure that makes the framework feel like board material rather than marketing copy. */}
      <section className="py-28 bg-ivory-warm">
        <div className="container-wide">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="eyebrow">What Boards Must See</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8 leading-tight">
              The board should know.
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Four questions that should be standing items on the governance agenda, not
              exceptions triggered by incidents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {terrainElements.map((element) => (
              <div
                key={element.label}
                className="surface-light p-10 border-l-2 border-l-gold"
              >
                <div className="text-xs tracking-[0.3em] uppercase text-gold mb-5">
                  {element.label}
                </div>
                <h3 className="text-2xl font-serif text-navy mb-5 leading-tight">
                  {element.title}
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {element.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* The Zero Trust section develops the governance philosophy beyond the technical framework.
          The two-column layout pairs the cityscape imagery with the argument, creating editorial
          rhythm that makes the section feel like a feature spread rather than a content block. */}
      <section className="py-28 bg-navy-deep text-text-on-dark-primary">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative h-96 lg:h-[520px] overflow-hidden">
              <Image
                src="/images/cityscape.webp"
                alt="Connected urban environment visualization"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-gold-light mb-8">
                Zero Trust as Governance
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-text-on-dark-primary mb-10 leading-tight">
                Beyond the cybersecurity framework.
              </h2>
              <p className="text-lg text-text-on-dark-secondary mb-6 leading-relaxed">
                Zero Trust is not a technology decision. It is a governance philosophy. A way of
                thinking about trust, verification, and assumptions at every level of the
                enterprise.
              </p>
              <p className="text-lg text-text-on-dark-secondary leading-relaxed">
                The cybersecurity industry has adopted Zero Trust as a technical architecture.
                That work matters. But the deeper opportunity is to apply the same discipline at
                the board level, where decisions about partnerships, vendors, geographies, and
                strategic exposure benefit from the same rigor of never assume, always verify.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Commitments section uses the sharper language you provided.
          Each commitment now has three layers: the short name like "Never assume" that reads
          as a directive, the central statement that captures the principle in one line,
          and a brief expansion that develops the practical meaning for board work. */}
      <section className="py-28 bg-ivory-warm">
        <div className="container-wide">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="eyebrow">Operating Discipline</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8 leading-tight">
              Four commitments that govern the work.
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Every engagement operates against four standing commitments. These hold whether
              the conversation is about board governance, enterprise risk, AI strategy, or
              data exposure in contested environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {commitments.map((commitment) => (
              <div
                key={commitment.number}
                className="surface-light p-10 md:p-12 border-t-2 border-t-gold"
              >
                {/* The header bar combines the commitment number with its short directive name.
                    This is the typographic moment where each commitment establishes its identity. */}
                <div className="flex items-baseline gap-5 mb-6">
                  <div className="text-3xl font-serif text-gold leading-none">
                    {commitment.number}
                  </div>
                  <div className="text-xs tracking-[0.3em] uppercase text-gold">
                    {commitment.name}
                  </div>
                </div>

                {/* The central statement is the boardroom-ready line that captures the principle.
                    The serif treatment at substantial size gives this line the weight it needs
                    to be quotable, which is the test of executive language. */}
                <h3 className="text-xl md:text-2xl font-serif text-navy mb-6 leading-snug">
                  {commitment.statement}
                </h3>

                {/* The expansion develops the practical meaning beneath the central statement. */}
                <p className="text-base text-text-secondary leading-relaxed">
                  {commitment.expansion}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link
              href="/engagement"
              className="inline-block border-2 border-navy text-navy px-14 py-5 text-sm tracking-[0.3em] uppercase font-medium hover:bg-navy hover:text-text-on-dark-primary transition-all duration-300"
            >
              How Engagements Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
