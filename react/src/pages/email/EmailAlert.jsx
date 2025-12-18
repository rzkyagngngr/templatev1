import React from 'react';
import { AlertTriangle, Shield } from 'lucide-react';

export default function EmailAlert() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <div className="w-full space-y-6">
                <div>
                    <nav className="flex text-gray-600 text-sm mb-3">
                        <span className="hover:text-gray-900 cursor-pointer transition">Glacia</span>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-semibold">Email Template - Alert</span>
                    </nav>
                    <h1 className="text-4xl font-bold text-gray-900">Alert Email Template</h1>
                </div>
                <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl overflow-hidden shadow-xl shadow-black/5 p-8">
                    <div className="space-y-6">
                        <div className="flex items-start gap-4 pb-6 border-b border-white/40">
                            <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                            <div>
                                <p className="text-gray-900 font-bold text-lg">Alert: Unusual Activity Detected</p>
                                <p className="text-gray-700 text-sm mt-1">Security alert for your account</p>
                            </div>
                        </div>
                        <div className="backdrop-blur-2xl bg-white/50 rounded-3xl p-6 border border-white/40">
                            <p className="text-gray-900 font-semibold mb-4">We detected unusual activity on your account</p>
                            <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                                An attempt to access your account was detected from an unfamiliar location. If this wasn't you, please secure your account immediately.
                            </p>
                            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-4 text-center mb-6 shadow-lg shadow-red-300/30">
                                <button className="text-white font-bold flex items-center justify-center gap-2 w-full">
                                    <Shield size={18} /> Secure Account
                                </button>
                            </div>
                            <p className="text-gray-600 text-sm">For your security, this action is required to protect your data.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
