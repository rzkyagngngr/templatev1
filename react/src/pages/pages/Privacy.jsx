import React from 'react';
import { ChevronDown, Lock, Eye } from 'lucide-react';

export default function Privacy() {
  const [expandedSection, setExpandedSection] = React.useState(null);

  const sections = [
    {
      id: 1,
      title: 'Information We Collect',
      content: 'We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, postal address, phone number, and payment information.'
    },
    {
      id: 2,
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send transactional and promotional communications, and comply with legal obligations.'
    },
    {
      id: 3,
      title: 'Information Sharing',
      content: 'We do not sell, trade, or rent your personal identification information to third parties. We may share your information with service providers who perform functions on our behalf, subject to confidentiality agreements.'
    },
    {
      id: 4,
      title: 'Data Security',
      content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no transmission over the internet is completely secure.'
    },
    {
      id: 5,
      title: 'Cookies and Tracking',
      content: 'We use cookies and similar tracking technologies to enhance your experience on our application. You can control cookie settings through your browser preferences.'
    },
    {
      id: 6,
      title: 'Your Privacy Rights',
      content: 'You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us using the information provided at the end of this policy.'
    },
    {
      id: 7,
      title: 'Third-Party Links',
      content: 'Our application may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.'
    },
    {
      id: 8,
      title: 'Policy Updates',
      content: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date.'
    }
  ];

  return (
    <div className="w-full space-y-6 pb-8">
      {/* Header */}
      <div>
        <h4 className="text-2xl font-bold text-black">Privacy Policy</h4>
        <div className="text-sm text-gray-600 mt-2">Glacia / Pages / Privacy Policy</div>
      </div>

      {/* Introduction */}
      <div className="glass-card border border-gray-300 p-6">
        <div className="flex items-start gap-4 mb-4">
          <Lock className="text-blue-600 flex-shrink-0 mt-1" size={24} />
          <div>
            <h5 className="text-lg font-semibold text-black mb-2">Your Privacy Matters</h5>
            <p className="text-black">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application and services.
            </p>
          </div>
        </div>
        <div className="mt-4 p-4 bg-blue-50 border border-blue-300 rounded-lg">
          <p className="text-sm text-black">
            <strong>Last Updated:</strong> December 16, 2024
          </p>
        </div>
      </div>

      {/* Privacy Sections */}
      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="glass-card border border-gray-300 overflow-hidden">
            <button
              onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
            >
              <h5 className="text-lg font-semibold text-black text-left">{section.title}</h5>
              <ChevronDown
                size={20}
                className={`text-black transition-transform flex-shrink-0 ${
                  expandedSection === section.id ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedSection === section.id && (
              <div className="px-6 pb-6 pt-0 border-t border-gray-300">
                <p className="text-black leading-relaxed">{section.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Privacy Protection Measures */}
      <div className="glass-card border border-gray-300 p-6">
        <h5 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
          <Eye size={20} className="text-blue-600" />
          How We Protect Your Privacy
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Encryption', desc: 'All data is transmitted using SSL/TLS encryption' },
            { title: 'Access Control', desc: 'Limited access to personal information' },
            { title: 'Regular Audits', desc: 'Security audits are performed regularly' },
            { title: 'Compliance', desc: 'Compliance with GDPR and privacy laws' }
          ].map((item, i) => (
            <div key={i} className="p-4 bg-white border border-gray-300 rounded-lg">
              <h6 className="text-black font-semibold mb-2">{item.title}</h6>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Data Rights */}
      <div className="glass-card border border-gray-300 p-6">
        <h5 className="text-lg font-semibold text-black mb-4">Your Data Rights</h5>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-slate-900 flex items-center justify-center flex-shrink-0 font-semibold">1</div>
            <div>
              <h6 className="text-black font-semibold mb-1">Right to Access</h6>
              <p className="text-black text-sm">You can request access to the personal data we hold about you</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-slate-900 flex items-center justify-center flex-shrink-0 font-semibold">2</div>
            <div>
              <h6 className="text-black font-semibold mb-1">Right to Rectification</h6>
              <p className="text-black text-sm">You can request correction of inaccurate or incomplete data</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-slate-900 flex items-center justify-center flex-shrink-0 font-semibold">3</div>
            <div>
              <h6 className="text-black font-semibold mb-1">Right to Erasure</h6>
              <p className="text-black text-sm">You can request deletion of your personal data</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-slate-900 flex items-center justify-center flex-shrink-0 font-semibold">4</div>
            <div>
              <h6 className="text-black font-semibold mb-1">Right to Object</h6>
              <p className="text-black text-sm">You can object to processing of your personal data</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact for Privacy */}
      <div className="glass-card border border-gray-300 p-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <h5 className="text-lg font-semibold text-black mb-4">Privacy Questions & Requests</h5>
        <p className="text-black mb-4">
          If you have questions about this Privacy Policy or our privacy practices, or if you wish to exercise your privacy rights, please contact us:
        </p>
        <div className="space-y-3 bg-white border border-gray-300 rounded-lg p-4">
          <p className="text-black">
            <strong>Email:</strong> <a href="mailto:privacy@company.com" className="text-blue-600 hover:underline">privacy@company.com</a>
          </p>
          <p className="text-black">
            <strong>Data Protection Officer:</strong> <a href="mailto:dpo@company.com" className="text-blue-600 hover:underline">dpo@company.com</a>
          </p>
          <p className="text-black">
            <strong>Address:</strong> 123 Business Street, Suite 100, City, State 12345
          </p>
          <p className="text-black">
            <strong>Phone:</strong> <a href="tel:+15551234567" className="text-blue-600 hover:underline">+1 (555) 123-4567</a>
          </p>
        </div>
      </div>

      {/* Data Request Form */}
      <div className="glass-card border border-gray-300 p-6">
        <h5 className="text-lg font-semibold text-black mb-4">Submit a Privacy Request</h5>
        <form className="space-y-4">
          <div>
            <label className="block text-black font-medium mb-2">Request Type</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
              <option>Select a request type</option>
              <option>Access My Data</option>
              <option>Delete My Data</option>
              <option>Correct My Data</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-black font-medium mb-2">Email Address</label>
            <input type="email" placeholder="your@email.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" />
          </div>
          <div>
            <label className="block text-black font-medium mb-2">Details</label>
            <textarea placeholder="Describe your privacy request..." rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"></textarea>
          </div>
          <button type="submit" className="w-full px-6 py-2 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 font-medium transition">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
