import React, { useState } from 'react';
import { ChevronRight, Calendar, User, Eye, Heart, MessageCircle, ArrowRight } from 'lucide-react';

export default function PagesBlogs() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogs = [
    { id: 1, title: 'Getting Started with React Hooks', author: 'Sarah Chen', date: 'Dec 16, 2025', category: 'react', reads: 2543, likes: 324, image: 'https://picsum.photos/400/250?random=1' },
    { id: 2, title: 'Mastering Tailwind CSS', author: 'John Smith', date: 'Dec 15, 2025', category: 'css', reads: 1876, likes: 215, image: 'https://picsum.photos/400/250?random=2' },
    { id: 3, title: 'Building Glass Morphism UIs', author: 'Emma Wilson', date: 'Dec 14, 2025', category: 'design', reads: 3124, likes: 456, image: 'https://picsum.photos/400/250?random=3' },
    { id: 4, title: 'Advanced React Patterns', author: 'Michael Dev', date: 'Dec 13, 2025', category: 'react', reads: 2109, likes: 287, image: 'https://picsum.photos/400/250?random=4' },
    { id: 5, title: 'CSS Grid Layouts', author: 'Lisa Martinez', date: 'Dec 12, 2025', category: 'css', reads: 1654, likes: 198, image: 'https://picsum.photos/400/250?random=5' },
    { id: 6, title: 'Design System Best Practices', author: 'David Thompson', date: 'Dec 11, 2025', category: 'design', reads: 2876, likes: 412, image: 'https://picsum.photos/400/250?random=6' }
  ];

  const categories = ['all', 'react', 'css', 'design'];
  const filtered = selectedCategory === 'all' ? blogs : blogs.filter(b => b.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm">
        <span className="text-gray-600">Glacia</span>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="text-gray-600">Pages</span>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Blogs</span>
      </div>

      {/* Header */}
      <div className="mb-12 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-2">Blog Posts</h1>
        <p className="text-gray-600">Discover insights, tutorials, and best practices</p>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto mb-12 flex gap-3 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-2xl font-medium transition-all duration-300 capitalize ${
              selectedCategory === cat
                ? 'backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-purple-400/50 border border-white/50 text-blue-900 shadow-lg'
                : 'backdrop-blur-xl bg-white/30 border border-white/40 text-gray-700 hover:bg-white/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(blog => (
          <div key={blog.id} className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 overflow-hidden group hover:shadow-2xl hover:scale-105 transition-all duration-300">
            {/* Image */}
            <div className="h-48 overflow-hidden relative">
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-xs text-blue-600 font-medium mb-2 capitalize">{blog.category}</p>
              <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{blog.title}</h3>
              
              {/* Meta */}
              <div className="space-y-2 mb-4 pb-4 border-b border-white/30">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <User size={14} />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Calendar size={14} />
                  <span>{blog.date}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <Eye size={14} />
                  <span>{blog.reads}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart size={14} />
                  <span>{blog.likes}</span>
                </div>
                <button className="ml-auto px-3 py-1.5 backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-purple-400/50 border border-white/50 rounded-lg text-blue-700 hover:shadow-lg transition-all">
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
