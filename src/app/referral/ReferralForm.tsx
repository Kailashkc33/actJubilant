"use client";

import { useEffect, useRef, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitReferral, type ActionResult } from "../actions";

const initialState: ActionResult = { ok: false, errors: {} };

export default function ReferralForm() {
  const [state, formAction] = useActionState(submitReferral, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) formRef.current?.reset();
  }, [state.ok]);

  return (
    <div className="card">
      <h2 id="referral-form-title" className="h2">
        Referral form
      </h2>
      <p className="mt-2 text-[var(--text-muted)]">
        You can refer yourself or someone else. Fields marked with * are required.
      </p>

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {state.message}
      </div>

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
          id="fullName"
          label="Full name"
          required
          error={state.errors?.fullName as string}
        />
        <Field id="preferredName" label="Preferred name" />

        <Field
          id="email"
          label="Email"
          type="email"
          required
          error={state.errors?.email as string}
        />
        <Field
          id="phone"
          label="Phone"
          type="tel"
          required
          error={state.errors?.phone as string}
        />

        <Field
          id="relationship"
          label="Who are you referring?"
          required
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
          hint="e.g. daily living and personal activities, community participation, social and group supports, transport, respite, skill development, support coordination, high intensity personal activities"
          error={state.errors?.supports as string}
          className="md:col-span-2"
        />

        <TextArea
          id="notes"
          label="Anything else you'd like us to know?"
          className="md:col-span-2"
        />

        <label htmlFor="referral-consent" className="md:col-span-2 inline-flex items-start gap-2">
          <input
            id="referral-consent"
            type="checkbox"
            name="consent"
            required
            aria-invalid={Boolean(state.errors?.consent)}
            aria-describedby={
              state.errors?.consent ? "referral-consent-error" : "referral-consent-hint"
            }
          />
          <span>
            I have consent from the participant (or I am the participant) to share this
            information with ACT Jubilant.{" "}
            <span aria-hidden="true" className="text-red-700">*</span>
            <span id="referral-consent-hint" className="block text-sm text-[var(--text-muted)]">
              We respect your privacy and handle information securely.
            </span>
          </span>
        </label>
        {state.errors?.consent && (
          <p id="referral-consent-error" className="text-red-700 md:col-span-2" role="alert">
            {state.errors.consent as string}
          </p>
        )}

        <div className="md:col-span-2">
          <SubmitButton>Submit Referral</SubmitButton>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            We&apos;ll respond within 1–2 business days.
          </p>
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
