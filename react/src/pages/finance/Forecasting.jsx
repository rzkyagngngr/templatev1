import React from 'react';
import { TrendingUp, Plus, Filter, ArrowRight } from 'lucide-react';

export default function Forecasting() {
  const forecastData = [
    { month: 'Jan 2025', revenue: '$95,000', expenses: '$72,000', netIncome: '$23,000', confidence: '95%' },
    { month: 'Feb 2025', revenue: '$102,000', expenses: '$75,000', netIncome: '$27,000', confidence: '90%' },
    { month: 'Mar 2025', revenue: '$110,000', expenses: '$78,000', netIncome: '$32,000', confidence: '85%' },
    { month: 'Apr 2025', revenue: '$118,000', expenses: '$82,000', netIncome: '$36,000', confidence: '80%' },
    { month: 'May 2025', revenue: '$125,000', expenses: '$85,000', netIncome: '$40,000', confidence: '75%' },
    { month: 'Jun 2025', revenue: '$132,000', expenses: '$88,000', netIncome: '$44,000', confidence: '70%' },
  ];

  const scenarios = [
    { name: 'Base Case', probability: '60%', description: 'Most likely scenario based on current trends' },
    { name: 'Optimistic', probability: '25%', description: 'Growth exceeds expectations by 20%' },
    { name: 'Pessimistic', probability: '15%', description: 'Market downturn reduces revenue by 15%' },
  ];

  const kpIForecasts = [
    { metric: 'Revenue Growth', current: '+15.3%', forecast: '+18.5%', trend: 'up' },
    { metric: 'Gross Margin', current: '60.0%', forecast: '61.5%', trend: 'up' },
    { metric: 'Operating Margin', current: '37.9%', forecast: '38.2%', trend: 'up' },
    { metric: 'Cash Position', current: '$468,880', forecast: '$625,430', trend: 'up' },
  ];

  const years = ['2025', '2026', '2027', '2028', '2029'];
  const historicalRevenue = [580, 650, 730, 820, 920];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Forecasting</h1>
          <p className="text-gray-600 mt-2">Financial projections and scenario analysis</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur border border-gray-300 rounded-lg text-gray-900 hover:bg-white/60 transition-all">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-slate-900 rounded-lg hover:bg-blue-600 transition-all">
            <Plus className="w-4 h-4" />
            New Forecast
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">12-Month Revenue Forecast</p>
          <p className="text-3xl font-bold text-green-600 mt-2">$1,249,000</p>
          <p className="text-green-600 text-sm mt-1">+18.5% growth projected</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">12-Month Expense Forecast</p>
          <p className="text-3xl font-bold text-red-600 mt-2">$850,000</p>
          <p className="text-red-600 text-sm mt-1">+8.2% increase expected</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">12-Month Net Income Forecast</p>
          <p className="text-3xl font-bold text-green-600 mt-2">$399,000</p>
          <p className="text-green-600 text-sm mt-1">+29.3% improvement</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Forecast Confidence</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">87%</p>
          <p className="text-gray-700 text-sm mt-1">Based on 24 months data</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">6-Month Revenue Forecast</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2 px-3 text-gray-900 font-semibold">Month</th>
                  <th className="text-left py-2 px-3 text-gray-900 font-semibold">Revenue</th>
                  <th className="text-left py-2 px-3 text-gray-900 font-semibold">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {forecastData.map((forecast, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-white/20">
                    <td className="py-2 px-3 text-gray-900 font-medium">{forecast.month}</td>
                    <td className="py-2 px-3 text-gray-900 font-semibold">{forecast.revenue}</td>
                    <td className="py-2 px-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-1">
                          <div 
                            className="bg-green-500 h-1 rounded-full"
                            style={{ width: forecast.confidence }}
                          ></div>
                        </div>
                        <span className="text-gray-700 text-xs font-semibold">{forecast.confidence}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Key Metrics Forecast</h2>
          <div className="space-y-3">
            {kpIForecasts.map((kpi, idx) => (
              <div key={idx} className="p-3 bg-white/30 rounded border border-gray-300">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-gray-900 font-semibold text-sm">{kpi.metric}</p>
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-gray-700 text-xs">{kpi.current}</p>
                  <span className="text-gray-400">â†’</span>
                  <p className="text-green-600 text-xs font-semibold">{kpi.forecast}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Detailed 6-Month Forecast</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Month</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Revenue</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Expenses</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Net Income</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Confidence</th>
              </tr>
            </thead>
            <tbody>
              {forecastData.map((forecast, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-white/20">
                  <td className="py-3 px-4 text-gray-900 font-medium">{forecast.month}</td>
                  <td className="py-3 px-4 text-gray-900 font-semibold text-green-600">{forecast.revenue}</td>
                  <td className="py-3 px-4 text-gray-900 font-semibold text-red-600">{forecast.expenses}</td>
                  <td className="py-3 px-4 text-gray-900 font-bold">{forecast.netIncome}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${parseInt(forecast.confidence) >= 90 ? 'bg-green-500' : 'bg-blue-500'}`}
                          style={{ width: forecast.confidence }}
                        ></div>
                      </div>
                      <span className="text-gray-700 font-semibold text-sm">{forecast.confidence}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Scenario Analysis</h2>
          <div className="space-y-3">
            {scenarios.map((scenario, idx) => (
              <div key={idx} className="p-4 bg-white/30 rounded border border-gray-300 hover:border-gray-400">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-gray-900 font-bold">{scenario.name}</p>
                    <p className="text-gray-700 text-sm">{scenario.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2 ${
                    idx === 0 ? 'bg-blue-100 text-blue-800' : idx === 1 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {scenario.probability}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">5-Year Revenue Trend</h2>
          <div className="flex items-end gap-2 h-48 p-4">
            {years.map((year, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center justify-end">
                <div className="relative w-full flex flex-col items-center" style={{ height: '140px' }}>
                  <div 
                    className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"
                    style={{ height: `${(historicalRevenue[idx] / 920) * 100}%` }}
                  ></div>
                </div>
                <p className="text-gray-700 font-semibold mt-2">{year}</p>
                <p className="text-gray-600 text-xs">${historicalRevenue[idx] / 1000}B</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
