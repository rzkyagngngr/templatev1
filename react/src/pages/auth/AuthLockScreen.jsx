import React from 'react';
import { Lock } from 'lucide-react';

export default function AuthLockScreen() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <div className="w-full max-w-md backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl p-8 shadow-xl shadow-black/5">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-3xl flex items-center justify-center">
                        <Lock className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-gray-900 font-semibold">Account Locked</p>
                    <p className="text-gray-700 text-sm mt-1">Enter password to unlock</p>
                </div>
                <form className="space-y-6">
                    <input type="password" className="w-full px-4 py-3 bg-white/30 border border-white/40 rounded-3xl text-gray-900 placeholder-gray-600/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200/50" placeholder="Enter password" />
                    <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-lg text-white rounded-3xl font-semibold transition-all">Unlock</button>
                </form>
            </div>
        </div>
    );
}
