// Navigation.tsx
//
// The site-wide header for Daglo and Co.
//
// This version is rebuilt with the Kearney reference in mind. The key principles applied here:
//
// First, the logo is given substantial size and proper breathing room. Premium advisory sites
// treat the wordmark as a primary brand statement, not as a small decorative element in the
// corner. The new logo file you provided is balanced and confident, and this header lets it
// breathe at the size it deserves.
//
// Second, navigation items have generous horizontal spacing between them. Looking at Kearney's
// header, "Your industry", "Your needs", "About us", "Careers", "Insights", and "Contact" each
// occupy clearly distinct positions with comfortable gaps. We replicate that rhythm here so
// that PHILOSOPHY APPROACH ENGAGEMENT FOUNDATION INSIGHTS CONTACT no longer collide into a
// single unreadable string.
//
// Third, the typography size for navigation items is now larger than the previous version.
// The previous version used extra-small text at 12 pixels, which was too small to read
// comfortably. This version uses small text at 14 pixels, which Kearney also uses, giving
// each navigation item the weight it needs to feel like a real destination.

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/philosophy", label: "Philosophy" },
    { href: "/approach", label: "Approach" },
    { href: "/engagement", label: "Engagement" },
    { href: "/foundation", label: "Foundation" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    // The header uses the deep navy background and a barely-there bottom border.
    // The previous version used a gold border at fifteen percent opacity which was still
    // too prominent. This version uses a white border at eight percent opacity, which is
    // closer to the almost-invisible separation Kearney uses.
    <header className="bg-navy-deep sticky top-0 z-50 border-b border-white/8">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">

        {/* The logo block sits on the left with proper sizing. The previous version used
            forty-eight pixels of height which still felt small. This version uses fifty-six
            pixels, which is closer to the visual weight Kearney gives their wordmark. */}
        <Link
          href="/"
          className="flex items-center"
          aria-label="Daglo and Co. home"
        >
          <Image
            src="/images/logo-white.png"
            alt="Daglo and Co."
            width={280}
            height={100}
            priority
            className="h-14 w-auto"
          />
        </Link>

        {/* The desktop navigation now uses substantial horizontal spacing between items.
            The space-x-10 class creates forty pixels of gap between each link, which is
            the spacing rhythm that makes Kearney's navigation feel deliberate rather than
            crowded. The text size is also larger at fourteen pixels rather than twelve. */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide font-normal transition-colors duration-300 ${
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

        {/* The mobile menu toggle remains the same in function but uses lighter touch styling. */}
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
        <div className="lg:hidden bg-navy-deep border-t border-white/8">
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
