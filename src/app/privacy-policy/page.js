export const metadata = {
  title: "Privacy Policy - EhyaSoft",
  description:
    "Read EhyaSoft's privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 lg:px-12 py-12 lg:py-24">
      {/* Hero Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Your privacy matters to us. This policy explains how EhyaSoft
          collects, uses, and protects your information.
        </p>
        <p className="text-sm text-slate-400 mt-4">
          Last updated: March 27, 2025
        </p>
      </div>

      {/* Content */}
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-4">
            1. Information We Collect
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              We collect information you provide directly to us when you use our
              services, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, and company details when you fill out our contact
                form or request a quote.
              </li>
              <li>
                <strong>Project Information:</strong> Details about your project
                requirements, budget, and timeline that you share with us.
              </li>
              <li>
                <strong>Communication Data:</strong> Records of correspondence
                when you contact us via email at soft@ehya.com.pk or by phone
                at (042) 35164921.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact
                with our website, including pages visited, time spent, and
                browser type.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-4">
            2. How We Use Your Information
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Respond to your inquiries and provide customer support.</li>
              <li>
                Deliver the software development services you have requested.
              </li>
              <li>
                Send you project updates, proposals, and relevant
                communications.
              </li>
              <li>Improve our website, services, and user experience.</li>
              <li>
                Comply with legal obligations and protect our rights.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-4">
            3. Information Sharing
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information only in the following
              circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>With your explicit consent.</li>
              <li>
                With trusted service providers who assist us in operating our
                business, subject to confidentiality agreements.
              </li>
              <li>
                When required by law or to respond to legal processes.
              </li>
              <li>
                To protect the rights, safety, or property of EhyaSoft, our
                clients, or the public.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-4">
            4. Data Security
          </h2>
          <p className="text-slate-600 leading-relaxed">
            We implement industry-standard security measures to protect your
            personal information from unauthorized access, alteration,
            disclosure, or destruction. However, no method of transmission over
            the Internet is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-4">
            5. Cookies & Tracking
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Our website may use cookies and similar tracking technologies to
            enhance your browsing experience. You can control cookie settings
            through your browser preferences. Disabling cookies may affect
            certain features of our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-4">
            6. Third-Party Links
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these external
            sites. We encourage you to review the privacy policies of any
            third-party websites you visit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-4">
            7. Your Rights
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your personal information.</li>
              <li>
                Opt out of marketing communications at any time.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-4">
            8. Changes to This Policy
          </h2>
          <p className="text-slate-600 leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date. We
            encourage you to review this policy periodically.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-4">
            9. Contact Us
          </h2>
          <div className="text-slate-600 leading-relaxed space-y-2">
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <div className="glass-card rounded-2xl p-6 mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  mail
                </span>
                <span>soft@ehya.com.pk</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  call
                </span>
                <span>(042) 35164921</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  location_on
                </span>
                <span>
                  101 N, Block N Model Town, Lahore, Punjab
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
