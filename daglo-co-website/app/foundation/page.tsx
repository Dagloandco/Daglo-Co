// foundation/page.tsx
// This page presents your background and credentials in a refined executive format.
// It uses the open-book imagery to suggest scholarship and reflection,
// and organizes credentials by category to tell a coherent story about your expertise.

import Image from "next/image";

export default function FoundationPage() {
  return (
    <>
      {/* The page hero uses the open-book imagery to signal scholarship and depth. */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/open-book.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Foundation</div>
          <h1 className="text-5xl md:text-6xl font-serif text-ivory leading-tight">
            Background and credentials.
          </h1>
        </div>
      </section>

      {/* The biographical section establishes who you are without referencing federal work. */}
      <section className="py-20 md:py-28 bg-ivory-warm">
        <div className="container-narrow">
          <div className="eyebrow">Background</div>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8">
            The lens that informs the work.
          </h2>
          <p className="text-lg text-muted mb-6 leading-relaxed">
            <span className="font-medium text-navy">U.S. Air Force veteran.</span> Founder of
            Lumeva LLC, an advisory and government contracting firm specializing in enterprise
            risk strategy, governance architecture, and cybersecurity. Deep expertise in
            enterprise systems, Zero Trust strategy, and decision-making in contested environments.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            Military service shaped my perspective on how organizations make decisions under
            pressure, operate with incomplete information, and maintain resilience in contested
            terrain. That lens informs how I think about governance, risk, and enterprise
            strategy in every boardroom conversation.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* The credentials section organizes certifications by category to tell a coherent story. */}
      <section className="py-20 bg-ivory-warm">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="eyebrow">Credentials</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy">
              Foundations of practice.
            </h2>
          </div>

          {/* Governance and Risk Architecture is the most strategically important category. */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="border-t border-border pt-8 mb-8">
              <h3 className="text-2xl font-serif text-navy mb-2">Governance &amp; Risk Architecture</h3>
              <p className="text-sm text-muted italic">
                Board-level governance, risk management, and enterprise IT governance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div>
                <div className="font-medium text-navy">CISM</div>
                <div className="text-sm text-muted">Certified Information Security Manager</div>
              </div>
              <div>
                <div className="font-medium text-navy">CRISC</div>
                <div className="text-sm text-muted">Certified in Risk and Information Systems Control</div>
              </div>
              <div>
                <div className="font-medium text-navy">CGEIT</div>
                <div className="text-sm text-muted">Certified in the Governance of Enterprise IT</div>
              </div>
              <div>
                <div className="font-medium text-navy">AAISM</div>
                <div className="text-sm text-muted">Assured Information Systems Security Management</div>
              </div>
            </div>
          </div>

          {/* Privacy, Data, and AI Governance reflects the emerging governance frontier. */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="border-t border-border pt-8 mb-8">
              <h3 className="text-2xl font-serif text-navy mb-2">Privacy, Data &amp; AI Governance</h3>
              <p className="text-sm text-muted italic">
                Privacy law, data governance, and artificial intelligence governance frameworks.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div>
                <div className="font-medium text-navy">CIPP/US</div>
                <div className="text-sm text-muted">Certified Information Privacy Professional</div>
              </div>
              <div>
                <div className="font-medium text-navy">CIPM</div>
                <div className="text-sm text-muted">Certified Information Privacy Manager</div>
              </div>
              <div>
                <div className="font-medium text-navy">AIGP</div>
                <div className="text-sm text-muted">AI Governance Professional, IAPP</div>
              </div>
            </div>
          </div>

          {/* Enterprise Architecture and Program Leadership shows the operational depth. */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="border-t border-border pt-8 mb-8">
              <h3 className="text-2xl font-serif text-navy mb-2">Enterprise Architecture &amp; Program Leadership</h3>
              <p className="text-sm text-muted italic">
                Cloud architecture, infrastructure resilience, and program management at scale.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div>
                <div className="font-medium text-navy">AWS Solutions Architect Pro</div>
                <div className="text-sm text-muted">Cloud architecture and enterprise systems</div>
              </div>
              <div>
                <div className="font-medium text-navy">AWS DevOps Engineer Pro</div>
                <div className="text-sm text-muted">Infrastructure and operational resilience</div>
              </div>
              <div>
                <div className="font-medium text-navy">Azure Solutions Architect Expert</div>
                <div className="text-sm text-muted">Enterprise cloud governance</div>
              </div>
              <div>
                <div className="font-medium text-navy">AWS ML Specialty</div>
                <div className="text-sm text-muted">AI and emerging technology risk</div>
              </div>
              <div>
                <div className="font-medium text-navy">PMP</div>
                <div className="text-sm text-muted">Project Management Professional</div>
              </div>
              <div>
                <div className="font-medium text-navy">SAFe SPC</div>
                <div className="text-sm text-muted">Scaled Agile Framework</div>
              </div>
            </div>
          </div>

          {/* Security and Compliance establishes the technical depth behind the governance work. */}
          <div className="max-w-4xl mx-auto">
            <div className="border-t border-border pt-8 mb-8">
              <h3 className="text-2xl font-serif text-navy mb-2">Security &amp; Compliance</h3>
              <p className="text-sm text-muted italic">
                Information security architecture, Zero Trust strategy, and compliance frameworks.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div>
                <div className="font-medium text-navy">CASP+</div>
                <div className="text-sm text-muted">CompTIA Advanced Security Practitioner</div>
              </div>
              <div>
                <div className="font-medium text-navy">CompTIA Stackable</div>
                <div className="text-sm text-muted">CSAP, CSAE, CSIE, CNSP, CNVP</div>
              </div>
              <div>
                <div className="font-medium text-navy">Forrester Zero Trust Strategist</div>
                <div className="text-sm text-muted">Zero Trust architecture and governance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* The board pipeline section uses simplified language as requested. */}
      <section className="py-20 bg-navy text-ivory">
        <div className="container-narrow">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Board Pipeline</div>
          <h2 className="text-4xl md:text-5xl font-serif text-ivory mb-12">
            Active credential pipeline.
          </h2>

          <div className="space-y-8">
            <div className="border-l-2 border-gold pl-8">
              <h3 className="text-2xl font-serif text-ivory mb-2">NACD</h3>
              <p className="text-ivory/70 leading-relaxed">
                Director credentialing through the National Association of Corporate Directors.
              </p>
            </div>
            <div className="border-l-2 border-gold pl-8">
              <h3 className="text-2xl font-serif text-ivory mb-2">INSEAD Directors Certification</h3>
              <p className="text-ivory/70 leading-relaxed">
                In process. Director-level governance expertise from one of the world&apos;s top
                executive education institutions.
              </p>
            </div>
          </div>

          <p className="text-ivory/70 leading-relaxed mt-12">
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
