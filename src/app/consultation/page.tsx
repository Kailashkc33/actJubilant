"use client";

import Link from "next/link";
import { useEffect, useRef, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitConsultation, type ActionResult } from "../actions";

const initialState: ActionResult = { ok: false, errors: {} };

export default function ConsultationPage() {
  const [state, formAction] = useActionState(submitConsultation, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) formRef.current?.reset();
  }, [state.ok]);

  return (
    <div className="content-shell content-shell--reading">
      <section aria-labelledby="consultation-form-title" className="py-6 md:py-8">
        <h1 id="consultation-form-title" className="h2 text-balance">
          Book a Consultation
        </h1>
        <p className="content-measure mt-3 text-lg text-[var(--text-muted)]">
          For participants, families, and anyone exploring fit. Tell us a good time to chat and
          we&apos;ll confirm by phone or email.
        </p>

        <div className="card mt-6">
          <p className="text-sm text-[var(--text-muted)]">Fields marked with * are required.</p>

          {state.ok && (
            <div className="mt-4 rounded-lg border border-green-300 bg-green-50 p-4" role="status">
              {state.message}
            </div>
          )}

          <form ref={formRef} action={formAction} className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" />
            </div>

            <Field id="fullName" label="Full name" required error={state.errors?.fullName as string} />
            <Field id="email" label="Email" type="email" required error={state.errors?.email as string} />
            <Field id="phone" label="Phone" type="tel" required error={state.errors?.phone as string} />

            <Field
              id="preferredDate"
              label="Preferred date"
              type="date"
              required
              error={state.errors?.preferredDate as string}
            />
            <Field
              id="preferredTime"
              label="Preferred time"
              type="time"
              required
              error={state.errors?.preferredTime as string}
            />

            <div>
              <label htmlFor="mode" className="block text-sm font-medium">
                Consultation mode
              </label>
              <select id="mode" name="mode" className="form-control">
                <option value="phone">Phone</option>
                <option value="video">Video</option>
                <option value="in-person">In-person (Canberra)</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium">
                What would you like to discuss?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="form-control"
                aria-invalid={Boolean(state.errors?.message)}
                aria-describedby={state.errors?.message ? "message-error" : undefined}
              />
              {state.errors?.message && (
                <p id="message-error" className="mt-1 text-sm text-red-700" role="alert">
                  {state.errors.message as string}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <SubmitButton>Request Consultation</SubmitButton>
            </div>
          </form>
        </div>
      </section>

      <section
        aria-labelledby="consultation-depth-title"
        className="py-6 md:py-8 border-t border-gray-100"
      >
        <h2 id="consultation-depth-title" className="text-lg font-semibold">
          Want more detail before you book?
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-[var(--text-muted)]">
          <li>
            <Link href="/programs" className="home-depth-link">
              Explore our programs
            </Link>
            {" "}
            · what support looks like in practice
          </li>
          <li>
            <Link href="/about#who-were-best-for" className="home-depth-link">
              See who we&apos;re best for
            </Link>
          </li>
          <li>
            <Link href="/referral" className="home-depth-link">
              Make a referral
            </Link>
            {" "}
            · if you are ready to refer a participant
          </li>
        </ul>
      </section>

      <section aria-labelledby="consultation-cta-title" className="py-8 md:py-10 border-t border-gray-100">
        <div className="card card--muted text-center md:text-left">
          <p id="consultation-cta-title" className="text-lg font-medium leading-relaxed">
            Prefer to talk now? Call us and we can help you decide on next steps.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a href="tel:+61424488439" className="btn-primary" aria-label="Call us on +61 424 488 439">
              Call: +61 424 488 439
            </a>
            <Link href="/referral" className="btn-secondary">
              Make a Referral
            </Link>
          </div>
        </div>
      </section>
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

function Field(props: { id: string; label: string; type?: string; required?: boolean; error?: string }) {
  const { id, label, type = "text", required, error } = props;
  return (
    <div>
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
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
