export default function AccessibilityPage() {
  return (
    <div className="py-10">
      <h1 className="h2">Accessibility Statement</h1>
      
      <div className="mt-6 space-y-6">
        <div className="card">
          <h2 className="h3">Our Commitment</h2>
          <p className="mt-2">
            ACT Jubilant is committed to providing accessible services and information 
            to all participants, families, and community members. We believe everyone 
            deserves equal access to our programs and support.
          </p>
        </div>
        
        <div className="card">
          <h2 className="h3">Website Accessibility</h2>
          <p className="mt-2">
            This website has been designed with accessibility in mind. We provide:
          </p>
          <ul className="mt-3 space-y-2">
            <li>• High contrast mode for better visibility</li>
            <li>• Large text options for easier reading</li>
            <li>• Dyslexia-friendly font options</li>
            <li>• Screen reader compatibility</li>
            <li>• Keyboard navigation support</li>
            <li>• Alternative text for images</li>
          </ul>
        </div>
        
        <div className="card">
          <h2 className="h3">Service Accessibility</h2>
          <p className="mt-2">
            Our services are designed to be inclusive and accessible:
          </p>
          <ul className="mt-3 space-y-2">
            <li>• Flexible scheduling to meet your needs</li>
            <li>• Support in various communication formats</li>
            <li>• Accessible venues and transport options</li>
            <li>• Trained staff in disability awareness</li>
            <li>• Individualized support plans</li>
          </ul>
        </div>
        
        <div className="card">
          <h2 className="h3">Feedback & Support</h2>
          <p className="mt-2">
            If you experience any accessibility barriers or have suggestions 
            for improvement, please contact us:
          </p>
          <div className="mt-4">
            <p><strong>Phone:</strong> 0424 488 439</p>
            <p><strong>Email:</strong> admin@actjubilant.com.au</p>
          </div>
        </div>
      </div>
    </div>
  );
}