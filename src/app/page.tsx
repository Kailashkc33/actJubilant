"use client";

import Link from "next/link";
import Image from "next/image";
import SelfHostedVideo from "../components/SelfHostedVideo";
import ImageCarousel from "../components/ImageCarousel";

const SERVICE_AREAS = [
  "Gungahlin",
  "Belconnen",
  "Civic",
  "Woden",
  "Tuggeranong",
  "Weston Creek",
  "Queanbeyan",
] as const;

const PROOF_GROUPS = [
  {
    id: "participant-experience",
    title: "Participant experience",
    items: [
      {
        title: "Participant-led matching",
        line: "Participants choose who supports them through introductions, trial shifts, and their own feedback.",
      },
      {
        title: "Consistent support teams",
        line: "Stable teams mean less time adjusting to new faces and more time building trust.",
      },
      {
        title: "Participant-driven activities",
        line: "Programs are shaped around each person's interests and hobbies, not a standard catalogue.",
      },
    ],
  },
  {
    id: "supporting-long-term-goals",
    title: "Supporting long-term goals",
    subtitle: "This works alongside plans and therapy.",
    items: [
      {
        title: "Therapy reinforced through daily activities",
        line: "Everyday activities reinforce mobility, independence, and confidence between therapy appointments.",
      },
    ],
  },
  {
    id: "support-that-stays-personal",
    title: "Support that stays personal",
    subtitle: "Support built on knowing the person first.",
    items: [
      {
        title: "Founder-led onboarding",
        line: "Before matching, our founder learns each person's communication style, preferences, routine, and goals.",
        emphasis: true,
      },
      {
        title: "Coordinator communication",
        line: "Regular updates and observations keep referrals collaborative, not disconnected.",
      },
      {
        title: "Small structured groups",
        line: "Group programs stay around six participants, designed for connection, not crowd management.",
      },
    ],
  },
] as const;

