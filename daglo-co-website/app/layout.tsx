// layout.tsx
// This is the root layout file that wraps every page on the Daglo and Co. website.
// Anything placed in this file will appear on every page automatically.
// This is where we include the shared Navigation header at the top
// and the shared Footer at the bottom of every page.

import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// The metadata object configures how the site appears in search results and browser tabs.
// The title appears in the tab when someone has your site open in their browser.
// The description appears in search engine results below the title.
// We craft these carefully because they shape first impressions before someone even clicks through.
export const metadata: Metadata = {
  title: "Daglo & Co. — Governance. Risk. Leadership.",
  description:
    "Counsel for the decisions that define you. Advisory practice serving boards and executives navigating governance, risk, and leadership in contested terrain.",
};

// The RootLayout component receives the page content as the children variable
// and wraps it in our consistent site structure with header above and footer below.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-ivory-warm text-foreground font-sans antialiased">
        {/* The Navigation header appears at the top of every page. */}
        <Navigation />

        {/* The main element contains the unique content for each page. */}
        {/* The min-h-screen class ensures the page is at least as tall as the browser viewport, */}
        {/* which prevents the footer from floating up the page when content is short. */}
        <main className="min-h-screen">{children}</main>

        {/* The Footer appears at the bottom of every page. */}
        <Footer />
      </body>
    </html>
  );
}
