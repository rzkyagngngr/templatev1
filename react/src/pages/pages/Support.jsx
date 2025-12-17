import React, { useState } from 'react';
import { HelpCircle, MessageCircle, Mail, Phone, FileText, Search, ChevronRight, Clock } from 'lucide-react';

export default function Support() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const faqs = [
    {
      id: 1,
      category: 'Billing',
      question: 'How can I update my billing information?',
      answer: 'You can update your billing information in the Settings page under the Billing section. Click on "Update Payment Method" and follow the prompts to add or modify your payment information.'
    },
    {
      id: 2,
      category: 'Account',
      question: 'How do I reset my password?',
      answer: 'Click on "Forgot Password" on the login page, enter your email address, and follow the instructions sent to your email to reset your password.'
    },
    {
      id: 3,
      category: 'Technical',
      question: 'What browsers are supported?',
      answer: 'We support the latest versions of Chrome, Firefox, Safari, and Edge. For the best experience, please keep your browser updated.'
    },
    {
      id: 4,
      category: 'Account',
      question: 'How do I delete my account?',
      answer: 'Go to Settings > Account Settings > Danger Zone and click "Delete Account". Note that this action is permanent and cannot be undone.'
    },
    {
      id: 5,
      category: 'Billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for enterprise customers.'
    },
    {
      id: 6,
      category: 'Technical',
      question: 'Is there an API available?',
      answer: 'Yes! We provide a comprehensive REST API. Check our documentation at docs.company.com/api for complete details and examples.'
    },
    {
      id: 7,
      category: 'General',
      question: 'What is your uptime guarantee?',
      answer: 'We guarantee 99.9% uptime for our services. Our status page at status.company.com shows real-time system status.'
    },
    {
      id: 8,
      category: 'Security',
      question: 'How is my data secured?',
      answer: 'Your data is encrypted in transit and at rest using industry-standard encryption. We comply with GDPR, CCPA, and other data protection regulations.'
    }
  ];

  const supportChannels = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Response time: 24 hours',
      contact: 'support@company.com',
      available: '24/7'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Response time: Immediate',
      contact: '+1 (555) 123-4567',
      available: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Response time: <5 minutes',
      contact: 'Start Chat',
      available: 'Mon-Fri 9AM-6PM EST'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ['All', ...new Set(faqs.map(f => f.category))];

  return (
    <div className="w-full space-y-6 pb-8">
      {/* Header */}
      <div>
        <h4 className="text-2xl font-bold text-black">Help & Support</h4>
        <div className="text-sm text-gray-600 mt-2">Glacia / Pages / Support</div>
      </div>

      {/* Support Channels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {supportChannels.map((channel, i) => {
          const Icon = channel.icon;
          return (
            <div key={i} className="glass-card border border-gray-300 p-6 hover:shadow-lg transition">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Icon size={24} className="text-blue-600" />
              </div>
              <h5 className="text-lg font-semibold text-black mb-2">{channel.title}</h5>
              <p className="text-sm text-gray-600 mb-4">{channel.description}</p>
              <div className="space-y-2 pt-4 border-t border-gray-300">
                <p className="text-sm text-black font-medium">{channel.contact}</p>
                <p className="text-xs text-gray-600">{channel.available}</p>
              </div>
              <button className="w-full mt-4 px-4 py-2 border border-gray-300 text-black rounded-lg hover:bg-gray-50 transition font-medium">
                Contact Us
              </button>
            </div>
          );
        })}
      </div>

      {/* Quick Links */}
      <div className="glass-card border border-gray-300 p-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <h5 className="text-lg font-semibold text-black mb-4">Quick Resources</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: FileText, label: 'Documentation', desc: 'Complete guides and references' },
            { icon: HelpCircle, label: 'Video Tutorials', desc: 'Step-by-step video guides' },
            { icon: MessageCircle, label: 'Community Forum', desc: 'Get help from our community' },
            { icon: Clock, label: 'Status Page', desc: 'System status and incidents' }
          ].map((resource, i) => {
            const Icon = resource.icon;
            return (
              <button key={i} className="p-4 bg-white border border-gray-300 rounded-lg hover:shadow-md transition text-left">
                <Icon size={20} className="text-blue-600 mb-2" />
                <h6 className="text-black font-semibold text-sm mb-1">{resource.label}</h6>
                <p className="text-xs text-gray-600">{resource.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-4">
        <h5 className="text-xl font-semibold text-black">Frequently Asked Questions</h5>

        {/* Search */}
        <div className="glass-card border border-gray-300 p-6">
          <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-3">
            <Search size={20} className="text-gray-600" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 outline-none text-black placeholder-gray-500"
            />
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="glass-card border border-gray-300 overflow-hidden hover:shadow-md transition"
            >
              <button
                onClick={() => setSelectedArticle(selectedArticle === faq.id ? null : faq.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <div className="text-left flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                      {faq.category}
                    </span>
                    <p className="text-black font-semibold">{faq.question}</p>
                  </div>
                </div>
                <ChevronRight
                  size={20}
                  className={`text-gray-600 transition-transform flex-shrink-0 ${
                    selectedArticle === faq.id ? 'rotate-90' : ''
                  }`}
                />
              </button>

              {selectedArticle === faq.id && (
                <div className="px-6 pb-6 pt-0 border-t border-gray-300">
                  <p className="text-black leading-relaxed">{faq.answer}</p>
                  <button className="mt-4 text-blue-600 hover:underline text-sm font-medium flex items-center gap-1">
                    Read full article <ChevronRight size={14} />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="glass-card border border-gray-300 p-12 text-center">
            <HelpCircle size={40} className="mx-auto text-gray-400 mb-3" />
            <p className="text-black font-medium mb-2">No FAQs found</p>
            <p className="text-gray-600">Try different search terms or contact our support team</p>
          </div>
        )}
      </div>

      {/* Contact Form */}
      <div className="glass-card border border-gray-300 p-6">
        <h5 className="text-lg font-semibold text-black mb-4">Still need help? Contact us</h5>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-black font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>
          </div>

          <div>
            <label className="block text-black font-medium mb-2">Subject</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
              <option>Select a subject</option>
              <option>Technical Issue</option>
              <option>Billing Question</option>
              <option>Feature Request</option>
              <option>Account Issue</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-black font-medium mb-2">Priority</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
              <option>Normal</option>
              <option>High</option>
              <option>Urgent</option>
            </select>
          </div>

          <div>
            <label className="block text-black font-medium mb-2">Message</label>
            <textarea
              placeholder="Describe your issue..."
              rows="6"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Submit Support Request
          </button>
        </form>
      </div>

      {/* Support Hours */}
      <div className="glass-card border border-gray-300 p-6">
        <h5 className="text-lg font-semibold text-black mb-4">Support Hours</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 border border-green-300 rounded-lg">
            <p className="text-black font-semibold mb-2">Email Support</p>
            <p className="text-black text-sm">Available 24/7</p>
            <p className="text-gray-600 text-xs mt-2">Response within 24 hours</p>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-300 rounded-lg">
            <p className="text-black font-semibold mb-2">Phone & Chat Support</p>
            <p className="text-black text-sm">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
            <p className="text-black text-sm">Saturday - Sunday: 10:00 AM - 4:00 PM EST</p>
          </div>
        </div>
      </div>
    </div>
  );
}
