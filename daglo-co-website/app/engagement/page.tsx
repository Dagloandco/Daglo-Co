// engagement/page.tsx
// This page explains how Daglo and Co. works with clients.
// It expands on the four engagement types introduced briefly on the homepage,
// providing the depth that board members and executives need before reaching out.

import Image from "next/image";
import Link from "next/link";

export default function EngagementPage() {
  return (
    <>
      {/* The page hero uses the boardroom imagery to establish the executive environment. */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/boardroom.webp"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Engagement</div>
          <h1 className="text-5xl md:text-6xl font-serif text-ivory leading-tight">
            How we engage.
          </h1>
        </div>
      </section>

      {/* The opening section frames how engagements work and who we work with. */}
      <section className="py-20 md:py-28 bg-ivory-warm">
        <div className="container-narrow">
          <div className="eyebrow">Approach to Clients</div>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8">
            Limited engagements. Considered counsel.
          </h2>
          <p className="text-lg text-muted mb-6 leading-relaxed">
            Daglo and Co. takes on a limited number of engagements at any given time. We work
            with boards and executives navigating complexity, high-value assets, sensitive data,
            and risks that move faster than traditional governance models can handle.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            The work is not a retainer model designed to maximize hours. It is a counsel model
            designed to maximize judgment in the moments where judgment matters most. Engagements
            are scoped to address specific governance challenges with clear deliverables and a
            defined arc.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* The four engagement types are each presented with substantial detail. */}
      <section className="py-20 bg-ivory-warm">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="eyebrow">Four Engagement Types</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy">
              How we work.
            </h2>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {/* Each engagement type uses a two-column layout with a number, headline, and detail. */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-border pt-8">
              <div className="md:col-span-2">
                <div className="text-5xl font-serif text-gold">01</div>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-3xl font-serif text-navy mb-4">Board governance advisory</h3>
                <p className="text-lg text-muted leading-relaxed">
                  Helping boards and committees understand the terrain they actually operate in.
                  Moving the conversation from compliance questions to strategic risk verification.
                  Preparing directors for contested environments where the old governance models
                  cannot keep up. Sessions are designed to develop board judgment, not to add
                  another layer of reporting.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-border pt-8">
              <div className="md:col-span-2">
                <div className="text-5xl font-serif text-gold">02</div>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-3xl font-serif text-navy mb-4">Enterprise risk strategy</h3>
                <p className="text-lg text-muted leading-relaxed">
                  Designing governance structures that see risk clearly before it matures. Moving
                  organizations from compliance leadership to strategic leadership, where risk
                  thinking informs how the enterprise actually operates rather than how it reports.
                  Building resilience into operations rather than bolting it on after incidents.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-border pt-8">
              <div className="md:col-span-2">
                <div className="text-5xl font-serif text-gold">03</div>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-3xl font-serif text-navy mb-4">Governance architecture</h3>
                <p className="text-lg text-muted leading-relaxed">
                  AI governance, data governance, and emerging technology risk frameworks.
                  Building governance frameworks for territories where the old models do not
                  apply. The work addresses how to govern technologies that change faster than
                  policies can be drafted, with structures that hold under the pressure of actual
                  use.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-border pt-8">
              <div className="md:col-span-2">
                <div className="text-5xl font-serif text-gold">04</div>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-3xl font-serif text-navy mb-4">Executive counsel</h3>
                <p className="text-lg text-muted leading-relaxed">
                  Cyber risk, data risk, third-party exposure, geopolitical disruption. Strategic
                  counsel for leaders navigating decisions under pressure and incomplete
                  information. Working alongside executives in the moments where the consequences
                  of a single decision can cascade across the organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* The closing section invites visitors to begin a conversation. */}
      <section className="py-20 bg-navy text-ivory">
        <div className="container-narrow text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-ivory mb-6">
            Begin a conversation.
          </h2>
          <p className="text-lg text-ivory/70 mb-10 leading-relaxed">
            Tell us what you are navigating. We will respond with a thoughtful next step.
          </p>
          <a
            href="mailto:donald@daglo.co"
            className="inline-block border border-gold text-gold px-10 py-4 text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all duration-300"
          >
            donald@daglo.co
          </a>
        </div>
      </section>
    </>
  );
}
