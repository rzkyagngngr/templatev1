import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export default function UIGrids() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold =">Grids</h1>
          <nav className="flex items-center space-x-2 text-gray-400">
            <Home className="w-5 h-5" />
            <ChevronRight className="w-4 h-4" />
            <span>UI Kit</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">Grids</span>
          </nav>
        </div>
      </div>

      {/* Grids */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 3 Column Grid */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">3 Column Grid</h3>
          <div className="grid grid-cols-3 gap-3">
            {items.map(item => (
              <div key={item} className="backdrop-blur-xl bg-blue-600 text-slate-900 rounded p-4 flex items-center justify-center font-bold h-20 hover:bg-blue-700 transition-all duration-200">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* 4 Column Grid */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">4 Column Grid</h3>
          <div className="grid grid-cols-4 gap-3">
            {items.map(item => (
              <div key={item} className="backdrop-blur-xl bg-green-600 text-slate-900 rounded p-4 flex items-center justify-center font-bold h-20 hover:bg-green-700 transition-all duration-200">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* 2 Column Grid */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">2 Column Grid</h3>
          <div className="grid grid-cols-2 gap-3">
            {items.slice(0, 6).map(item => (
              <div key={item} className="backdrop-blur-xl bg-red-600 text-slate-900 rounded p-4 flex items-center justify-center font-bold h-24 hover:bg-red-700 transition-all duration-200">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Responsive Grid</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {items.map(item => (
              <div key={item} className="backdrop-blur-xl bg-purple-600 text-slate-900 rounded p-4 flex items-center justify-center font-bold h-20 hover:bg-purple-700 transition-all duration-200">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Grid with Different Heights */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Variable Height</h3>
          <div className="grid grid-cols-3 gap-3 auto-rows-max">
            <div className="backdrop-blur-xl bg-yellow-600 text-black rounded p-4 h-16 flex items-center justify-center font-bold">1</div>
            <div className="backdrop-blur-xl bg-yellow-600 text-black rounded p-4 h-32 flex items-center justify-center font-bold">2</div>
            <div className="backdrop-blur-xl bg-yellow-600 text-black rounded p-4 h-24 flex items-center justify-center font-bold">3</div>
            <div className="backdrop-blur-xl bg-yellow-600 text-black rounded p-4 h-24 flex items-center justify-center font-bold">4</div>
            <div className="backdrop-blur-xl bg-yellow-600 text-black rounded p-4 h-16 flex items-center justify-center font-bold">5</div>
            <div className="backdrop-blur-xl bg-yellow-600 text-black rounded p-4 h-20 flex items-center justify-center font-bold">6</div>
          </div>
        </div>

        {/* Grid Span */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Grid Span</h3>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-2 backdrop-blur-xl bg-indigo-600 text-slate-900 rounded p-4 h-20 flex items-center justify-center font-bold">Span 2</div>
            <div className="backdrop-blur-xl bg-indigo-600 text-slate-900 rounded p-4 h-20 flex items-center justify-center font-bold">1</div>
            <div className="backdrop-blur-xl bg-indigo-600 text-slate-900 rounded p-4 h-20 flex items-center justify-center font-bold">2</div>
            <div className="col-span-2 backdrop-blur-xl bg-indigo-600 text-slate-900 rounded p-4 h-20 flex items-center justify-center font-bold">Span 2</div>
            <div className="col-span-2 backdrop-blur-xl bg-indigo-600 text-slate-900 rounded p-4 h-20 flex items-center justify-center font-bold">Span 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}
