import React, { useState } from 'react';
import { TrendingUp, Activity, BarChart3, PieChart } from 'lucide-react';

export default function QAMetrics() {
  const [metrics] = useState([
    { name: 'Test Execution Time', value: '2h 34m', trend: 'Down 12%', icon: Activity, color: 'text-blue-600' },
    { name: 'Code Coverage', value: '87.3%', trend: 'Up 2.1%', icon: TrendingUp, color: 'text-green-600' },
    { name: 'Defect Density', value: '2.1 per KLOC', trend: 'Down 0.3%', icon: BarChart3, color: 'text-orange-600' },
    { name: 'Test Case Pass Rate', value: '94.7%', trend: 'Up 1.2%', icon: PieChart, color: 'text-purple-600' }
  ]);

  const [detailedMetrics] = useState([
    { id: 1, metric: 'Avg Test Duration', value: '45.3s', goal: '40s', status: 'At Risk', lastWeek: '52.1s' },
    { id: 2, metric: 'Test Failure Rate', value: '5.3%', goal: '< 5%', status: 'At Risk', lastWeek: '4.8%' },
    { id: 3, metric: 'Test Reusability', value: '78%', goal: '> 80%', status: 'On Track', lastWeek: '75%' },
    { id: 4, metric: 'Automation Coverage', value: '82%', goal: '> 85%', status: 'At Risk', lastWeek: '79%' },
    { id: 5, metric: 'Defect Detection Ratio', value: '4.2:1', goal: '3:1', status: 'Excellent', lastWeek: '3.8:1' },
    { id: 6, metric: 'Test Case Effectiveness', value: '91.2%', goal: '> 90%', status: 'Excellent', lastWeek: '90.1%' }
  ]);

  const getStatusColor = (status) => {
    if (status === 'Excellent') return 'bg-green-100/50 text-green-700';
    if (status === 'On Track') return 'bg-blue-100/50 text-blue-700';
    return 'bg-red-100/50 text-red-700';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">QA Metrics</h1>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div key={idx} className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-gray-600 text-sm font-medium">{metric.name}</p>
                  <Icon className={`w-5 h-5 ${metric.color}`} />
                </div>
                <p className={`text-2xl font-bold ${metric.color} mb-2`}>{metric.value}</p>
                <p className="text-xs text-green-600 font-semibold">{metric.trend}</p>
              </div>
            );
          })}
        </div>

        {/* Detailed Metrics Table */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg overflow-hidden hover:bg-white/50 transition">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-4 px-6 text-black font-bold">Metric</th>
                <th className="text-left py-4 px-6 text-black font-bold">Current Value</th>
                <th className="text-left py-4 px-6 text-black font-bold">Goal</th>
                <th className="text-left py-4 px-6 text-black font-bold">Status</th>
                <th className="text-left py-4 px-6 text-black font-bold">Last Week</th>
              </tr>
            </thead>
            <tbody>
              {detailedMetrics.map((item, idx) => (
                <tr key={item.id} className={`border-b border-gray-300 hover:bg-white/30 ${idx % 2 === 0 ? 'bg-white/10' : ''}`}>
                  <td className="py-4 px-6 text-black font-medium">{item.metric}</td>
                  <td className="py-4 px-6 text-black font-bold text-lg">{item.value}</td>
                  <td className="py-4 px-6 text-black">{item.goal}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(item.status)}`}>{item.status}</span>
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-sm">{item.lastWeek}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
