import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ACT Jubilant | Who We Are | Canberra NDIS Provider",
  description:
    "Boutique, relationship-led disability support in Canberra. Our story, leadership, values, and who we're best for.",
  alternates: {
    canonical: "/about",
  },
};

const PROBLEMS = [
  {
    title: "Boredom",
    body: "Long stretches of unstructured time, passive routines, and days without meaningful activity.",
  },
  {
    title: "Worker instability",
    body: "Frequent changes in support workers, making it harder to build trust and routine.",
  },
  {
    title: "Feeling managed, not seen",
    body: "Support that focuses on tasks and supervision rather than interests, goals, and identity.",
  },
] as const;

const VALUES = [
  { title: "Consistency", body: "We reduce unnecessary change so trust and routine can build." },
  { title: "Choice", body: "Participants shape activities and programs. Support follows their interests." },
  { title: "Creativity", body: "Growth happens through doing, making, learning, and participating." },
  { title: "Humility", body: "We know our limits and refer appropriately when we're not the right fit." },
  { title: "Community", body: "People thrive through connection, at home and in everyday places." },
  { title: "Empowerment", body: "Support should increase capability, not dependence." },
] as const;

const BEST_FOR = [
  "Want more than assistance",
  "Benefit from routine and familiar support workers",
  "Have hobbies, interests, or goals they'd like support built around",
  "Enjoy structured weekly engagement",
  "May be interested in small group environments",
  "Value relationship-based support over a high-volume provider model",
] as const;

const NOT_BEST_FOR = [
  "The primary goal is task completion or hours filled, without a focus on engagement, routine, or relationship-building",
  "Worker rotation is unavoidable and relationship continuity is not a priority",
  "Support is needed without a focus on interests, routine, or meaningful daily participation",
] as const;

