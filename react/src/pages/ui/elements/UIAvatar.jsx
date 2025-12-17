import React from 'react';
import { ChevronRight, Home, User } from 'lucide-react';

export default function UIAvatar() {
  const sizes = ['w-8 h-8', 'w-12 h-12', 'w-16 h-16', 'w-24 h-24'];
  const colors = ['bg-blue-600', 'bg-green-600', 'bg-red-600', 'bg-purple-600', 'bg-yellow-600'];
  const initials = ['AB', 'CD', 'EF', 'GH', 'IJ'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold =">Avatar</h1>
          <nav className="flex items-center space-x-2 text-gray-400">
            <Home className="w-5 h-5" />
            <ChevronRight className="w-4 h-4" />
            <span>UI Kit</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">Avatar</span>
          </nav>
        </div>
      </div>

      {/* Avatar Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Avatar Sizes */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Avatar Sizes</h3>
          <div className="flex items-center gap-4">
            {sizes.map((size, idx) => (
              <div key={idx} className={`${size} ${colors[idx % colors.length]} rounded-full flex items-center justify-center text-slate-900 font-bold`}>
                <User className="w-1/2 h-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Avatar Colors */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Avatar Colors</h3>
          <div className="flex items-center gap-4 flex-wrap">
            {colors.map((color, idx) => (
              <div key={idx} className={`w-12 h-12 ${color} rounded-full flex items-center justify-center text-slate-900 font-bold text-sm`}>
                {initials[idx]}
              </div>
            ))}
          </div>
        </div>

        {/* Avatar Initials */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Avatar Initials</h3>
          <div className="flex items-center gap-4 flex-wrap">
            {['AB', 'CD', 'EF', 'GH', 'IJ'].map((initial, idx) => (
              <div key={idx} className={`w-12 h-12 ${colors[idx % colors.length]} rounded-full flex items-center justify-center text-slate-900 font-bold text-sm`}>
                {initial}
              </div>
            ))}
          </div>
        </div>

        {/* Avatar Shapes */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Avatar Shapes</h3>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-slate-900 font-bold">AB</div>
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-slate-900 font-bold">CD</div>
            <div className="w-12 h-12 bg-red-600 rounded-sm flex items-center justify-center text-slate-900 font-bold">EF</div>
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-slate-900 font-bold border-2 border-white">GH</div>
          </div>
        </div>

        {/* Avatar with Badge */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Avatar with Badge</h3>
          <div className="flex items-center gap-6 flex-wrap">
            <div className="relative inline-block">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-slate-900 font-bold">AB</div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="relative inline-block">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-slate-900 font-bold">CD</div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="relative inline-block">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-slate-900 font-bold">EF</div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full border-2 border-white text-xs flex items-center justify-center font-bold">3</div>
            </div>
          </div>
        </div>

        {/* Avatar Group */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Avatar Group</h3>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-slate-900 font-bold text-xs border-2 border-white">AB</div>
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-slate-900 font-bold text-xs border-2 border-white">CD</div>
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-slate-900 font-bold text-xs border-2 border-white">EF</div>
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-slate-900 font-bold text-xs border-2 border-white">+2</div>
          </div>
        </div>

        {/* Avatar Status */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Avatar Status</h3>
          <div className="space-y-3">
            {['Online', 'Offline', 'Away', 'Busy'].map((status, idx) => {
              const statusColors = ['bg-green-500', 'bg-gray-500', 'bg-yellow-500', 'bg-red-500'];
              return (
                <div key={idx} className="flex items-center gap-3">
                  <div className="relative inline-block">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-slate-900 font-bold text-xs">AB</div>
                    <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${statusColors[idx]} rounded-full border-2 border-white`}></div>
                  </div>
                  <span className="text-black font-semibold">{status}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
