import React from 'react';
import { ArrowRight, Heart, Share2, MapPin, Calendar, Clock, AlertCircle, CheckCircle, TrendingUp, Star, Zap } from 'lucide-react';

export default function UICards() {
  const basicCards = [
    { title: 'Card Title', desc: 'This is a basic card with content', icon: 'ðŸ“‹', button: 'Learn More' },
    { title: 'Glass Morphism', desc: 'Modern glass-like card styling', icon: 'âœ¨', button: 'Explore' },
    { title: 'Interactive', desc: 'Hover effects and transitions included', icon: 'ðŸŽ¯', button: 'View' },
  ];

  const cardVariations = [
    {
      title: 'Card with Image',
      content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      date: '30 May 2024',
      image: true,
    },
    {
      title: 'Card Body Only',
      subtitle: 'This is the card subtitle',
      content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      subtitle2: 'Card subtitle',
    },
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
          <span className="text-black font-medium">Cards</span>
        </nav>
        <h1 className="text-4xl font-bold text-black">Cards</h1>
        <p className="text-gray-600 mt-2">Bootstrap's cards provide a flexible and extensible content container with multiple variants</p>
      </div>

      {/* Basic Cards */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg hover:bg-white/50 transition-all">
        <h5 className="text-lg font-bold text-black mb-2">Basic Cards</h5>
        <p className="text-gray-600 text-sm mb-6">Simple cards with icon, title, description and action button.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {basicCards.map((card, idx) => (
            <div key={idx} className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 hover:shadow-lg hover:bg-white/60 transition-all">
              <p className="text-4xl mb-3">{card.icon}</p>
              <h6 className="text-black font-bold mb-2 text-lg">{card.title}</h6>
              <p className="text-gray-700 text-sm mb-4">{card.desc}</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 transition-colors">
                {card.button} <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cards with Header and Footer */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg hover:bg-white/50 transition-all">
        <h5 className="text-lg font-bold text-black mb-2">Cards with Header & Footer</h5>
        <p className="text-gray-600 text-sm mb-6">Cards with header, body, and footer sections.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardVariations.map((card, idx) => (
            <div key={idx} className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg hover:bg-white/60 transition-all">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-b border-gray-300 p-4">
                <h6 className="text-black font-bold">{card.title}</h6>
              </div>
              {/* Body */}
              <div className="p-4 space-y-2">
                {card.subtitle && (
                  <p className="text-gray-600 text-sm font-medium">{card.subtitle}</p>
                )}
                {card.subtitle2 && (
                  <p className="text-gray-600 text-sm">{card.subtitle2}</p>
                )}
                <p className="text-gray-700 text-sm">{card.content}</p>
              </div>
              {/* Footer */}
              <div className="bg-white/20 border-t border-gray-300 p-4 flex gap-2">
                <button className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-slate-900 rounded text-sm font-medium transition-colors">
                  Action
                </button>
                <button className="flex-1 px-3 py-2 border border-gray-400 text-gray-700 hover:bg-gray-50 rounded text-sm font-medium transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cards with Images */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg hover:bg-white/50 transition-all">
        <h5 className="text-lg font-bold text-black mb-2">Cards with Images</h5>
        <p className="text-gray-600 text-sm mb-6">Image cards with overlay content and actions.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((idx) => (
            <div key={idx} className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg hover:bg-white/60 transition-all group">
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-slate-900 text-4xl group-hover:scale-105 transition-transform">
                ðŸ–¼ï¸
              </div>
              {/* Content */}
              <div className="p-4">
                <h6 className="text-black font-bold mb-2">Card Title {idx}</h6>
                <p className="text-gray-700 text-sm mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-slate-900 rounded text-sm font-medium transition-colors flex items-center justify-center gap-1">
                    <Heart size={14} /> Like
                  </button>
                  <button className="px-3 py-2 border border-gray-400 text-gray-700 hover:bg-gray-50 rounded text-sm font-medium transition-colors">
                    <Share2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Color Variants */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg hover:bg-white/50 transition-all">
        <h5 className="text-lg font-bold text-black mb-2">Color Variants</h5>
        <p className="text-gray-600 text-sm mb-6">Cards with different color schemes.</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { color: 'bg-blue-600/20 border-blue-400', accent: 'bg-blue-600' },
            { color: 'bg-green-600/20 border-green-400', accent: 'bg-green-600' },
            { color: 'bg-red-600/20 border-red-400', accent: 'bg-red-600' },
            { color: 'bg-purple-600/20 border-purple-400', accent: 'bg-purple-600' },
          ].map((variant, idx) => (
            <div key={idx} className={`backdrop-blur-md ${variant.color} border rounded-lg p-4`}>
              <div className={`${variant.accent} h-12 rounded mb-3`}></div>
              <h6 className="text-black font-bold text-sm mb-1">Card Title</h6>
              <p className="text-gray-700 text-xs">Color variant card content</p>
            </div>
          ))}
        </div>
      </div>

      {/* Card Layouts */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg hover:bg-white/50 transition-all">
        <h5 className="text-lg font-bold text-black mb-2">Card Layouts</h5>
        <p className="text-gray-600 text-sm mb-6">Different layout variations for cards.</p>
        
        {/* Horizontal Layout */}
        <div className="mb-6">
          <h6 className="text-black font-semibold text-sm mb-3">Horizontal Layout</h6>
          <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-all flex">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-3xl flex-shrink-0">
              ðŸ“±
            </div>
            <div className="flex-1 p-4">
              <h6 className="text-black font-bold mb-1">Horizontal Card</h6>
              <p className="text-gray-700 text-sm">This card layout places the image on the left side with content on the right.</p>
            </div>
          </div>
        </div>

        {/* Minimal Layout */}
        <div>
          <h6 className="text-black font-semibold text-sm mb-3">Minimal Layout</h6>
          <div className="space-y-2">
            {['Item 1', 'Item 2', 'Item 3'].map((item, idx) => (
              <div key={idx} className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-3 hover:shadow-lg transition-all">
                <span className="text-black text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
