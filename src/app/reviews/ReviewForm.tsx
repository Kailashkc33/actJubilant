"use client";

import { useEffect, useRef, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitReview, type ActionResult } from "../actions";

const initialState: ActionResult = { ok: false, errors: {} };

export default function ReviewForm() {
  const [state, formAction] = useActionState(submitReview, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) formRef.current?.reset();
  }, [state.ok]);

  return (
    <div className="card">
      <h2 id="share-experience-title" className="h2">
        Share your experience
      </h2>
      <p className="mt-2 text-[var(--text-muted)]">
        If you are a participant or family member, we would love to hear what support has meant
        for your routine, interests, and daily life.
      </p>

      {state.ok && (
        <div className="mt-4 rounded-lg border border-green-300 bg-green-50 p-4" role="status">
          {state.message}
        </div>
      )}

      <form ref={formRef} action={formAction} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
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

        <fieldset className="md:col-span-2">
          <legend className="block text-sm font-medium">
            Rating <span aria-hidden="true" className="text-red-700">*</span>
          </legend>
          <div
            className="mt-2 flex gap-2"
            role="radiogroup"
            aria-invalid={Boolean(state.errors?.rating)}
            aria-describedby={state.errors?.rating ? "rating-error" : undefined}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <label
                key={star}
                className="cursor-pointer rounded p-1 has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-[var(--focus)] has-[:focus-visible]:outline-offset-2"
              >
                <input
                  type="radio"
                  name="rating"
                  value={star}
                  required
                  className="sr-only peer"
                />
                <span
                  className="text-2xl text-gray-300 transition-colors hover:text-yellow-400 peer-checked:text-yellow-400"
                  aria-hidden="true"
                >
                  ★
                </span>
                <span className="sr-only">
                  {star} {star === 1 ? "star" : "stars"}
                </span>
              </label>
            ))}
          </div>
          {state.errors?.rating && (
            <p id="rating-error" className="mt-1 text-sm text-red-700" role="alert">
              {state.errors.rating}
            </p>
          )}
        </fieldset>

        <TextArea
          id="review"
          label="Your review"
          required
          hint="What changed in your routine, relationships, or daily life? Interests, activities, and familiar workers are especially helpful."
          error={state.errors?.review as string}
          className="md:col-span-2"
        />

        <div className="md:col-span-2">
          <label htmlFor="review-consent" className="inline-flex items-start gap-3">
            <input
              id="review-consent"
              type="checkbox"
              name="consent"
              required
              className="form-choice"
              aria-invalid={Boolean(state.errors?.consent)}
              aria-describedby={state.errors?.consent ? "review-consent-error" : "review-consent-hint"}
            />
            <span>
              I consent to this review being published on the ACT Jubilant website.{" "}
              <span aria-hidden="true" className="text-red-700">*</span>
              <span id="review-consent-hint" className="block text-sm text-[var(--text-muted)]">
                We may edit for length and clarity, but will preserve the meaning.
              </span>
            </span>
          </label>
          {state.errors?.consent && (
            <p id="review-consent-error" className="mt-1 text-sm text-red-700" role="alert">
              {state.errors.consent}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <SubmitButton>Submit Review</SubmitButton>
        </div>
      </form>
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
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  hint?: string;
  error?: string;
  className?: string;
}) {
  const { id, label, type = "text", required, hint, error, className } = props;
  const describedBy =
    [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium">
        {label} {required && <span aria-hidden="true" className="text-red-700">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className={`form-control ${error ? "border-red-500" : ""}`}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
      />
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-sm text-[var(--text-muted)]">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function TextArea(props: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  className?: string;
}) {
  const { id, label, required, hint, error, className } = props;
  const describedBy =
    [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium">
        {label} {required && <span aria-hidden="true" className="text-red-700">*</span>}
      </label>
      <textarea
        id={id}
        name={id}
        rows={5}
        required={required}
        className={`form-control ${error ? "border-red-500" : ""}`}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
      />
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-sm text-[var(--text-muted)]">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
