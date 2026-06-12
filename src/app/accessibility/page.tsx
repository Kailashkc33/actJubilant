import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility | ACT Jubilant Canberra",
  description:
    "How ACT Jubilant approaches website and service accessibility: our standards, cognitive accessibility commitments, and how to report barriers.",
  alternates: {
    canonical: "/accessibility",
  },
};

const COGNITIVE_COMMITMENTS = [
  {
    title: "Clear language",
    body: "We use plain, direct wording and avoid unnecessary jargon where we can.",
  },
  {
    title: "Predictable navigation",
    body: "Pages follow a consistent structure. A skip link lets you move straight to the main content.",
  },
  {
    title: "Reduced overwhelm",
    body: "We aim to keep layouts calm, with one main action per section rather than competing messages.",
  },
  {
    title: "Readable spacing",
    body: "Text, headings, and sections are spaced for comfortable reading on screen and on mobile.",
  },
  {
    title: "Helpful form errors",
    body: "Forms explain what is missing or unclear, so you can correct fields without guessing.",
  },
  {
    title: "No time pressure",
    body: "Nothing on this site requires you to complete a task within a countdown or before a timer runs out.",
  },
  {
    title: "Accessible media",
    body: "Videos use posters and controls you can operate with a keyboard. We describe images where alt text adds meaning.",
  },
  {
    title: "Content that supports comprehension",
    body: "Information is grouped by topic with clear headings, so you can scan or return to what you need.",
  },
] as const;

const WEBSITE_FEATURES = [
  "High contrast mode",
  "Large text option",
  "Dyslexia-friendly font option",
  "Read aloud for the main page content",
  "Keyboard navigation across the site",
  "Skip link to main content",
  "Alternative text on meaningful images",
  "Visible focus states on interactive elements",
] as const;

const ONGOING_WORK = [
  "Regular review of public pages against WCAG 2.2 Level AA criteria",
  "Checking forms, navigation, and media on mobile and desktop",
  "Fixing barriers reported by visitors, participants, families, and referrers",
  "Usability sessions with people who reflect our audience, where we can arrange them",
] as const;

