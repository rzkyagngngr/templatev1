import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterAlt() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration attempt:', formData);
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Register</h1>
            <p className="text-gray-800 text-sm">Create your new account</p>
          </div>

          {/* Form */}
          <div className="p-8 space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="username"
                  className="w-full px-4 py-3 bg-white/20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-900 placeholder-gray-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
                  className="w-full px-4 py-3 bg-white/20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-900 placeholder-gray-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
                  className="w-full px-4 py-3 bg-white/20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-900 placeholder-gray-600"
                  required
                />
              </div>

              <div className="flex items-center pt-2">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="w-4 h-4 rounded focus:ring-2 focus:ring-purple-400"
                  required
                />
                <label className="ml-2 text-sm text-gray-900">
                  I agree to the Terms
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-50 transition duration-200 shadow-lg mt-6"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-gray-300 text-center">
              <p className="text-gray-900 text-sm">
                Already registered?{' '}
                <Link to="/auth/login-alt" className="text-gray-900 hover:text-gray-700 font-bold">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
