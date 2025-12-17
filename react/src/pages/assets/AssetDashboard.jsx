import React from 'react';
import { TrendingUp, DollarSign, AlertCircle, CheckCircle } from 'lucide-react';

export default function AssetDashboard() {
  const stats = [
    { label: 'Total Assets', value: '2,450', icon: TrendingUp, color: 'bg-blue-100' },
    { label: 'Total Value', value: '$12.5M', icon: DollarSign, color: 'bg-green-100' },
    { label: 'Maintenance Due', value: '23', icon: AlertCircle, color: 'bg-orange-100' },
    { label: 'Status Verified', value: '98%', icon: CheckCircle, color: 'bg-purple-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Asset Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-black text-sm font-medium">{stat.label}</p>
                    <p className="text-black text-2xl font-bold mt-2">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="text-black" size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-green-500 text-slate-900 text-xs px-2 py-1 rounded">CREATED</span>
            <p className="text-black font-semibold">Asset Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}