export default function AccessibilityPage() {
  return (
    <div className="max-w-4xl">
      <section aria-labelledby="accessibility-opener-title" className="py-8 md:py-12">
        <h1 id="accessibility-opener-title" className="h2 text-balance">
          Accessibility
        </h1>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          ACT Jubilant serves participants, families, advocates, and referrers. This page
          explains the standard we work toward on this website and how we handle
          accessibility in our support.
        </p>
      </section>

      <section
        aria-labelledby="our-standard-title"
        className="py-8 md:py-10 border-t border-gray-100"
      >
        <h2 id="our-standard-title" className="h2">
          Our standard
        </h2>
        <div className="mt-4 space-y-4 text-[var(--text-muted)]">
          <p>
            We use{" "}
            <strong className="text-[var(--text)]">
              WCAG 2.2 Level AA
            </strong>{" "}
            as our technical baseline for reviewing this website. That means we check
            colour contrast, keyboard access, labels, structure, and similar requirements
            as part of ongoing work.
          </p>
          <p>
            We also follow{" "}
            <strong className="text-[var(--text)]">
              W3C guidance on cognitive accessibility
            </strong>
            : making information easier to find, understand, and use without unnecessary
            mental load.
          </p>
          <p>
            This is a working standard, not a finished certificate. We have not claimed
            full WCAG compliance unless and until an audit confirms it. We update this
            page as our review work progresses.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="cognitive-commitments-title"
        className="py-8 md:py-10 border-t border-gray-100"
      >
        <h2 id="cognitive-commitments-title" className="h2">
          Cognitive accessibility commitments
        </h2>
        <p className="mt-4 text-[var(--text-muted)]">
          Many of the people who use this site benefit from more than technical
          checkboxes. These are the principles we design and review against:
        </p>
        <dl className="mt-8 grid gap-6 md:grid-cols-2">
          {COGNITIVE_COMMITMENTS.map((item) => (
            <div key={item.title} className="card h-full">
              <dt className="font-semibold text-[var(--primary-700)]">{item.title}</dt>
              <dd className="mt-2 text-[var(--text-muted)]">{item.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        aria-labelledby="real-people-title"
        className="py-8 md:py-10 border-t border-gray-100"
      >
        <div className="card overflow-hidden p-0">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src="/images/stock/community-group-outdoors.jpg"
              alt="Illustrative photo of a diverse group outdoors, including a person in a wheelchair"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <div className="p-6">
          <h2 id="real-people-title" className="h2">
            Technical compliance is not enough
          </h2>
          <p className="mt-4 text-[var(--text-muted)]">
            A site can pass automated checks and still be hard to use in real life. We
            treat accessibility as something to test with people: participants, family
            members, advocates, and others who reflect the community we support.
          </p>
          <p className="mt-4 text-[var(--text-muted)]">
            Where we can, we run usability sessions, listen to reported barriers, and
            adjust layout, wording, or tools based on what people actually experience.
            That feedback is as important as any checklist.
          </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="website-tools-title"
        className="py-8 md:py-10 border-t border-gray-100"
      >
        <h2 id="website-tools-title" className="h2">
          Tools on this website
        </h2>
        <p className="mt-4 text-[var(--text-muted)]">
          The accessibility toolbar at the top of every page offers:
        </p>
        <ul className="mt-4 space-y-2">
          {WEBSITE_FEATURES.map((feature) => (
            <li key={feature} className="flex gap-2">
              <span aria-hidden="true" className="text-[var(--primary-600)]">
                •
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-[var(--text-muted)]">
          Preferences are saved in your browser for return visits. If a tool does not
          work as expected on your device, please tell us.
        </p>
      </section>

      <section
        aria-labelledby="ongoing-work-title"
        className="py-8 md:py-10 border-t border-gray-100"
      >
        <h2 id="ongoing-work-title" className="h2">
          Ongoing review
        </h2>
        <p className="mt-4 text-[var(--text-muted)]">
          Current and planned work includes:
        </p>
        <ul className="mt-4 space-y-2">
          {ONGOING_WORK.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="text-[var(--primary-600)]">
                •
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="service-accessibility-title"
        className="py-8 md:py-10 border-t border-gray-100"
      >
        <h2 id="service-accessibility-title" className="h2">
          Accessibility in our support
        </h2>
        <p className="mt-4 text-[var(--text-muted)]">
          Beyond this website, we aim to deliver support that people can participate in
          meaningfully:
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex gap-2">
            <span aria-hidden="true" className="text-[var(--primary-600)]">
              •
            </span>
            <span>Communication in formats that work for each person where practicable</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden="true" className="text-[var(--primary-600)]">
              •
            </span>
            <span>Activities and venues chosen with access needs in mind</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden="true" className="text-[var(--primary-600)]">
              •
            </span>
            <span>Support plans shaped around how someone learns, moves, and engages</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden="true" className="text-[var(--primary-600)]">
              •
            </span>
            <span>Staff trained in disability awareness and respectful support</span>
          </li>
        </ul>
      </section>

      <section
        aria-labelledby="feedback-title"
        className="py-8 md:py-14 border-t border-gray-100"
      >
        <div className="card">
          <h2 id="feedback-title" className="h2">
            Report a barrier or suggest an improvement
          </h2>
          <p className="mt-4 text-[var(--text-muted)]">
            If something on this website or in our services is difficult to use, we want
            to know. Contact us directly or use our feedback form.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+61434740745"
                className="text-[var(--primary-600)] underline underline-offset-2"
              >
                +61 434 740 745
              </a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:admin@actjubilant.com.au"
                className="text-[var(--primary-600)] underline underline-offset-2"
              >
                admin@actjubilant.com.au
              </a>
            </li>
          </ul>
          <p className="mt-6">
            <Link href="/feedback" className="btn-secondary">
              Send feedback
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
