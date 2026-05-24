// foundation/page.tsx
//
// The Foundation page presents background and credentials in a clean editorial format.
//
// This version addresses the busy, line-heavy treatment that the previous version produced.
// The previous version put a horizontal rule under every credential block, which created
// the visual clutter you identified. This version removes all of those separator lines
// and lets generous vertical spacing handle the separation between credentials.
//
// COSO ERM has been added to the Governance and Risk Architecture category, which is
// the credential that anchors the most board-relevant governance vocabulary. The
// introductory language has also been refined to reflect the governance voice that comes
// from working in enterprise risk management at this level.

import Image from "next/image";

export default function FoundationPage() {
  return (
    <>
      {/* The page hero uses the open-book imagery to suggest scholarship and reflection. */}
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

      {/* The biographical section now uses the mature governance voice that comes from
          working in enterprise risk management at the board level. The language reflects
          COSO ERM principles, Zero Trust governance, and the executive decision-making
          vocabulary that boards actually use. */}
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

      {/* The credentials section is now rebuilt without separator lines between credentials.
          The structure comes from category headings and generous vertical spacing rather
          than from horizontal rules under every item. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="container-wide">
          <div className="text-center mb-24">
            <div className="eyebrow mb-6">Credentials</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy leading-tight">
              Foundations of practice.
            </h2>
          </div>

          {/* Each credential category is presented with a clean header and a clean
              grid of credentials. No borders, no separator lines, no boxed containers.
              The category name and italic description provide the structural anchor,
              and the credentials beneath them sit in a generous two-column grid. */}
          <div className="max-w-4xl mx-auto space-y-24">

            {/* Governance and Risk Architecture is the most strategically important category
                because it establishes the board-level positioning. COSO ERM is the headline
                credential here because it speaks directly to the language boards use for
                enterprise risk management. */}
            <div>
              <div className="mb-10">
                <h3 className="text-3xl font-serif text-navy mb-3">
                  Governance &amp; Risk Architecture
                </h3>
                <p className="text-base text-text-secondary italic">
                  Enterprise risk management, board governance, and internal control.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                    COSO ERM
                  </div>
                  <div className="text-base text-text-body leading-relaxed">
                    Committee of Sponsoring Organizations Enterprise Risk Management
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                    CISM
                  </div>
                  <div className="text-base text-text-body leading-relaxed">
                    Certified Information Security Manager
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                    CRISC
                  </div>
                  <div className="text-base text-text-body leading-relaxed">
                    Certified in Risk and Information Systems Control
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                    CGEIT
                  </div>
                  <div className="text-base text-text-body leading-relaxed">
                    Certified in the Governance of Enterprise IT
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                    AAISM
                  </div>
                  <div className="text-base text-text-body leading-relaxed">
                    Assured Information Systems Security Management
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy, Data, and AI Governance reflects the emerging frontier. */}
            <div>
              <div className="mb-10">
                <h3 className="text-3xl font-serif text-navy mb-3">
                  Privacy, Data &amp; AI Governance
                </h3>
                <p className="text-base text-text-secondary italic">
                  Privacy law, data governance, and artificial intelligence governance frameworks.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                    CIPP/US
                  </div>
                  <div className="text-base text-text-body leading-relaxed">
                    Certified Information Privacy Professional
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                    CIPM
                  </div>
                  <div className="text-base text-text-body leading-relaxed">
                    Certified Information Privacy Manager
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                    AIGP
                  </div>
                  <div className="text-base text-text-body leading-relaxed">
                    AI Governance Professional, IAPP
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Architecture establishes the operational depth. */}
            <div>
              <div className="mb-10">
                <h3 className="text-3xl font-serif text-navy mb-3">
                  Enterprise Architecture &amp; Program Leadership
                </h3>
                <p className="text-base text-text-secondary italic">
                  Cloud architecture, machine learning systems, and program management at scale.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                    AWS Solutions Architect Pro
                  </div>
                  <div className="text-base text-text-body leading-relaxed">
                    Cloud architecture and enterprise systems
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                    Azure Solutions Architect Expert
                  </div>
                  <div className="text-base text-text-body leading-relaxed">
                    Enterprise cloud governance
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                    AWS ML Specialty
                  </div>
                  <div className="text-base text-text-body leading-relaxed">
                    AI and emerging technology risk
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                    PMP
                  </div>
                  <div className="text-base text-text-body leading-relaxed">
                    Project Management Professional
                  </div>
                </div>
              </div>
            </div>

            {/* Security and Compliance anchors the technical foundation. */}
            <div>
              <div className="mb-10">
                <h3 className="text-3xl font-serif text-navy mb-3">
                  Security &amp; Compliance
                </h3>
                <p className="text-base text-text-secondary italic">
                  Information security architecture, Zero Trust strategy, and compliance frameworks.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                    CASP+
                  </div>
                  <div className="text-base text-text-body leading-relaxed">
                    CompTIA Advanced Security Practitioner
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                    CompTIA Stackable
                  </div>
                  <div className="text-base text-text-body leading-relaxed">
                    CSAP, CSAE, CSIE, CNSP, CNVP
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                    Forrester Zero Trust Strategist
                  </div>
                  <div className="text-base text-text-body leading-relaxed">
                    Zero Trust architecture and governance
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The board pipeline section on the deep navy background. White headlines throughout
          to ensure strong readability against the dark surface. */}
      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="container-narrow">
          <div className="eyebrow-light mb-6">Board Pipeline</div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-16 leading-tight">
            Active credential pipeline.
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-serif text-white mb-3">
                NACD
              </h3>
              <p className="text-text-light-body leading-relaxed">
                Director credentialing through the National Association of Corporate Directors.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-white mb-3">
                INSEAD Directors Certification
              </h3>
              <p className="text-text-light-body leading-relaxed">
                In process. Director-level governance expertise from one of the world&apos;s
                leading executive education institutions.
              </p>
            </div>
          </div>

          <p className="text-text-light-body leading-relaxed mt-16">
            These credentials reflect a commitment to formal board-level governance expertise
            alongside the practitioner depth of the foundations above. Together they position
            the practice to serve boards, executives, and organizations navigating contested
            terrain across federal, defense, intelligence, and highly regulated enterprise
            environments, including CENTCOM, AFRICOM, EUCOM, and other combatant command
            contexts where governance carries operational consequence.
          </p>
        </div>
      </section>
    </>
  );
}
