import React, { useState } from 'react';
import { FileText, Search, ChevronRight, BookOpen, Code, Github } from 'lucide-react';

export default function Docs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const docs = [
    {
      id: 1,
      title: 'Getting Started',
      category: 'guide',
      content: 'Learn how to set up and initialize the application. This guide covers installation, configuration, and basic setup.',
      icon: BookOpen,
      updated: 'Dec 10, 2024'
    },
    {
      id: 2,
      title: 'Installation Guide',
      category: 'guide',
      content: 'Step-by-step instructions for installing the application on your system.',
      icon: Code,
      updated: 'Dec 12, 2024'
    },
    {
      id: 3,
      title: 'API Documentation',
      category: 'api',
      content: 'Complete reference for all available API endpoints and their usage.',
      icon: Github,
      updated: 'Dec 8, 2024'
    },
    {
      id: 4,
      title: 'Authentication',
      category: 'security',
      content: 'Learn about authentication methods, token management, and security best practices.',
      icon: FileText,
      updated: 'Dec 11, 2024'
    },
    {
      id: 5,
      title: 'Components Guide',
      category: 'guide',
      content: 'Explore all available UI components and how to use them effectively.',
      icon: Code,
      updated: 'Dec 9, 2024'
    },
    {
      id: 6,
      title: 'Deployment',
      category: 'deployment',
      content: 'Instructions for deploying the application to production environments.',
      icon: BookOpen,
      updated: 'Dec 14, 2024'
    },
    {
      id: 7,
      title: 'Performance Optimization',
      category: 'guide',
      content: 'Tips and techniques for optimizing application performance.',
      icon: FileText,
      updated: 'Dec 7, 2024'
    },
    {
      id: 8,
      title: 'Troubleshooting',
      category: 'support',
      content: 'Common issues and their solutions.',
      icon: Code,
      updated: 'Dec 13, 2024'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Docs' },
    { id: 'guide', label: 'Guides' },
    { id: 'api', label: 'API' },
    { id: 'security', label: 'Security' },
    { id: 'deployment', label: 'Deployment' },
    { id: 'support', label: 'Support' }
  ];

  const filteredDocs = docs.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div>
        <h4 className="text-2xl font-bold text-black">Documentation</h4>
        <div className="text-sm text-gray-600 mt-2">Glacia / Pages / Documentation</div>
      </div>

      {/* Search Section */}
      <div className="glass-card border border-gray-300 p-6">
        <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-3">
          <Search size={20} className="text-gray-600" />
          <input
            type="text"
            placeholder="Search documentation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 outline-none text-black placeholder-gray-500"
          />
        </div>
      </div>

      {/* Categories Filter */}
      <div className="glass-card border border-gray-300 p-6">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg transition font-medium ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 ='
                  : 'bg-gray-100 text-black border border-gray-300 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Documentation Items */}
      <div className="space-y-4">
        {filteredDocs.map((doc) => {
          const Icon = doc.icon;
          return (
            <div key={doc.id} className="glass-card border border-gray-300 p-6 hover:bg-gray-50 transition cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <Icon size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-lg font-semibold text-black hover:text-blue-600">{doc.title}</h5>
                    <span className="text-xs text-gray-600">{doc.updated}</span>
                  </div>
                  <p className="text-black mb-3">{doc.content}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-black capitalize">
                      {doc.category}
                    </span>
                    <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm ml-auto">
                      Read More <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredDocs.length === 0 && (
        <div className="glass-card border border-gray-300 p-12 text-center">
          <p className="text-black font-medium mb-2">No documentation found</p>
          <p className="text-gray-600">Try adjusting your search or category filter</p>
        </div>
      )}

      {/* Quick Links */}
      <div className="glass-card border border-gray-300 p-6">
        <h5 className="text-lg font-semibold text-black mb-4">Quick Resources</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'FAQ', desc: 'Frequently asked questions' },
            { title: 'Community', desc: 'Join our community forum' },
            { title: 'Report Issue', desc: 'Report bugs and issues' }
          ].map((link, i) => (
            <button key={i} className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left transition">
              <h6 className="text-black font-semibold mb-1">{link.title}</h6>
              <p className="text-sm text-gray-600">{link.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
