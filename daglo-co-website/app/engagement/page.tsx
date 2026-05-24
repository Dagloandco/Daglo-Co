// engagement/page.tsx
//
// The Engagement page explains how Daglo and Co. works with clients.
//
// This version removes all the bordered containers that were wrapping the four engagement
// types in the previous version. Each engagement type now appears as pure typography:
// a large gold number, a serif headline, and developed supporting text. The structure
// comes from the spacing rhythm rather than from visible boxes.

import Image from "next/image";
import Link from "next/link";

export default function EngagementPage() {
  // The four engagement types are stored as data so the rendering code stays clean
  // and so future revisions to titles or descriptions only require editing one place.
  const engagementTypes = [
    {
      number: "01",
      title: "Board governance advisory",
      description:
        "Helping boards and committees understand the terrain they actually operate in. Moving the conversation from compliance questions to strategic risk verification. Preparing directors for contested environments where the old governance models cannot keep up. Sessions are designed to develop board judgment, not to add another layer of reporting.",
    },
    {
      number: "02",
      title: "Enterprise risk strategy",
      description:
        "Designing governance structures that see risk clearly before it matures. Moving organizations from compliance leadership to strategic leadership, where risk thinking informs how the enterprise actually operates rather than how it reports. Building resilience into operations rather than bolting it on after incidents.",
    },
    {
      number: "03",
      title: "Governance architecture",
      description:
        "AI governance, data governance, and emerging technology risk frameworks. Building governance frameworks for territories where the old models do not apply. The work addresses how to govern technologies that change faster than policies can be drafted, with structures that hold under the pressure of actual use.",
    },
    {
      number: "04",
      title: "Executive counsel",
      description:
        "Cyber risk, data risk, third-party exposure, geopolitical disruption. Strategic counsel for leaders navigating decisions under pressure and incomplete information. Working alongside executives in the moments where the consequences of a single decision can cascade across the organization.",
    },
  ];

  return (
    <>
      {/* The page hero uses the boardroom imagery to establish the executive environment. */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/boardroom.webp"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-deep/80" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.35em] uppercase text-gold-light mb-8">
            Engagement
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">
            How we engage.
          </h1>
        </div>
      </section>

      {/* The opening section frames how engagements work using the counsel model rather
          than the retainer model. The contrast between these two models is what positions
          the practice differently from large consulting firms. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="container-narrow">
          <div className="eyebrow mb-6">Approach to Clients</div>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
            Limited engagements. Considered counsel.
          </h2>
          <p className="text-lg text-text-body mb-6 leading-relaxed">
            Daglo and Co. takes on a limited number of engagements at any given time.
            We work with boards and executives navigating complexity, high-value assets,
            sensitive data, and risks that move faster than traditional governance models
            can handle.
          </p>
          <p className="text-lg text-text-body leading-relaxed">
            The work is not a retainer model designed to maximize hours. It is a counsel
            model designed to maximize judgment in the moments where judgment matters most.
            Engagements are scoped to address specific governance challenges with clear
            deliverables and a defined arc.
          </p>
        </div>
      </section>

      {/* The four engagement types section now uses pure typography with no boxes.
          Each engagement type appears as a clean editorial block with a large gold number
          providing visual anchoring, a substantive serif headline, and developed supporting
          text. The structure comes from spacing rather than from containers. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="container-wide">
          <div className="text-center mb-24">
            <div className="eyebrow mb-6">Four Engagement Types</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy leading-tight">
              How we work.
            </h2>
          </div>

          {/* The engagement types are presented in a two-column grid with generous spacing
              between items. No borders, no containers, no card surfaces. Just type and space. */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-x-20 lg:gap-y-20 max-w-5xl mx-auto">
            {engagementTypes.map((engagement) => (
              <div key={engagement.number}>
                <div className="text-5xl font-serif text-gold mb-6 leading-none">
                  {engagement.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-navy mb-5 leading-tight">
                  {engagement.title}
                </h3>
                <p className="text-base text-text-body leading-relaxed">
                  {engagement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The closing call-to-action uses white text on the deep navy background.
          The email appears as a clean readable link, not as a boxed button. */}
      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="container-narrow text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
            Begin a conversation.
          </h2>
          <p className="text-lg text-text-light-body mb-12 leading-relaxed">
            Tell us what you are navigating. We will respond with a thoughtful next step.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a
              href="mailto:donald@daglo.co"
              className="text-base text-white border-b border-white pb-2 hover:text-gold-light hover:border-gold-light transition-colors duration-300"
            >
              donald@daglo.co
            </a>
            <Link
              href="/contact"
              className="text-sm tracking-[0.3em] uppercase font-medium text-text-light-body border-b border-text-light-secondary pb-2 hover:text-white hover:border-white transition-colors"
            >
              How Engagements Begin
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
