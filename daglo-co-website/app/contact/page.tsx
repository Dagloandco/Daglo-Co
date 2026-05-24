// contact/page.tsx
//
// The Contact page provides the entry point for beginning a conversation with the practice.
//
// This version refines the "What to Expect" section to address the alignment problem you
// photographed. The page above the section is built on a centered composition, where the
// label, headline, supporting paragraph, and email all align along a single vertical axis
// through the middle of the page. The previous version of the three stages broke that
// rhythm because the columns used left-aligned text, which pulled the visual weight to
// the left side of the screen even though the block as a whole was technically centered.
//
// The new version fixes this by doing three things. First, the three columns are now
// constrained to a tighter maximum width so they sit comfortably within a centered block
// rather than spreading too wide. Second, the text within each column is now centered,
// which means every element on the page from top to bottom aligns along the same axis.
// Third, each column has a slightly narrower text measure, which prevents long descriptions
// from creating uneven visual weight between columns.
//
// The result is that the entire "What to Expect" section now reads as one unified centered
// composition rather than as a centered headline followed by a left-aligned grid.

import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* The page hero uses pure white text against the dark boardroom background.
          This treatment was working correctly in the previous version, so we preserve it. */}
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

      {/* The main contact section explains how engagements begin. The composition here
          is fully centered: label, headline, supporting paragraphs, and email link all
          align along the vertical center axis of the page. */}
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

          <a
            href="mailto:donald@daglo.co"
            className="inline-block text-xl text-navy border-b border-navy pb-2 hover:text-gold hover:border-gold transition-colors duration-300"
          >
            donald@daglo.co
          </a>
        </div>
      </section>

      {/* The "What to Expect" section. This is where the fix lives.

          The section now reads as one unified centered composition from top to bottom.
          The label, the headline, and the supporting paragraph are all centered along the
          same axis. The three-column block beneath them is constrained to a tighter maximum
          width that visually balances under the centered heading. Each column has its text
          centered along the same axis, so the entire section flows as one symmetrical block
          rather than splitting into a centered top and a left-aligned bottom. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="container-wide">
          {/* The centered top section contains the label, headline, and intro paragraph.
              The max-w-3xl constraint keeps these elements at a comfortable reading width
              centered horizontally on the page. */}
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

          {/* The three-column block now has a constrained maximum width of 4xl (which is
              about 896 pixels in Tailwind's default scale). This width is narrower than
              the wide container above, which means the columns sit visually centered as a
              balanced block beneath the centered headline rather than spreading out to fill
              the full page width.

              The text-center class on the parent container cascades center alignment down
              to every text element in each column. Combined with the constrained max-w-xs
              on each column, this produces three narrow centered text blocks that align
              along the same vertical axis as the headline above them. */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center">

              {/* Stage one. The text-center inheritance from the parent container ensures
                  that the number, headline, and paragraph all align along the column's
                  center axis. The max-w-xs constraint on the inner content block keeps the
                  text at a comfortable narrow measure within each column. */}
              <div className="flex flex-col items-center">
                <div className="text-6xl font-serif text-gold mb-6 leading-none">01</div>
                <h3 className="text-2xl font-serif text-navy mb-5 leading-tight">
                  Initial response
                </h3>
                <p className="text-base text-text-body leading-relaxed max-w-xs">
                  We respond personally to every inquiry. The first message acknowledges
                  what you have written and proposes how to continue.
                </p>
              </div>

              {/* Stage two follows the same structure. */}
              <div className="flex flex-col items-center">
                <div className="text-6xl font-serif text-gold mb-6 leading-none">02</div>
                <h3 className="text-2xl font-serif text-navy mb-5 leading-tight">
                  Exploratory conversation
                </h3>
                <p className="text-base text-text-body leading-relaxed max-w-xs">
                  If the situation appears to be a fit, we schedule a conversation to
                  understand what your organization is navigating. No engagement is presumed.
                </p>
              </div>

              {/* Stage three follows the same structure. */}
              <div className="flex flex-col items-center">
                <div className="text-6xl font-serif text-gold mb-6 leading-none">03</div>
                <h3 className="text-2xl font-serif text-navy mb-5 leading-tight">
                  Scoped proposal
                </h3>
                <p className="text-base text-text-body leading-relaxed max-w-xs">
                  When the work makes sense for both sides, we propose a scoped engagement
                  with clear deliverables and a defined arc.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* The closing connection section preserves the centered treatment that was already
          working correctly in the previous version. */}
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
