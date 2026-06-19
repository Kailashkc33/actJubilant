"use client";

import { useEffect, useRef, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitConsultation, type ActionResult } from "../app/actions";

const initialState: ActionResult = { ok: false, errors: {} };

type ConsultationFormProps = {
  idPrefix?: string;
  className?: string;
  submitLabel?: string;
};

export default function ConsultationForm({
  idPrefix = "consultation",
  className = "",
  submitLabel = "Request Consultation",
}: ConsultationFormProps) {
  const [state, formAction] = useActionState(submitConsultation, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) formRef.current?.reset();
  }, [state.ok]);

  return (
    <div className={`card card--elevated ${className}`}>
      <p className="text-sm text-[var(--text-muted)]">Fields marked with * are required.</p>

      {state.ok && (
        <div className="mt-4 form-success" role="status">
          {state.message}
        </div>
      )}

      <form ref={formRef} action={formAction} className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="hidden" aria-hidden="true">
          <label htmlFor={`${idPrefix}-website`}>Website</label>
          <input id={`${idPrefix}-website`} name="website" type="text" />
        </div>

        <Field
          idPrefix={idPrefix}
          name="fullName"
          label="Full name"
          required
          error={state.errors?.fullName as string}
        />
        <Field
          idPrefix={idPrefix}
          name="email"
          label="Email"
          type="email"
          required
          error={state.errors?.email as string}
        />
        <Field
          idPrefix={idPrefix}
          name="phone"
          label="Phone"
          type="tel"
          required
          error={state.errors?.phone as string}
        />
        <Field
          idPrefix={idPrefix}
          name="preferredDate"
          label="Preferred date"
          type="date"
          required
          error={state.errors?.preferredDate as string}
        />
        <Field
          idPrefix={idPrefix}
          name="preferredTime"
          label="Preferred time"
          type="time"
          required
          error={state.errors?.preferredTime as string}
        />

        <div>
          <label htmlFor={`${idPrefix}-mode`} className="block text-sm font-medium">
            Consultation mode
          </label>
          <select id={`${idPrefix}-mode`} name="mode" className="form-control">
            <option value="phone">Phone</option>
            <option value="video">Video</option>
            <option value="in-person">In-person (Canberra)</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor={`${idPrefix}-message`} className="block text-sm font-medium">
            What would you like to discuss?
          </label>
          <textarea
            id={`${idPrefix}-message`}
            name="message"
            rows={4}
            className="form-control"
            aria-invalid={Boolean(state.errors?.message)}
            aria-describedby={state.errors?.message ? `${idPrefix}-message-error` : undefined}
          />
          {state.errors?.message && (
            <p id={`${idPrefix}-message-error`} className="mt-1 text-sm text-red-700" role="alert">
              {state.errors.message as string}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <SubmitButton>{submitLabel}</SubmitButton>
        </div>
      </form>
    </div>
  );
}

function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn-primary" disabled={pending} aria-busy={pending}>
      {pending ? "Submitting..." : children}
    </button>
  );
}

function Field(props: {
  idPrefix: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  const { idPrefix, name, label, type = "text", required, error } = props;
  const id = `${idPrefix}-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label} {required && <span aria-hidden="true" className="text-red-700">*</span>}
      </label>
      <input
        id={id}
        name={name}
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
