import React, { useState } from 'react';
import { Volume2, Minus, Plus, RotateCcw } from 'lucide-react';

const AdvancedRangeSlider = () => {
  const [singleValue, setSingleValue] = useState(50);
  const [minValue, setMinValue] = useState(25);
  const [maxValue, setMaxValue] = useState(75);
  const [verticalValue, setVerticalValue] = useState(60);
  const [stepSize, setStepSize] = useState(1);

  const presets = [
    { label: 'Low', value: 25, color: 'from-red-500 to-orange-500' },
    { label: 'Medium', value: 50, color: 'from-yellow-500 to-amber-500' },
    { label: 'High', value: 75, color: 'from-blue-500 to-indigo-500' },
    { label: 'Max', value: 100, color: 'from-green-500 to-emerald-500' },
  ];

  const mockData = [
    { name: 'Volume', value: singleValue, unit: '%' },
    { name: 'Brightness', value: maxValue - minValue, unit: '%' },
    { name: 'Balance', value: verticalValue, unit: '%' },
  ];

  const handleSingleChange = (e) => {
    setSingleValue(Math.round(e.target.value / stepSize) * stepSize);
  };

  const handleMinChange = (e) => {
    const val = Math.min(Number(e.target.value), maxValue - stepSize);
    setMinValue(val);
  };

  const handleMaxChange = (e) => {
    const val = Math.max(Number(e.target.value), minValue + stepSize);
    setMaxValue(val);
  };

  const handleVerticalChange = (e) => {
    setVerticalValue(100 - Math.round(e.target.value / stepSize) * stepSize);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Advanced Range Sliders</h1>
        <div className="flex gap-2 text-sm text-slate-600">
          <span className="hover:text-indigo-600 cursor-pointer">Dashboard</span>
          <span>/</span>
          <span className="hover:text-indigo-600 cursor-pointer">Advanced</span>
          <span>/</span>
          <span className="text-indigo-600 font-medium">Range Sliders</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Single Slider */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Volume2 size={20} className="text-indigo-600" />
            Single Slider
          </h3>

          <div className="mb-6">
            <input
              type="range"
              min="0"
              max="100"
              value={singleValue}
              onChange={handleSingleChange}
              className="w-full h-3 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full appearance-none cursor-pointer accent-indigo-600"
              style={{
                background: `linear-gradient(to right, #4f46e5 0%, #7c3aed ${singleValue}%, #e5e7eb ${singleValue}%, #e5e7eb 100%)`,
              }}
            />
          </div>

          <div className="text-center">
            <p className="text-4xl font-bold text-indigo-600">{singleValue}</p>
            <p className="text-sm text-slate-600 mt-2">Current Value</p>
          </div>

          <div className="mt-6 flex gap-2">
            <button
              onClick={() => setSingleValue(Math.max(0, singleValue - stepSize))}
              className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-900 rounded-xl py-2 flex items-center justify-center"
            >
              <Minus size={18} />
            </button>
            <button
              onClick={() => setSingleValue(Math.min(100, singleValue + stepSize))}
              className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-900 rounded-xl py-2 flex items-center justify-center"
            >
              <Plus size={18} />
            </button>
          </div>
        </div>

        {/* Range Slider */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Range Slider</h3>

          <div className="mb-8 space-y-6">
            <div>
              <label className="text-xs font-semibold text-slate-600 uppercase block mb-2">
                Min Value: {minValue}
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={minValue}
                onChange={handleMinChange}
                className="w-full h-3 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 uppercase block mb-2">
                Max Value: {maxValue}
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={maxValue}
                onChange={handleMaxChange}
                className="w-full h-3 bg-gradient-to-r from-purple-300 to-purple-400 rounded-full appearance-none cursor-pointer accent-purple-600"
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 p-4 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-2xl">
            <div>
              <p className="text-xs text-slate-600">From</p>
              <p className="text-xl font-bold text-slate-900">{minValue}</p>
            </div>
            <span className="text-2xl text-slate-400">-</span>
            <div className="text-right">
              <p className="text-xs text-slate-600">To</p>
              <p className="text-xl font-bold text-slate-900">{maxValue}</p>
            </div>
          </div>
        </div>

        {/* Vertical Slider */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-6 flex flex-col">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Vertical Slider</h3>

          <div className="flex-1 flex items-center justify-center">
            <div className="relative h-64 w-12 bg-gradient-to-t from-emerald-300 to-emerald-100 rounded-full">
              <input
                type="range"
                min="0"
                max="100"
                value={100 - verticalValue}
                onChange={handleVerticalChange}
                className="absolute inset-0 h-full w-full opacity-0 cursor-pointer"
                style={{ WebkitAppearance: 'slider-vertical', writingMode: 'bt-lr' }}
              />
              <div
                className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full shadow-lg -translate-y-1/2 transition-all pointer-events-none"
                style={{ top: `${100 - verticalValue}%` }}
              />
            </div>
          </div>

          <div className="text-center mt-6 p-4 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-2xl">
            <p className="text-3xl font-bold text-emerald-600">{verticalValue}</p>
            <p className="text-xs text-slate-600 mt-1">Balance Level</p>
          </div>
        </div>
      </div>

      {/* Step Size Control & Presets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Step Size */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Step Size Control</h3>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-3">
                Step Size: <span className="text-indigo-600">{stepSize}</span>
              </label>
              <div className="flex gap-2">
                {[1, 5, 10, 25].map((step) => (
                  <button
                    key={step}
                    onClick={() => setStepSize(step)}
                    className={`flex-1 py-2 rounded-lg font-medium transition-all ${
                      stepSize === step
                        ? 'bg-indigo-500 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {step}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-amber-100/50 to-orange-100/50 rounded-2xl">
              <p className="text-xs font-semibold text-slate-600 uppercase mb-2">
                Info
              </p>
              <p className="text-sm text-slate-700">
                Adjust step size to control slider precision. Smaller values = finer control.
              </p>
            </div>
          </div>
        </div>

        {/* Presets */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Preset Values</h3>

          <div className="grid grid-cols-2 gap-3">
            {presets.map((preset) => (
              <button
                key={preset.label}
                onClick={() => setSingleValue(preset.value)}
                className={`backdrop-blur-xl rounded-2xl border border-white/60 p-4 transition-all text-center font-semibold ${
                  singleValue === preset.value
                    ? `bg-gradient-to-br ${preset.color} text-white border-white`
                    : 'bg-white/40 text-slate-900 hover:bg-white/60'
                }`}
              >
                {preset.label}
                <div className="text-xs opacity-75 mt-1">{preset.value}%</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Data Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockData.map((data, idx) => (
          <div
            key={idx}
            className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-6 text-center"
          >
            <p className="text-sm font-semibold text-slate-600 uppercase mb-2">
              {data.name}
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-4xl font-bold text-indigo-600">{data.value}</span>
              <span className="text-xl text-slate-500">{data.unit}</span>
            </div>
            <div className="mt-4 w-full h-2 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all"
                style={{ width: `${data.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedRangeSlider;
