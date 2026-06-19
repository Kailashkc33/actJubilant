import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SelfHostedVideo from "@/components/SelfHostedVideo";

export const metadata: Metadata = {
  title: "Programs & Activities | Meaningful Daily Life Support | ACT Jubilant",
  description:
    "See what participant-driven support looks like in Canberra: interest-led activities, small groups, community outings, and consistent routines built around real life.",
  alternates: {
    canonical: "/programs",
  },
};

const PROGRAM_TIMELINE = [
  {
    step: "Listen & understand",
    line: "We take time to understand interests, communication style, routines, goals, therapy recommendations, and what matters to their family before anything is scheduled.",
  },
  {
    step: "Design",
    line: "Structured support is built around them, at home and in the community, around the rhythm of a real week.",
  },
  {
    step: "Run consistently",
    line: "The same familiar workers show up, week after week, so trust and routine can actually build.",
  },
] as const;

const ONE_ON_ONE_LEAD = [
  {
    title: "Relationship",
    body: "Workers who know the person: how they communicate, what they enjoy, what matters to them, and what helps them feel at ease.",
  },
  {
    title: "Routine",
    body: "A week with rhythm, familiar activities, regular outings, and days that feel intentional rather than empty.",
  },
  {
    title: "Familiar workers",
    body: "Less time adjusting to new faces. More time building trust, continuity, and a support relationship that actually lasts.",
  },
] as const;

const ONE_ON_ONE_SUPPORTING = [
  {
    title: "Activities at home",
    body: "Interests reflected in the person's own space, whether that's a project, a hobby, a daily ritual, or simply a home environment that feels like theirs.",
  },
  {
    title: "Community outings",
    body: "The same workers in everyday places (cafés, local venues, events, and time with friends), not just escort to appointments.",
  },
  {
    title: "Therapy reinforcement",
    body: "Everyday activities can reinforce goals between appointments: mobility, independence, and confidence built through the rhythm of a real week.",
  },
  {
    title: "Trust in the details",
    body: "Favourite places, personal routines, small gestures that show someone's preferences are remembered. Support that feels genuinely personal.",
  },
] as const;

const SMALL_GROUP_MEDIA = [
  {
    type: "image" as const,
    src: "/images/team/event-group-photo-dec-2025.png",
    alt: "ACT Jubilant team and participants at a December 2025 group event",
    caption: "The same faces, week after week",
  },
  {
    type: "image" as const,
    src: "/images/gallery/art-workshop-group-feb-2026.jpg",
    alt: "ACT Jubilant participant at a group art workshop with paints and supplies",
    caption: "Shared experiences that build connection",
  },
  {
    type: "image" as const,
    src: "/images/gallery/restaurant-group-meal-dec-2025.jpg",
    alt: "Group sharing a meal together at a restaurant, including a participant in a wheelchair",
    caption: "Connected in everyday places",
  },
  {
    type: "video" as const,
    srcMp4: "/videos/community-dance-class-event-sep-2025-portrait.mp4",
    poster: "/images/gallery/dance-class-event-poster-portrait.jpg",
    title: "A group that feels familiar",
    description:
      "Movement, routine, and participation, with familiar support workers and participants in the same group.",
    caption: "Staying engaged together",
  },
] as const;

