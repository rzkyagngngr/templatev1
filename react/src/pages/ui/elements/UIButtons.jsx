import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export default function UIButtons() {
  const buttonStyles = [
    { name: 'Primary', class: 'bg-blue-600 text-slate-900 hover:bg-blue-700' },
    { name: 'Secondary', class: 'bg-gray-600 text-slate-900 hover:bg-gray-700' },
    { name: 'Success', class: 'bg-green-600 text-slate-900 hover:bg-green-700' },
    { name: 'Warning', class: 'bg-yellow-600 text-black hover:bg-yellow-700' },
    { name: 'Danger', class: 'bg-red-600 text-slate-900 hover:bg-red-700' },
  ];

  const sizes = [
    { label: 'Small', class: 'px-3 py-1.5 text-sm' },
    { label: 'Medium', class: 'px-4 py-2 text-base' },
    { label: 'Large', class: 'px-6 py-3 text-lg' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold =">Buttons</h1>
          <nav className="flex items-center space-x-2 text-gray-400">
            <Home className="w-5 h-5" />
            <ChevronRight className="w-4 h-4" />
            <span>UI Kit</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">Buttons</span>
          </nav>
        </div>
      </div>

      {/* Buttons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Solid Buttons */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Solid Buttons</h3>
          <div className="space-y-2 flex flex-wrap gap-2">
            {buttonStyles.map((style, idx) => (
              <button key={idx} className={`${style.class} px-4 py-2 rounded font-semibold transition-all duration-200`}>
                {style.name}
              </button>
            ))}
          </div>
        </div>

        {/* Outline Buttons */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Outline Buttons</h3>
          <div className="space-y-2 flex flex-wrap gap-2">
            {buttonStyles.map((style, idx) => (
              <button
                key={idx}
                className={`border-2 px-4 py-2 rounded font-semibold text-black hover:bg-gray-100 transition-all duration-200 ${style.class.split(' ')[0]}`}
              >
                {style.name}
              </button>
            ))}
          </div>
        </div>

        {/* Different Sizes */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Button Sizes</h3>
          <div className="flex flex-wrap gap-3 items-center">
            {sizes.map((size, idx) => (
              <button key={idx} className={`${size.class} bg-blue-600 text-slate-900 rounded font-semibold hover:bg-blue-700 transition-all duration-200`}>
                {size.label}
              </button>
            ))}
          </div>
        </div>

        {/* Special States */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Button States</h3>
          <div className="flex flex-wrap gap-3 items-center">
            <button className="bg-blue-600 text-slate-900 px-4 py-2 rounded font-semibold hover:bg-blue-700 transition-all duration-200">
              Default
            </button>
            <button disabled className="bg-gray-400 text-gray-600 px-4 py-2 rounded font-semibold cursor-not-allowed opacity-60">
              Disabled
            </button>
            <button className="bg-blue-600 text-slate-900 px-4 py-2 rounded font-semibold hover:bg-blue-700 transition-all duration-200">
              Loading...
            </button>
            <button className="bg-blue-600 text-slate-900 px-4 py-2 rounded font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg">
              With Shadow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
