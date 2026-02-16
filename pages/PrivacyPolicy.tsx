import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dark to-gray-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-4">
            <Shield size={32} className="text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-xl text-gray-300">How we collect, use, and protect your data</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 prose prose-lg">
          <div className="space-y-8">
            {/* Effective Date */}
            <div>
              <p className="text-sm font-semibold text-primary mb-2">EFFECTIVE DATE: FEBRUARY 12, 2026</p>
            </div>

            {/* Introduction */}
            <div>
              <p className="leading-relaxed">
                <strong>HRK Bio Polymers</strong> ("Company", "we", "our", or "us") operates the website <strong>hrk.co.in</strong>. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.
              </p>
              <p className="mt-4 leading-relaxed">
                By using our website, you agree to the practices described in this policy.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">1. Information We Collect</h2>
              <p className="mb-4 leading-relaxed">
                We may collect personal and non-personal information when you interact with our website.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-dark">Personal Information</h3>
              <p className="mb-3 leading-relaxed">This may include:</p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Any information submitted through forms or inquiries</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-dark">Non-Personal Information</h3>
              <p className="mb-3 leading-relaxed">We may automatically collect:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Time and date of access</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                This data helps us improve website performance and user experience.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">2. How We Use Your Information</h2>
              <p className="mb-4 leading-relaxed">We use collected information to:</p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Respond to inquiries and communication</li>
                <li>Provide requested services or information</li>
                <li>Improve website functionality</li>
                <li>Maintain security and prevent fraud</li>
                <li>Comply with legal obligations</li>
                <li>Send updates or business communications (only when appropriate)</li>
              </ul>
              <p className="leading-relaxed font-semibold text-dark">
                We do not sell personal information to third parties.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">3. Sharing of Information</h2>
              <p className="mb-4 leading-relaxed">We may share information only in the following cases:</p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>With service providers assisting in website operations</li>
                <li>When required by law or legal process</li>
                <li>To protect company rights and safety</li>
                <li>During business restructuring or merger</li>
              </ul>
              <p className="leading-relaxed">
                All third parties are required to protect your data.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">4. Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed">
                Our website may use cookies or similar technologies to enhance user experience. Cookies help analyze website traffic and usage patterns.
              </p>
              <p className="mt-4 leading-relaxed">
                You can disable cookies through your browser settings. Some features may not function properly if cookies are disabled.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">5. Data Security</h2>
              <p className="leading-relaxed">
                We implement reasonable security measures to protect your information from unauthorized access, alteration, or disclosure.
              </p>
              <p className="mt-4 leading-relaxed">
                While we strive to protect data, no internet transmission is completely secure. Users share information at their own risk.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">6. Data Retention</h2>
              <p className="leading-relaxed">
                We retain personal data only as long as necessary for operational, legal, or business purposes. When no longer needed, data is securely deleted.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">7. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to external websites. We are not responsible for the privacy practices of third-party sites. Users should review their privacy policies separately.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">8. Your Rights</h2>
              <p className="mb-4 leading-relaxed">Depending on applicable laws, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Access your personal information</li>
                <li>Request correction or deletion</li>
                <li>Withdraw consent where applicable</li>
                <li>Request restriction of data processing</li>
              </ul>
              <p className="leading-relaxed">
                To exercise your rights, contact us using the details below.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">9. Children's Privacy</h2>
              <p className="leading-relaxed">
                Our website is not intended for individuals under the age of 13. We do not knowingly collect personal information from children.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">10. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">11. Contact Us</h2>
              <p className="mb-4 leading-relaxed">
                If you have questions about this Privacy Policy or how your data is handled, please contact us:
              </p>
              <div className="bg-gray-50 border-l-4 border-primary rounded-md p-6 space-y-3">
                <p>
                  <strong>Email:</strong> <a href="mailto:info@hrk.co.in" className="text-primary hover:underline">info@hrk.co.in</a>
                </p>
                <p>
                  <strong>Website:</strong> <a href="https://hrk.co.in" className="text-primary hover:underline">https://hrk.co.in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
