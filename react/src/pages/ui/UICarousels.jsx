import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function UICarousels() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides = [
    { id: 1, title: 'Slide 1', desc: 'First carousel item', img: 'https://picsum.photos/800/400?random=1' },
    { id: 2, title: 'Slide 2', desc: 'Second carousel item', img: 'https://picsum.photos/800/400?random=2' },
    { id: 3, title: 'Slide 3', desc: 'Third carousel item', img: 'https://picsum.photos/800/400?random=3' },
    { id: 4, title: 'Slide 4', desc: 'Fourth carousel item', img: 'https://picsum.photos/800/400?random=4' },
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [autoPlay, slides.length]);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="mb-8 flex items-center gap-2 text-sm">
        <span className="text-gray-600">Glacia</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600">UI</span>
        <span className="text-gray-400">/</span>
        <span className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Carousels</span>
      </div>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-3">Carousels</h1>
        <p className="text-gray-600 text-lg mb-12">Image carousel with navigation and indicators</p>

        {/* Basic Carousel */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 overflow-hidden mb-8">
          <div className="relative h-96 overflow-hidden group">
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-500 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">{slide.title}</h3>
                    <p className="text-sm opacity-90">{slide.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 backdrop-blur-xl bg-white/30 border border-white/50 rounded-full hover:bg-white/50 transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="text-white" size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 backdrop-blur-xl bg-white/30 border border-white/50 rounded-full hover:bg-white/50 transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="text-white" size={24} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentSlide
                      ? 'w-6 bg-white'
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="p-6 flex items-center justify-between">
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className={`px-4 py-2 backdrop-blur-xl rounded-2xl border border-white/50 font-semibold transition-all ${
                autoPlay
                  ? 'bg-gradient-to-br from-green-400/50 to-emerald-400/50 text-green-900'
                  : 'bg-gradient-to-br from-gray-400/50 to-gray-300/50 text-gray-900'
              }`}
            >
              {autoPlay ? 'Playing' : 'Paused'}
            </button>
            <span className="text-gray-600 font-semibold">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>
        </div>

        {/* Multi-item Carousel */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Multi-item Carousel</h2>
          <div className="grid grid-cols-3 gap-4">
            {slides.map((slide, idx) => (
              <div key={slide.id} className="relative group">
                <img src={slide.img} alt={slide.title} className="w-full h-48 object-cover rounded-2xl" />
                <div className={`absolute inset-0 rounded-2xl border-2 transition-all ${
                  idx === currentSlide ? 'border-blue-500 shadow-lg shadow-blue-300/50' : 'border-transparent'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
