import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daglo & Co. — Governance. Risk. Leadership.",
  description: "Strategic counsel for governance, risk, and executive leadership in contested terrain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-daglo-ivory text-daglo-dark font-sans">{children}</body>
    </html>
  );
}
