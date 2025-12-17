import React, { useState } from 'react';

export default function FormAdvanced() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedColor, setSelectedColor] = useState('#3b82f6');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Advanced Forms</h1>
        <nav className="text-sm text-gray-600">
          <span>UI / </span>
          <span>Forms / </span>
          <span className="text-gray-900 font-medium">Advanced</span>
        </nav>
      </div>

      {/* Date & Time Pickers */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Date & Time Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-black mb-2">Date Picker</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">Time Picker</label>
            <input
              type="time"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">DateTime Picker</label>
            <input
              type="datetime-local"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">Month Picker</label>
            <input
              type="month"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Color & Range Inputs */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Color & Range Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-black mb-2">Color Picker</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="h-12 w-20 border border-gray-300 rounded-lg cursor-pointer"
              />
              <span className="text-black">{selectedColor}</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">Range Slider</label>
            <input
              type="range"
              min="0"
              max="100"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Input Types */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Advanced Input Types</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black mb-2">URL Input</label>
            <input
              type="url"
              placeholder="https://example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">Telephone Input</label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">Search Input</label>
            <input
              type="search"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Disabled & Readonly States */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Form States</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-black mb-2">Disabled Input</label>
            <input
              type="text"
              disabled
              value="This is disabled"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-400 bg-gray-100 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">Readonly Input</label>
            <input
              type="text"
              readOnly
              value="This is readonly"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
