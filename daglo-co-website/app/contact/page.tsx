// contact/page.tsx
// This page provides the formal contact entry point for the Daglo and Co. website.
// Rather than using a complex form, we use a clean email-based approach that signals
// the practice operates by thoughtful conversation rather than mass intake.

import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* The page hero is intentionally restrained to set a calm, professional tone. */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-navy">
          <Image
            src="/images/boardroom.webp"
            alt=""
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Contact</div>
          <h1 className="text-5xl md:text-6xl font-serif text-ivory leading-tight">
            Begin a conversation.
          </h1>
        </div>
      </section>

      {/* The main contact section explains how conversations begin and provides the email. */}
      <section className="py-20 md:py-28 bg-ivory-warm">
        <div className="container-narrow text-center">
          <div className="eyebrow">How We Begin</div>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8">
            Conversations begin with an email.
          </h2>
          <p className="text-lg text-muted mb-6 leading-relaxed">
            We work with a limited number of boards and executives at any given time. Engagements
            are scoped to address specific governance challenges with clear deliverables and a
            defined arc.
          </p>
          <p className="text-lg text-muted mb-12 leading-relaxed">
            If you are navigating a governance question that the standard frameworks are not
            answering, write us. We will respond with a thoughtful next step.
          </p>

          <a
            href="mailto:donald@daglo.co"
            className="inline-block border-2 border-navy text-navy px-12 py-5 text-base tracking-widest uppercase hover:bg-navy hover:text-ivory transition-all duration-300"
          >
            donald@daglo.co
          </a>
        </div>
      </section>

      <div className="section-divider" />

      {/* A practical section addresses common questions about how engagements work. */}
      <section className="py-20 bg-ivory-warm">
        <div className="container-narrow">
          <div className="eyebrow">What to Expect</div>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-12">
            What happens next.
          </h2>

          <div className="space-y-10">
            <div className="border-l-2 border-gold pl-8">
              <h3 className="text-2xl font-serif text-navy mb-3">An initial response</h3>
              <p className="text-muted leading-relaxed">
                We respond personally to every inquiry. The first message back will acknowledge
                what you have written and propose how to continue. We do not use automated intake
                forms or sales pipelines.
              </p>
            </div>

            <div className="border-l-2 border-gold pl-8">
              <h3 className="text-2xl font-serif text-navy mb-3">A conversation</h3>
              <p className="text-muted leading-relaxed">
                If the situation appears to be a fit, we schedule a conversation to understand
                what your organization is navigating. This conversation is exploratory. No
                engagement is presumed.
              </p>
            </div>

            <div className="border-l-2 border-gold pl-8">
              <h3 className="text-2xl font-serif text-navy mb-3">A scoped proposal</h3>
              <p className="text-muted leading-relaxed">
                When the work makes sense for both sides, we propose a scoped engagement with
                clear deliverables and a defined arc. Engagements are designed to develop board
                judgment, not to accumulate billable hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The closing section provides direct connection points. */}
      <section className="py-20 bg-navy text-ivory">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-ivory mb-12">
            Connect.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Email</div>
              <a
                href="mailto:donald@daglo.co"
                className="text-lg text-ivory hover:text-gold transition-colors"
              >
                donald@daglo.co
              </a>
            </div>
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">LinkedIn</div>
              <a
                href="https://www.linkedin.com/in/donalddaglo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-ivory hover:text-gold transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
