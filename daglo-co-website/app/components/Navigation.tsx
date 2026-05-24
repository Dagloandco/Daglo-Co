// Navigation.tsx
// This is the site-wide header that appears at the top of every page on the Daglo and Co. website.
//
// The refinements applied in this version address several specific concerns:
//
// First, the logo is now larger and given proper breathing room. The previous version used a
// small logo that felt added to the page rather than integrated into the brand system. Premium
// executive sites like Kearney and McKinsey give their wordmarks substantial presence in the
// header because the logo IS the brand statement. We follow that principle here.
//
// Second, the navigation links are arranged with more sophisticated spacing and typography.
// The widened letter-spacing and refined font weight signal editorial discipline rather than
// generic marketing design. The active state styling makes it clear which page the visitor is
// currently viewing, which is a small detail that contributes significantly to the professional feel.
//
// Third, the header now has a subtle bottom border and increased vertical padding, which creates
// architectural weight and establishes the header as a distinct zone rather than text floating
// at the top of the page.

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
    <header className="bg-navy-deep sticky top-0 z-50 border-b border-gold/15">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center group"
          aria-label="Daglo and Co. home"
        >
          <div className="flex items-center space-x-4">
            <Image
              src="/images/logo-white.png"
              alt="Daglo and Co."
              width={240}
              height={80}
              priority
              className="h-12 w-auto opacity-95 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${active ? "text-gold-light" : "text-text-on-dark-secondary hover:text-gold-light"}`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-px bg-gold-light" />
                )}
              </Link>
            );
          })}
        </div>

        <button
          className="lg:hidden text-text-on-dark-primary p-2"
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

      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-deep border-t border-gold/15">
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 text-sm tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${active ? "text-gold-light border-l-2 border-gold" : "text-text-on-dark-secondary hover:text-gold-light border-l-2 border-transparent"}`}
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
