"use client";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <>
      <section className="py-10 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-balance text-3xl md:text-5l font-bold leading-tight">
              Leading NDIS Support Services in Canberra
            </h1>
            <p className="mt-3 text-xl text-[var(--text-muted)]">Professional disability support workers available 24/7 in Canberra & ACT</p>
            <p className="mt-6 text-lg">
              We're a registered NDIS provider in Canberra offering personalised disability support services, 
              personal care assistants, community support workers, and inclusive programs. 
              <strong> Support workers near you in Belconnen, Canberra, and surrounding ACT areas.</strong>
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/referral" className="btn-primary">Make a Referral</Link>
              <Link href="/consultation" className="btn-secondary">Book a Consultation</Link>
              <a href="tel:+61434740745" className="btn-ghost" aria-label="Call us on +61 434 740 745">
                Call: +61 434 740 745
              </a>
            </div>
            <p className="mt-4 text-sm text-[var(--text-muted)]">
              If you’re in crisis, call <strong>000</strong> or Lifeline <strong>13&nbsp;11&nbsp;14</strong>.
            </p>
          </div>
          <div className="h-64 md:h-[360px] rounded-2xl bg-gradient-to-br from-[var(--primary-600)] to-[var(--primary-700)] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <div className="text-center text-white p-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Welcome to ACT Jubilant</h2>
              <p className="text-lg opacity-90">Empowering people. Creating possibilities.</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="mission" className="py-8 md:py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <h2 id="mission" className="h2">NDIS Support Services in Canberra</h2>
            <p className="mt-2">To empower individuals with disabilities by promoting independence, inclusion, and dignity — through care that's compassionate, flexible, and tailored. Our disability support workers in Canberra provide 24/7 assistance for NDIS participants.</p>
          </div>
          <div className="card">
            <h2 className="h2">Professional Support Workers Near You</h2>
            <p className="mt-2">A community where every person, regardless of ability, lives with purpose, connection, and equal opportunity. Our personal care assistants and community support workers serve Belconnen, Canberra, and all ACT areas.</p>
          </div>
        </div>
      </section>

      <section id="offerings" aria-labelledby="offerings-title" className="py-8 md:py-12">
        <h2 id="offerings-title" className="h2">What We Offer</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <article className="card" aria-labelledby="one-on-one">
            <h3 id="one-on-one" className="h3">🧍 One-on-One Support</h3>
            <p className="mt-2">At home or in the community — focused on your goals. Respectful, trusting relationships so you feel safe, heard, and in control.</p>
          </article>
          <article className="card" aria-labelledby="group-programs">
            <h3 id="group-programs" className="h3">👥 Group Programs</h3>
            <p className="mt-2">Art, social, and skills groups — safe, inclusive and confidence-building.</p>
          </article>
          <article className="card" aria-labelledby="community-access">
            <h3 id="community-access" className="h3">🌏 Community Access</h3>
            <p className="mt-2">Shopping, events, outings, appointments — explore with the right support.</p>
          </article>
        </div>
      </section>

      <section aria-labelledby="service-areas" className="py-8 md:py-12">
        <div className="card">
          <h2 id="service-areas" className="h2">Service Areas</h2>
          <p className="mt-2">Canberra & surrounds — Gungahlin, Belconnen, City, Woden, Tuggeranong, Weston Creek, and Queanbeyan.</p>
        </div>
      </section>

      <section id="why-us" aria-labelledby="why-title" className="py-8 md:py-12">
        <h2 id="why-title" className="h2">Why Choose ACT Jubilant?</h2>
        <ul className="mt-4 space-y-2">
          <li>✅ Participant-first care</li>
          <li>✅ Skilled, friendly support workers</li>
          <li>✅ We listen, we adapt, we care</li>
          <li>✅ Canberra-based & community-focused</li>
        </ul>
      </section>

      <section id="reviews" aria-labelledby="reviews-title" className="py-8 md:py-12">
        <h2 id="reviews-title" className="h2">What Our Participants Say</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="card">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400" aria-hidden="true">★</span>
              ))}
            </div>
            <blockquote className="text-lg">
              "ACT Jubilant has been amazing. My support worker really understands my needs and helps me achieve my goals. I feel respected and supported every step of the way."
            </blockquote>
            <cite className="mt-3 block text-sm text-[var(--text-muted)]">
              — Sarah M., Participant
            </cite>
          </div>
          
          <div className="card">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400" aria-hidden="true">★</span>
              ))}
            </div>
            <blockquote className="text-lg">
              "The team at ACT Jubilant helped my son build confidence and independence. Their group programs are fantastic and the staff are so caring and professional."
            </blockquote>
            <cite className="mt-3 block text-sm text-[var(--text-muted)]">
              — Jennifer L., Parent
            </cite>
          </div>
          
          <div className="card">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400" aria-hidden="true">★</span>
              ))}
            </div>
            <blockquote className="text-lg">
              "I love how flexible they are with scheduling. They really listen to what I want to do and help me make it happen. Highly recommend!"
            </blockquote>
            <cite className="mt-3 block text-sm text-[var(--text-muted)]">
              — Michael R., Participant
            </cite>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/reviews" className="btn-secondary">
            Read More Reviews
          </Link>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-title" className="py-10 md:py-14">
        <div className="card">
          <h2 id="contact-title" className="h2">Get Started</h2>
          <p className="mt-2">You can refer yourself, or someone else can refer you.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/referral" className="btn-primary">Make a Referral</Link>
            <Link href="/consultation" className="btn-secondary">Book a Consultation</Link>
            <a href="tel:+61434740745" className="btn-ghost">Call: +61 434 740 745</a>
          </div>
        </div>
      </section>
    </>
  );
}