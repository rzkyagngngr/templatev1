import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, rememberMe });
  };

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
            <div className="mb-4 flex justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xl">M</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Welcome Back</h1>
            <p className="text-gray-300 text-sm">Sign in to continue to your dashboard</p>
          </div>

          {/* Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-white/20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                  required
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-blue-500 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-900">Remember me</span>
                </label>
                <Link to="/auth/recover" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-slate-900 font-semibold rounded-lg transition duration-200 mt-6"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-300">
              <p className="text-center text-gray-900 text-sm mb-4">
                Don't have an account?{' '}
                <Link to="/auth/register" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Register here
                </Link>
              </p>

              <div className="text-center mb-4 text-gray-700 text-xs font-medium">OR</div>

              <div className="flex gap-3 justify-center">
                <button className="w-12 h-12 rounded-full bg-blue-50 border border-gray-300 flex items-center justify-center hover:bg-blue-100 transition">
                  <i className="fab fa-facebook text-blue-600"></i>
                </button>
                <button className="w-12 h-12 rounded-full bg-sky-50 border border-gray-300 flex items-center justify-center hover:bg-sky-100 transition">
                  <i className="fab fa-twitter text-sky-400"></i>
                </button>
                <button className="w-12 h-12 rounded-full bg-red-50 border border-gray-300 flex items-center justify-center hover:bg-red-100 transition">
                  <i className="fab fa-google text-red-600"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
