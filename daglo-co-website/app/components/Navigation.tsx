// Navigation.tsx
//
// The site-wide header for Daglo and Co.
//
// This version fixes the navigation collision problem where items were rendering as one
// solid string of crushed letters. The previous version relied on the Tailwind space-x-10
// utility class, which in some layout contexts fails to apply the expected horizontal
// margins between children. This version replaces that approach with explicit individual
// padding on each navigation link, which is guaranteed to produce visible spacing because
// padding cannot fail the way utility-class margins sometimes can.
//
// The logo presentation also changes in this version. Rather than rendering the logo as
// an image with its own background, we now render the wordmark as styled text directly
// in the header. This eliminates the small white box that was appearing around the logo
// image, gives us complete control over the size and color of the brand mark, and ensures
// the wordmark integrates seamlessly into the navy header.

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  // State for the mobile menu toggle. When true, the dropdown menu is visible on small screens.
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // The pathname hook returns the current URL path so we can highlight the active page.
  const pathname = usePathname();

  // The navigation links are defined as an array so we can render them in a consistent loop.
  const navLinks = [
    { href: "/philosophy", label: "Philosophy" },
    { href: "/approach", label: "Approach" },
    { href: "/engagement", label: "Engagement" },
    { href: "/foundation", label: "Foundation" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ];

  // Helper function that determines whether a given link matches the current page.
  // We use startsWith rather than exact equality so that subpages of a section still
  // highlight the parent navigation item.
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    // The header uses the deep navy background. We removed the bottom border entirely
    // because Kearney's header has no visible separator between the header and the page
    // content. The color shift between header and content provides natural separation.
    <header className="bg-navy-deep sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">

        {/* The logo block is now rendered as styled text rather than as an image.
            This gives us complete control over the appearance and eliminates the small
            white container that was appearing around the previous logo image. The serif
            treatment matches the rest of the site's typographic system, and the ampersand
            uses the gold-light accent to add a small typographic detail that signals
            attention to the brand mark.

            The text size is set substantial enough to give the wordmark presence in the
            header, and the tracking is widened slightly to give the letterforms room to
            breathe. This is the treatment Kearney uses for their own brand mark in the
            header. */}
        <Link
          href="/"
          className="group"
          aria-label="Daglo and Co. home"
        >
          <div className="font-serif text-2xl md:text-3xl text-white tracking-wide group-hover:text-gold-light transition-colors duration-300">
            Daglo <span className="text-gold-light">&amp;</span> Co.
          </div>
        </Link>

        {/* The desktop navigation now uses inline-block link elements with explicit
            horizontal padding on each side. This approach is guaranteed to produce
            visible spacing between items because padding is one of the most reliable
            CSS properties and cannot be overridden by parent layout contexts the way
            margin-based utilities sometimes can.

            Each link has 1.25 rem of horizontal padding on each side, which produces
            approximately 2.5 rem of total gap between adjacent items. That spacing
            matches the rhythm Kearney uses in their navigation. */}
        <div className="hidden lg:flex items-center">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2 text-sm tracking-wide font-normal transition-colors duration-300 ${
                  active
                    ? "text-white"
                    : "text-text-light-body hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* The mobile menu toggle remains the same in function. */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu drawer with generous spacing between items. */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-deep border-t border-white/10">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-base tracking-wide transition-colors duration-300 ${
                    active
                      ? "text-white"
                      : "text-text-light-body hover:text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
