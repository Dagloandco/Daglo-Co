// foundation/page.tsx
// The Foundation page presents background and credentials in an executive format.
//
// This refined version addresses the credentials presentation concerns by removing the two
// credentials you specified and presenting the remaining credentials with significantly
// more discipline. The previous version used a busy grid layout with credential abbreviations
// in bold navy text. The new version uses a refined editorial table format that organizes
// credentials by category with proper hierarchy and generous spacing, creating the kind of
// executive presentation that boards and senior executives expect.

import Image from "next/image";

export default function FoundationPage() {
  return (
    <>
      {/* The page hero uses the open-book imagery to suggest scholarship and reflection.
          This is a quieter visual choice than the other page heroes because the page itself
          is about background and credentials, which deserve a more contemplative entry point. */}
      <section className="relative h-[60vh] min-h-[440px] flex items-center justify-center overflow-hidden">
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
          <h1 className="text-5xl md:text-7xl font-serif text-text-on-dark-primary leading-[1.1]">
            Background and credentials.
          </h1>
        </div>
      </section>

      {/* The biographical section establishes the practitioner background without referencing
          federal employment or specific agencies. The framing positions military service as
          the lens that shaped the governance perspective, which establishes credibility
          without creating conflicts of interest. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="container-narrow">
          <div className="eyebrow">Background</div>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
            The lens that informs the work.
          </h2>
          <p className="text-lg text-text-secondary mb-6 leading-relaxed">
            <span className="font-medium text-navy">U.S. Air Force veteran.</span> Founder of
            Lumeva LLC, an advisory and government contracting firm specializing in enterprise
            risk strategy, governance architecture, and cybersecurity. Deep expertise in
            enterprise systems, Zero Trust strategy, and decision-making in contested environments.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            Military service shaped my perspective on how organizations make decisions under
            pressure, operate with incomplete information, and maintain resilience in contested
            terrain. That lens informs how I think about governance, risk, and enterprise
            strategy in every boardroom conversation.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* The credentials section uses a refined editorial table format that organizes
          credentials by category. The two-column layout within each category creates clean
          alignment, and the typography hierarchy makes credentials easy to scan without
          appearing as a cluttered list. */}
      <section className="py-28 bg-ivory-warm">
        <div className="container-wide">
          <div className="text-center mb-20">
            <div className="eyebrow">Credentials</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy leading-tight">
              Foundations of practice.
            </h2>
          </div>

          {/* Each credential category is presented as a refined editorial block with a clear
              header section that includes the category name and a brief italic description.
              The credentials themselves are listed in a clean two-column layout with proper
              spacing that lets each credential read as substantive rather than crowded. */}
          <div className="max-w-4xl mx-auto space-y-20">

            {/* Governance and Risk Architecture is the most strategically important category
                because it establishes the board-level governance positioning that defines the practice. */}
            <div>
              <div className="border-b border-border pb-6 mb-10">
                <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
                  Category One
                </div>
                <h3 className="text-3xl font-serif text-navy mb-3">
                  Governance &amp; Risk Architecture
                </h3>
                <p className="text-sm text-text-tertiary italic">
                  Board-level governance, enterprise risk management, and IT governance leadership.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">CISM</div>
                  <div className="text-base text-text-secondary leading-relaxed">
                    Certified Information Security Manager
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">CRISC</div>
                  <div className="text-base text-text-secondary leading-relaxed">
                    Certified in Risk and Information Systems Control
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">CGEIT</div>
                  <div className="text-base text-text-secondary leading-relaxed">
                    Certified in the Governance of Enterprise IT
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">AAISM</div>
                  <div className="text-base text-text-secondary leading-relaxed">
                    Assured Information Systems Security Management
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy, Data, and AI Governance reflects the emerging frontier where boards
                most urgently need expertise that traditional consulting cannot provide. */}
            <div>
              <div className="border-b border-border pb-6 mb-10">
                <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
                  Category Two
                </div>
                <h3 className="text-3xl font-serif text-navy mb-3">
                  Privacy, Data &amp; AI Governance
                </h3>
                <p className="text-sm text-text-tertiary italic">
                  Privacy law, data governance, and artificial intelligence governance frameworks.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">CIPP/US</div>
                  <div className="text-base text-text-secondary leading-relaxed">
                    Certified Information Privacy Professional
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">CIPM</div>
                  <div className="text-base text-text-secondary leading-relaxed">
                    Certified Information Privacy Manager
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">AIGP</div>
                  <div className="text-base text-text-secondary leading-relaxed">
                    AI Governance Professional, IAPP
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Architecture establishes the operational depth that proves systems
                understanding at the implementation level. The two credentials you asked to
                remove are no longer present in this category. */}
            <div>
              <div className="border-b border-border pb-6 mb-10">
                <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
                  Category Three
                </div>
                <h3 className="text-3xl font-serif text-navy mb-3">
                  Enterprise Architecture &amp; Program Leadership
                </h3>
                <p className="text-sm text-text-tertiary italic">
                  Cloud architecture, machine learning systems, and program management at scale.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                    AWS Solutions Architect Pro
                  </div>
                  <div className="text-base text-text-secondary leading-relaxed">
                    Cloud architecture and enterprise systems
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                    Azure Solutions Architect Expert
                  </div>
                  <div className="text-base text-text-secondary leading-relaxed">
                    Enterprise cloud governance
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                    AWS ML Specialty
                  </div>
                  <div className="text-base text-text-secondary leading-relaxed">
                    AI and emerging technology risk
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">PMP</div>
                  <div className="text-base text-text-secondary leading-relaxed">
                    Project Management Professional
                  </div>
                </div>
              </div>
            </div>

            {/* Security and Compliance closes the credentials section with the technical
                foundation that anchors the practitioner depth. */}
            <div>
              <div className="border-b border-border pb-6 mb-10">
                <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
                  Category Four
                </div>
                <h3 className="text-3xl font-serif text-navy mb-3">
                  Security &amp; Compliance
                </h3>
                <p className="text-sm text-text-tertiary italic">
                  Information security architecture, Zero Trust strategy, and compliance frameworks.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">CASP+</div>
                  <div className="text-base text-text-secondary leading-relaxed">
                    CompTIA Advanced Security Practitioner
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                    CompTIA Stackable
                  </div>
                  <div className="text-base text-text-secondary leading-relaxed">
                    CSAP, CSAE, CSIE, CNSP, CNVP
                  </div>
                </div>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                    Forrester Zero Trust Strategist
                  </div>
                  <div className="text-base text-text-secondary leading-relaxed">
                    Zero Trust architecture and governance
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The board pipeline section appears on the deep navy background to create dramatic
          visual emphasis for the credentials that signal future board-level positioning.
          The simplified language reflects your request to keep this section clean and direct. */}
      <section className="py-28 bg-navy-deep text-text-on-dark-primary">
        <div className="container-narrow">
          <div className="text-xs tracking-[0.3em] uppercase text-gold-light mb-8">
            Board Pipeline
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-text-on-dark-primary mb-16 leading-tight">
            Active credential pipeline.
          </h2>

          <div className="space-y-10">
            <div className="surface-dark p-10 border-l-2 border-l-gold">
              <h3 className="text-2xl font-serif text-text-on-dark-primary mb-3">
                NACD
              </h3>
              <p className="text-text-on-dark-secondary leading-relaxed">
                Director credentialing through the National Association of Corporate Directors.
              </p>
            </div>
            <div className="surface-dark p-10 border-l-2 border-l-gold">
              <h3 className="text-2xl font-serif text-text-on-dark-primary mb-3">
                INSEAD Directors Certification
              </h3>
              <p className="text-text-on-dark-secondary leading-relaxed">
                In process. Director-level governance expertise from one of the world&apos;s
                leading executive education institutions.
              </p>
            </div>
          </div>

          <p className="text-text-on-dark-secondary leading-relaxed mt-16">
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
