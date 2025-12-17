import React, { useState } from 'react';
import { FileText, Image, Video, Download } from 'lucide-react';

export default function MarketingContent() {
  const [type, setType] = useState('all');

  const contentItems = [
    { id: 1, title: 'Q4 Marketing Strategy Blog', type: 'Blog', status: 'Published', views: 4250, engagement: '3.2%', date: '2024-12-10' },
    { id: 2, title: 'Product Demo Video', type: 'Video', status: 'Published', views: 8920, engagement: '6.8%', date: '2024-12-08' },
    { id: 3, title: 'Industry Report 2024', type: 'Whitepaper', status: 'Published', downloads: 1240, engagement: '8.5%', date: '2024-12-05' },
    { id: 4, title: 'Holiday Campaign Graphics', type: 'Design', status: 'In Review', views: 0, engagement: '-', date: '2024-12-12' },
    { id: 5, title: 'Customer Success Stories', type: 'Case Study', status: 'Published', views: 3150, engagement: '4.1%', date: '2024-12-01' },
    { id: 6, title: 'Infographic: Market Trends', type: 'Design', status: 'Published', shares: 890, engagement: '5.2%', date: '2024-11-28' },
    { id: 7, title: 'Email Template Collection', type: 'Template', status: 'Published', downloads: 320, engagement: '2.8%', date: '2024-11-25' },
    { id: 8, title: 'Podcast Episode 12', type: 'Audio', status: 'Published', listens: 1580, engagement: '7.1%', date: '2024-11-20' },
  ];

  const contentTypes = [
    { type: 'Blog Posts', count: 24, trend: '+12%' },
    { type: 'Videos', count: 8, trend: '+25%' },
    { type: 'Whitepapers', count: 5, trend: '+8%' },
    { type: 'Designs', count: 42, trend: '+18%' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Published': 'bg-green-100 text-green-700',
      'In Review': 'bg-yellow-100 text-yellow-700',
      'Draft': 'bg-gray-100 text-gray-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Blog':
      case 'Whitepaper':
      case 'Case Study':
        return FileText;
      case 'Design':
      case 'Image':
        return Image;
      case 'Video':
        return Video;
      default:
        return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Marketing Content</h1>

        {/* Content Type Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {contentTypes.map((ct, idx) => (
            <div key={idx} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-4">
              <p className="text-gray-600 text-sm mb-1">{ct.type}</p>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-black">{ct.count}</p>
                <p className="text-green-600 text-sm font-semibold">{ct.trend}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filter */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-4 mb-6">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setType('all')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${type === 'all' ? 'bg-blue-600 =' : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'}`}
            >
              All Content
            </button>
            <button
              onClick={() => setType('Blog')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${type === 'Blog' ? 'bg-blue-600 =' : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'}`}
            >
              Blog Posts
            </button>
            <button
              onClick={() => setType('Video')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${type === 'Video' ? 'bg-blue-600 =' : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'}`}
            >
              Videos
            </button>
            <button
              onClick={() => setType('Design')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${type === 'Design' ? 'bg-blue-600 =' : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'}`}
            >
              Designs
            </button>
          </div>
        </div>

        {/* Content Table */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Title</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Performance</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Engagement</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Date</th>
              </tr>
            </thead>
            <tbody>
              {contentItems.map((item) => {
                const Icon = getTypeIcon(item.type);
                return (
                  <tr key={item.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="p-1 bg-gray-100 rounded">
                          <Icon size={16} className="text-gray-600" />
                        </div>
                        <p className="font-semibold text-black">{item.title}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-black">{item.type}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-black font-semibold">
                      {item.views && `${item.views.toLocaleString()} views`}
                      {item.downloads && `${item.downloads.toLocaleString()} downloads`}
                      {item.listens && `${item.listens.toLocaleString()} listens`}
                      {item.shares && `${item.shares.toLocaleString()} shares`}
                    </td>
                    <td className="px-6 py-4 text-green-600 font-bold">{item.engagement}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{item.date}</td>
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
