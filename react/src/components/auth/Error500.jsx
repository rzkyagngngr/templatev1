import React from 'react';

export default function Error500() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 to-red-800 p-4">
      <div className="text-center">
        <div className="backdrop-blur-xl bg-white/20 border border-red-300 rounded-3xl shadow-2xl p-12 max-w-md">
          <div className="mb-8">
            <h1 className="text-8xl font-black text-red-600 mb-4">500</h1>
            <i className="fas fa-exclamation-triangle text-6xl text-red-600 opacity-50"></i>
          </div>

          <h2 className="text-3xl font-bold text-black mb-3">Server Error</h2>
          <p className="text-gray-700 mb-2">Oops! Something went wrong on our end.</p>
          <p className="text-gray-600 text-sm mb-8">Our team has been notified. Please try again later.</p>

          <div className="bg-red-600/20 border border-red-300 rounded-lg p-4 mb-6">
            <p className="text-black text-sm font-mono">Error Code: ERR_SERVER_500</p>
          </div>

          <div className="space-y-3">
            <button className="w-full bg-red-600 hover:bg-red-700 = font-bold py-3 px-4 rounded-xl transition">
              <i className="fas fa-redo mr-2"></i>
              Retry
            </button>
            <button className="w-full bg-gray-600 hover:bg-gray-700 = font-bold py-3 px-4 rounded-xl transition">
              <i className="fas fa-home mr-2"></i>
              Go to Home
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-red-300">
            <p className="text-black text-sm font-semibold mb-3">Need Help?</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-red-600 hover:underline text-sm">Support Center</a>
              <a href="#" className="text-red-600 hover:underline text-sm">Report Bug</a>
              <a href="#" className="text-red-600 hover:underline text-sm">Status</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
