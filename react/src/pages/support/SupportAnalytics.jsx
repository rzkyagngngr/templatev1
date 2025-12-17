import React from 'react';
import { BarChart3, TrendingUp, PieChart, Calendar } from 'lucide-react';

export default function SupportAnalytics() {
  const metrics = [
    { label: 'Total Tickets', value: '892', trend: '+12%', icon: BarChart3 },
    { label: 'Avg Resolution Time', value: '18h', trend: '-5%', icon: TrendingUp },
    { label: 'Customer Satisfaction', value: '94%', trend: '+3%', icon: PieChart },
    { label: 'First Response Time', value: '2.5h', trend: '-8%', icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Analytics - CREATED</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div key={idx} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-black mb-2">{metric.label}</p>
                    <p className="text-3xl font-bold text-black">{metric.value}</p>
                    <p className="text-sm text-green-600 mt-2">{metric.trend}</p>
                  </div>
                  <Icon className="w-6 h-6 text-black" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <h2 className="text-xl font-bold text-black mb-4">Reports</h2>
          <p className="text-black">Analytics charts and reports will be displayed here...</p>
        </div>
      </div>
    </div>
  );
}
