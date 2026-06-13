"use client";

import Link from "next/link";
import Image from "next/image";
import ImageCarousel from "../components/ImageCarousel";

const PROOF_POINTS = [
  {
    title: "Familiar workers",
    line: "The same support team, week after week — less time starting over.",
  },
  {
    title: "Interest-led days",
    line: "Activities shaped around hobbies, goals, and what matters to each person.",
  },
  {
    title: "Small groups",
    line: "Around six participants — connection and routine, not crowd management.",
  },
] as const;

const HOW_IT_WORKS = [
  {
    step: "Meet",
    line: "We learn interests, routine, communication style, and what a good day feels like.",
  },
  {
    step: "Match",
    line: "Participants meet workers through introductions, trial shifts, and their own feedback.",
  },
  {
    step: "Build routine",
    line: "Structured support runs consistently at home and in the community.",
  },
] as const;

const HERO_CAROUSEL = [
  {
    src: "/images/gallery/art-workshop-group-feb-2026.jpg",
    alt: "Participant at an art workshop with paints and brushes at a communal table",
    title: "Hobbies & interests",
    description: "Pride in what you create and pursue",
  },
  {
    src: "/images/gallery/birthday-celebration-restaurant-jan-2026.jpg",
    alt: "Birthday celebration at a restaurant with support worker and family",
    title: "Meaningful daily life",
    description: "Celebrations and moments that matter",
  },
  {
    src: "/images/gallery/community-cafe-outing-nov-2025.jpg",
    alt: "Support worker and participant sharing a café outing together",
    title: "Community participation",
    description: "Connected to everyday places and people",
  },
  {
    src: "/images/gallery/wheelchair-outdoor-outing-nov-2025.jpg",
    alt: "Support workers accompanying participants on an outdoor wheelchair outing",
    title: "Routine & structure",
    description: "Regular outings with familiar support",
  },
  {
    src: "/images/gallery/restaurant-group-meal-dec-2025.jpg",
    alt: "Group sharing a meal together at a restaurant, including a participant in a wheelchair",
    title: "Small group connection",
    description: "Social life built around shared experiences",
  },
] as const;

const SUPPORT_LOOKS_LIKE = [
  {
    title: "Hobbies & interests",
    caption: "Pride in what they create",
    image: "/images/gallery/art-workshop-group-feb-2026.jpg",
    alt: "Participant at a group art workshop with paints and supplies",
  },
  {
    title: "Routine & structure",
    caption: "A week with rhythm and purpose",
    image: "/images/gallery/wheelchair-outdoor-outing-nov-2025.jpg",
    alt: "Regular outdoor outing with familiar support workers",
  },
  {
    title: "Community participation",
    caption: "Belonging in everyday places",
    image: "/images/gallery/restaurant-group-meal-dec-2025.jpg",
    alt: "Group meal at a restaurant with friends and support",
  },
  {
    title: "Skill & identity building",
    caption: "Confidence and recognition",
    image: "/images/gallery/participant-home-flowers-jan-2026.jpg",
    alt: "Participant at home, recognised and valued in their own space",
  },
] as const;

const STRONG_FIT = [
  "Is 12–65 with physical disability or mild to moderate cognitive disability",
  "Wants engagement and routine, not only tasks or hours filled",
  "Has interests, hobbies, or goals they'd like support built around",
  "Does better with familiar support workers than constant change",
  "Would benefit from small group settings (around six people)",
] as const;

const REFERRER_POINTS = [
  "Clear fit guide — engagement, routine, and consistent workers",
  "Goals reinforced between therapy appointments through everyday activities",
  "Collaborative referrals with regular coordinator updates",
] as const;