const INTEREST_TILES = [
  {
    title: "Café outings & local venues",
    outcome: "Connection in everyday community spaces",
    image: "/images/gallery/community-cafe-outing-nov-2025.jpg",
    alt: "ACT Jubilant support worker and participant sharing a café outing together",
  },
  {
    title: "Community events & celebrations",
    outcome: "Shared experiences that matter",
    image: "/images/gallery/birthday-celebration-restaurant-jan-2026.jpg",
    alt: "ACT Jubilant birthday celebration at a restaurant with support worker and family",
  },
  {
    title: "Social time with friends",
    outcome: "Belonging, not just supervision",
    image: "/images/gallery/restaurant-group-meal-dec-2025.jpg",
    alt: "Group sharing a meal together at a restaurant with friends and support",
  },
  {
    title: "Transport & community access",
    outcome: "Getting out into the community with the right support",
    image: "/images/gallery/wheelchair-outdoor-outing-nov-2025.jpg",
    alt: "Support workers accompanying participants on an outdoor wheelchair outing",
  },
  {
    title: "Art & creative workshops",
    outcome: "Pride in what they make",
    image: "/images/gallery/art-workshop-group-feb-2026.jpg",
    alt: "ACT Jubilant participant at a group art workshop with paints and supplies",
  },
  {
    title: "Cooking at home or in group",
    outcome: "Independence and confidence in the kitchen",
    image: "/images/stock/accessible-kitchen-cooking.jpg",
    alt: "Illustrative photo of a person in a wheelchair and a support worker cooking together in an accessible kitchen",
  },
  {
    title: "Gardening",
    outcome: "Routine, mobility, and something to care for",
    image: "/images/gallery/participant-home-flowers-jan-2026.jpg",
    alt: "ACT Jubilant participant at home with flowers, cared for in their own space",
  },
  {
    title: "Woodworking & hands-on hobbies",
    outcome: "Skill, focus, and recognition for what they build",
    image: "/images/stock/participant-partnership-handshake.jpg",
    alt: "Illustrative photo of a support worker and participant sharing a moment of partnership",
  },
  {
    title: "Learning something new",
    outcome: "Growth that builds identity",
    image: "/images/stock/learning-together-tablet.jpg",
    alt: "Illustrative photo of a support worker and participant learning together with a tablet",
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

const JUMP_LINKS = [
  { href: "#how-programs-built", label: "How it works" },
  { href: "#small-groups", label: "Small groups" },
  { href: "#interests", label: "Interests" },
  { href: "#fit-guide", label: "Fit" },
] as const;

export default function ProgramsPage() {
  return (
    <>
      {/* 1. Hero */}
      <section aria-labelledby="programs-opener-title" className="site-band site-section site-section--dawn">
        <div className="content-shell content-shell--home">
          <div className="home-hero__grid grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <figure className="media-figure media-figure--bordered order-1 md:order-2">
              <div className="media-figure__image aspect-[4/3]">
                <Image
                  src="/images/stock/programs-community-run.jpg"
                  alt="ACT Jubilant team and participants at a community run, including a participant in a wheelchair"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </figure>
            <div className="order-2 max-w-xl md:order-1">
              <p className="section-kicker">Programs</p>
              <h1 id="programs-opener-title" className="h1 text-balance">
                What support looks like in real life
              </h1>
              <p className="home-hero__lead mt-4 md:mt-5">
                Programs aren&apos;t chosen from a standard catalogue. They&apos;re shaped around each
                person&apos;s interests, routine, and goals, then run consistently by familiar support
                workers — here&apos;s what that can look like week to week in Canberra.
              </p>
            </div>
          </div>
          <nav className="programs-jump-nav mt-8" aria-label="On this page">
            <ul className="programs-jump-nav__list">
              {JUMP_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="btn-chip">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* 2. How programs are built */}
      <section
        id="how-programs-built"
        aria-labelledby="programs-built-title"
        className="site-band site-section site-section--cream"
      >
        <div className="content-shell content-shell--home">
          <p className="section-kicker">Our approach</p>
          <h2 id="programs-built-title" className="h2 text-balance">
            How programs are built
          </h2>
          <p className="content-measure mt-4 text-lg md:text-xl font-medium leading-snug">
            The activity matters less than how support is designed. We start with the person, not a
            pre-set program list.
          </p>
          <ol className="step-list mt-10">
            {PROGRAM_TIMELINE.map((item) => (
              <li key={item.step} className="step-list__item">
                <article className="step-card h-full">
                  <h3 className="step-card__label">{item.step}</h3>
                  <p className="step-card__line">{item.line}</p>
                </article>
              </li>
            ))}
          </ol>

          <p className="mt-12 text-lg font-medium">
            Much of meaningful daily life happens one-on-one — the same familiar workers, building
            trust and routine over time.
          </p>
          <div className="program-focus-grid mt-8 grid gap-6 md:grid-cols-3">
            {ONE_ON_ONE_LEAD.map((theme) => (
              <article key={theme.title} className="card program-focus-card h-full">
                <h3 className="text-lg font-semibold">{theme.title}</h3>
                <p className="mt-2 text-[var(--text-muted)]">{theme.body}</p>
              </article>
            ))}
          </div>

          <ul className="check-list mt-10 grid gap-3 sm:grid-cols-2">
            {ONE_ON_ONE_SUPPORTING.map((item) => (
              <li key={item.title}>
                <span className="check-mark" aria-hidden="true">✓</span>
                <span>
                  <strong>{item.title}.</strong> {item.body}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-[var(--text-muted)]">
            Personal and daily living support is part of NDIS delivery where funded, always in service
            of engagement and routine, not as passive task coverage.
          </p>

          <aside className="home-callout mt-8" aria-labelledby="ndis-bridge-title">
            <h3 id="ndis-bridge-title" className="font-semibold">
              Looking for NDIS service categories?
            </h3>
            <p className="mt-2 text-[var(--text-muted)]">
              This page focuses on what support feels like in practice.{" "}
              <Link href="/services/canberra" className="text-link">
                View NDIS services in Canberra
              </Link>
            </p>
          </aside>

          <p className="mt-8 text-sm text-[var(--text-muted)]">
            Want a fuller picture of participant life?{" "}
            <Link href="/" className="text-link">
              See what support looks like on the homepage
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 3. Small groups */}
      <section
        id="small-groups"
        aria-labelledby="small-groups-title"
        className="site-band site-section site-section--eucalyptus"
      >
        <div className="content-shell content-shell--home">
          <p className="section-kicker">Group programs</p>
          <h2 id="small-groups-title" className="h2">
            Small group programs
          </h2>
          <p className="mt-4 text-lg font-medium">
            Group programs stay around six participants, designed for connection, not crowd
            management.
          </p>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            Participants join the same small group each week, structured gatherings where people know
            each other, build routine together, and stay engaged in shared experiences.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {SMALL_GROUP_MEDIA.map((item) => (
              <figure key={item.caption} className="media-card media-card--bordered h-full">
                {item.type === "image" ? (
                  <div className="media-card__image aspect-[4/3]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 36rem"
                    />
                  </div>
                ) : (
                  <div className="media-card__image aspect-[3/4] bg-[var(--sand-deep)]">
                    <SelfHostedVideo
                      srcMp4={item.srcMp4}
                      title={item.title}
                      description={item.description}
                      poster={item.poster}
                      aspect="3/4"
                      objectFit="contain"
                      minimalChrome
                    />
                  </div>
                )}
                <figcaption className="media-card__body flex min-h-16 items-center">
                  <span className="media-card__line">{item.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interest examples */}
      <section
        id="interests"
        aria-labelledby="interests-title"
        className="site-band site-section site-section--sky"
      >
        <div className="content-shell content-shell--home">
          <p className="section-kicker">Examples</p>
          <h2 id="interests-title" className="h2">
            Built around interests, not a fixed menu
          </h2>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            Every participant&apos;s program looks different. These are real examples of how interests
            become structured support.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INTEREST_TILES.map((tile) => (
              <article key={tile.title} className="media-card media-card--bordered h-full">
                <div className="media-card__image aspect-[4/3]">
                  <Image
                    src={tile.image}
                    alt={tile.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="media-card__body flex flex-1 flex-col">
                  <h3 className="media-card__title">{tile.title}</h3>
                  <p className="media-card__line">{tile.outcome}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-lg font-medium">
            Don&apos;t see your participant&apos;s interest here? That&apos;s the point: programs
            start with them, not this list.
          </p>
        </div>
      </section>

      {/* 5. Fit + CTA */}
      <section
        id="fit-guide"
        aria-labelledby="fit-reminder-title"
        className="site-band site-section site-section--compact site-section--cream"
      >
        <div className="content-shell content-shell--home">
          <p className="section-kicker">Fit guide</p>
          <h2 id="fit-reminder-title" className="h2">
            Who we&apos;re best for
          </h2>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            The right fit matters for participants, families, and referrers alike.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="card card--elevated">
              <h3 className="h3 text-xl">A strong fit when the participant…</h3>
              <ul className="check-list mt-5 space-y-3">
                {STRONG_FIT.map((item) => (
                  <li key={item}>
                    <span className="check-mark" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="h3 mt-8 text-xl">Families and referrers often value…</h3>
              <ul className="check-list mt-5 space-y-3">
                {FAMILY_VALUES.map((item) => (
                  <li key={item}>
                    <span className="check-mark" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card card--muted">
              <h3 className="h3 text-xl">We may not be the best fit when…</h3>
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

          <div className="home-referrer-band mt-12" aria-labelledby="programs-cta-title">
            <p className="section-kicker section-kicker--on-dark">Get started</p>
            <h2 id="programs-cta-title" className="h2">
              Meaningful daily life starts with the right support
            </h2>
            <p className="mt-3 text-[var(--text-muted)]">
              The right relationships and the right opportunities to stay engaged — for participants,
              families, and referrers.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
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
            <p className="mt-3 text-sm text-[var(--text-muted)]">
              We&apos;ll respond to referrals within 1–2 business days.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
