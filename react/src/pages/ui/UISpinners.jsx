import React, { useState } from 'react';
import { ChevronRight, Loader, Zap } from 'lucide-react';

export default function UISpinners() {
  const [isLoading, setIsLoading] = useState(false);

  const spinnerSizes = [
    { size: 'w-6 h-6', label: 'Small' },
    { size: 'w-8 h-8', label: 'Medium' },
    { size: 'w-12 h-12', label: 'Large' },
    { size: 'w-16 h-16', label: 'Extra Large' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="mb-8 flex items-center gap-2 text-sm">
        <span className="text-gray-600">Glacia</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600">UI</span>
        <span className="text-gray-400">/</span>
        <span className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Spinners</span>
      </div>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-3">Loading Spinners</h1>
        <p className="text-gray-600 text-lg mb-12">Loading indicators and spinner animations</p>

        {/* Basic Spinners */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Spinners</h2>
          <div className="flex gap-8 items-center flex-wrap">
            {spinnerSizes.map((spinner, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3">
                <div className={`${spinner.size} border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin`} />
                <span className="text-sm text-gray-600">{spinner.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Color Variants */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Color Variants</h2>
          <div className="flex gap-8 items-center flex-wrap">
            {[
              { color: 'border-t-blue-600', label: 'Blue' },
              { color: 'border-t-purple-600', label: 'Purple' },
              { color: 'border-t-green-600', label: 'Green' },
              { color: 'border-t-rose-600', label: 'Rose' },
            ].map((variant, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3">
                <div className={`w-8 h-8 border-4 border-gray-200 ${variant.color} rounded-full animate-spin`} />
                <span className="text-sm text-gray-600">{variant.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Spinners with Text */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Spinners with Text</h2>
          <div className="space-y-4">
            {['Loading...', 'Processing...', 'Saving...', 'Initializing...'].map((text, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white/30 rounded-2xl border border-white/50 hover:bg-white/40 transition-all">
                <div className="w-5 h-5 border-3 border-blue-200 border-t-blue-600 rounded-full animate-spin flex-shrink-0" />
                <span className="text-gray-700 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Loading States */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Button Loading States</h2>
          <button
            onClick={() => setIsLoading(!isLoading)}
            className={`px-6 py-3 backdrop-blur-xl rounded-2xl border border-white/50 font-semibold transition-all ${
              isLoading
                ? 'bg-gradient-to-br from-blue-500/50 to-purple-500/50 text-white'
                : 'bg-gradient-to-br from-blue-400/50 to-cyan-400/50 text-blue-900 hover:shadow-lg'
            }`}
          >
            <span className="flex items-center gap-2">
              {isLoading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
              {isLoading ? 'Loading...' : 'Click to Load'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
