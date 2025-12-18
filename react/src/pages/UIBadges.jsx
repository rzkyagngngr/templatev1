import React from 'react';
import { ChevronRight, Home, Star, Heart, Bell, Award, Zap, Flame, Sparkles, Check, X, AlertCircle } from 'lucide-react';

const UIBadges = () => {
  const solidBadges = [
    { label: 'Primary', className: 'bg-gradient-to-r from-blue-500 to-blue-600' },
    { label: 'Secondary', className: 'bg-gradient-to-r from-slate-500 to-slate-600' },
    { label: 'Success', className: 'bg-gradient-to-r from-green-500 to-green-600' },
    { label: 'Warning', className: 'bg-gradient-to-r from-yellow-500 to-yellow-600' },
    { label: 'Danger', className: 'bg-gradient-to-r from-red-500 to-red-600' },
    { label: 'Info', className: 'bg-gradient-to-r from-cyan-500 to-cyan-600' },
    { label: 'Purple', className: 'bg-gradient-to-r from-purple-500 to-purple-600' },
    { label: 'Emerald', className: 'bg-gradient-to-r from-emerald-500 to-emerald-600' }
  ];

  const softBadges = [
    { label: 'Blue', className: 'bg-blue-100 text-blue-700' },
    { label: 'Purple', className: 'bg-purple-100 text-purple-700' },
    { label: 'Green', className: 'bg-green-100 text-green-700' },
    { label: 'Red', className: 'bg-red-100 text-red-700' },
    { label: 'Yellow', className: 'bg-yellow-100 text-yellow-700' },
    { label: 'Pink', className: 'bg-pink-100 text-pink-700' },
    { label: 'Indigo', className: 'bg-indigo-100 text-indigo-700' },
    { label: 'Cyan', className: 'bg-cyan-100 text-cyan-700' }
  ];

  const outlineBadges = [
    { label: 'Blue', className: 'border-2 border-blue-500 text-blue-600' },
    { label: 'Purple', className: 'border-2 border-purple-500 text-purple-600' },
    { label: 'Green', className: 'border-2 border-green-500 text-green-600' },
    { label: 'Red', className: 'border-2 border-red-500 text-red-600' }
  ];

  const badgeSizes = [
    { size: 'Extra Small', className: 'px-2 py-1 text-xs' },
    { size: 'Small', className: 'px-3 py-1.5 text-sm' },
    { size: 'Medium', className: 'px-4 py-2 text-base' },
    { size: 'Large', className: 'px-6 py-2.5 text-lg' }
  ];

  const badgeIcons = [
    { Icon: Star, label: 'Star' },
    { Icon: Heart, label: 'Heart' },
    { Icon: Bell, label: 'Bell' },
    { Icon: Award, label: 'Award' },
    { Icon: Zap, label: 'Zap' },
    { Icon: Flame, label: 'Flame' },
    { Icon: Sparkles, label: 'Sparkles' },
    { Icon: Check, label: 'Check' },
    { Icon: X, label: 'Close' },
    { Icon: AlertCircle, label: 'Alert' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8">
        <a href="/" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
          <Home size={18} /> Dashboard
        </a>
        <ChevronRight size={18} className="text-gray-400" />
        <span className="text-gray-900 font-medium">UI Components</span>
        <ChevronRight size={18} className="text-gray-400" />
        <span className="text-blue-600 font-medium">Badges</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Badge Components</h1>
        <p className="text-gray-600">Complete showcase of badge variations and styles</p>
      </div>

      {/* Solid Badges */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Solid Badges (8 Colors)</h2>
        <div className="flex flex-wrap gap-3">
          {solidBadges.map((badge) => (
            <span
              key={badge.label}
              className={`${badge.className} text-white font-semibold backdrop-blur-xl rounded-2xl border border-white/50 px-4 py-2 shadow-lg hover:scale-105 transition-all duration-300 cursor-default`}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>

      {/* Pill Badges */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-purple-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Pill Badges (rounded-full)</h2>
        <div className="flex flex-wrap gap-3">
          {solidBadges.map((badge) => (
            <span
              key={`pill-${badge.label}`}
              className={`${badge.className} text-white font-semibold backdrop-blur-xl rounded-full border border-white/50 px-5 py-2 shadow-lg hover:scale-110 transition-all duration-300 cursor-default`}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>

      {/* Soft Badges */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-green-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Soft Badges (Light Backgrounds)</h2>
        <div className="flex flex-wrap gap-3">
          {softBadges.map((badge) => (
            <span
              key={`soft-${badge.label}`}
              className={`${badge.className} font-semibold backdrop-blur-xl rounded-2xl border border-white/60 px-4 py-2 shadow-lg hover:scale-105 transition-all duration-300 cursor-default`}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>

      {/* Outline Badges */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-yellow-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Outline Badges</h2>
        <div className="flex flex-wrap gap-3">
          {outlineBadges.map((badge) => (
            <span
              key={`outline-${badge.label}`}
              className={`${badge.className} font-semibold backdrop-blur-xl rounded-2xl bg-white/50 px-4 py-2 shadow-lg hover:scale-105 transition-all duration-300 cursor-default`}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>

      {/* Badge Sizes */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-pink-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Badge Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          {badgeSizes.map((badge) => (
            <div key={badge.size} className="flex flex-col items-center gap-2">
              <span className={`${badge.className} bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold backdrop-blur-xl rounded-2xl border border-white/50 shadow-lg`}>
                {badge.size}
              </span>
              <span className="text-xs text-gray-500">{badge.size}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Badges with Icons */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-indigo-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Badges with Icons</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {badgeIcons.map(({ Icon, label }, idx) => {
            const colors = ['from-blue-500 to-blue-600', 'from-purple-500 to-purple-600', 'from-green-500 to-green-600', 'from-red-500 to-red-600', 'from-yellow-500 to-yellow-600'];
            const colorClass = colors[idx % colors.length];
            return (
              <div key={label} className="flex flex-col items-center gap-2">
                <span className={`bg-gradient-to-r ${colorClass} text-white font-semibold backdrop-blur-xl rounded-2xl border border-white/50 px-4 py-2 shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2`}>
                  <Icon size={18} />
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Status Badges */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-cyan-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Status Badges</h2>
        
        <div className="space-y-4">
          {/* Success Status */}
          <div className="flex items-center gap-3">
            <span className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold backdrop-blur-xl rounded-2xl border border-white/50 px-4 py-2 shadow-lg flex items-center gap-2">
              <Check size={18} /> Verified
            </span>
            <span className="text-gray-600">Verified status with checkmark</span>
          </div>

          {/* Warning Status */}
          <div className="flex items-center gap-3">
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold backdrop-blur-xl rounded-2xl border border-white/50 px-4 py-2 shadow-lg flex items-center gap-2">
              <AlertCircle size={18} /> Pending
            </span>
            <span className="text-gray-600">Pending approval status</span>
          </div>

          {/* Error Status */}
          <div className="flex items-center gap-3">
            <span className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold backdrop-blur-xl rounded-2xl border border-white/50 px-4 py-2 shadow-lg flex items-center gap-2">
              <X size={18} /> Rejected
            </span>
            <span className="text-gray-600">Rejected status with close icon</span>
          </div>
        </div>
      </div>

      {/* Badge Combinations */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-rose-200/40 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Badge Combinations</h2>
        
        <div className="space-y-6">
          {/* Category with Badges */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Categories</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold backdrop-blur-xl rounded-full border border-white/50 px-4 py-1.5 text-sm shadow-lg">Electronics</span>
              <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold backdrop-blur-xl rounded-full border border-white/50 px-4 py-1.5 text-sm shadow-lg">New</span>
              <span className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold backdrop-blur-xl rounded-full border border-white/50 px-4 py-1.5 text-sm shadow-lg">Sale -30%</span>
              <span className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold backdrop-blur-xl rounded-full border border-white/50 px-4 py-1.5 text-sm shadow-lg">In Stock</span>
            </div>
          </div>

          {/* Skill Tags */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Skill Tags</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL', 'GraphQL'].map((skill, idx) => {
                const colors = ['bg-blue-100 text-blue-700', 'bg-purple-100 text-purple-700', 'bg-green-100 text-green-700', 'bg-red-100 text-red-700', 'bg-yellow-100 text-yellow-700', 'bg-indigo-100 text-indigo-700'];
                return (
                  <span key={skill} className={`${colors[idx % colors.length]} font-semibold backdrop-blur-xl rounded-full border border-white/60 px-3 py-1.5 text-sm shadow-lg hover:scale-105 transition-all duration-300`}>
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Priority Levels */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Priority Levels</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold backdrop-blur-xl rounded-2xl border border-white/50 px-4 py-1.5 shadow-lg">Low</span>
                <span className="text-gray-600">Low priority task</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold backdrop-blur-xl rounded-2xl border border-white/50 px-4 py-1.5 shadow-lg">Medium</span>
                <span className="text-gray-600">Medium priority task</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold backdrop-blur-xl rounded-2xl border border-white/50 px-4 py-1.5 shadow-lg">High</span>
                <span className="text-gray-600">High priority task</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIBadges;
