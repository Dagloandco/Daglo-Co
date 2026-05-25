// layout.tsx
//
// The root layout wraps every page on the Daglo and Co. website. Anything placed here
// appears on every page automatically.
//
// This revision adds the LanguageProvider context wrapper and the AccessibilityPanel
// component to the root layout. The LanguageProvider must wrap the entire application
// because every component that uses translations needs access to the language context.
// The AccessibilityPanel renders a floating button in the corner of every page that
// opens the accessibility adjustments panel when clicked.

import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AccessibilityPanel from "./components/AccessibilityPanel";
import { LanguageProvider } from "./lib/LanguageContext";

export const metadata: Metadata = {
  title: "Daglo & Co. — Governance. Risk. Leadership.",
  description:
    "Counsel for the decisions that define you. Advisory practice serving boards and executives navigating governance, risk, and leadership in contested terrain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-ivory-warm text-foreground font-sans antialiased">
        {/* The LanguageProvider wraps the entire app so every component below can
            access the current language and the translation function. The provider
            initializes from localStorage on mount, so users see their preferred
            language immediately on return visits. */}
        <LanguageProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          {/* The AccessibilityPanel renders the floating trigger button and the
              expandable panel. It sits at the end of the body so its fixed-position
              elements stack above the rest of the page content. */}
          <AccessibilityPanel />
        </LanguageProvider>
      </body>
    </html>
  );
}
