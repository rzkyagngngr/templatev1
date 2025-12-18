import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function UICarousels() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [fadeSlide, setFadeSlide] = useState(0);
  const [multiItemSlide, setMultiItemSlide] = useState(0);

  const slides = [
    { id: 1, title: 'Slide 1', image: 'https://picsum.photos/800/400?random=100' },
    { id: 2, title: 'Slide 2', image: 'https://picsum.photos/800/400?random=101' },
    { id: 3, title: 'Slide 3', image: 'https://picsum.photos/800/400?random=102' },
    { id: 4, title: 'Slide 4', image: 'https://picsum.photos/800/400?random=103' },
  ];

  const testimonials = [
    { id: 1, name: 'Alice Johnson', role: 'CEO', text: 'Amazing service and great support!' },
    { id: 2, name: 'Bob Smith', role: 'Designer', text: 'Exceeded all my expectations.' },
    { id: 3, name: 'Carol White', role: 'Developer', text: 'Highly recommend to everyone!' },
    { id: 4, name: 'David Brown', role: 'Manager', text: 'Professional and reliable team.' },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  // Auto-play fade carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeSlide(prev => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextFade = () => setFadeSlide((prev) => (prev + 1) % slides.length);
  const prevFade = () => setFadeSlide((prev) => (prev - 1 + slides.length) % slides.length);

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
          <span className="text-sm text-blue-600 font-medium">Carousels</span>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Carousels & Sliders
        </h1>
        <p className="text-gray-600">Beautiful carousel components</p>
      </div>

      {/* Basic Carousel with Images */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Basic Carousel with Images</h2>
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-96 bg-black group">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
            <p className="text-white text-lg font-semibold">{slides[currentSlide].title}</p>
          </div>
        </div>
      </div>

      {/* Carousel with Navigation Arrows */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Carousel with Navigation Arrows</h2>
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-96 bg-black group">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 backdrop-blur-xl bg-white/30 rounded-full hover:bg-white/50 transition-all opacity-0 group-hover:opacity-100 z-10"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 backdrop-blur-xl bg-white/30 rounded-full hover:bg-white/50 transition-all opacity-0 group-hover:opacity-100 z-10"
          >
            <ChevronRight className="text-white" size={24} />
          </button>
        </div>
      </div>

      {/* Carousel with Indicators/Dots */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Carousel with Indicators</h2>
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-96 bg-black">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentSlide
                    ? 'backdrop-blur-xl bg-white w-8'
                    : 'backdrop-blur-xl bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Auto-playing Carousel */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Auto-playing Carousel</h2>
        <div className="space-y-4">
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-96 bg-black">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className={`backdrop-blur-xl rounded-2xl border border-white/50 px-6 py-2 transition-all font-medium ${
              autoPlay
                ? 'bg-gradient-to-br from-red-400/50 to-red-300/50 text-red-700 shadow-red-200/40'
                : 'bg-gradient-to-br from-green-400/50 to-green-300/50 text-green-700 shadow-green-200/40'
            }`}
          >
            {autoPlay ? 'Pause Auto-play' : 'Start Auto-play'}
          </button>
        </div>
      </div>

      {/* Carousel with Fade Transition */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Carousel with Fade Transition</h2>
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-96 bg-black">
          {slides.map((slide, idx) => (
            <img
              key={idx}
              src={slide.image}
              alt={slide.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                idx === fadeSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <button
            onClick={prevFade}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 backdrop-blur-xl bg-white/30 rounded-full hover:bg-white/50 transition-all z-10"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          <button
            onClick={nextFade}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 backdrop-blur-xl bg-white/30 rounded-full hover:bg-white/50 transition-all z-10"
          >
            <ChevronRight className="text-white" size={24} />
          </button>
        </div>
      </div>

      {/* Carousel with Captions */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Carousel with Captions</h2>
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-96 bg-black group">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-white text-3xl font-bold mb-2">{slides[currentSlide].title}</h3>
            <p className="text-white/80 text-lg">Beautiful image carousel with captions</p>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 backdrop-blur-xl bg-white/30 rounded-full hover:bg-white/50 transition-all opacity-0 group-hover:opacity-100 z-10"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 backdrop-blur-xl bg-white/30 rounded-full hover:bg-white/50 transition-all opacity-0 group-hover:opacity-100 z-10"
          >
            <ChevronRight className="text-white" size={24} />
          </button>
        </div>
      </div>

      {/* Multi-item Carousel */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Multi-item Carousel</h2>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden">
            {[0, 1, 2].map(i => {
              const idx = (multiItemSlide + i) % slides.length;
              return (
                <div key={i} className="rounded-2xl overflow-hidden shadow-lg h-48 bg-black">
                  <img
                    src={slides[idx].image}
                    alt={slides[idx].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
          <button
            onClick={() => setMultiItemSlide(prev => (prev - 1 + slides.length) % slides.length)}
            className="absolute -left-6 top-1/2 -translate-y-1/2 p-3 backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-blue-300/50 rounded-full hover:scale-110 transition-all shadow-blue-200/40"
          >
            <ChevronLeft className="text-blue-700" size={24} />
          </button>
          <button
            onClick={() => setMultiItemSlide(prev => (prev + 1) % slides.length)}
            className="absolute -right-6 top-1/2 -translate-y-1/2 p-3 backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-blue-300/50 rounded-full hover:scale-110 transition-all shadow-blue-200/40"
          >
            <ChevronRight className="text-blue-700" size={24} />
          </button>
        </div>
      </div>

      {/* Carousel with Testimonials */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Carousel with Testimonials</h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="backdrop-blur-xl bg-gradient-to-br from-purple-400/20 to-purple-300/20 rounded-2xl border border-white/40 p-8 min-h-64">
            <div className="flex gap-2 mb-4">
              {[1, 2, 3, 4, 5].map(i => (
                <Star
                  key={i}
                  size={20}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <p className="text-gray-700 text-lg mb-6 italic">"{testimonials[currentSlide].text}"</p>
            <div>
              <p className="font-semibold text-gray-800">{testimonials[currentSlide].name}</p>
              <p className="text-gray-600 text-sm">{testimonials[currentSlide].role}</p>
            </div>
          </div>
          <button
            onClick={() => setCurrentSlide(prev => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute -left-6 top-1/2 -translate-y-1/2 p-3 backdrop-blur-xl bg-gradient-to-br from-purple-400/50 to-purple-300/50 rounded-full hover:scale-110 transition-all shadow-purple-200/40"
          >
            <ChevronLeft className="text-purple-700" size={24} />
          </button>
          <button
            onClick={() => setCurrentSlide(prev => (prev + 1) % testimonials.length)}
            className="absolute -right-6 top-1/2 -translate-y-1/2 p-3 backdrop-blur-xl bg-gradient-to-br from-purple-400/50 to-purple-300/50 rounded-full hover:scale-110 transition-all shadow-purple-200/40"
          >
            <ChevronRight className="text-purple-700" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
