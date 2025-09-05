export default function ProgramsPage() {
  return (
    <div className="py-10">
      <h1 className="h2">Our Programs</h1>
      <p className="mt-4 text-lg">
        We offer a range of programs designed to support your goals and enhance your independence.
      </p>
      
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="h3">One-on-One Support</h2>
          <p className="mt-2">
            Personalized support tailored to your individual needs and goals. 
            Our experienced support workers provide assistance with daily activities, 
            skill development, and community participation.
          </p>
        </div>
        
        <div className="card">
          <h2 className="h3">Group Programs</h2>
          <p className="mt-2">
            Join our inclusive group activities including art workshops, 
            social clubs, and skill-building sessions. Connect with others 
            while developing new abilities in a supportive environment.
          </p>
        </div>
        
        <div className="card">
          <h2 className="h3">Community Access</h2>
          <p className="mt-2">
            Explore your community with confidence. We provide support for 
            shopping, appointments, social events, and recreational activities 
            throughout Canberra and surrounding areas.
          </p>
        </div>
        
        <div className="card">
          <h2 className="h3">Life Skills Development</h2>
          <p className="mt-2">
            Build essential life skills including cooking, budgeting, 
            communication, and technology use. Our programs are designed 
            to promote independence and confidence.
          </p>
        </div>
      </div>
    </div>
  );
}