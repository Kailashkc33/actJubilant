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

const PROGRAM_BEATS = [
  {
    title: "Listen",
    body: "We take time to understand interests, communication style, and what a good day actually feels like for that person.",
  },
  {
    title: "Understand",
    body: "We learn their routine, goals, therapy recommendations, and what matters to their family before anything is scheduled.",
  },
  {
    title: "Design",
    body: "Structured support is built around them, at home and in the community, around the rhythm of a real week.",
  },
  {
    title: "Run consistently",
    body: "The same familiar workers show up, week after week, so trust and routine can actually build.",
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
    src: "/images/gallery/birthday-celebration-restaurant-jan-2026.jpg",
    alt: "ACT Jubilant birthday celebration at a restaurant with support worker and family",
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

const MEANINGFUL_PILLARS = [
  {
    title: "Hobbies & interests",
    body: "Someone who takes pride in what they create and pursue, whether that's gardening, art, cooking, or an interest that's uniquely their own.",
    image: "/images/stock/participant-enjoying-music.jpg",
    alt: "Illustrative photo of a person with headphones enjoying a creative activity",
    caption: "Pride in what they create",
  },
  {
    title: "Routine & structure",
    body: "Someone whose week has a rhythm they can count on, with familiar activities, regular outings, and days that feel intentional rather than empty.",
    image: "/images/stock/outdoor-group-walk.jpg",
    alt: "Illustrative photo of a small group on an outdoor walk, including people using wheelchairs",
    caption: "A week with rhythm and purpose",
  },
  {
    title: "Community participation",
    body: "Someone who belongs in everyday places, catching up with friends, visiting local venues, and staying connected to community life.",
    image: "/images/stock/community-group-outdoors.jpg",
    alt: "Illustrative photo of a diverse group relaxing outdoors, including a person in a wheelchair",
    caption: "Belonging in everyday places",
  },
  {
    title: "Skill & identity building",
    body: "Someone growing in confidence and recognised for what they learn, build, and contribute, not only for what they need help with.",
    image: "/images/gallery/participant-home-flowers-jan-2026.jpg",
    alt: "ACT Jubilant participant at home, recognised and valued in their own space",
    caption: "Confidence and recognition",
  },
] as const;

const INTEREST_PHOTO_TILES = [
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
    image: "/images/stock/accessible-kitchen-cooking.jpg",
    alt: "Illustrative photo of a person in a wheelchair and a support worker cooking together in an accessible kitchen",
  },
] as const;

const INTEREST_TEXT_TILES = [
  { title: "Art & creative workshops", outcome: "Pride in what they make" },
  { title: "Cooking at home or in group", outcome: "Independence and confidence in the kitchen" },
  { title: "Gardening", outcome: "Routine, mobility, and something to care for" },
  { title: "Woodworking & hands-on hobbies", outcome: "Skill, focus, and recognition for what they build" },
  { title: "Learning something new", outcome: "Growth that builds identity" },
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

const ONE_ON_ONE_MEDIA = [
  {
    src: "/images/stock/accessible-transport-minivan.jpg",
    alt: "Wheelchair accessible minivan with rear ramp deployed in a parking area",
    caption: "Getting out into the community with the right support",
    large: true,
  },
  {
    src: "/images/gallery/community-cafe-outing-nov-2025.jpg",
    alt: "ACT Jubilant support worker and participant sharing a café outing together",
    caption: "The same familiar faces, in everyday places",
    large: false,
  },
  {
    src: "/images/gallery/participant-home-flowers-jan-2026.jpg",
    alt: "ACT Jubilant participant at home, recognised and valued in their own space",
    caption: "Support that fits the person, at home and in the community",
    large: false,
  },
] as const;

const FIT_REMINDER = [
  "Wants engagement and routine, not only tasks or hours filled",
  "Has interests, hobbies, or goals they'd like support built around",
  "Does better with familiar support workers than constant change",
  "Would benefit from small group settings (around six people)",
] as const;

export default function ProgramsPage() {
  return (
    <>
      {/* 1. Page opener */}
      <section aria-labelledby="programs-opener-title" className="py-8 md:py-12">
        <h1 id="programs-opener-title" className="h2 text-balance">
          What support looks like in real life
        </h1>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          Programs aren&apos;t chosen from a standard catalogue. They&apos;re shaped around each
          person&apos;s interests, routine, and goals, then run consistently by familiar support
          workers.
        </p>
        <p className="mt-3 text-lg">
          Here&apos;s what that can look like week to week in Canberra.
        </p>
        <figure className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border border-gray-100">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/stock/programs-community-run.jpg"
              alt="ACT Jubilant team and participants at a community run, including a participant in a wheelchair"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </figure>
      </section>

      {/* 2. Programs start with the person, page hero */}
      <section
        aria-labelledby="programs-start-title"
        className="py-8 md:py-14 border-t border-gray-100"
      >
        <h2 id="programs-start-title" className="h2 text-balance">
          Programs start with the person
        </h2>
        <p className="mt-4 text-lg md:text-xl font-medium leading-snug">
          The activity matters less than how support is designed. We start with the person, not a
          pre-set program list.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {PROGRAM_BEATS.map((beat) => (
            <article
              key={beat.title}
              className="card h-full border border-[color-mix(in_oklab,var(--primary-600)_18%,transparent)] bg-[color-mix(in_oklab,var(--primary-600)_4%,var(--surface))]"
            >
              <h3 className="text-lg font-semibold">{beat.title}</h3>
              <p className="mt-2 text-[var(--text-muted)]">{beat.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-lg text-[var(--text-muted)]">
          That&apos;s how a person&apos;s interests become a real weekly rhythm ↓
        </p>
      </section>

      {/* 3. Small group programs */}
      <section
        aria-labelledby="small-groups-title"
        className="py-8 md:py-12 border-t border-gray-100"
      >
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
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {SMALL_GROUP_MEDIA.map((item, index) => (
            <figure
              key={index}
              className={`card overflow-hidden p-0 ${
                item.type === "video"
                  ? "lg:col-span-4"
                  : index === 0
                    ? "lg:col-span-6"
                    : "lg:col-span-3"
              }`}
            >
              {item.type === "image" ? (
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover object-center"
                    sizes={
                      index === 0
                        ? "(max-width: 1024px) 100vw, 50vw"
                        : "(max-width: 1024px) 50vw, 25vw"
                    }
                  />
                </div>
              ) : (
                <div className="mx-auto max-w-xs lg:max-w-none">
                  <SelfHostedVideo
                    srcMp4={item.srcMp4}
                    title={item.title}
                    description={item.description}
                    poster={item.poster}
                    aspect="9/16"
                    objectFit="cover"
                    minimalChrome
                  />
                </div>
              )}
              <figcaption className="p-4 text-sm font-medium text-[var(--text-muted)]">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 4. Four pillars in practice */}
      <section
        aria-labelledby="pillars-title"
        className="py-8 md:py-12 border-t border-gray-100"
      >
        <h2 id="pillars-title" className="h2">
          A week that feels purposeful
        </h2>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          Picture a week where support helps someone build a life they recognise as their own.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {MEANINGFUL_PILLARS.map((pillar) => (
            <article key={pillar.title} className="card overflow-hidden p-0">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white">
                  {pillar.caption}
                </p>
              </div>
              <div className="p-6">
                <h3 className="h3">{pillar.title}</h3>
                <p className="mt-2 text-[var(--text-muted)]">{pillar.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Built around interests */}
      <section
        aria-labelledby="interests-title"
        className="py-8 md:py-12 border-t border-gray-100"
      >
        <h2 id="interests-title" className="h2">
          Built around interests, not a fixed menu
        </h2>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          Every participant&apos;s program looks different. These are real examples of how interests
          become structured support.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {INTEREST_PHOTO_TILES.map((tile) => (
            <article key={tile.title} className="card overflow-hidden p-0">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={tile.image}
                  alt={tile.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="text-lg font-semibold leading-snug">{tile.title}</h3>
                  <p className="mt-2 text-sm font-medium text-white/90">{tile.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 rounded-2xl border border-gray-100 bg-gray-50/80 p-4 md:p-5">
          {INTEREST_TEXT_TILES.map((tile) => (
            <li
              key={tile.title}
              className="border-l-2 border-gray-200 pl-3 py-1 text-sm text-[var(--text-muted)]"
            >
              <span className="font-medium text-[var(--text)]">{tile.title}</span>
              <span className="mt-0.5 block text-xs">{tile.outcome}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-lg font-medium">
          Don&apos;t see your participant&apos;s interest here? That&apos;s the point: programs
          start with them, not this list.
        </p>
      </section>

      {/* 6. Consistent one-on-one support */}
      <section
        aria-labelledby="one-on-one-title"
        className="py-8 md:py-14 border-t border-gray-100"
      >
        <h2 id="one-on-one-title" className="h2">
          Consistent one-on-one support
        </h2>
        <p className="mt-4 text-lg md:text-xl font-medium leading-snug">
          Much of meaningful daily life happens one-on-one, the same familiar workers, building
          trust and routine over time.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ONE_ON_ONE_LEAD.map((theme) => (
            <article key={theme.title} className="card h-full">
              <h3 className="text-lg font-semibold">{theme.title}</h3>
              <p className="mt-2 text-[var(--text-muted)]">{theme.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {ONE_ON_ONE_MEDIA.map((photo, index) => (
            <figure
              key={photo.src}
              className={`card overflow-hidden p-0 ${photo.large ? "lg:col-span-6" : "lg:col-span-3"}`}
            >
                <div className={`relative w-full ${photo.large ? "aspect-[3/2]" : "aspect-[4/3]"}`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover object-center"
                  sizes={photo.large ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <figcaption className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white">
                  {photo.caption}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
        <dl className="mt-10 grid gap-6 md:grid-cols-2">
          {ONE_ON_ONE_SUPPORTING.map((item) => (
            <div key={item.title}>
              <dt className="font-semibold">{item.title}</dt>
              <dd className="mt-1 text-[var(--text-muted)]">{item.body}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-sm text-[var(--text-muted)]">
          Personal and daily living support is part of NDIS delivery where funded, always in service
          of engagement and routine, not as passive task coverage.
        </p>
      </section>

      {/* 7. NDIS bridge */}
      <section
        aria-labelledby="ndis-bridge-title"
        className="py-8 md:py-10 border-t border-gray-100"
      >
        <h2 id="ndis-bridge-title" className="text-xl font-semibold">
          Looking for NDIS service categories?
        </h2>
        <p className="mt-3 text-[var(--text-muted)]">
          This page focuses on what support feels like in practice.
        </p>
        <p className="mt-3">
          <Link
            href="/services/canberra"
            className="font-semibold text-[var(--primary-600)] underline decoration-2 underline-offset-4"
          >
            View NDIS services in Canberra
          </Link>
        </p>
      </section>

      {/* 8. Fit reminder */}
      <section
        aria-labelledby="fit-reminder-title"
        className="py-8 md:py-10 border-t border-gray-100"
      >
        <h2 id="fit-reminder-title" className="h2">
          Who this works best for
        </h2>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          The right fit matters for participants, families, and referrers alike.
        </p>
        <p className="mt-4 font-semibold">Strong fit when the participant…</p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-[var(--text-muted)]">
          {FIT_REMINDER.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-6">
          <Link
            href="/#who-were-best-for"
            className="font-semibold text-[var(--primary-600)] underline decoration-2 underline-offset-4"
          >
            See full fit guide
          </Link>
        </p>
      </section>

      {/* 9. Final conversion */}
      <section aria-labelledby="final-cta-title" className="py-10 md:py-14 border-t border-gray-100">
        <div className="card text-center md:text-left">
          <p id="final-cta-title" className="text-lg md:text-xl font-medium leading-relaxed">
            Meaningful daily life starts with the right support, the right relationships, and the
            right opportunities to stay engaged.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
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
    </>
  );
}
