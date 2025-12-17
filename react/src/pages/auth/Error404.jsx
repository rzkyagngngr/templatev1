import React from 'react';
import { Link } from 'react-router-dom';

export default function Error404() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f3f4f6"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }}
    >
      <div className="w-full max-w-md">
        <div className="backdrop-blur-md bg-white/10 border border-gray-300 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Page Not Found</h1>
            <p className="text-gray-300 text-sm">Back to dashboard</p>
          </div>

          {/* Content */}
          <div className="p-8 text-center">
            <div className="mb-6">
              <div className="inline-block">
                <i className="fas fa-exclamation-triangle text-yellow-500 text-6xl"></i>
              </div>
            </div>
            
            <h2 className="text-5xl font-bold text-gray-900 mb-2">404</h2>
            <p className="text-gray-700 mb-2 font-semibold">Something Went Wrong</p>
            <p className="text-gray-600 text-sm mb-6">
              The page you're looking for doesn't exist or has been moved.
            </p>

            <Link
              to="/"
              className="inline-block w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-slate-900 font-semibold rounded-lg transition duration-200"
            >
              Back to Dashboard
            </Link>
          </div>

          {/* Footer */}
          <div className="p-4 bg-gray-100/50 border-t border-gray-300 text-center">
            <p className="text-gray-600 text-xs">
              Â© {new Date().getFullYear()} Glacia. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
