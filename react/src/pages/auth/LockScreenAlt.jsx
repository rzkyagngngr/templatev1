import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LockScreenAlt() {
  const [password, setPassword] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUnlocked(true);
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
                <i className="fas fa-lock text-slate-900 text-2xl"></i>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Locked</h1>
            <p className="text-gray-800 text-sm">Enter password to continue</p>
          </div>

          {/* Form */}
          <div className="p-8 space-y-4">
            {!unlocked ? (
              <form onSubmit={handleSubmit} className="space-y-4">
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

                <button
                  type="submit"
                  className="w-full py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-50 transition duration-200 shadow-lg"
                >
                  Unlock Screen
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <i className="fas fa-check-circle text-emerald-600 text-5xl mb-4 block"></i>
                <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-gray-300 text-center">
              <Link to="/auth/login-alt" className="text-gray-900 hover:text-gray-700 font-bold text-sm">
                Sign in with different account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
