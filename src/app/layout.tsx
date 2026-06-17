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

import { Atkinson_Hyperlegible, IBM_Plex_Mono, Inter, Sora } from "next/font/google";
import "./globals.css";
import AccessibilityToolbar from "../components/AccessibilityToolbar";
import HashScroll from "../components/HashScroll";
import MobileNav from "../components/MobileNav";

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-dys",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-display",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "ACT Jubilant | Meaningful Daily Life Support in Canberra",
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
    title: "ACT Jubilant | Meaningful Daily Life Support",
    description:
      "Boutique, relationship-led support in Canberra designed around participant interests, routine, consistency, and community participation.",
    url: "https://actjubilant.com.au",
    siteName: "ACT Jubilant",
    images: [
      { 
        url: "/logo.png", 
        width: 1200, 
        height: 630,
        alt: "ACT Jubilant | Meaningful Daily Life Support in Canberra"
      }
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACT Jubilant | Meaningful Daily Life Support",
    description:
      "Structured support in Canberra built around interests, routine, engagement, and familiar support workers.",
    images: ["/logo.png"],
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://actjubilant.com.au/#organization",
  name: "ACT Jubilant",
  alternateName: "ACT Jubilant NDIS Provider",
  description:
    "Boutique, relationship-led NDIS provider in Canberra and the ACT. Structured support around participant interests, routine, consistent workers, and meaningful daily life.",
  url: "https://actjubilant.com.au",
  logo: "https://actjubilant.com.au/logo.png",
  image: "https://actjubilant.com.au/logo.png",
  telephone: "+61 424 488 439",
  email: "admin@actjubilant.com.au",
  founder: {
    "@type": "Person",
    name: "Manish Gupta",
    jobTitle: "Founder & Client Service Manager",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "75/20 Beissel St",
    addressLocality: "Belconnen",
    addressRegion: "ACT",
    postalCode: "2617",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-35.2386",
    longitude: "149.0687",
  },
  areaServed: {
    "@type": "City",
    name: "Canberra",
    containedInPlace: {
      "@type": "State",
      name: "Australian Capital Territory",
    },
  },
  serviceType: [
    "Daily living and personal activities",
    "Community participation",
    "Social and group supports",
    "Transport",
    "Respite",
    "Skill development",
    "Support coordination",
    "High intensity daily personal activities",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "NDIS support services in Canberra",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Daily living and personal activities",
          description:
            "In-home support with daily living, personal care, and household tasks in service of routine and engagement.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Community participation",
          description:
            "Support to access community activities, social outings, local venues, and shared experiences.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social and group supports",
          description:
            "Small group programs, structured activities, and community-based gatherings.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transport",
          description:
            "Travel assistance to access community activities, appointments, and everyday outings.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Respite",
          description:
            "Short-term support giving families and carers a break while maintaining familiar routines.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Skill development",
          description:
            "Practical skill-building through everyday activities, aligned with participant interests and plan goals.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Support coordination",
          description:
            "Help navigating NDIS plans, connecting with providers, and coordinating funded supports.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "High intensity daily personal activities",
          description:
            "Specialist in-home support for participants with complex needs who require a higher level of personal care.",
        },
      },
    ],
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "13:00",
    },
  ],
  sameAs: [],
  slogan: "Support should create meaningful daily life.",
  knowsAbout: [
    "NDIS",
    "Disability support",
    "Participant engagement",
    "Routine and structure",
    "Community participation",
    "Consistent support workers",
    "Canberra",
  ],
} as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-AU"
      suppressHydrationWarning
      className={`${atkinson.variable} ${inter.variable} ${sora.variable} ${ibmPlexMono.variable}`}
    >
      <body className={inter.className}>
        {/* Skip link */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:bg-[var(--gold)] focus:text-[var(--ink)] focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to main content
        </a>

        <AccessibilityToolbar />

        {/* Header */}
        <header
          role="banner"
          className="site-header sticky top-0 z-40 w-full"
        >
          <div className="site-header__inner content-shell content-shell--home">
            <Link href="/" className="flex shrink-0 items-center gap-3">
              <Image
                src="/logo.png"
                alt="ACT Jubilant"
                width={100}
                height={60}
                priority
                sizes="(max-width: 768px) 140px, 200px"
                className="h-9 w-auto rounded-lg md:h-10"
              />
            </Link>

            <nav aria-label="Main" className="site-desktop-nav items-center gap-1 xl:gap-2">
              <Link className="nav-link px-2 xl:px-3" href="/programs">Programs</Link>
              <Link className="nav-link px-2 xl:px-3" href="/about">About</Link>
              <Link className="nav-link px-2 xl:px-3" href="/consultation">Book a Consultation</Link>
              <Link className="nav-link px-2 xl:px-3" href="/referral">Make a Referral</Link>
              <Link className="nav-link px-2 xl:px-3" href="/faq">FAQ</Link>
              <Link className="nav-link px-2 xl:px-3" href="/accessibility">Accessibility</Link>
              <Link className="nav-link px-2 xl:px-3" href="/reviews">Reviews</Link>
            </nav>

            {/* Mobile nav trigger */}
            <div className="site-mobile-nav">
              <MobileNav />
            </div>
          </div>
        </header>

        {/* Main */}
        <main id="main" className="w-full">
          <HashScroll />
          {children}
        </main>

        {/* Footer */}
        <footer role="contentinfo" className="site-footer">
          <div className="site-footer__inner content-shell content-shell--home">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-6">
                <div className="site-footer__brand">
                  <Image
                    src="/logo.png"
                    alt="ACT Jubilant"
                    width={100}
                    height={60}
                    className="site-footer__logo h-10 w-auto md:h-11"
                  />
                </div>
                <p className="site-footer__blurb">
                  ACT Jubilant is a boutique, relationship-led NDIS provider in Canberra and the
                  ACT. We structure support around participant interests, routine, and consistent
                  workers, helping people build meaningful daily life at home and in the community.
                </p>
                <div className="site-footer__contact">
                  <p className="site-footer__contact-row">
                    <strong>Address:</strong>{" "}
                    75/20 Beissel St, Belconnen 2617
                  </p>
                  <p className="site-footer__contact-row flex flex-wrap items-center gap-x-1">
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+61424488439" className="site-footer__link">
                      +61 424 488 439
                    </a>
                  </p>
                  <p className="site-footer__contact-row flex flex-wrap items-center gap-x-1">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:admin@actjubilant.com.au"
                      className="site-footer__link break-all sm:break-normal"
                    >
                      admin@actjubilant.com.au
                    </a>
                  </p>
                  <p className="site-footer__contact-row">
                    <strong>Office Hours:</strong>{" "}
                    Mon-Fri 8:30am-5:00pm, Sat 10:00am-1:00pm
                  </p>
                </div>
              </div>

              <div className="lg:col-span-3">
                <h3 className="site-footer__heading">Quick Links</h3>
                <nav aria-label="Footer navigation">
                  <ul className="site-footer__link-list">
                    <li><Link className="site-footer__link" href="/programs">Our Programs</Link></li>
                    <li><Link className="site-footer__link" href="/services/canberra">NDIS Services (Canberra)</Link></li>
                    <li><Link className="site-footer__link" href="/about">About Us</Link></li>
                    <li><Link className="site-footer__link" href="/reviews">Reviews</Link></li>
                    <li><Link className="site-footer__link" href="/referral">Make a Referral</Link></li>
                    <li><Link className="site-footer__link" href="/consultation">Book Consultation</Link></li>
                    <li><Link className="site-footer__link" href="/faq">FAQ</Link></li>
                  </ul>
                </nav>
              </div>

              <div className="lg:col-span-3">
                <h3 className="site-footer__heading">Support &amp; Info</h3>
                <nav aria-label="Support navigation">
                  <ul className="site-footer__link-list">
                    <li><Link className="site-footer__link" href="/accessibility">Accessibility</Link></li>
                    <li><Link className="site-footer__link" href="/feedback">Feedback &amp; Complaints</Link></li>
                    <li><Link className="site-footer__link" href="/privacy">Privacy Policy</Link></li>
                    <li>
                      <a
                        href="https://www.ndis.gov.au"
                        className="site-footer__link"
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

          <hr className="site-footer__divider" />

          <div className="site-footer__ack">
            <div className="content-shell content-shell--home">
              <p>
                <strong>Acknowledgement of Country:</strong> We acknowledge the Ngunnawal people as
                the Traditional Custodians of the land on which we live and work. We pay our
                respects to Elders past and present, and extend that respect to all Aboriginal and
                Torres Strait Islander peoples.
              </p>
            </div>
          </div>

          <div className="site-footer__bar">
            <div className="site-footer__bar-inner content-shell content-shell--home">
              <p>Proudly supporting the Canberra community</p>
              <p>© {new Date().getFullYear()} ACT Jubilant. All rights reserved.</p>
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
            __html: JSON.stringify(ORGANIZATION_JSON_LD),
          }}
        />
      </body>
    </html>
  );
}
