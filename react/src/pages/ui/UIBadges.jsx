import React from 'react';

export default function UIBadges() {
  const solidBadges = [
    { label: 'Primary', className: 'bg-blue-600 =' },
    { label: 'Secondary', className: 'bg-gray-600 =' },
    { label: 'Success', className: 'bg-green-600 =' },
    { label: 'Danger', className: 'bg-red-600 =' },
    { label: 'Warning', className: 'bg-yellow-500 text-black' },
    { label: 'Info', className: 'bg-cyan-600 =' },
    { label: 'Light', className: 'bg-gray-100 text-black' },
    { label: 'Dark', className: 'bg-gray-900 =' },
  ];

  const pillBadges = [
    { label: 'Primary', className: 'bg-blue-600 =' },
    { label: 'Secondary', className: 'bg-gray-600 =' },
    { label: 'Success', className: 'bg-green-600 =' },
    { label: 'Danger', className: 'bg-red-600 =' },
    { label: 'Warning', className: 'bg-yellow-500 text-black' },
    { label: 'Info', className: 'bg-cyan-600 =' },
  ];

  const softBadges = [
    { label: 'Primary', className: 'bg-blue-100 text-blue-800' },
    { label: 'Secondary', className: 'bg-gray-100 text-gray-800' },
    { label: 'Success', className: 'bg-green-100 text-green-800' },
    { label: 'Danger', className: 'bg-red-100 text-red-800' },
  ];

  const outlineBadges = [
    { label: 'Primary', className: 'border-2 border-blue-600 text-blue-600 bg-transparent' },
    { label: 'Secondary', className: 'border-2 border-gray-600 text-gray-600 bg-transparent' },
    { label: 'Success', className: 'border-2 border-green-600 text-green-600 bg-transparent' },
    { label: 'Danger', className: 'border-2 border-red-600 text-red-600 bg-transparent' },
  ];

  return (
    <div className="w-full space-y-8 p-6">
      {/* Header */}
      <div>
        <nav className="flex gap-2 text-sm mb-4">
          <span className="text-gray-500">Glacia</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-500">UI Kit</span>
          <span className="text-gray-400">/</span>
          <span className="text-black font-medium">Badges</span>
        </nav>
        <h1 className="text-4xl font-bold text-black">Badges</h1>
        <p className="text-gray-600 mt-2">Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
      </div>

      {/* Solid Badges */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg hover:bg-white/50 transition-all">
        <h5 className="text-lg font-bold text-black mb-2">Badge Examples</h5>
        <p className="text-gray-600 text-sm mb-6">Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
        <div className="flex flex-wrap gap-3">
          {solidBadges.map((badge, idx) => (
            <span key={idx} className={`${badge.className} px-4 py-2 rounded-lg text-sm font-medium`}>
              {badge.label}
            </span>
          ))}
        </div>
      </div>

      {/* Pill Badges */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg hover:bg-white/50 transition-all">
        <h5 className="text-lg font-bold text-black mb-2">Pill Badges Examples</h5>
        <p className="text-gray-600 text-sm mb-6">Documentation and examples for badges, our small count and labeling component.</p>
        <div className="flex flex-wrap gap-3">
          {pillBadges.map((badge, idx) => (
            <span key={idx} className={`${badge.className} px-5 py-1.5 rounded-full text-sm font-medium`}>
              {badge.label}
            </span>
          ))}
        </div>
      </div>

      {/* Soft Badges */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg hover:bg-white/50 transition-all">
        <h5 className="text-lg font-bold text-black mb-2">Soft Badges</h5>
        <p className="text-gray-600 text-sm mb-6">Light background badges with colored text.</p>
        <div className="flex flex-wrap gap-3">
          {softBadges.map((badge, idx) => (
            <span key={idx} className={`${badge.className} px-4 py-2 rounded-lg text-sm font-medium`}>
              {badge.label}
            </span>
          ))}
        </div>
      </div>

      {/* Outline Badges */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg hover:bg-white/50 transition-all">
        <h5 className="text-lg font-bold text-black mb-2">Outline Badges</h5>
        <p className="text-gray-600 text-sm mb-6">Outline style badges with transparency.</p>
        <div className="flex flex-wrap gap-3">
          {outlineBadges.map((badge, idx) => (
            <span key={idx} className={`${badge.className} px-4 py-2 rounded-lg text-sm font-medium`}>
              {badge.label}
            </span>
          ))}
        </div>
      </div>

      {/* Badge with Count */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg hover:bg-white/50 transition-all">
        <h5 className="text-lg font-bold text-black mb-2">Badges as Counts</h5>
        <p className="text-gray-600 text-sm mb-6">Use badges to highlight counts and numbers.</p>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <span className="text-black">Emails</span>
            <span className="bg-blue-600 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">3</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-black">Notifications</span>
            <span className="bg-red-600 text-slate-900 px-2.5 py-1 rounded-full text-xs font-bold">5</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-black">Messages</span>
            <span className="bg-green-600 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">12</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-black">Updates</span>
            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">7</span>
          </div>
        </div>
      </div>

      {/* Badge Sizes */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg hover:bg-white/50 transition-all">
        <h5 className="text-lg font-bold text-black mb-2">Badge Sizes</h5>
        <p className="text-gray-600 text-sm mb-6">Different size variations for badges.</p>
        <div className="flex flex-wrap items-center gap-4">
          <span className="bg-blue-600 text-slate-900 px-2 py-1 rounded text-xs font-medium">Extra Small</span>
          <span className="bg-blue-600 text-slate-900 px-3 py-1.5 rounded-lg text-sm font-medium">Small</span>
          <span className="bg-blue-600 text-slate-900 px-4 py-2 rounded-lg text-base font-medium">Medium</span>
          <span className="bg-blue-600 text-slate-900 px-6 py-2.5 rounded-lg text-lg font-medium">Large</span>
        </div>
      </div>
    </div>
  );
}
