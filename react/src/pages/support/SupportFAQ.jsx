import React from 'react';
import { HelpCircle, ChevronDown, Plus } from 'lucide-react';

export default function SupportFAQ() {
  const faqs = [
    { id: 1, question: 'How do I reset my password?', answer: 'Click on the forgot password link on the login page.' },
    { id: 2, question: 'What payment methods are accepted?', answer: 'We accept credit cards, PayPal, and bank transfers.' },
    { id: 3, question: 'How long does delivery take?', answer: 'Standard delivery takes 5-7 business days.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-black">FAQ - CREATED</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-slate-900 rounded-lg hover:bg-blue-600">
            <Plus className="w-5 h-5" />
            Add FAQ
          </button>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
              <details className="w-full">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/50">
                  <div className="flex items-center gap-4">
                    <HelpCircle className="w-5 h-5 text-black" />
                    <h3 className="font-semibold text-black">{faq.question}</h3>
                  </div>
                  <ChevronDown className="w-5 h-5 text-black" />
                </summary>
                <div className="px-6 py-4 border-t border-gray-300 bg-white/50">
                  <p className="text-black">{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
