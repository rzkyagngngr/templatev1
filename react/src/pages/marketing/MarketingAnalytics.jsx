import React, { useState } from 'react';
import { LineChart, PieChart, BarChart3, TrendingUp } from 'lucide-react';

export default function MarketingAnalytics() {
  const [timeframe, setTimeframe] = useState('month');

  const keyMetrics = [
    { metric: 'Website Traffic', value: '125.4K', change: '+18.5%' },
    { metric: 'Lead Quality Score', value: '7.8/10', change: '+1.2' },
    { metric: 'Conversion Rate', value: '3.24%', change: '+0.5%' },
    { metric: 'Customer Acquisition Cost', value: '$45', change: '-8%' },
  ];

  const channelMetrics = [
    { channel: 'Organic Search', traffic: '45.2K', conversion: '4.2%', cost: '$8,200', roi: '420%' },
    { channel: 'Paid Ads', traffic: '32.8K', conversion: '3.8%', cost: '$15,400', roi: '285%' },
    { channel: 'Email', traffic: '28.1K', conversion: '2.9%', cost: '$3,200', roi: '580%' },
    { channel: 'Social Media', traffic: '19.3K', conversion: '2.1%', cost: '$6,800', roi: '215%' },
  ];

  const campaignPerformance = [
    { campaign: 'Q4 Holiday', reach: '450K', engagement: '5.2%', leads: 1240, conversions: 285 },
    { campaign: 'Brand Awareness', reach: '1.2M', engagement: '3.8%', leads: 2100, conversions: 420 },
    { campaign: 'Product Launch', reach: '220K', engagement: '6.1%', leads: 340, conversions: 95 },
    { campaign: 'Email Campaign', reach: '580K', engagement: '4.5%', leads: 890, conversions: 180 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Marketing Analytics</h1>

        {/* Timeframe Filter */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-4 mb-8">
          <div className="flex gap-2">
            <button
              onClick={() => setTimeframe('week')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                timeframe === 'week'
                  ? 'bg-blue-600 ='
                  : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setTimeframe('month')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                timeframe === 'month'
                  ? 'bg-blue-600 ='
                  : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setTimeframe('quarter')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                timeframe === 'quarter'
                  ? 'bg-blue-600 ='
                  : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
              }`}
            >
              Quarterly
            </button>
            <button
              onClick={() => setTimeframe('year')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                timeframe === 'year'
                  ? 'bg-blue-600 ='
                  : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {keyMetrics.map((metric, idx) => (
            <div key={idx} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
              <p className="text-gray-600 text-sm mb-2">{metric.metric}</p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-black">{metric.value}</p>
                <span className="text-green-600 text-sm font-bold">{metric.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Channel Performance */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-300 bg-white/50 flex items-center gap-2">
            <BarChart3 size={20} className="text-gray-700" />
            <h3 className="font-bold text-black">Channel Performance</h3>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Channel</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Traffic</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Conversion</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Cost</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">ROI</th>
              </tr>
            </thead>
            <tbody>
              {channelMetrics.map((ch, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black">{ch.channel}</td>
                  <td className="px-6 py-4 text-black">{ch.traffic}</td>
                  <td className="px-6 py-4 text-black font-bold">{ch.conversion}</td>
                  <td className="px-6 py-4 text-black">{ch.cost}</td>
                  <td className="px-6 py-4 text-green-600 font-bold">{ch.roi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Campaign Performance */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-300 bg-white/50 flex items-center gap-2">
            <TrendingUp size={20} className="text-gray-700" />
            <h3 className="font-bold text-black">Campaign Performance</h3>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Campaign</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Reach</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Engagement</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Leads</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Conversions</th>
              </tr>
            </thead>
            <tbody>
              {campaignPerformance.map((camp, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black">{camp.campaign}</td>
                  <td className="px-6 py-4 text-black">{camp.reach}</td>
                  <td className="px-6 py-4 text-black font-bold">{camp.engagement}</td>
                  <td className="px-6 py-4 text-black">{camp.leads.toLocaleString()}</td>
                  <td className="px-6 py-4 text-green-600 font-bold">{camp.conversions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
