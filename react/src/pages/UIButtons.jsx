import React, { useState } from 'react';
import { ChevronRight, Home, Plus, Download, Heart, Share2, Settings, Bell, MessageSquare, Trash2, Edit, Eye, Copy, Send } from 'lucide-react';

const UIButtons = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const colors = ['Primary', 'Secondary', 'Success', 'Warning', 'Danger', 'Info', 'Dark', 'Light', 'Purple', 'Emerald'];
  const colorMap = {
    Primary: 'from-blue-500 to-blue-600 shadow-blue-200/40 hover:shadow-blue-300/50',
    Secondary: 'from-slate-500 to-slate-600 shadow-slate-200/40 hover:shadow-slate-300/50',
    Success: 'from-green-500 to-green-600 shadow-green-200/40 hover:shadow-green-300/50',
    Warning: 'from-yellow-500 to-yellow-600 shadow-yellow-200/40 hover:shadow-yellow-300/50',
    Danger: 'from-red-500 to-red-600 shadow-red-200/40 hover:shadow-red-300/50',
    Info: 'from-cyan-500 to-cyan-600 shadow-cyan-200/40 hover:shadow-cyan-300/50',
    Dark: 'from-gray-700 to-gray-800 shadow-gray-300/40 hover:shadow-gray-400/50',
    Light: 'from-gray-100 to-gray-200 text-gray-800 shadow-gray-200/40 hover:shadow-gray-300/50',
    Purple: 'from-purple-500 to-purple-600 shadow-purple-200/40 hover:shadow-purple-300/50',
    Emerald: 'from-emerald-500 to-emerald-600 shadow-emerald-200/40 hover:shadow-emerald-300/50'
  };

  const outlineColors = [
    { name: 'Blue', border: 'border-blue-400', text: 'text-blue-600', hover: 'hover:bg-blue-50' },
    { name: 'Purple', border: 'border-purple-400', text: 'text-purple-600', hover: 'hover:bg-purple-50' },
    { name: 'Green', border: 'border-green-400', text: 'text-green-600', hover: 'hover:bg-green-50' },
    { name: 'Red', border: 'border-red-400', text: 'text-red-600', hover: 'hover:bg-red-50' },
    { name: 'Yellow', border: 'border-yellow-400', text: 'text-yellow-600', hover: 'hover:bg-yellow-50' },
    { name: 'Pink', border: 'border-pink-400', text: 'text-pink-600', hover: 'hover:bg-pink-50' },
    { name: 'Indigo', border: 'border-indigo-400', text: 'text-indigo-600', hover: 'hover:bg-indigo-50' },
    { name: 'Cyan', border: 'border-cyan-400', text: 'text-cyan-600', hover: 'hover:bg-cyan-50' }
  ];

  const icons = [
    { Icon: Home, label: 'Home' },
    { Icon: Plus, label: 'Add' },
    { Icon: Download, label: 'Download' },
    { Icon: Heart, label: 'Favorite' },
    { Icon: Share2, label: 'Share' },
    { Icon: Settings, label: 'Settings' },
    { Icon: Bell, label: 'Notifications' },
    { Icon: MessageSquare, label: 'Message' },
    { Icon: Trash2, label: 'Delete' },
    { Icon: Edit, label: 'Edit' },
    { Icon: Eye, label: 'View' },
    { Icon: Copy, label: 'Copy' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8">
        <a href="/" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
          <Home size={18} /> Dashboard
        </a>
        <ChevronRight size={18} className="text-gray-400" />
        <span className="text-gray-900 font-medium">UI Components</span>
        <ChevronRight size={18} className="text-gray-400" />
        <span className="text-blue-600 font-medium">Buttons</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Button Components</h1>
        <p className="text-gray-600">Comprehensive showcase of all button variations with states and interactions</p>
      </div>

      {/* Solid Buttons */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Solid Buttons (10 Colors)</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {colors.map((color) => (
            <button
              key={color}
              className={`px-6 py-3 text-white font-semibold backdrop-blur-xl rounded-2xl border border-white/50 bg-gradient-to-br ${colorMap[color]} hover:scale-105 hover:shadow-2xl transition-all duration-300`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Outline Buttons */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-purple-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Outline Buttons (8 Variants)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {outlineColors.map((color) => (
            <button
              key={color.name}
              className={`px-6 py-3 font-semibold backdrop-blur-xl rounded-2xl border-2 ${color.border} ${color.text} ${color.hover} bg-white/50 hover:scale-105 hover:shadow-2xl transition-all duration-300`}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>

      {/* Button Sizes */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-green-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Button Sizes</h2>
        <div className="flex flex-wrap items-end gap-4">
          <button className="px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl rounded-2xl border border-white/50 bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-200/40 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            Small
          </button>
          <button className="px-6 py-3 text-base font-semibold text-white backdrop-blur-xl rounded-2xl border border-white/50 bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-200/40 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            Medium
          </button>
          <button className="px-8 py-4 text-lg font-semibold text-white backdrop-blur-xl rounded-2xl border border-white/50 bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-200/40 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            Large
          </button>
          <button className="px-10 py-5 text-xl font-semibold text-white backdrop-blur-xl rounded-2xl border border-white/50 bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-200/40 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            Extra Large
          </button>
        </div>
      </div>

      {/* Button States */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-yellow-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Button States</h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 font-semibold text-white backdrop-blur-xl rounded-2xl border border-white/50 bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-200/40 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            Default
          </button>
          <button className="px-6 py-3 font-semibold text-white backdrop-blur-xl rounded-2xl border border-white/50 bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-200/40 scale-105 shadow-2xl">
            Active
          </button>
          <button disabled className="px-6 py-3 font-semibold text-white backdrop-blur-xl rounded-2xl border border-white/50 bg-gradient-to-br from-gray-400 to-gray-500 shadow-gray-200/40 opacity-50 cursor-not-allowed">
            Disabled
          </button>
          <button onClick={handleLoadingClick} className="px-6 py-3 font-semibold text-white backdrop-blur-xl rounded-2xl border border-white/50 bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-200/40 hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-2">
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Loading...
              </>
            ) : (
              'Click to Load'
            )}
          </button>
        </div>
      </div>

      {/* Icon Buttons */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-pink-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Icon Buttons (12 Icons)</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-3">
          {icons.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <button
                title={label}
                className="p-3 text-white backdrop-blur-xl rounded-2xl border border-white/50 bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-200/40 hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <Icon size={20} />
              </button>
              <span className="text-xs text-gray-600 text-center">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Button Groups */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-indigo-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Button Groups</h2>
        
        <div className="space-y-6">
          {/* Horizontal Group */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Horizontal Group</h3>
            <div className="flex gap-1 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-xl p-1">
              <button className="flex-1 px-4 py-2 font-semibold text-white bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl hover:scale-105 transition-all duration-300">
                Option 1
              </button>
              <button className="flex-1 px-4 py-2 font-semibold text-gray-700 hover:bg-white/50 rounded-xl transition-all duration-300">
                Option 2
              </button>
              <button className="flex-1 px-4 py-2 font-semibold text-gray-700 hover:bg-white/50 rounded-xl transition-all duration-300">
                Option 3
              </button>
            </div>
          </div>

          {/* Icon Group */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Icon Button Group</h3>
            <div className="flex gap-1 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-xl p-1">
              <button className="p-2 text-white bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl hover:scale-105 transition-all duration-300">
                <Heart size={20} />
              </button>
              <button className="p-2 text-white bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl hover:scale-105 transition-all duration-300">
                <Share2 size={20} />
              </button>
              <button className="p-2 text-white bg-gradient-to-br from-green-500 to-green-600 rounded-xl hover:scale-105 transition-all duration-300">
                <MessageSquare size={20} />
              </button>
              <button className="p-2 text-white bg-gradient-to-br from-red-500 to-red-600 rounded-xl hover:scale-105 transition-all duration-300">
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mixed Buttons */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-cyan-200/40 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Mixed Button Combinations</h2>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-3 font-semibold text-white backdrop-blur-xl rounded-2xl border border-white/50 bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-200/40 hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-2">
              <Download size={18} /> Download
            </button>
            <button className="px-6 py-3 font-semibold text-gray-700 backdrop-blur-xl rounded-2xl border-2 border-gray-300 bg-white/50 hover:bg-white/80 hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-2">
              <Edit size={18} /> Cancel
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="px-8 py-3 font-semibold text-white backdrop-blur-xl rounded-2xl border border-white/50 bg-gradient-to-br from-green-500 to-green-600 shadow-green-200/40 hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-2">
              <Send size={18} /> Send Message
            </button>
            <button className="px-8 py-3 font-semibold text-white backdrop-blur-xl rounded-2xl border border-white/50 bg-gradient-to-br from-red-500 to-red-600 shadow-red-200/40 hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-2">
              <Trash2 size={18} /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIButtons;
