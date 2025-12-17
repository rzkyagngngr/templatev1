import React, { useState } from 'react';
import { Send, Power, CheckCircle, AlertCircle, ChevronDown, Download, Upload, Trash2, Edit, Share2, Heart, Settings, Search, Plus, Minus, Play, Pause, Volume2, Bell, Mail, Phone, Zap, ArrowRight } from 'lucide-react';

export default function UIButtons() {
  const [isLoading, setIsLoading] = useState(false);

  const solidColors = [
    { name: 'Primary', className: 'bg-blue-600 hover:bg-blue-700 =' },
    { name: 'Secondary', className: 'bg-gray-600 hover:bg-gray-700 =' },
    { name: 'Success', className: 'bg-green-600 hover:bg-green-700 =' },
    { name: 'Warning', className: 'bg-yellow-600 hover:bg-yellow-700 text-black' },
    { name: 'Info', className: 'bg-cyan-600 hover:bg-cyan-700 =' },
    { name: 'Danger', className: 'bg-red-600 hover:bg-red-700 =' },
    { name: 'Dark', className: 'bg-gray-900 hover:bg-black =' },
    { name: 'Light', className: 'bg-gray-200 hover:bg-gray-300 text-gray-900' },
    { name: 'Success Alt', className: 'bg-emerald-600 hover:bg-emerald-700 =' },
    { name: 'Purple', className: 'bg-purple-600 hover:bg-purple-700 =' },
  ];

  const outlineColors = [
    { name: 'Primary', className: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50' },
    { name: 'Secondary', className: 'border-2 border-gray-600 text-gray-600 hover:bg-gray-50' },
    { name: 'Success', className: 'border-2 border-green-600 text-green-600 hover:bg-green-50' },
    { name: 'Info', className: 'border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50' },
    { name: 'Warning', className: 'border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-50' },
    { name: 'Danger', className: 'border-2 border-red-600 text-red-600 hover:bg-red-50' },
    { name: 'Dark', className: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-100' },
    { name: 'Purple', className: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50' },
  ];

  const ghostColors = [
    { name: 'Primary', className: 'text-blue-600 hover:bg-blue-100 hover:text-blue-700' },
    { name: 'Success', className: 'text-green-600 hover:bg-green-100 hover:text-green-700' },
    { name: 'Danger', className: 'text-red-600 hover:bg-red-100 hover:text-red-700' },
    { name: 'Warning', className: 'text-yellow-600 hover:bg-yellow-100 hover:text-yellow-700' },
  ];

  const sizes = [
    { name: 'Small', className: 'px-3 py-1.5 text-sm' },
    { name: 'Medium', className: 'px-4 py-2 text-base' },
    { name: 'Large', className: 'px-6 py-3 text-lg' },
    { name: 'Extra Large', className: 'px-8 py-4 text-lg' },
  ];

  const buttonGroups = [
    { label: 'Left', position: 'rounded-l-lg rounded-r-none' },
    { label: 'Middle', position: 'rounded-none' },
    { label: 'Right', position: 'rounded-r-lg rounded-l-none' },
  ];

  const iconButtons = [
    { icon: Download, label: 'Download', color: 'bg-blue-600' },
    { icon: Upload, label: 'Upload', color: 'bg-green-600' },
    { icon: Trash2, label: 'Delete', color: 'bg-red-600' },
    { icon: Edit, label: 'Edit', color: 'bg-yellow-600' },
    { icon: Share2, label: 'Share', color: 'bg-purple-600' },
    { icon: Heart, label: 'Like', color: 'bg-pink-600' },
    { icon: Settings, label: 'Settings', color: 'bg-gray-600' },
    { icon: Search, label: 'Search', color: 'bg-cyan-600' },
    { icon: Plus, label: 'Add', color: 'bg-emerald-600' },
    { icon: Minus, label: 'Remove', color: 'bg-orange-600' },
    { icon: Play, label: 'Play', color: 'bg-indigo-600' },
    { icon: Bell, label: 'Notify', color: 'bg-rose-600' },
  ];

  return (
    <div className="w-full space-y-8 p-6">
      {/* Header */}
      <div>
        <nav className="flex gap-2 text-sm mb-4">
          <span className="text-gray-500">Glacia</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-500">UI Kit</span>
          <span className="text-gray-400">/</span>
          <span className="text-black font-medium">Buttons</span>
        </nav>
        <h1 className="text-4xl font-bold text-black">Buttons</h1>
        <p className="text-gray-600 mt-2">Bootstrap includes multiple button styles for different semantic purposes</p>
      </div>

      {/* Solid Buttons */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg hover:bg-white/50 transition-all">
        <h5 className="text-lg font-bold text-black mb-2">Default Buttons Examples</h5>
        <p className="text-gray-600 text-sm mb-6">Bootstrap includes six predefined button styles, each serving its own semantic purpose.</p>
        <div className="flex flex-wrap gap-3">
          {solidColors.map((color, idx) => (
            <button
              key={idx}
              className={`${color.className} px-6 py-2.5 rounded-lg font-medium transition-all transform hover:scale-105 hover:shadow-lg`}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>

      {/* Outline Buttons */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg hover:bg-white/50 transition-all">
        <h5 className="text-lg font-bold text-black mb-2">Outline Buttons</h5>
        <p className="text-gray-600 text-sm mb-6">Bootstrap includes six predefined button styles, each serving its own semantic purpose.</p>
        <div className="flex flex-wrap gap-3">
          {outlineColors.map((color, idx) => (
            <button
              key={idx}
              className={`${color.className} px-6 py-2.5 rounded-lg font-medium transition-all hover:shadow-md`}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>

      {/* Button Sizes */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg hover:bg-white/50 transition-all">
        <h5 className="text-lg font-bold text-black mb-2">Button Sizes</h5>
        <p className="text-gray-600 text-sm mb-6">Use different size options for your buttons.</p>
        <div className="flex flex-wrap items-center gap-3">
          {sizes.map((size, idx) => (
            <button
              key={idx}
              className={`${size.className} bg-blue-600 hover:bg-blue-700 text-slate-900 rounded-lg font-medium transition-all transform hover:scale-105 hover:shadow-lg`}
            >
              {size.name}
            </button>
          ))}
        </div>
      </div>

      {/* Buttons with Icons */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg">
        <h5 className="text-lg font-bold text-gray-800 mb-6">Buttons with Icons</h5>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-slate-900 rounded-lg font-medium flex items-center gap-2 transition-all hover:shadow-lg">
            <Download className="w-4 h-4" /> Download
          </button>
          <button className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-slate-900 rounded-lg font-medium flex items-center gap-2 transition-all hover:shadow-lg">
            Next <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-slate-900 rounded-lg font-medium flex items-center gap-2 transition-all hover:shadow-lg">
            <Heart className="w-4 h-4" /> Like
          </button>
          <button className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-slate-900 rounded-lg font-medium flex items-center gap-2 transition-all hover:shadow-lg">
            <Share2 className="w-4 h-4" /> Share
          </button>
          <button className="px-6 py-2.5 bg-yellow-600 hover:bg-yellow-700 text-slate-900 rounded-lg font-medium flex items-center gap-2 transition-all hover:shadow-lg">
            <Zap className="w-4 h-4" /> Power
          </button>
        </div>
      </div>

      {/* Button States */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg">
        <h5 className="text-lg font-bold text-gray-800 mb-6">Button States</h5>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-slate-900 rounded-lg font-medium transition-all hover:shadow-lg">
            Normal
          </button>
          <button className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-slate-900 rounded-lg font-medium transition-all hover:shadow-lg active:scale-95">
            Active
          </button>
          <button disabled className="px-6 py-2.5 bg-gray-400 text-gray-700 rounded-lg font-medium cursor-not-allowed opacity-60">
            Disabled
          </button>
          <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-slate-900 rounded-lg font-medium transition-all hover:shadow-lg">
            Gradient
          </button>
        </div>
      </div>

      {/* Rounded Buttons */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg">
        <h5 className="text-lg font-bold text-gray-800 mb-6">Rounded Buttons</h5>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-slate-900 rounded font-medium transition-all hover:shadow-lg">
            Square
          </button>
          <button className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-slate-900 rounded-lg font-medium transition-all hover:shadow-lg">
            Rounded
          </button>
          <button className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-slate-900 rounded-full font-medium transition-all hover:shadow-lg">
            Pill
          </button>
          <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-slate-900 rounded-full font-bold transition-all hover:shadow-lg flex items-center justify-center">
            A
          </button>
        </div>
      </div>

      {/* Button Groups */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg">
        <h5 className="text-lg font-bold text-gray-800 mb-6">Button Groups</h5>
        <div className="space-y-4">
          <div className="flex rounded-lg overflow-hidden border border-gray-300">
            <button className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-slate-900 flex-1 font-medium transition-all">
              Left
            </button>
            <button className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-slate-900 border-l border-blue-700 flex-1 font-medium transition-all">
              Center
            </button>
            <button className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-slate-900 border-l border-blue-700 flex-1 font-medium transition-all">
              Right
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
