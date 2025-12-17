import React, { useState } from 'react';

export default function FormElements() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Form Elements</h1>
        <nav className="text-sm text-gray-600">
          <span>UI / </span>
          <span>Forms / </span>
          <span className="text-gray-900 font-medium">Elements</span>
        </nav>
      </div>

      {/* Basic Inputs */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Basic Input Fields</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black mb-2">Text Input</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter text"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">Email Input</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">Number Input</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter number"
            />
          </div>
        </div>
      </div>

      {/* Textarea */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Textarea</h2>
        <textarea
          rows="5"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your message here..."
        ></textarea>
      </div>

      {/* Select Dropdowns */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Select Options</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black mb-2">Single Select</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Choose an option</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">Multiple Select</label>
            <select multiple className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>
      </div>

      {/* Checkboxes and Radios */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Checkboxes & Radios</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-black mb-3">Checkboxes</h3>
            <div className="space-y-2">
              <label className="flex items-center text-black"><input type="checkbox" className="mr-2" /> Option A</label>
              <label className="flex items-center text-black"><input type="checkbox" className="mr-2" /> Option B</label>
              <label className="flex items-center text-black"><input type="checkbox" className="mr-2" /> Option C</label>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-black mb-3">Radio Buttons</h3>
            <div className="space-y-2">
              <label className="flex items-center text-black"><input type="radio" name="demo" className="mr-2" /> Choice 1</label>
              <label className="flex items-center text-black"><input type="radio" name="demo" className="mr-2" /> Choice 2</label>
              <label className="flex items-center text-black"><input type="radio" name="demo" className="mr-2" /> Choice 3</label>
            </div>
          </div>
        </div>
      </div>

      {/* File Upload */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">File Upload</h2>
        <input
          type="file"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
