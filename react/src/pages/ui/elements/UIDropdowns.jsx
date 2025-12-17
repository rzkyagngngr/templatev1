import React, { useState } from 'react';
import { ChevronRight, Home, ChevronDown } from 'lucide-react';

export default function UIDropdowns() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownItems = [
    { id: 1, label: 'Profile' },
    { id: 2, label: 'Settings' },
    { id: 3, label: 'Preferences' },
    { id: 4, label: 'Logout' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold =">Dropdowns</h1>
          <nav className="flex items-center space-x-2 text-gray-400">
            <Home className="w-5 h-5" />
            <ChevronRight className="w-4 h-4" />
            <span>UI Kit</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">Dropdowns</span>
          </nav>
        </div>
      </div>

      {/* Dropdowns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Dropdown */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Basic Dropdown</h3>
          <div className="relative inline-block">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'basic' ? null : 'basic')}
              className="bg-blue-600 text-slate-900 px-4 py-2 rounded font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center gap-2"
            >
              Select Option
              <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === 'basic' && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
                {dropdownItems.map(item => (
                  <button
                    key={item.id}
                    className="w-full text-left px-4 py-2 text-black hover:bg-gray-100 first:rounded-t last:rounded-b transition-all duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Dropdown Sizes */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Different Sizes</h3>
          <div className="space-y-3">
            <div>
              <label className="text-black text-sm font-semibold block mb-2">Small</label>
              <select className="w-full px-2 py-1 text-sm rounded border border-gray-300 bg-white text-black">
                <option>Select</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <div>
              <label className="text-black text-sm font-semibold block mb-2">Medium</label>
              <select className="w-full px-3 py-2 text-base rounded border border-gray-300 bg-white text-black">
                <option>Select</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <div>
              <label className="text-black text-sm font-semibold block mb-2">Large</label>
              <select className="w-full px-4 py-3 text-lg rounded border border-gray-300 bg-white text-black">
                <option>Select</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
          </div>
        </div>

        {/* Multi-select Dropdown */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Multi-Select</h3>
          <select
            multiple
            className="w-full px-3 py-2 rounded border border-gray-300 bg-white text-black"
            size="4"
          >
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
          </select>
          <p className="text-black text-xs mt-2">Hold Ctrl/Cmd to select multiple</p>
        </div>

        {/* Disabled Dropdown */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">States</h3>
          <div className="space-y-3">
            <div>
              <label className="text-black text-sm font-semibold block mb-2">Active</label>
              <select className="w-full px-3 py-2 rounded border border-blue-500 bg-blue-50 text-black">
                <option>Select</option>
                <option>Option 1</option>
              </select>
            </div>
            <div>
              <label className="text-black text-sm font-semibold block mb-2">Disabled</label>
              <select disabled className="w-full px-3 py-2 rounded border border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed">
                <option>Select</option>
                <option>Option 1</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grouped Dropdown */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Grouped Options</h3>
          <select className="w-full px-3 py-2 rounded border border-gray-300 bg-white text-black">
            <optgroup label="Fruits">
              <option>Apple</option>
              <option>Banana</option>
              <option>Orange</option>
            </optgroup>
            <optgroup label="Vegetables">
              <option>Carrot</option>
              <option>Broccoli</option>
              <option>Spinach</option>
            </optgroup>
          </select>
        </div>

        {/* Searchable Dropdown */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Searchable</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 rounded border border-gray-300 bg-white text-black placeholder-gray-500"
            />
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-10">
              {['Search Result 1', 'Search Result 2', 'Search Result 3'].map((result, idx) => (
                <div key={idx} className="px-3 py-2 text-black hover:bg-gray-100 cursor-pointer">
                  {result}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
