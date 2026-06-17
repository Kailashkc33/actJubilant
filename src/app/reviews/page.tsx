import type { Metadata } from "next";
import Link from "next/link";
import SelfHostedVideo from "@/components/SelfHostedVideo";
import ReviewForm from "./ReviewForm";

export const metadata: Metadata = {
  title: "Stories & Reviews | ACT Jubilant Canberra",
  description:
    "Real experiences from participants and families building routine, engagement, and meaningful daily life with ACT Jubilant in Canberra.",
  alternates: {
    canonical: "/reviews",
  },
};

const OUTCOME_THEMES = [
  "Better routine",
  "Consistent support",
  "Confidence and independence",
  "Pride and identity",
] as const;

const EXEMPLAR_REVIEWS = [
  {
    theme: "Better routine",
    text: "My week has a shape now, with regular activities, familiar faces, and days that don't just drift by.",
    name: "Jonnathan",
    relationship: "Participant",
  },
  {
    theme: "Consistent support",
    text: "Having the same support workers means I don't have to start over every time. They know me, and I trust them.",
    name: "Robbin",
    relationship: "Participant",
  },
  {
    theme: "Pride and identity",
    text: "I'm proud of what I do and what I've learned. People see me for that, not just my disability.",
    name: "Priya",
    relationship: "Participant",
  },
  {
    theme: "Community participation",
    text: "As her advocate, I see how getting out to local places with familiar support has made community outings part of her week, not a one-off.",
    name: "Ishika",
    relationship: "Advocate",
  },
  {
    theme: "Meaningful activities",
    text: "Group outings and shared activities give the people I support a regular rhythm and people they look forward to seeing each week.",
    name: "Rajesh",
    relationship: "Support Worker",
  },
] as const;

export default function ReviewsPage() {
  return (
    <>
      <section aria-labelledby="reviews-opener-title" className="site-band site-section site-section--dawn">
        <div className="content-shell content-shell--home">
          <p className="section-kicker">Stories</p>
          <h1 id="reviews-opener-title" className="h1 text-balance">
            Stories from participants and families
          </h1>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            Real experiences from people building routine, engagement, and a daily life they
            recognise as their own.
          </p>
        </div>
      </section>

      <section aria-labelledby="video-story-title" className="site-band site-section site-section--cream">
        <div className="content-shell content-shell--home">
          <h2 id="video-story-title" className="h2">Building a routine that feels meaningful</h2>
          <p className="mt-2 text-[var(--text-muted)]">
            Hear how structured support around interests and routine helps someone stay engaged in
            the life they&apos;re building.
          </p>
          <div className="mt-6 max-w-3xl">
            <SelfHostedVideo
              srcMp4="/videos/testimonial2.mp4"
              title="Building a routine that feels meaningful"
              description="Hear how structured support around interests and routine helps someone stay engaged in the life they're building."
              poster="/images/testimonials/thumbnail.jpg"
              minimalChrome
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="outcome-themes-title" className="site-band site-section site-section--eucalyptus">
        <div className="content-shell content-shell--home">
          <h2 id="outcome-themes-title" className="text-lg font-medium">
            The outcomes people talk about most often:
          </h2>
          <ul className="mt-4 flex flex-wrap gap-3" aria-label="Common outcome themes">
            {OUTCOME_THEMES.map((outcome) => (
              <li key={outcome} className="home-pill">{outcome}</li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="written-stories-title" className="site-band site-section site-section--surface">
        <div className="content-shell content-shell--home">
          <h2 id="written-stories-title" className="h2">What people share</h2>
          <p className="mt-4 text-[var(--text-muted)]">
            Stories grouped by the outcomes participants and families mention most often.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {EXEMPLAR_REVIEWS.map((review) => (
              <figure key={review.theme} className="card card--warm h-full">
                <p className="section-kicker mb-2">{review.theme}</p>
                <blockquote className="text-lg leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm text-[var(--text-muted)]">
                  {review.name}, {review.relationship}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-sm text-[var(--text-muted)]">
            Want to understand fit before referring?{" "}
            <Link href="/programs#who-were-best-for" className="text-link">See who we&apos;re best for</Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="share-experience-title" className="site-band site-section site-section--dawn">
        <div className="content-shell content-shell--home">
          <ReviewForm />
        </div>
      </section>

      <section aria-labelledby="reviews-cta-title" className="site-band site-section site-section--eucalyptus">
        <div className="content-shell content-shell--home">
          <div className="cta-panel text-center md:text-left">
            <p id="reviews-cta-title" className="text-lg md:text-xl font-medium leading-relaxed">
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
