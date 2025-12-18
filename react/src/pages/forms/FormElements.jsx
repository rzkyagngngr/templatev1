import React, { useState } from 'react';
import { Mail, Phone, Lock, Calendar, FileUp, Palette, CheckCircle2, Radio } from 'lucide-react';

export default function FormElements() {
  const [formData, setFormData] = useState({
    text: '',
    email: '',
    password: '',
    number: '',
    phone: '',
    date: '',
    select: '',
    checkbox: false,
    radio: '',
    textarea: '',
    file: null,
    color: '#3b82f6'
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      file: e.target.files?.[0] || null
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Breadcrumb */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900">Form Elements</h1>
          <div className="text-sm text-slate-600">
            <span className="text-indigo-600 hover:text-indigo-700 cursor-pointer">Dashboard</span>
            <span className="mx-2">/</span>
            <span className="text-indigo-600 hover:text-indigo-700 cursor-pointer">Forms</span>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">Elements</span>
          </div>
        </div>

        {/* Text & Email Inputs */}
        <div className="backdrop-blur-2xl rounded-3xl border-white/60 shadow-xl p-8 space-y-6">
          <h2 className="text-lg font-semibold text-slate-900">Text & Email Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">Text Input</label>
              <input
                type="text"
                name="text"
                value={formData.text}
                onChange={handleChange}
                placeholder="Enter text..."
                className="w-full bg-white/50 rounded-2xl border-white/50 border px-4 py-3 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-400/50 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Input
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full bg-white/50 rounded-2xl border-white/50 border px-4 py-3 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-400/50 focus:border-transparent outline-none transition"
              />
            </div>
          </div>
        </div>

        {/* Password & Number Inputs */}
        <div className="backdrop-blur-2xl rounded-3xl border-white/60 shadow-xl p-8 space-y-6">
          <h2 className="text-lg font-semibold text-slate-900">Password & Number Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                <Lock className="w-4 h-4 inline mr-2" />
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full bg-white/50 rounded-2xl border-white/50 border px-4 py-3 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-400/50 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">Number Input</label>
              <input
                type="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="0"
                className="w-full bg-white/50 rounded-2xl border-white/50 border px-4 py-3 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-400/50 focus:border-transparent outline-none transition"
              />
            </div>
          </div>
        </div>

        {/* Phone & Date Inputs */}
        <div className="backdrop-blur-2xl rounded-3xl border-white/60 shadow-xl p-8 space-y-6">
          <h2 className="text-lg font-semibold text-slate-900">Phone & Date Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                <Phone className="w-4 h-4 inline mr-2" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-white/50 rounded-2xl border-white/50 border px-4 py-3 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-400/50 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                <Calendar className="w-4 h-4 inline mr-2" />
                Date Input
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-white/50 rounded-2xl border-white/50 border px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-400/50 focus:border-transparent outline-none transition"
              />
            </div>
          </div>
        </div>

        {/* Select & Color Inputs */}
        <div className="backdrop-blur-2xl rounded-3xl border-white/60 shadow-xl p-8 space-y-6">
          <h2 className="text-lg font-semibold text-slate-900">Select & Color Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">Select Dropdown</label>
              <select
                name="select"
                value={formData.select}
                onChange={handleChange}
                className="w-full bg-white/50 rounded-2xl border-white/50 border px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-400/50 focus:border-transparent outline-none transition"
              >
                <option value="">Choose an option...</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                <Palette className="w-4 h-4 inline mr-2" />
                Color Picker
              </label>
              <div className="flex gap-3">
                <input
                  type="color"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-16 h-12 rounded-2xl cursor-pointer border border-white/50"
                />
                <div className="flex-1 bg-white/50 rounded-2xl border border-white/50 px-4 py-3 text-slate-600 text-sm">
                  {formData.color}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Checkbox & Radio */}
        <div className="backdrop-blur-2xl rounded-3xl border-white/60 shadow-xl p-8 space-y-6">
          <h2 className="text-lg font-semibold text-slate-900">Checkbox & Radio Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={formData.checkbox}
                  onChange={handleChange}
                  className="w-5 h-5 rounded-lg bg-white/50 border-white/50 border text-blue-500 focus:ring-2 focus:ring-blue-400/50"
                />
                <span className="text-slate-700 font-medium">I agree to the terms and conditions</span>
              </label>
            </div>
            <div>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="radio"
                    value="option1"
                    checked={formData.radio === 'option1'}
                    onChange={handleChange}
                    className="w-5 h-5 rounded-full bg-white/50 border-white/50 border text-blue-500 focus:ring-2 focus:ring-blue-400/50"
                  />
                  <span className="text-slate-700">Option 1</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="radio"
                    value="option2"
                    checked={formData.radio === 'option2'}
                    onChange={handleChange}
                    className="w-5 h-5 rounded-full bg-white/50 border-white/50 border text-blue-500 focus:ring-2 focus:ring-blue-400/50"
                  />
                  <span className="text-slate-700">Option 2</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Textarea & File Upload */}
        <div className="backdrop-blur-2xl rounded-3xl border-white/60 shadow-xl p-8 space-y-6">
          <h2 className="text-lg font-semibold text-slate-900">Textarea & File Upload</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">Message</label>
              <textarea
                name="textarea"
                value={formData.textarea}
                onChange={handleChange}
                placeholder="Enter your message here..."
                rows="4"
                className="w-full bg-white/50 rounded-2xl border-white/50 border px-4 py-3 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-400/50 focus:border-transparent outline-none transition resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                <FileUp className="w-4 h-4 inline mr-2" />
                File Upload
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full bg-white/50 rounded-2xl border-white/50 border px-4 py-3 text-slate-600 placeholder-slate-400 focus:ring-2 focus:ring-blue-400/50 focus:border-transparent outline-none transition"
              />
              {formData.file && (
                <p className="text-sm text-green-600 mt-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  {formData.file.name}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full backdrop-blur-2xl rounded-3xl border-white/60 shadow-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-4 transition transform hover:scale-105 active:scale-95">
          Submit Form
        </button>
      </div>
    </div>
  );
}