const APPROACH_POINTS = [
  {
    title: "Interests, hobbies, and routine",
    line: "Support is structured around interests, hobbies, routine, and relationships — at home and in the community.",
  },
  {
    title: "Active engagement",
    line: "Workers actively engage people in activities that build confidence, connection, and pride — not only accompany them.",
  },
  {
    title: "Engagement over task lists",
    line: "Built around engagement and consistency, not task lists and constant changes.",
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

const MEANINGFUL_PILLARS = [
  {
    title: "Hobbies & interests",
    body: "Someone who takes pride in what they create and pursue, whether that's gardening, art, cooking, or an interest that's uniquely their own.",
    image: "/images/gallery/art-workshop-group-feb-2026.jpg",
    alt: "Participant at a group art workshop with paints and supplies",
    caption: "Pride in what they create",
  },
  {
    title: "Routine & structure",
    body: "Someone whose week has a rhythm they can count on, with familiar activities, regular outings, and days that feel intentional rather than empty.",
    image: "/images/gallery/wheelchair-outdoor-outing-nov-2025.jpg",
    alt: "Regular outdoor outing with familiar support workers",
    caption: "A week with rhythm and purpose",
  },
  {
    title: "Community participation",
    body: "Someone who belongs in everyday places, catching up with friends, visiting local venues, and staying connected to community life.",
    image: "/images/gallery/restaurant-group-meal-dec-2025.jpg",
    alt: "Group meal at a restaurant with friends and support",
    caption: "Belonging in everyday places",
  },
  {
    title: "Skill & identity building",
    body: "Someone growing in confidence and recognised for what they learn, build, and contribute, not only for what they need help with.",
    image: "/images/gallery/participant-home-flowers-jan-2026.jpg",
    alt: "Participant at home, recognised and valued in their own space",
    caption: "Confidence and recognition",
  },
] as const;

const STRONG_FIT = [
  "Is 18–65 with physical disability or mild to moderate cognitive disability",
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

const STORY_OUTCOMES = [
  "Better routine",
  "Consistent support",
  "Confidence and independence",
  "Pride and identity",
] as const;

/** Factual identity cues from locked positioning — not new marketing claims */
const HERO_IDENTITY = [
  "Canberra & the ACT",
  "Boutique, relationship-led provider",
  "Engagement, routine, and familiar workers",
] as const;

const PROBLEM_INSIGHTS = [
  {
    id: "passive-routines",
    title: "Passive routines",
    summary: "Long stretches without structure can leave a day feeling empty.",
    detail:
      "Support may be available, but without meaningful activity or rhythm, hours can still pass without real engagement.",
  },
  {
    id: "changing-workers",
    title: "Changing workers",
    summary: "Frequent worker changes disrupt trust and routine.",
    detail:
      "Familiar support helps people feel safe. Starting over with someone new makes it harder to build that steadiness.",
  },
  {
    id: "feeling-managed",
    title: "Feeling managed, not seen",
    summary: "Support can feel like tasks and supervision, not being seen as a person.",
    detail:
      "When the focus stays on what needs doing, it is easier to miss who someone is and what they care about.",
  },
] as const;

export default function Home() {
  return (
    <div className="homepage">
      {/* 1. Hero — sage band, calm and open */}
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
            <ul className="home-hero__identity" aria-label="Who we are">
              {HERO_IDENTITY.map((item) => (
                <li key={item} className="home-hero__identity-item">
                  <span className="home-hero__identity-mark" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-lg leading-relaxed">
              We help people build confidence and pride through the activities, relationships,
              and routines that matter to them.
            </p>
            <div className="home-hero__actions mt-8">
              <Link href="/referral" className="btn-primary">
                Make a Referral
              </Link>
              <Link href="/consultation" className="btn-secondary">
                Book a Consultation
              </Link>
              <a
                href="tel:+61434740745"
                className="btn-ghost"
                aria-label="Call us on +61 434 740 745"
              >
                Call: +61 434 740 745
              </a>
            </div>
            <p className="mt-5 text-sm text-[var(--text-muted)]">
              If you&apos;re in crisis, call <strong>000</strong> or Lifeline{" "}
              <strong>13&nbsp;11&nbsp;14</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Problem — white surface */}
      <section
        aria-labelledby="problem-title"
        className="home-section home-section--surface home-band"
      >
        <h2 id="problem-title" className="h2 max-w-3xl">
          Support alone doesn&apos;t create a meaningful day
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-[var(--text-muted)]">
          Many participants receive support, but still experience days without enough
          engagement, continuity, or connection.
        </p>
        <ul className="home-insight-grid mt-8" role="list">
          {PROBLEM_INSIGHTS.map((item) => (
            <li key={item.id}>
              <article className="home-insight-card" aria-labelledby={`${item.id}-title`}>
                <h3 id={`${item.id}-title`} className="home-insight-card__title">
                  {item.title}
                </h3>
                <p className="home-insight-card__lede">{item.summary}</p>
                <details className="home-insight-card__details">
                  <summary className="home-insight-card__toggle">
                    <span className="sr-only">{item.title}: </span>
                    Read more
                  </summary>
                  <p className="home-insight-card__detail">{item.detail}</p>
                </details>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Our approach — warm light band */}
      <section
        aria-labelledby="approach-title"
        className="home-section home-section--approach home-band"
      >
        <div className="max-w-3xl">
          <h2 id="approach-title" className="h2">
            Our approach
          </h2>
          <blockquote className="home-pull-quote mt-6 text-balance">
            Support should not simply fill time.
            <br />
            It should help people build meaningful daily life.
          </blockquote>
          <ul className="home-approach-points mt-6" role="list">
            {APPROACH_POINTS.map((point) => (
              <li key={point.title} className="home-approach-point">
                <span className="home-approach-point__mark" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <p className="home-approach-point__title">{point.title}</p>
                  <p className="home-approach-point__line">{point.line}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="home-callout mt-6">
            We help people be recognised for what they build, learn, and contribute, not only for
            what they need support with.
          </p>
          <p className="mt-5">
            <a href="#how-support-works" className="home-depth-link">
              Here&apos;s how that works in practice ↓
            </a>
          </p>
        </div>
      </section>

      {/* 4. How support works — short slate intro, proof on light surface */}
      <section id="how-support-works" aria-labelledby="how-support-works-title">
        <div className="home-slate-intro home-band">
          <h2 id="how-support-works-title" className="h2 max-w-3xl">
            How support works here
          </h2>
          <p className="home-slate-intro__lead">
            The difference isn&apos;t one activity or one program. It&apos;s how support is
            designed from the beginning.
          </p>
        </div>
        <div className="home-slate-body home-band">
          <div className="home-support-model">
            {PROOF_GROUPS.map((group) => (
              <section
                key={group.id}
                className="home-support-group"
                aria-labelledby={`${group.id}-heading`}
              >
                <div className="home-support-group__header">
                  <h3 id={`${group.id}-heading`} className="home-support-group__title">
                    {group.title}
                  </h3>
                  {"subtitle" in group && group.subtitle && (
                    <p className="home-support-group__subtitle">{group.subtitle}</p>
                  )}
                </div>
                <ul
                  className={`home-support-list${
                    group.items.length === 3 ? " home-support-list--triple" : ""
                  }`}
                  role="list"
                >
                  {group.items.map((item, index) => (
                    <li key={item.title}>
                      <div
                        className={`home-support-row${
                          "emphasis" in item && item.emphasis ? " home-support-row--emphasis" : ""
                        }`}
                      >
                        <span className="home-support-row__mark" aria-hidden="true">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="home-support-row__content">
                          <h4 className="home-support-row__title">{item.title}</h4>
                          <p className="home-support-row__line">{item.line}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What meaningful support looks like — sage band */}
      <section
        aria-labelledby="meaningful-support-title"
        className="home-section home-section--sage home-band"
      >
        <h2 id="meaningful-support-title" className="h2 max-w-3xl">
          What meaningful support looks like
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-[var(--text-muted)]">
          Picture a week that feels purposeful, where support helps someone build a life they
          recognise as their own.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
          {MEANINGFUL_PILLARS.map((pillar) => (
            <article key={pillar.title} className="card home-pillar-card card--on-band">
              <div className="home-pillar-card__image">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <p className="home-pillar-card__caption">{pillar.caption}</p>
              </div>
              <div className="p-6">
                <h3 className="h3 text-xl md:text-xl">{pillar.title}</h3>
                <p className="mt-2 text-[var(--text-muted)]">{pillar.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 max-w-4xl">
          <h3 className="text-lg font-semibold">Group programs in action</h3>
          <p className="mt-2 text-[var(--text-muted)]">
            An example of the kind of community group activity we can help arrange or
            support when it suits a participant&apos;s interests and goals.
          </p>
          <div className="mt-5 mx-auto max-w-sm">
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
        <p className="mt-8">
          <Link href="/programs" className="home-depth-link">
            Explore our programs
          </Link>
        </p>
      </section>

      {/* 6. Who we're best for — white surface */}
      <section
        id="who-were-best-for"
        aria-labelledby="best-for-title"
        className="home-section home-section--surface home-band"
      >
        <h2 id="best-for-title" className="h2 max-w-3xl">
          Who we&apos;re best for
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-[var(--text-muted)]">
          The right fit matters for participants, families, and referrers alike.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="card card--on-band">
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
          <div className="card card--muted">
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
        <p className="mt-10 max-w-3xl text-lg leading-relaxed">
          We&apos;re honest about fit because the right match matters more than volume, and
          we&apos;ll gladly help you think through alternatives when we&apos;re not the right
          provider.
        </p>
        <p className="mt-5">
          <Link href="/about#who-were-best-for" className="home-depth-link">
            Learn more about who we&apos;re best for
          </Link>
        </p>
      </section>

      {/* 7. Stories — default stone page bg */}
      <section aria-labelledby="stories-title" className="home-section">
        <h2 id="stories-title" className="h2 max-w-3xl">
          Stories from participants and families
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-[var(--text-muted)]">
          Real experiences from people building routine, engagement, and a daily life they
          recognise as their own.
        </p>
        <div className="mt-10 max-w-4xl rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-card)] md:p-6">
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
        <p className="mt-10 text-lg font-medium">
          The outcomes people talk about most often:
        </p>
        <ul className="mt-4 flex flex-wrap gap-3" aria-label="Common outcome themes">
          {STORY_OUTCOMES.map((outcome) => (
            <li key={outcome} className="home-pill">
              {outcome}
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link href="/reviews" className="btn-secondary">
            Read more stories
          </Link>
        </p>
      </section>

      {/* 8. Referrers — sage CTA band */}
      <section aria-labelledby="referrers-title" className="home-section home-section--sage home-band">
        <div className="home-referrer-band max-w-3xl">
          <h2 id="referrers-title" className="h2">
            For support coordinators and referrers
          </h2>
          <p className="mt-4 text-lg">
            We work alongside coordinators and therapists, not around them.
          </p>
          <dl className="mt-6 space-y-5">
            <div>
              <dt className="font-semibold">You know who fits</dt>
              <dd className="mt-1 text-[var(--text-muted)]">
                Participants seeking engagement, routine, and consistent workers.{" "}
                <a href="#who-were-best-for" className="home-depth-link text-base">
                  see who we&apos;re best for above
                </a>
                .
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Goals are reinforced between appointments</dt>
              <dd className="mt-1 text-[var(--text-muted)]">
                Everyday activities can support mobility, independence, and confidence while
                complementing therapy and support plans.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Referrals stay collaborative</dt>
              <dd className="mt-1 text-[var(--text-muted)]">
                Regular updates and observations, so you&apos;re informed, not left wondering how
                things are going.
              </dd>
            </div>
          </dl>
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

      {/* 9. Service areas — white surface */}
      <section
        aria-labelledby="service-areas-title"
        className="home-section home-section--surface home-band"
      >
        <h2 id="service-areas-title" className="h2">
          Service areas
        </h2>
        <p className="mt-3 text-lg">We provide support throughout Canberra and the ACT.</p>
        <p className="mt-5 leading-relaxed text-[var(--text-muted)]">
          {SERVICE_AREAS.join(" · ")}
        </p>
        <p className="mt-5">
          <Link href="/services/canberra" className="home-depth-link text-base">
            More about our Canberra service areas
          </Link>
        </p>
      </section>

      {/* 10. Final conversion — sage band + elevated panel */}
      <section
        aria-labelledby="final-cta-title"
        className="home-section home-section--sage home-band pb-16 md:pb-20"
      >
        <div className="home-cta-panel">
          <p id="final-cta-title" className="max-w-3xl text-lg font-medium leading-relaxed md:text-xl">
            Meaningful daily life starts with the right support, the right relationships, and the
            right opportunities to stay engaged.
          </p>
          <div className="home-cta-panel__actions">
            <Link href="/referral" className="btn-primary">
              Make a Referral
            </Link>
            <Link href="/consultation" className="btn-secondary">
              Book a Consultation
            </Link>
            <a href="tel:+61434740745" className="btn-ghost" aria-label="Call us on +61 434 740 745">
              Call: +61 434 740 745
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
