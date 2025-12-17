import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LockScreen() {
  const [password, setPassword] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Unlock attempt');
    setUnlocked(true);
    setTimeout(() => setUnlocked(false), 2000);
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
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/30 flex items-center justify-center">
                <i className="fas fa-user text-slate-900 text-2xl"></i>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-1">Screen Locked</h1>
            <p className="text-gray-300 text-sm">Hi Mark, enter your password to unlock</p>
          </div>

          {/* Form */}
          <div className="p-8">
            {!unlocked ? (
              <form onSubmit={handleSubmit} className="space-y-4">
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

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-slate-900 font-semibold rounded-lg transition duration-200"
                >
                  Unlock
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <i className="fas fa-lock-open text-green-500 text-5xl mb-4 block"></i>
                <h2 className="text-xl font-bold text-gray-900">Unlocked!</h2>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-gray-300 text-center">
              <p className="text-gray-900 text-sm">
                Not you?{' '}
                <Link to="/auth/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
