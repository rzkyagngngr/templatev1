import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User, Bell, Settings, LogOut, ChevronDown } from 'lucide-react';

export default function UINavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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
          <span className="text-sm text-blue-600 font-medium">Navbar</span>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Navbar Components
        </h1>
        <p className="text-gray-600">Beautiful navigation bar showcase</p>
      </div>

      {/* Basic Navbar */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Basic Navbar</h2>
        <nav className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-blue-200/40 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Logo</span>
            <div className="flex gap-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </div>

      {/* Navbar with Logo/Brand */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Navbar with Logo & Brand</h2>
        <nav className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-purple-200/40 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400/50 to-purple-300/50 flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <span className="text-lg font-bold text-gray-800">Brand</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Services</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Products</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Blog</a>
            </div>
            <button className="backdrop-blur-xl bg-gradient-to-br from-purple-400/50 to-purple-300/50 rounded-2xl border border-white/50 px-6 py-2 transition-all hover:scale-105 shadow-purple-200/40 text-purple-700 font-medium">
              Sign In
            </button>
          </div>
        </nav>
      </div>

      {/* Navbar with Search */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Navbar with Search</h2>
        <nav className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-green-200/40 p-4">
          <div className="flex items-center justify-between gap-4">
            <span className="text-lg font-bold text-gray-800">Store</span>
            <div className="flex-1 max-w-xs">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full backdrop-blur-xl bg-white/50 rounded-xl border border-white/60 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            <div className="flex gap-4">
              <button className="p-2 hover:bg-white/20 rounded-lg transition-all">
                <Bell className="text-gray-600" size={20} />
              </button>
              <button className="p-2 hover:bg-white/20 rounded-lg transition-all">
                <ShoppingCart className="text-gray-600" size={20} />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Navbar with Dropdown Menus */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Navbar with Dropdowns</h2>
        <nav className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-indigo-200/40 p-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-800">Site</span>
            <div className="flex gap-6">
              <div className="relative group">
                <button className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                  Products <ChevronDown size={16} />
                </button>
                <div className="absolute left-0 top-full mt-0 w-48 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-indigo-200/40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                  <button className="w-full text-left px-4 py-3 hover:bg-indigo-400/20 transition-all first:rounded-t-2xl text-gray-700">
                    Electronics
                  </button>
                  <button className="w-full text-left px-4 py-3 hover:bg-indigo-400/20 transition-all text-gray-700">
                    Clothing
                  </button>
                  <button className="w-full text-left px-4 py-3 hover:bg-indigo-400/20 transition-all last:rounded-b-2xl text-gray-700">
                    Books
                  </button>
                </div>
              </div>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </div>

      {/* Responsive Navbar */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Responsive Navbar (Mobile Collapse)</h2>
        <nav className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-pink-200/40 p-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-800">App</span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-white/20 rounded-lg transition-all"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 right-0 md:top-auto md:left-auto md:right-auto flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-0 backdrop-blur-2xl md:backdrop-blur-none bg-gradient-to-br md:bg-transparent from-white/90 md:from-transparent to-white/50 md:to-transparent rounded-2xl md:rounded-none border md:border-0 border-white/60 md:border-white/0 shadow-xl md:shadow-none mt-2 md:mt-0`}>
              <a href="#" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">Features</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">Pricing</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </div>

      {/* Navbar with Buttons */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Navbar with Buttons</h2>
        <nav className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-yellow-200/40 p-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-800">Company</span>
            <div className="flex gap-6 items-center">
              <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">Services</a>
              <button className="backdrop-blur-xl bg-gradient-to-br from-yellow-400/50 to-yellow-300/50 rounded-xl border border-white/50 px-4 py-2 transition-all hover:scale-105 shadow-yellow-200/40 text-yellow-700 font-medium text-sm">
                Sign Up
              </button>
              <button className="backdrop-blur-xl bg-white/30 rounded-xl border border-white/50 px-4 py-2 transition-all hover:bg-white/40 text-gray-700 font-medium text-sm">
                Sign In
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Color Variant Navbars */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Navbar Color Variants</h2>
        <div className="space-y-4">
          {/* Blue */}
          <nav className="backdrop-blur-2xl bg-gradient-to-r from-blue-400/30 to-blue-300/20 rounded-2xl border border-blue-400/40 shadow-lg shadow-blue-200/40 p-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-blue-700">Blue Navbar</span>
              <div className="flex gap-4">
                <a href="#" className="text-blue-700 hover:text-blue-900 font-medium transition-colors">Home</a>
                <a href="#" className="text-blue-700 hover:text-blue-900 font-medium transition-colors">About</a>
              </div>
            </div>
          </nav>

          {/* Green */}
          <nav className="backdrop-blur-2xl bg-gradient-to-r from-green-400/30 to-green-300/20 rounded-2xl border border-green-400/40 shadow-lg shadow-green-200/40 p-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-green-700">Green Navbar</span>
              <div className="flex gap-4">
                <a href="#" className="text-green-700 hover:text-green-900 font-medium transition-colors">Home</a>
                <a href="#" className="text-green-700 hover:text-green-900 font-medium transition-colors">About</a>
              </div>
            </div>
          </nav>

          {/* Purple */}
          <nav className="backdrop-blur-2xl bg-gradient-to-r from-purple-400/30 to-purple-300/20 rounded-2xl border border-purple-400/40 shadow-lg shadow-purple-200/40 p-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-purple-700">Purple Navbar</span>
              <div className="flex gap-4">
                <a href="#" className="text-purple-700 hover:text-purple-900 font-medium transition-colors">Home</a>
                <a href="#" className="text-purple-700 hover:text-purple-900 font-medium transition-colors">About</a>
              </div>
            </div>
          </nav>

          {/* Red */}
          <nav className="backdrop-blur-2xl bg-gradient-to-r from-red-400/30 to-red-300/20 rounded-2xl border border-red-400/40 shadow-lg shadow-red-200/40 p-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-red-700">Red Navbar</span>
              <div className="flex gap-4">
                <a href="#" className="text-red-700 hover:text-red-900 font-medium transition-colors">Home</a>
                <a href="#" className="text-red-700 hover:text-red-900 font-medium transition-colors">About</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
