// Footer.tsx
//
// The site-wide footer for Daglo and Co.
//
// This version centers every element in the footer to produce the symmetrical, intentional
// feeling you specified. The previous version had some elements centered and others
// floating in ways that broke the visual balance. The new version aligns everything to a
// single center axis, which produces the calm, structured feeling that distinguishes
// premium advisory footers from generic web footers.
//
// The brand mark at the top of the footer is given more breathing room than before,
// with substantial vertical space above and below it. This makes the wordmark function
// as the anchor of the footer rather than as a small element competing with other content
// for attention.

import Link from "next/link";

export default function Footer() {
  // The navigation links mirror the main site navigation for consistency.
  const footerNavLinks = [
    { href: "/philosophy", label: "Philosophy" },
    { href: "/approach", label: "Approach" },
    { href: "/engagement", label: "Engagement" },
    { href: "/foundation", label: "Foundation" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ];

  // The social links use the LinkedIn URL you specified.
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/donalddaglo",
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
    // The footer uses the deep navy background with substantial top margin to separate
    // it from the page content above. The entire footer container is set to text-center
    // so that every element inside will be centered horizontally by default.
    <footer className="bg-navy-deep mt-32 pt-24 pb-12 text-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* The brand mark anchors the top of the footer with substantial visual presence.
            The wordmark is rendered at large size with the ampersand in gold-light to add
            the typographic detail that ties the footer back to the brand system. The
            tagline beneath uses widened uppercase letter-spacing to signal editorial
            discipline. Both elements are naturally centered because the parent container
            has text-center applied. */}
        <div className="mb-16">
          <div className="font-serif text-4xl md:text-5xl text-white tracking-wide mb-4">
            Daglo <span className="text-gold-light">&amp;</span> Co.
          </div>
          <div className="text-xs tracking-[0.35em] uppercase text-text-light-secondary">
            Governance &middot; Risk &middot; Leadership
          </div>
        </div>

        {/* A thin hairline rule provides minimal separation between the brand mark and
            the navigation row. The rule is centered with a constrained width so that it
            does not span the full width of the page, which would feel too heavy. */}
        <div className="mx-auto mb-14 max-w-md">
          <div className="hairline-rule-dark" />
        </div>

        {/* The navigation row presents all six pages in a single horizontal line.
            The flex-wrap class allows the items to break onto multiple lines on smaller
            screens, and the justify-center keeps them centered regardless of how many
            rows they occupy. The gap-x-10 utility provides forty pixels of horizontal
            space between items, and the gap-y-4 provides vertical breathing room when
            items wrap to a second row. */}
        <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12">
          {footerNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-light-body hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* The social icons sit below the navigation in a centered row with generous
            spacing between them. No labels, no containers, just the icons themselves. */}
        <div className="flex justify-center gap-8 mb-14">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light-secondary hover:text-white transition-colors duration-300"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* The contact email appears in its natural case as a plain centered link.
            No box, no border, no uppercase styling. Just the email address rendered as
            it would appear on a business card. */}
        <div className="mb-14">
          <a
            href="mailto:donald@daglo.co"
            className="text-text-light-body hover:text-white transition-colors duration-300"
          >
            donald@daglo.co
          </a>
        </div>

        {/* A final thin rule provides minimal separation before the closing signature. */}
        <div className="mx-auto mb-8 max-w-md">
          <div className="hairline-rule-dark" />
        </div>

        {/* The closing line sits at the very bottom as a quiet centered signature. */}
        <div className="text-xs text-text-light-secondary tracking-wide italic font-serif">
          Counsel for the decisions that define you.
        </div>
      </div>
    </footer>
  );
}
