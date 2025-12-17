import React from 'react';
import { ChevronRight, Home, Image as ImageIcon } from 'lucide-react';

export default function UIImages() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold =">Images</h1>
          <nav className="flex items-center space-x-2 text-gray-400">
            <Home className="w-5 h-5" />
            <ChevronRight className="w-4 h-4" />
            <span>UI Kit</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">Images</span>
          </nav>
        </div>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Responsive Images */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Responsive Images</h3>
          <div className="space-y-3">
            <div className="w-full h-32 bg-gradient-to-r from-blue-400 to-blue-600 rounded flex items-center justify-center">
              <ImageIcon className="w-12 h-12 =" />
            </div>
            <div className="w-full h-24 bg-gradient-to-r from-green-400 to-green-600 rounded flex items-center justify-center">
              <ImageIcon className="w-10 h-10 =" />
            </div>
          </div>
        </div>

        {/* Image Sizes */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Image Sizes</h3>
          <div className="flex gap-3 flex-wrap items-end">
            <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-red-600 rounded flex items-center justify-center">
              <ImageIcon className="w-8 h-8 =" />
            </div>
            <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-purple-600 rounded flex items-center justify-center">
              <ImageIcon className="w-10 h-10 =" />
            </div>
            <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-black" />
            </div>
          </div>
        </div>

        {/* Image Shapes */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Image Shapes</h3>
          <div className="flex gap-4 flex-wrap">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded flex items-center justify-center">
              <ImageIcon className="w-10 h-10 =" />
            </div>
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <ImageIcon className="w-10 h-10 =" />
            </div>
            <div className="w-20 h-20 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center">
              <ImageIcon className="w-10 h-10 =" />
            </div>
          </div>
        </div>

        {/* Image with Border */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Image Border</h3>
          <div className="flex gap-4 flex-wrap">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-blue-600 rounded border-2 border-white flex items-center justify-center">
              <ImageIcon className="w-10 h-10 =" />
            </div>
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded border-4 border-gray-300 flex items-center justify-center">
              <ImageIcon className="w-10 h-10 =" />
            </div>
            <div className="w-24 h-24 bg-gradient-to-r from-red-400 to-red-600 rounded-full border-2 border-yellow-400 flex items-center justify-center">
              <ImageIcon className="w-10 h-10 =" />
            </div>
          </div>
        </div>

        {/* Image Shadow */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Image Shadow</h3>
          <div className="flex gap-4 flex-wrap justify-center">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-blue-600 rounded shadow flex items-center justify-center">
              <ImageIcon className="w-10 h-10 =" />
            </div>
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded shadow-lg flex items-center justify-center">
              <ImageIcon className="w-10 h-10 =" />
            </div>
            <div className="w-24 h-24 bg-gradient-to-r from-red-400 to-red-600 rounded shadow-2xl flex items-center justify-center">
              <ImageIcon className="w-10 h-10 =" />
            </div>
          </div>
        </div>

        {/* Image Hover Effects */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Hover Effects</h3>
          <div className="flex gap-4 flex-wrap">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-blue-600 rounded overflow-hidden cursor-pointer hover:scale-110 transition-transform duration-300 flex items-center justify-center">
              <ImageIcon className="w-10 h-10 =" />
            </div>
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded overflow-hidden cursor-pointer hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
              <ImageIcon className="w-10 h-10 =" />
            </div>
            <div className="w-24 h-24 bg-gradient-to-r from-red-400 to-red-600 rounded overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 flex items-center justify-center">
              <ImageIcon className="w-10 h-10 =" />
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Image Grid</h3>
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2, 3, 4, 5].map(i => {
              const colors = ['from-blue-400 to-blue-600', 'from-green-400 to-green-600', 'from-red-400 to-red-600', 'from-purple-400 to-purple-600', 'from-yellow-400 to-yellow-600', 'from-indigo-400 to-indigo-600'];
              return (
                <div key={i} className={`w-full aspect-square bg-gradient-to-r ${colors[i]} rounded flex items-center justify-center hover:shadow-lg transition-all duration-300`}>
                  <ImageIcon className="w-8 h-8 =" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
