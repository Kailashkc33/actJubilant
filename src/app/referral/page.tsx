"use client";

import { useEffect, useRef, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitReferral, type ActionResult } from "../actions";

const initialState: ActionResult = { ok: false, errors: {} };

export default function ReferralPage() {
  const [state, formAction] = useActionState(submitReferral, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) formRef.current?.reset();
  }, [state.ok]);

  return (
    <section className="py-10 md:py-14">
      <div className="card">
        <h1 className="h2">Make a Referral</h1>
        <p className="mt-2">
          You can refer yourself or someone else. We’ll get back to you within 1–2 business days.
        </p>

        {/* Live region for status */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">{state.message}</div>

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
            id="fullName"
            label="Full name"
            required
            error={state.errors?.fullName as string}
          />
          <Field id="preferredName" label="Preferred name" />

          <Field id="email" label="Email" type="email" required error={state.errors?.email as string} />
          <Field id="phone" label="Phone" type="tel" required error={state.errors?.phone as string} />

          <Field id="relationship" label="Who are you referring?" required
            hint="e.g., Self, Family, Guardian, Support Coordinator"
            error={state.errors?.relationship as string}
          />

          <Field id="address" label="Address" className="md:col-span-1" />
          <Field id="ndisNumber" label="NDIS number (optional)" />

          <Field id="dob" label="Date of birth" type="date" />

          <Field id="primaryLanguage" label="Primary language" />
          <div className="md:col-span-1">
            <fieldset>
              <legend className="block text-sm font-medium">Interpreter needed?</legend>
              <div className="mt-2 flex gap-4">
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="interpreter" value="no" defaultChecked /> No
                </label>
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="interpreter" value="yes" /> Yes
                </label>
              </div>
            </fieldset>
          </div>

          <TextArea
            id="supports"
            label="What supports are you looking for?"
            required
            hint="Daily living, community access, group programs, transport, etc."
            error={state.errors?.supports as string}
            className="md:col-span-2"
          />

          <TextArea id="notes" label="Anything else you’d like us to know?" className="md:col-span-2" />

          <label className="md:col-span-2 inline-flex items-start gap-2">
            <input type="checkbox" name="consent" />
            <span>
              I have consent from the participant (or I am the participant) to share this information with ACT Jubilant.
              <span className="block text-sm text-[var(--text-muted)]">We respect your privacy and handle information securely.</span>
            </span>
          </label>
          {state.errors?.consent && (
            <p className="text-red-700 md:col-span-2" role="alert">{state.errors.consent as string}</p>
          )}

          <div className="md:col-span-2">
            <SubmitButton>Submit Referral</SubmitButton>
          </div>
        </form>
      </div>
    </section>
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