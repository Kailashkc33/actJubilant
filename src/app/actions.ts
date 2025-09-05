"use server";

import { Resend } from "resend";

/* -------------------------------------------
   Helpers & validation
-------------------------------------------- */

function required(v?: string) {
  return v && v.trim().length > 0 ? null : "This field is required.";
}
function isEmail(v?: string) {
  if (!v) return "This field is required.";
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  return ok ? null : "Enter a valid email.";
}
function isPhoneAU(v?: string) {
  if (!v) return "This field is required.";
  const ok = /^(\+61|0)[\d\s]{8,13}$/.test(v.trim());
  return ok ? null : "Enter a valid phone (AU).";
}
function maxLen(v: string | undefined, n: number) {
  if (!v) return null;
  return v.trim().length <= n ? null : `Please keep under ${n} characters.`;
}

export type ActionResult = {
  ok: boolean;
  message?: string;
  errors?: Record<string, string | null>;
};

/* -------------------------------------------
   Resend setup (prod only)
-------------------------------------------- */

const resendKey = process.env.RESEND_API_KEY;
const resend = resendKey ? new Resend(resendKey) : null;

// SUGGESTED: set FROM to website@actjubilant.com.au in env; using admin@ fallback is okay too
const FROM = process.env.RESEND_FROM || "admin@actjubilant.com.au";
// Single admin inbox for everything:
const TO = process.env.RESEND_TO || "admin@actjubilant.com.au";

/**
 * Sends an email via Resend in production; logs in development.
 * Throws on API errors so callers can show a friendly message.
 */
async function sendMail({
  to,
  subject,
  replyTo,
  html,
  text,
}: {
  to: string | string[];
  subject: string;
  replyTo?: string;
  html: string;
  text: string;
}) {
  // Log the email for debugging
  console.info("[DEV email]", { to, subject, replyTo, text });
  
  // Send real emails if Resend is configured
  if (!resend) {
    console.warn("Resend not configured - email not sent");
    return;
  }
  const result = await resend.emails.send({
    from: FROM,
    to,
    subject,
    replyTo, // keep camelCase to match your current usage
    html,
    text,
  });
  if ((result as any).error) {
    throw new Error(((result as any).error?.message as string) || "Email send failed");
  }
}

/* -------------------------------------------
   Referral
-------------------------------------------- */

