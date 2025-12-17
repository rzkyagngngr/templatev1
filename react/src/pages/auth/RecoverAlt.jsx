import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RecoverAlt() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Password reset request for:', email);
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
                <i className="fas fa-redo text-slate-900 text-2xl"></i>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Recover Password</h1>
            <p className="text-gray-800 text-sm">Enter your email and we'll help</p>
          </div>

          {/* Form */}
          <div className="p-8 space-y-4">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address
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

                <button
                  type="submit"
                  className="w-full py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-50 transition duration-200 shadow-lg mt-6"
                >
                  Send Link
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <i className="fas fa-envelope-open-text text-slate-900 text-5xl mb-4 block"></i>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Link Sent!</h2>
                <p className="text-gray-700 text-sm">Check your email for reset instructions</p>
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-gray-300 text-center">
              <Link to="/auth/login-alt" className="text-gray-900 hover:text-gray-700 font-bold text-sm">
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
