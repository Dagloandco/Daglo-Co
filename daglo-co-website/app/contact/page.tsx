// contact/page.tsx
//
// The Contact page provides the entry point for beginning a conversation with the practice.
//
// This revision applies centered composition throughout the substantive content sections.
// The three engagement stages now center along the page axis, as do the two contact
// pathways in the closing section. Every element on the page aligns to the same vertical
// center axis from the hero at the top through the final call to action.

import Image from "next/image";

export default function ContactPage() {
  const stages = [
    {
      number: "01",
      title: "Initial response",
      description:
        "We respond personally to every inquiry. The first message acknowledges what you have written and proposes how to continue. No automated intake forms or sales pipelines.",
    },
    {
      number: "02",
      title: "Exploratory conversation",
      description:
        "If the situation appears to be a fit, we schedule a conversation to understand what your organization is navigating. The conversation is exploratory. No engagement is presumed.",
    },
    {
      number: "03",
      title: "Scoped proposal",
      description:
        "When the work makes sense for both sides, we propose a scoped engagement with clear deliverables and a defined arc. Engagements are designed to develop board judgment, not to accumulate billable hours.",
    },
  ];

  return (
    <>
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-navy-deep">
          <Image
            src="/images/boardroom.webp"
            alt=""
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-navy-deep/75" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.35em] uppercase text-gold-light mb-8">
            Contact
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">
            Begin a conversation.
          </h1>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">How We Begin</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
              Conversations begin with an email.
            </h2>
            <p className="text-lg text-text-body mb-6 leading-relaxed">
              Daglo and Co. takes on a limited number of engagements at any given time.
              We work with boards and executives navigating complexity, high-value assets,
              sensitive data, and risks that move faster than traditional governance models
              can handle.
            </p>
            <p className="text-lg text-text-body mb-14 leading-relaxed">
              If you are navigating a governance question that the standard frameworks are
              not answering, write us. We will respond with a thoughtful next step.
            </p>

            <a
              href="mailto:donald@daglo.co"
              className="inline-block text-xl text-navy border-b border-navy pb-2 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              donald@daglo.co
            </a>
          </div>
        </div>
      </section>

      {/* The three engagement stages now stack vertically with each stage centered along
          the page axis. The number, title, and description for each stage all center
          within the reading column. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">What to Expect</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
              The arc of an engagement.
            </h2>
            <p className="text-lg text-text-body mb-20 leading-relaxed">
              Every engagement follows a deliberate three-stage arc designed to ensure both
              sides are aligned before substantive work begins.
            </p>

            <div className="space-y-16">
              {stages.map((stage) => (
                <div key={stage.number}>
                  <div className="text-4xl font-serif text-gold leading-none mb-4">
                    {stage.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-navy mb-4 leading-tight">
                    {stage.title}
                  </h3>
                  <p className="text-base md:text-lg text-text-body leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The closing connection section centers the two contact pathways along the page
          axis, with each pathway presented as a centered cluster of label, link, and
          supporting description. */}
      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow-light mb-6">Connect</div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-16 leading-tight">
              Two paths forward.
            </h2>

            <div className="space-y-12">
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-gold-light mb-3">
                  Direct Email
                </div>
                <a
                  href="mailto:donald@daglo.co"
                  className="block text-xl text-white hover:text-gold-light transition-colors mb-3"
                >
                  donald@daglo.co
                </a>
                <p className="text-base text-text-light-body leading-relaxed">
                  For governance inquiries and engagement discussions.
                </p>
              </div>

              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-gold-light mb-3">
                  Professional Network
                </div>
                <a
                  href="https://www.linkedin.com/in/donalddaglo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xl text-white hover:text-gold-light transition-colors mb-3"
                >
                  Connect on LinkedIn
                </a>
                <p className="text-base text-text-light-body leading-relaxed">
                  For ongoing thinking on governance, risk, and leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
