// insights/page.tsx
// This page serves as the publication hub for your articles.
// It launches with The castle has already fallen as your first article,
// and includes placeholders for the second and third articles that will be published later.

import Link from "next/link";
import Image from "next/image";

export default function InsightsPage() {
  return (
    <>
      {/* The page hero uses the open-book imagery to suggest a publication environment. */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/open-book.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Insights</div>
          <h1 className="text-5xl md:text-6xl font-serif text-ivory leading-tight">
            Writing on governance.
          </h1>
        </div>
      </section>

      {/* The introduction section frames the purpose of the Insights publication. */}
      <section className="py-20 bg-ivory-warm">
        <div className="container-narrow text-center">
          <p className="text-xl font-serif text-navy leading-relaxed">
            A small body of writing on governance, risk, and leadership in contested terrain.
            Published as the thinking matures, not as the calendar demands.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* The published article appears prominently as the featured piece. */}
      <section className="py-20 bg-ivory-warm">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <article className="group">
              <Link href="/insights/the-castle-has-already-fallen" className="block">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="relative h-80 md:h-96 overflow-hidden">
                    <Image
                      src="/images/b2-spirit.jpg"
                      alt="The castle has already fallen"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                      First Article
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4 leading-tight group-hover:text-navy-deep transition-colors">
                      The castle has already fallen.
                    </h2>
                    <p className="text-muted leading-relaxed mb-6">
                      Why traditional governance models cannot keep up with contested terrain,
                      and what boards must do to build enterprises that can see, verify, adapt,
                      and survive.
                    </p>
                    <span className="inline-block text-sm tracking-widest uppercase text-gold border-b border-gold pb-1 group-hover:text-navy group-hover:border-navy transition-colors">
                      Read the article
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* The forthcoming articles section shows what is coming next without specific dates. */}
      <section className="py-20 bg-ivory-warm">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="eyebrow">Forthcoming</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy">
              Coming next.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* The second forthcoming article uses muted styling to indicate it is upcoming. */}
            <article className="border-t-2 border-gold pt-8">
              <div className="text-xs tracking-[0.3em] uppercase text-muted-light mb-4">
                Forthcoming
              </div>
              <h3 className="text-2xl font-serif text-navy mb-4 leading-tight">
                Second article
              </h3>
              <p className="text-muted leading-relaxed">
                Further writing on enterprise risk verification and the board-level practice of
                making implicit trust explicit.
              </p>
            </article>

            <article className="border-t-2 border-gold pt-8">
              <div className="text-xs tracking-[0.3em] uppercase text-muted-light mb-4">
                Forthcoming
              </div>
              <h3 className="text-2xl font-serif text-navy mb-4 leading-tight">
                Third article
              </h3>
              <p className="text-muted leading-relaxed">
                Continued exploration of governance architecture for emerging technologies and
                contested operational environments.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* The closing section invites readers to follow for new writing. */}
      <section className="py-20 bg-navy text-ivory">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-ivory mb-6">
            Follow the writing.
          </h2>
          <p className="text-lg text-ivory/70 mb-10 leading-relaxed">
            New articles are announced through LinkedIn. To stay current with the practice,
            connect there.
          </p>
          <a
            href="https://www.linkedin.com/in/donalddaglo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gold text-gold px-10 py-4 text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all duration-300"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>
    </>
  );
}
