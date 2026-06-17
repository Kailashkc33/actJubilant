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
    <>
      <section aria-labelledby="referral-opener-title" className="site-band site-section site-section--dawn">
        <div className="content-shell content-shell--reading">
        <p className="section-kicker">Referrals</p>
        <h1 id="referral-opener-title" className="h1 text-balance">
          Make a Referral
        </h1>
        <p className="content-measure mt-4 text-lg text-[var(--text-muted)]">
          For support coordinators, therapists, families, and self-referrers.
        </p>
        <p className="mt-3 text-lg">
          We work alongside coordinators and therapists, not around them. ACT Jubilant is a
          boutique, engagement-led provider in Canberra and the ACT.
        </p>
        <figure className="media-figure media-figure--bordered mt-8">
          <div className="grid md:grid-cols-5">
            <div className="media-figure__image aspect-[4/3] md:col-span-2">
              <Image
                src="/images/stock/participant-partnership-handshake.jpg"
                alt="Illustrative photo of a person in a wheelchair greeting a support worker with a handshake outdoors"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
            <figcaption className="flex flex-col justify-center bg-[var(--bg-band-eucalyptus)] p-6 md:col-span-3">
              <p className="text-sm font-medium text-[var(--text)]">Support in practice</p>
              <p className="mt-2 text-[var(--text-muted)] leading-relaxed">
                Interest-led support in everyday Canberra settings, with familiar workers and
                coordinator updates once support begins. We respond to referrals within 1–2 business
                days.
              </p>
            </figcaption>
          </div>
        </figure>
        </div>
      </section>

      <section aria-labelledby="referral-fit-title" className="site-band site-section site-section--cream">
        <div className="content-shell content-shell--reading">
        <h2 id="referral-fit-title" className="h2">
          Who we&apos;re looking for
        </h2>
        <p className="content-measure mt-4 text-lg text-[var(--text-muted)]">
          The right fit matters for participants, families, and referrers alike. A strong fit
          when the participant:
        </p>
        <ul className="check-list mt-6 space-y-3">
          {STRONG_FIT.map((item) => (
            <li key={item}>
              <span className="check-mark" aria-hidden="true">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[var(--text-muted)]">
          We&apos;re honest about fit because the right match matters more than volume.
        </p>
        <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/programs#who-were-best-for" className="text-link">Full fit guide on the programs page</Link>
          <Link href="/about#who-were-best-for" className="text-link">More about who we&apos;re best for</Link>
        </p>
        </div>
      </section>

      <section aria-labelledby="referrer-trust-title" className="site-band site-section site-section--eucalyptus">
        <div className="content-shell content-shell--reading">
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
        </div>
      </section>

      <section aria-labelledby="referral-process-title" className="site-band site-section site-section--surface">
        <div className="content-shell content-shell--reading">
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
        </div>
      </section>

      <section aria-labelledby="referral-depth-title" className="site-band site-section site-section--compact site-section--sky">
        <div className="content-shell content-shell--reading">
        <h2 id="referral-depth-title" className="text-xl font-semibold">
          Want more detail before you refer?
        </h2>
        <ul className="mt-4 space-y-2 text-[var(--text-muted)]">
          <li>
            <Link href="/programs" className="text-link">Explore our programs</Link>
            {" "}to see what support looks like in practice
          </li>
          <li>
            <Link href="/services/canberra" className="text-link">View NDIS services in Canberra</Link>
            {" "}for support categories and service areas
          </li>
          <li>
            <Link href="/reviews" className="text-link">Read participant stories</Link>
          </li>
        </ul>
        </div>
      </section>

      <section aria-labelledby="referral-form-title" className="site-band site-section site-section--dawn">
        <div className="content-shell content-shell--reading">
        <ReferralForm />
        </div>
      </section>
    </>
  );
}
