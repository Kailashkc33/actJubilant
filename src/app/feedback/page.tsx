"use client";

import { useEffect, useRef, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitFeedback, type ActionResult } from "../actions";

const initialState: ActionResult = { ok: false, errors: {} };

export default function FeedbackPage() {
  const [state, formAction] = useActionState(submitFeedback, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) formRef.current?.reset();
  }, [state.ok]);

  return (
    <div className="py-10">
      <h1 className="h2">Feedback & Complaints</h1>
      <p className="mt-4 text-lg">
        We value your feedback and are committed to continuous improvement. 
        Your input helps us provide better services.
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {/* Feedback Form */}
        <div className="card">
          <h2 className="h3">Share Your Feedback</h2>
          <p className="mt-2">
            Tell us about your experience with ACT Jubilant. We appreciate 
            both positive feedback and suggestions for improvement.
          </p>

          {state.ok && (
            <div className="mt-4 rounded-lg border border-green-300 bg-green-50 p-4" role="status">
              {state.message}
            </div>
          )}

          <form ref={formRef} action={formAction} className="mt-6 space-y-4">
            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" autoComplete="off" />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Your name <span aria-hidden="true" className="text-red-700">*</span>
              </label>
              <input 
                id="name" 
                name="name" 
                type="text" 
                required
                className="mt-2 w-full rounded-xl border border-gray-300 px-3 py-3 focus:outline-none"
                aria-invalid={Boolean(state.errors?.name)}
              />
              {state.errors?.name && (
                <p className="mt-1 text-sm text-red-700" role="alert">{state.errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email address <span aria-hidden="true" className="text-red-700">*</span>
              </label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required
                className="mt-2 w-full rounded-xl border border-gray-300 px-3 py-3 focus:outline-none"
                aria-invalid={Boolean(state.errors?.email)}
              />
              {state.errors?.email && (
                <p className="mt-1 text-sm text-red-700" role="alert">{state.errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium">
                Type of feedback <span aria-hidden="true" className="text-red-700">*</span>
              </label>
              <select 
                id="type" 
                name="type" 
                required
                className="mt-2 w-full rounded-xl border border-gray-300 px-3 py-3 focus:outline-none"
              >
                <option value="">Please select...</option>
                <option value="compliment">Compliment</option>
                <option value="suggestion">Suggestion for improvement</option>
                <option value="complaint">Complaint</option>
                <option value="other">Other</option>
              </select>
              {state.errors?.type && (
                <p className="mt-1 text-sm text-red-700" role="alert">{state.errors.type}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Your message <span aria-hidden="true" className="text-red-700">*</span>
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows={6} 
                required
                className="mt-2 w-full rounded-xl border border-gray-300 px-3 py-3 focus:outline-none"
                aria-invalid={Boolean(state.errors?.message)}
                placeholder="Please provide details about your feedback..."
              />
              {state.errors?.message && (
                <p className="mt-1 text-sm text-red-700" role="alert">{state.errors.message}</p>
              )}
            </div>

            <div>
              <label className="inline-flex items-start gap-2">
                <input type="checkbox" name="consent" required />
                <span>
                  I consent to ACT Jubilant using this feedback to improve our services.
                  <span className="block text-sm text-muted-800">
                    We may contact you for follow-up if needed.
                  </span>
                </span>
              </label>
              {state.errors?.consent && (
                <p className="mt-1 text-sm text-red-700" role="alert">{state.errors.consent}</p>
              )}
            </div>

            <div>
              <SubmitButton>Submit Feedback</SubmitButton>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="card">
            <h2 className="h3">Other Ways to Contact Us</h2>
            <div className="mt-4 space-y-3">
              <div>
                <strong>Phone:</strong> 0424 488 439
              </div>
              <div>
                <strong>Email:</strong> feedback@actjubilant.com.au
              </div>
              <div>
                <strong>Post:</strong><br />
                ACT Jubilant<br />
                Canberra, ACT
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="h3">Our Commitment</h2>
            <ul className="mt-3 space-y-2">
              <li>• We respond to all feedback within 2 business days</li>
              <li>• Complaints are handled confidentially and fairly</li>
              <li>• We use feedback to improve our services</li>
              <li>• You can remain anonymous if preferred</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="h3">External Support</h2>
            <p className="mt-2">
              If you're not satisfied with our response, you can contact:
            </p>
            <ul className="mt-3 space-y-2">
              <li>• <strong>NDIS Quality and Safeguards Commission:</strong> 1800 035 544</li>
              <li>• <strong>NDIS Commission:</strong> 1800 800 110</li>
              <li>• <strong>Disability Advocacy Service:</strong> 1800 620 588</li>
            </ul>
          </div>
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