import React, { useState } from 'react';
import { Heart, Share2, MessageCircle, TrendingUp } from 'lucide-react';

export default function MarketingSocial() {
  const platforms = [
    { platform: 'Facebook', followers: '125K', posts: 145, engagement: '4.2%', reach: '520K' },
    { platform: 'Instagram', followers: '89K', posts: 210, engagement: '6.8%', reach: '380K' },
    { platform: 'Twitter/X', followers: '42K', posts: 380, engagement: '3.5%', reach: '185K' },
    { platform: 'LinkedIn', followers: '67K', posts: 95, engagement: '5.1%', reach: '290K' },
    { platform: 'TikTok', followers: '34K', posts: 120, engagement: '8.2%', reach: '450K' },
    { platform: 'YouTube', followers: '18K', posts: 28, engagement: '7.4%', reach: '220K' },
  ];

  const topPosts = [
    { platform: 'Instagram', title: 'Product Launch Announcement', likes: 3240, comments: 450, shares: 890, date: '2024-12-14' },
    { platform: 'TikTok', title: 'Behind the Scenes Video', likes: 5600, comments: 720, shares: 1200, date: '2024-12-13' },
    { platform: 'Facebook', title: 'Year-End Sale Announcement', likes: 2100, comments: 320, shares: 580, date: '2024-12-12' },
    { platform: 'LinkedIn', title: 'Industry Insights Article', likes: 1850, comments: 280, shares: 420, date: '2024-12-11' },
  ];

  const stats = [
    { label: 'Total Followers', value: '375K', icon: Heart, color: 'bg-red-100' },
    { label: 'Total Engagement', value: '42.3K', icon: MessageCircle, color: 'bg-blue-100' },
    { label: 'Avg Reach', value: '2.04M', icon: TrendingUp, color: 'bg-green-100' },
    { label: 'Share Growth', value: '+15.2%', icon: Share2, color: 'bg-purple-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Social Media Marketing</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`${stat.color} p-2 rounded-lg`}>
                    <Icon size={20} className="text-gray-700" />
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-black">{stat.value}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Platform Performance */}
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-300 bg-white/50">
              <h3 className="font-bold text-black">Platform Performance</h3>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300 bg-white/50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Platform</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Followers</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Engagement</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Reach</th>
                </tr>
              </thead>
              <tbody>
                {platforms.map((p, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-white/50 transition">
                    <td className="px-6 py-4 font-semibold text-black">{p.platform}</td>
                    <td className="px-6 py-4 text-black">{p.followers}</td>
                    <td className="px-6 py-4 text-black font-bold">{p.engagement}</td>
                    <td className="px-6 py-4 text-black">{p.reach}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Top Posts */}
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-bold text-black mb-4">Top Performing Posts</h3>
            <div className="space-y-3">
              {topPosts.map((post, idx) => (
                <div key={idx} className="pb-3 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm font-bold text-black bg-purple-100 w-fit px-2 py-1 rounded mb-1">{post.platform}</p>
                      <p className="font-semibold text-black text-sm">{post.title}</p>
                    </div>
                    <p className="text-xs text-gray-600">{post.date}</p>
                  </div>
                  <div className="flex gap-4 text-xs text-gray-600">
                    <span>â¤ï¸ {post.likes.toLocaleString()}</span>
                    <span>ðŸ’¬ {post.comments.toLocaleString()}</span>
                    <span>â†—ï¸ {post.shares.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Calendar Preview */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <h3 className="text-lg font-bold text-black mb-4">Social Content Schedule</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
              <div key={idx} className="text-center pb-4 border-b border-gray-200">
                <p className="font-semibold text-black mb-2">{day}</p>
                <div className="space-y-2">
                  <div className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Facebook</div>
                  <div className="bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded">Instagram</div>
                  <div className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded">TikTok</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
