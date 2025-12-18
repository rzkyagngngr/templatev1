import React from 'react';
import { Loader, Zap } from 'lucide-react';

export default function UISpinners() {
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
          <span className="text-sm text-blue-600 font-medium">Spinners</span>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Loading Spinners
        </h1>
        <p className="text-gray-600">Beautiful loading and spinner components</p>
      </div>

      {/* Basic Loading Spinner */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Basic Loading Spinner</h2>
        <div className="flex justify-center p-8">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
        </div>
      </div>

      {/* Spinner Sizes */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Spinner Sizes</h2>
        <div className="flex items-center justify-center gap-12">
          {/* Small */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-3 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
            <span className="text-xs text-gray-600">Small</span>
          </div>

          {/* Medium */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
            <span className="text-xs text-gray-600">Medium</span>
          </div>

          {/* Large */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
            <span className="text-xs text-gray-600">Large</span>
          </div>

          {/* Extra Large */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
            <span className="text-xs text-gray-600">XL</span>
          </div>
        </div>
      </div>

      {/* Different Animations */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Different Animations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Rotate */}
          <div className="flex flex-col items-center gap-3">
            <div className="p-6 backdrop-blur-xl bg-gradient-to-br from-blue-400/20 to-blue-300/20 rounded-2xl border border-white/40">
              <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
            </div>
            <span className="text-xs text-gray-600 text-center">Spin</span>
          </div>

          {/* Pulse */}
          <div className="flex flex-col items-center gap-3">
            <div className="p-6 backdrop-blur-xl bg-gradient-to-br from-green-400/20 to-green-300/20 rounded-2xl border border-white/40">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400/50 to-green-300/50 rounded-full animate-pulse" />
            </div>
            <span className="text-xs text-gray-600 text-center">Pulse</span>
          </div>

          {/* Bounce */}
          <div className="flex flex-col items-center gap-3">
            <div className="p-6 backdrop-blur-xl bg-gradient-to-br from-yellow-400/20 to-yellow-300/20 rounded-2xl border border-white/40">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400/50 to-yellow-300/50 rounded-full animate-bounce" />
            </div>
            <span className="text-xs text-gray-600 text-center">Bounce</span>
          </div>

          {/* Ping */}
          <div className="flex flex-col items-center gap-3">
            <div className="p-6 backdrop-blur-xl bg-gradient-to-br from-red-400/20 to-red-300/20 rounded-2xl border border-white/40 relative">
              <div className="w-10 h-10 bg-gradient-to-br from-red-400/50 to-red-300/50 rounded-full animate-ping" />
            </div>
            <span className="text-xs text-gray-600 text-center">Ping</span>
          </div>
        </div>
      </div>

      {/* Spinners with Text */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Spinners with Text</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center gap-4 p-6 backdrop-blur-xl bg-gradient-to-br from-blue-400/10 to-blue-300/10 rounded-2xl border border-white/40">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
            <p className="text-sm text-gray-700">Loading...</p>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 backdrop-blur-xl bg-gradient-to-br from-purple-400/10 to-purple-300/10 rounded-2xl border border-white/40">
            <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
            <p className="text-sm text-gray-700">Processing...</p>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 backdrop-blur-xl bg-gradient-to-br from-green-400/10 to-green-300/10 rounded-2xl border border-white/40">
            <div className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin" />
            <p className="text-sm text-gray-700">Saving...</p>
          </div>
        </div>
      </div>

      {/* Spinners in Different Colors */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Spinners in Different Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Blue */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
            <span className="text-xs text-gray-600">Blue</span>
          </div>

          {/* Green */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin" />
            <span className="text-xs text-gray-600">Green</span>
          </div>

          {/* Purple */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
            <span className="text-xs text-gray-600">Purple</span>
          </div>

          {/* Pink */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin" />
            <span className="text-xs text-gray-600">Pink</span>
          </div>

          {/* Orange */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin" />
            <span className="text-xs text-gray-600">Orange</span>
          </div>
        </div>
      </div>

      {/* Spinners in Buttons */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Spinners in Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <button className="backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-blue-300/50 rounded-2xl border border-white/50 px-6 py-3 flex items-center gap-2 transition-all hover:scale-105 shadow-blue-200/40 font-medium text-blue-700">
            <div className="w-4 h-4 border-2 border-blue-300 border-t-blue-600 rounded-full animate-spin" />
            Loading
          </button>

          <button className="backdrop-blur-xl bg-gradient-to-br from-green-400/50 to-green-300/50 rounded-2xl border border-white/50 px-6 py-3 flex items-center gap-2 transition-all hover:scale-105 shadow-green-200/40 font-medium text-green-700">
            <Loader size={18} className="animate-spin" />
            Processing
          </button>

          <button className="backdrop-blur-xl bg-gradient-to-br from-purple-400/50 to-purple-300/50 rounded-2xl border border-white/50 px-6 py-3 flex items-center gap-2 transition-all hover:scale-105 shadow-purple-200/40 font-medium text-purple-700">
            <Zap size={18} className="animate-bounce" />
            Saving
          </button>

          <button className="backdrop-blur-xl bg-gradient-to-br from-red-400/50 to-red-300/50 rounded-2xl border border-white/50 px-6 py-3 flex items-center gap-2 transition-all hover:scale-105 shadow-red-200/40 font-medium text-red-700" disabled>
            <div className="w-4 h-4 bg-red-300 rounded-full animate-pulse" />
            Uploading
          </button>
        </div>
      </div>

      {/* Skeleton Loading States */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Skeleton Loading States</h2>
        <div className="space-y-4">
          {/* Card Skeleton */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-gray-400/10 to-gray-300/10 rounded-2xl border border-white/40 p-4">
            <div className="h-4 bg-gradient-to-r from-gray-300/50 to-gray-200/50 rounded-full mb-4 w-3/4 animate-pulse" />
            <div className="h-3 bg-gradient-to-r from-gray-300/50 to-gray-200/50 rounded-full mb-3 w-full animate-pulse" />
            <div className="h-3 bg-gradient-to-r from-gray-300/50 to-gray-200/50 rounded-full w-5/6 animate-pulse" />
          </div>

          {/* List Skeleton */}
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-300/50 to-gray-200/50 rounded-full animate-pulse" />
                <div className="flex-1">
                  <div className="h-4 bg-gradient-to-r from-gray-300/50 to-gray-200/50 rounded-full mb-2 w-3/4 animate-pulse" />
                  <div className="h-3 bg-gradient-to-r from-gray-300/50 to-gray-200/50 rounded-full w-1/2 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spinner Combinations */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Spinner Combinations</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Concentric Spinners */}
          <div className="flex justify-center">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
              <div className="absolute inset-2 border-4 border-purple-200 border-b-purple-600 rounded-full animate-spin" style={{ animationDirection: 'reverse' }} />
              <div className="absolute inset-4 border-3 border-pink-200 border-t-pink-600 rounded-full animate-spin" />
            </div>
          </div>

          {/* Multi-colored Spinner */}
          <div className="flex justify-center">
            <div className="relative w-20 h-20">
              <svg className="w-full h-full animate-spin" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" className="text-blue-300" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="4" className="text-purple-300" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="4" className="text-pink-300" />
              </svg>
            </div>
          </div>

          {/* Dots Animation */}
          <div className="flex justify-center items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-br from-blue-400/50 to-blue-300/50 rounded-full animate-bounce" />
            <div className="w-3 h-3 bg-gradient-to-br from-blue-400/50 to-blue-300/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-3 h-3 bg-gradient-to-br from-blue-400/50 to-blue-300/50 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
