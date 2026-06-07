import Image from "next/image";

export default function ProgramsPage() {
  return (
    <div className="py-10">
      <h1 className="h2">Specialized Support Programs</h1>
      <p className="mt-4 text-lg">
        We provide comprehensive support programs for people who need assistance, 
        focusing on individual needs, independence, and community inclusion.
      </p>
      
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {/* One-on-One Support */}
        <div className="card overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/gallery/pexels-cliff-booth-4058218.jpg"
              alt="Support worker helping client with daily activities"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h2 className="h3 text-white">One-on-One Support</h2>
            </div>
          </div>
          <div className="p-6">
            <p className="mt-2">
              Individualized support for people who need assistance, tailored to your specific needs and goals. 
              Our trained support workers provide compassionate assistance with daily living activities, 
              personal care, and skill development.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
              <li>• Personal care and hygiene support</li>
              <li>• Daily living assistance</li>
              <li>• Mobility and transfer support</li>
              <li>• NDIS goal achievement</li>
            </ul>
          </div>
        </div>
        
        {/* Group Programs */}
        <div className="card overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/gallery/pexels-kampus-production-8380014.jpg"
              alt="Group activities and social programs"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h2 className="h3 text-white">Group Programs</h2>
            </div>
          </div>
          <div className="p-6">
            <p className="mt-2">
              Inclusive group programs designed for people who need support to build social connections, 
              develop skills, and participate in community activities. Our programs are adapted to 
              accommodate various support needs and abilities.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
              <li>• Adaptive art and craft programs</li>
              <li>• Social skills development</li>
              <li>• Peer support groups</li>
              <li>• Inclusive community activities</li>
            </ul>
          </div>
        </div>
        
        {/* Community Access */}
        <div className="card overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/gallery/pexels-ivan-samkov-8127437.jpg"
              alt="Community access and social activities"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h2 className="h3 text-white">Community Access</h2>
            </div>
          </div>
          <div className="p-6">
            <p className="mt-2">
              Community access support for people who need assistance to participate in community life. 
              We provide assistance with accessibility needs, mobility support, and social inclusion 
              throughout Canberra and surrounding areas.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
              <li>• Accessible shopping support</li>
              <li>• Medical appointment assistance</li>
              <li>• Social inclusion activities</li>
              <li>• Mobility and accessibility support</li>
            </ul>
          </div>
        </div>
        
        {/* Life Skills Development */}
        <div className="card overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/images/gallery/pexels-elevate-3009756.jpg"
              alt="Life skills development and training"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h2 className="h3 text-white">Life Skills Development</h2>
            </div>
          </div>
          <div className="p-6">
            <p className="mt-2">
              Life skills development programs for people who need support to build independence and confidence. 
              We focus on developing practical skills that support daily living and community participation.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
              <li>• Adaptive cooking and meal preparation</li>
              <li>• Money management and budgeting</li>
              <li>• Communication and social skills</li>
              <li>• Assistive technology training</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Programs Section */}
      <div className="mt-12">
        <h2 className="h2 text-center mb-8">Specialized Programs</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Respite Care */}
          <div className="card overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/services/pexels-shvets-production-8415690.jpg"
                alt="Respite care and family support services"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="h3 text-white">Respite Care</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="mt-2">
                Respite care services for people who need support and their families. 
                We provide short-term care support to give families and carers a well-deserved break 
                while maintaining familiar routines and ensuring comfort.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
                <li>• In-home respite care</li>
                <li>• Community-based respite</li>
                <li>• Emergency respite support</li>
                <li>• Specialized disability support</li>
              </ul>
            </div>
          </div>

          {/* Transport Services */}
          <div className="card overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/services/Photo 4.jpg"
                alt="Accessible transport vehicle with wheelchair ramp"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="h3 text-white">Transport Services</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="mt-2">
                Accessible transport services for people who need support. Our wheelchair-accessible vehicles 
                with ramps and specialized equipment ensure safe and comfortable transportation to appointments, 
                activities, and community events.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
                <li>• Medical and therapy appointments</li>
                <li>• Community participation activities</li>
                <li>• Shopping and daily errands</li>
                <li>• Wheelchair accessible vehicles</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded bg-[var(--primary-600)]" aria-hidden="true" />
            <h3 className="h3">Goal Achievement</h3>
            <p className="text-[var(--text-muted)] mt-2">
              Specialized support to help people achieve their goals and build independence.
            </p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded bg-[var(--primary-600)]" aria-hidden="true" />
            <h3 className="h3">Support Coordination</h3>
            <p className="text-[var(--text-muted)] mt-2">
              Professional guidance to help people navigate their support plans and access services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}