import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NDIS Support Services Canberra | Disability Support Worker Near Me | ACT Jubilant",
  description: "Professional NDIS support services in Canberra. Disability support workers, personal care assistants, and community support available 24/7. Call +61 434 740 745 for immediate assistance.",
  keywords: [
    "NDIS support services Canberra",
    "disability support worker Canberra",
    "personal care assistant Canberra",
    "community support worker Canberra",
    "NDIS provider Canberra",
    "disability services Canberra",
    "support worker near me Canberra",
    "NDIS support coordination Canberra",
    "respite care Canberra",
    "daily living support Canberra",
    "community participation Canberra",
    "Belconnen NDIS services",
    "Canberra disability support",
    "ACT NDIS provider"
  ],
  alternates: {
    canonical: "/services/canberra"
  }
};

export default function CanberraServices() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          NDIS Support Services in Canberra | Professional Disability Support Workers
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-[var(--text-muted)] mb-8">
            ACT Jubilant provides comprehensive NDIS support services throughout Canberra and the ACT. 
            Our professional disability support workers are available 24/7 to assist NDIS participants 
            with personal care, community participation, and daily living support.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disability Support Workers in Canberra</h2>
            <p>
              Our experienced disability support workers in Canberra provide compassionate, 
              professional care to NDIS participants. We serve all areas including Belconnen, 
              Civic, Woden, Tuggeranong, and surrounding suburbs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Personal Care Assistant Services</h2>
            <p>
              Our personal care assistants help with daily living activities, personal hygiene, 
              medication management, and mobility support. Available for in-home care and 
              community support throughout Canberra.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Community Support Worker Services</h2>
            <p>
              Community support workers assist with social participation, community access, 
              skill development, and recreational activities. We help NDIS participants 
              connect with their local Canberra community.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">NDIS Services Available in Canberra</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal Care and Daily Living Support</li>
              <li>Community Participation and Social Activities</li>
              <li>Respite Care and Short-term Support</li>
              <li>Transport and Travel Assistance</li>
              <li>Household Tasks and Domestic Assistance</li>
              <li>Support Coordination and Plan Management</li>
              <li>Skill Development and Life Skills Training</li>
              <li>High Intensity Daily Personal Activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Service Areas in Canberra</h2>
            <p>
              We provide NDIS support services throughout Canberra including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Belconnen and surrounding suburbs</li>
              <li>Civic and Canberra City</li>
              <li>Woden and Weston Creek</li>
              <li>Tuggeranong and South Canberra</li>
              <li>Gungahlin and North Canberra</li>
              <li>All ACT regional areas</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Why Choose ACT Jubilant for NDIS Support in Canberra?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Registered NDIS provider with extensive Canberra experience</li>
              <li>Professional, qualified disability support workers</li>
              <li>24/7 support and emergency assistance</li>
              <li>Person-centered approach to care</li>
              <li>Flexible service delivery to meet individual needs</li>
              <li>Local knowledge of Canberra community resources</li>
              <li>Competitive NDIS pricing and transparent billing</li>
            </ul>
          </section>

          <section className="bg-[var(--primary-600)] text-white p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">Get Support Worker Services in Canberra Today</h2>
            <p className="mb-4">
              Ready to access professional NDIS support services in Canberra? 
              Our disability support workers are ready to help you achieve your goals.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/referral" className="bg-white text-[var(--primary-600)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Make a Referral
              </Link>
              <Link href="/consultation" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[var(--primary-600)]">
                Book Consultation
              </Link>
              <a href="tel:+61434740745" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[var(--primary-600)]">
                Call +61 434 740 745
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
