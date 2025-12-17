import React, { useState } from 'react';

export default function LockScreenAlt() {
  const [password, setPassword] = useState('');
  const [user] = useState({ name: 'Jane Smith', email: 'jane@example.com' });

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Unlock:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-md">
        <div className="backdrop-blur-2xl bg-white/20 border border-gray-300 rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-6 text-center">
            <i className="fas fa-lock text-4xl = mb-3 block"></i>
            <p className="= font-semibold text-sm">Session Locked</p>
          </div>

          <div className="p-10">
            <div className="text-center mb-8">
              <div className="inline-block w-16 h-16 rounded-full bg-red-600/30 border-2 border-red-300 flex items-center justify-center mb-4">
                <i className="fas fa-user text-2xl text-red-600"></i>
              </div>
              <h2 className="text-2xl font-bold text-black">{user.name}</h2>
              <p className="text-gray-700 text-sm">{user.email}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-black font-semibold mb-3 text-sm">Enter your password to continue</label>
                <input
                  type="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-white/60 border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 = font-bold py-3 px-4 rounded-xl transition duration-300 shadow-lg"
              >
                <i className="fas fa-lock-open mr-2"></i>
                Unlock Session
              </button>
            </form>

            <div className="mt-6 flex justify-between text-center">
              <button className="text-red-600 hover:text-red-700 font-semibold text-sm">
                <i className="fas fa-user-circle mr-1"></i>
                Other User
              </button>
              <button className="text-red-600 hover:text-red-700 font-semibold text-sm">
                <i className="fas fa-sign-out-alt mr-1"></i>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
