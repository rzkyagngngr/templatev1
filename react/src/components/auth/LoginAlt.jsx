import React, { useState } from 'react';

export default function LoginAlt() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Alt:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="w-full max-w-md">
        <div className="backdrop-blur-2xl bg-black/20 border border-gray-300 rounded-3xl shadow-2xl p-10">
          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-full bg-blue-600/20 border border-blue-300 mb-4">
              <i className="fas fa-lock text-2xl text-blue-600"></i>
            </div>
            <h2 className="text-3xl font-bold text-black mb-2">Sign In</h2>
            <p className="text-gray-700">Alternative login interface</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-black font-semibold mb-2 text-sm">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-white/60 border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-black font-semibold mb-2 text-sm">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white/60 border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600"
                />
                <span className="ml-2 text-sm text-black">Keep me signed in</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Need help?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 = font-bold py-3 px-4 rounded-xl transition duration-300 shadow-lg"
            >
              Sign In Now
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-black">
              New here? <a href="#" className="text-blue-600 hover:underline font-semibold">Create account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
