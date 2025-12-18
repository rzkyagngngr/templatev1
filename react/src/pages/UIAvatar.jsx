import React from 'react';
import { ChevronRight, Home, Circle } from 'lucide-react';

const UIAvatar = () => {
  const avatarUsers = [
    { name: 'Alice', initials: 'AL', color: 'from-blue-500 to-cyan-500' },
    { name: 'Bob', initials: 'BJ', color: 'from-purple-500 to-pink-500' },
    { name: 'Charlie', initials: 'CK', color: 'from-green-500 to-emerald-500' },
    { name: 'Diana', initials: 'DM', color: 'from-red-500 to-orange-500' },
    { name: 'Eva', initials: 'ER', color: 'from-yellow-500 to-orange-500' },
    { name: 'Frank', initials: 'FW', color: 'from-indigo-500 to-blue-500' },
  ];

  const statusIndicators = [
    { status: 'online', color: 'bg-green-500', label: 'Online' },
    { status: 'offline', color: 'bg-gray-400', label: 'Offline' },
    { status: 'away', color: 'bg-yellow-500', label: 'Away' },
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
        <span className="text-blue-600 font-medium">Avatars</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Avatar Components</h1>
        <p className="text-gray-600">Complete showcase of avatar variations, sizes, and states</p>
      </div>

      {/* Avatar Sizes */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Avatar Sizes</h2>
        <div className="flex flex-wrap items-center gap-8">
          {/* Extra Small */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold border border-white/60 shadow-lg">
              AL
            </div>
            <span className="text-xs text-gray-600">Extra Small (32px)</span>
          </div>

          {/* Small */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold border border-white/60 shadow-lg">
              BJ
            </div>
            <span className="text-xs text-gray-600">Small (40px)</span>
          </div>

          {/* Medium */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-base font-bold border border-white/60 shadow-lg">
              CK
            </div>
            <span className="text-xs text-gray-600">Medium (48px)</span>
          </div>

          {/* Large */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white text-lg font-bold border border-white/60 shadow-lg">
              DM
            </div>
            <span className="text-xs text-gray-600">Large (64px)</span>
          </div>

          {/* Extra Large */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-white text-xl font-bold border border-white/60 shadow-lg">
              ER
            </div>
            <span className="text-xs text-gray-600">Extra Large (80px)</span>
          </div>

          {/* 2XL */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold border-2 border-white/60 shadow-2xl">
              FW
            </div>
            <span className="text-xs text-gray-600">2XL (96px)</span>
          </div>
        </div>
      </div>

      {/* Avatar with Initials */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-purple-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Avatars with Initials</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
          {avatarUsers.map((user) => (
            <div key={user.name} className="flex flex-col items-center gap-2">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${user.color} flex items-center justify-center text-white text-lg font-bold border border-white/60 shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer`}>
                {user.initials}
              </div>
              <span className="text-sm text-gray-700 text-center font-medium">{user.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Avatar with Images */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-green-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Avatars with Images</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={`img-${num}`} className="flex flex-col items-center gap-2">
              <img
                src={`https://picsum.photos/200/200?random=${num}`}
                alt={`User ${num}`}
                className="w-16 h-16 rounded-full border-2 border-white/60 shadow-lg hover:scale-110 transition-all duration-300 object-cover"
              />
              <span className="text-sm text-gray-700 font-medium">User {num}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Avatar Status Indicators */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-yellow-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Avatar Status Indicators</h2>
        <div className="space-y-6">
          {statusIndicators.map((indicator) => (
            <div key={indicator.status} className="flex flex-wrap items-center gap-6">
              <div>
                <span className="text-sm font-semibold text-gray-700">{indicator.label}:</span>
              </div>
              <div className="flex gap-4">
                {[1, 2, 3].map((size) => {
                  const sizeClass = size === 1 ? 'w-10 h-10' : size === 2 ? 'w-12 h-12' : 'w-16 h-16';
                  return (
                    <div key={`${indicator.status}-${size}`} className="relative">
                      <div className={`${sizeClass} rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-white/60 shadow-lg flex items-center justify-center text-white font-bold`}>
                        <span className={size === 1 ? 'text-xs' : size === 2 ? 'text-sm' : 'text-base'}>AL</span>
                      </div>
                      <div className={`${indicator.color} rounded-full border-2 border-white absolute -bottom-1 -right-1`}
                        style={{
                          width: size === 1 ? '12px' : size === 2 ? '14px' : '16px',
                          height: size === 1 ? '12px' : size === 2 ? '14px' : '16px'
                        }}>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Avatar Groups */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-pink-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Avatar Groups</h2>
        
        <div className="space-y-8">
          {/* Horizontal Group - Overlapping */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Horizontal Overlapping Group</h3>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((num) => (
                <div
                  key={`group-horizontal-${num}`}
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${
                    num % 2 === 0
                      ? 'from-blue-500 to-blue-600'
                      : 'from-purple-500 to-purple-600'
                  } border-3 border-white/80 shadow-lg flex items-center justify-center text-white text-sm font-bold ${num > 1 ? '-ml-4' : ''}`}
                >
                  {num}
                </div>
              ))}
              <div className="ml-4 text-gray-600 font-medium">+3 more</div>
            </div>
          </div>

          {/* Vertical Stack Group */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Vertical Stack Group</h3>
            <div className="flex flex-col items-start gap-2">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={`group-vertical-${num}`}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 border-2 border-white/60 shadow-lg flex items-center justify-center text-white text-sm font-bold">
                    {num}
                  </div>
                  <span className="text-gray-700">User {num}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Grid Group */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Grid Group</h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div key={`group-grid-${num}`} className="flex flex-col items-center gap-2">
                  <img
                    src={`https://picsum.photos/200/200?random=${num + 10}`}
                    alt={`User ${num}`}
                    className="w-12 h-12 rounded-full border-2 border-white/60 shadow-lg object-cover"
                  />
                  <span className="text-xs text-gray-600">User</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Avatars */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-indigo-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Gradient Avatars</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
          {[
            'from-blue-500 to-cyan-500',
            'from-purple-500 to-pink-500',
            'from-green-500 to-emerald-500',
            'from-red-500 to-orange-500',
            'from-yellow-500 to-orange-500',
            'from-indigo-500 to-blue-500',
            'from-pink-500 to-rose-500',
            'from-teal-500 to-green-500',
            'from-orange-500 to-red-500',
            'from-cyan-500 to-blue-500',
            'from-purple-500 to-indigo-500',
            'from-rose-500 to-pink-500'
          ].map((gradient, idx) => (
            <div key={`gradient-${idx}`} className="flex flex-col items-center gap-2">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradient} border-2 border-white/60 shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer`}></div>
              <span className="text-xs text-gray-600 text-center">Gradient {idx + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Avatar with Badge */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-cyan-200/40 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Avatars with Badges</h2>
        <div className="flex flex-wrap gap-8 items-start">
          {/* With Number Badge */}
          <div className="flex flex-col items-center gap-2">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-white/60 shadow-lg flex items-center justify-center text-white text-lg font-bold">
                AL
              </div>
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white/60 shadow-lg">
                5
              </span>
            </div>
            <span className="text-sm text-gray-700">With Badge Count</span>
          </div>

          {/* With Status Badge */}
          <div className="flex flex-col items-center gap-2">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 border-2 border-white/60 shadow-lg flex items-center justify-center text-white text-lg font-bold">
                BJ
              </div>
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-2 py-1 rounded-full border-2 border-white/60 shadow-lg">
                New
              </span>
            </div>
            <span className="text-sm text-gray-700">With Status Badge</span>
          </div>

          {/* With Icon Badge */}
          <div className="flex flex-col items-center gap-2">
            <div className="relative">
              <img
                src="https://picsum.photos/200/200?random=20"
                alt="User"
                className="w-16 h-16 rounded-full border-2 border-white/60 shadow-lg object-cover"
              />
              <span className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white/60 shadow-lg">
                ✓
              </span>
            </div>
            <span className="text-sm text-gray-700">With Check Badge</span>
          </div>

          {/* With Label Badge */}
          <div className="flex flex-col items-center gap-2">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 border-2 border-white/60 shadow-lg flex items-center justify-center text-white text-lg font-bold">
                CK
              </div>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-white/60 shadow-lg whitespace-nowrap">
                Admin
              </span>
            </div>
            <span className="text-sm text-gray-700">With Label Badge</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIAvatar;
