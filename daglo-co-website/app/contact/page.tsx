// contact/page.tsx
// The Contact page provides the formal entry point for beginning a conversation with the practice.
//
// The redesigned What to Expect section addresses the alignment issues you identified.
// The previous version used a vertical list with left borders that created visual rhythm problems
// when the descriptions varied in length. The new version uses a numbered grid layout that
// maintains balance regardless of content length and creates clean visual scannability.

import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* The page hero uses the boardroom imagery at reduced opacity to set a calm professional tone.
          The contact page is not a moment for dramatic visual energy. It is a moment for
          considered action, so the hero treatment matches that purpose. */}
      <section className="relative h-[55vh] min-h-[440px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-navy-deep">
          <Image
            src="/images/boardroom.webp"
            alt=""
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-navy-deep/70" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.35em] uppercase text-gold-light mb-8">
            Contact
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-text-on-dark-primary leading-[1.1]">
            Begin a conversation.
          </h1>
        </div>
      </section>

      {/* The main contact section explains how engagements begin and presents the email address
          as the primary action point. The supporting text addresses the question every executive
          asks before reaching out, which is whether the advisor has time for their situation. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="container-narrow text-center">
          <div className="eyebrow">How We Begin</div>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-10 leading-tight">
            Conversations begin with an email.
          </h2>
          <p className="text-lg text-text-secondary mb-6 leading-relaxed">
            Daglo and Co. takes on a limited number of engagements at any given time. We work
            with boards and executives navigating complexity, high-value assets, sensitive data,
            and risks that move faster than traditional governance models can handle.
          </p>
          <p className="text-lg text-text-secondary mb-14 leading-relaxed">
            If you are navigating a governance question that the standard frameworks are not
            answering, write us. We will respond with a thoughtful next step.
          </p>

          <a
            href="mailto:donald@daglo.co"
            className="inline-block border-2 border-navy text-navy px-14 py-5 text-sm tracking-[0.3em] uppercase font-medium hover:bg-navy hover:text-text-on-dark-primary transition-all duration-300"
          >
            donald@daglo.co
          </a>
        </div>
      </section>

      <div className="section-divider" />

      {/* The What to Expect section has been redesigned with a numbered card layout that
          maintains visual balance regardless of how much text each step contains.
          The numbered approach creates clear sequential meaning, and the card containers
          ensure each step reads as a substantive part of the process rather than a list item. */}
      <section className="py-28 bg-ivory-warm">
        <div className="container-wide">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="eyebrow">What to Expect</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8 leading-tight">
              The arc of an engagement.
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Every engagement follows a deliberate three-stage arc designed to ensure both sides
              are aligned before substantive work begins.
            </p>
          </div>

          {/* The three-step process is presented in a clean three-column grid on desktop
              and stacks vertically on mobile. Each step uses the same card structure with
              identical spacing, which creates the balanced layout that was missing in the
              previous version. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="surface-light p-10 border-t-2 border-t-gold">
              <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
                Stage One
              </div>
              <div className="text-6xl font-serif text-navy mb-6 leading-none">01</div>
              <h3 className="text-xl font-serif text-navy mb-4 leading-tight">
                Initial response
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                We respond personally to every inquiry. The first message back will acknowledge
                what you have written and propose how to continue. We do not use automated intake
                forms or sales pipelines.
              </p>
            </div>

            <div className="surface-light p-10 border-t-2 border-t-gold">
              <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
                Stage Two
              </div>
              <div className="text-6xl font-serif text-navy mb-6 leading-none">02</div>
              <h3 className="text-xl font-serif text-navy mb-4 leading-tight">
                Exploratory conversation
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                If the situation appears to be a fit, we schedule a conversation to understand
                what your organization is navigating. This conversation is exploratory.
                No engagement is presumed.
              </p>
            </div>

            <div className="surface-light p-10 border-t-2 border-t-gold">
              <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
                Stage Three
              </div>
              <div className="text-6xl font-serif text-navy mb-6 leading-none">03</div>
              <h3 className="text-xl font-serif text-navy mb-4 leading-tight">
                Scoped proposal
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                When the work makes sense for both sides, we propose a scoped engagement with
                clear deliverables and a defined arc. Engagements are designed to develop board
                judgment, not to accumulate billable hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The closing connection section uses the deep navy background to provide visual closure
          to the contact page. The two-column layout balances the email and LinkedIn options
          with equal weight, signaling that both are legitimate pathways for connection. */}
      <section className="py-28 bg-navy-deep text-text-on-dark-primary">
        <div className="container-narrow text-center">
          <div className="text-xs tracking-[0.3em] uppercase text-gold-light mb-8">
            Connect
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-text-on-dark-primary mb-16 leading-tight">
            Two paths forward.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
            <div className="surface-dark p-10 border-l-2 border-l-gold">
              <div className="text-xs tracking-[0.3em] uppercase text-gold-light mb-4">
                Direct Email
              </div>
              <a
                href="mailto:donald@daglo.co"
                className="block text-lg text-text-on-dark-primary hover:text-gold-light transition-colors mb-3"
              >
                donald@daglo.co
              </a>
              <p className="text-sm text-text-on-dark-secondary leading-relaxed">
                For governance inquiries and engagement discussions.
              </p>
            </div>

            <div className="surface-dark p-10 border-l-2 border-l-gold">
              <div className="text-xs tracking-[0.3em] uppercase text-gold-light mb-4">
                Professional Network
              </div>
              <a
                href="https://www.linkedin.com/in/kokoudonalddaglo"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg text-text-on-dark-primary hover:text-gold-light transition-colors mb-3"
              >
                Connect on LinkedIn
              </a>
              <p className="text-sm text-text-on-dark-secondary leading-relaxed">
                For ongoing thinking on governance, risk, and leadership.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
