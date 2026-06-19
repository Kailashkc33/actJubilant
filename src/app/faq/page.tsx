import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | ACT Jubilant Canberra",
  description:
    "Frequently asked questions about ACT Jubilant NDIS support services in Canberra and the ACT.",
  alternates: {
    canonical: "/faq",
  },
};

const FAQ_ITEMS = [
  {
    question: "What is NDIS?",
    answer:
      "The National Disability Insurance Scheme (NDIS) is Australia's national disability support program. It provides funding for people with permanent and significant disabilities to access the support they need to live independently and participate in their community.",
  },
  {
    question: "How do I access your services?",
    answer:
      "You can access our services through your NDIS plan. Contact us to discuss your needs and how we can support you. We can help you understand your plan and how to use it effectively.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We provide services throughout Canberra and surrounding areas including Gungahlin, Belconnen, City, Woden, Tuggeranong, Weston Creek, and Queanbeyan.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our services are funded through your NDIS plan. We follow NDIS pricing guidelines and can help you understand how your plan funding works. Contact us for specific pricing information.",
  },
  {
    question: "Can I choose my support worker?",
    answer:
      "Yes! We believe in matching you with the right support worker. We consider your preferences, interests, and support needs to find someone who will work well with you and help you achieve your goals.",
  },
  {
    question: "What if I'm not happy with my service?",
    answer:
      "Your feedback is important to us. If you have concerns or suggestions, please contact us directly. We have a complaints process and are committed to resolving any issues quickly and fairly.",
  },
] as const;

export default function FAQPage() {
  return (
    <>
      <section aria-labelledby="faq-opener-title" className="site-band site-section site-section--dawn">
        <div className="content-shell content-shell--reading">
          <p className="section-kicker">FAQ</p>
          <h1 id="faq-opener-title" className="h1 text-balance">Frequently Asked Questions</h1>
          <p className="content-measure mt-4 text-lg text-[var(--text-muted)]">
            Practical answers about NDIS support, service areas, and how to get started with ACT
            Jubilant in Canberra and the ACT.
          </p>
        </div>
      </section>

      <section aria-labelledby="faq-list-title" className="site-band site-section site-section--cream">
        <div className="content-shell content-shell--reading">
          <h2 id="faq-list-title" className="sr-only">Questions and answers</h2>
          <dl className="grid gap-6 md:grid-cols-2">
            {FAQ_ITEMS.map((item) => (
              <div key={item.question} className="card card--elevated h-full">
                <dt className="h3 text-lg md:text-xl">{item.question}</dt>
                <dd className="mt-2 text-[var(--text-muted)]">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="faq-more-title" className="site-band site-section site-section--eucalyptus">
        <div className="content-shell content-shell--reading">
          <h2 id="faq-more-title" className="text-xl font-semibold">Still have questions?</h2>
          <p className="mt-3 text-[var(--text-muted)]">
            These pages go deeper on fit, programs, and how to get in touch:
          </p>
          <ul className="mt-4 space-y-2">
            <li><Link href="/programs#who-were-best-for" className="text-link">Who we&apos;re best for</Link></li>
            <li><Link href="/programs" className="text-link">Explore our programs</Link></li>
            <li><Link href="/services/canberra" className="text-link">NDIS services in Canberra</Link></li>
            <li><Link href="/accessibility" className="text-link">Website accessibility</Link></li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="faq-cta-title" className="site-band site-section site-section--surface">
        <div className="content-shell content-shell--reading">
          <div className="cta-panel text-center md:text-left">
            <p id="faq-cta-title" className="text-lg md:text-xl font-medium leading-relaxed">
              Ready to talk about support, fit, or next steps?
            </p>
            <div className="cta-panel__actions justify-center md:justify-start">
              <Link href="/consultation" className="btn-primary">Book a Consultation</Link>
              <Link href="/referral" className="btn-secondary">Make a Referral</Link>
              <a href="tel:+61424488439" className="btn-ghost" aria-label="Call us on +61 424 488 439">
                Call: +61 424 488 439
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
