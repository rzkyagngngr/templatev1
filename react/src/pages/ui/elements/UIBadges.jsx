import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export default function UIBadges() {
  const badgeTypes = [
    { label: 'Primary', color: 'bg-blue-600 =' },
    { label: 'Secondary', color: 'bg-gray-600 =' },
    { label: 'Success', color: 'bg-green-600 =' },
    { label: 'Warning', color: 'bg-yellow-600 text-black' },
    { label: 'Danger', color: 'bg-red-600 =' },
  ];

  const badgeSizes = [
    { label: 'Small', size: 'px-2 py-1 text-xs' },
    { label: 'Medium', size: 'px-3 py-1.5 text-sm' },
    { label: 'Large', size: 'px-4 py-2 text-base' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold =">Badges</h1>
          <nav className="flex items-center space-x-2 text-gray-400">
            <Home className="w-5 h-5" />
            <ChevronRight className="w-4 h-4" />
            <span>UI Kit</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">Badges</span>
          </nav>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Badge Types */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Badge Types</h3>
          <div className="flex flex-wrap gap-3">
            {badgeTypes.map((badge, idx) => (
              <span key={idx} className={`${badge.color} px-3 py-1 rounded-full text-sm font-semibold`}>
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* Badge Sizes */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Badge Sizes</h3>
          <div className="flex flex-wrap gap-3 items-center">
            {badgeSizes.map((badge, idx) => (
              <span key={idx} className={`${badge.size} bg-blue-600 text-slate-900 rounded-full font-semibold`}>
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* Outlined Badges */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Outlined Badges</h3>
          <div className="flex flex-wrap gap-3">
            {badgeTypes.map((badge, idx) => (
              <span key={idx} className={`border-2 px-3 py-1 rounded-full text-sm font-semibold text-black ${badge.color.split(' ')[0]}`}>
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* Pill Badges */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Pill Badges</h3>
          <div className="flex flex-wrap gap-3">
            {badgeTypes.map((badge, idx) => (
              <span key={idx} className={`${badge.color} px-4 py-1.5 rounded-full text-sm font-semibold`}>
                {badge.label} âœ“
              </span>
            ))}
          </div>
        </div>

        {/* Badges with Numbers */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Number Badges</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="relative inline-block">
              <span className="text-black">Messages</span>
              <span className="absolute -top-2 -right-2 bg-red-600 text-slate-900 px-2 py-0.5 rounded-full text-xs font-bold">5</span>
            </div>
            <div className="relative inline-block">
              <span className="text-black">Notifications</span>
              <span className="absolute -top-2 -right-2 bg-blue-600 text-slate-900 px-2 py-0.5 rounded-full text-xs font-bold">12</span>
            </div>
            <div className="relative inline-block">
              <span className="text-black">Updates</span>
              <span className="absolute -top-2 -right-2 bg-green-600 text-slate-900 px-2 py-0.5 rounded-full text-xs font-bold">3</span>
            </div>
          </div>
        </div>

        {/* Light Badges */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Light Badges</h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Primary Light</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Success Light</span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">Danger Light</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">Warning Light</span>
          </div>
        </div>
      </div>
    </div>
  );
}
