// insights/page.tsx
//
// The Insights page is the publication hub for the practice's editorial work.
//
// This revision rebuilds the page using left-aligned editorial composition, which is the
// pattern serious publications use for article lists. Each article entry now anchors to
// a consistent left margin within the unified content column, producing a clean editorial
// list where titles, descriptions, and metadata all align to the same vertical line.
//
// The thin horizontal rules between articles are gone. The structural separation now comes
// from generous vertical spacing alone, which is what produces the editorial restraint that
// distinguishes premium publications from generic listings.

import Image from "next/image";

export default function InsightsPage() {
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
      {/* The page hero uses the open-book imagery and centered composition. The centered
          treatment is the right choice for hero sections because they function as brief
          ceremonial openings rather than as sustained reading content. */}
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
            Forthcoming
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">
            Field notes.
          </h1>
        </div>
      </section>

      {/* The introduction section uses left-aligned editorial composition. The content sits
          within the reading column inside the unified content column, which keeps line
          lengths comfortable while anchoring the text to the consistent left margin used
          throughout the substantive content of the site. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column">
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
        </div>
      </section>

      {/* The three-article pipeline now presents each article as a left-aligned editorial
          entry within the unified content column. Each article anchors to the same left
          margin, with the metadata bar, title, and description all aligning to the same
          vertical line. This produces the polished editorial list feeling that serious
          publications use for article listings.

          There are no horizontal rules between articles. The substantial vertical spacing
          provided by space-y-24 produces the structural separation that gives each article
          room to breathe without imposing visible dividers between them. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column">
            <div className="eyebrow mb-6">The Pipeline</div>
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-20 leading-tight">
              Three briefings in development.
            </h2>

            <div className="space-y-24">
              {forthcomingArticles.map((article) => (
                <article key={article.number}>
                  {/* The metadata bar at the top of each article contains the article number,
                      the category label, and the status indicator. The metadata uses
                      justify-between to push the status to the right edge while the number
                      and category sit on the left, which is the editorial convention for
                      article metadata in serious publications. */}
                  <div className="flex items-baseline justify-between gap-4 mb-6">
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

                  {/* The article title is the typographic centerpiece, set in serif type
                      at substantial size to function as the visual anchor for each entry. */}
                  <h3 className="text-2xl md:text-3xl font-serif text-navy mb-5 leading-tight">
                    {article.title}
                  </h3>

                  {/* The description provides the substantive preview of the argument. */}
                  <p className="text-base md:text-lg text-text-body leading-relaxed">
                    {article.description}
                  </p>
                </article>
              ))}
            </div>

            {/* The closing thesis statement uses larger serif italic type to provide
                editorial emphasis. The standalone paragraph treatment gives the line the
                weight it deserves as the closing argument of the editorial series. */}
            <p className="text-2xl md:text-3xl font-serif italic text-navy leading-snug mt-32">
              The future of governance will belong to leaders who can connect cyber risk,
              data, geopolitical pressure, and operational execution into one picture.
            </p>
          </div>
        </div>
      </section>

      {/* The closing section invites readers to follow the writing through LinkedIn.
          This uses left-aligned editorial composition consistent with the rest of the page,
          but on the deep navy background with white headlines and body text. */}
      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="content-column">
          <div className="reading-column">
            <div className="eyebrow-light mb-6">Follow the Writing</div>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-10 leading-tight">
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
        </div>
      </section>
    </>
  );
}
