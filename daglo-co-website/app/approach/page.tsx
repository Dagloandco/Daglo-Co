// approach/page.tsx
//
// The Approach page develops the GEOINT framing and Zero Trust governance philosophy.
//
// This revision applies the unified editorial composition system. The terrain elements
// and the four commitments now stack vertically as left-aligned editorial entries rather
// than spreading across two-column grids. This produces the polished editorial feeling
// that matches the rest of the site and gives each idea substantial visual weight.

import Image from "next/image";
import Link from "next/link";

export default function ApproachPage() {
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
      statement: "Implicit trust should be surfaced, tested, and converted into deliberate decisions.",
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
      {/* The page hero uses centered composition against the geospatial imagery. */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
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
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">
            Understanding the terrain.
          </h1>
        </div>
      </section>

      {/* The opening section introduces the GEOINT analogy using left-aligned editorial
          composition. The three paragraphs build the argument from observation to analogy
          to enterprise application. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column">
            <div className="eyebrow mb-6">A GEOINT Perspective</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
              Enterprise risk as contested terrain.
            </h2>
            <p className="text-lg text-text-body mb-6 leading-relaxed">
              Traditional governance is backward-looking. Boards receive sanitized reports after
              risk has already matured, see compliance dashboards and red-yellow-green charts,
              but often miss the actual terrain the organization is operating in.
            </p>
            <p className="text-lg text-text-body mb-6 leading-relaxed">
              I think about risk the way a geospatial intelligence analyst thinks about contested
              terrain. You must understand the movement, the timing, the pattern of life, the
              dependencies, the chokepoints, and the adversary&apos;s likely path.
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              In enterprise terms, that means understanding how data flows, where access is
              overextended, where third-party exposure exists, where geopolitical instability
              affects the mission, and where a single failure could cascade across the
              organization.
            </p>
          </div>
        </div>
      </section>

      {/* The terrain elements now stack vertically as left-aligned editorial entries.
          Each element has a small gold uppercase label, a serif headline, and developed
          body text, all anchored to the same left margin. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column">
            <div className="eyebrow mb-6">What Boards Must See</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
              The board should know.
            </h2>
            <p className="text-lg text-text-body mb-20 leading-relaxed">
              Four questions that should be standing items on the governance agenda, not
              exceptions triggered by incidents.
            </p>

            <div className="space-y-16">
              {terrainElements.map((element) => (
                <div key={element.label}>
                  <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                    {element.label}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-navy mb-4 leading-tight">
                    {element.title}
                  </h3>
                  <p className="text-base md:text-lg text-text-body leading-relaxed">
                    {element.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Zero Trust section uses left-aligned editorial composition on the deep navy
          background. The cityscape imagery is removed from this section because it was
          competing visually with the text rather than supporting it. The argument now
          stands on its own substantial weight as editorial content. */}
      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="content-column">
          <div className="reading-column">
            <div className="eyebrow-light mb-6">Zero Trust as Governance</div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-10 leading-tight">
              Beyond the cybersecurity framework.
            </h2>
            <p className="text-lg text-text-light-body mb-6 leading-relaxed">
              Zero Trust is not a technology decision. It is a governance philosophy. A way
              of thinking about trust, verification, and assumptions at every level of the
              enterprise.
            </p>
            <p className="text-lg text-text-light-body leading-relaxed">
              The cybersecurity industry has adopted Zero Trust as a technical architecture.
              That work matters. But the deeper opportunity is to apply the same discipline
              at the board level, where decisions about partnerships, vendors, geographies,
              and strategic exposure benefit from the same rigor of never assume, always
              verify.
            </p>
          </div>
        </div>
      </section>

      {/* The four commitments now stack vertically as left-aligned editorial entries. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column">
            <div className="eyebrow mb-6">Operating Discipline</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
              Four commitments that govern the work.
            </h2>
            <p className="text-lg text-text-body mb-20 leading-relaxed">
              Every engagement operates against four standing commitments. These hold whether
              the conversation is about board governance, enterprise risk, AI strategy, or
              data exposure in contested environments.
            </p>

            <div className="space-y-20">
              {commitments.map((commitment) => (
                <div key={commitment.number}>
                  <div className="flex items-baseline gap-5 mb-4">
                    <div className="text-4xl font-serif text-gold leading-none">
                      {commitment.number}
                    </div>
                    <div className="text-xs tracking-[0.3em] uppercase text-gold">
                      {commitment.name}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-navy mb-5 leading-snug">
                    {commitment.statement}
                  </h3>
                  <p className="text-base md:text-lg text-text-body leading-relaxed">
                    {commitment.expansion}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-24">
              <Link
                href="/engagement"
                className="text-sm tracking-[0.3em] uppercase font-medium text-navy border-b border-navy pb-2 hover:text-gold hover:border-gold transition-colors"
              >
                How Engagements Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
