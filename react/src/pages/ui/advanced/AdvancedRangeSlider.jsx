import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function AdvancedRangeSlider() {
  const [price, setPrice] = useState(50);
  const [volume, setVolume] = useState(70);
  const [brightness, setBrightness] = useState(80);

  const sliders = [
    { label: 'Price Range', value: price, onChange: setPrice, min: 0, max: 100, unit: '$' },
    { label: 'Volume', value: volume, onChange: setVolume, min: 0, max: 100, unit: '%' },
    { label: 'Brightness', value: brightness, onChange: setBrightness, min: 0, max: 100, unit: '%' },
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
          <span className="text-gray-900 font-semibold">Range Slider</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Advanced Range Slider</h1>
      </div>

      {/* Examples */}
      <div className="grid gap-6">
        {sliders.map((slider, idx) => (
          <div key={idx} className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{slider.label}</h3>
              <span className="text-2xl font-bold text-gray-900">{slider.value}{slider.unit}</span>
            </div>
            <input
              type="range"
              min={slider.min}
              max={slider.max}
              value={slider.value}
              onChange={(e) => slider.onChange(Number(e.target.value))}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
