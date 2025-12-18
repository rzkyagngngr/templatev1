import React, { useState } from 'react';
import { Mail, ArrowLeft, ArrowRight } from 'lucide-react';

export default function AuthRecover() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
            <div className="w-full max-w-md">
                <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-2xl shadow-black/10 p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Recover Password</h2>
                        <p className="text-gray-700">Enter your email to reset your password</p>
                    </div>

                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-900 text-sm font-semibold mb-3">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600/60" size={20} />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 bg-white/30 border border-white/40 rounded-3xl text-gray-900 placeholder-gray-600/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200/50"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-3xl hover:shadow-xl hover:shadow-blue-400/30 flex items-center justify-center gap-2 group"
                            >
                                Send Recovery Link
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    ) : (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Check Your Email</h3>
                            <p className="text-gray-700 text-sm">We've sent a password reset link to {email}</p>
                        </div>
                    )}

                    <p className="text-gray-700 text-center text-sm mt-8">
                        <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">← Back to Login</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
