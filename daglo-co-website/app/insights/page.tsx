// insights/page.tsx
//
// The Insights page is the publication hub for the practice's editorial work.
//
// This version removes the audience lines from each forthcoming article as you specified.
// Those lines previously appeared in italic serif beneath each article description, naming
// the intended readers. Removing them produces a cleaner editorial layout that lets the
// title and description carry the full weight of each article entry.

import Image from "next/image";

export default function InsightsPage() {
  // The three forthcoming articles in the editorial pipeline. The audience field has been
  // removed from each entry because the audience lines are no longer displayed in the layout.
  const forthcomingArticles = [
    {
      number: "01",
      label: "Zero Trust / Cyber Strategy",
      title:
        "The Castle Has Fallen: Why trust is the most dangerous word in cybersecurity.",
      description:
        "The old perimeter model is gone. This article argues that trust has become one of the most dangerous assumptions in cybersecurity, and that Zero Trust is no longer just a technical framework. It is a leadership mandate.",
      status: "Coming soon",
    },
    {
      number: "02",
      label: "Data Governance / Enterprise Risk",
      title:
        "Data is the New Fuel: Why protecting data is the only security strategy that matters.",
      description:
        "Data is now the real attack surface. This article explores why protecting systems is no longer enough, and why boards must treat data governance, access, classification, and visibility as core enterprise strategy.",
      status: "Forthcoming",
    },
    {
      number: "03",
      label: "Geopolitics / National Security",
      title: "The Digital Frontline: Security in a connected, contested world.",
      description:
        "Security is no longer confined to networks, borders, or organizations. This article connects cyber risk, geopolitical instability, African security dynamics, and the global threat landscape into one strategic picture.",
      status: "Forthcoming",
    },
  ];

  return (
    <>
      {/* The page hero uses the open-book imagery to establish a publication environment.
          The headline uses pure white text for strong contrast against the dark background. */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
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
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">
            Forthcoming Field Notes.
          </h1>
        </div>
      </section>

      {/* The introduction section frames the editorial series as a coherent three-part work. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="container-narrow text-center">
          <div className="eyebrow mb-6">A Three-Part Executive Series</div>
          <h2 className="text-3xl md:text-5xl font-serif text-navy mb-10 leading-tight">
            On governance, cyber risk, data, and security in a contested world.
          </h2>
          <p className="text-lg text-text-body leading-relaxed">
            These essays examine the decisions leaders must make as trust erodes, data
            becomes the true center of gravity, and global competition reshapes the security
            environment. They are written for boards, executives, security leaders, and
            policymakers who need to govern through uncertainty.
          </p>
        </div>
      </section>

      {/* The three-article pipeline presents each article as a clean editorial entry.
          Each article has a metadata bar with the number, label, and status, followed by
          a substantive serif headline and a developed description. The audience lines that
          previously appeared beneath each description have been removed, which produces a
          cleaner layout that lets the title and description carry the full weight. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="container-wide">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <div className="eyebrow mb-6">The Pipeline</div>
            <h2 className="text-3xl md:text-4xl font-serif text-navy leading-tight">
              Three briefings in development.
            </h2>
          </div>

          {/* The articles are stacked vertically with substantial vertical spacing between
              them. The previous version used thin hairline rules between articles, but
              those divider lines were creating a cluttered feeling that conflicted with
              the editorial restraint of the rest of the site. White space alone now does
              the work of separating one article from the next, which is the pattern that
              serious publications use when they want articles to feel curated rather than
              listed. */}
          <div className="max-w-3xl mx-auto space-y-24">
            {forthcomingArticles.map((article) => (
              <article key={article.number}>
                {/* The metadata bar combines the number, the category label, and the status. */}
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 mb-8">
                  <div className="flex items-baseline gap-5">
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

                {/* The article title is the typographic centerpiece. */}
                <h3 className="text-2xl md:text-4xl font-serif text-navy mb-6 leading-tight">
                  {article.title}
                </h3>

                {/* The description provides the substantive preview of the argument. */}
                <p className="text-base md:text-lg text-text-body leading-relaxed">
                  {article.description}
                </p>
              </article>
            ))}
          </div>

          {/* The closing thesis statement ties the three articles into a single argument.
              The previous version included a thin horizontal rule above this passage as
              visual separation from the articles above, but the white space provided by
              the substantial top margin now serves that purpose more elegantly. */}
          <div className="max-w-3xl mx-auto mt-32 text-center">
            <p className="text-xl md:text-2xl font-serif italic text-navy leading-relaxed">
              The future of governance will belong to leaders who can connect cyber risk,
              data, geopolitical pressure, and operational execution into one picture.
            </p>
          </div>
        </div>
      </section>

      {/* The closing section invites readers to follow the writing through LinkedIn. */}
      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="container-narrow text-center">
          <div className="eyebrow-light mb-6">Follow the Writing</div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
            New briefings are announced on LinkedIn.
          </h2>
          <p className="text-lg text-text-light-body mb-12 leading-relaxed">
            To receive notifications as each article in the series publishes, connect with
            the practice on LinkedIn.
          </p>
          <a
            href="https://www.linkedin.com/in/donalddaglo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-base text-white border-b border-white pb-2 hover:text-gold-light hover:border-gold-light transition-colors duration-300"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>
    </>
  );
}
