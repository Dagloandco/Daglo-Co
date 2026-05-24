// insights/page.tsx
//
// The Insights page presents the editorial pipeline using centered composition.
//
// The three forthcoming articles now use centered text alignment while preserving the
// reading column constraint that keeps line lengths comfortable. The metadata bar at
// the top of each article uses justify-center to position the number, label, and status
// in a centered row rather than spreading them to the left and right edges.

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

      {/* The introduction section now uses centered alignment within the reading column. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
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

      {/* The pipeline section centers every article along the page axis. The metadata bar
          inside each article now centers the number, category label, and status indicator
          as a single grouped row rather than spreading them to opposite edges, which
          maintains the centered composition consistently within each article entry. */}
      <section className="py-28 md:py-36 bg-ivory-warm">
        <div className="content-column">
          <div className="reading-column text-center">
            <div className="eyebrow mb-6">The Pipeline</div>
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-20 leading-tight">
              Three briefings in development.
            </h2>

            <div className="space-y-24">
              {forthcomingArticles.map((article) => (
                <article key={article.number}>
                  {/* The metadata row uses flex with justify-center so the number, label,
                      and status all group together as a centered cluster. The status is
                      separated from the number and label with a small dot separator,
                      which keeps the relationship between metadata elements clear while
                      maintaining the centered alignment. */}
                  <div className="flex items-baseline justify-center gap-4 mb-6 flex-wrap">
                    <div className="flex items-baseline gap-4">
                      <div className="text-3xl font-serif text-gold leading-none">
                        {article.number}
                      </div>
                      <div className="text-xs tracking-[0.3em] uppercase text-gold">
                        {article.label}
                      </div>
                    </div>
                    <div className="text-xs tracking-[0.25em] uppercase text-text-tertiary">
                      &middot; {article.status}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif text-navy mb-5 leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-base md:text-lg text-text-body leading-relaxed">
                    {article.description}
                  </p>
                </article>
              ))}
            </div>

            <p className="text-2xl md:text-3xl font-serif italic text-navy leading-snug mt-32">
              The future of governance will belong to leaders who can connect cyber risk,
              data, geopolitical pressure, and operational execution into one picture.
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-navy-deep">
        <div className="content-column">
          <div className="reading-column text-center">
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
