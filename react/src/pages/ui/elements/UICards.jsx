import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export default function UICards() {
  const cards = [
    { title: 'Card Title 1', description: 'This is a sample card with some basic content and information.' },
    { title: 'Card Title 2', description: 'Another card example demonstrating the card component style.' },
    { title: 'Card Title 3', description: 'Cards can contain text, images, or any other content you need.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold =">Cards</h1>
          <nav className="flex items-center space-x-2 text-gray-400">
            <Home className="w-5 h-5" />
            <ChevronRight className="w-4 h-4" />
            <span>UI Kit</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">Cards</span>
          </nav>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Cards */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Basic Cards</h3>
          <div className="space-y-3">
            {cards.map((card, idx) => (
              <div key={idx} className="backdrop-blur-xl bg-white/5 border border-gray-300 rounded p-4 hover:bg-white/10 transition-all duration-200">
                <h4 className="text-black font-semibold mb-2">{card.title}</h4>
                <p className="text-black text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cards with Header */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Cards with Header</h3>
          <div className="space-y-3">
            {cards.map((card, idx) => (
              <div key={idx} className="backdrop-blur-xl bg-white/5 border border-gray-300 rounded overflow-hidden">
                <div className="bg-blue-600 px-4 py-3">
                  <h4 className="text-slate-900 font-semibold">{card.title}</h4>
                </div>
                <div className="p-4">
                  <p className="text-black text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards with Footer */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Cards with Footer</h3>
          <div className="space-y-3">
            {cards.map((card, idx) => (
              <div key={idx} className="backdrop-blur-xl bg-white/5 border border-gray-300 rounded overflow-hidden">
                <div className="p-4">
                  <h4 className="text-black font-semibold mb-2">{card.title}</h4>
                  <p className="text-black text-sm">{card.description}</p>
                </div>
                <div className="border-t border-gray-300 px-4 py-3 bg-gray-100 flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">Learn More</button>
                  <button className="text-gray-600 hover:text-gray-800 font-semibold text-sm">Share</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Colored Cards */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Colored Cards</h3>
          <div className="space-y-3">
            <div className="backdrop-blur-xl bg-blue-50 border border-blue-300 rounded p-4">
              <h4 className="text-blue-900 font-semibold mb-2">Blue Card</h4>
              <p className="text-blue-800 text-sm">This is a blue themed card component.</p>
            </div>
            <div className="backdrop-blur-xl bg-green-50 border border-green-300 rounded p-4">
              <h4 className="text-green-900 font-semibold mb-2">Green Card</h4>
              <p className="text-green-800 text-sm">This is a green themed card component.</p>
            </div>
            <div className="backdrop-blur-xl bg-red-50 border border-red-300 rounded p-4">
              <h4 className="text-red-900 font-semibold mb-2">Red Card</h4>
              <p className="text-red-800 text-sm">This is a red themed card component.</p>
            </div>
          </div>
        </div>

        {/* Elevated Cards */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Elevated Cards</h3>
          <div className="space-y-3">
            {cards.slice(0, 2).map((card, idx) => (
              <div key={idx} className="backdrop-blur-xl bg-white/5 border border-gray-300 rounded p-4 shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1">
                <h4 className="text-black font-semibold mb-2">{card.title}</h4>
                <p className="text-black text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Cards */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Image Cards</h3>
          <div className="space-y-3">
            {cards.slice(0, 2).map((card, idx) => (
              <div key={idx} className="backdrop-blur-xl bg-white/5 border border-gray-300 rounded overflow-hidden hover:shadow-lg transition-all duration-200">
                <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-24"></div>
                <div className="p-4">
                  <h4 className="text-black font-semibold mb-2">{card.title}</h4>
                  <p className="text-black text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
