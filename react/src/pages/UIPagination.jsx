import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function UIPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [jumpPage, setJumpPage] = useState('');

  const renderPageNumbers = (totalPages) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handleJumpToPage = (e) => {
    e.preventDefault();
    const page = parseInt(jumpPage);
    if (page > 0 && page <= 10) {
      setCurrentPage(page);
      setJumpPage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400/50 to-blue-300/50 flex items-center justify-center">
            <span className="text-sm font-bold text-blue-600">UI</span>
          </div>
          <span className="text-sm font-medium text-gray-600">UI Elements</span>
          <span className="text-sm text-gray-400">/</span>
          <span className="text-sm text-blue-600 font-medium">Pagination</span>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Pagination Controls
        </h1>
        <p className="text-gray-600">Navigation for paginated content</p>
      </div>

      {/* Basic Pagination */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Basic Pagination</h2>
        <div className="flex gap-2 justify-center flex-wrap">
          <button className="backdrop-blur-xl bg-gradient-to-br from-gray-400/50 to-gray-300/50 rounded-2xl border border-white/50 px-4 py-2 transition-all hover:scale-105 shadow-gray-200/40 text-gray-700 font-medium">
            ← Previous
          </button>
          {[1, 2, 3, 4, 5].map(page => (
            <button
              key={page}
              className={`rounded-2xl border border-white/50 px-4 py-2 transition-all hover:scale-105 font-medium ${
                page === 2
                  ? 'backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-blue-300/50 text-blue-700 shadow-blue-200/40'
                  : 'backdrop-blur-xl bg-gradient-to-br from-gray-400/50 to-gray-300/50 text-gray-700 shadow-gray-200/40'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="backdrop-blur-xl bg-gradient-to-br from-gray-400/50 to-gray-300/50 rounded-2xl border border-white/50 px-4 py-2 transition-all hover:scale-105 shadow-gray-200/40 text-gray-700 font-medium">
            Next →
          </button>
        </div>
      </div>

      {/* Pagination with Icons */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Pagination with Icons</h2>
        <div className="flex gap-2 justify-center flex-wrap">
          <button className="backdrop-blur-xl bg-gradient-to-br from-purple-400/50 to-purple-300/50 rounded-2xl border border-white/50 p-2 transition-all hover:scale-105 shadow-purple-200/40 text-purple-700">
            <ChevronLeft size={20} />
          </button>
          {[1, 2, 3, 4, 5].map(page => (
            <button
              key={page}
              className={`rounded-2xl border border-white/50 w-10 h-10 transition-all hover:scale-105 font-medium flex items-center justify-center ${
                page === currentPage
                  ? 'backdrop-blur-xl bg-gradient-to-br from-purple-400/50 to-purple-300/50 text-purple-700 shadow-purple-200/40'
                  : 'backdrop-blur-xl bg-gradient-to-br from-gray-400/50 to-gray-300/50 text-gray-700 shadow-gray-200/40'
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button className="backdrop-blur-xl bg-gradient-to-br from-purple-400/50 to-purple-300/50 rounded-2xl border border-white/50 p-2 transition-all hover:scale-105 shadow-purple-200/40 text-purple-700">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Pagination Sizes */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Pagination Sizes</h2>
        
        {/* Small */}
        <div className="mb-6">
          <p className="text-gray-600 mb-3">Small</p>
          <div className="flex gap-1 justify-center flex-wrap">
            {[1, 2, 3].map(page => (
              <button
                key={page}
                className={`rounded-lg border border-white/50 px-2 py-1 text-xs transition-all font-medium ${
                  page === 1
                    ? 'backdrop-blur-xl bg-gradient-to-br from-green-400/50 to-green-300/50 text-green-700'
                    : 'backdrop-blur-xl bg-gradient-to-br from-gray-400/50 to-gray-300/50 text-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>

        {/* Medium */}
        <div className="mb-6">
          <p className="text-gray-600 mb-3">Medium</p>
          <div className="flex gap-2 justify-center flex-wrap">
            {[1, 2, 3].map(page => (
              <button
                key={page}
                className={`rounded-xl border border-white/50 px-4 py-2 text-sm transition-all font-medium ${
                  page === 1
                    ? 'backdrop-blur-xl bg-gradient-to-br from-green-400/50 to-green-300/50 text-green-700'
                    : 'backdrop-blur-xl bg-gradient-to-br from-gray-400/50 to-gray-300/50 text-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>

        {/* Large */}
        <div>
          <p className="text-gray-600 mb-3">Large</p>
          <div className="flex gap-3 justify-center flex-wrap">
            {[1, 2, 3].map(page => (
              <button
                key={page}
                className={`rounded-2xl border border-white/50 px-6 py-3 text-base transition-all font-medium ${
                  page === 1
                    ? 'backdrop-blur-xl bg-gradient-to-br from-green-400/50 to-green-300/50 text-green-700'
                    : 'backdrop-blur-xl bg-gradient-to-br from-gray-400/50 to-gray-300/50 text-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Disabled Pagination Items */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Disabled Pagination Items</h2>
        <div className="flex gap-2 justify-center flex-wrap">
          <button disabled className="backdrop-blur-xl bg-gradient-to-br from-gray-300/50 to-gray-200/50 rounded-2xl border border-white/50 px-4 py-2 text-gray-400 font-medium opacity-50 cursor-not-allowed">
            ← Previous
          </button>
          {[1, 2, 3, 4, 5].map(page => (
            <button
              key={page}
              disabled={page !== 1}
              className={`rounded-2xl border border-white/50 px-4 py-2 transition-all font-medium ${
                page === 1
                  ? 'backdrop-blur-xl bg-gradient-to-br from-yellow-400/50 to-yellow-300/50 text-yellow-700 shadow-yellow-200/40'
                  : 'backdrop-blur-xl bg-gradient-to-br from-gray-300/50 to-gray-200/50 text-gray-400 opacity-50 cursor-not-allowed shadow-gray-200/40'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="backdrop-blur-xl bg-gradient-to-br from-gray-400/50 to-gray-300/50 rounded-2xl border border-white/50 px-4 py-2 transition-all hover:scale-105 shadow-gray-200/40 text-gray-700 font-medium">
            Next →
          </button>
        </div>
      </div>

      {/* Solid vs Outline Styles */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Pagination Styles</h2>
        
        {/* Solid */}
        <div className="mb-8">
          <p className="text-gray-600 mb-4">Solid Style</p>
          <div className="flex gap-2 justify-center flex-wrap">
            {[1, 2, 3, 4, 5].map(page => (
              <button
                key={page}
                className={`rounded-2xl border border-white/50 px-4 py-2 transition-all font-medium ${
                  page === 2
                    ? 'backdrop-blur-xl bg-gradient-to-br from-red-400/50 to-red-300/50 text-red-700 shadow-red-200/40'
                    : 'backdrop-blur-xl bg-gradient-to-br from-gray-400/50 to-gray-300/50 text-gray-700 shadow-gray-200/40'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>

        {/* Outline */}
        <div>
          <p className="text-gray-600 mb-4">Outline Style</p>
          <div className="flex gap-2 justify-center flex-wrap">
            {[1, 2, 3, 4, 5].map(page => (
              <button
                key={page}
                className={`rounded-2xl px-4 py-2 transition-all font-medium ${
                  page === 2
                    ? 'border-2 border-red-500 bg-red-50/50 text-red-700'
                    : 'border-2 border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50/50'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination with Jump to Page */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Jump to Page</h2>
        <div className="flex items-center gap-4 justify-center flex-wrap">
          <div className="flex gap-2">
            {renderPageNumbers(10).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`rounded-2xl border border-white/50 w-10 h-10 transition-all font-medium flex items-center justify-center ${
                  page === currentPage
                    ? 'backdrop-blur-xl bg-gradient-to-br from-indigo-400/50 to-indigo-300/50 text-indigo-700 shadow-indigo-200/40'
                    : 'backdrop-blur-xl bg-gradient-to-br from-gray-400/50 to-gray-300/50 text-gray-700 shadow-gray-200/40'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <form onSubmit={handleJumpToPage} className="flex gap-2">
            <input
              type="number"
              value={jumpPage}
              onChange={(e) => setJumpPage(e.target.value)}
              placeholder="Page"
              min="1"
              max="10"
              className="backdrop-blur-xl bg-white/50 rounded-xl border border-white/60 px-3 py-2 w-20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="backdrop-blur-xl bg-gradient-to-br from-indigo-400/50 to-indigo-300/50 rounded-2xl border border-white/50 px-4 py-2 transition-all hover:scale-105 shadow-indigo-200/40 text-indigo-700 font-medium"
            >
              Go
            </button>
          </form>
        </div>
        <p className="text-center text-sm text-gray-600 mt-4">Current page: {currentPage}</p>
      </div>

      {/* Table Pagination */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Table Pagination</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full">
            <thead className="border-b border-gray-200">
              <tr>
                <th className="text-left p-3 text-gray-700 font-semibold">ID</th>
                <th className="text-left p-3 text-gray-700 font-semibold">Name</th>
                <th className="text-left p-3 text-gray-700 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map(i => (
                <tr key={i} className="border-b border-gray-200 hover:bg-white/20 transition-colors">
                  <td className="p-3 text-gray-700">{i}</td>
                  <td className="p-3 text-gray-700">Item {i}</td>
                  <td className="p-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-br from-green-400/30 to-green-300/30 text-green-700 border border-white/40">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Showing 1 to 5 of 50 results</p>
          <div className="flex gap-2">
            <button className="backdrop-blur-xl bg-gradient-to-br from-gray-400/50 to-gray-300/50 rounded-xl border border-white/50 px-3 py-2 transition-all hover:scale-105 text-gray-700 text-sm font-medium">
              ← Previous
            </button>
            {[1, 2, 3].map(page => (
              <button
                key={page}
                className={`rounded-xl border border-white/50 w-8 h-8 transition-all font-medium flex items-center justify-center text-sm ${
                  page === 1
                    ? 'backdrop-blur-xl bg-gradient-to-br from-teal-400/50 to-teal-300/50 text-teal-700 shadow-teal-200/40'
                    : 'backdrop-blur-xl bg-gradient-to-br from-gray-400/50 to-gray-300/50 text-gray-700 shadow-gray-200/40'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="backdrop-blur-xl bg-gradient-to-br from-gray-400/50 to-gray-300/50 rounded-xl border border-white/50 px-3 py-2 transition-all hover:scale-105 text-gray-700 text-sm font-medium">
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
