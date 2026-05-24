// Navigation.tsx
// This component renders the site-wide header that appears at the top of every page.
// It contains the Daglo and Co. logo on the left and the primary navigation links on the right.
// The "use client" directive at the top tells Next.js this component needs to run in the browser
// because it uses React hooks for the mobile menu toggle.
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// The Navigation component is exported as the default export so it can be imported into the layout.
// Making this a default export means other files can import it with any name they choose.
export default function Navigation() {
  // We use React state to track whether the mobile menu is open or closed.
  // On larger screens this state does not matter because the full menu is always visible.
  // On smaller screens, this state controls whether the hamburger menu shows or hides the links.
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // We define the navigation links as an array so we can easily map over them and render each one.
  // This approach makes it easy to add or remove pages later without rewriting the navigation code.
  const navLinks = [
    { href: "/philosophy", label: "Philosophy" },
    { href: "/approach", label: "Approach" },
    { href: "/engagement", label: "Engagement" },
    { href: "/foundation", label: "Foundation" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    // The header uses a navy background to create immediate brand recognition.
    // We use a sticky positioning so the navigation stays visible as users scroll.
    <header className="bg-navy border-b border-navy/10 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        {/* The logo on the left side links back to the homepage when clicked. */}
        {/* We use the white version of the logo because it appears on the navy background. */}
        <Link href="/" className="flex items-center" aria-label="Daglo and Co. home">
          <Image
            src="/images/logo-white.png"
            alt="Daglo and Co."
            width={180}
            height={60}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* On desktop screens, the navigation links are displayed horizontally on the right. */}
        {/* The hidden class hides them on mobile, and the md:flex class shows them on medium and larger screens. */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ivory text-sm tracking-widest uppercase hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* On mobile screens, we show a hamburger button that toggles the menu open and closed. */}
        {/* The md:hidden class hides this button on medium and larger screens where the full menu is shown. */}
        <button
          className="md:hidden text-ivory"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* The mobile menu drops down below the header when the user taps the hamburger icon. */}
      {/* It is only visible when mobileMenuOpen is true and on screens smaller than medium. */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy border-t border-ivory/10">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-ivory text-sm tracking-widest uppercase hover:text-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
