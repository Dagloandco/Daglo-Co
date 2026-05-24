// approach/page.tsx
// This page develops the GEOINT framing and Zero Trust governance perspective.
// It uses imagery of networked terrain and connected environments to reinforce visually
// the analogy between geospatial intelligence analysis and enterprise risk thinking.

import Image from "next/image";
import Link from "next/link";

export default function ApproachPage() {
  return (
    <>
      {/* The page hero uses the geospatial imagery to visually establish the GEOINT framing. */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/geospatial.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Approach</div>
          <h1 className="text-5xl md:text-6xl font-serif text-ivory leading-tight">
            Understanding the terrain.
          </h1>
        </div>
      </section>

      {/* The opening section introduces the GEOINT analogy that anchors the approach. */}
      <section className="py-20 md:py-28 bg-ivory-warm">
        <div className="container-narrow">
          <div className="eyebrow">A GEOINT Perspective</div>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8">
            Enterprise risk as contested terrain.
          </h2>
          <p className="text-lg text-muted mb-6 leading-relaxed">
            Traditional governance is backward-looking. Boards receive sanitized reports after
            risk has already matured, see compliance dashboards and red-yellow-green charts, but
            often miss the actual terrain the organization is operating in.
          </p>
          <p className="text-lg text-muted mb-6 leading-relaxed">
            I think about risk the way a geospatial intelligence analyst thinks about contested
            terrain. You must understand the movement, the timing, the pattern of life, the
            dependencies, the chokepoints, and the adversary&apos;s likely path.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            In enterprise terms, that means understanding how data flows, where access is
            overextended, where third-party exposure exists, where geopolitical instability
            affects the mission, and where a single failure could cascade across the organization.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* The four elements section breaks down what understanding terrain actually involves. */}
      <section className="py-20 bg-ivory-warm">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="eyebrow">What Boards Must See</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy">
              The board should know.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <div className="text-sm text-gold tracking-widest uppercase mb-3">Movement</div>
              <h3 className="text-2xl font-serif text-navy mb-3">What assets matter most</h3>
              <p className="text-muted leading-relaxed">
                Not every asset is equally valuable to the mission. Real governance requires
                clarity about which assets carry the most weight and where the loss of any one
                would create disproportionate impact.
              </p>
            </div>
            <div>
              <div className="text-sm text-gold tracking-widest uppercase mb-3">Dependencies</div>
              <h3 className="text-2xl font-serif text-navy mb-3">Who can reach them</h3>
              <p className="text-muted leading-relaxed">
                Access maps reveal trust assumptions. The organizations that have mapped their
                actual access patterns rather than their policy intentions are the ones prepared
                for contested operations.
              </p>
            </div>
            <div>
              <div className="text-sm text-gold tracking-widest uppercase mb-3">Conditions</div>
              <h3 className="text-2xl font-serif text-navy mb-3">Under what conditions</h3>
              <p className="text-muted leading-relaxed">
                Access that is acceptable under normal operations may be unacceptable under
                stress. The governance work is to design access that holds under the actual
                conditions the organization will face.
              </p>
            </div>
            <div>
              <div className="text-sm text-gold tracking-widest uppercase mb-3">Cascade</div>
              <h3 className="text-2xl font-serif text-navy mb-3">What happens if assumptions fail</h3>
              <p className="text-muted leading-relaxed">
                Every governance structure rests on assumptions. The question is whether the
                board has explicitly identified those assumptions and stress-tested what happens
                when each one fails.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* The Zero Trust section develops the governance philosophy beyond the technical framework. */}
      <section className="py-20 bg-navy text-ivory">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 lg:h-[500px] overflow-hidden">
              <Image
                src="/images/cityscape.webp"
                alt="Connected urban environment visualization"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
                Zero Trust as Governance
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-ivory mb-8 leading-tight">
                Beyond the cybersecurity framework.
              </h2>
              <p className="text-lg text-ivory/80 mb-6 leading-relaxed">
                Zero Trust is not a technology decision. It is a governance philosophy. A way of
                thinking about trust, verification, and assumptions at every level of the
                enterprise.
              </p>
              <p className="text-lg text-ivory/80 leading-relaxed">
                The cybersecurity industry has adopted Zero Trust as a technical architecture.
                That work matters. But the deeper opportunity is to apply the same discipline at
                the board level, where decisions about partnerships, vendors, geographies, and
                strategic exposure benefit from the same rigor of never assume, always verify.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The closing principles section anchors the approach in four operating commitments. */}
      <section className="py-20 bg-ivory-warm">
        <div className="container-narrow">
          <div className="eyebrow">Operating Commitments</div>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-12">
            Four commitments that shape the work.
          </h2>

          <div className="space-y-10">
            <div className="border-l-2 border-gold pl-8">
              <h3 className="text-2xl font-serif text-navy mb-3">Never assume</h3>
              <p className="text-muted leading-relaxed">
                Every trust assumption is a candidate for verification. Governance that does not
                actively challenge its own assumptions is governance that is waiting to fail.
              </p>
            </div>
            <div className="border-l-2 border-gold pl-8">
              <h3 className="text-2xl font-serif text-navy mb-3">Trust is not a control. Verification is.</h3>
              <p className="text-muted leading-relaxed">
                A policy is not a control. A check that is actually performed is a control. The
                discipline is to know the difference and to build the organization around what
                actually holds rather than what is documented to hold.
              </p>
            </div>
            <div className="border-l-2 border-gold pl-8">
              <h3 className="text-2xl font-serif text-navy mb-3">Reduce implicit trust</h3>
              <p className="text-muted leading-relaxed">
                Every implicit trust relationship is a place where the organization is exposed
                without knowing it. The work is to surface these relationships and convert them
                into explicit decisions that the board has actually made.
              </p>
            </div>
            <div className="border-l-2 border-gold pl-8">
              <h3 className="text-2xl font-serif text-navy mb-3">Make risk visible</h3>
              <p className="text-muted leading-relaxed">
                Boards cannot govern what they cannot see. The work is to build the visibility
                machinery that lets governance act on actual conditions rather than reported
                conditions.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/engagement"
              className="inline-block border border-navy text-navy px-10 py-4 text-sm tracking-widest uppercase hover:bg-navy hover:text-ivory transition-all duration-300"
            >
              How Engagements Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
