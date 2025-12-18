import React, { useState } from 'react';
import { Calendar, Clock, Palette, ToggleRight, Search, Tag, Zap, ArrowRight, ArrowLeft, X } from 'lucide-react';

export default function FormAdvanced() {
  const [formData, setFormData] = useState({
    dateValue: '',
    timeValue: '',
    colorValue: '#3b82f6',
    toggleSwitch: false,
    multiSelect: [],
    tagsInput: [],
    autocompleteInput: '',
    autocompleteFiltered: [],
    stepper: 0,
    tagInput: ''
  });

  const mockAutocompleteSuggestions = ['React', 'Redux', 'Recoil', 'RxJS', 'Rollup', 'Remix'];
  const mockMultiSelectOptions = ['Design', 'Development', 'Testing', 'Documentation', 'Marketing'];

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMultiSelect = (option) => {
    setFormData(prev => ({
      ...prev,
      multiSelect: prev.multiSelect.includes(option)
        ? prev.multiSelect.filter(item => item !== option)
        : [...prev.multiSelect, option]
    }));
  };

  const addTag = () => {
    if (formData.tagInput.trim() && !formData.tagsInput.includes(formData.tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tagsInput: [...prev.tagsInput, prev.tagInput.trim()],
        tagInput: ''
      }));
    }
  };

  const removeTag = (tag) => {
    setFormData(prev => ({
      ...prev,
      tagsInput: prev.tagsInput.filter(t => t !== tag)
    }));
  };

  const handleAutocomplete = (value) => {
    handleInputChange('autocompleteInput', value);
    if (value) {
      const filtered = mockAutocompleteSuggestions.filter(s => 
        s.toLowerCase().includes(value.toLowerCase())
      );
      handleInputChange('autocompleteFiltered', filtered);
    } else {
      handleInputChange('autocompleteFiltered', []);
    }
  };

  const selectAutocomplete = (suggestion) => {
    handleInputChange('autocompleteInput', suggestion);
    handleInputChange('autocompleteFiltered', []);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Breadcrumb */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900">Advanced Form Elements</h1>
          <div className="text-sm text-slate-600">
            <span className="text-indigo-600 hover:text-indigo-700 cursor-pointer">Dashboard</span>
            <span className="mx-2">/</span>
            <span className="text-indigo-600 hover:text-indigo-700 cursor-pointer">Forms</span>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">Advanced</span>
          </div>
        </div>

        {/* Date & Time Picker */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="backdrop-blur-2xl rounded-3xl border-white/60 shadow-xl p-8 space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-500" />
              Date Picker
            </h3>
            <input
              type="date"
              value={formData.dateValue}
              onChange={(e) => handleInputChange('dateValue', e.target.value)}
              className="w-full bg-white/50 rounded-2xl border-white/50 border px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-400/50 focus:border-transparent outline-none transition"
            />
            {formData.dateValue && (
              <div className="bg-blue-50 rounded-2xl p-3 text-sm text-slate-700">
                Selected: {new Date(formData.dateValue).toLocaleDateString('en-US', { 
                  year: 'numeric', month: 'long', day: 'numeric' 
                })}
              </div>
            )}
          </div>

          <div className="backdrop-blur-2xl rounded-3xl border-white/60 shadow-xl p-8 space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-500" />
              Time Picker
            </h3>
            <input
              type="time"
              value={formData.timeValue}
              onChange={(e) => handleInputChange('timeValue', e.target.value)}
              className="w-full bg-white/50 rounded-2xl border-white/50 border px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-400/50 focus:border-transparent outline-none transition"
            />
            {formData.timeValue && (
              <div className="bg-purple-50 rounded-2xl p-3 text-sm text-slate-700">
                Selected: {formData.timeValue}
              </div>
            )}
          </div>
        </div>

        {/* Color Picker & Toggle */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="backdrop-blur-2xl rounded-3xl border-white/60 shadow-xl p-8 space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <Palette className="w-5 h-5 text-pink-500" />
              Color Picker
            </h3>
            <div className="flex gap-3 items-center">
              <input
                type="color"
                value={formData.colorValue}
                onChange={(e) => handleInputChange('colorValue', e.target.value)}
                className="w-20 h-16 rounded-2xl cursor-pointer border-2 border-white/50"
              />
              <div className="flex-1 space-y-2">
                <div 
                  className="w-full h-14 rounded-2xl border-2 border-white/50 transition"
                  style={{ backgroundColor: formData.colorValue }}
                />
                <div className="text-sm text-slate-600 font-mono">{formData.colorValue}</div>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-2xl rounded-3xl border-white/60 shadow-xl p-8 space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <ToggleRight className="w-5 h-5 text-indigo-500" />
              Toggle Switch
            </h3>
            <button
              onClick={() => handleInputChange('toggleSwitch', !formData.toggleSwitch)}
              className={`w-14 h-8 rounded-full border-2 border-white/50 flex items-center transition ${
                formData.toggleSwitch 
                  ? 'bg-gradient-to-r from-blue-400 to-indigo-500' 
                  : 'bg-white/30'
              }`}
            >
              <div className={`w-6 h-6 rounded-full bg-white transition-transform ${
                formData.toggleSwitch ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
            <div className="text-sm text-slate-600">
              Status: <span className="font-semibold text-slate-900">
                {formData.toggleSwitch ? 'Enabled' : 'Disabled'}
              </span>
            </div>
          </div>
        </div>

        {/* Multi-Select */}
        <div className="backdrop-blur-2xl rounded-3xl border-white/60 shadow-xl p-8 space-y-4">
          <h3 className="text-lg font-semibold text-slate-900">Multi-Select</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {mockMultiSelectOptions.map(option => (
              <button
                key={option}
                onClick={() => handleMultiSelect(option)}
                className={`px-4 py-2 rounded-2xl border-2 transition font-medium ${
                  formData.multiSelect.includes(option)
                    ? 'bg-blue-500 border-blue-600 text-white'
                    : 'bg-white/50 border-white/50 text-slate-700 hover:bg-white/70'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="bg-blue-50 rounded-2xl p-3 text-sm">
            <span className="font-semibold text-slate-700">Selected ({formData.multiSelect.length}): </span>
            <span className="text-slate-600">{formData.multiSelect.join(', ') || 'None'}</span>
          </div>
        </div>

        {/* Tags Input */}
        <div className="backdrop-blur-2xl rounded-3xl border-white/60 shadow-xl p-8 space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            <Tag className="w-5 h-5 text-green-500" />
            Tags Input
          </h3>
          <div className="flex gap-2">
            <input
              type="text"
              value={formData.tagInput}
              onChange={(e) => handleInputChange('tagInput', e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              placeholder="Add a tag and press Enter..."
              className="flex-1 bg-white/50 rounded-2xl border-white/50 border px-4 py-3 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-400/50 focus:border-transparent outline-none transition"
            />
            <button
              onClick={addTag}
              className="px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-2xl font-medium hover:from-green-500 hover:to-green-600 transition"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.tagsInput.map(tag => (
              <div key={tag} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                {tag}
                <button
                  onClick={() => removeTag(tag)}
                  className="hover:bg-green-200 rounded-full p-0.5 transition"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Autocomplete */}
        <div className="backdrop-blur-2xl rounded-3xl border-white/60 shadow-xl p-8 space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            <Search className="w-5 h-5 text-orange-500" />
            Autocomplete
          </h3>
          <div className="relative">
            <input
              type="text"
              value={formData.autocompleteInput}
              onChange={(e) => handleAutocomplete(e.target.value)}
              placeholder="Search for technologies..."
              className="w-full bg-white/50 rounded-2xl border-white/50 border px-4 py-3 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-400/50 focus:border-transparent outline-none transition"
            />
            {formData.autocompleteFiltered.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur rounded-2xl border border-white/50 shadow-lg z-10">
                {formData.autocompleteFiltered.map(suggestion => (
                  <button
                    key={suggestion}
                    onClick={() => selectAutocomplete(suggestion)}
                    className="w-full text-left px-4 py-2.5 hover:bg-blue-50 first:rounded-t-2xl last:rounded-b-2xl transition text-slate-900"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Stepper */}
        <div className="backdrop-blur-2xl rounded-3xl border-white/60 shadow-xl p-8 space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Stepper
          </h3>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => handleInputChange('stepper', Math.max(0, formData.stepper - 1))}
              className="p-3 bg-gradient-to-r from-indigo-400 to-indigo-500 text-white rounded-2xl hover:from-indigo-500 hover:to-indigo-600 transition transform hover:scale-110 active:scale-95"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="text-4xl font-bold text-slate-900 min-w-24 text-center">
              {formData.stepper}
            </div>
            <button
              onClick={() => handleInputChange('stepper', formData.stepper + 1)}
              className="p-3 bg-gradient-to-r from-indigo-400 to-indigo-500 text-white rounded-2xl hover:from-indigo-500 hover:to-indigo-600 transition transform hover:scale-110 active:scale-95"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={formData.stepper}
            onChange={(e) => handleInputChange('stepper', parseInt(e.target.value))}
            className="w-full h-3 bg-white/50 rounded-full appearance-none cursor-pointer accent-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button className="w-full backdrop-blur-2xl rounded-3xl border-white/60 shadow-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-4 transition transform hover:scale-105 active:scale-95">
          Submit Advanced Form
        </button>
      </div>
    </div>
  );
}