const LEADERSHIP = [
  {
    name: "Nilima Singh",
    role: "Founder & Client Service Manager",
    image: "/images/team/Nilima.jpeg",
    alt: "Nilima Singh, Founder and Client Service Manager at ACT Jubilant",
  },
  {
    name: "Manish Gupta",
    role: "Managing Director",
    image: "/images/team/DSC_MANISHW-42.jpg",
    alt: "Manish Gupta, Managing Director at ACT Jubilant",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-opener-title" className="site-band site-section site-section--dawn">
        <div className="content-shell content-shell--home">
          <p className="section-kicker">About</p>
          <h1 id="about-opener-title" className="h1 text-balance">Who we are</h1>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            ACT Jubilant is a boutique disability support provider based in Canberra and the ACT.
          </p>
          <p className="mt-3 text-lg">
            We are built around participant engagement, meaningful routine, and relationship-based
            support, not volume, task lists, or constant worker rotation.
          </p>
          <p className="mt-6 text-lg font-medium leading-snug">
            We exist to help people with disability feel capable, engaged, and proud of what they
            create and achieve.
          </p>
          <figure className="media-figure media-figure--bordered mx-auto mt-8 max-w-3xl">
            <div className="media-figure__image aspect-[4/3]">
              <Image
                src="/images/stock/community-group-outdoors.jpg"
                alt="Illustrative photo of a diverse group outdoors, including a person in a wheelchair"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </figure>
        </div>
      </section>

      <section aria-labelledby="why-exist-title" className="site-band site-section site-section--cream">
        <div className="content-shell content-shell--home">
          <h2 id="why-exist-title" className="h2">Why ACT Jubilant exists</h2>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            After working directly with participants and families, we kept seeing the same three gaps.
          </p>
          <div className="mt-8 max-w-3xl space-y-6">
            {PROBLEMS.map((problem) => (
              <div key={problem.title} className="border-l-4 border-l-[var(--warm)] pl-5">
                <h3 className="text-lg font-semibold">{problem.title}</h3>
                <p className="mt-2 text-lg text-[var(--text-muted)]">{problem.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg">
            Many participants received support. Few experienced meaningful engagement. ACT Jubilant
            was created to close that gap.
          </p>
        </div>
      </section>

      <section aria-labelledby="founder-title" className="site-band site-section site-section--eucalyptus">
        <div className="content-shell content-shell--home">
          <h2 id="founder-title" className="h2">Founder-led from the start</h2>
          <p className="mt-2 text-lg font-semibold">Manish Gupta, Managing Director</p>
          <div className="mt-6 max-w-3xl space-y-4 text-lg text-[var(--text-muted)]">
            <p>
              Before founding ACT Jubilant, Manish built businesses in Nepal focused on employment,
              community rebuilding, and creating opportunity, including support following the Nepal
              earthquake. That experience shaped a belief: business should improve people&apos;s
              lives.
            </p>
            <p>
              After working directly with participants and families in disability support in Australia,
              Manish saw that engagement and consistency were often missing from delivery, even when
              hours were filled. ACT Jubilant was built to design support around interests, routine,
              and relationships from the beginning.
            </p>
            <p>
              Before workers are matched, Manish still takes time to understand each person&apos;s
              communication style, preferences, routine, and goals, so support teams start with
              context, not cold handovers.
            </p>
          </div>
          <h3 className="mt-10 text-lg font-semibold">Our leadership</h3>
          <div className="mx-auto mt-6 grid max-w-3xl gap-8 sm:grid-cols-2">
            {LEADERSHIP.map((person) => (
              <article key={person.name} className="media-card media-card--bordered overflow-hidden">
                <div className="media-card__image aspect-[4/5] bg-[color-mix(in_oklab,var(--bg)_90%,var(--text-muted))]">
                  <Image
                    src={person.image}
                    alt={person.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 384px"
                  />
                </div>
                <div className="media-card__body">
                  <h4 className="media-card__title">{person.name}</h4>
                  <p className="mt-1 font-medium text-[var(--primary-700)]">{person.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="values-title" className="site-band site-section site-section--surface">
        <div className="content-shell content-shell--home">
          <h2 id="values-title" className="h2">What we stand for</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => (
              <article key={value.title} className="card card--flat border-l-4 border-l-[var(--sage-mid)] pl-5">
                <h3 className="font-semibold">{value.title}</h3>
                <p className="mt-2 text-[var(--text-muted)]">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="who-were-best-for"
        aria-labelledby="best-for-title"
        className="site-band site-section site-section--dawn scroll-mt-[var(--header-offset)]"
      >
        <div className="content-shell content-shell--home">
          <p className="section-kicker">Fit guide</p>
          <h2 id="best-for-title" className="h2">Who we&apos;re best for</h2>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            The right fit matters for participants, families, and referrers alike.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <article className="card card--elevated h-full">
              <h3 className="h3 text-xl">A strong fit when the participant…</h3>
              <ul className="check-list mt-5 space-y-3">
                {BEST_FOR.map((item) => (
                  <li key={item} className="text-lg">
                    <span className="check-mark" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="card card--muted h-full">
              <h3 className="h3 text-xl">We may not be the best fit when…</h3>
              <ul className="mt-5 space-y-3">
                {NOT_BEST_FOR.map((item) => (
                  <li key={item} className="flex gap-3 text-lg">
                    <span className="mt-0.5 shrink-0 text-[var(--text-muted)]" aria-hidden="true">
                      ·
                    </span>
                    <span className="text-[var(--text-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/programs" className="text-link">Explore our programs</Link>
            <Link href="/programs#who-were-best-for" className="text-link">Full fit guide on the programs page</Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="team-title" className="site-band site-section site-section--eucalyptus">
        <div className="content-shell content-shell--home">
          <h2 id="team-title" className="h2">The people behind the support</h2>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            ACT Jubilant runs as a small, relationship-led team: familiar faces for participants,
            coordinators, and families.
          </p>
          <figure className="media-figure media-figure--bordered mt-8">
            <div className="media-figure__image aspect-[4/3]">
              <Image
                src="/images/team/event-group-photo-dec-2025.png"
                alt="ACT Jubilant team and participants at a December 2025 group event"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
            <figcaption className="media-figure__caption">
              The same faces, week after week
            </figcaption>
          </figure>
          <p className="mt-6 text-[var(--text-muted)]">
            For photos, examples, and what a real week can look like:
          </p>
          <p className="mt-3">
            <Link href="/programs" className="text-link">Explore our programs</Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="final-cta-title" className="site-band site-section site-section--surface">
        <div className="content-shell content-shell--home">
          <div className="cta-panel text-center md:text-left">
            <p id="final-cta-title" className="text-lg md:text-xl font-medium leading-relaxed">
              Meaningful daily life starts with the right support, the right relationships, and the
              right opportunities to stay engaged.
            </p>
            <div className="cta-panel__actions justify-center md:justify-start">
              <Link href="/referral" className="btn-primary">Make a Referral</Link>
              <Link href="/consultation" className="btn-secondary">Book a Consultation</Link>
              <a href="tel:+61424488439" className="btn-ghost" aria-label="Call us on +61 424 488 439">
                Call: +61 424 488 439
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
