"use client";

import Link from "next/link";
import ConsultationForm from "../../components/ConsultationForm";

export default function ConsultationPage() {
  return (
    <>
    <section aria-labelledby="consultation-form-title" className="site-band site-section site-section--dawn">
    <div className="content-shell content-shell--reading">
        <p className="section-kicker">Consultation</p>
        <h1 id="consultation-form-title" className="h1 text-balance">
          Book a Consultation
        </h1>
        <p className="content-measure mt-3 text-lg text-[var(--text-muted)]">
          For participants, families, and anyone exploring fit. Tell us a good time to chat and
          we&apos;ll confirm by phone or email.
        </p>

        <ConsultationForm idPrefix="consultation-page" className="mt-6" />
    </div>
    </section>

      <section aria-labelledby="consultation-depth-title" className="site-band site-section site-section--compact site-section--sky">
        <div className="content-shell content-shell--reading">
        <h2 id="consultation-depth-title" className="text-lg font-semibold">
          Want more detail before you book?
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-[var(--text-muted)]">
          <li>
            <Link href="/programs" className="text-link">
              Explore our programs
            </Link>
            {" "}
            · what support looks like in practice
          </li>
          <li>
            <Link href="/programs#who-were-best-for" className="text-link">
              See who we&apos;re best for
            </Link>
          </li>
          <li>
            <Link href="/referral" className="text-link">
              Make a referral
            </Link>
            {" "}
            · if you are ready to refer a participant
          </li>
        </ul>
        </div>
      </section>

      <section aria-labelledby="consultation-cta-title" className="site-band site-section site-section--eucalyptus">
        <div className="content-shell content-shell--reading">
        <div className="cta-panel text-center md:text-left">
          <p id="consultation-cta-title" className="text-lg font-medium leading-relaxed">
            Prefer to talk now? Call us and we can help you decide on next steps.
          </p>
          <div className="cta-panel__actions justify-center md:justify-start">
            <a href="tel:+61424488439" className="btn-primary" aria-label="Call us on +61 424 488 439">
              Call: +61 424 488 439
            </a>
            <Link href="/referral" className="btn-secondary">
              Make a Referral
            </Link>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
