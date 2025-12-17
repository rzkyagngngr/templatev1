import React from 'react';
import { ChevronRight, Home, Check, X } from 'lucide-react';

export default function UIList() {
  const listItems = [
    { label: 'Item 1', active: true },
    { label: 'Item 2', active: true },
    { label: 'Item 3', active: false },
    { label: 'Item 4', active: true },
    { label: 'Item 5', active: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold =">Lists</h1>
          <nav className="flex items-center space-x-2 text-gray-400">
            <Home className="w-5 h-5" />
            <ChevronRight className="w-4 h-4" />
            <span>UI Kit</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">Lists</span>
          </nav>
        </div>
      </div>

      {/* Lists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic List */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Basic List</h3>
          <ul className="space-y-2">
            {listItems.map((item, idx) => (
              <li key={idx} className="text-black px-3 py-2 hover:bg-gray-100 rounded cursor-pointer transition-all duration-200">
                â€¢ {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Numbered List */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Numbered List</h3>
          <ol className="space-y-2">
            {listItems.map((item, idx) => (
              <li key={idx} className="text-black px-3 py-2 hover:bg-gray-100 rounded cursor-pointer transition-all duration-200">
                <span className="font-semibold">{idx + 1}.</span> {item.label}
              </li>
            ))}
          </ol>
        </div>

        {/* List with Icon */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">List with Icon</h3>
          <ul className="space-y-2">
            {listItems.map((item, idx) => (
              <li key={idx} className="text-black px-3 py-2 hover:bg-gray-100 rounded cursor-pointer transition-all duration-200 flex items-center gap-2">
                {item.active ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <X className="w-5 h-5 text-red-600" />
                )}
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Linked List */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Linked List</h3>
          <ul className="space-y-2">
            {listItems.map((item, idx) => (
              <li key={idx} className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer transition-all duration-200">
                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* List with Description */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">List with Description</h3>
          <ul className="space-y-3">
            {listItems.map((item, idx) => (
              <li key={idx} className="px-3 py-2 border-b border-gray-300 last:border-b-0">
                <p className="text-black font-semibold">{item.label}</p>
                <p className="text-black text-sm">Description for {item.label}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Styled List */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Styled List</h3>
          <ul className="space-y-2">
            {listItems.map((item, idx) => (
              <li
                key={idx}
                className={`px-3 py-2 rounded transition-all duration-200 cursor-pointer ${
                  item.active
                    ? 'bg-blue-600 text-slate-900 hover:bg-blue-700'
                    : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Horizontal List */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Horizontal List</h3>
          <ul className="flex gap-2 flex-wrap">
            {listItems.map((item, idx) => (
              <li
                key={idx}
                className="px-3 py-2 bg-blue-600 text-slate-900 rounded hover:bg-blue-700 transition-all duration-200 cursor-pointer"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Collapsible List */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">List Groups</h3>
          <div className="space-y-2">
            {['Group 1', 'Group 2', 'Group 3'].map((group, idx) => (
              <div key={idx} className="border border-gray-300 rounded">
                <button className="w-full text-left px-3 py-2 bg-gray-100 text-black font-semibold hover:bg-gray-200 transition-all duration-200 rounded">
                  {group}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
