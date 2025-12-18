import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function UITabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState(0);

  const tabs = [
    { label: 'Overview', icon: '📊', content: 'This is the overview tab with general information about the product.' },
    { label: 'Features', icon: '✨', content: 'Explore our amazing features and capabilities.' },
    { label: 'Pricing', icon: '💰', content: 'Check out our flexible pricing plans.' },
    { label: 'Support', icon: '🎧', content: 'Get help from our dedicated support team.' },
  ];

  const accordionItems = [
    { title: 'What is this?', content: 'This is an accordion item that expands and collapses with a smooth animation.' },
    { title: 'How do I use it?', content: 'Click on any accordion item to expand it and see the content inside.' },
    { title: 'Can I customize it?', content: 'Yes! You can customize the colors, icons, and animations to match your design.' },
    { title: 'Is it responsive?', content: 'Absolutely! This accordion is fully responsive and works on all devices.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="mb-8 flex items-center gap-2 text-sm">
        <span className="text-gray-600">Glacia</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600">UI</span>
        <span className="text-gray-400">/</span>
        <span className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Tabs & Accordions</span>
      </div>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-3">Tabs & Accordions</h1>
        <p className="text-gray-600 text-lg mb-12">Organize content with tabs and accordion components</p>

        {/* Basic Tabs */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Tabs</h2>
          
          {/* Tab Headers */}
          <div className="flex gap-2 mb-6 border-b border-white/30 pb-0 flex-wrap">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 font-semibold rounded-t-2xl transition-all ${
                  activeTab === idx
                    ? 'backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-cyan-400/50 border border-white/50 text-blue-900 shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="backdrop-blur-xl bg-white/30 rounded-2xl border border-white/50 p-6">
            <p className="text-gray-800 text-lg mb-4 font-medium">{tabs[activeTab].label}</p>
            <p className="text-gray-700">{tabs[activeTab].content}</p>
          </div>
        </div>

        {/* Accordion */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Accordion</h2>
          <div className="space-y-3">
            {accordionItems.map((item, idx) => (
              <div key={idx} className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === idx ? -1 : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/30 transition-all font-semibold text-gray-900"
                >
                  <span>{item.title}</span>
                  <div className="p-2 backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-purple-400/50 border border-white/50 rounded-lg">
                    {expandedAccordion === idx ? (
                      <ChevronUp className="text-blue-600" size={20} />
                    ) : (
                      <ChevronDown className="text-gray-600" size={20} />
                    )}
                  </div>
                </button>
                {expandedAccordion === idx && (
                  <div className="px-6 pb-4 text-gray-700 border-t border-white/30">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Tabs */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Vertical Tabs</h2>
          <div className="flex gap-4">
            {/* Tab Sidebar */}
            <div className="flex flex-col gap-2 min-w-[200px]">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-3 text-left font-semibold rounded-2xl transition-all ${
                    activeTab === idx
                      ? 'backdrop-blur-xl bg-gradient-to-br from-purple-400/50 to-pink-400/50 border border-white/50 text-purple-900 shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/20'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 backdrop-blur-xl bg-white/30 rounded-2xl border border-white/50 p-6">
              <p className="text-gray-800 text-lg mb-4 font-medium">{tabs[activeTab].label}</p>
              <p className="text-gray-700">{tabs[activeTab].content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
