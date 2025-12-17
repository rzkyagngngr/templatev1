import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginAlt() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="w-full max-w-md">
        <div className="backdrop-blur-md bg-white/10 border border-gray-300 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="p-8 text-center bg-gradient-to-b from-gray-900/50 to-transparent">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                <span className="text-slate-900 font-bold text-2xl">M</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Login</h1>
            <p className="text-gray-800 text-sm">Access your account</p>
          </div>

          {/* Form */}
          <div className="p-8 space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-900 placeholder-gray-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
                  className="w-full px-4 py-3 bg-white/20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-900 placeholder-gray-600"
                  required
                />
              </div>

              <div className="text-right pt-2">
                <Link to="/auth/recover-alt" className="text-sm text-gray-900 hover:text-gray-700 font-semibold">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-50 transition duration-200 shadow-lg mt-6"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-300">
              <p className="text-center text-gray-900 text-sm mb-4">
                New user?{' '}
                <Link to="/auth/register-alt" className="text-gray-900 hover:text-gray-700 font-bold">
                  Create account
                </Link>
              </p>

              <div className="flex gap-3 justify-center">
                <button className="flex-1 h-10 rounded-lg bg-white/20 border border-gray-300 text-gray-900 font-semibold hover:bg-white/30 transition">
                  <i className="fab fa-facebook mr-2"></i>FB
                </button>
                <button className="flex-1 h-10 rounded-lg bg-white/20 border border-gray-300 text-gray-900 font-semibold hover:bg-white/30 transition">
                  <i className="fab fa-twitter mr-2"></i>TW
                </button>
                <button className="flex-1 h-10 rounded-lg bg-white/20 border border-gray-300 text-gray-900 font-semibold hover:bg-white/30 transition">
                  <i className="fab fa-google mr-2"></i>GG
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
