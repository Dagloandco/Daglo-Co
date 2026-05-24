// Footer.tsx
// The site-wide footer that closes every page on the Daglo and Co. website.
//
// The redesigned footer addresses several concerns from the original version:
//
// First, the footer now establishes proper hierarchy through a multi-zone layout.
// The previous version felt thin and rushed. The new version uses three distinct horizontal
// zones: a primary zone with the brand mark and navigation, a secondary zone with contact
// and connect information, and a tertiary zone with the closing signature line. This layered
// approach gives the footer real substance.
//
// Second, the typography is now more refined. The brand mark in the footer uses the same
// serif treatment as the page content, which ties the footer back to the editorial system
// rather than treating it as a separate marketing element.
//
// Third, the social media icons are now larger and more refined, sitting in proper alignment
// with the rest of the typography. The hover states use the gold accent color to maintain
// visual consistency with the rest of the site's interaction patterns.

import Link from "next/link";

export default function Footer() {
  // The footer navigation mirrors the main site navigation, providing visitors with
  // an additional pathway to any page on the site without having to scroll back to the top.
  const footerNavLinks = [
    { href: "/philosophy", label: "Philosophy" },
    { href: "/approach", label: "Approach" },
    { href: "/engagement", label: "Engagement" },
    { href: "/foundation", label: "Foundation" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ];

  // The social links use updated URLs as requested.
  // LinkedIn now points to the correct profile URL with the kokoudonalddaglo handle.
  // Instagram remains unchanged as you confirmed it was correct.
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kokoudonalddaglo",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/donalddaglo",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-navy-deep text-text-on-dark-primary mt-32">
      {/* The primary footer zone contains the brand presentation and the navigation block.
          This zone establishes the footer as a substantial closing element rather than a
          thin afterthought at the bottom of the page. */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* The brand block on the left side gets significant horizontal space.
              The wordmark is presented at substantial size with the supporting pillars
              displayed beneath it as a tight typographic system. */}
          <div className="lg:col-span-5">
            <div className="brand-mark text-4xl text-text-on-dark-primary mb-3">
              Daglo <span className="text-gold-light">&amp;</span> Co.
            </div>
            <div className="text-xs tracking-[0.3em] uppercase text-gold-light mb-6">
              Governance &middot; Risk &middot; Leadership
            </div>
            <p className="text-text-on-dark-secondary leading-relaxed max-w-md">
              Counsel for the decisions that define you. Advisory practice serving boards and
              executives navigating governance, risk, and leadership in contested terrain.
            </p>
          </div>

          {/* The navigation block presents all six pages as a clean two-column list.
              This gives visitors a complete map of the site at the moment they reach the footer,
              which is valuable for visitors who want to continue exploring after finishing a page. */}
          <div className="lg:col-span-3">
            <div className="text-xs tracking-[0.3em] uppercase text-gold-light mb-6">
              Navigate
            </div>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-on-dark-secondary hover:text-gold-light transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* The contact and connect block presents the email address and social links
              with clear hierarchy. The email is treated as the primary point of contact
              because that matches the practice's philosophy that conversations begin with email. */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <div className="text-xs tracking-[0.3em] uppercase text-gold-light mb-3">
                Direct Contact
              </div>
              <a
                href="mailto:donald@daglo.co"
                className="text-lg text-text-on-dark-primary hover:text-gold-light transition-colors duration-300"
              >
                donald@daglo.co
              </a>
            </div>

            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-gold-light mb-4">
                Connect
              </div>
              <div className="flex space-x-5">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-on-dark-tertiary hover:text-gold-light transition-colors duration-300"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The secondary footer zone provides a refined separator before the signature line.
          The gradient line is wider than the section dividers used throughout the site
          because it serves a different purpose here, marking the transition to the final
          signature rather than separating content sections. */}
      <div className="border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* The signature block on the left identifies the practice with the same
                typographic treatment used throughout the site for editorial consistency. */}
            <div className="text-sm text-text-on-dark-tertiary tracking-wide">
              <span className="brand-mark">Daglo &amp; Co.</span>
            </div>

            {/* The tagline on the right closes the page with the practice's signature statement.
                Setting this in italic serif creates a quiet but distinguished final note. */}
            <div className="font-serif italic text-sm text-text-on-dark-tertiary">
              Counsel for the decisions that define you.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
