import React from 'react';

export default function Auth404() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-12 text-center max-w-md">
                <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Page Not Found</h2>
                <p className="text-gray-700 mb-8">The page you're looking for doesn't exist or has been removed.</p>
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-lg text-white rounded-3xl font-semibold transition-all">
                    Go Home
                </button>
            </div>
        </div>
    );
}
