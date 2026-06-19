"use client";

import Link from "next/link";
import Image from "next/image";
import SelfHostedVideo from "../components/SelfHostedVideo";
import ImageCarousel from "../components/ImageCarousel";

const HERO_IDENTITY = [
  "Canberra & the ACT",
  "Boutique, relationship-led provider",
  "Engagement, routine, and familiar workers",
] as const;

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

const FAMILY_VALUES = [
  "Consistent workers over frequent rotation",
  "Meaningful activity over passive supervision",
  "A smaller, relationship-led provider who knows participants personally",
] as const;

const HONEST_BOUNDARIES = [
  "The primary goal is task completion or hours filled, without a focus on engagement, routine, or relationship-building",
  "Worker rotation is unavoidable and relationship continuity is not a priority",
  "Support is needed without a focus on interests, routine, or meaningful daily participation",
] as const;

const REFERRER_POINTS = [
  "Clear fit guide — engagement, routine, and consistent workers",
  "Goals reinforced between therapy appointments through everyday activities",
  "Collaborative referrals with regular coordinator updates",
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

export default function Home() {
  return (
    <div className="homepage">
      {/* 1. Hero */}
      <section aria-labelledby="hero-title" className="home-hero home-band">
        <div className="content-shell content-shell--home">
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
              className="home-hero__title text-balance text-4xl font-extrabold leading-[1.08] md:text-6xl"
            >
              Meaningful daily life, built around your interests
            </h1>
            <p className="home-hero__lead mt-4 md:mt-5">
              Structured, relationship-based support in Canberra for participants who benefit
              from engagement, routine, and familiar support workers.
            </p>
            <ul className="home-hero__chips mt-5" aria-label="Who we are">
              {HERO_IDENTITY.map((item) => (
                <li key={item} className="home-hero__chip">
                  {item}
                </li>
              ))}
            </ul>
            <div className="home-hero__actions mt-8">
              <Link href="/referral" className="btn-primary">
                Make a Referral
              </Link>
              <Link href="/consultation" className="btn-secondary">
                Book a Consultation
              </Link>
              <a
                href="tel:+61424488439"
                className="btn-ghost"
                aria-label="Call us on +61 424 488 439"
              >
                Call: +61 424 488 439
              </a>
            </div>
            <p className="mt-5 text-sm text-[var(--text-muted)]">
              If you&apos;re in crisis, call <strong>000</strong> or Lifeline{" "}
              <strong>13&nbsp;11&nbsp;14</strong>.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* 2. Three proof points */}
      <section
        aria-labelledby="proof-points-title"
        className="home-section home-section--surface home-band"
      >
        <div className="content-shell content-shell--home">
        <h2 id="proof-points-title" className="sr-only">
          What makes our support different
        </h2>
        <blockquote className="home-pull-quote home-pull-quote--compact text-balance">
          Support should not simply fill time. It should help people build meaningful daily life.
        </blockquote>
        <ul className="home-proof-grid" role="list">
          {PROOF_POINTS.map((point) => (
            <li key={point.title}>
              <article className="card home-proof-card home-card-interactive h-full">
                <h3 className="home-proof-card__title">{point.title}</h3>
                <p className="home-proof-card__line">{point.line}</p>
              </article>
            </li>
          ))}
        </ul>
        </div>
      </section>

      {/* 3. What support looks like — image-led */}
      <section
        aria-labelledby="support-looks-title"
        className="home-section home-section--sage home-band"
      >
        <div className="content-shell content-shell--home">
        <p className="home-section-kicker">Participant life</p>
        <h2 id="support-looks-title" className="h2 content-measure">
          What support looks like
        </h2>
        <p className="content-measure mt-3 text-[var(--text-muted)]">
          Picture a week that feels purposeful — built around interests, routine, and connection.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:gap-6">
          {SUPPORT_LOOKS_LIKE.map((item) => (
            <article
              key={item.title}
              className="card home-pillar-card home-pillar-card--compact home-card-interactive card--on-band"
            >
              <div className="home-pillar-card__image">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="home-pillar-card__scrim" aria-hidden="true" />
                <div className="home-pillar-card__title-overlay">
                  <h3 className="h3">{item.title}</h3>
                  <p>{item.caption}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-4xl rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-card)] md:p-6">
          <h3 className="text-lg font-semibold">Group programs in action</h3>
          <p className="mt-2 text-[var(--text-muted)]">
            An example of the kind of community group activity we can help arrange or
            support when it suits a participant&apos;s interests and goals.
          </p>
          <div className="mx-auto mt-5 max-w-md">
            <SelfHostedVideo
              srcMp4="/videos/community-dance-class-event-sep-2025-portrait.mp4"
              title="Staying engaged together"
              description="A group movement class focused on connection, routine, and participation in a welcoming community space."
              poster="/images/gallery/dance-class-event-poster-portrait.jpg"
              aspect="9/16"
              objectFit="cover"
              minimalChrome
            />
          </div>
        </div>
        </div>
      </section>

      {/* 4. How it works */}
      <section
        aria-labelledby="how-it-works-title"
        className="home-section home-section--surface home-band"
      >
        <div className="content-shell content-shell--home">
        <p className="home-section-kicker">Getting started</p>
        <h2 id="how-it-works-title" className="h2">
          How it works
        </h2>
        <p className="content-measure mt-3 text-[var(--text-muted)]">
          A simple path from first conversation to familiar support that runs consistently.
        </p>
        <ol className="home-steps mt-8">
          {HOW_IT_WORKS.map((item) => (
            <li key={item.step}>
              <article className="card home-step home-card-interactive h-full">
                <h3 className="home-step__label">{item.step}</h3>
                <p className="home-step__line">{item.line}</p>
              </article>
            </li>
          ))}
        </ol>
        </div>
      </section>

      {/* 5. Who we're best for */}
      <section
        id="who-were-best-for"
        aria-labelledby="best-for-title"
        className="home-section home-band"
      >
        <div className="content-shell content-shell--home">
        <p className="home-section-kicker">Fit guide</p>
        <h2 id="best-for-title" className="h2 content-measure">
          Who we&apos;re best for
        </h2>
        <p className="content-measure mt-3 text-[var(--text-muted)]">
          The right fit matters for participants, families, and referrers alike.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="card card--on-band home-card-interactive">
            <h3 className="h3 text-xl md:text-xl">A strong fit when the participant…</h3>
            <ul className="mt-5 space-y-3">
              {STRONG_FIT.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="home-accent-mark mt-0.5 shrink-0" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="h3 mt-8 text-xl md:text-xl">Families and referrers often value…</h3>
            <ul className="mt-5 space-y-3">
              {FAMILY_VALUES.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="home-accent-mark mt-0.5 shrink-0" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card card--muted home-card-interactive">
            <h3 className="h3 text-xl md:text-xl">We may not be the best fit when…</h3>
            <ul className="mt-5 space-y-3">
              {HONEST_BOUNDARIES.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-[var(--text-muted)]" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-[var(--text-muted)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="content-measure mt-8 leading-relaxed">
          We&apos;re honest about fit because the right match matters more than volume, and
          we&apos;ll gladly help you think through alternatives when we&apos;re not the right
          provider.
        </p>
        <div className="mx-auto mt-10 max-w-4xl rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-card)] md:p-6">
          <h3 className="text-lg font-semibold">Building a routine that feels meaningful</h3>
          <p className="mt-2 text-[var(--text-muted)]">
            Hear how structured support around interests and routine helps someone stay
            engaged in the life they&apos;re building.
          </p>
          <div className="mt-5">
            <SelfHostedVideo
              srcMp4="/videos/testimonial2.mp4"
              title="Building a routine that feels meaningful"
              description="Hear how structured support around interests and routine helps someone stay engaged in the life they're building."
              poster="/images/testimonials/thumbnail.jpg"
              minimalChrome
            />
          </div>
        </div>
        </div>
      </section>

      {/* 6. Referrer CTA + service areas */}
      <section
        aria-labelledby="referrers-title"
        className="home-section home-section--sage home-band"
      >
        <div className="content-shell content-shell--home">
        <div className="home-referrer-band">
          <p className="home-section-kicker">For professionals</p>
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
          <div className="mt-8 border-t border-[var(--sage-mid)] pt-6">
            <p className="text-sm font-semibold text-[var(--text)]">Service areas</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Support throughout Canberra and the ACT
            </p>
            <ul className="home-service-chips mt-3" aria-label="Service areas">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>
                  <span className="home-pill">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </section>

      {/* 7. Depth links — routes to detail pages */}
      <section
        aria-labelledby="home-depth-title"
        className="home-section home-section--surface home-band border-t border-[var(--border-subtle)] pb-16 md:pb-20"
      >
        <div className="content-shell content-shell--home">
        <h2 id="home-depth-title" className="h2 text-xl md:text-2xl">
          Explore in more detail
        </h2>
        <p className="content-measure mt-2 text-[var(--text-muted)]">
          Deeper context on our approach, programs, stories, and Canberra service areas.
        </p>
        <nav className="mt-6" aria-label="Related pages">
          <ul className="home-depth-links">
            <li className="home-depth-links__item">
              <Link href="/about" className="home-depth-link">
                About our approach
              </Link>
            </li>
            <li className="home-depth-links__item">
              <Link href="/programs" className="home-depth-link">
                Our programs
              </Link>
            </li>
            <li className="home-depth-links__item">
              <Link href="/reviews" className="home-depth-link">
                Stories &amp; reviews
              </Link>
            </li>
            <li className="home-depth-links__item">
              <Link href="/services/canberra" className="home-depth-link">
                NDIS services in Canberra
              </Link>
            </li>
          </ul>
        </nav>
        </div>
      </section>
    </div>
  );
}
