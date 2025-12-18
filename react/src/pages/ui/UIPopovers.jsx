import React, { useState } from 'react';
import { ChevronRight, HelpCircle, MapPin, Phone, Mail } from 'lucide-react';

export default function UIPopovers() {
  const [activePopover, setActivePopover] = useState(null);
  const [tooltipHover, setTooltipHover] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="mb-8 flex items-center gap-2 text-sm">
        <span className="text-gray-600">Glacia</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600">UI</span>
        <span className="text-gray-400">/</span>
        <span className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Popovers & Tooltips</span>
      </div>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-3">Popovers & Tooltips</h1>
        <p className="text-gray-600 text-lg mb-12">Hover tooltips and click popovers</p>

        {/* Tooltips */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tooltips</h2>
          <div className="flex gap-6 flex-wrap">
            {['Top', 'Right', 'Bottom', 'Left'].map((pos) => (
              <div key={pos} className="relative">
                <button
                  onMouseEnter={() => setTooltipHover(pos)}
                  onMouseLeave={() => setTooltipHover(null)}
                  className="px-4 py-2 backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-cyan-400/50 border border-white/50 rounded-2xl text-blue-900 font-semibold hover:shadow-lg transition-all"
                >
                  Hover {pos}
                </button>
                {tooltipHover === pos && (
                  <div className={`absolute z-10 backdrop-blur-xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 text-white px-3 py-2 rounded-xl text-sm font-medium whitespace-nowrap
                    ${pos === 'Top' ? 'bottom-full mb-2 left-1/2 -translate-x-1/2' : ''}
                    ${pos === 'Right' ? 'left-full ml-2 top-1/2 -translate-y-1/2' : ''}
                    ${pos === 'Bottom' ? 'top-full mt-2 left-1/2 -translate-x-1/2' : ''}
                    ${pos === 'Left' ? 'right-full mr-2 top-1/2 -translate-y-1/2' : ''}
                  `}>
                    Tooltip at {pos}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Popovers */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popovers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Popover */}
            <div className="relative">
              <button
                onClick={() => setActivePopover(activePopover === 'contact' ? null : 'contact')}
                className="w-full px-4 py-3 backdrop-blur-xl bg-gradient-to-br from-purple-400/50 to-pink-400/50 border border-white/50 rounded-2xl text-purple-900 font-semibold hover:shadow-lg transition-all"
              >
                Contact Info
              </button>
              {activePopover === 'contact' && (
                <div className="absolute top-full mt-3 left-0 z-10 backdrop-blur-2xl bg-gradient-to-br from-white/95 to-white/90 rounded-3xl border border-white/60 shadow-xl shadow-purple-200/40 p-6 w-72">
                  <h3 className="font-bold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="text-purple-600" size={18} />
                      <span className="text-gray-700">info@example.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-purple-600" size={18} />
                      <span className="text-gray-700">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="text-purple-600" size={18} />
                      <span className="text-gray-700">123 Business St</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Help Popover */}
            <div className="relative">
              <button
                onClick={() => setActivePopover(activePopover === 'help' ? null : 'help')}
                className="w-full px-4 py-3 backdrop-blur-xl bg-gradient-to-br from-amber-400/50 to-orange-400/50 border border-white/50 rounded-2xl text-amber-900 font-semibold hover:shadow-lg transition-all"
              >
                <HelpCircle className="inline mr-2" size={18} />
                Need Help?
              </button>
              {activePopover === 'help' && (
                <div className="absolute top-full mt-3 left-0 z-10 backdrop-blur-2xl bg-gradient-to-br from-white/95 to-white/90 rounded-3xl border border-white/60 shadow-xl shadow-amber-200/40 p-6 w-80">
                  <h3 className="font-bold text-gray-900 mb-3">Quick Help</h3>
                  <p className="text-sm text-gray-700 mb-4">We're here to help! Check out our documentation or contact support for assistance.</p>
                  <button className="w-full px-3 py-2 backdrop-blur-xl bg-gradient-to-br from-amber-400/50 to-orange-400/50 border border-white/50 rounded-xl text-amber-900 font-semibold hover:shadow-lg transition-all">
                    View Docs
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Rich Popovers */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Rich Content Popovers</h2>
          <div className="relative inline-block">
            <button
              onClick={() => setActivePopover(activePopover === 'rich' ? null : 'rich')}
              className="px-6 py-3 backdrop-blur-xl bg-gradient-to-br from-indigo-400/50 to-blue-400/50 border border-white/50 rounded-2xl text-indigo-900 font-semibold hover:shadow-lg transition-all"
            >
              Rich Popover
            </button>
            {activePopover === 'rich' && (
              <div className="absolute top-full mt-3 left-0 z-10 backdrop-blur-2xl bg-gradient-to-br from-white/95 to-white/90 rounded-3xl border border-white/60 shadow-xl shadow-indigo-200/40 overflow-hidden w-96">
                <img src="https://picsum.photos/400/200?random=1" alt="Popover" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Card Title</h3>
                  <p className="text-gray-700 text-sm mb-4">This is a rich popover with an image, title, and description.</p>
                  <button className="w-full px-3 py-2 backdrop-blur-xl bg-gradient-to-br from-indigo-500/50 to-blue-500/50 border border-white/50 rounded-xl text-white font-semibold hover:shadow-lg transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
