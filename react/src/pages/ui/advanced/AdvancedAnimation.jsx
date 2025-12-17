import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function AdvancedAnimation() {
  const animationExamples = [
    { name: 'Magic Effects', items: ['Masic', 'TwisterInDown', 'TwisterInUp', 'Swap'] },
    { name: 'Bling', items: ['PuffIn', 'PuffOut', 'VanishIn', 'VanishOut'] },
    { name: 'Static Effects', items: ['OpenDownLeft', 'OpenDownRight', 'OpenUpLeft', 'OpenUpRight'] },
    { name: 'Perspective', items: ['PerspectiveDown', 'PerspectiveUp', 'PerspectiveLeft', 'PerspectiveRight'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span>Glacia</span>
          <ChevronRight size={16} />
          <span>UI Kit</span>
          <ChevronRight size={16} />
          <span className="text-gray-900 font-semibold">Advanced Animation</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Advanced Animation</h1>
      </div>

      {/* Examples */}
      <div className="grid gap-6">
        {animationExamples.map((section, idx) => (
          <div key={idx} className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.name}</h3>
            <div className="flex flex-wrap gap-3">
              {section.items.map((item, itemIdx) => (
                <button
                  key={itemIdx}
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
