import React from 'react';

export default function Error404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="text-center">
        <div className="backdrop-blur-xl bg-white/20 border border-gray-300 rounded-3xl shadow-2xl p-12 max-w-md">
          <div className="mb-8">
            <h1 className="text-8xl font-black text-black mb-4">404</h1>
            <i className="fas fa-search text-6xl text-blue-600 opacity-50"></i>
          </div>

          <h2 className="text-3xl font-bold text-black mb-3">Page Not Found</h2>
          <p className="text-gray-700 mb-2">Sorry, the page you're looking for doesn't exist.</p>
          <p className="text-gray-600 text-sm mb-8">It may have been moved or deleted.</p>

          <div className="space-y-3">
            <button className="w-full bg-blue-600 hover:bg-blue-700 = font-bold py-3 px-4 rounded-xl transition">
              <i className="fas fa-home mr-2"></i>
              Go Home
            </button>
            <button className="w-full bg-gray-600 hover:bg-gray-700 = font-bold py-3 px-4 rounded-xl transition">
              <i className="fas fa-arrow-left mr-2"></i>
              Go Back
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-300">
            <p className="text-black text-sm font-semibold mb-3">Quick Links:</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-blue-600 hover:underline text-sm">Dashboard</a>
              <a href="#" className="text-blue-600 hover:underline text-sm">Support</a>
              <a href="#" className="text-blue-600 hover:underline text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
