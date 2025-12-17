import React, { useState } from 'react';
import { TrendingUp, Calendar, Target, AlertCircle } from 'lucide-react';

export default function SalesForecasting() {
  const [timeframe, setTimeframe] = useState('quarterly');

  const forecasts = [
    { quarter: 'Q1 2025', forecast: '$1.8M', actual: null, variance: null, confidence: '92%', trend: 'up' },
    { quarter: 'Q2 2025', forecast: '$2.1M', actual: null, variance: null, confidence: '85%', trend: 'up' },
    { quarter: 'Q3 2025', forecast: '$2.4M', actual: null, variance: null, confidence: '78%', trend: 'stable' },
    { quarter: 'Q4 2025', forecast: '$2.7M', actual: null, variance: null, confidence: '65%', trend: 'up' },
  ];

  const historicalData = [
    { period: 'Q4 2024', forecast: '$1.5M', actual: '$1.6M', variance: '+6.7%', accurate: true },
    { period: 'Q3 2024', forecast: '$1.3M', actual: '$1.28M', variance: '-1.5%', accurate: true },
    { period: 'Q2 2024', forecast: '$1.2M', actual: '$1.25M', variance: '+4.2%', accurate: true },
    { period: 'Q1 2024', forecast: '$1.0M', actual: '$1.05M', variance: '+5.0%', accurate: true },
  ];

  const byProduct = [
    { product: 'Enterprise License', forecast: '$650K', contribution: '32%', growth: '+15%' },
    { product: 'Professional Services', forecast: '$480K', contribution: '24%', growth: '+10%' },
    { product: 'Support & Maintenance', forecast: '$520K', contribution: '26%', growth: '+8%' },
    { product: 'Consulting', forecast: '$350K', contribution: '18%', growth: '+12%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Sales Forecasting</h1>

        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={20} className="text-blue-600" />
              <p className="text-gray-600 text-sm">Annual Forecast</p>
            </div>
            <p className="text-3xl font-bold text-black">$9.0M</p>
            <p className="text-green-600 font-semibold text-sm mt-2">+12.5% YoY Growth</p>
          </div>
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <Target size={20} className="text-green-600" />
              <p className="text-gray-600 text-sm">Confidence Level</p>
            </div>
            <p className="text-3xl font-bold text-black">84%</p>
            <p className="text-gray-600 text-sm mt-2">Based on 4 quarters</p>
          </div>
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle size={20} className="text-orange-600" />
              <p className="text-gray-600 text-sm">Forecast Accuracy</p>
            </div>
            <p className="text-3xl font-bold text-black">94%</p>
            <p className="text-green-600 text-sm mt-2">Historical average</p>
          </div>
        </div>

        {/* Timeframe Filter */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-4 mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setTimeframe('quarterly')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                timeframe === 'quarterly'
                  ? 'bg-blue-600 ='
                  : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
              }`}
            >
              Quarterly
            </button>
            <button
              onClick={() => setTimeframe('monthly')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                timeframe === 'monthly'
                  ? 'bg-blue-600 ='
                  : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setTimeframe('annual')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                timeframe === 'annual'
                  ? 'bg-blue-600 ='
                  : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Forecasts */}
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-300 bg-white/50">
              <h3 className="font-bold text-black">Q1-Q4 2025 Forecast</h3>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300 bg-white/50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Quarter</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Forecast</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {forecasts.map((forecast, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-white/50 transition">
                    <td className="px-6 py-4 font-semibold text-black">{forecast.quarter}</td>
                    <td className="px-6 py-4 text-black">{forecast.forecast}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-12 bg-gray-200 rounded-full h-2">
                          <div
                            className="h-full rounded-full bg-green-500"
                            style={{ width: forecast.confidence }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-black">{forecast.confidence}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* By Product */}
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-300 bg-white/50">
              <h3 className="font-bold text-black">Forecast by Product</h3>
            </div>
            <div className="p-6 space-y-4">
              {byProduct.map((item, idx) => (
                <div key={idx} className="pb-4 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-black">{item.product}</p>
                    <p className="text-black font-bold">{item.forecast}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <div className="flex gap-2">
                      <span className="text-gray-600">{item.contribution}</span>
                      <span className="text-green-600 font-semibold">{item.growth}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: item.contribution }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Historical Accuracy */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden mt-6">
          <div className="px-6 py-4 border-b border-gray-300 bg-white/50">
            <h3 className="font-bold text-black">Historical Forecast Accuracy</h3>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Period</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Forecast</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Actual</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Variance</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
              </tr>
            </thead>
            <tbody>
              {historicalData.map((data, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black">{data.period}</td>
                  <td className="px-6 py-4 text-black">{data.forecast}</td>
                  <td className="px-6 py-4 text-black">{data.actual}</td>
                  <td className="px-6 py-4 font-semibold text-green-600">{data.variance}</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      Accurate
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
