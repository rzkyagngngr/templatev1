import React, { useState } from 'react';
import { Image, FileText, Video, Download } from 'lucide-react';

export default function MarketingAssets() {
  const [filter, setFilter] = useState('all');

  const assets = [
    { id: 1, name: 'Brand Guidelines 2024', type: 'Document', category: 'Brand', size: '8.4 MB', views: 245, lastModified: '2024-12-10' },
    { id: 2, name: 'Product Logo - Primary', type: 'Image', category: 'Logo', size: '2.1 MB', views: 1850, lastModified: '2024-12-05' },
    { id: 3, name: 'Q4 Holiday Campaign Kit', type: 'Document', category: 'Campaign', size: '12.3 MB', views: 420, lastModified: '2024-12-14' },
    { id: 4, name: 'Product Demo Video', type: 'Video', category: 'Video', size: '156 MB', views: 2100, lastModified: '2024-12-08' },
    { id: 5, name: 'Social Media Template Pack', type: 'Document', category: 'Template', size: '15.6 MB', views: 890, lastModified: '2024-11-30' },
    { id: 6, name: 'Company Photos - Event 2024', type: 'Image', category: 'Photo', size: '245 MB', views: 680, lastModified: '2024-12-01' },
    { id: 7, name: 'Email Header Images', type: 'Image', category: 'Email', size: '5.2 MB', views: 450, lastModified: '2024-12-12' },
    { id: 8, name: 'Presentation Template', type: 'Document', category: 'Template', size: '3.8 MB', views: 320, lastModified: '2024-11-20' },
  ];

  const categories = [
    { name: 'Brand', count: 12, size: '125 MB' },
    { name: 'Campaigns', count: 24, size: '452 MB' },
    { name: 'Templates', count: 15, size: '85 MB' },
    { name: 'Media', count: 48, size: '1.2 GB' },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Image':
        return Image;
      case 'Video':
        return Video;
      case 'Document':
        return FileText;
      default:
        return FileText;
    }
  };

  const stats = [
    { label: 'Total Assets', value: '99', unit: 'files' },
    { label: 'Storage Used', value: '2.1', unit: 'GB' },
    { label: 'Most Viewed', value: 'Product Demo', unit: 'Video' },
    { label: 'Latest Added', value: 'Q4 Campaign', unit: 'Kit' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Marketing Assets</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-black">{stat.value}</p>
              <p className="text-xs text-gray-600 mt-1">{stat.unit}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Asset Categories */}
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-bold text-black mb-4">Asset Categories</h3>
            <div className="space-y-4">
              {categories.map((cat, idx) => (
                <div key={idx} className="pb-4 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-black">{cat.name}</p>
                    <p className="text-black font-bold text-sm">{cat.count}</p>
                  </div>
                  <p className="text-xs text-gray-600">{cat.size}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Access */}
          <div className="lg:col-span-2 backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-bold text-black mb-4">Recently Accessed</h3>
            <div className="space-y-3">
              {assets.slice(0, 5).map((asset, idx) => {
                const Icon = getTypeIcon(asset.type);
                return (
                  <div key={idx} className="flex items-center justify-between p-3 bg-white/50 rounded border border-gray-200">
                    <div className="flex items-center gap-3">
                      <Icon size={20} className="text-gray-600" />
                      <div>
                        <p className="font-semibold text-black text-sm">{asset.name}</p>
                        <p className="text-xs text-gray-600">{asset.size} â€¢ {asset.views} views</p>
                      </div>
                    </div>
                    <button className="p-1 hover:bg-white/50 rounded transition">
                      <Download size={18} className="text-gray-600" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Filter */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-4 mb-6">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                filter === 'all'
                  ? 'bg-blue-600 ='
                  : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
              }`}
            >
              All Assets
            </button>
            <button
              onClick={() => setFilter('Image')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                filter === 'Image'
                  ? 'bg-blue-600 ='
                  : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
              }`}
            >
              Images
            </button>
            <button
              onClick={() => setFilter('Video')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                filter === 'Video'
                  ? 'bg-blue-600 ='
                  : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
              }`}
            >
              Videos
            </button>
            <button
              onClick={() => setFilter('Document')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                filter === 'Document'
                  ? 'bg-blue-600 ='
                  : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
              }`}
            >
              Documents
            </button>
          </div>
        </div>

        {/* Assets Table */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Asset Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Category</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Size</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Views</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Last Modified</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => {
                const Icon = getTypeIcon(asset.type);
                return (
                  <tr key={asset.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="p-1 bg-gray-100 rounded">
                          <Icon size={16} className="text-gray-600" />
                        </div>
                        <p className="font-semibold text-black">{asset.name}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-black">{asset.type}</td>
                    <td className="px-6 py-4 text-black">{asset.category}</td>
                    <td className="px-6 py-4 text-gray-600">{asset.size}</td>
                    <td className="px-6 py-4 text-black font-semibold">{asset.views}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{asset.lastModified}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
