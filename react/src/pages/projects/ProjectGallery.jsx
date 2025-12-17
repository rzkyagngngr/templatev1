import React from 'react';
import { Plus, Download, Trash2 } from 'lucide-react';

export default function ProjectGallery() {
  const images = [
    { id: 1, title: 'UI Mockup v1', type: 'Design', size: '2.4 MB', date: '2025-01-10', thumb: 'ðŸŽ¨' },
    { id: 2, title: 'Architecture Diagram', type: 'Technical', size: '1.8 MB', date: '2025-01-12', thumb: 'ðŸ“' },
    { id: 3, title: 'Wireframe Sketch', type: 'Design', size: '3.2 MB', date: '2025-01-15', thumb: 'âœï¸' },
    { id: 4, title: 'Logo Concepts', type: 'Branding', size: '4.5 MB', date: '2025-01-18', thumb: 'ðŸ·ï¸' },
    { id: 5, title: 'Color Palette', type: 'Design', size: '0.8 MB', date: '2025-01-20', thumb: 'ðŸŽ¨' },
    { id: 6, title: 'Typography Guide', type: 'Design', size: '1.2 MB', date: '2025-01-22', thumb: 'ðŸ“' },
  ];

  const categories = [
    { name: 'Design', count: 4, color: 'bg-blue-100' },
    { name: 'Technical', count: 1, color: 'bg-purple-100' },
    { name: 'Branding', count: 1, color: 'bg-pink-100' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-black">Project Gallery</h1>
        <button className="bg-blue-500 text-slate-900 px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
          <Plus size={20} /> Upload
        </button>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {categories.map((cat, idx) => (
          <div key={idx} className={`${cat.color} rounded-lg p-4 cursor-pointer hover:shadow-lg`}>
            <p className="font-semibold text-black">{cat.name}</p>
            <p className="text-2xl font-bold text-black mt-2">{cat.count}</p>
            <p className="text-xs text-gray-600 mt-1">Files</p>
          </div>
        ))}
      </div>

      {/* Image Grid */}
      <div className="glass-card border border-gray-300 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-black mb-4">Gallery</h2>
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="border border-gray-300 rounded-lg overflow-hidden bg-white hover:shadow-lg cursor-pointer">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-32 flex items-center justify-center text-5xl">
                {image.thumb}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-black mb-1">{image.title}</h3>
                <p className="text-xs text-gray-600 mb-2">{image.type}</p>
                <div className="flex justify-between items-center text-xs text-gray-600 mb-3">
                  <span>{image.size}</span>
                  <span>{image.date}</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 border border-gray-300 text-black py-1 rounded hover:bg-gray-50 text-xs flex items-center justify-center gap-1">
                    <Download size={14} /> Download
                  </button>
                  <button className="px-2 border border-gray-300 text-gray-400 py-1 rounded hover:text-red-500">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Uploads */}
      <div className="glass-card border border-gray-300 rounded-lg p-6">
        <h2 className="text-xl font-bold text-black mb-4">Recent Uploads</h2>
        <div className="space-y-3">
          {images.slice(0, 4).map((image) => (
            <div key={image.id} className="flex items-center justify-between border border-gray-300 rounded-lg p-3 bg-white hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{image.thumb}</span>
                <div>
                  <p className="font-semibold text-black text-sm">{image.title}</p>
                  <p className="text-xs text-gray-600">{image.date} â€¢ {image.size}</p>
                </div>
              </div>
              <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded text-xs hover:bg-blue-200">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
