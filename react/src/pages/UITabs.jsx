import React, { useState } from 'react';
import { Code, Settings, Bell, Users, BarChart3, Shield } from 'lucide-react';

export default function UITabs() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [activeVerticalTab, setActiveVerticalTab] = useState('vertical1');
  const [activeAccordion, setActiveAccordion] = useState('accordion1');

  const TabContent = ({ id, activeTab }) => {
    const content = {
      tab1: 'This is the content for the first tab. You can add any content here.',
      tab2: 'This is the content for the second tab with different information.',
      tab3: 'This is the content for the third tab.',
      tab4: 'This is the content for the fourth tab.',
    };
    return activeTab === id ? <p className="text-gray-700">{content[id]}</p> : null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400/50 to-blue-300/50 flex items-center justify-center">
            <span className="text-sm font-bold text-blue-600">UI</span>
          </div>
          <span className="text-sm font-medium text-gray-600">UI Elements</span>
          <span className="text-sm text-gray-400">/</span>
          <span className="text-sm text-blue-600 font-medium">Tabs</span>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Tabs & Accordions
        </h1>
        <p className="text-gray-600">Beautiful tab and accordion components</p>
      </div>

      {/* Basic Tabs */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Basic Tabs</h2>
        <div>
          <div className="flex gap-2 mb-6 border-b border-gray-200">
            {['tab1', 'tab2', 'tab3', 'tab4'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium transition-all ${
                  activeTab === tab
                    ? 'backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-blue-300/50 text-blue-700 rounded-t-2xl border border-white/50 shadow-blue-200/40'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Tab {tab.charAt(tab.length - 1)}
              </button>
            ))}
          </div>
          <div className="p-6 backdrop-blur-xl bg-gradient-to-br from-white/50 to-white/30 rounded-2xl border border-white/40">
            <TabContent id={activeTab} activeTab={activeTab} />
          </div>
        </div>
      </div>

      {/* Tabs with Icons */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Tabs with Icons</h2>
        <div>
          <div className="flex gap-2 mb-6 border-b border-gray-200 flex-wrap">
            {[
              { id: 'tab1', icon: Code, label: 'Code' },
              { id: 'tab2', icon: Settings, label: 'Settings' },
              { id: 'tab3', icon: Bell, label: 'Notifications' },
              { id: 'tab4', icon: Users, label: 'Users' },
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 font-medium transition-all flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'backdrop-blur-xl bg-gradient-to-br from-purple-400/50 to-purple-300/50 text-purple-700 rounded-t-2xl border border-white/50 shadow-purple-200/40'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>
          <div className="p-6 backdrop-blur-xl bg-gradient-to-br from-white/50 to-white/30 rounded-2xl border border-white/40">
            <TabContent id={activeTab} activeTab={activeTab} />
          </div>
        </div>
      </div>

      {/* Vertical Tabs */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Vertical Tabs</h2>
        <div className="flex gap-0">
          <div className="flex flex-col border-r border-gray-200">
            {['vertical1', 'vertical2', 'vertical3'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveVerticalTab(tab)}
                className={`px-6 py-4 text-left font-medium transition-all whitespace-nowrap ${
                  activeVerticalTab === tab
                    ? 'backdrop-blur-xl bg-gradient-to-br from-green-400/50 to-green-300/50 text-green-700 border-l-4 border-green-600'
                    : 'text-gray-600 hover:text-gray-800 border-l-4 border-transparent'
                }`}
              >
                Section {tab.charAt(tab.length - 1)}
              </button>
            ))}
          </div>
          <div className="flex-1 p-6">
            <div className="text-gray-700">
              {activeVerticalTab === 'vertical1' && 'This is the first vertical tab content.'}
              {activeVerticalTab === 'vertical2' && 'This is the second vertical tab content.'}
              {activeVerticalTab === 'vertical3' && 'This is the third vertical tab content.'}
            </div>
          </div>
        </div>
      </div>

      {/* Accordion */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Accordion</h2>
        <div className="space-y-3">
          {[
            { id: 'accordion1', title: 'What is this component?', content: 'This is an accordion component that allows users to expand and collapse sections of content.' },
            { id: 'accordion2', title: 'How do I use it?', content: 'Click on any accordion item to expand or collapse it. Only one item can be expanded at a time.' },
            { id: 'accordion3', title: 'Can I customize it?', content: 'Yes, you can customize colors, icons, and content to match your design needs.' },
            { id: 'accordion4', title: 'Is it responsive?', content: 'Yes, this accordion is fully responsive and works on all screen sizes.' },
          ].map(item => (
            <div key={item.id} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setActiveAccordion(activeAccordion === item.id ? null : item.id)}
                className={`w-full px-6 py-4 text-left font-medium transition-all flex items-center justify-between ${
                  activeAccordion === item.id
                    ? 'backdrop-blur-xl bg-gradient-to-br from-indigo-400/50 to-indigo-300/50 text-indigo-700'
                    : 'bg-white/30 text-gray-700 hover:bg-white/50'
                }`}
              >
                <span>{item.title}</span>
                <span className={`transition-transform ${activeAccordion === item.id ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {activeAccordion === item.id && (
                <div className="px-6 py-4 bg-white/20 text-gray-700 border-t border-gray-200">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Nested Accordions */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Nested Accordions</h2>
        <div className="space-y-3">
          <div className="border border-gray-200 rounded-2xl overflow-hidden">
            <button
              onClick={() => setActiveAccordion(activeAccordion === 'nested1' ? null : 'nested1')}
              className={`w-full px-6 py-4 text-left font-medium transition-all flex items-center justify-between ${
                activeAccordion === 'nested1'
                  ? 'backdrop-blur-xl bg-gradient-to-br from-pink-400/50 to-pink-300/50 text-pink-700'
                  : 'bg-white/30 text-gray-700 hover:bg-white/50'
              }`}
            >
              <span>Parent Item 1</span>
              <span className={`transition-transform ${activeAccordion === 'nested1' ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {activeAccordion === 'nested1' && (
              <div className="px-6 py-4 bg-white/20 border-t border-gray-200 space-y-2">
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === 'nested1-1' ? null : 'nested1-1')}
                    className={`w-full px-4 py-3 text-left text-sm font-medium transition-all flex items-center justify-between ${
                      activeAccordion === 'nested1-1'
                        ? 'backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-blue-300/50 text-blue-700'
                        : 'bg-white/30 text-gray-700'
                    }`}
                  >
                    <span>Child Item 1.1</span>
                    <span className={`transition-transform text-xs ${activeAccordion === 'nested1-1' ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {activeAccordion === 'nested1-1' && (
                    <div className="px-4 py-3 bg-white/10 text-gray-700 text-sm border-t border-gray-200">
                      Nested content for child item 1.1
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mixed Tab + Accordion */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Mixed Tab + Accordion</h2>
        <div>
          <div className="flex gap-2 mb-6 border-b border-gray-200 flex-wrap">
            {['mixed1', 'mixed2'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium transition-all ${
                  activeTab === tab
                    ? 'backdrop-blur-xl bg-gradient-to-br from-cyan-400/50 to-cyan-300/50 text-cyan-700 rounded-t-2xl border border-white/50 shadow-cyan-200/40'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab === 'mixed1' ? 'Overview' : 'Details'}
              </button>
            ))}
          </div>
          {activeTab === 'mixed1' && (
            <div className="p-6 space-y-4">
              <p className="text-gray-700">General overview content with accordion items:</p>
              <div className="space-y-2">
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === 'overview1' ? null : 'overview1')}
                    className={`w-full px-4 py-3 text-left font-medium transition-all flex items-center justify-between ${
                      activeAccordion === 'overview1'
                        ? 'backdrop-blur-xl bg-gradient-to-br from-cyan-400/50 to-cyan-300/50 text-cyan-700'
                        : 'bg-white/30 text-gray-700'
                    }`}
                  >
                    Overview Section 1
                    <span className={`transition-transform ${activeAccordion === 'overview1' ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {activeAccordion === 'overview1' && (
                    <div className="px-4 py-3 bg-white/20 border-t border-gray-200 text-gray-700">
                      Content for overview section 1
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          {activeTab === 'mixed2' && (
            <div className="p-6 space-y-4">
              <p className="text-gray-700">Detailed information with expandable sections:</p>
              <div className="space-y-2">
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === 'details1' ? null : 'details1')}
                    className={`w-full px-4 py-3 text-left font-medium transition-all flex items-center justify-between ${
                      activeAccordion === 'details1'
                        ? 'backdrop-blur-xl bg-gradient-to-br from-cyan-400/50 to-cyan-300/50 text-cyan-700'
                        : 'bg-white/30 text-gray-700'
                    }`}
                  >
                    Details Section 1
                    <span className={`transition-transform ${activeAccordion === 'details1' ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {activeAccordion === 'details1' && (
                    <div className="px-4 py-3 bg-white/20 border-t border-gray-200 text-gray-700">
                      Content for details section 1
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Animated Tab Switching */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Animated Tab Switching</h2>
        <div>
          <div className="flex gap-2 mb-6 border-b border-gray-200 flex-wrap">
            {[
              { id: 'anim1', icon: BarChart3, label: 'Analytics' },
              { id: 'anim2', icon: Shield, label: 'Security' },
              { id: 'anim3', icon: Settings, label: 'Settings' },
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 font-medium transition-all flex items-center gap-2 transform duration-300 ${
                    activeTab === tab.id
                      ? 'backdrop-blur-xl bg-gradient-to-br from-orange-400/50 to-orange-300/50 text-orange-700 rounded-t-2xl border border-white/50 shadow-orange-200/40 scale-105'
                      : 'text-gray-600 hover:text-gray-800 hover:scale-100'
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>
          <div className={`p-6 backdrop-blur-xl bg-gradient-to-br from-white/50 to-white/30 rounded-2xl border border-white/40 transition-all duration-300 ${
            ['anim1', 'anim2', 'anim3'].includes(activeTab) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            {activeTab === 'anim1' && <p className="text-gray-700">Analytics dashboard content</p>}
            {activeTab === 'anim2' && <p className="text-gray-700">Security settings and options</p>}
            {activeTab === 'anim3' && <p className="text-gray-700">General application settings</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
