import React from 'react';

export default function IconsFontAwesome() {
  const icons = [
    { name: 'facebook', symbol: 'f' },
    { name: 'twitter', symbol: 'ð•' },
    { name: 'github', symbol: 'â—†' },
    { name: 'instagram', symbol: 'ðŸ“·' },
    { name: 'linkedin', symbol: 'â—‰' },
    { name: 'youtube', symbol: 'â–¶' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Font Awesome Icons</h1>
        <nav className="text-sm text-gray-600">
          <span>UI / </span>
          <span>Icons / </span>
          <span className="text-gray-900 font-medium">Font Awesome</span>
        </nav>
      </div>

      {/* Social Icons */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Social Media Icons</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {icons.map((icon, idx) => (
            <div key={idx} className="flex flex-col items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition">
              <div className="text-4xl mb-2">{icon.symbol}</div>
              <p className="text-black text-xs font-medium text-center">{icon.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Icon Variations */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Icon Styles</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-8">
            <div className="text-4xl">â¤ï¸</div>
            <div className="text-4xl opacity-75">â¤ï¸</div>
            <div className="text-4xl opacity-50">â¤ï¸</div>
            <div className="text-4xl opacity-25">â¤ï¸</div>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-2xl">â­</div>
            <div className="text-4xl">â­</div>
            <div className="text-6xl">â­</div>
            <div className="text-8xl">â­</div>
          </div>
        </div>
      </div>

      {/* Icon in Buttons */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Icons in Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-slate-900 rounded-lg hover:bg-blue-600">
            <span>â¤ï¸</span> Like
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-slate-900 rounded-lg hover:bg-green-600">
            <span>âœ“</span> Confirm
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-slate-900 rounded-lg hover:bg-red-600">
            <span>âœ•</span> Delete
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-slate-900 rounded-lg hover:bg-yellow-600">
            <span>â­</span> Favorite
          </button>
        </div>
      </div>
    </div>
  );
}
