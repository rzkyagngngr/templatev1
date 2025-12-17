import React, { useState } from 'react';

export default function RegisterAlt() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
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
    console.log('Register Alt:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-md">
        <div className="backdrop-blur-2xl bg-white/20 border border-gray-300 rounded-3xl shadow-2xl p-10">
          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-full bg-green-600/20 border border-green-300 mb-4">
              <i className="fas fa-user-plus text-2xl text-green-600"></i>
            </div>
            <h2 className="text-3xl font-bold text-black mb-2">Join Us</h2>
            <p className="text-gray-700">Register and start exploring</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-black font-semibold mb-2 text-sm">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 bg-white/60 border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>

            <div>
              <label className="block text-black font-semibold mb-2 text-sm">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white/60 border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
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
                className="w-full px-4 py-3 bg-white/60 border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>

            <div>
              <label className="block text-black font-semibold mb-2 text-sm">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white/60 border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>

            <div className="pt-2">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-gray-300 text-green-600 mt-1"
                />
                <span className="ml-2 text-black text-sm">
                  I agree to the <a href="#" className="text-green-600 hover:underline">Terms and Conditions</a>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 = font-bold py-3 px-4 rounded-xl transition duration-300 shadow-lg mt-6"
            >
              Register Now
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-black">
              Already registered? <a href="#" className="text-green-600 hover:underline font-semibold">Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
