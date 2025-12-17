import React, { useState } from 'react';
import { ChevronRight, Home, ChevronLeft } from 'lucide-react';

export default function UIPagination() {
  const [activePage, setActivePage] = useState(1);

  const PaginationButton = ({ page, active, onClick }) => (
    <button
      onClick={onClick}
      className={`px-3 py-2 rounded font-semibold transition-all duration-200 ${
        active
          ? 'bg-blue-600 ='
          : 'bg-gray-200 text-black hover:bg-gray-300'
      }`}
    >
      {page}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold =">Pagination</h1>
          <nav className="flex items-center space-x-2 text-gray-400">
            <Home className="w-5 h-5" />
            <ChevronRight className="w-4 h-4" />
            <span>UI Kit</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">Pagination</span>
          </nav>
        </div>
      </div>

      {/* Pagination Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Pagination */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Basic Pagination</h3>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map(page => (
              <PaginationButton
                key={page}
                page={page}
                active={activePage === page}
                onClick={() => setActivePage(page)}
              />
            ))}
          </div>
        </div>

        {/* With Arrows */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">With Arrows</h3>
          <div className="flex gap-2 items-center">
            <button className="p-2 rounded bg-gray-200 text-black hover:bg-gray-300 transition-all duration-200">
              <ChevronLeft className="w-5 h-5" />
            </button>
            {[1, 2, 3, 4, 5].map(page => (
              <PaginationButton
                key={page}
                page={page}
                active={activePage === page}
                onClick={() => setActivePage(page)}
              />
            ))}
            <button className="p-2 rounded bg-gray-200 text-black hover:bg-gray-300 transition-all duration-200">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Size Options */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Size Options</h3>
          <div className="space-y-4">
            <div>
              <p className="text-black text-sm mb-2">Small</p>
              <div className="flex gap-1">
                {[1, 2, 3].map(page => (
                  <button
                    key={page}
                    className="px-2 py-1 text-sm bg-blue-600 text-slate-900 rounded hover:bg-blue-700"
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-black text-sm mb-2">Medium</p>
              <div className="flex gap-2">
                {[1, 2, 3].map(page => (
                  <button
                    key={page}
                    className="px-3 py-2 bg-blue-600 text-slate-900 rounded hover:bg-blue-700"
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-black text-sm mb-2">Large</p>
              <div className="flex gap-3">
                {[1, 2, 3].map(page => (
                  <button
                    key={page}
                    className="px-4 py-2 text-lg bg-blue-600 text-slate-900 rounded hover:bg-blue-700"
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Disabled State */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Disabled State</h3>
          <div className="flex gap-2 items-center">
            <button disabled className="p-2 rounded bg-gray-300 text-gray-500 cursor-not-allowed">
              <ChevronLeft className="w-5 h-5" />
            </button>
            {[1, 2, 3, 4, 5].map(page => (
              <button
                key={page}
                className={`px-3 py-2 rounded font-semibold transition-all duration-200 ${
                  page === 1
                    ? 'bg-blue-600 ='
                    : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="p-2 rounded bg-gray-200 text-black hover:bg-gray-300 transition-all duration-200">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Outline Style */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Outline Style</h3>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map(page => (
              <button
                key={page}
                className={`px-3 py-2 rounded font-semibold border-2 transition-all duration-200 ${
                  page === 1
                    ? 'border-blue-600 bg-blue-600 ='
                    : 'border-gray-300 bg-transparent text-black hover:border-blue-600'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>

        {/* With Info Text */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">With Info</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-black text-sm">Showing page 1 of 5</span>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(page => (
                <button
                  key={page}
                  className={`px-3 py-2 rounded font-semibold transition-all duration-200 ${
                    page === 1
                      ? 'bg-blue-600 ='
                      : 'bg-gray-200 text-black hover:bg-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Ellipsis Pagination */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">With Ellipsis</h3>
          <div className="flex gap-2 items-center">
            <button className="px-3 py-2 rounded bg-gray-200 text-black hover:bg-gray-300">1</button>
            <span className="text-black">...</span>
            <button className="px-3 py-2 rounded bg-gray-200 text-black hover:bg-gray-300">5</button>
            <button className="px-3 py-2 rounded bg-blue-600 text-slate-900 hover:bg-blue-700">6</button>
            <button className="px-3 py-2 rounded bg-gray-200 text-black hover:bg-gray-300">7</button>
            <span className="text-black">...</span>
            <button className="px-3 py-2 rounded bg-gray-200 text-black hover:bg-gray-300">10</button>
          </div>
        </div>
      </div>
    </div>
  );
}
