import React from 'react';

export default function AuthLoginAlt() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <div className="w-full max-w-md backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl p-8 shadow-xl shadow-black/5">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Sign In</h2>
                <form className="space-y-6">
                    <input type="email" className="w-full px-4 py-3 bg-white/30 border border-white/40 rounded-3xl text-gray-900 placeholder-gray-600/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200/50" placeholder="Email" />
                    <input type="password" className="w-full px-4 py-3 bg-white/30 border border-white/40 rounded-3xl text-gray-900 placeholder-gray-600/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200/50" placeholder="Password" />
                    <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-lg text-white rounded-3xl font-semibold transition-all">Sign In</button>
                </form>
            </div>
        </div>
    );
}
