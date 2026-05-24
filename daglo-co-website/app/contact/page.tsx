// contact/page.tsx
//
// The Contact page provides the entry point for beginning a conversation with the practice.
//
// This version fixes the readability disaster in the hero where "Begin a conversation" was
// barely visible because dark navy text was floating against the dark boardroom imagery.
// The hero text is now white, which produces immediate readability against the dark background.
//
// The What to Expect section has been rebuilt without the bordered stage boxes that produced
// the boxed-template feeling. The three stages now appear as clean typography with large gold
// numbers anchoring each stage, no containers, just type and space.

import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* The page hero now uses white headline text against the dark boardroom background.
          This is the single most important fix on this page because the previous version had
          the headline disappearing into its own background. */}
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
          {/* The headline now uses pure white, which produces strong contrast against
              the dark background and makes the text immediately readable. */}
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">
            Begin a conversation.
          </h1>
        </div>
      </section>

      {/* The main contact section explains how engagements begin and presents the email
          address as plain readable text rather than as an uppercase boxed button. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="container-narrow text-center">
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

          {/* The email address is now presented as a simple readable link with an underline,
              rather than as a bordered button with uppercase text. This is the treatment
              Kearney and other premium advisory firms use because direct contact details
              should feel personal rather than transactional. */}
          <a
            href="mailto:donald@daglo.co"
            className="inline-block text-xl text-navy border-b border-navy pb-2 hover:text-gold hover:border-gold transition-colors duration-300"
          >
            donald@daglo.co
          </a>
        </div>
      </section>

      {/* The What to Expect section is now rebuilt without the bordered stage containers.
          The three stages appear as a clean three-column typographic grid with large gold
          numbers providing visual anchoring and white space providing separation between items. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="container-wide">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <div className="eyebrow mb-6">What to Expect</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8 leading-tight">
              The arc of an engagement.
            </h2>
            <p className="text-lg text-text-body leading-relaxed">
              Every engagement follows a deliberate three-stage arc designed to ensure both
              sides are aligned before substantive work begins.
            </p>
          </div>

          {/* The three stages now appear as pure typography with no containers.
              Each stage has a large gold number as visual anchor, a serif headline that
              names the stage, and supporting body text that describes the work. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-12 max-w-5xl mx-auto">
            <div>
              <div className="text-6xl font-serif text-gold mb-6 leading-none">01</div>
              <h3 className="text-2xl font-serif text-navy mb-5 leading-tight">
                Initial response
              </h3>
              <p className="text-base text-text-body leading-relaxed">
                We respond personally to every inquiry. The first message back acknowledges
                what you have written and proposes how to continue. No automated intake forms
                or sales pipelines.
              </p>
            </div>

            <div>
              <div className="text-6xl font-serif text-gold mb-6 leading-none">02</div>
              <h3 className="text-2xl font-serif text-navy mb-5 leading-tight">
                Exploratory conversation
              </h3>
              <p className="text-base text-text-body leading-relaxed">
                If the situation appears to be a fit, we schedule a conversation to
                understand what your organization is navigating. The conversation is
                exploratory. No engagement is presumed.
              </p>
            </div>

            <div>
              <div className="text-6xl font-serif text-gold mb-6 leading-none">03</div>
              <h3 className="text-2xl font-serif text-navy mb-5 leading-tight">
                Scoped proposal
              </h3>
              <p className="text-base text-text-body leading-relaxed">
                When the work makes sense for both sides, we propose a scoped engagement
                with clear deliverables and a defined arc. Engagements are designed to
                develop board judgment, not to accumulate billable hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The closing connection section uses the deep navy background with white headlines
          and clean typography for the two contact pathways. No boxes around email or LinkedIn,
          just plain readable text with subtle hover treatments. */}
      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="container-narrow text-center">
          <div className="eyebrow-light mb-6">Connect</div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-16 leading-tight">
            Two paths forward.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-3xl mx-auto">
            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-gold-light mb-4">
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
              <div className="text-xs tracking-[0.25em] uppercase text-gold-light mb-4">
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
      </section>
    </>
  );
}
