import React, { useState } from 'react';
import { ChevronRight, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1551431009-381d36ac3a99?w=400&h=300&fit=crop', alt: 'Dashboard' },
    { id: 2, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop', alt: 'Analytics' },
    { id: 3, src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop', alt: 'Design' },
    { id: 4, src: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=400&h=300&fit=crop', alt: 'Workspace' },
    { id: 5, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop', alt: 'Team' },
    { id: 6, src: 'https://images.unsplash.com/photo-1460925895917-adf4e565db88?w=400&h=300&fit=crop', alt: 'Reports' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span>Glacia</span>
          <ChevronRight size={16} />
          <span>Pages</span>
          <ChevronRight size={16} />
          <span className="text-gray-900 font-semibold">Gallery</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Gallery</h1>
      </div>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <ZoomIn size={32} className="text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm font-medium text-gray-900">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white rounded-lg p-4 max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto" />
            <div className="mt-4 flex justify-between">
              <p className="font-medium text-gray-900">{selectedImage.alt}</p>
              <button onClick={() => setSelectedImage(null)} className="text-gray-600 hover:text-gray-900">âœ•</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
