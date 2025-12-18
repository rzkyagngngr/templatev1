import React from 'react';

export default function UIGrids() {
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
          <span className="text-sm text-blue-600 font-medium">Grids</span>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Grid Layouts
        </h1>
        <p className="text-gray-600">Responsive grid layout components</p>
      </div>

      {/* 2-Column Grid */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2-Column Grid</h2>
        <div className="grid grid-cols-2 gap-6">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="backdrop-blur-xl bg-gradient-to-br from-blue-400/20 to-blue-300/20 rounded-2xl border border-white/40 p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/50 to-blue-300/50 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-blue-700 font-bold">{i}</span>
                </div>
                <p className="text-gray-700 font-medium">Grid Item {i}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3-Column Grid */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">3-Column Grid</h2>
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="backdrop-blur-xl bg-gradient-to-br from-purple-400/20 to-purple-300/20 rounded-2xl border border-white/40 p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400/50 to-purple-300/50 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-purple-700 font-bold">{i}</span>
                </div>
                <p className="text-gray-700 font-medium">Item {i}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4-Column Grid */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">4-Column Grid</h2>
        <div className="grid grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} className="backdrop-blur-xl bg-gradient-to-br from-green-400/20 to-green-300/20 rounded-2xl border border-white/40 p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400/50 to-green-300/50 mx-auto mb-2 flex items-center justify-center text-sm">
                  <span className="text-green-700 font-bold">{i}</span>
                </div>
                <p className="text-gray-700 font-medium text-sm">Item</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Auto-fit Responsive Grid */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Auto-fit Responsive Grid</h2>
        <div className="grid grid-cols-auto gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
            <div key={i} className="backdrop-blur-xl bg-gradient-to-br from-pink-400/20 to-pink-300/20 rounded-2xl border border-white/40 p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400/50 to-pink-300/50 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-pink-700 font-bold">{i}</span>
                </div>
                <p className="text-gray-700 font-medium text-sm">Auto Item</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid with Gaps */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Grid with Different Gaps</h2>
        
        {/* Small Gap */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Small Gap (4px)</h3>
          <div className="grid grid-cols-3 gap-1">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="backdrop-blur-xl bg-gradient-to-br from-yellow-400/20 to-yellow-300/20 rounded-lg border border-white/40 p-4 flex items-center justify-center">
                <span className="text-gray-700 font-medium text-sm">Item {i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Large Gap */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Large Gap (24px)</h3>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="backdrop-blur-xl bg-gradient-to-br from-cyan-400/20 to-cyan-300/20 rounded-2xl border border-white/40 p-6 flex items-center justify-center">
                <span className="text-gray-700 font-medium">Item {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid with Images */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Grid with Images</h2>
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <img
                src={`https://picsum.photos/300/300?random=${i + 200}`}
                alt={`Grid item ${i}`}
                className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-4 backdrop-blur-xl bg-gradient-to-br from-white/50 to-white/30 border-t border-white/40">
                <p className="text-gray-700 font-medium text-center">Image {i}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mixed Grid Sizes */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Mixed Grid Sizes</h2>
        <div className="grid grid-cols-3 gap-6">
          {/* Large item */}
          <div className="col-span-2 backdrop-blur-xl bg-gradient-to-br from-indigo-400/20 to-indigo-300/20 rounded-2xl border border-white/40 p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400/50 to-indigo-300/50 mx-auto mb-4 flex items-center justify-center">
                <span className="text-indigo-700 font-bold text-xl">1</span>
              </div>
              <p className="text-gray-700 font-medium">Large Item (2 columns)</p>
            </div>
          </div>

          {/* Regular item */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-indigo-400/20 to-indigo-300/20 rounded-2xl border border-white/40 p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400/50 to-indigo-300/50 mx-auto mb-3 flex items-center justify-center">
                <span className="text-indigo-700 font-bold">2</span>
              </div>
              <p className="text-gray-700 font-medium text-sm">Item</p>
            </div>
          </div>

          {/* Three regular items */}
          {[3, 4, 5].map(i => (
            <div key={i} className="backdrop-blur-xl bg-gradient-to-br from-indigo-400/20 to-indigo-300/20 rounded-2xl border border-white/40 p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400/50 to-indigo-300/50 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-indigo-700 font-bold">{i}</span>
                </div>
                <p className="text-gray-700 font-medium text-xs">Item</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Masonry-style Grid */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Masonry-style Grid</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div
              key={i}
              className={`backdrop-blur-xl bg-gradient-to-br from-orange-400/20 to-orange-300/20 rounded-2xl border border-white/40 overflow-hidden ${
                i % 3 === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <img
                src={`https://picsum.photos/300/300?random=${i + 300}`}
                alt={`Masonry ${i}`}
                className={`w-full h-full object-cover ${i % 3 === 0 ? 'h-64' : 'h-40'}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Breakpoints Grid */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Responsive Breakpoints</h2>
        <p className="text-gray-600 mb-6">Grid adapts to screen size: 1 column on mobile, 2 on tablet, 3 on desktop</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
            <div key={i} className="backdrop-blur-xl bg-gradient-to-br from-red-400/20 to-red-300/20 rounded-2xl border border-white/40 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-400/50 to-red-300/50 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-red-700 font-bold">{i}</span>
                </div>
                <p className="text-gray-700 font-medium">Responsive Item</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
