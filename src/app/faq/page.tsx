export default function FAQPage() {
  return (
    <div className="py-10">
      <h1 className="h2">Frequently Asked Questions</h1>
      
      <div className="mt-6 space-y-6">
        <div className="card">
          <h2 className="h3">What is NDIS?</h2>
          <p className="mt-2">
            The National Disability Insurance Scheme (NDIS) is Australia's national 
            disability support program. It provides funding for people with permanent 
            and significant disabilities to access the support they need to live 
            independently and participate in their community.
          </p>
        </div>
        
        <div className="card">
          <h2 className="h3">How do I access your services?</h2>
          <p className="mt-2">
            You can access our services through your NDIS plan. Contact us to discuss 
            your needs and how we can support you. We can help you understand your 
            plan and how to use it effectively.
          </p>
        </div>
        
        <div className="card">
          <h2 className="h3">What areas do you service?</h2>
          <p className="mt-2">
            We provide services throughout Canberra and surrounding areas including 
            Gungahlin, Belconnen, City, Woden, Tuggeranong, Weston Creek, and Queanbeyan.
          </p>
        </div>
        
        <div className="card">
          <h2 className="h3">How much do your services cost?</h2>
          <p className="mt-2">
            Our services are funded through your NDIS plan. We follow NDIS pricing 
            guidelines and can help you understand how your plan funding works. 
            Contact us for specific pricing information.
          </p>
        </div>
        
        <div className="card">
          <h2 className="h3">Can I choose my support worker?</h2>
          <p className="mt-2">
            Yes! We believe in matching you with the right support worker. We consider 
            your preferences, interests, and support needs to find someone who will 
            work well with you and help you achieve your goals.
          </p>
        </div>
        
        <div className="card">
          <h2 className="h3">What if I'm not happy with my service?</h2>
          <p className="mt-2">
            Your feedback is important to us. If you have concerns or suggestions, 
            please contact us directly. We have a complaints process and are committed 
            to resolving any issues quickly and fairly.
          </p>
        </div>
      </div>
    </div>
  );
}