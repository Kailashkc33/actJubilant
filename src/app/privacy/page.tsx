export default function PrivacyPage() {
  return (
    <div className="py-10">
      <h1 className="h2">Privacy Policy</h1>
      
      <div className="mt-6 space-y-6">
        <div className="card">
          <h2 className="h3">Our Commitment to Privacy</h2>
          <p className="mt-2">
            ACT Jubilant is committed to protecting your privacy and personal information. 
            We handle all information in accordance with the Privacy Act 1988 (Cth) and 
            the Australian Privacy Principles.
          </p>
        </div>
        
        <div className="card">
          <h2 className="h3">Information We Collect</h2>
          <p className="mt-2">We may collect the following types of information:</p>
          <ul className="mt-3 space-y-2">
            <li>• Personal details (name, contact information, date of birth)</li>
            <li>• NDIS plan information and support needs</li>
            <li>• Health and disability information relevant to your support</li>
            <li>• Feedback and reviews about our services</li>
            <li>• Website usage data (cookies, analytics)</li>
          </ul>
        </div>
        
        <div className="card">
          <h2 className="h3">How We Use Your Information</h2>
          <p className="mt-2">We use your information to:</p>
          <ul className="mt-3 space-y-2">
            <li>• Provide NDIS support services</li>
            <li>• Communicate with you about your support</li>
            <li>• Improve our services and programs</li>
            <li>• Comply with legal and regulatory requirements</li>
            <li>• Process referrals and consultation requests</li>
          </ul>
        </div>
        
        <div className="card">
          <h2 className="h3">Information Sharing</h2>
          <p className="mt-2">
            We only share your information with your consent or as required by law. 
            This may include sharing with:
          </p>
          <ul className="mt-3 space-y-2">
            <li>• NDIS Quality and Safeguards Commission</li>
            <li>• Your support coordinator or plan manager</li>
            <li>• Healthcare providers (with your consent)</li>
            <li>• Emergency services (if required)</li>
          </ul>
        </div>
        
        <div className="card">
          <h2 className="h3">Your Rights</h2>
          <p className="mt-2">You have the right to:</p>
          <ul className="mt-3 space-y-2">
            <li>• Access your personal information</li>
            <li>• Request corrections to your information</li>
            <li>• Withdraw consent for information sharing</li>
            <li>• Make a complaint about privacy practices</li>
          </ul>
        </div>
        
        <div className="card">
          <h2 className="h3">Contact Us</h2>
          <p className="mt-2">
            For privacy-related questions or concerns, please contact us:
          </p>
          <div className="mt-4">
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+61434740745" className="text-[var(--primary-600)] underline underline-offset-2">
                +61 434 740 745
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:admin@actjubilant.com.au"
                className="text-[var(--primary-600)] underline underline-offset-2"
              >
                admin@actjubilant.com.au
              </a>
            </p>
            <p><strong>Address:</strong> ACT Jubilant, Canberra, ACT</p>
          </div>
        </div>
        
        <div className="card">
          <h2 className="h3">Policy Updates</h2>
          <p className="mt-2">
            This privacy policy may be updated from time to time. We will notify 
            you of any significant changes. This policy was last updated in January 2025.
          </p>
        </div>
      </div>
    </div>
  );
}