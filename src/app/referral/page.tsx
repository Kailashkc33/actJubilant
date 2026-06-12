import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReferralForm from "./ReferralForm";

export const metadata: Metadata = {
  title: "Make a Referral | ACT Jubilant Canberra",
  description:
    "Refer a participant to ACT Jubilant in Canberra. Who we're best for, how referrals work, and what coordinators can expect from our engagement-led, relationship-based support.",
  alternates: {
    canonical: "/referral",
  },
};

const STRONG_FIT = [
  "Is 12–65 with physical disability or mild to moderate cognitive disability",
  "Wants engagement and routine, not only tasks or hours filled",
  "Has interests, hobbies, or goals they'd like support built around",
  "Does better with familiar support workers than constant change",
  "Would benefit from small group settings (around six people)",
] as const;

const REFERRER_BENEFITS = [
  {
    title: "You know who fits",
    body: "We work best with participants seeking engagement, routine, and consistent workers. See our full fit guide if you're unsure.",
  },
  {
    title: "Goals are reinforced between appointments",
    body: "Everyday activities can support mobility, independence, and confidence while complementing therapy and support plans.",
  },
  {
    title: "Referrals stay collaborative",
    body: "We keep coordinators informed through regular updates and observations, so you're not left wondering how things are going.",
  },
] as const;

const REFERRAL_STEPS = [
  "We review your referral within 1–2 business days.",
  "We contact you to discuss the participant's goals, interests, and support needs.",
  "If it's a good match, onboarding starts with understanding the person before workers are matched.",
] as const;

export default function ReferralPage() {
  return (
    <div className="max-w-4xl">
      {/* 1. Opener */}
      <section aria-labelledby="referral-opener-title" className="py-8 md:py-12">
        <h1 id="referral-opener-title" className="h2 text-balance">
          Make a Referral
        </h1>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          For support coordinators, therapists, families, and self-referrers.
        </p>
        <p className="mt-3 text-lg">
          We work alongside coordinators and therapists, not around them. ACT Jubilant is a
          boutique, engagement-led provider in Canberra and the ACT.
        </p>
        <figure className="mt-8 overflow-hidden rounded-2xl border border-gray-100">
          <div className="grid md:grid-cols-5">
            <div className="relative aspect-[4/3] w-full md:col-span-2">
              <Image
                src="/images/stock/participant-partnership-handshake.jpg"
                alt="Illustrative photo of a person in a wheelchair greeting a support worker with a handshake outdoors"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
            <figcaption className="flex flex-col justify-center bg-[color-mix(in_oklab,var(--bg)_96%,var(--primary-600))] p-6 md:col-span-3">
              <p className="text-sm font-medium text-[var(--text)]">Support in practice</p>
              <p className="mt-2 text-[var(--text-muted)] leading-relaxed">
                Interest-led support in everyday Canberra settings, with familiar workers and
                coordinator updates once support begins. We respond to referrals within 1–2 business
                days.
              </p>
            </figcaption>
          </div>
        </figure>
      </section>

      {/* 2. Who we're looking for */}
      <section
        aria-labelledby="referral-fit-title"
        className="py-8 md:py-10 border-t border-gray-100"
      >
        <h2 id="referral-fit-title" className="h2">
          Who we&apos;re looking for
        </h2>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          The right fit matters for participants, families, and referrers alike. A strong fit
          when the participant:
        </p>
        <ul className="mt-6 space-y-3">
          {STRONG_FIT.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 text-[var(--primary-600)] shrink-0" aria-hidden="true">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[var(--text-muted)]">
          We&apos;re honest about fit because the right match matters more than volume.
        </p>
        <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          <Link
            href="/#who-were-best-for"
            className="font-semibold text-[var(--primary-600)] underline decoration-2 underline-offset-4"
          >
            Full fit guide on the homepage
          </Link>
          <Link
            href="/about#who-were-best-for"
            className="font-semibold text-[var(--primary-600)] underline decoration-2 underline-offset-4"
          >
            More about who we&apos;re best for
          </Link>
        </p>
      </section>

      {/* 3. Why referrers choose ACT Jubilant */}
      <section
        aria-labelledby="referrer-trust-title"
        className="py-8 md:py-10 border-t border-gray-100"
      >
        <h2 id="referrer-trust-title" className="h2">
          Why referrers work with us
        </h2>
        <dl className="mt-8 space-y-6">
          {REFERRER_BENEFITS.map((item) => (
            <div key={item.title} className="card">
              <dt className="font-semibold">{item.title}</dt>
              <dd className="mt-2 text-[var(--text-muted)]">{item.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 4. What happens next */}
      <section
        aria-labelledby="referral-process-title"
        className="py-8 md:py-10 border-t border-gray-100"
      >
        <h2 id="referral-process-title" className="h2">
          What happens after you refer
        </h2>
        <ol className="mt-6 space-y-4">
          {REFERRAL_STEPS.map((step, index) => (
            <li key={step} className="flex gap-4">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--primary-600)_12%,white)] text-sm font-semibold text-[var(--primary-700)]"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <span className="pt-1">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* 5. Depth links */}
      <section
        aria-labelledby="referral-depth-title"
        className="py-8 md:py-10 border-t border-gray-100"
      >
        <h2 id="referral-depth-title" className="text-xl font-semibold">
          Want more detail before you refer?
        </h2>
        <ul className="mt-4 space-y-2 text-[var(--text-muted)]">
          <li>
            <Link
              href="/programs"
              className="font-semibold text-[var(--primary-600)] underline decoration-2 underline-offset-4"
            >
              Explore our programs
            </Link>
            {" "}
            to see what support looks like in practice
          </li>
          <li>
            <Link
              href="/services/canberra"
              className="font-semibold text-[var(--primary-600)] underline decoration-2 underline-offset-4"
            >
              View NDIS services in Canberra
            </Link>
            {" "}
            for support categories and service areas
          </li>
          <li>
            <Link
              href="/reviews"
              className="font-semibold text-[var(--primary-600)] underline decoration-2 underline-offset-4"
            >
              Read participant stories
            </Link>
          </li>
        </ul>
      </section>

      {/* 6. Form */}
      <section aria-labelledby="referral-form-title" className="py-8 md:py-14 border-t border-gray-100">
        <ReferralForm />
      </section>
    </div>
  );
}
