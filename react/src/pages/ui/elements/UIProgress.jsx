import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export default function UIProgress() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold =">Progress</h1>
          <nav className="flex items-center space-x-2 text-gray-400">
            <Home className="w-5 h-5" />
            <ChevronRight className="w-4 h-4" />
            <span>UI Kit</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">Progress</span>
          </nav>
        </div>
      </div>

      {/* Progress Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Progress */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Basic Progress</h3>
          <div className="space-y-3">
            <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
              <div className="bg-blue-600 h-full" style={{ width: '25%' }}></div>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
              <div className="bg-blue-600 h-full" style={{ width: '50%' }}></div>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
              <div className="bg-blue-600 h-full" style={{ width: '75%' }}></div>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
              <div className="bg-blue-600 h-full" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>

        {/* Colored Progress */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Colored Progress</h3>
          <div className="space-y-3">
            <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
              <div className="bg-blue-600 h-full" style={{ width: '50%' }}></div>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
              <div className="bg-green-600 h-full" style={{ width: '60%' }}></div>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
              <div className="bg-yellow-600 h-full" style={{ width: '70%' }}></div>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
              <div className="bg-red-600 h-full" style={{ width: '40%' }}></div>
            </div>
          </div>
        </div>

        {/* Progress with Label */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">With Label</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-black font-semibold text-sm">Basic</span>
                <span className="text-black text-sm">25%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
                <div className="bg-blue-600 h-full" style={{ width: '25%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-black font-semibold text-sm">Intermediate</span>
                <span className="text-black text-sm">50%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
                <div className="bg-green-600 h-full" style={{ width: '50%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-black font-semibold text-sm">Advanced</span>
                <span className="text-black text-sm">75%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
                <div className="bg-purple-600 h-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Sizes */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Different Sizes</h3>
          <div className="space-y-3">
            <div className="w-full bg-gray-300 rounded-full h-1 overflow-hidden">
              <div className="bg-blue-600 h-full" style={{ width: '50%' }}></div>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
              <div className="bg-blue-600 h-full" style={{ width: '50%' }}></div>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
              <div className="bg-blue-600 h-full" style={{ width: '50%' }}></div>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
              <div className="bg-blue-600 h-full" style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>

        {/* Striped Progress */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Striped</h3>
          <div className="space-y-3">
            <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
              <div
                className="bg-blue-600 h-full"
                style={{
                  width: '50%',
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
                }}
              ></div>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
              <div
                className="bg-green-600 h-full"
                style={{
                  width: '65%',
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Animated Progress */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Animated</h3>
          <div className="space-y-3">
            <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
              <div
                className="bg-blue-600 h-full"
                style={{
                  width: '50%',
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.2) 10px, rgba(255,255,255,.2) 20px)',
                  animation: 'moveStripes 1s linear infinite'
                }}
              ></div>
            </div>
            <style>
              {`@keyframes moveStripes {
                to {
                  backgroundPosition: 20px 0;
                }
              }`}
            </style>
            <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
              <div
                className="bg-green-600 h-full transition-all duration-1000"
                style={{
                  width: '75%'
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Circular Progress */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Circular Progress</h3>
          <div className="flex gap-6 justify-center flex-wrap">
            {[25, 50, 75].map(percent => (
              <div key={percent} className="relative w-20 h-20">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="4"
                    strokeDasharray={`${percent * 2.827} 282.7`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-sm">
                  {percent}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-segment Progress */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Multi-Segment</h3>
          <div className="space-y-3">
            <div className="flex gap-1">
              <div className="flex-1 bg-green-600 rounded h-3"></div>
              <div className="flex-1 bg-green-600 rounded h-3"></div>
              <div className="flex-1 bg-yellow-600 rounded h-3"></div>
              <div className="flex-1 bg-gray-300 rounded h-3"></div>
            </div>
            <div className="flex gap-1">
              <div className="flex-1 bg-blue-600 rounded h-3"></div>
              <div className="flex-1 bg-blue-600 rounded h-3"></div>
              <div className="flex-1 bg-blue-600 rounded h-3"></div>
              <div className="flex-1 bg-gray-300 rounded h-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
