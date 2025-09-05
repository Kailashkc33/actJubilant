"use client";

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
    <section className="py-10 md:py-14">
      <div className="card">
        <h1 className="h2">Book a Consultation</h1>
        <p className="mt-2">Tell us a good time to chat. We’ll confirm by phone or email.</p>

        {state.ok && (
          <div className="mt-4 rounded-lg border border-green-300 bg-green-50 p-4" role="status">
            {state.message}
          </div>
        )}

        <form ref={formRef} action={formAction} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" />
          </div>

          <Field id="fullName" label="Full name" required error={state.errors?.fullName as string} />
          <Field id="email" label="Email" type="email" required error={state.errors?.email as string} />
          <Field id="phone" label="Phone" type="tel" required error={state.errors?.phone as string} />

          <Field id="preferredDate" label="Preferred date" type="date" required error={state.errors?.preferredDate as string} />
          <Field id="preferredTime" label="Preferred time" type="time" required error={state.errors?.preferredTime as string} />

          <div>
            <label htmlFor="mode" className="block text-sm font-medium">Consultation mode</label>
            <select id="mode" name="mode" className="mt-2 w-full rounded-xl border border-gray-300 px-3 py-3">
              <option value="phone">Phone</option>
              <option value="video">Video</option>
              <option value="in-person">In-person (Canberra)</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium">What would you like to discuss?</label>
            <textarea id="message" name="message" rows={5} className="mt-2 w-full rounded-xl border border-gray-300 px-3 py-3" />
          </div>

          <div className="md:col-span-2">
            <SubmitButton>Request Consultation</SubmitButton>
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

function Field(props: { id: string; label: string; type?: string; required?: boolean; error?: string }) {
  const { id, label, type = "text", required, error } = props;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label} {required && <span aria-hidden="true" className="text-red-700">*</span>}
      </label>
      <input id={id} name={id} type={type} required={required}
        className={`mt-2 w-full rounded-xl border px-3 py-3 ${error ? "border-red-500" : "border-gray-300"} focus:outline-none`}
        aria-invalid={Boolean(error)}
      />
      {error && <p className="mt-1 text-sm text-red-700" role="alert">{error}</p>}
    </div>
  );
}