export default function Home() {
  return (
    <div className="homepage">
      {/* 1. Hero */}
      <section aria-labelledby="hero-title" className="home-hero home-band">
        <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
          <div className="home-hero__media order-1 md:order-2">
            <ImageCarousel
              images={[...HERO_CAROUSEL]}
              autoPlay
              autoPlayInterval={4000}
              showDots
              showArrows
            />
          </div>
          <div className="order-2 max-w-xl md:order-1">
            <h1
              id="hero-title"
              className="text-balance text-3xl font-bold leading-snug md:text-5xl"
            >
              Meaningful daily life, built around your interests
            </h1>
            <p className="home-hero__lead mt-4 md:mt-5">
              Structured, relationship-based support in Canberra for participants who benefit
              from engagement, routine, and familiar support workers.
            </p>
            <div className="home-hero__actions mt-8">
              <Link href="/referral" className="btn-primary">
                Make a Referral
              </Link>
              <Link href="/consultation" className="btn-secondary">
                Book a Consultation
              </Link>
            </div>
            <p className="mt-5 text-sm text-[var(--text-muted)]">
              If you&apos;re in crisis, call <strong>000</strong> or Lifeline{" "}
              <strong>13&nbsp;11&nbsp;14</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Three proof points */}
      <section
        aria-labelledby="proof-points-title"
        className="home-section home-section--surface home-band"
      >
        <h2 id="proof-points-title" className="sr-only">
          What makes our support different
        </h2>
        <ul className="home-proof-grid" role="list">
          {PROOF_POINTS.map((point) => (
            <li key={point.title}>
              <article className="card home-proof-card h-full">
                <h3 className="home-proof-card__title">{point.title}</h3>
                <p className="home-proof-card__line">{point.line}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. What support looks like — image-led */}
      <section
        aria-labelledby="support-looks-title"
        className="home-section home-section--sage home-band"
      >
        <h2 id="support-looks-title" className="h2 max-w-3xl">
          What support looks like
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:gap-6">
          {SUPPORT_LOOKS_LIKE.map((item) => (
            <article key={item.title} className="card home-pillar-card home-pillar-card--compact card--on-band">
              <div className="home-pillar-card__image">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="home-pillar-card__title-overlay">
                  <h3 className="h3">{item.title}</h3>
                  <p>{item.caption}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8">
          <Link href="/programs" className="home-depth-link">
            Explore our programs
          </Link>
        </p>
      </section>

      {/* 4. How it works — 3 steps */}
      <section
        aria-labelledby="how-it-works-title"
        className="home-section home-section--surface home-band"
      >
        <h2 id="how-it-works-title" className="h2">
          How it works
        </h2>
        <ol className="home-steps mt-8">
          {HOW_IT_WORKS.map((item) => (
            <li key={item.step}>
              <article className="card home-step h-full">
                <h3 className="home-step__label">{item.step}</h3>
                <p className="home-step__line">{item.line}</p>
              </article>
            </li>
          ))}
        </ol>
      </section>

      {/* 5. Who we're best for */}
      <section
        id="who-were-best-for"
        aria-labelledby="best-for-title"
        className="home-section home-band"
      >
        <h2 id="best-for-title" className="h2 max-w-3xl">
          Who we&apos;re best for
        </h2>
        <p className="mt-3 max-w-3xl text-[var(--text-muted)]">
          A strong fit when the participant…
        </p>
        <ul className="mt-6 max-w-3xl space-y-3">
          {STRONG_FIT.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="home-accent-mark mt-0.5 shrink-0" aria-hidden="true">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link href="/about#who-were-best-for" className="home-depth-link">
            Full fit guide
          </Link>
        </p>
      </section>

      {/* 6. Referrer CTA */}
      <section
        aria-labelledby="referrers-title"
        className="home-section home-section--sage home-band pb-16 md:pb-20"
      >
        <div className="home-referrer-band max-w-3xl">
          <h2 id="referrers-title" className="h2">
            For support coordinators and referrers
          </h2>
          <p className="mt-3 text-[var(--text-muted)]">
            We work alongside coordinators and therapists, not around them.
          </p>
          <ul className="mt-5 space-y-2">
            {REFERRER_POINTS.map((item) => (
              <li key={item} className="flex gap-3 text-sm md:text-base">
                <span className="home-accent-mark shrink-0" aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/referral" className="btn-primary">
              Make a Referral
            </Link>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              We&apos;ll respond within 1–2 business days.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
