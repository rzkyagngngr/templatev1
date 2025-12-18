import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="w-full max-w-md">
        <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-2xl shadow-black/10 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-700">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-900 text-sm font-semibold mb-3">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600/60" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/30 border border-white/40 rounded-3xl text-gray-900 placeholder-gray-600/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200/50"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-900 text-sm font-semibold mb-3">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600/60" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 bg-white/30 border border-white/40 rounded-3xl text-gray-900 placeholder-gray-600/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200/50"
                  placeholder="••••••••"
                  required
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

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-5 h-5 rounded-xl bg-white/30 border border-white/40 accent-blue-600 cursor-pointer" />
                <span className="text-gray-900 text-sm font-medium">Remember me</span>
              </label>
              <Link to="/auth/recover" className="text-blue-600 text-sm font-medium hover:text-blue-700">Forgot?</Link>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-3xl hover:shadow-xl hover:shadow-blue-400/30 transition-all"
            >
              Sign In
            </button>
          </form>

          <p className="text-gray-700 text-center text-sm mt-8">
            Don't have an account? <Link to="/auth/register" className="text-blue-600 font-semibold hover:text-blue-700">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
