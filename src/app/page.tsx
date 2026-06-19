"use client";

import Link from "next/link";
import Image from "next/image";
import SelfHostedVideo from "../components/SelfHostedVideo";
import ImageCarousel from "../components/ImageCarousel";
import ConsultationForm from "../components/ConsultationForm";

const TRUST_STRIP = [
  "Boutique, relationship-led provider",
  "Engagement before tasks",
  "Consistent familiar workers",
  "Small groups around six people",
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
      <section aria-labelledby="hero-title" className="home-hero home-band home-band--hero">
        <div className="content-shell content-shell--home">
          <div className="home-hero__grid grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div className="home-hero__media order-1 md:order-2">
              <ImageCarousel
                images={[...HERO_CAROUSEL]}
                autoPlay
                autoPlayInterval={4000}
                showDots
                showArrows
                captionBelow
              />
            </div>
            <div className="home-hero__copy order-2 max-w-xl md:order-1">
              <p className="section-kicker">Canberra &amp; the ACT</p>
              <h1
                id="hero-title"
                className="h1 text-balance"
              >
                Meaningful daily life, built around your interests
              </h1>
              <p className="home-hero__lead mt-4 md:mt-5">
                Structured, relationship-based support in Canberra for participants who benefit
                from engagement, routine, and familiar support workers.
              </p>
              <div className="home-hero__actions">
                <Link href="/referral" className="btn-primary">
                  Make a Referral
                </Link>
              </div>
              <div className="home-hero__actions mt-6">
                <Link href="/consultation" className="btn-secondary">
                  Book a Consultation
                </Link>
                <a
                  href="tel:+61424488439"
                  className="btn-ghost"
                  aria-label="Call us on +61 424 488 439"
                >
                  +61 424 488 439
                </a>
              </div>
              <p className="mt-5 text-sm text-[var(--text-muted)]">
                If you&apos;re in crisis, call <strong>000</strong> or Lifeline{" "}
                <strong>13&nbsp;11&nbsp;14</strong>.
              </p>
              <p className="mt-4">
                <Link href="#how-it-works" className="text-link">
                  See how it works ↓
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="trust-strip" role="region" aria-label="What makes our support different">
        <div className="content-shell content-shell--home">
          <ul className="trust-strip__row">
            {TRUST_STRIP.map((item) => (
              <li key={item} className="trust-strip__item">
                <span className="trust-strip__mark" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 2. What support looks like — image-led */}
      <section
        aria-labelledby="support-looks-title"
        className="home-section home-band home-band--subtle"
      >
        <div className="content-shell content-shell--home">
          <p className="section-kicker">Participant life</p>
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
                className="media-card media-card--elevated home-card-interactive"
              >
                <div className="media-card__image aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="media-card__body">
                  <h3 className="media-card__title">{item.title}</h3>
                  <p className="media-card__line">{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="media-spotlight mx-auto mt-12 max-w-3xl">
            <h3 className="text-lg font-semibold">Group programs in action</h3>
            <p className="mt-2 text-[var(--text-muted)]">
              An example of the kind of community group activity we can help arrange or
              support when it suits a participant&apos;s interests and goals.
            </p>
            <div className="mx-auto mt-5 max-w-[18rem] sm:max-w-sm md:max-w-md">
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

      {/* 3. Three proof points */}
      <section
        aria-labelledby="proof-points-title"
        className="home-section home-band home-band--proof"
      >
        <div className="content-shell content-shell--home">
          <h2 id="proof-points-title" className="h2">
            What makes our support different
          </h2>
          <p className="content-measure mt-3 text-[var(--text-muted)]">
            Support should not simply fill time. It should help people build meaningful daily life.
          </p>
          <ul className="home-proof-grid mt-8" role="list">
            {PROOF_POINTS.map((point) => (
              <li key={point.title}>
                <article className="card card--elevated card--borderless home-proof-card home-card-interactive h-full">
                  <h3 className="home-proof-card__title">{point.title}</h3>
                  <p className="home-proof-card__line">{point.line}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. How it works */}
      <section
        aria-labelledby="how-it-works-title"
        id="how-it-works"
        className="home-section home-band home-band--subtle"
      >
        <div className="content-shell content-shell--home">
          <p className="section-kicker">Getting started</p>
          <h2 id="how-it-works-title" className="h2">
            How it works
          </h2>
          <p className="content-measure mt-3 text-[var(--text-muted)]">
            A simple path from first conversation to familiar support that runs consistently.
          </p>
          <ol className="step-list mt-8">
            {HOW_IT_WORKS.map((item) => (
              <li key={item.step} className="step-list__item">
                <article className="step-card home-card-interactive h-full">
                  <h3 className="step-card__label">{item.step}</h3>
                  <p className="step-card__line">{item.line}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Participant story video */}
      <section
        aria-labelledby="routine-story-title"
        className="home-section home-band"
      >
        <div className="content-shell content-shell--home">
          <div className="media-spotlight mx-auto max-w-3xl">
            <h2 id="routine-story-title" className="text-lg font-semibold">
              Building a routine that feels meaningful
            </h2>
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
        className="home-section home-band home-band--subtle"
      >
        <div className="content-shell content-shell--home">
          <div className="home-referrer-band">
            <p className="section-kicker">For professionals</p>
            <h2 id="referrers-title" className="h2">
              For support coordinators and referrers
            </h2>
            <p className="mt-3 text-[var(--text-muted)]">
              We work alongside coordinators and therapists, not around them.
            </p>
            <ul className="check-list mt-6 space-y-3">
              {REFERRER_POINTS.map((item) => (
                <li key={item}>
                  <span className="check-mark" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Link href="/referral" className="btn-primary">
                Make a Referral
              </Link>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                We&apos;ll respond within 1–2 business days.
              </p>
            </div>
            <div className="mt-10 border-t border-[var(--line-light)] pt-7">
              <p className="text-sm font-semibold text-[var(--sand)]">Service areas</p>
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

      {/* 7. Homepage consultation form */}
      <section
        aria-labelledby="home-consultation-title"
        className="home-section home-band home-band--proof"
      >
        <div className="content-shell content-shell--reading">
          <p className="section-kicker">Consultation</p>
          <h2 id="home-consultation-title" className="h2 text-balance">
            Book a Consultation
          </h2>
          <p className="content-measure mt-3 text-[var(--text-muted)]">
            Tell us a good time to talk about support, fit, and next steps. We&apos;ll confirm by
            phone or email.
          </p>
          <ConsultationForm idPrefix="home-consultation" className="mt-6" />
        </div>
      </section>

      {/* 8. Depth links */}
      <section
        aria-labelledby="home-depth-title"
        className="home-section home-band pb-16 md:pb-20"
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
                <Link href="/about" className="text-link">
                  About our approach
                </Link>
              </li>
              <li className="home-depth-links__item">
                <Link href="/programs" className="text-link">
                  Our programs
                </Link>
              </li>
              <li className="home-depth-links__item">
                <Link href="/reviews" className="text-link">
                  Stories &amp; reviews
                </Link>
              </li>
              <li className="home-depth-links__item">
                <Link href="/services/canberra" className="text-link">
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
