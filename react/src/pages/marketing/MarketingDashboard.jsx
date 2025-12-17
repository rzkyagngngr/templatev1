import React, { useState } from 'react';
import { TrendingUp, Users, Eye, BarChart3 } from 'lucide-react';

export default function MarketingDashboard() {
  const metrics = [
    { label: 'Total Reach', value: '2.4M', change: '+15.3%', icon: Users, color: 'bg-blue-100' },
    { label: 'Engagement Rate', value: '4.8%', change: '+2.1%', icon: TrendingUp, color: 'bg-green-100' },
    { label: 'Total Impressions', value: '8.3M', change: '+22%', icon: Eye, color: 'bg-purple-100' },
    { label: 'Lead Generation', value: '2,450', change: '+18.5%', icon: BarChart3, color: 'bg-orange-100' },
  ];

  const campaigns = [
    { id: 1, name: 'Q4 Holiday Campaign', status: 'Active', reach: '450K', engagement: '5.2%', conversions: 1240 },
    { id: 2, name: 'Brand Awareness 2024', status: 'Active', reach: '1.2M', engagement: '3.8%', conversions: 2100 },
    { id: 3, name: 'Product Launch Social', status: 'Planning', reach: '220K', engagement: '6.1%', conversions: 340 },
    { id: 4, name: 'Email Newsletter Q4', status: 'Active', reach: '580K', engagement: '4.5%', conversions: 890 },
  ];

  const channels = [
    { channel: 'Email', audience: '145K', rate: '3.2%', value: 'High' },
    { channel: 'Social Media', audience: '890K', rate: '5.8%', value: 'Very High' },
    { channel: 'Content', audience: '320K', rate: '2.1%', value: 'Medium' },
    { channel: 'Paid Ads', audience: '1.05M', rate: '4.3%', value: 'High' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Marketing Dashboard</h1>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6 hover:bg-white/80 transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`${metric.color} p-3 rounded-lg`}>
                    <Icon size={24} className="text-gray-700" />
                  </div>
                  <span className="text-green-600 text-sm font-semibold">{metric.change}</span>
                </div>
                <p className="text-gray-600 text-sm mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-black">{metric.value}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Campaigns */}
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <h2 className="text-xl font-bold text-black mb-4">Active Campaigns</h2>
            <div className="space-y-3">
              {campaigns.map((campaign) => (
                <div key={campaign.id} className="flex items-center justify-between p-3 bg-white/50 rounded border border-gray-200">
                  <div>
                    <p className="font-semibold text-black">{campaign.name}</p>
                    <p className="text-xs text-gray-600">Reach: {campaign.reach}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-600 mb-1">Conversions</p>
                    <p className="font-bold text-black">{campaign.conversions}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Channels */}
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <h2 className="text-xl font-bold text-black mb-4">Performance by Channel</h2>
            <div className="space-y-3">
              {channels.map((ch, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-white/50 rounded border border-gray-200">
                  <div>
                    <p className="font-semibold text-black">{ch.channel}</p>
                    <p className="text-xs text-gray-600">Audience: {ch.audience}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-black">{ch.rate}</p>
                    <p className={`text-xs font-semibold ${ch.value === 'Very High' ? 'text-green-600' : ch.value === 'High' ? 'text-blue-600' : 'text-gray-600'}`}>
                      {ch.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
