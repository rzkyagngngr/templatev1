import React, { useState } from 'react';
import { Users, Target, BarChart3, TrendingUp } from 'lucide-react';

export default function MarketingSegments() {
  const segments = [
    { id: 1, name: 'Enterprise Customers', audience: 245, growth: '+12%', lifetime: '$45,230', engagement: '6.8%' },
    { id: 2, name: 'SMB Decision Makers', audience: 1850, growth: '+8%', lifetime: '$12,450', engagement: '4.2%' },
    { id: 3, name: 'Recent Sign-ups', audience: 3240, growth: '+25%', lifetime: '$5,680', engagement: '8.1%' },
    { id: 4, name: 'High-Value Prospects', audience: 620, growth: '+15%', lifetime: '$28,900', engagement: '5.4%' },
    { id: 5, name: 'Inactive Users', audience: 2180, growth: '-5%', lifetime: '$8,340', engagement: '1.2%' },
    { id: 6, name: 'Trial Users', audience: 4520, growth: '+18%', lifetime: '$3,210', engagement: '7.6%' },
  ];

  const segmentationMethods = [
    { method: 'Demographic', segments: 8, size: '8,420 users' },
    { method: 'Behavioral', segments: 12, size: '10,850 users' },
    { method: 'Firmographic', segments: 6, size: '3,240 users' },
    { method: 'Geographic', segments: 15, size: '12,100 users' },
  ];

  const stats = [
    { label: 'Total Segments', value: '6', icon: Target, color: 'bg-blue-100' },
    { label: 'Active Audiences', value: '12.3K', icon: Users, color: 'bg-green-100' },
    { label: 'Avg Engagement', value: '5.5%', icon: BarChart3, color: 'bg-purple-100' },
    { label: 'Growth Rate', value: '+12.2%', icon: TrendingUp, color: 'bg-orange-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Marketing Segments</h1>

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
          {/* Primary Segments */}
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-300 bg-white/50">
              <h3 className="font-bold text-black">Primary Segments</h3>
            </div>
            <div className="p-6 space-y-4">
              {segments.slice(0, 3).map((seg) => (
                <div key={seg.id} className="pb-4 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-black">{seg.name}</p>
                    <span className="text-green-600 font-bold text-sm">{seg.growth}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div>
                      <p className="text-gray-600">Audience</p>
                      <p className="font-bold text-black">{seg.audience.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Lifetime</p>
                      <p className="font-bold text-black">{seg.lifetime}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Engagement</p>
                      <p className="font-bold text-black">{seg.engagement}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Segmentation Methods */}
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-300 bg-white/50">
              <h3 className="font-bold text-black">Segmentation Methods</h3>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300 bg-white/50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Method</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Segments</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Size</th>
                </tr>
              </thead>
              <tbody>
                {segmentationMethods.map((method, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-white/50 transition">
                    <td className="px-6 py-4 font-semibold text-black">{method.method}</td>
                    <td className="px-6 py-4 text-black">{method.segments}</td>
                    <td className="px-6 py-4 text-black font-bold">{method.size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* All Segments */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-300 bg-white/50">
            <h3 className="font-bold text-black">All Segments</h3>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Segment Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Audience Size</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Growth</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Lifetime Value</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Engagement</th>
              </tr>
            </thead>
            <tbody>
              {segments.map((segment) => (
                <tr key={segment.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black">{segment.name}</td>
                  <td className="px-6 py-4 text-black">{segment.audience.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className={`font-bold ${segment.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {segment.growth}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-black font-bold">{segment.lifetime}</td>
                  <td className="px-6 py-4 text-black font-bold">{segment.engagement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
