import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: {
    default: "Aarambh Events & Production | Event Planning, Decoration & Production",
    template: "%s | Aarambh Events & Production",
  },
  description: site.description,
  keywords: ["event planner", "wedding decoration", "event production", "corporate events", "event rentals", "Aarambh Events"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: "Aarambh Events & Production",
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: "Aarambh Events & Production", description: site.description },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.description,
  ...(site.contact.email ? { email: site.contact.email } : {}),
  telephone: site.contact.phoneDisplay,
  areaServed: "India",
  sameAs: [site.contact.instagram],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
