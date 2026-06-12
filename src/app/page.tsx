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
    cards: [
      {
        title: "Participant-led matching",
        body: "Participants help choose who supports them through introductions, trial shifts, and their own feedback.",
      },
      {
        title: "Consistent support teams",
        body: "We intentionally build stable support teams so participants can spend less time adjusting to new faces and more time building trust.",
      },
      {
        title: "Participant-driven activities",
        body: "Programs are shaped around each person's interests and hobbies, not pulled from a standard catalogue.",
      },
    ],
  },
  {
    id: "supporting-long-term-goals",
    title: "Supporting long-term goals",
    subtitle: "This works alongside plans and therapy.",
    cards: [
      {
        title: "Therapy reinforced through daily activities",
        body: "Everyday activities can reinforce goals like mobility, independence, and confidence between therapy appointments.",
      },
    ],
  },
  {
    id: "support-that-stays-personal",
    title: "Support that stays personal",
    subtitle: "Support built on knowing the person first.",
    cards: [
      {
        title: "Founder-led onboarding",
        body: "Before workers are matched, our founder takes time to understand each person's communication style, preferences, routine, and goals.",
        highlight: true,
      },
      {
        title: "Coordinator communication",
        body: "We keep coordinators informed through regular updates and observations, so referrals remain collaborative rather than disconnected.",
      },
      {
        title: "Small structured groups",
        body: "Group programs stay around six participants, designed for connection, not crowd management.",
      },
    ],
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

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section aria-labelledby="hero-title" className="py-10 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1
              id="hero-title"
              className="text-balance text-3xl md:text-5xl font-bold leading-tight"
            >
              Meaningful daily life, built around your interests
            </h1>
            <p className="mt-3 text-xl text-[var(--text-muted)]">
              Structured, relationship-based support in Canberra for participants who benefit
              from engagement, routine, and familiar support workers.
            </p>
            <p className="mt-6 text-lg">
              We help people build confidence and pride through the activities, relationships,
              and routines that matter to them.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
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
            <p className="mt-4 text-sm text-[var(--text-muted)]">
              If you&apos;re in crisis, call <strong>000</strong> or Lifeline{" "}
              <strong>13&nbsp;11&nbsp;14</strong>.
            </p>
          </div>
          <ImageCarousel
            images={[...HERO_CAROUSEL]}
            autoPlay
            autoPlayInterval={4000}
            showDots
            showArrows
          />
        </div>
      </section>

      {/* 2. Problem */}
      <section aria-labelledby="problem-title" className="py-8 md:py-12">
        <h2 id="problem-title" className="h2">
          Support alone doesn&apos;t create a meaningful day
        </h2>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          Many participants receive support, but still experience days without enough
          engagement, continuity, or connection.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <article className="card">
            <h3 className="h3">Passive routines</h3>
            <p className="mt-2">
              Long stretches of unstructured time can leave a day feeling empty, even when
              support is available.
            </p>
          </article>
          <article className="card">
            <h3 className="h3">Changing workers</h3>
            <p className="mt-2">
              When support workers change often, it&apos;s harder to build the trust and routine
              that make support feel safe and familiar.
            </p>
          </article>
          <article className="card">
            <h3 className="h3">Feeling managed, not seen</h3>
            <p className="mt-2">
              Support can start to feel like tasks and supervision, rather than being understood
              for who you are and what you care about.
            </p>
          </article>
        </div>
      </section>

      {/* 3. Our approach */}
      <section aria-labelledby="approach-title" className="py-8 md:py-12">
        <h2 id="approach-title" className="h2">
          Our approach
        </h2>
        <blockquote className="mt-6 text-xl md:text-2xl font-semibold leading-snug text-balance">
          Support should not simply fill time.
          <br />
          It should help people build meaningful daily life.
        </blockquote>
        <div className="mt-6 space-y-4 text-lg">
          <p>
            We structure support around interests, hobbies, routine, and relationships, at home
            and in the community.
          </p>
          <p>
            Workers do more than accompany participants. They actively engage people in activities
            that build confidence, connection, and pride.
          </p>
        </div>
        <p className="mt-8 rounded-2xl border-l-4 border-[var(--primary-600)] bg-[var(--surface)] p-6 text-lg font-medium shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
          We help people be recognised for what they build, learn, and contribute, not only for
          what they need support with.
        </p>
        <p className="mt-6 text-lg text-[var(--text-muted)]">
          We&apos;re built around engagement and consistency, not task lists and constant changes.
        </p>
        <p className="mt-4">
          <a
            href="#how-support-works"
            className="font-semibold text-[var(--primary-600)] underline decoration-2 underline-offset-4"
          >
            Here&apos;s how that works in practice ↓
          </a>
        </p>
      </section>

      {/* 4. How support works here */}
      <section
        id="how-support-works"
        aria-labelledby="how-support-works-title"
        className="py-8 md:py-14"
      >
        <h2 id="how-support-works-title" className="h2">
          How support works here
        </h2>
        <p className="mt-4 text-lg md:text-xl font-medium leading-snug">
          The difference isn&apos;t one activity or one program.
          <br />
          It&apos;s how support is designed from the beginning.
        </p>
        <div className="mt-10 space-y-10">
          {PROOF_GROUPS.map((group) => (
            <div key={group.id}>
              <div className="mb-4 border-b border-gray-100 pb-3">
                <h3 className="text-lg md:text-xl font-medium text-[var(--text-muted)]">
                  {group.title}
                </h3>
                {"subtitle" in group && group.subtitle && (
                  <p className="mt-1 text-base text-[var(--text-muted)]">{group.subtitle}</p>
                )}
              </div>
              <div
                className={`grid gap-6 ${
                  group.cards.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
                }`}
              >
                {group.cards.map((card) => (
                  <article
                    key={card.title}
                    className={`card h-full ${
                      "highlight" in card && card.highlight
                        ? "border border-[color-mix(in_oklab,var(--primary-600)_22%,transparent)] bg-[color-mix(in_oklab,var(--primary-600)_5%,var(--surface))]"
                        : ""
                    }`}
                  >
                    <h4 className="text-lg font-semibold">{card.title}</h4>
                    <p className="mt-2 text-[var(--text-muted)]">{card.body}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. What meaningful support looks like */}
      <section aria-labelledby="meaningful-support-title" className="py-8 md:py-12">
        <h2 id="meaningful-support-title" className="h2">
          What meaningful support looks like
        </h2>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          Picture a week that feels purposeful, where support helps someone build a life they
          recognise as their own.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {MEANINGFUL_PILLARS.map((pillar) => (
            <article key={pillar.title} className="card overflow-hidden p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  className="object-cover"
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
        <div className="mt-10 max-w-4xl">
          <h3 className="text-lg font-semibold">Group programs in action</h3>
          <p className="mt-2 text-[var(--text-muted)]">
            A community dance class with participants and support workers in ACT Jubilant
            shirts, staying engaged together.
          </p>
          <div className="mt-4 mx-auto max-w-sm">
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
        <p className="mt-6">
          <Link href="/programs" className="font-semibold text-[var(--primary-600)] underline decoration-2 underline-offset-4">
            Explore our programs
          </Link>
        </p>
      </section>

      {/* 6. Who we're best for */}
      <section
        id="who-were-best-for"
        aria-labelledby="best-for-title"
        className="py-8 md:py-12"
      >
        <h2 id="best-for-title" className="h2">
          Who we&apos;re best for
        </h2>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          The right fit matters for participants, families, and referrers alike.
        </p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="card">
            <h3 className="h3">A strong fit when the participant…</h3>
            <ul className="mt-4 space-y-3">
              {STRONG_FIT.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 text-[var(--primary-600)]" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="h3 mt-8">Families and referrers often value…</h3>
            <ul className="mt-4 space-y-3">
              {FAMILY_VALUES.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 text-[var(--primary-600)]" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card border border-gray-200 bg-[color-mix(in_oklab,var(--bg)_92%,var(--text-muted))]">
            <h3 className="h3">We may not be the best fit when…</h3>
            <ul className="mt-4 space-y-3">
              {HONEST_BOUNDARIES.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 text-[var(--text-muted)]" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-[var(--text-muted)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 text-lg">
          We&apos;re honest about fit because the right match matters more than volume, and
          we&apos;ll gladly help you think through alternatives when we&apos;re not the right
          provider.
        </p>
      </section>

      {/* 7. Stories from participants and families */}
      <section aria-labelledby="stories-title" className="py-8 md:py-12">
        <h2 id="stories-title" className="h2">
          Stories from participants and families
        </h2>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          Real experiences from people building routine, engagement, and a daily life they
          recognise as their own.
        </p>
        <div className="mt-8 max-w-4xl">
          <SelfHostedVideo
            srcMp4="/videos/testimonial2.mp4"
            title="Building a routine that feels meaningful"
            description="Hear how structured support around interests and routine helps someone stay engaged in the life they're building."
            poster="/images/testimonials/thumbnail.png"
          />
        </div>
        <p className="mt-8 text-lg font-medium">
          The outcomes people talk about most often:
        </p>
        <ul className="mt-4 flex flex-wrap gap-3" aria-label="Common outcome themes">
          {STORY_OUTCOMES.map((outcome) => (
            <li
              key={outcome}
              className="rounded-full border border-[var(--primary-600)] px-4 py-2 text-sm font-medium text-[var(--primary-700)]"
            >
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

      {/* 8. For support coordinators and referrers */}
      <section aria-labelledby="referrers-title" className="py-8 md:py-10">
        <div className="card max-w-3xl">
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
                <a href="#who-were-best-for" className="text-[var(--primary-600)] underline underline-offset-2">
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

      {/* 9. Service areas */}
      <section aria-labelledby="service-areas-title" className="py-8 md:py-10">
        <h2 id="service-areas-title" className="h2">
          Service areas
        </h2>
        <p className="mt-2">We provide support throughout Canberra and the ACT.</p>
        <p className="mt-4 text-[var(--text-muted)]">
          {SERVICE_AREAS.join(" · ")}
        </p>
        <p className="mt-4">
          <Link href="/services/canberra" className="text-sm text-[var(--primary-600)] underline underline-offset-2">
            More about our Canberra service areas
          </Link>
        </p>
      </section>

      {/* 10. Final conversion */}
      <section aria-labelledby="final-cta-title" className="py-10 md:py-14">
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
