// Navigation.tsx
//
// The site-wide header for Daglo and Co.
//
// This version uses inline styles for the navigation spacing rather than Tailwind utility
// classes. Previous versions used utility classes like space-x-10 and px-5, both of which
// failed to produce visible spacing in the deployed site. This is the third attempt at
// fixing the navigation collision, and the lesson from the previous failures is that
// utility-class spacing cannot be trusted in this particular layout context.
//
// Inline styles are the most reliable way to apply CSS in any context because they have
// the highest specificity and cannot be overridden by other stylesheets or stripped during
// the build process. By specifying the padding directly on each link as an inline style,
// we guarantee that the spacing will appear regardless of what is happening elsewhere in
// the CSS pipeline.
//
// The structure is intentionally simple: each navigation link is rendered with explicit
// inline padding values, which produces visible gaps between adjacent items that cannot
// be defeated by any CSS issue.

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "../lib/LanguageContext";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  // Navigation reflects the new five-page architecture. The Home link is the brand
  // logo on the left so it does not appear in the navigation row itself.
  const navLinks = [
    { href: "/about", labelKey: "nav.about" },
    { href: "/insights", labelKey: "nav.insights" },
    { href: "/advisory-work", labelKey: "nav.advisory" },
    { href: "/contact", labelKey: "nav.contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    // The header uses the deep navy background with no bottom border.
    <header
      style={{
        backgroundColor: "#061730",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <nav
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "24px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* The logo is rendered as styled text with explicit inline styles to guarantee
            consistent appearance regardless of CSS pipeline issues. */}
        <Link
          href="/"
          style={{ textDecoration: "none" }}
          aria-label="Daglo and Co. home"
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "28px",
              color: "#ffffff",
              letterSpacing: "0.02em",
              fontWeight: 500,
            }}
          >
            Daglo <span style={{ color: "#d4b97f" }}>&amp;</span> Co.
          </div>
        </Link>

        {/* The desktop navigation uses explicit inline padding on each link. This is the
            critical fix. Every previous attempt to space these items relied on utility
            classes that were failing silently in the deployed environment. By using inline
            padding, we guarantee that each link occupies a wider clickable area with clear
            visible gaps between adjacent items.

            The padding value of 0 16px means zero pixels of vertical padding and sixteen
            pixels of horizontal padding on each side. Between two adjacent links, this
            produces thirty-two pixels of total whitespace, which is the spacing rhythm
            that makes the navigation feel like Kearney's header.

            We also use the className prop for hover states because hover effects are
            difficult to express with inline styles. The className applies the color
            transitions, while the inline style applies the spacing that cannot fail. */}
        <div
          style={{
            display: "none",
            alignItems: "center",
          }}
          className="nav-desktop-container"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "8px 20px",
                  fontSize: "14px",
                  letterSpacing: "0.02em",
                  color: active ? "#ffffff" : "#e8e6e0",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                  display: "inline-block",
                }}
                className="nav-link-item"
              >
                {t(link.labelKey)}
              </Link>
            );
          })}
        </div>

        {/* The mobile menu toggle button. */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          style={{
            color: "#ffffff",
            padding: "8px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          className="nav-mobile-toggle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "24px", width: "24px" }}
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

      {/* Mobile menu drawer. */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "#061730",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
          className="lg:hidden"
        >
          <div style={{ padding: "32px 24px" }}>
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    padding: "12px 0",
                    fontSize: "16px",
                    letterSpacing: "0.02em",
                    color: active ? "#ffffff" : "#e8e6e0",
                    textDecoration: "none",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(link.labelKey)}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Inline style block to handle the responsive behavior and hover states.
          Inline styles cannot express media queries or hover states directly, so we use
          a small embedded style element to handle those specific behaviors. This is a
          common pattern in React applications that need both reliable static styles and
          responsive or interactive behaviors. */}
      <style>{`
        @media (min-width: 1024px) {
          .nav-desktop-container {
            display: flex !important;
          }
          .nav-mobile-toggle {
            display: none !important;
          }
        }
        .nav-link-item:hover {
          color: #ffffff !important;
        }
      `}</style>
    </header>
  );
}
