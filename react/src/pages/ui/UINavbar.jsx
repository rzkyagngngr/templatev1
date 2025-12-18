import React, { useState } from 'react';
import { Menu, X, Search, Bell, User, ChevronDown } from 'lucide-react';

export default function UINavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="mb-8 flex items-center gap-2 text-sm">
        <span className="text-gray-600">Glacia</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600">UI</span>
        <span className="text-gray-400">/</span>
        <span className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Navbar</span>
      </div>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-3">Navbar Components</h1>
        <p className="text-gray-600 text-lg mb-12">Navigation bars and header layouts</p>

        {/* Basic Navbar */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 overflow-hidden mb-8">
          <nav className="flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-gradient-to-r from-white/50 to-white/30">
            <div className="text-2xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Glacia
            </div>
            <div className="hidden md:flex gap-8">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <a key={item} href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  {item}
                </a>
              ))}
            </div>
            <button className="px-4 py-2 backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-cyan-400/50 border border-white/50 rounded-2xl text-blue-900 font-semibold hover:shadow-lg transition-all">
              Sign In
            </button>
          </nav>
        </div>

        {/* Navbar with Search & Icons */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 overflow-hidden mb-8">
          <nav className="flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-gradient-to-r from-white/50 to-white/30 flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <Menu size={24} className="text-gray-600 cursor-pointer" />
              <div className="text-xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Dashboard
              </div>
            </div>

            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 backdrop-blur-xl bg-white/30 border border-white/50 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-white/20 rounded-xl transition-all">
                <Bell className="text-gray-600" size={20} />
              </button>
              <button className="p-2 hover:bg-white/20 rounded-xl transition-all">
                <User className="text-gray-600" size={20} />
              </button>
            </div>
          </nav>
        </div>

        {/* Responsive Navbar */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 overflow-hidden">
          <nav className="flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-gradient-to-r from-white/50 to-white/30">
            <div className="text-xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Glacia Pro
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-white/20 rounded-xl transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={`${isOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-16 md:top-auto left-0 md:left-auto right-0 md:right-auto flex-col md:flex-row gap-4 md:gap-8 w-full md:w-auto bg-white/30 md:bg-transparent p-4 md:p-0 border-t md:border-t-0 border-white/30`}>
              {['Product', 'Pricing', 'Docs', 'Support'].map((item) => (
                <a key={item} href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  {item}
                </a>
              ))}
            </div>

            <button className="hidden md:block px-4 py-2 backdrop-blur-xl bg-gradient-to-br from-purple-400/50 to-pink-400/50 border border-white/50 rounded-2xl text-purple-900 font-semibold hover:shadow-lg transition-all">
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
