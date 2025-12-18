import React, { useState } from 'react';
import { ChevronRight, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, title: 'Dashboard Overview', category: 'dashboard', img: 'https://picsum.photos/400/300?random=1' },
    { id: 2, title: 'Analytics Reports', category: 'analytics', img: 'https://picsum.photos/400/300?random=2' },
    { id: 3, title: 'User Management', category: 'users', img: 'https://picsum.photos/400/300?random=3' },
    { id: 4, title: 'Settings Panel', category: 'settings', img: 'https://picsum.photos/400/300?random=4' },
    { id: 5, title: 'Mobile View', category: 'mobile', img: 'https://picsum.photos/400/300?random=5' },
    { id: 6, title: 'Dark Mode', category: 'dashboard', img: 'https://picsum.photos/400/300?random=6' },
    { id: 7, title: 'Team Collaboration', category: 'users', img: 'https://picsum.photos/400/300?random=7' },
    { id: 8, title: 'Performance Charts', category: 'analytics', img: 'https://picsum.photos/400/300?random=8' },
    { id: 9, title: 'API Integration', category: 'settings', img: 'https://picsum.photos/400/300?random=9' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm">
        <span className="text-gray-600">Glacia</span>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="text-gray-600">Pages</span>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Gallery</span>
      </div>

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">Gallery</h1>
        <p className="text-gray-600 text-lg">Explore our design showcase</p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map(image => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group cursor-pointer"
            >
              <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={image.img}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-3 backdrop-blur-xl bg-white/90 border border-white/50 rounded-2xl">
                        <ZoomIn size={24} className="text-blue-600" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{image.title}</h3>
                  <div className="mt-auto">
                    <span className="inline-block px-3 py-1 backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-purple-400/50 text-blue-900 text-sm font-semibold rounded-full border border-white/50">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="backdrop-blur-2xl bg-gradient-to-br from-white/95 to-white/90 rounded-3xl border border-white/60 shadow-2xl max-w-2xl w-full overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={selectedImage.img}
              alt={selectedImage.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedImage.title}</h2>
              <p className="text-gray-600 mb-6">Category: <span className="font-semibold text-gray-900">{selectedImage.category}</span></p>
              <button
                onClick={() => setSelectedImage(null)}
                className="w-full py-3 backdrop-blur-xl bg-gradient-to-br from-blue-500/50 to-purple-500/50 text-white rounded-2xl font-semibold border border-white/50 hover:shadow-lg transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
