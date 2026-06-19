import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NDIS Support Services Canberra | ACT Jubilant",
  description:
    "Registered NDIS provider in Canberra and the ACT. Daily living, community participation, group supports, transport, respite, support coordination, and high intensity personal activities.",
  alternates: {
    canonical: "/services/canberra",
  },
};

const SUPPORT_CATEGORIES = [
  {
    title: "Daily living & personal activities",
    body: "In-home support with daily living, personal care, and household tasks where funded, in service of routine and engagement.",
  },
  {
    title: "Community participation",
    body: "Support to access community activities, social outings, local venues, and shared experiences.",
  },
  {
    title: "Social & group supports",
    body: "Small group programs (around six participants), structured activities, and community-based gatherings.",
  },
  {
    title: "Transport",
    body: "Travel assistance to access community activities, appointments, and everyday outings.",
  },
  {
    title: "Respite",
    body: "Short-term support giving families and carers a break while maintaining familiar routines.",
  },
  {
    title: "Skill development",
    body: "Practical skill-building through everyday activities, aligned with participant interests and plan goals.",
  },
  {
    title: "Support coordination",
    body: "Help navigating NDIS plans, connecting with providers, and coordinating funded supports where included in a participant's plan.",
  },
  {
    title: "High intensity daily personal activities",
    body: "Specialist in-home support for participants with complex needs who require a higher level of personal care and supervision.",
  },
] as const;

const SERVICE_AREAS = [
  "Gungahlin",
  "Belconnen",
  "Civic",
  "Woden",
  "Tuggeranong",
  "Weston Creek",
  "Queanbeyan",
] as const;

export default function CanberraServicesPage() {
  return (
    <>
      <section aria-labelledby="services-opener-title" className="site-band site-section site-section--dawn">
        <div className="content-shell content-shell--home">
          <p className="section-kicker">NDIS services</p>
          <h1 id="services-opener-title" className="h1 text-balance">NDIS supports in Canberra</h1>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            ACT Jubilant is a registered NDIS provider delivering support throughout Canberra and the ACT.
          </p>
          <p className="mt-3 text-lg">
            Supports are delivered through structured, relationship-based engagement, not only as passive task coverage.
          </p>
          <figure className="media-figure media-figure--bordered mx-auto mt-8 max-w-3xl">
            <div className="media-figure__image aspect-[4/3]">
              <Image
                src="/images/stock/outdoor-group-walk.jpg"
                alt="Illustrative photo of a group on an outdoor walk, including people using wheelchairs"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
            <figcaption className="media-figure__caption">
              Community participation, social outings, and structured group supports across Canberra and the ACT.
            </figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="support-categories-title" className="site-band site-section site-section--cream">
        <div className="content-shell content-shell--home">
          <h2 id="support-categories-title" className="h2">Support we provide</h2>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            NDIS-funded supports available through ACT Jubilant include:
          </p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            {SUPPORT_CATEGORIES.map((category) => (
              <div key={category.title} className="card card--flat border-l-4 border-l-[var(--sage-mid)] pl-5">
                <dt className="font-semibold">{category.title}</dt>
                <dd className="mt-2 text-[var(--text-muted)]">{category.body}</dd>
              </div>
            ))}
          </dl>
          <figure className="media-figure media-figure--bordered mx-auto mt-8 max-w-3xl">
            <div className="media-figure__image aspect-[3/2]">
              <Image
                src="/images/stock/accessible-transport-minivan.jpg"
                alt="Wheelchair accessible minivan with rear ramp deployed in a parking area"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
            <figcaption className="media-figure__caption">
              Travel assistance to access community activities, appointments, and everyday outings.
            </figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="service-areas-title" className="site-band site-section site-section--eucalyptus">
        <div className="content-shell content-shell--home">
          <h2 id="service-areas-title" className="h2">Service areas</h2>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            We provide support throughout Canberra and the ACT.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Service areas">
            {SERVICE_AREAS.map((area) => (
              <li key={area} className="home-pill">{area}</li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="programs-bridge-title" className="site-band site-section site-section--compact site-section--sky">
        <div className="content-shell content-shell--home">
          <h2 id="programs-bridge-title" className="text-xl font-semibold">
            Want to see what support looks like in practice?
          </h2>
          <p className="mt-3 text-[var(--text-muted)]">
            This page covers NDIS supports and scope. For photos, examples, and what a real week can look like:
          </p>
          <p className="mt-3">
            <Link href="/programs" className="text-link">Explore our programs</Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="final-cta-title" className="site-band site-section site-section--surface">
        <div className="content-shell content-shell--home">
          <div className="cta-panel text-center md:text-left">
            <p id="final-cta-title" className="text-lg md:text-xl font-medium leading-relaxed">
              Meaningful daily life starts with the right support, the right relationships, and the
              right opportunities to stay engaged.
            </p>
            <div className="cta-panel__actions justify-center md:justify-start">
              <Link href="/referral" className="btn-primary">Make a Referral</Link>
              <Link href="/consultation" className="btn-secondary">Book a Consultation</Link>
              <a href="tel:+61424488439" className="btn-ghost" aria-label="Call us on +61 424 488 439">
                Call: +61 424 488 439
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
