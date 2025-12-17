import React, { useState } from 'react';

export default function RecoverAlt() {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      console.log('Send recovery email:', email);
      setStep(2);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-md">
        <div className="backdrop-blur-2xl bg-white/20 border border-gray-300 rounded-3xl shadow-2xl p-10">
          <div className="text-center mb-8">
            <div className="inline-block p-4 rounded-full bg-orange-600/20 border border-orange-300 mb-4">
              <i className="fas fa-redo text-3xl text-orange-600"></i>
            </div>
            <h2 className="text-3xl font-bold text-black mb-2">Password Recovery</h2>
            <p className="text-gray-700">Step {step} of 2</p>
          </div>

          {step === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-black text-center text-sm">
                Enter your email address and we'll send you a link to reset your password.
              </p>

              <div>
                <label className="block text-black font-semibold mb-2 text-sm">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/60 border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 = font-bold py-3 px-4 rounded-xl transition duration-300 shadow-lg"
              >
                Send Recovery Link
              </button>
            </form>
          ) : (
            <div className="text-center space-y-6">
              <div className="p-6 bg-green-500/20 border border-green-300 rounded-xl">
                <i className="fas fa-check-circle text-4xl text-green-600 mb-4 block"></i>
                <h3 className="text-lg font-bold text-black mb-2">Check Your Email</h3>
                <p className="text-black text-sm mb-4">We've sent a password reset link to:</p>
                <p className="text-black font-semibold break-all mb-4">{email}</p>
                <p className="text-gray-700 text-sm">The link will expire in 24 hours.</p>
              </div>

              <button
                onClick={() => setStep(1)}
                className="w-full bg-gray-600 hover:bg-gray-700 = font-bold py-3 px-4 rounded-xl transition"
              >
                Use Different Email
              </button>

              <button
                className="w-full bg-orange-600 hover:bg-orange-700 = font-bold py-3 px-4 rounded-xl transition"
              >
                Back to Login
              </button>
            </div>
          )}

          <div className="mt-6 text-center text-sm text-gray-700">
            <p>Didn't receive the email? Check your spam folder or try again.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
