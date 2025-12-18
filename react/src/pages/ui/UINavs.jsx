import React, { useState } from 'react';
import { ChevronRight, Home, ShoppingCart, Settings, Users, FileText, BarChart3, Bell } from 'lucide-react';

export default function UINavs() {
  const [activeNav, setActiveNav] = useState(0);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const navItems = [
    { icon: Home, label: 'Dashboard', href: '#' },
    { icon: ShoppingCart, label: 'Products', href: '#', hasSubmenu: true },
    { icon: Users, label: 'Customers', href: '#' },
    { icon: FileText, label: 'Reports', href: '#', hasSubmenu: true },
    { icon: BarChart3, label: 'Analytics', href: '#' },
    { icon: Settings, label: 'Settings', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="mb-8 flex items-center gap-2 text-sm">
        <span className="text-gray-600">Glacia</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600">UI</span>
        <span className="text-gray-400">/</span>
        <span className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Navigation</span>
      </div>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-3">Navigation Components</h1>
        <p className="text-gray-600 text-lg mb-12">Vertical and horizontal navigation menus</p>

        {/* Vertical Navigation */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Vertical Navigation</h2>
          <div className="flex gap-8">
            {/* Sidebar */}
            <div className="w-64 space-y-2">
              {navItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx}>
                    <button
                      onClick={() => {
                        setActiveNav(idx);
                        if (item.hasSubmenu) setExpandedMenu(expandedMenu === idx ? null : idx);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold transition-all ${
                        activeNav === idx
                          ? 'backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-cyan-400/50 border border-white/50 text-blue-900 shadow-lg'
                          : 'text-gray-700 hover:bg-white/30'
                      }`}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                      {item.hasSubmenu && (
                        <ChevronRight
                          size={18}
                          className={`ml-auto transition-transform ${expandedMenu === idx ? 'rotate-90' : ''}`}
                        />
                      )}
                    </button>

                    {/* Submenu */}
                    {item.hasSubmenu && expandedMenu === idx && (
                      <div className="ml-4 mt-2 pl-4 border-l-2 border-blue-200 space-y-2">
                        {['Option 1', 'Option 2', 'Option 3'].map((option, subIdx) => (
                          <button
                            key={subIdx}
                            className="w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Content Area */}
            <div className="flex-1 backdrop-blur-xl bg-white/30 rounded-2xl border border-white/50 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{navItems[activeNav].label}</h3>
              <p className="text-gray-700">This is the content area for {navItems[activeNav].label}. Select a different navigation item to view its content.</p>
            </div>
          </div>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Breadcrumb Navigation</h2>
          <nav className="flex items-center gap-2 text-sm">
            {['Home', 'Products', 'Electronics', 'Laptops', 'MacBook Pro'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <a href="#" className={`px-2 py-1 rounded-lg transition-all ${
                  idx === 4
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600 hover:text-blue-600'
                }`}>
                  {item}
                </a>
                {idx < 4 && <ChevronRight size={16} className="text-gray-400" />}
              </div>
            ))}
          </nav>
        </div>

        {/* Horizontal Navigation */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Horizontal Navigation</h2>
          <div className="flex gap-2 border-b border-white/30 pb-0 flex-wrap mb-6">
            {['Overview', 'Profile', 'History', 'Reports'].map((item, idx) => (
              <button
                key={idx}
                className={`px-6 py-3 font-semibold rounded-t-2xl transition-all ${
                  idx === 0
                    ? 'backdrop-blur-xl bg-gradient-to-br from-purple-400/50 to-pink-400/50 border border-white/50 text-purple-900 shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="p-4 text-gray-700">
            <p>Content for the selected horizontal navigation tab goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
