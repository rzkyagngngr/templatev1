import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Terms() {
  const [expandedSection, setExpandedSection] = React.useState(null);

  const sections = [
    {
      id: 1,
      title: '1. Acceptance of Terms',
      content: 'By accessing and using this application, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      id: 2,
      title: '2. Use License',
      content: 'Permission is granted to temporarily download one copy of the materials (information or software) from our application for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.'
    },
    {
      id: 3,
      title: '3. Disclaimer',
      content: 'The materials on our application are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
    },
    {
      id: 4,
      title: '4. Limitations',
      content: 'In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our application.'
    },
    {
      id: 5,
      title: '5. Accuracy of Materials',
      content: 'The materials appearing on our application could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our application are accurate, complete, or current. We may make changes to the materials contained on our application at any time without notice.'
    },
    {
      id: 6,
      title: '6. Links',
      content: 'We have not reviewed all of the sites linked to our application and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user\'s own risk.'
    },
    {
      id: 7,
      title: '7. Modifications',
      content: 'We may revise these terms of service for our application at any time without notice. By using this application, you are agreeing to be bound by the then current version of these terms of service.'
    },
    {
      id: 8,
      title: '8. Governing Law',
      content: 'These terms and conditions are governed by and construed in accordance with the laws of the applicable jurisdiction, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.'
    }
  ];

  return (
    <div className="w-full space-y-6 pb-8">
      {/* Header */}
      <div>
        <h4 className="text-2xl font-bold text-black">Terms & Conditions</h4>
        <div className="text-sm text-gray-600 mt-2">Glacia / Pages / Terms & Conditions</div>
      </div>

      {/* Introduction */}
      <div className="glass-card border border-gray-300 p-6">
        <p className="text-black mb-3">
          These terms and conditions outline the rules and regulations for the use of our application.
        </p>
        <p className="text-black">
          By accessing this application we assume you accept these terms and conditions. Do not continue to use this application if you do not agree to take all of the terms and conditions stated on this page.
        </p>
        <div className="mt-4 p-4 bg-blue-50 border border-blue-300 rounded-lg">
          <p className="text-sm text-black">
            <strong>Last Updated:</strong> December 16, 2024
          </p>
        </div>
      </div>

      {/* Terms Sections */}
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

      {/* Additional Information */}
      <div className="glass-card border border-gray-300 p-6">
        <h5 className="text-lg font-semibold text-black mb-4">Important Information</h5>
        <div className="space-y-4">
          <div>
            <h6 className="text-black font-semibold mb-2">User Responsibilities</h6>
            <p className="text-black">
              Users are responsible for maintaining the confidentiality of their account information and password. They are fully responsible for all activities that occur under their account. Users agree to immediately notify us of any unauthorized use of their account.
            </p>
          </div>
          <div className="border-t border-gray-300 pt-4">
            <h6 className="text-black font-semibold mb-2">Prohibited Uses</h6>
            <p className="text-black">
              Users may not use this application for any illegal purpose or in violation of any laws. Specifically, users may not transmit any content that is defamatory, offensive, abusive, harmful to children, or otherwise objectionable.
            </p>
          </div>
          <div className="border-t border-gray-300 pt-4">
            <h6 className="text-black font-semibold mb-2">Intellectual Property Rights</h6>
            <p className="text-black">
              Unless otherwise stated, we own the intellectual property rights for all material on this application. All intellectual property rights are reserved. You may access this for personal use subject to restrictions set in these terms and conditions.
            </p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="glass-card border border-gray-300 p-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <h5 className="text-lg font-semibold text-black mb-4">Questions About Our Terms?</h5>
        <p className="text-black mb-4">
          If you have any questions about these Terms and Conditions, please contact us at:
        </p>
        <div className="space-y-2">
          <p className="text-black">
            <strong>Email:</strong> <a href="mailto:legal@company.com" className="text-blue-600 hover:underline">legal@company.com</a>
          </p>
          <p className="text-black">
            <strong>Address:</strong> 123 Business Street, Suite 100, City, State 12345
          </p>
          <p className="text-black">
            <strong>Phone:</strong> <a href="tel:+15551234567" className="text-blue-600 hover:underline">+1 (555) 123-4567</a>
          </p>
        </div>
      </div>

      {/* Acceptance */}
      <div className="glass-card border border-gray-300 p-6">
        <div className="flex items-start gap-4">
          <input type="checkbox" id="accept-terms" className="w-5 h-5 rounded mt-1 cursor-pointer" />
          <label htmlFor="accept-terms" className="text-black cursor-pointer">
            I have read and agree to the Terms & Conditions
          </label>
        </div>
      </div>
    </div>
  );
}
