import React from 'react';

export default function IconsFeather() {
  const icons = ['airplay', 'alert-circle', 'arrow-right', 'bell', 'bookmark', 'calendar'];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Feather Icons</h1>
        <nav className="text-sm text-gray-600">
          <span>UI / </span>
          <span>Icons / </span>
          <span className="text-gray-900 font-medium">Feather</span>
        </nav>
      </div>

      {/* Feather Icons Grid */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Feather Icon Library</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {icons.map((icon, idx) => (
            <div key={idx} className="flex flex-col items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition">
              <div className="text-4xl mb-2">âœ¨</div>
              <p className="text-black text-xs font-medium text-center">{icon}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Icon Combinations */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Icon Combinations</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-300">
            <div className="text-2xl">âœ¨</div>
            <div className="text-black">âœ¨</div>
            <div className="text-black">âœ¨</div>
          </div>
          <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg border border-gray-300">
            <div className="text-3xl">â†’</div>
            <div className="text-black font-medium text-black">Next</div>
          </div>
          <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg border border-gray-300">
            <div className="text-3xl">ðŸ””</div>
            <div className="text-black font-medium text-black">Notifications</div>
            <span className="ml-auto bg-red-500 text-slate-900 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
          </div>
        </div>
      </div>

      {/* Icon Sizes */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Icon Sizes & Variations</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="text-2xl mb-2">âœ¨</div>
            <p className="text-black text-xs">Small (16px)</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">âœ¨</div>
            <p className="text-black text-xs">Medium (32px)</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-6xl mb-2">âœ¨</div>
            <p className="text-black text-xs">Large (48px)</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2 opacity-50">âœ¨</div>
            <p className="text-black text-xs">Disabled</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2 text-blue-500">âœ¨</div>
            <p className="text-black text-xs">Primary</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2 text-green-500">âœ¨</div>
            <p className="text-black text-xs">Success</p>
          </div>
        </div>
      </div>
    </div>
  );
}