export async function submitReferral(
  _: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  // Honeypot
  if (String(formData.get("website") || "").length > 0) {
    return { ok: true, message: "Thanks!" };
  }

  const data = {
    fullName: String(formData.get("fullName") || "").trim(),
    preferredName: String(formData.get("preferredName") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    relationship: String(formData.get("relationship") || "").trim(),
    address: String(formData.get("address") || "").trim(),
    ndisNumber: String(formData.get("ndisNumber") || "").trim(),
    dob: String(formData.get("dob") || "").trim(),
    primaryLanguage: String(formData.get("primaryLanguage") || "").trim(),
    interpreter: String(formData.get("interpreter") || "no"),
    supports: String(formData.get("supports") || "").trim(),
    notes: String(formData.get("notes") || "").trim(),
    consent: formData.get("consent") === "on",
  };

  const errors = {
    fullName: required(data.fullName) || maxLen(data.fullName, 120),
    email: isEmail(data.email),
    phone: isPhoneAU(data.phone),
    relationship: required(data.relationship) || maxLen(data.relationship, 80),
    supports: required(data.supports) || maxLen(data.supports, 2000),
    consent: data.consent ? null : "Consent is required to proceed.",
    // optional but bounded
    preferredName: maxLen(data.preferredName, 80),
    address: maxLen(data.address, 200),
    ndisNumber: maxLen(data.ndisNumber, 30),
    notes: maxLen(data.notes, 4000),
  };

  const hasError = Object.values(errors).some(Boolean);
  if (hasError) return { ok: false, errors };

  // Admin email
  const subject = `New Referral — ${data.fullName} (${data.relationship})`;
  const text =
    `New referral submitted:\n\n` +
    `Full Name: ${data.fullName}\n` +
    (data.preferredName ? `Preferred Name: ${data.preferredName}\n` : "") +
    `Email: ${data.email}\n` +
    `Phone: ${data.phone}\n` +
    `Relationship: ${data.relationship}\n` +
    (data.address ? `Address: ${data.address}\n` : "") +
    (data.ndisNumber ? `NDIS Number: ${data.ndisNumber}\n` : "") +
    (data.dob ? `DOB: ${data.dob}\n` : "") +
    (data.primaryLanguage ? `Primary Language: ${data.primaryLanguage}\n` : "") +
    `Interpreter Needed: ${data.interpreter}\n\n` +
    `Supports Requested:\n${data.supports}\n\n` +
    (data.notes ? `Notes:\n${data.notes}\n\n` : "") +
    `Consent: ${data.consent ? "Yes" : "No"}`;

  const html = `
    <h2 style="margin:0 0 8px;">New Referral</h2>
    <p style="margin:0 0 8px;"><strong>Full Name:</strong> ${escapeHtml(data.fullName)}</p>
    ${data.preferredName ? `<p style="margin:0 0 8px;"><strong>Preferred Name:</strong> ${escapeHtml(data.preferredName)}</p>` : ""}
    <p style="margin:0 0 8px;"><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p style="margin:0 0 8px;"><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p style="margin:0 0 8px;"><strong>Relationship:</strong> ${escapeHtml(data.relationship)}</p>
    ${data.address ? `<p style="margin:0 0 8px;"><strong>Address:</strong> ${escapeHtml(data.address)}</p>` : ""}
    ${data.ndisNumber ? `<p style="margin:0 0 8px;"><strong>NDIS Number:</strong> ${escapeHtml(data.ndisNumber)}</p>` : ""}
    ${data.dob ? `<p style="margin:0 0 8px;"><strong>DOB:</strong> ${escapeHtml(data.dob)}</p>` : ""}
    ${data.primaryLanguage ? `<p style="margin:0 0 8px;"><strong>Primary Language:</strong> ${escapeHtml(data.primaryLanguage)}</p>` : ""}
    <p style="margin:0 0 8px;"><strong>Interpreter Needed:</strong> ${escapeHtml(data.interpreter)}</p>
    <hr style="margin:12px 0; border:none; border-top:1px solid #eee;" />
    <p style="margin:0 0 8px;"><strong>Supports Requested:</strong></p>
    <p style="white-space:pre-wrap; margin:0 0 8px;">${escapeHtml(data.supports)}</p>
    ${data.notes ? `<p style="margin:12px 0 8px;"><strong>Notes:</strong></p>
    <p style="white-space:pre-wrap; margin:0;">${escapeHtml(data.notes)}</p>` : ""}
    <hr style="margin:12px 0; border:none; border-top:1px solid #eee;" />
    <p style="margin:0;"><strong>Consent:</strong> ${data.consent ? "Yes" : "No"}</p>
  `;

  // Participant confirmation
  const cSubject = "We received your referral — ACT Jubilant";
  const cText =
    `Hi ${data.fullName},\n\n` +
    `Thanks for your referral. Our team will be in touch within 1–2 business days.\n\n` +
    `If this is urgent, please call +61 434 740 745.\n\n` +
    `— ACT Jubilant`;
  const cHtml = `
    <p>Hi ${escapeHtml(data.fullName)},</p>
    <p>Thanks for your referral. Our team will be in touch within <strong>1–2 business days</strong>.</p>
    <p>If this is urgent, please call <strong>+61 434 740 745</strong>.</p>
    <p>— ACT Jubilant</p>
  `;

  try {
    // 1) Admin notification
    await sendMail({
      to: TO,
      subject,
      replyTo: data.email, // so your team can reply directly to the participant
      html,
      text,
    });
    // 2) Participant confirmation
    if (data.email) {
      await sendMail({
        to: data.email,
        subject: cSubject,
        html: cHtml,
        text: cText,
      });
    }
    return { ok: true, message: "Thanks — we’ll be in touch within 1–2 business days." };
  } catch (err) {
    console.error("Resend error (referral):", err);
    // Still ok for the user; advise alternate contact
    return {
      ok: true,
      message:
        "Thanks — we’ve recorded your referral. If you don’t hear from us, please call +61 434 740 745.",
    };
  }
}

/* -------------------------------------------
   Consultation
-------------------------------------------- */

export async function submitConsultation(
  _: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  if (String(formData.get("website") || "").length > 0) {
    return { ok: true, message: "Thanks!" };
  }

  const data = {
    fullName: String(formData.get("fullName") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    preferredDate: String(formData.get("preferredDate") || "").trim(),
    preferredTime: String(formData.get("preferredTime") || "").trim(),
    mode: String(formData.get("mode") || "phone"),
    message: String(formData.get("message") || "").trim(),
  };

  const errors = {
    fullName: required(data.fullName) || maxLen(data.fullName, 120),
    email: isEmail(data.email),
    phone: isPhoneAU(data.phone),
    preferredDate: required(data.preferredDate),
    preferredTime: required(data.preferredTime),
    // optional but bounded
    message: maxLen(data.message, 2000),
  };

  const hasError = Object.values(errors).some(Boolean);
  if (hasError) return { ok: false, errors };

  // Admin message
  const subject = `Consultation Request — ${data.fullName} (${data.mode})`;
  const text =
    `New consultation request:\n\n` +
    `Full Name: ${data.fullName}\n` +
    `Email: ${data.email}\n` +
    `Phone: ${data.phone}\n` +
    `Preferred Date: ${data.preferredDate}\n` +
    `Preferred Time: ${data.preferredTime}\n` +
    `Mode: ${data.mode}\n\n` +
    (data.message ? `Message:\n${data.message}\n` : "");
  const html = `
    <h2 style="margin:0 0 8px;">Consultation Request</h2>
    <p style="margin:0 0 8px;"><strong>Full Name:</strong> ${escapeHtml(data.fullName)}</p>
    <p style="margin:0 0 8px;"><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p style="margin:0 0 8px;"><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p style="margin:0 0 8px;"><strong>Preferred Date:</strong> ${escapeHtml(data.preferredDate)}</p>
    <p style="margin:0 0 8px;"><strong>Preferred Time:</strong> ${escapeHtml(data.preferredTime)}</p>
    <p style="margin:0 0 8px;"><strong>Mode:</strong> ${escapeHtml(data.mode)}</p>
    ${data.message ? `<hr style="margin:12px 0; border:none; border-top:1px solid #eee;" />
      <p style="margin:0 0 8px;"><strong>Message:</strong></p>
      <p style="white-space:pre-wrap; margin:0;">${escapeHtml(data.message)}</p>` : ""}
  `;

  // Participant confirmation
  const cSubject = "We received your consultation request — ACT Jubilant";
  const cText =
    `Hi ${data.fullName},\n\n` +
    `Thanks for your request. We’ll confirm a time shortly.\n\n` +
    `If this is urgent, please call +61 434 740 745.\n\n` +
    `— ACT Jubilant`;
  const cHtml = `
    <p>Hi ${escapeHtml(data.fullName)},</p>
    <p>Thanks for your consultation request. We’ll confirm a time shortly.</p>
    <p>If this is urgent, please call <strong>+61 434 740 745</strong>.</p>
    <p>— ACT Jubilant</p>
  `;

  try {
    // 1) Admin notification
    await sendMail({
      to: TO,
      subject,
      replyTo: data.email,
      html,
      text,
    });
    // 2) Participant confirmation
    if (data.email) {
      await sendMail({
        to: data.email,
        subject: cSubject,
        html: cHtml,
        text: cText,
      });
    }
    return { ok: true, message: "Your consultation request is received. We’ll confirm shortly." };
  } catch (err) {
    console.error("Resend error (consultation):", err);
    return {
      ok: true,
      message:
        "Your request is recorded. If you don't receive a confirmation soon, please call +61 434 740 745.",
    };
  }
}

/* -------------------------------------------
   Review (admin + participant receipt)
-------------------------------------------- */

export async function submitReview(
  _: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  if (String(formData.get("website") || "").length > 0) {
    return { ok: true, message: "Thanks!" };
  }

  const data = {
    name: String(formData.get("name") || "").trim(),
    relationship: String(formData.get("relationship") || "").trim(),
    rating: String(formData.get("rating") || "").trim(),
    review: String(formData.get("review") || "").trim(),
    consent: formData.get("consent") === "on",
    email: String(formData.get("email") || "").trim(), // OPTIONAL: capture if present to send a receipt
  };

  const errors = {
    name: required(data.name) || maxLen(data.name, 120),
    relationship: required(data.relationship) || maxLen(data.relationship, 80),
    rating: required(data.rating),
    review: required(data.review) || maxLen(data.review, 2000),
    consent: data.consent ? null : "Consent is required to publish your review.",
    // email is optional for reviews; no strict validation unless you require it
  };

  const hasError = Object.values(errors).some(Boolean);
  if (hasError) return { ok: false, errors };

  // Admin email
  const subject = `New Review (Pending Moderation) — ${data.name} (${data.relationship})`;
  const text =
    `New review submitted (moderation required):\n\n` +
    `Name: ${data.name}\n` +
    `Relationship: ${data.relationship}\n` +
    `Rating: ${data.rating}\n\n` +
    `Review:\n${data.review}\n\n` +
    `Publish Consent: ${data.consent ? "Yes" : "No"}`;
  const html = `
    <h2 style="margin:0 0 8px;">New Review (Pending Moderation)</h2>
    <p style="margin:0 0 8px;"><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p style="margin:0 0 8px;"><strong>Relationship:</strong> ${escapeHtml(data.relationship)}</p>
    <p style="margin:0 0 8px;"><strong>Rating:</strong> ${escapeHtml(data.rating)}</p>
    <hr style="margin:12px 0; border:none; border-top:1px solid #eee;" />
    <p style="margin:0 0 8px;"><strong>Review:</strong></p>
    <p style="white-space:pre-wrap; margin:0;">${escapeHtml(data.review)}</p>
    <hr style="margin:12px 0; border:none; border-top:1px solid #eee;" />
    <p style="margin:0;"><strong>Consent to Publish:</strong> ${data.consent ? "Yes" : "No"}</p>
  `;

  // Participant confirmation (if they provided email)
  const cSubject = "Thanks for your review — ACT Jubilant";
  const cText =
    `Hi ${data.name},\n\n` +
    `Thanks for sharing your review. We’ll publish it after moderation.\n\n` +
    `— ACT Jubilant`;
  const cHtml = `
    <p>Hi ${escapeHtml(data.name)},</p>
    <p>Thanks for sharing your review. We’ll publish it after moderation.</p>
    <p>— ACT Jubilant</p>
  `;

  try {
    // 1) Admin notification
    await sendMail({
      to: TO,
      subject,
      html,
      text,
    });
    // 2) Participant receipt (only if email provided)
    if (data.email) {
      await sendMail({
        to: data.email,
        subject: cSubject,
        html: cHtml,
        text: cText,
      });
    }
    return {
      ok: true,
      message:
        "Thank you for your review! It will be published after moderation.",
    };
  } catch (err) {
    console.error("Resend error (review):", err);
    return {
      ok: true,
      message:
        "Thanks for your review — we’ve recorded it. If it doesn’t appear soon, please email admin@actjubilant.com.au.",
    };
  }
}

/* -------------------------------------------
   Feedback
-------------------------------------------- */

export async function submitFeedback(
  _: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  if (String(formData.get("website") || "").length > 0) {
    return { ok: true, message: "Thanks!" };
  }

  const data = {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    type: String(formData.get("type") || "").trim(),
    message: String(formData.get("message") || "").trim(),
    consent: formData.get("consent") === "on",
  };

  const errors = {
    name: required(data.name) || maxLen(data.name, 120),
    email: isEmail(data.email),
    type: required(data.type),
    message: required(data.message) || maxLen(data.message, 2000),
    consent: data.consent ? null : "Consent is required to submit feedback.",
  };

  const hasError = Object.values(errors).some(Boolean);
  if (hasError) return { ok: false, errors };

  const subject = `Feedback - ${data.type} from ${data.name}`;
  const text =
    `New feedback submitted:\n\n` +
    `Name: ${data.name}\n` +
    `Email: ${data.email}\n` +
    `Type: ${data.type}\n\n` +
    `Message:\n${data.message}\n\n` +
    `Consent: ${data.consent ? "Yes" : "No"}`;

  const html = `
    <h2 style="margin:0 0 8px;">New Feedback</h2>
    <p style="margin:0 0 8px;"><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p style="margin:0 0 8px;"><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p style="margin:0 0 8px;"><strong>Type:</strong> ${escapeHtml(data.type)}</p>
    <hr style="margin:12px 0; border:none; border-top:1px solid #eee;" />
    <p style="margin:0 0 8px;"><strong>Message:</strong></p>
    <p style="white-space:pre-wrap; margin:0;">${escapeHtml(data.message)}</p>
    <hr style="margin:12px 0; border:none; border-top:1px solid #eee;" />
    <p style="margin:0;"><strong>Consent:</strong> ${data.consent ? "Yes" : "No"}</p>
  `;

  try {
    await sendMail({
      to: TO,
      subject,
      replyTo: data.email,
      html,
      text,
    });
    return {
      ok: true,
      message: "Thank you for your feedback! We'll review it and respond within 2 business days.",
    };
  } catch (err) {
    console.error("Resend error (feedback):", err);
    return {
      ok: true,
      message: "Thanks for your feedback. If you don't receive a response within 2 days, please call +61 434 740 745.",
    };
  }
}

/* -------------------------------------------
   Utilities
-------------------------------------------- */

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}