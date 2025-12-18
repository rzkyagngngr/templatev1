import React, { useState } from 'react';
import { ChevronRight, Home, ZoomIn, Eye, Download } from 'lucide-react';

const UIImages = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const galleryImages = [
    { id: 1, title: 'Mountain View' },
    { id: 2, title: 'Ocean Sunset' },
    { id: 3, title: 'Forest Path' },
    { id: 4, title: 'Desert Sand' },
    { id: 5, title: 'City Lights' },
    { id: 6, title: 'Winter Snow' },
    { id: 7, title: 'Summer Beach' },
    { id: 8, title: 'Autumn Fall' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8">
        <a href="/" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
          <Home size={18} /> Dashboard
        </a>
        <ChevronRight size={18} className="text-gray-400" />
        <span className="text-gray-900 font-medium">UI Components</span>
        <ChevronRight size={18} className="text-gray-400" />
        <span className="text-blue-600 font-medium">Images</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Image Components</h1>
        <p className="text-gray-600">Complete showcase of image sizes, effects, and gallery layouts</p>
      </div>

      {/* Image Sizes */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Image Sizes</h2>
        <div className="flex flex-wrap items-end gap-8">
          {[
            { size: 'w-20 h-20', label: 'Extra Small (80px)' },
            { size: 'w-32 h-32', label: 'Small (128px)' },
            { size: 'w-48 h-48', label: 'Medium (192px)' },
            { size: 'w-64 h-64', label: 'Large (256px)' },
          ].map((img, idx) => (
            <div key={`size-${idx}`} className="flex flex-col items-center gap-2">
              <img
                src={`https://picsum.photos/200/200?random=${idx + 40}`}
                alt={img.label}
                className={`${img.size} rounded-2xl border-2 border-white/60 shadow-lg object-cover`}
              />
              <span className="text-xs text-gray-600 text-center">{img.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Image Effects - Rounded */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-purple-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Image Effects - Rounded Corners</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { radius: 'rounded-none', label: 'None (0px)' },
            { radius: 'rounded-lg', label: 'Small (8px)' },
            { radius: 'rounded-2xl', label: 'Medium (16px)' },
            { radius: 'rounded-3xl', label: 'Large (24px)' },
          ].map((effect, idx) => (
            <div key={`radius-${idx}`} className="flex flex-col items-center gap-3">
              <img
                src={`https://picsum.photos/300/200?random=${idx + 50}`}
                alt={effect.label}
                className={`${effect.radius} w-48 h-32 object-cover border-2 border-white/60 shadow-lg`}
              />
              <span className="text-sm text-gray-600">{effect.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Image Effects - Shadows */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-green-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Image Effects - Shadows</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { shadow: 'shadow-sm', label: 'Small' },
            { shadow: 'shadow-md', label: 'Medium' },
            { shadow: 'shadow-lg', label: 'Large' },
            { shadow: 'shadow-2xl', label: 'Extra Large' },
          ].map((effect, idx) => (
            <div key={`shadow-${idx}`} className="flex flex-col items-center gap-3">
              <img
                src={`https://picsum.photos/300/200?random=${idx + 60}`}
                alt={effect.label}
                className={`rounded-2xl w-48 h-32 object-cover border-2 border-white/60 ${effect.shadow}`}
              />
              <span className="text-sm text-gray-600">{effect.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Image Effects - Filters */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-yellow-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Image Effects - Filters</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { filter: 'grayscale-0', label: 'Normal' },
            { filter: 'grayscale', label: 'Grayscale' },
            { filter: 'sepia', label: 'Sepia' },
            { filter: 'blur-sm', label: 'Blur' },
          ].map((effect, idx) => (
            <div key={`filter-${idx}`} className="flex flex-col items-center gap-3">
              <img
                src={`https://picsum.photos/300/200?random=${idx + 70}`}
                alt={effect.label}
                className={`rounded-2xl w-48 h-32 object-cover border-2 border-white/60 shadow-lg ${effect.filter}`}
              />
              <span className="text-sm text-gray-600">{effect.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Image Grid */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-pink-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Responsive Image Grid (2 Columns)</h2>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((img) => (
            <img
              key={`responsive-2-${img}`}
              src={`https://picsum.photos/400/300?random=${img + 80}`}
              alt={`Grid image ${img}`}
              className="rounded-2xl w-full h-64 object-cover border-2 border-white/60 shadow-lg hover:shadow-2xl hover:scale-102 transition-all duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Image Grid - 3 Columns */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-indigo-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Image Grid (3 Columns)</h2>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((img) => (
            <img
              key={`responsive-3-${img}`}
              src={`https://picsum.photos/400/300?random=${img + 90}`}
              alt={`Grid image ${img}`}
              className="rounded-2xl w-full h-48 object-cover border-2 border-white/60 shadow-lg hover:shadow-2xl hover:scale-102 transition-all duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Masonry Gallery */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-cyan-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Masonry Gallery Layout</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((img) => (
            <div
              key={`masonry-${img}`}
              className={`rounded-2xl overflow-hidden border-2 border-white/60 shadow-lg hover:shadow-2xl hover:scale-102 transition-all duration-300 cursor-pointer ${
                img % 3 === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              onClick={() => handleImageClick(`https://picsum.photos/400/300?random=${img + 100}`)}
            >
              <img
                src={`https://picsum.photos/400/300?random=${img + 100}`}
                alt={`Gallery image ${img}`}
                className={`w-full h-full object-cover ${img % 3 === 0 ? 'h-64' : 'h-40'}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image with Overlay */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-rose-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Images with Overlays</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Text Overlay */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-white/60 shadow-lg group cursor-pointer h-64">
            <img
              src="https://picsum.photos/400/300?random=110"
              alt="Overlay 1"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-4 group-hover:bg-black/60 transition-all duration-300">
              <div className="text-white">
                <h3 className="text-lg font-semibold">Mountain View</h3>
                <p className="text-sm opacity-90">Beautiful landscape</p>
              </div>
            </div>
          </div>

          {/* Icon Overlay */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-white/60 shadow-lg group cursor-pointer h-64">
            <img
              src="https://picsum.photos/400/300?random=111"
              alt="Overlay 2"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Eye size={48} className="text-white" />
            </div>
          </div>

          {/* Gradient Overlay */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-white/60 shadow-lg group cursor-pointer h-64">
            <img
              src="https://picsum.photos/400/300?random=112"
              alt="Overlay 3"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent flex items-end p-4">
              <div className="text-white">
                <h3 className="text-lg font-semibold">Sunset</h3>
                <p className="text-sm opacity-90">Golden hour</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Images with Captions */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-orange-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Images with Captions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.slice(0, 3).map((image) => (
            <div key={`caption-${image.id}`}>
              <img
                src={`https://picsum.photos/400/300?random=${image.id + 120}`}
                alt={image.title}
                className="rounded-2xl w-full h-56 object-cover border-2 border-white/60 shadow-lg"
              />
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">{image.title}</h3>
                <p className="text-sm text-gray-600">Beautiful photo of {image.title.toLowerCase()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery with Hover Effects */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-teal-200/40 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery with Hover Effects</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={`gallery-${image.id}`}
              className="relative group rounded-2xl overflow-hidden border-2 border-white/60 shadow-lg cursor-pointer"
              onClick={() => handleImageClick(`https://picsum.photos/400/300?random=${image.id + 130}`)}
            >
              <img
                src={`https://picsum.photos/400/300?random=${image.id + 130}`}
                alt={image.title}
                className="w-full h-40 object-cover group-hover:scale-120 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center gap-3">
                <button className="p-2 rounded-full bg-white/80 text-gray-900 opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300">
                  <ZoomIn size={20} />
                </button>
                <button className="p-2 rounded-full bg-white/80 text-gray-900 opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300">
                  <Download size={20} />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Lightbox"
              className="w-full rounded-2xl border-4 border-white shadow-2xl"
            />
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <div className="text-3xl">×</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UIImages;
