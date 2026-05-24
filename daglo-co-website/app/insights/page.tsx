// insights/page.tsx
// The Insights page is the publication hub for the practice's editorial work.
//
// This version uses the three-article pipeline you specified, with refined language
// that positions the upcoming work as executive briefings rather than blog posts.
// The closing statement at the bottom ties the three pieces into a single thesis about
// what governance will require of future leaders.

import Link from "next/link";
import Image from "next/image";

export default function InsightsPage() {
  // The articles array holds the three forthcoming pieces in the editorial pipeline.
  // Storing the data this way keeps the code clean and makes it easy to update titles,
  // descriptions, or status as articles move from forthcoming to published.
  const forthcomingArticles = [
    {
      number: "01",
      label: "Zero Trust / Cyber Strategy",
      title: "The Castle Has Fallen: Why trust is the most dangerous word in cybersecurity.",
      description:
        "The old perimeter model is gone. This article argues that trust has become one of the most dangerous assumptions in cybersecurity, and that Zero Trust is no longer just a technical framework. It is a leadership mandate.",
      audience: "For C-suite leaders, boards, and security executives.",
      status: "Coming soon",
    },
    {
      number: "02",
      label: "Data Governance / Enterprise Risk",
      title: "Data is the New Fuel: Why protecting data is the only security strategy that matters.",
      description:
        "Data is now the real attack surface. This article explores why protecting systems is no longer enough, and why boards must treat data governance, access, classification, and visibility as core enterprise strategy.",
      audience: "For C-suite leaders, CISOs, data leaders, and enterprise risk executives.",
      status: "Forthcoming",
    },
    {
      number: "03",
      label: "Geopolitics / National Security",
      title: "The Digital Frontline: Security in a connected, contested world.",
      description:
        "Security is no longer confined to networks, borders, or organizations. This article connects cyber risk, geopolitical instability, African security dynamics, and the global threat landscape into one strategic picture.",
      audience: "For policymakers, boards, and strategic leaders.",
      status: "Forthcoming",
    },
  ];

  return (
    <>
      {/* The page hero uses the open-book imagery to establish a publication environment.
          The treatment is intentionally calm because this page is about substantive reading
          rather than dramatic visual statement. */}
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
            Insights
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-text-on-dark-primary leading-[1.1]">
            Forthcoming Field Notes.
          </h1>
        </div>
      </section>

      {/* The introduction section frames the editorial series as a coherent three-part work
          rather than scattered articles. The subheadline establishes the scope, and the intro
          copy positions the audience precisely so the right readers know this is for them. */}
      <section className="py-28 bg-ivory-warm">
        <div className="container-narrow text-center">
          <div className="eyebrow">A Three-Part Executive Series</div>
          <h2 className="text-3xl md:text-5xl font-serif text-navy mb-10 leading-tight">
            On governance, cyber risk, data, and security in a contested world.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            These essays examine the decisions leaders must make as trust erodes, data becomes
            the true center of gravity, and global competition reshapes the security environment.
            They are written for boards, executives, security leaders, and policymakers who need
            to govern through uncertainty.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* The three-article pipeline is presented as a stacked editorial layout rather than
          a side-by-side grid. The reason is that each article has substantial content, and
          forcing three columns would cramp the text and reduce readability. The stacked
          layout gives each article room to breathe and lets readers absorb each one
          individually, which matches the way executive briefings are actually read. */}
      <section className="py-28 bg-ivory-warm">
        <div className="container-wide">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="eyebrow">The Pipeline</div>
            <h2 className="text-3xl md:text-4xl font-serif text-navy leading-tight">
              Three briefings in development.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-10">
            {forthcomingArticles.map((article) => (
              <article
                key={article.number}
                className="surface-light p-10 md:p-14 border-t-2 border-t-gold"
              >
                {/* The article number and label sit on the same line, creating a clean
                    metadata bar at the top of each card. This is the pattern used by
                    serious publications to signal categorization without visual clutter. */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-3">
                  <div className="flex items-center gap-5">
                    <div className="text-3xl font-serif text-gold leading-none">
                      {article.number}
                    </div>
                    <div className="text-xs tracking-[0.3em] uppercase text-gold">
                      {article.label}
                    </div>
                  </div>
                  <div className="text-xs tracking-[0.25em] uppercase text-text-tertiary">
                    {article.status}
                  </div>
                </div>

                {/* The article title is the typographic centerpiece of each card.
                    The serif treatment at large size signals editorial gravitas, and the
                    tight leading keeps multi-line titles feeling architectural. */}
                <h3 className="text-2xl md:text-3xl font-serif text-navy mb-6 leading-tight">
                  {article.title}
                </h3>

                {/* The description provides the substantive preview of what the article argues.
                    Setting this in slightly larger body text ensures it reads as substantive
                    rather than as a brief abstract. */}
                <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8">
                  {article.description}
                </p>

                {/* The audience line uses italic serif to create a visual distinction from
                    the description while maintaining editorial consistency. The dotted divider
                    above it creates a small architectural detail that signals the transition
                    from the main description to the audience metadata. */}
                <div className="pt-6 border-t border-border-light">
                  <p className="text-sm text-text-tertiary italic font-serif">
                    {article.audience}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* The closing line beneath the three articles ties the entire series into a
              single thesis. This is the kind of editorial statement that distinguishes
              serious thought leadership from content marketing because it claims a
              substantive position rather than just listing topics. */}
          <div className="max-w-3xl mx-auto mt-20 text-center">
            <div className="section-divider mb-12" />
            <p className="text-xl md:text-2xl font-serif italic text-navy leading-relaxed">
              The future of governance will belong to leaders who can connect cyber risk,
              data, geopolitical pressure, and operational execution into one picture.
            </p>
          </div>
        </div>
      </section>

      {/* The closing section invites readers to follow the writing through LinkedIn.
          The deep navy background creates dramatic closure and establishes a clear next step
          for readers who want to stay connected to the practice as articles publish. */}
      <section className="py-28 bg-navy-deep text-text-on-dark-primary">
        <div className="container-narrow text-center">
          <div className="text-xs tracking-[0.3em] uppercase text-gold-light mb-8">
            Follow the Writing
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-text-on-dark-primary mb-8 leading-tight">
            New briefings are announced on LinkedIn.
          </h2>
          <p className="text-lg text-text-on-dark-secondary mb-12 leading-relaxed">
            To receive notifications as each article in the series publishes, connect with
            the practice on LinkedIn.
          </p>
          <a
            href="https://www.linkedin.com/in/donalddaglo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gold-light text-gold-light px-12 py-4 text-xs tracking-[0.3em] uppercase font-medium hover:bg-gold-light hover:text-navy-deep transition-all duration-300"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>
    </>
  );
}
