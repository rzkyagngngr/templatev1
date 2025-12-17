import React from 'react';
import { DollarSign, TrendingUp, Fuel, Zap } from 'lucide-react';

export default function LogisticsCosts() {
  const costBreakdown = [
    { id: 'COST-001', category: 'Fuel', amount: '$45,230', percentage: 35, icon: Fuel, color: 'bg-orange-100' },
    { id: 'COST-002', category: 'Labor', amount: '$38,500', percentage: 30, icon: Zap, color: 'bg-blue-100' },
    { id: 'COST-003', category: 'Maintenance', amount: '$25,680', percentage: 20, icon: TrendingUp, color: 'bg-green-100' },
    { id: 'COST-004', category: 'Operations', amount: '$19,090', percentage: 15, icon: DollarSign, color: 'bg-purple-100' },
  ];

  const monthlyData = [
    { month: 'October', cost: '$95,200' },
    { month: 'November', cost: '$102,500' },
    { month: 'December', cost: '$128,500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">Logistics Costs</h1>
          <p className="text-black text-opacity-70 mt-2">CREATED</p>
        </div>

        {/* Cost Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {costBreakdown.map((cost) => {
            const Icon = cost.icon;
            return (
              <div key={cost.id} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${cost.color} p-3 rounded-lg`}>
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-black text-opacity-70 text-sm">{cost.category}</p>
                    <p className="text-2xl font-bold text-black">{cost.amount}</p>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${cost.percentage}%` }}></div>
                </div>
                <p className="text-black text-opacity-60 text-xs mt-2">{cost.percentage}% of total</p>
              </div>
            );
          })}
        </div>

        {/* Monthly Costs */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <h2 className="text-xl font-bold text-black mb-6">Monthly Trends</h2>
          <div className="space-y-4">
            {monthlyData.map((data, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 rounded">
                <span className="font-semibold text-black">{data.month}</span>
                <span className="text-lg font-bold text-black">{data.cost}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
