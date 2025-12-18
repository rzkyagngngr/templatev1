import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, AlertTriangle, Eye, EyeOff } from 'lucide-react';

export default function FormValidation() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    website: '',
    message: ''
  });

  const [showPasswords, setShowPasswords] = useState({
    password: false,
    confirmPassword: false
  });

  const [touched, setTouched] = useState({});

  const validationRules = {
    username: (value) => {
      if (!value) return { valid: false, state: 'error', message: 'Username is required' };
      if (value.length < 3) return { valid: false, state: 'error', message: 'Username must be at least 3 characters' };
      if (!/^[a-zA-Z0-9_]+$/.test(value)) return { valid: false, state: 'error', message: 'Username can only contain letters, numbers, and underscores' };
      return { valid: true, state: 'success', message: 'Username is valid' };
    },
    email: (value) => {
      if (!value) return { valid: false, state: 'error', message: 'Email is required' };
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return { valid: false, state: 'error', message: 'Please enter a valid email address' };
      return { valid: true, state: 'success', message: 'Email is valid' };
    },
    password: (value) => {
      if (!value) return { valid: false, state: 'error', message: 'Password is required' };
      if (value.length < 8) return { valid: false, state: 'warning', message: 'Password should be at least 8 characters' };
      if (!/[A-Z]/.test(value)) return { valid: false, state: 'warning', message: 'Password should contain uppercase letters' };
      if (!/[0-9]/.test(value)) return { valid: false, state: 'warning', message: 'Password should contain numbers' };
      if (!/[!@#$%^&*]/.test(value)) return { valid: false, state: 'warning', message: 'Password should contain special characters' };
      return { valid: true, state: 'success', message: 'Password is strong' };
    },
    confirmPassword: (value, form) => {
      if (!value) return { valid: false, state: 'error', message: 'Please confirm your password' };
      if (value !== form.password) return { valid: false, state: 'error', message: 'Passwords do not match' };
      return { valid: true, state: 'success', message: 'Passwords match' };
    },
    phone: (value) => {
      if (!value) return { valid: false, state: 'error', message: 'Phone is required' };
      if (!/^[\d\s\-\+\(\)]+$/.test(value)) return { valid: false, state: 'error', message: 'Please enter a valid phone number' };
      return { valid: true, state: 'success', message: 'Phone is valid' };
    },
    website: (value) => {
      if (!value) return { valid: true, state: 'success', message: 'Optional field' };
      try {
        new URL(value);
        return { valid: true, state: 'success', message: 'Website URL is valid' };
      } catch {
        return { valid: false, state: 'error', message: 'Please enter a valid URL' };
      }
    },
    message: (value) => {
      if (!value) return { valid: false, state: 'error', message: 'Message is required' };
      if (value.length < 10) return { valid: false, state: 'warning', message: 'Message should be at least 10 characters' };
      return { valid: true, state: 'success', message: 'Message looks good' };
    }
  };

  const getValidation = (field) => {
    if (!touched[field]) return null;
    if (field === 'confirmPassword') {
      return validationRules[field](formData[field], formData);
    }
    return validationRules[field](formData[field]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (field) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
  };

  const getFieldClasses = (field) => {
    const validation = getValidation(field);
    const baseClasses = 'w-full px-4 py-3 rounded-2xl outline-none transition border';
    
    if (!validation) {
      return `${baseClasses} bg-white/50 border-white/50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-400/50 focus:border-transparent`;
    }

    if (validation.state === 'error') {
      return `${baseClasses} bg-red-50 border-red-300 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-red-400/50 focus:border-transparent`;
    }

    if (validation.state === 'success') {
      return `${baseClasses} bg-green-50 border-green-300 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-green-400/50 focus:border-transparent`;
    }

    if (validation.state === 'warning') {
      return `${baseClasses} bg-yellow-50 border-yellow-300 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent`;
    }
  };

  const isFormValid = () => {
    return Object.keys(validationRules).every(field => {
      if (field === 'confirmPassword') {
        return validationRules[field](formData[field], formData).valid;
      }
      return validationRules[field](formData[field]).valid;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Breadcrumb */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900">Form Validation</h1>
          <div className="text-sm text-slate-600">
            <span className="text-indigo-600 hover:text-indigo-700 cursor-pointer">Dashboard</span>
            <span className="mx-2">/</span>
            <span className="text-indigo-600 hover:text-indigo-700 cursor-pointer">Forms</span>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">Validation</span>
          </div>
        </div>

        {/* Info Message */}
        <div className="backdrop-blur-2xl rounded-3xl border-white/60 shadow-xl p-6 bg-blue-50/50 border-blue-200/50">
          <p className="text-sm text-slate-700">
            <span className="font-semibold text-blue-600">Tip:</span> Fill out the form to see real-time validation feedback. 
            Fields have different validation rules to help you understand validation states.
          </p>
        </div>

        {/* Validation Form */}
        <div className="backdrop-blur-2xl rounded-3xl border-white/60 shadow-xl p-8 space-y-6">
          
          {/* Username */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700">Username <span className="text-red-500">*</span></label>
              {getValidation('username') && (
                <span className="text-xs font-medium">
                  {getValidation('username').state === 'error' && <span className="text-red-600">Error</span>}
                  {getValidation('username').state === 'success' && <span className="text-green-600">Valid</span>}
                  {getValidation('username').state === 'warning' && <span className="text-yellow-600">Warning</span>}
                </span>
              )}
            </div>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              onBlur={() => handleBlur('username')}
              placeholder="john_doe"
              className={getFieldClasses('username')}
            />
            {getValidation('username') && (
              <div className={`flex items-center gap-2 text-sm ${
                getValidation('username').state === 'error' ? 'text-red-600' :
                getValidation('username').state === 'success' ? 'text-green-600' :
                'text-yellow-600'
              }`}>
                {getValidation('username').state === 'error' && <AlertCircle className="w-4 h-4" />}
                {getValidation('username').state === 'success' && <CheckCircle2 className="w-4 h-4" />}
                {getValidation('username').state === 'warning' && <AlertTriangle className="w-4 h-4" />}
                {getValidation('username').message}
              </div>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700">Email <span className="text-red-500">*</span></label>
              {getValidation('email') && (
                <span className="text-xs font-medium">
                  {getValidation('email').state === 'error' && <span className="text-red-600">Error</span>}
                  {getValidation('email').state === 'success' && <span className="text-green-600">Valid</span>}
                </span>
              )}
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur('email')}
              placeholder="john@example.com"
              className={getFieldClasses('email')}
            />
            {getValidation('email') && (
              <div className={`flex items-center gap-2 text-sm ${
                getValidation('email').state === 'error' ? 'text-red-600' : 'text-green-600'
              }`}>
                {getValidation('email').state === 'error' && <AlertCircle className="w-4 h-4" />}
                {getValidation('email').state === 'success' && <CheckCircle2 className="w-4 h-4" />}
                {getValidation('email').message}
              </div>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700">Password <span className="text-red-500">*</span></label>
              {getValidation('password') && (
                <span className="text-xs font-medium">
                  {getValidation('password').state === 'error' && <span className="text-red-600">Error</span>}
                  {getValidation('password').state === 'success' && <span className="text-green-600">Strong</span>}
                  {getValidation('password').state === 'warning' && <span className="text-yellow-600">Weak</span>}
                </span>
              )}
            </div>
            <div className="relative">
              <input
                type={showPasswords.password ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={() => handleBlur('password')}
                placeholder="Enter a strong password"
                className={getFieldClasses('password')}
              />
              <button
                type="button"
                onClick={() => setShowPasswords(prev => ({ ...prev, password: !prev.password }))}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition"
              >
                {showPasswords.password ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {getValidation('password') && (
              <div className={`flex items-center gap-2 text-sm ${
                getValidation('password').state === 'error' ? 'text-red-600' :
                getValidation('password').state === 'success' ? 'text-green-600' :
                'text-yellow-600'
              }`}>
                {getValidation('password').state === 'error' && <AlertCircle className="w-4 h-4" />}
                {getValidation('password').state === 'success' && <CheckCircle2 className="w-4 h-4" />}
                {getValidation('password').state === 'warning' && <AlertTriangle className="w-4 h-4" />}
                {getValidation('password').message}
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700">Confirm Password <span className="text-red-500">*</span></label>
              {getValidation('confirmPassword') && (
                <span className="text-xs font-medium">
                  {getValidation('confirmPassword').state === 'error' && <span className="text-red-600">Error</span>}
                  {getValidation('confirmPassword').state === 'success' && <span className="text-green-600">Match</span>}
                </span>
              )}
            </div>
            <div className="relative">
              <input
                type={showPasswords.confirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={() => handleBlur('confirmPassword')}
                placeholder="Confirm your password"
                className={getFieldClasses('confirmPassword')}
              />
              <button
                type="button"
                onClick={() => setShowPasswords(prev => ({ ...prev, confirmPassword: !prev.confirmPassword }))}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition"
              >
                {showPasswords.confirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {getValidation('confirmPassword') && (
              <div className={`flex items-center gap-2 text-sm ${
                getValidation('confirmPassword').state === 'error' ? 'text-red-600' : 'text-green-600'
              }`}>
                {getValidation('confirmPassword').state === 'error' && <AlertCircle className="w-4 h-4" />}
                {getValidation('confirmPassword').state === 'success' && <CheckCircle2 className="w-4 h-4" />}
                {getValidation('confirmPassword').message}
              </div>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700">Phone Number <span className="text-red-500">*</span></label>
              {getValidation('phone') && (
                <span className="text-xs font-medium">
                  {getValidation('phone').state === 'error' && <span className="text-red-600">Error</span>}
                  {getValidation('phone').state === 'success' && <span className="text-green-600">Valid</span>}
                </span>
              )}
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={() => handleBlur('phone')}
              placeholder="+1 (555) 123-4567"
              className={getFieldClasses('phone')}
            />
            {getValidation('phone') && (
              <div className={`flex items-center gap-2 text-sm ${
                getValidation('phone').state === 'error' ? 'text-red-600' : 'text-green-600'
              }`}>
                {getValidation('phone').state === 'error' && <AlertCircle className="w-4 h-4" />}
                {getValidation('phone').state === 'success' && <CheckCircle2 className="w-4 h-4" />}
                {getValidation('phone').message}
              </div>
            )}
          </div>

          {/* Website */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700">Website <span className="text-slate-500 text-xs">(optional)</span></label>
              {getValidation('website') && (
                <span className="text-xs font-medium">
                  {getValidation('website').state === 'error' && <span className="text-red-600">Error</span>}
                  {getValidation('website').state === 'success' && <span className="text-green-600">Valid</span>}
                </span>
              )}
            </div>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              onBlur={() => handleBlur('website')}
              placeholder="https://example.com"
              className={getFieldClasses('website')}
            />
            {getValidation('website') && (
              <div className={`flex items-center gap-2 text-sm ${
                getValidation('website').state === 'error' ? 'text-red-600' : 'text-green-600'
              }`}>
                {getValidation('website').state === 'error' && <AlertCircle className="w-4 h-4" />}
                {getValidation('website').state === 'success' && <CheckCircle2 className="w-4 h-4" />}
                {getValidation('website').message}
              </div>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700">Message <span className="text-red-500">*</span></label>
              {getValidation('message') && (
                <span className="text-xs font-medium">
                  {getValidation('message').state === 'error' && <span className="text-red-600">Error</span>}
                  {getValidation('message').state === 'success' && <span className="text-green-600">Valid</span>}
                  {getValidation('message').state === 'warning' && <span className="text-yellow-600">Warning</span>}
                </span>
              )}
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={() => handleBlur('message')}
              placeholder="Enter your message here..."
              rows="4"
              className={`${getFieldClasses('message')} resize-none`}
            />
            {getValidation('message') && (
              <div className={`flex items-center gap-2 text-sm ${
                getValidation('message').state === 'error' ? 'text-red-600' :
                getValidation('message').state === 'success' ? 'text-green-600' :
                'text-yellow-600'
              }`}>
                {getValidation('message').state === 'error' && <AlertCircle className="w-4 h-4" />}
                {getValidation('message').state === 'success' && <CheckCircle2 className="w-4 h-4" />}
                {getValidation('message').state === 'warning' && <AlertTriangle className="w-4 h-4" />}
                {getValidation('message').message}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            disabled={!isFormValid()}
            className={`w-full py-4 rounded-3xl font-semibold transition transform hover:scale-105 active:scale-95 ${
              isFormValid()
                ? 'backdrop-blur-2xl border-white/60 shadow-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
                : 'bg-slate-200 text-slate-500 cursor-not-allowed'
            }`}
          >
            {isFormValid() ? '✓ All validations passed - Submit Form' : 'Complete all fields to submit'}
          </button>
        </div>

        {/* Validation Guide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="backdrop-blur-2xl rounded-3xl border-red-200/60 shadow-xl p-6 border bg-red-50/30">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <h3 className="font-semibold text-red-900">Error State</h3>
            </div>
            <p className="text-sm text-red-800">Invalid or missing required data. User action needed to fix.</p>
          </div>
          <div className="backdrop-blur-2xl rounded-3xl border-yellow-200/60 shadow-xl p-6 border bg-yellow-50/30">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
              <h3 className="font-semibold text-yellow-900">Warning State</h3>
            </div>
            <p className="text-sm text-yellow-800">Valid but could be improved. Suggestions for enhancement.</p>
          </div>
          <div className="backdrop-blur-2xl rounded-3xl border-green-200/60 shadow-xl p-6 border bg-green-50/30">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-green-900">Success State</h3>
            </div>
            <p className="text-sm text-green-800">Valid data that meets all requirements.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
