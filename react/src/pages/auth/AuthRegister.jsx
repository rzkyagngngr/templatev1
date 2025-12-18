import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, CheckCircle, ArrowRight } from 'lucide-react';

export default function AuthRegister() {
    const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration:', form);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
            <div className="w-full max-w-md">
                {/* Card */}
                <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-2xl shadow-black/10 p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
                        <p className="text-gray-700">Join us today and get started</p>
                    </div>

                    {/* Form */}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Name Input */}
                        <div>
                            <label className="block text-gray-900 text-sm font-semibold mb-3">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600/60" size={20} />
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-3 bg-white/30 border border-white/40 rounded-3xl text-gray-900 placeholder-gray-600/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200/50 transition-all"
                                    placeholder="Your full name"
                                />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div>
                            <label className="block text-gray-900 text-sm font-semibold mb-3">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600/60" size={20} />
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-3 bg-white/30 border border-white/40 rounded-3xl text-gray-900 placeholder-gray-600/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200/50 transition-all"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-gray-900 text-sm font-semibold mb-3">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600/60" size={20} />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-12 py-3 bg-white/30 border border-white/40 rounded-3xl text-gray-900 placeholder-gray-600/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200/50 transition-all"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600/60 hover:text-gray-600 transition"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password Input */}
                        <div>
                            <label className="block text-gray-900 text-sm font-semibold mb-3">Confirm Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600/60" size={20} />
                                <input
                                    type={showConfirm ? 'text' : 'password'}
                                    name="confirmPassword"
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-12 py-3 bg-white/30 border border-white/40 rounded-3xl text-gray-900 placeholder-gray-600/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200/50 transition-all"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirm(!showConfirm)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600/60 hover:text-gray-600 transition"
                                >
                                    {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Terms */}
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 rounded-xl bg-white/30 border border-white/40 accent-blue-600 cursor-pointer" />
                            <span className="text-gray-900 text-sm font-medium">I agree to Terms of Service</span>
                        </label>

                        {/* Register Button */}
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-3xl hover:shadow-xl hover:shadow-blue-400/30 transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                            Create Account
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    {/* Login Link */}
                    <p className="text-gray-700 text-center text-sm mt-8">
                        Already have an account? <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition">Sign in</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
