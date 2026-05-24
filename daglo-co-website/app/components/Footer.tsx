// Footer.tsx
//
// The site-wide footer for Daglo and Co.
//
// This version uses inline styles for the navigation row centering to address the alignment
// problem visible in the deployed site. The previous version relied on Tailwind flex utilities
// like justify-center, which were producing inconsistent results where the brand mark and
// social icons appeared centered but the navigation row drifted to the left of center.
//
// The same lesson from the header navigation applies here: when utility-class layout fails
// in deployment, switching to inline styles with explicit values eliminates the source of
// the inconsistency. Inline styles cannot be overridden by other stylesheets or stripped
// during the build process, so the centering they specify will render correctly regardless
// of what else is happening in the CSS pipeline.
//
// Every element in the footer now uses explicit inline styles for its layout properties.
// The result is a footer where every row truly aligns along the same vertical center axis,
// from the brand mark at the top through the navigation links, the social icons, the email,
// and the closing italic line at the bottom.

import Link from "next/link";

export default function Footer() {
  const footerNavLinks = [
    { href: "/philosophy", label: "Philosophy" },
    { href: "/approach", label: "Approach" },
    { href: "/engagement", label: "Engagement" },
    { href: "/foundation", label: "Foundation" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/donalddaglo",
      icon: (
        <svg style={{ height: "20px", width: "20px" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/donalddaglo",
      icon: (
        <svg style={{ height: "20px", width: "20px" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    // The footer uses inline styles for the background and the outer padding. The text
    // alignment is set to center at the parent level, which cascades down to every child
    // element unless explicitly overridden.
    <footer
      style={{
        backgroundColor: "#061730",
        marginTop: "128px",
        paddingTop: "96px",
        paddingBottom: "48px",
        textAlign: "center",
      }}
    >
      {/* The outer container uses inline styles for the maximum width and centering.
          This guarantees that the entire footer content sits in a centered column
          regardless of what is happening with the global CSS. */}
      <div
        style={{
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        {/* The brand mark anchors the top of the footer with substantial visual presence. */}
        <div style={{ marginBottom: "64px" }}>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "44px",
              color: "#ffffff",
              letterSpacing: "0.02em",
              fontWeight: 500,
              marginBottom: "16px",
            }}
          >
            Daglo <span style={{ color: "#d4b97f" }}>&amp;</span> Co.
          </div>
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#c0bdb5",
            }}
          >
            Governance &middot; Risk &middot; Leadership
          </div>
        </div>

        {/* A thin hairline rule provides minimal separation between the brand mark and
            the navigation row. The rule uses inline styles for its width constraint and
            centering, guaranteeing it appears as a narrow centered horizontal line. */}
        <div
          style={{
            maxWidth: "448px",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "56px",
            height: "1px",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
          }}
        />

        {/* The navigation row is the critical fix in this version. The previous version
            used Tailwind flex utilities that were producing inconsistent centering. This
            version uses inline styles with display flex, justify content center, and
            explicit gap values to guarantee the items center along the same vertical axis
            as the brand mark above and the social icons below.

            The flex wrap value of wrap allows items to break onto multiple lines on
            smaller viewports, and the gap value of 40 pixels provides the horizontal
            breathing room between adjacent links that produces the Kearney-style rhythm. */}
        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {footerNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "14px",
                color: "#e8e6e0",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              className="footer-nav-link"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* The social icons row also uses inline styles for guaranteed centering. */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "32px",
            marginBottom: "56px",
          }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#c0bdb5",
                transition: "color 0.3s ease",
              }}
              className="footer-social-link"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* The contact email appears as a plain centered link with no container. */}
        <div style={{ marginBottom: "56px" }}>
          <a
            href="mailto:donald@daglo.co"
            style={{
              color: "#e8e6e0",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            className="footer-email-link"
          >
            donald@daglo.co
          </a>
        </div>

        {/* A final thin rule provides minimal separation before the closing signature. */}
        <div
          style={{
            maxWidth: "448px",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "32px",
            height: "1px",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
          }}
        />

        {/* The closing italic line sits at the very bottom as a quiet centered signature. */}
        <div
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: "italic",
            fontSize: "12px",
            color: "#c0bdb5",
            letterSpacing: "0.02em",
          }}
        >
          Counsel for the decisions that define you.
        </div>
      </div>

      {/* Small embedded style block handles the hover states that cannot be expressed inline. */}
      <style>{`
        .footer-nav-link:hover,
        .footer-email-link:hover,
        .footer-social-link:hover {
          color: #ffffff !important;
        }
      `}</style>
    </footer>
  );
}
