import React, { useState } from 'react';
import { ChevronDown, Search, Bell, User, Settings, LogOut, Globe, Lock } from 'lucide-react';

export default function UIDropdowns() {
  const [dropdowns, setDropdowns] = useState({
    basic: false,
    icons: false,
    multiLevel1: false,
    multiLevel2: false,
    separators: false,
    search: false,
    searchText: '',
    alignLeft: false,
    alignCenter: false,
    alignRight: false,
    forms: false,
    buttonGroup: false,
  });

  const toggleDropdown = (name) => {
    setDropdowns(prev => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleSearchChange = (e) => {
    setDropdowns(prev => ({
      ...prev,
      searchText: e.target.value,
    }));
  };

  const menuItems = [
    { label: 'Profile', action: 'profile' },
    { label: 'Settings', action: 'settings' },
    { label: 'Logout', action: 'logout' },
  ];

  const filteredItems = menuItems.filter(item =>
    item.label.toLowerCase().includes(dropdowns.searchText.toLowerCase())
  );

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
          <span className="text-sm text-blue-600 font-medium">Dropdowns</span>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Dropdown Menus
        </h1>
        <p className="text-gray-600">Beautiful dropdown components with various styles</p>
      </div>

      {/* Basic Dropdown */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Basic Dropdown Menu</h2>
        <p className="text-gray-600 mb-6">Simple dropdown with standard menu items</p>
        <div className="relative inline-block">
          <button
            onClick={() => toggleDropdown('basic')}
            className="backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-blue-300/50 rounded-2xl border border-white/50 px-6 py-3 flex items-center gap-2 transition-all hover:scale-105 hover:shadow-2xl shadow-blue-200/40 font-medium text-blue-700"
          >
            Actions
            <ChevronDown size={18} />
          </button>
          {dropdowns.basic && (
            <div className="absolute top-full mt-2 w-48 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-blue-200/40 z-10">
              <button className="w-full text-left px-4 py-3 hover:bg-blue-400/20 transition-all first:rounded-t-2xl text-gray-700">
                Edit
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-blue-400/20 transition-all text-gray-700">
                Duplicate
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-blue-400/20 transition-all last:rounded-b-2xl text-gray-700">
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Dropdown with Icons */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Dropdown with Icons</h2>
        <p className="text-gray-600 mb-6">Menu items with icons</p>
        <div className="relative inline-block">
          <button
            onClick={() => toggleDropdown('icons')}
            className="backdrop-blur-xl bg-gradient-to-br from-purple-400/50 to-purple-300/50 rounded-2xl border border-white/50 px-6 py-3 flex items-center gap-2 transition-all hover:scale-105 hover:shadow-2xl shadow-purple-200/40 font-medium text-purple-700"
          >
            Menu
            <ChevronDown size={18} />
          </button>
          {dropdowns.icons && (
            <div className="absolute top-full mt-2 w-56 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-purple-200/40 z-10">
              <button className="w-full text-left px-4 py-3 hover:bg-purple-400/20 transition-all first:rounded-t-2xl text-gray-700 flex items-center gap-3">
                <User size={18} className="text-purple-600" />
                Profile
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-purple-400/20 transition-all text-gray-700 flex items-center gap-3">
                <Settings size={18} className="text-purple-600" />
                Settings
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-purple-400/20 transition-all text-gray-700 flex items-center gap-3">
                <Bell size={18} className="text-purple-600" />
                Notifications
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-purple-400/20 transition-all last:rounded-b-2xl text-gray-700 flex items-center gap-3">
                <LogOut size={18} className="text-red-600" />
                <span className="text-red-600">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Multi-level Dropdown */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Multi-Level Dropdowns</h2>
        <p className="text-gray-600 mb-6">Nested dropdown menus</p>
        <div className="relative inline-block">
          <button
            onClick={() => toggleDropdown('multiLevel1')}
            className="backdrop-blur-xl bg-gradient-to-br from-green-400/50 to-green-300/50 rounded-2xl border border-white/50 px-6 py-3 flex items-center gap-2 transition-all hover:scale-105 hover:shadow-2xl shadow-green-200/40 font-medium text-green-700"
          >
            Submenu
            <ChevronDown size={18} />
          </button>
          {dropdowns.multiLevel1 && (
            <div className="absolute top-full mt-2 w-48 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-green-200/40 z-10">
              <button className="w-full text-left px-4 py-3 hover:bg-green-400/20 transition-all first:rounded-t-2xl text-gray-700 flex items-center justify-between">
                <span>Category</span>
                <ChevronDown size={16} />
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-green-400/20 transition-all text-gray-700">
                Option 1
              </button>
              <button
                onClick={() => toggleDropdown('multiLevel2')}
                className="w-full text-left px-4 py-3 hover:bg-green-400/20 transition-all text-gray-700 flex items-center justify-between"
              >
                <span>More Options</span>
                <ChevronDown size={16} />
              </button>
              {dropdowns.multiLevel2 && (
                <div className="pl-4 border-t border-gray-200">
                  <button className="w-full text-left px-4 py-2 hover:bg-green-400/20 transition-all text-gray-700">
                    Nested 1
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-green-400/20 transition-all text-gray-700">
                    Nested 2
                  </button>
                </div>
              )}
              <button className="w-full text-left px-4 py-3 hover:bg-green-400/20 transition-all last:rounded-b-2xl text-gray-700">
                Option 3
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Dropdown with Separators */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Dropdown with Separators</h2>
        <p className="text-gray-600 mb-6">Menu items organized with dividers</p>
        <div className="relative inline-block">
          <button
            onClick={() => toggleDropdown('separators')}
            className="backdrop-blur-xl bg-gradient-to-br from-indigo-400/50 to-indigo-300/50 rounded-2xl border border-white/50 px-6 py-3 flex items-center gap-2 transition-all hover:scale-105 hover:shadow-2xl shadow-indigo-200/40 font-medium text-indigo-700"
          >
            Menu
            <ChevronDown size={18} />
          </button>
          {dropdowns.separators && (
            <div className="absolute top-full mt-2 w-48 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-indigo-200/40 z-10">
              <button className="w-full text-left px-4 py-3 hover:bg-indigo-400/20 transition-all first:rounded-t-2xl text-gray-700">
                View
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-indigo-400/20 transition-all text-gray-700">
                Edit
              </button>
              <div className="border-t border-gray-200" />
              <button className="w-full text-left px-4 py-3 hover:bg-indigo-400/20 transition-all text-gray-700">
                Export
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-indigo-400/20 transition-all text-gray-700">
                Print
              </button>
              <div className="border-t border-gray-200" />
              <button className="w-full text-left px-4 py-3 hover:bg-indigo-400/20 transition-all last:rounded-b-2xl text-red-600">
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Dropdown with Search */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Dropdown with Search</h2>
        <p className="text-gray-600 mb-6">Searchable menu items</p>
        <div className="relative inline-block w-full md:w-64">
          <button
            onClick={() => toggleDropdown('search')}
            className="w-full backdrop-blur-xl bg-gradient-to-br from-pink-400/50 to-pink-300/50 rounded-2xl border border-white/50 px-6 py-3 flex items-center gap-2 transition-all hover:scale-105 hover:shadow-2xl shadow-pink-200/40 font-medium text-pink-700"
          >
            <Search size={18} />
            Search Menu
            <ChevronDown size={18} />
          </button>
          {dropdowns.search && (
            <div className="absolute top-full mt-2 w-full backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-pink-200/40 z-10">
              <input
                type="text"
                placeholder="Search items..."
                value={dropdowns.searchText}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 backdrop-blur-xl bg-white/50 rounded-t-2xl border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-700"
              />
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => (
                  <button
                    key={idx}
                    className={`w-full text-left px-4 py-3 hover:bg-pink-400/20 transition-all text-gray-700 ${
                      idx === filteredItems.length - 1 ? 'last:rounded-b-2xl' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                ))
              ) : (
                <div className="px-4 py-3 text-gray-500 text-center">No results found</div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Dropdown Alignment */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Left Aligned */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Left Aligned</h2>
          <div className="relative inline-block">
            <button
              onClick={() => toggleDropdown('alignLeft')}
              className="backdrop-blur-xl bg-gradient-to-br from-cyan-400/50 to-cyan-300/50 rounded-2xl border border-white/50 px-4 py-2 flex items-center gap-2 transition-all hover:scale-105 text-cyan-700 font-medium"
            >
              Options
              <ChevronDown size={16} />
            </button>
            {dropdowns.alignLeft && (
              <div className="absolute left-0 top-full mt-2 w-40 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-cyan-200/40">
                <button className="w-full text-left px-4 py-2 hover:bg-cyan-400/20 transition-all first:rounded-t-2xl text-gray-700 text-sm">
                  Option 1
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-cyan-400/20 transition-all text-gray-700 text-sm">
                  Option 2
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-cyan-400/20 transition-all last:rounded-b-2xl text-gray-700 text-sm">
                  Option 3
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Center Aligned */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 flex flex-col items-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Center Aligned</h2>
          <div className="relative inline-block">
            <button
              onClick={() => toggleDropdown('alignCenter')}
              className="backdrop-blur-xl bg-gradient-to-br from-yellow-400/50 to-yellow-300/50 rounded-2xl border border-white/50 px-4 py-2 flex items-center gap-2 transition-all hover:scale-105 text-yellow-700 font-medium"
            >
              Options
              <ChevronDown size={16} />
            </button>
            {dropdowns.alignCenter && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-40 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-yellow-200/40">
                <button className="w-full text-left px-4 py-2 hover:bg-yellow-400/20 transition-all first:rounded-t-2xl text-gray-700 text-sm">
                  Option 1
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-yellow-400/20 transition-all text-gray-700 text-sm">
                  Option 2
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-yellow-400/20 transition-all last:rounded-b-2xl text-gray-700 text-sm">
                  Option 3
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Aligned */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 flex flex-col items-end">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Right Aligned</h2>
          <div className="relative inline-block">
            <button
              onClick={() => toggleDropdown('alignRight')}
              className="backdrop-blur-xl bg-gradient-to-br from-orange-400/50 to-orange-300/50 rounded-2xl border border-white/50 px-4 py-2 flex items-center gap-2 transition-all hover:scale-105 text-orange-700 font-medium"
            >
              Options
              <ChevronDown size={16} />
            </button>
            {dropdowns.alignRight && (
              <div className="absolute right-0 top-full mt-2 w-40 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-orange-200/40">
                <button className="w-full text-left px-4 py-2 hover:bg-orange-400/20 transition-all first:rounded-t-2xl text-gray-700 text-sm">
                  Option 1
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-orange-400/20 transition-all text-gray-700 text-sm">
                  Option 2
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-orange-400/20 transition-all last:rounded-b-2xl text-gray-700 text-sm">
                  Option 3
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dropdowns in Forms */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Dropdowns in Forms</h2>
        <p className="text-gray-600 mb-6">Dropdown integration in form fields</p>
        <div className="relative inline-block w-full md:w-64">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Option</label>
          <button
            onClick={() => toggleDropdown('forms')}
            className="w-full backdrop-blur-xl bg-gradient-to-br from-teal-400/50 to-teal-300/50 rounded-2xl border border-white/50 px-4 py-3 flex items-center justify-between transition-all hover:scale-105 shadow-teal-200/40 font-medium text-teal-700 text-left"
          >
            <span>Choose an option</span>
            <ChevronDown size={18} />
          </button>
          {dropdowns.forms && (
            <div className="absolute top-full mt-2 w-full backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-teal-200/40 z-10">
              <button className="w-full text-left px-4 py-3 hover:bg-teal-400/20 transition-all first:rounded-t-2xl text-gray-700">
                Option A
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-teal-400/20 transition-all text-gray-700">
                Option B
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-teal-400/20 transition-all text-gray-700">
                Option C
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-teal-400/20 transition-all last:rounded-b-2xl text-gray-700">
                Option D
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Button Dropdown Groups */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Button Dropdown Groups</h2>
        <p className="text-gray-600 mb-6">Dropdown buttons grouped together</p>
        <div className="flex gap-2">
          <button className="backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-blue-300/50 rounded-l-2xl border border-white/50 px-6 py-3 transition-all hover:scale-105 shadow-blue-200/40 font-medium text-blue-700">
            Action
          </button>
          <div className="relative inline-block">
            <button
              onClick={() => toggleDropdown('buttonGroup')}
              className="backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-blue-300/50 rounded-r-2xl border border-white/50 px-4 py-3 transition-all hover:scale-105 shadow-blue-200/40 font-medium text-blue-700"
            >
              <ChevronDown size={18} />
            </button>
            {dropdowns.buttonGroup && (
              <div className="absolute right-0 top-full mt-2 w-44 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-blue-200/40 z-10">
                <button className="w-full text-left px-4 py-3 hover:bg-blue-400/20 transition-all first:rounded-t-2xl text-gray-700">
                  More Options
                </button>
                <button className="w-full text-left px-4 py-3 hover:bg-blue-400/20 transition-all text-gray-700">
                  Additional Items
                </button>
                <button className="w-full text-left px-4 py-3 hover:bg-blue-400/20 transition-all last:rounded-b-2xl text-gray-700">
                  Extra Actions
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
