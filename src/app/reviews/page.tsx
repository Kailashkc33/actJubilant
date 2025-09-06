"use client";

import { useEffect, useRef, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitReview, type ActionResult } from "../actions";
import SelfHostedVideo from "../../components/SelfHostedVideo";

const initialState: ActionResult = { ok: false, errors: {} };

export default function ReviewsPage() {
  const [state, formAction] = useActionState(submitReview, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) formRef.current?.reset();
  }, [state.ok]);

  return (
    <div className="py-10">
      <h1 className="h2">Reviews & Testimonials</h1>
      <p className="mt-4 text-lg">
        Hear from our participants and families about their experiences with ACT Jubilant.
      </p>

      {/* Video Testimonial */}
      <div className="mt-8">
        <h2 className="h3 mb-4">Client Testimonial Video</h2>
        <SelfHostedVideo
          srcMp4="/videos/testimonial2.mp4"
          title="Client Testimonial - ACT Jubilant NDIS Services"
          description="Hear directly from our clients about their experience with our disability support services in Canberra"
          poster="/images/testimonials/thumbnail.png"
        />
      </div>

      {/* Review submission form */}
      <div className="mt-8 card">
        <h2 className="h3">Share Your Experience</h2>
        <p className="mt-2">
          We'd love to hear about your experience with ACT Jubilant. Your feedback helps us improve and helps others make informed decisions.
        </p>

        {state.ok && (
          <div className="mt-4 rounded-lg border border-green-300 bg-green-50 p-4" role="status">
            {state.message}
          </div>
        )}

        <form ref={formRef} action={formAction} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" autoComplete="off" />
          </div>

          <Field
            id="name"
            label="Your name (first name only)"
            required
            error={state.errors?.name as string}
          />
          <Field
            id="relationship"
            label="Your relationship"
            required
            hint="e.g., Participant, Parent, Family Member"
            error={state.errors?.relationship as string}
          />

          <div className="md:col-span-2">
            <label htmlFor="rating" className="block text-sm font-medium">
              Rating <span aria-hidden="true" className="text-red-700">*</span>
            </label>
            <div className="mt-2 flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <label key={star} className="cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value={star}
                    required
                    className="sr-only peer"
                  />
                  <span className="text-2xl text-gray-300 hover:text-yellow-400 peer-checked:text-yellow-400 transition-colors">
                    ★
                  </span>
                </label>
              ))}
            </div>
            {state.errors?.rating && (
              <p className="mt-1 text-sm text-red-700" role="alert">{state.errors.rating}</p>
            )}
          </div>

          <TextArea
            id="review"
            label="Your review"
            required
            hint="Tell us about your experience with ACT Jubilant"
            error={state.errors?.review as string}
            className="md:col-span-2"
          />

          <div className="md:col-span-2">
            <label className="inline-flex items-start gap-2">
              <input type="checkbox" name="consent" required />
              <span>
                I consent to this review being published on the ACT Jubilant website.
                <span className="block text-sm text-[var(--text-muted)]">
                  We may edit for length and clarity, but will preserve the meaning.
                </span>
              </span>
            </label>
            {state.errors?.consent && (
              <p className="mt-1 text-sm text-red-700" role="alert">{state.errors.consent}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <SubmitButton>Submit Review</SubmitButton>
          </div>
        </form>
      </div>

      {/* All reviews */}
      <div className="mt-12">
        <h2 className="h3">All Reviews</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="card">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400" aria-hidden="true">★</span>
                ))}
                {[...Array(5 - review.rating)].map((_, i) => (
                  <span key={i} className="text-gray-300" aria-hidden="true">★</span>
                ))}
              </div>
              <blockquote className="text-lg">
                "{review.text}"
              </blockquote>
              <cite className="mt-3 block text-sm text-[var(--text-muted)]">
                — {review.name}, {review.relationship}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn-primary" disabled={pending} aria-busy={pending}>
      {pending ? "Submitting…" : children}
    </button>
  );
}

function Field(props: {
  id: string; label: string; type?: string; required?: boolean; hint?: string; error?: string; className?: string;
}) {
  const { id, label, type = "text", required, hint, error, className } = props;
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium">
        {label} {required && <span aria-hidden="true" className="text-red-700">*</span>}
      </label>
      <input id={id} name={id} type={type} required={required}
        className={`mt-2 w-full rounded-xl border px-3 py-3 ${error ? "border-red-500" : "border-gray-300"} focus:outline-none`}
        aria-invalid={Boolean(error)}
        aria-describedby={hint ? `${id}-hint` : undefined}
      />
      {hint && <p id={`${id}-hint`} className="mt-1 text-sm text-[var(--text-muted)]">{hint}</p>}
      {error && <p className="mt-1 text-sm text-red-700" role="alert">{error}</p>}
    </div>
  );
}

function TextArea(props: {
  id: string; label: string; required?: boolean; hint?: string; error?: string; className?: string;
}) {
  const { id, label, required, hint, error, className } = props;
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium">
        {label} {required && <span aria-hidden="true" className="text-red-700">*</span>}
      </label>
      <textarea id={id} name={id} rows={5} required={required}
        className={`mt-2 w-full rounded-xl border px-3 py-3 ${error ? "border-red-500" : "border-gray-300"} focus:outline-none`}
        aria-invalid={Boolean(error)}
        aria-describedby={hint ? `${id}-hint` : undefined}
      />
      {hint && <p id={`${id}-hint`} className="mt-1 text-sm text-[var(--text-muted)]">{hint}</p>}
      {error && <p className="mt-1 text-sm text-red-700" role="alert">{error}</p>}
    </div>
  );
}

// Sample reviews data
const reviews = [
  {
    rating: 5,
    text: "ACT Jubilant has been amazing. My support worker really understands my needs and helps me achieve my goals. I feel respected and supported every step of the way.",
    name: "Sarah M.",
    relationship: "Participant"
  },
  {
    rating: 5,
    text: "The team at ACT Jubilant helped my son build confidence and independence. Their group programs are fantastic and the staff are so caring and professional.",
    name: "Jennifer L.",
    relationship: "Parent"
  },
  {
    rating: 5,
    text: "I love how flexible they are with scheduling. They really listen to what I want to do and help me make it happen. Highly recommend!",
    name: "Michael R.",
    relationship: "Participant"
  },
  {
    rating: 5,
    text: "The community access support has been life-changing. I can now go shopping and attend events with confidence. The staff are patient and understanding.",
    name: "Emma T.",
    relationship: "Participant"
  },
  {
    rating: 5,
    text: "As a parent, I was worried about finding the right support for my daughter. ACT Jubilant exceeded our expectations. They truly care about each participant.",
    name: "David K.",
    relationship: "Parent"
  },
  {
    rating: 5,
    text: "The life skills program has helped me become more independent. I've learned cooking, budgeting, and communication skills that I use every day.",
    name: "Alex P.",
    relationship: "Participant"
  },
  {
    rating: 5,
    text: "Professional, reliable, and genuinely caring. My support worker has become like family. I couldn't ask for better service.",
    name: "Lisa W.",
    relationship: "Participant"
  },
  {
    rating: 5,
    text: "The group activities are so much fun! I've made new friends and learned new skills. The staff make everyone feel welcome and included.",
    name: "Tom H.",
    relationship: "Participant"
  },
  {
    rating: 5,
    text: "ACT Jubilant has helped my family navigate the NDIS system. They're knowledgeable, patient, and always put the participant first.",
    name: "Maria S.",
    relationship: "Family Member"
  }
];
