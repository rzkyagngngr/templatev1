import React, { useState } from 'react';

export default function LockScreen() {
  const [password, setPassword] = useState('');
  const [user] = useState({ name: 'John Doe', avatar: '👤' });

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Unlock with password:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/30 border border-gray-300 rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-8">
            <div className="inline-block w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-4xl border-4 border-white shadow-lg">
              {user.avatar}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-black mb-2">{user.name}</h2>
          <p className="text-gray-700 mb-8">Your screen is locked</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-black font-semibold mb-3">Enter Password</label>
              <input
                type="password"
                value={password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-lg tracking-widest"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 = font-bold py-3 px-4 rounded-lg transition duration-200"
            >
              <i className="fas fa-unlock mr-2"></i>
              Unlock
            </button>
          </form>

          <div className="mt-8 flex justify-center space-x-4">
            <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
              <i className="fas fa-user mr-2"></i>
              Switch User
            </button>
            <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
              <i className="fas fa-power-off mr-2"></i>
              Sign Out
            </button>
          </div>

          <div className="mt-6 text-xs text-gray-700 bg-white/30 rounded-lg p-3">
            <p><i className="fas fa-info-circle mr-2"></i>This computer is locked</p>
          </div>
        </div>
      </div>
    </div>
  );
}
