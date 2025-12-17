import React from 'react';

export default function IconsTabler() {
  const icons = ['box', 'camera', 'chart-bar', 'check', 'cloud', 'code'];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Tabler Icons</h1>
        <nav className="text-sm text-gray-600">
          <span>UI / </span>
          <span>Icons / </span>
          <span className="text-gray-900 font-medium">Tabler</span>
        </nav>
      </div>

      {/* Tabler Icons Grid */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Tabler Icon Set</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {icons.map((icon, idx) => (
            <div key={idx} className="flex flex-col items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition">
              <div className="text-4xl mb-2">ðŸ“¦</div>
              <p className="text-black text-xs font-medium text-center">{icon}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Examples */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Usage Examples</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg border border-gray-300">
            <div className="text-3xl">ðŸ“¦</div>
            <div className="text-black">Icon with text label</div>
          </div>
          <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg border border-gray-300">
            <div className="text-3xl">ðŸ“¦</div>
            <div className="flex-1 text-black">Icon in list item</div>
            <button className="px-3 py-1 bg-blue-500 text-slate-900 rounded text-sm font-medium hover:bg-blue-600">Action</button>
          </div>
        </div>
      </div>

      {/* Icon States */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Icon States</h2>
        <div className="flex gap-8 items-center">
          <div className="text-4xl cursor-pointer hover:text-blue-500 transition">ðŸ“¦</div>
          <div className="text-4xl opacity-50 cursor-not-allowed">ðŸ“¦</div>
          <div className="text-4xl text-blue-500">ðŸ“¦</div>
          <div className="text-4xl text-green-500">ðŸ“¦</div>
          <div className="text-4xl text-red-500">ðŸ“¦</div>
        </div>
      </div>
    </div>
  );
}
