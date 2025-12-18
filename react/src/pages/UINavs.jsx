import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Home, User, Settings, BarChart3, Mail, Lock, LogOut } from 'lucide-react';

export default function UINavs() {
  const [expandedNav, setExpandedNav] = useState(null);
  const [activeStep, setActiveStep] = useState(1);

  const toggleNav = (id) => {
    setExpandedNav(expandedNav === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400/50 to-blue-300/50 flex items-center justify-center">
            <span className="text-sm font-bold text-blue-600">UI</span>
          </div>
          <span className="text-sm font-medium text-gray-600">UI Elements</span>
          <span className="text-sm text-gray-400">/</span>
          <span className="text-sm text-blue-600 font-medium">Navs</span>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Navigation Components
        </h1>
        <p className="text-gray-600">Various navigation menu styles</p>
      </div>

      {/* Vertical Navigation Menu */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Vertical Navigation Menu</h2>
        <div className="backdrop-blur-xl bg-gradient-to-br from-white/50 to-white/30 rounded-2xl border border-white/40 p-0 w-64 max-w-full">
          <nav className="space-y-1 p-2">
            {[
              { icon: Home, label: 'Dashboard' },
              { icon: User, label: 'Profile' },
              { icon: BarChart3, label: 'Analytics' },
              { icon: Settings, label: 'Settings' },
              { icon: LogOut, label: 'Logout', color: 'text-red-600' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    idx === 0
                      ? 'backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-blue-300/50 text-blue-700 shadow-blue-200/40'
                      : 'text-gray-700 hover:bg-white/20'
                  }`}
                >
                  <Icon size={18} className={item.color} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Horizontal Navigation Menu */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Horizontal Navigation Menu</h2>
        <div className="backdrop-blur-xl bg-gradient-to-br from-white/50 to-white/30 rounded-2xl border border-white/40 p-0 overflow-x-auto">
          <nav className="flex whitespace-nowrap border-b border-gray-200">
            {['Dashboard', 'Projects', 'Team', 'Settings', 'Documentation'].map((item, idx) => (
              <button
                key={idx}
                className={`px-6 py-4 font-medium transition-all border-b-2 ${
                  idx === 0
                    ? 'border-blue-600 text-blue-600 backdrop-blur-xl bg-blue-400/5'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Navigation with Icons */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Navigation with Icons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Icon-only nav */}
          <div>
            <p className="text-gray-600 mb-4">Icon-only Navigation</p>
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/50 to-white/30 rounded-2xl border border-white/40 p-2 flex gap-2 flex-wrap">
              {[
                { icon: Home, label: 'Home' },
                { icon: Mail, label: 'Mail' },
                { icon: User, label: 'User' },
                { icon: Settings, label: 'Settings' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    title={item.label}
                    className={`p-3 rounded-lg transition-all ${
                      idx === 0
                        ? 'backdrop-blur-xl bg-gradient-to-br from-purple-400/50 to-purple-300/50 text-purple-700'
                        : 'text-gray-600 hover:bg-white/20'
                    }`}
                  >
                    <Icon size={20} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Icon + text nav */}
          <div>
            <p className="text-gray-600 mb-4">Icon + Text Navigation</p>
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/50 to-white/30 rounded-2xl border border-white/40 p-0">
              <nav className="space-y-1 p-2">
                {[
                  { icon: Home, label: 'Home' },
                  { icon: Mail, label: 'Messages' },
                  { icon: User, label: 'Profile' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={idx}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                        idx === 0
                          ? 'backdrop-blur-xl bg-gradient-to-br from-purple-400/50 to-purple-300/50 text-purple-700'
                          : 'text-gray-600 hover:bg-white/20'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Active Navigation Items */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Active Navigation Items</h2>
        <div className="backdrop-blur-xl bg-gradient-to-br from-white/50 to-white/30 rounded-2xl border border-white/40 p-0 w-64 max-w-full">
          <nav className="space-y-1 p-2">
            {['Overview', 'Analytics', 'Reports', 'Settings'].map((item, idx) => (
              <button
                key={idx}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium ${
                  idx === 1
                    ? 'backdrop-blur-xl bg-gradient-to-br from-green-400/50 to-green-300/50 text-green-700 shadow-green-200/40'
                    : 'text-gray-700 hover:bg-white/20'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Nested Navigation */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Nested Navigation</h2>
        <div className="backdrop-blur-xl bg-gradient-to-br from-white/50 to-white/30 rounded-2xl border border-white/40 p-0 w-72 max-w-full">
          <nav className="space-y-1 p-2">
            {[
              { id: 1, label: 'Products', hasChildren: true },
              { id: 2, label: 'Users', hasChildren: true },
              { id: 3, label: 'Reports', hasChildren: false },
            ].map(item => (
              <div key={item.id}>
                <button
                  onClick={() => item.hasChildren && toggleNav(item.id)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 hover:bg-white/20 transition-all font-medium"
                >
                  <span>{item.label}</span>
                  {item.hasChildren && (
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${expandedNav === item.id ? 'rotate-180' : ''}`}
                    />
                  )}
                </button>
                {item.hasChildren && expandedNav === item.id && (
                  <div className="pl-4 space-y-1">
                    {['Option 1', 'Option 2', 'Option 3'].map((opt, idx) => (
                      <button
                        key={idx}
                        className="w-full text-left px-4 py-2 rounded-lg text-gray-600 hover:bg-white/20 transition-all text-sm"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Breadcrumb Navigation</h2>
        <div className="space-y-4">
          {/* Simple breadcrumb */}
          <div className="flex items-center gap-2 text-sm">
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Home</a>
            <ChevronRight size={16} className="text-gray-400" />
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Products</a>
            <ChevronRight size={16} className="text-gray-400" />
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Electronics</a>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-gray-600">Laptop</span>
          </div>

          {/* Styled breadcrumb */}
          <div className="flex items-center gap-2 text-sm flex-wrap">
            {['Home', 'Dashboard', 'Settings', 'Profile'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <a
                  href="#"
                  className={`px-3 py-2 rounded-lg transition-all ${
                    idx === 3
                      ? 'backdrop-blur-xl bg-gradient-to-br from-indigo-400/50 to-indigo-300/50 text-indigo-700'
                      : 'text-blue-600 hover:bg-blue-400/10'
                  }`}
                >
                  {item}
                </a>
                {idx < 3 && <ChevronRight size={16} className="text-gray-400" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step Navigation */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Step Navigation</h2>
        <div className="flex items-center justify-between mb-8 max-w-2xl">
          {[1, 2, 3, 4, 5].map(step => (
            <div key={step} className="flex flex-col items-center">
              <button
                onClick={() => setActiveStep(step)}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                  step <= activeStep
                    ? 'backdrop-blur-xl bg-gradient-to-br from-yellow-400/50 to-yellow-300/50 text-yellow-700 shadow-yellow-200/40'
                    : 'backdrop-blur-xl bg-gradient-to-br from-gray-400/50 to-gray-300/50 text-gray-600'
                }`}
              >
                {step}
              </button>
              <p className="text-xs text-gray-600 mt-2">Step {step}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
            className="backdrop-blur-xl bg-gradient-to-br from-gray-400/50 to-gray-300/50 rounded-2xl border border-white/50 px-6 py-2 text-gray-700 font-medium hover:scale-105 transition-all"
          >
            Previous
          </button>
          <button
            onClick={() => setActiveStep(Math.min(5, activeStep + 1))}
            className="backdrop-blur-xl bg-gradient-to-br from-yellow-400/50 to-yellow-300/50 rounded-2xl border border-white/50 px-6 py-2 text-yellow-700 font-medium hover:scale-105 transition-all"
          >
            Next
          </button>
        </div>
      </div>

      {/* Tree Navigation */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Tree Navigation</h2>
        <div className="backdrop-blur-xl bg-gradient-to-br from-white/50 to-white/30 rounded-2xl border border-white/40 p-4 text-sm">
          <div className="space-y-1">
            <div>
              <button className="flex items-center gap-2 w-full px-2 py-2 hover:bg-white/20 rounded-lg transition-all text-gray-700 font-medium">
                <ChevronRight size={16} className={`${expandedNav === 'root' ? 'rotate-90' : ''} transition-transform`} />
                <span>Root Folder</span>
              </button>
              {expandedNav === 'root' && (
                <div className="ml-6 space-y-1 border-l border-gray-300 pl-2">
                  <div>
                    <button className="flex items-center gap-2 w-full px-2 py-1 hover:bg-white/20 rounded-lg transition-all text-gray-700">
                      <ChevronRight size={14} />
                      <span className="text-sm">Subfolder 1</span>
                    </button>
                  </div>
                  <div>
                    <button className="flex items-center gap-2 w-full px-2 py-1 hover:bg-white/20 rounded-lg transition-all text-gray-700">
                      <ChevronRight size={14} />
                      <span className="text-sm">Subfolder 2</span>
                    </button>
                  </div>
                  <button className="w-full text-left px-4 py-1 hover:bg-white/20 rounded-lg transition-all text-gray-700 text-sm">
                    File 1
                  </button>
                </div>
              )}
            </div>
          </div>
          <button
            onClick={() => toggleNav('root')}
            className="mt-4 backdrop-blur-xl bg-gradient-to-br from-cyan-400/50 to-cyan-300/50 rounded-xl border border-white/50 px-4 py-2 text-cyan-700 font-medium hover:scale-105 transition-all text-sm"
          >
            {expandedNav === 'root' ? 'Collapse' : 'Expand'} Tree
          </button>
        </div>
      </div>
    </div>
  );
}
