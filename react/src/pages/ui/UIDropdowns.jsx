import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function UIDropdowns() {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (id) => {
    setOpenDropdowns(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const colors = [
    { name: 'Primary', className: 'bg-blue-600 hover:bg-blue-700 =', id: 'primary' },
    { name: 'Secondary', className: 'bg-gray-600 hover:bg-gray-700 =', id: 'secondary' },
    { name: 'Success', className: 'bg-green-600 hover:bg-green-700 =', id: 'success' },
    { name: 'Info', className: 'bg-cyan-600 hover:bg-cyan-700 =', id: 'info' },
    { name: 'Warning', className: 'bg-yellow-600 hover:bg-yellow-700 text-black', id: 'warning' },
    { name: 'Danger', className: 'bg-red-600 hover:bg-red-700 =', id: 'danger' },
    { name: 'Dark', className: 'bg-gray-900 hover:bg-black =', id: 'dark' },
  ];

  const outlineColors = [
    { name: 'Primary', className: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50', id: 'outline-primary' },
    { name: 'Secondary', className: 'border-2 border-gray-600 text-gray-600 hover:bg-gray-50', id: 'outline-secondary' },
    { name: 'Success', className: 'border-2 border-green-600 text-green-600 hover:bg-green-50', id: 'outline-success' },
    { name: 'Warning', className: 'border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-50', id: 'outline-warning' },
  ];

  const menuItems = [
    'Action',
    'Another action',
    'Something else here',
    'separator',
    'Separated link',
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
          <span className="text-black font-medium">Dropdowns</span>
        </nav>
        <h1 className="text-4xl font-bold text-black">Dropdowns</h1>
        <p className="text-gray-600 mt-2">Toggle contextual overlays for displaying lists of links and more</p>
      </div>

      {/* Solid Dropdowns */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg hover:bg-white/50 transition-all">
        <h5 className="text-lg font-bold text-black mb-2">Dropdown Variants</h5>
        <p className="text-gray-600 text-sm mb-6">The best part is you can do this with any button variant, too:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {colors.map((color, idx) => (
            <div key={idx} className="relative">
              <button
                onClick={() => toggleDropdown(color.id)}
                className={`${color.className} px-6 py-2.5 rounded-lg font-medium transition-all w-full flex items-center justify-center gap-2 hover:shadow-lg`}
              >
                {color.name}
                <ChevronDown size={16} className={`transition-transform ${openDropdowns[color.id] ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdowns[color.id] && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10 animate-in fade-in duration-200">
                  {menuItems.map((item, itemIdx) => (
                    item === 'separator' ? (
                      <div key={itemIdx} className="h-px bg-gray-200 my-1"></div>
                    ) : (
                      <button
                        key={itemIdx}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800 text-sm first:rounded-t-lg last:rounded-b-lg transition-colors"
                      >
                        {item}
                      </button>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Outline Dropdowns */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg hover:bg-white/50 transition-all">
        <h5 className="text-lg font-bold text-black mb-2">Dropdown Outline</h5>
        <p className="text-gray-600 text-sm mb-6">Outline style dropdowns with transparency.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {outlineColors.map((color, idx) => (
            <div key={idx} className="relative">
              <button
                onClick={() => toggleDropdown(`outline-${color.id}`)}
                className={`${color.className} px-6 py-2.5 rounded-lg font-medium transition-all w-full flex items-center justify-center gap-2 hover:shadow-lg`}
              >
                {color.name}
                <ChevronDown size={16} className={`transition-transform ${openDropdowns[`outline-${color.id}`] ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdowns[`outline-${color.id}`] && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10 animate-in fade-in duration-200">
                  {menuItems.map((item, itemIdx) => (
                    item === 'separator' ? (
                      <div key={itemIdx} className="h-px bg-gray-200 my-1"></div>
                    ) : (
                      <button
                        key={itemIdx}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800 text-sm first:rounded-t-lg last:rounded-b-lg transition-colors"
                      >
                        {item}
                      </button>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Select Dropdowns */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg hover:bg-white/50 transition-all">
        <h5 className="text-lg font-bold text-black mb-2">HTML Select Dropdowns</h5>
        <p className="text-gray-600 text-sm mb-6">Native HTML select element with styling.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-black text-sm font-medium mb-2 block">Basic Select</label>
            <select className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select an option...</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          
          <div>
            <label className="text-black text-sm font-medium mb-2 block">Multiple Select</label>
            <select multiple className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
          </div>
          
          <div>
            <label className="text-black text-sm font-medium mb-2 block">Disabled Select</label>
            <select disabled className="w-full px-4 py-2.5 bg-gray-100 border border-gray-300 rounded-lg text-gray-600 cursor-not-allowed opacity-60">
              <option>Disabled option</option>
            </select>
          </div>

          <div>
            <label className="text-black text-sm font-medium mb-2 block">Select with Optgroup</label>
            <select className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500">
              <optgroup label="Group 1">
                <option>Option 1.1</option>
                <option>Option 1.2</option>
              </optgroup>
              <optgroup label="Group 2">
                <option>Option 2.1</option>
                <option>Option 2.2</option>
              </optgroup>
            </select>
          </div>
        </div>
      </div>

      {/* Dropdown Menu Variations */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg hover:bg-white/50 transition-all">
        <h5 className="text-lg font-bold text-black mb-2">Dropdown Menu Variations</h5>
        <p className="text-gray-600 text-sm mb-6">Different menu styles and layouts.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Centered Menu */}
          <div>
            <h6 className="text-black font-semibold text-sm mb-3">Centered Menu</h6>
            <div className="relative inline-block w-full">
              <button
                onClick={() => toggleDropdown('centered')}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-slate-900 rounded-lg font-medium flex items-center justify-between"
              >
                Options
                <ChevronDown size={16} className={`transition-transform ${openDropdowns['centered'] ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdowns['centered'] && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10 animate-in fade-in duration-200">
                  {['Profile', 'Settings', 'Help', 'Sign Out'].map((item, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800 text-sm first:rounded-t-lg last:rounded-b-lg transition-colors border-b border-gray-100 last:border-0"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Aligned Menu */}
          <div>
            <h6 className="text-black font-semibold text-sm mb-3">Right Aligned Menu</h6>
            <div className="relative inline-block w-full flex justify-end">
              <button
                onClick={() => toggleDropdown('right')}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-slate-900 rounded-lg font-medium flex items-center gap-2"
              >
                Menu
                <ChevronDown size={16} className={`transition-transform ${openDropdowns['right'] ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdowns['right'] && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10 animate-in fade-in duration-200">
                  {['Edit', 'Delete', 'Archive'].map((item, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800 text-sm first:rounded-t-lg last:rounded-b-lg transition-colors border-b border-gray-100 last:border-0"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
