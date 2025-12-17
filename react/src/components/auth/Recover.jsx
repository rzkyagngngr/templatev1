import React, { useState } from 'react';

export default function Recover() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Recover:', email);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/30 border border-gray-300 rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-block p-4 rounded-full bg-yellow-500/20 border border-yellow-300 mb-4">
              <i className="fas fa-key text-3xl text-yellow-600"></i>
            </div>
            <h2 className="text-3xl font-bold text-black mb-2">Reset Password</h2>
            <p className="text-gray-700">Enter your email to receive reset instructions</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-black font-semibold mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {submitted && (
              <div className="bg-green-500/20 border border-green-300 rounded-lg p-3 text-center text-black">
                <p className="font-semibold">Check your email for reset instructions!</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-yellow-600 hover:bg-yellow-700 = font-bold py-3 px-4 rounded-lg transition duration-200"
            >
              Send Reset Link
            </button>
          </form>

          <div className="mt-6 text-center text-black">
            <p>Remember your password? <a href="#" className="text-blue-600 hover:underline font-semibold">Sign in</a></p>
          </div>

          <div className="mt-4 text-center text-sm text-gray-700 bg-white/30 rounded-lg p-3">
            <p>We'll send you an email with instructions to reset your password.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
