import React, { useState } from 'react';
import { BarChart3, PieChart, TrendingUp, Activity } from 'lucide-react';

export default function SalesAnalytics() {
  const [timeframe, setTimeframe] = useState('month');

  const topMetrics = [
    { metric: 'Revenue Growth', value: '+18.5%', color: 'text-green-600' },
    { metric: 'Avg Deal Size', value: '$4,125', color: 'text-blue-600' },
    { metric: 'Win Rate', value: '38.2%', color: 'text-purple-600' },
    { metric: 'Sales Cycle', value: '45 days', color: 'text-orange-600' },
  ];

  const channelPerformance = [
    { channel: 'Direct Sales', revenue: '$450K', percentage: '35%', trend: 'up' },
    { channel: 'Partnerships', revenue: '$380K', percentage: '29%', trend: 'up' },
    { channel: 'Online', revenue: '$310K', percentage: '24%', trend: 'stable' },
    { channel: 'Resellers', revenue: '$120K', percentage: '12%', trend: 'down' },
  ];

  const productAnalytics = [
    { product: 'Enterprise Edition', sales: 450, revenue: '$675K', margin: '45%', trend: '+12%' },
    { product: 'Professional Edition', sales: 680, revenue: '$476K', margin: '38%', trend: '+8%' },
    { product: 'Standard Edition', sales: 920, revenue: '$368K', margin: '32%', trend: '+15%' },
    { product: 'Support Services', sales: 340, revenue: '$255K', margin: '52%', trend: '+5%' },
  ];

  const regionData = [
    { region: 'North America', revenue: '$520K', growth: '+14%', market: '38%' },
    { region: 'Europe', revenue: '$380K', growth: '+21%', market: '28%' },
    { region: 'Asia Pacific', revenue: '$290K', growth: '+18%', market: '21%' },
    { region: 'Other', revenue: '$160K', growth: '+8%', market: '12%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Sales Analytics</h1>

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

        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {topMetrics.map((metric, idx) => (
            <div key={idx} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
              <p className="text-gray-600 text-sm mb-2">{metric.metric}</p>
              <p className={`text-3xl font-bold ${metric.color}`}>{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Channel Performance */}
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
              <PieChart size={20} />
              Channel Performance
            </h3>
            <div className="space-y-4">
              {channelPerformance.map((channel, idx) => (
                <div key={idx} className="pb-4 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-black">{channel.channel}</p>
                    <p className="text-black font-bold">{channel.revenue}</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                      style={{ width: channel.percentage }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{channel.percentage}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Performance */}
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
              <Activity size={20} />
              Regional Performance
            </h3>
            <div className="space-y-4">
              {regionData.map((region, idx) => (
                <div key={idx} className="pb-4 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-black">{region.region}</p>
                    <span className="text-green-600 font-semibold text-sm">{region.growth}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-black font-bold">{region.revenue}</span>
                    <span className="text-gray-600">({region.market} of market)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Analytics */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-300 bg-white/50">
            <h3 className="font-bold text-black flex items-center gap-2">
              <BarChart3 size={20} />
              Product Analytics
            </h3>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Product</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Sales</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Revenue</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Margin</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Trend</th>
              </tr>
            </thead>
            <tbody>
              {productAnalytics.map((product, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black">{product.product}</td>
                  <td className="px-6 py-4 text-black">{product.sales}</td>
                  <td className="px-6 py-4 text-black font-bold">{product.revenue}</td>
                  <td className="px-6 py-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-full rounded-full bg-green-500"
                        style={{ width: product.margin }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-600 mt-1 block">{product.margin}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-bold ${product.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {product.trend}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Key Insights */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <h3 className="text-lg font-bold text-black mb-4">Key Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="pb-4 border-b border-gray-200 md:border-b-0 md:pr-4 md:border-r">
              <p className="text-gray-600 text-sm mb-1">Top Performer</p>
              <p className="text-lg font-bold text-black">Mike Chen - 110% of Target</p>
            </div>
            <div className="pb-4 border-b border-gray-200 md:border-b-0 md:pl-4">
              <p className="text-gray-600 text-sm mb-1">Best Channel</p>
              <p className="text-lg font-bold text-black">Direct Sales - $450K Revenue</p>
            </div>
            <div className="pt-4 pr-4 border-t border-gray-200 md:border-t-0 md:border-r">
              <p className="text-gray-600 text-sm mb-1">Best Product</p>
              <p className="text-lg font-bold text-black">Enterprise Edition - 45% Margin</p>
            </div>
            <div className="pt-4 pl-4 border-t border-gray-200 md:border-t-0">
              <p className="text-gray-600 text-sm mb-1">Growth Region</p>
              <p className="text-lg font-bold text-black">Europe - 21% Growth YoY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
