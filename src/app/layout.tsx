// app/layout.tsx
import type { Metadata } from "next";
import type { Viewport } from "next";
import Image from "next/image";
import Link from "next/link";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

import { Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";
import AccessibilityToolbar from "../components/AccessibilityToolbar";
import MobileNav from "../components/MobileNav";

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-dys",
});

export const metadata: Metadata = {
  title: "ACT Jubilant — Meaningful Daily Life Support in Canberra",
  description:
    "ACT Jubilant provides structured, relationship-based support in Canberra, helping participants build routine, engagement, confidence, and meaningful daily life around their interests.",
  keywords: [
    "NDIS provider Canberra",
    "disability support services ACT",
    "support worker near me",
    "personal care assistant Belconnen",
    "community support worker Canberra",
    "NDIS support coordination",
    "disability services ACT",
    "home care support Canberra",
    "respite care ACT",
    "daily living support",
    "community participation Canberra",
    "NDIS registered provider",
    "disability support worker",
    "Canberra NDIS services",
    "ACT disability support"
  ],
  authors: [{ name: "ACT Jubilant" }],
  creator: "ACT Jubilant",
  publisher: "ACT Jubilant",
  metadataBase: new URL("https://actjubilant.com.au"),
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "ACT Jubilant — Meaningful Daily Life Support",
    description:
      "Boutique, relationship-led support in Canberra designed around participant interests, routine, consistency, and community participation.",
    url: "https://actjubilant.com.au",
    siteName: "ACT Jubilant",
    images: [
      { 
        url: "/logo.png", 
        width: 1200, 
        height: 630,
        alt: "ACT Jubilant — Meaningful Daily Life Support in Canberra"
      }
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACT Jubilant — Meaningful Daily Life Support",
    description:
      "Structured support in Canberra built around interests, routine, engagement, and familiar support workers.",
    images: ["/logo.png"],
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" suppressHydrationWarning className={atkinson.variable}>
      <body>
        {/* Skip link */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:bg-[var(--primary-600)] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to main content
        </a>

        <AccessibilityToolbar />

        {/* Header */}
        <header
          role="banner"
          className="sticky top-0 z-40 w-full border-b bg-white/85 backdrop-blur"
        >
          <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 min-w-0">
              <Image
                src="/logo.png"
                alt="ACT Jubilant - NDIS Support Services Canberra | Disability Support Worker"
                width={100}
                height={60}
                priority
                sizes="(max-width: 768px) 160px, 200px"
                className="h-10 md:h-10 w-auto rounded-xl"
              />
             
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Main" className="hidden md:flex items-center gap-3">
              <Link className="nav-link" href="/programs">Programs</Link>
              <Link className="nav-link" href="/consultation">Book a Consultation</Link>
              <Link className="nav-link" href="/referral">Make a Referral</Link>
              <Link className="nav-link" href="/faq">FAQ</Link>
              <Link className="nav-link" href="/accessibility">Accessibility</Link>
              <Link className="nav-link" href="/reviews">Reviews</Link>
              
            </nav>

            {/* Mobile nav trigger */}
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </header>

        {/* Main */}
        <main id="main" className="mx-auto max-w-7xl px-4">
          {children}
        </main>

        {/* Footer */}
        <footer role="contentinfo" className="mt-16 border-t bg-[var(--surface)]">
          {/* Main footer content */}
          <div className="mx-auto max-w-7xl px-4 py-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/logo.png"
                    alt="ACT Jubilant - NDIS Support Services Canberra | Disability Support Worker"
                    width={100}
                    height={60}
                    className="h-10 md:h-12 w-auto rounded-xl"
                  />
                </div>
                <p className="text-[var(--text-muted)] mb-4">
                  ACT Jubilant recognizes the happiness that our organization brings to everyone. 
                  We strive to provide happiness to our community, clients and support workers. 
                  Registered NDIS provider offering personalised support and services in ACT.
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Address:</strong>
                    <span className="ml-1">75/20 Beissel St, Belconnen 2617</span>
                  </p>
                  <p className="text-sm">
                    <strong>Phone:</strong>
                    <a href="tel:+61434740745" className="ml-1 text-[var(--primary-600)] hover:underline">
                      +61 434 740 745
                    </a>
                  </p>
                  <p className="text-sm">
                    <strong>Email:</strong>
                    <a href="mailto:admin@actjubilant.com.au" className="ml-1 text-[var(--primary-600)] hover:underline">
                      admin@actjubilant.com.au
                    </a>
                  </p>
                  <p className="text-sm">
                    <strong>Office Hours:</strong>
                    <span className="ml-1">Mon-Fri 8:30am-5:00pm, Sat 10:00am-1:00pm</span>
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <nav aria-label="Footer navigation">
                  <ul className="space-y-2">
                    <li><Link className="nav-link" href="/programs">Our Programs</Link></li>
                    <li><Link className="nav-link" href="/reviews">Reviews</Link></li>
                    <li><Link className="nav-link" href="/referral">Make a Referral</Link></li>
                    <li><Link className="nav-link" href="/consultation">Book Consultation</Link></li>
                    <li><Link className="nav-link" href="/faq">FAQ</Link></li>
                  </ul>
                </nav>
              </div>

              {/* Support & Info */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Support & Info</h3>
                <nav aria-label="Support navigation">
                  <ul className="space-y-2">
                    <li><Link className="nav-link" href="/accessibility">Accessibility</Link></li>
                    <li><Link className="nav-link" href="/feedback">Feedback & Complaints</Link></li>
                    <li><Link className="nav-link" href="/privacy">Privacy Policy</Link></li>
                    <li>
                      <a
                        href="https://www.ndis.gov.au"
                        className="nav-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        NDIS Information
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          {/* Acknowledgement of Country */}
          <div className="border-t bg-[color-mix(in_oklab,var(--primary-600)_5%,var(--surface))]">
            <div className="mx-auto max-w-7xl px-4 py-6">
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                <strong>Acknowledgement of Country:</strong> We acknowledge the Ngunnawal people as the Traditional Custodians of the land on which we live and work. We pay our respects to Elders past and present, and extend that respect to all Aboriginal and Torres Strait Islander peoples.
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t bg-[color-mix(in_oklab,var(--primary-600)_8%,var(--surface))]">
            <div className="mx-auto max-w-7xl px-4 py-4 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-[var(--text-muted)]">
                Proudly supporting the Canberra community
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                © 2025 ACT Jubilant. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://actjubilant.com.au/#organization",
              name: "ACT Jubilant",
              alternateName: "ACT Jubilant NDIS Provider",
              description: "Registered NDIS provider in Canberra offering personalised support, inclusive programs, and real care. Empowering people and creating possibilities.",
              url: "https://actjubilant.com.au",
              logo: "https://actjubilant.com.au/logo.png",
              image: "https://actjubilant.com.au/logo.png",
              telephone: "+61 434 740 745",
              email: "admin@actjubilant.com.au",
              address: {
                "@type": "PostalAddress",
                streetAddress: "75/20 Beissel St",
                addressLocality: "Belconnen",
                addressRegion: "ACT",
                postalCode: "2617",
                addressCountry: "AU"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-35.2386",
                longitude: "149.0687"
              },
              areaServed: {
                "@type": "City",
                name: "Canberra",
                containedInPlace: {
                  "@type": "State",
                  name: "Australian Capital Territory"
                }
              },
              serviceType: [
                "NDIS Support Services",
                "Personal Care",
                "Community Participation",
                "Daily Living Support",
                "Respite Care",
                "Transport Services"
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "NDIS Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Personal Care Support",
                      description: "Assistance with daily living activities and personal care needs"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Community Participation",
                      description: "Support to participate in community activities and social events"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Respite Care",
                      description: "Short-term care to give families and carers a break"
                    }
                  }
                ]
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:30",
                  closes: "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "13:00"
                }
              ],
              sameAs: [],
              foundingDate: "2020",
              slogan: "Empowering people. Creating possibilities.",
              knowsAbout: [
                "NDIS",
                "Disability Support",
                "Personal Care",
                "Community Services",
                "Canberra"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}