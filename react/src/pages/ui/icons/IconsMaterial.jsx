import React from 'react';

export default function IconsMaterial() {
  const icons = ['home', 'settings', 'user', 'mail', 'heart', 'star'];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Material Icons</h1>
        <nav className="text-sm text-gray-600">
          <span>UI / </span>
          <span>Icons / </span>
          <span className="text-gray-900 font-medium">Material</span>
        </nav>
      </div>

      {/* Icons Grid */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Material Design Icons</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {icons.map((icon, idx) => (
            <div key={idx} className="flex flex-col items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition">
              <div className="text-4xl mb-2">ðŸ“±</div>
              <p className="text-black text-xs font-medium text-center">{icon}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Different Sizes */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Icon Sizes</h2>
        <div className="flex gap-8 items-center">
          <div className="text-2xl text-black">ðŸ“±</div>
          <div className="text-4xl text-black">ðŸ“±</div>
          <div className="text-6xl text-black">ðŸ“±</div>
          <div className="text-8xl text-black">ðŸ“±</div>
        </div>
      </div>

      {/* Icon Colors */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Icon Colors</h2>
        <div className="flex gap-8 items-center">
          <div className="text-5xl" style={{ color: '#3b82f6' }}>ðŸ“±</div>
          <div className="text-5xl" style={{ color: '#10b981' }}>ðŸ“±</div>
          <div className="text-5xl" style={{ color: '#f59e0b' }}>ðŸ“±</div>
          <div className="text-5xl" style={{ color: '#ef4444' }}>ðŸ“±</div>
          <div className="text-5xl" style={{ color: '#8b5cf6' }}>ðŸ“±</div>
        </div>
      </div>
    </div>
  );
}
