import React, { useState } from 'react';
import { ChevronRight, Plus, Minus, HelpCircle } from 'lucide-react';

export default function PagesFAQ() {
  const [expanded, setExpanded] = useState(null);

  const faqs = [
    { id: 1, q: 'What is Glacia?', a: 'Glacia is a modern admin dashboard template built with React and Tailwind CSS, featuring glass morphism design and responsive components.' },
    { id: 2, q: 'How do I get started?', a: 'Simply clone the repository, install dependencies, and start building. Check our documentation for detailed setup instructions.' },
    { id: 3, q: 'Is it responsive?', a: 'Yes, Glacia is fully responsive and works perfectly on all devices from mobile to desktop.' },
    { id: 4, q: 'Can I customize it?', a: 'Absolutely! Glacia is highly customizable with Tailwind CSS and React components. Modify colors, layouts, and components to match your brand.' },
    { id: 5, q: 'What browsers are supported?', a: 'Glacia works on all modern browsers including Chrome, Firefox, Safari, and Edge.' },
    { id: 6, q: 'Is there documentation?', a: 'Yes, comprehensive documentation is available with API references, component guides, and code examples.' },
    { id: 7, q: 'Can I use it commercially?', a: 'Yes, Glacia is available for commercial use under our license. Check the license file for details.' },
    { id: 8, q: 'How do I get support?', a: 'You can reach our support team through email, Discord, or GitHub issues. We typically respond within 24 hours.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm">
        <span className="text-gray-600">Glacia</span>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="text-gray-600">Pages</span>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">FAQ</span>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-purple-400/50 border border-white/50 rounded-3xl shadow-lg">
            <HelpCircle size={40} className="text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600 text-lg">Find answers to common questions about Glacia</p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map(faq => (
          <div
            key={faq.id}
            className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <button
              onClick={() => setExpanded(expanded === faq.id ? null : faq.id)}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/30 transition-colors"
            >
              <h3 className="text-lg font-bold text-gray-900 text-left">{faq.q}</h3>
              <div className="p-2 backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-purple-400/50 border border-white/50 rounded-lg flex-shrink-0 ml-4">
                {expanded === faq.id ? (
                  <Minus size={20} className="text-blue-600" />
                ) : (
                  <Plus size={20} className="text-blue-600" />
                )}
              </div>
            </button>
            
            {expanded === faq.id && (
              <div className="px-8 pb-6 pt-2 border-t border-white/30">
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
