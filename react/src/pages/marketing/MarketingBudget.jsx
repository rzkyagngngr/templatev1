import React, { useState } from 'react';
import { DollarSign, TrendingUp, AlertCircle, PieChart } from 'lucide-react';

export default function MarketingBudget() {
  const [view, setView] = useState('allocation');

  const departments = [
    { dept: 'Digital Advertising', allocated: '$85,000', spent: '$72,340', utilization: '85%', status: 'On Track' },
    { dept: 'Content Creation', allocated: '$45,000', spent: '$38,920', utilization: '86%', status: 'On Track' },
    { dept: 'Events & Sponsorships', allocated: '$60,000', spent: '$52,100', utilization: '87%', status: 'On Track' },
    { dept: 'Social Media', allocated: '$35,000', spent: '$28,450', utilization: '81%', status: 'Under Budget' },
    { dept: 'Email Marketing', allocated: '$15,000', spent: '$14,200', utilization: '95%', status: 'Near Limit' },
    { dept: 'Analytics & Tools', allocated: '$25,000', spent: '$23,850', utilization: '95%', status: 'Near Limit' },
  ];

  const budgetTrends = [
    { month: 'September', budget: '$215K', spent: '$180K', percentage: 84 },
    { month: 'October', budget: '$225K', spent: '$195K', percentage: 87 },
    { month: 'November', budget: '$235K', spent: '$208K', percentage: 88 },
    { month: 'December', budget: '$245K', spent: '$231K', percentage: 94 },
  ];

  const stats = [
    { label: 'Total Budget', value: '$265K', icon: DollarSign, color: 'bg-blue-100' },
    { label: 'Spent YTD', value: '$1.92M', icon: TrendingUp, color: 'bg-green-100' },
    { label: 'Remaining', value: '$34K', icon: AlertCircle, color: 'bg-yellow-100' },
    { label: 'ROI', value: '385%', icon: PieChart, color: 'bg-purple-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Marketing Budget</h1>

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

        {/* View Toggle */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-4 mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setView('allocation')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                view === 'allocation'
                  ? 'bg-blue-600 ='
                  : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
              }`}
            >
              Allocation
            </button>
            <button
              onClick={() => setView('spending')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                view === 'spending'
                  ? 'bg-blue-600 ='
                  : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
              }`}
            >
              Spending Trends
            </button>
            <button
              onClick={() => setView('roi')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                view === 'roi'
                  ? 'bg-blue-600 ='
                  : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
              }`}
            >
              ROI Analysis
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Budget Allocation */}
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-bold text-black mb-4">Current Allocation</h3>
            <div className="space-y-3">
              {departments.slice(0, 3).map((dept, idx) => (
                <div key={idx} className="pb-3 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-black">{dept.dept}</p>
                    <p className="text-black font-bold">${dept.allocated.slice(1)}</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="h-full rounded-full bg-blue-500" style={{ width: `${Math.min(85, 100)}%` }}></div>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{dept.utilization} utilized</div>
                </div>
              ))}
            </div>
          </div>

          {/* Spending Summary */}
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-bold text-black mb-4">Monthly Summary</h3>
            <div className="space-y-4">
              <div className="pb-4 border-b border-gray-200">
                <p className="text-gray-600 text-sm mb-1">Monthly Budget</p>
                <p className="text-2xl font-bold text-black">$265,000</p>
              </div>
              <div className="pb-4 border-b border-gray-200">
                <p className="text-gray-600 text-sm mb-1">Month to Date Spent</p>
                <p className="text-2xl font-bold text-black">$231,200</p>
              </div>
              <div className="pb-4 border-b border-gray-200">
                <p className="text-gray-600 text-sm mb-1">Remaining Budget</p>
                <p className="text-2xl font-bold text-green-600">$33,800</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Burn Rate</p>
                <p className="text-2xl font-bold text-blue-600">87.3%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Department Budget Table */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-300 bg-white/50">
            <h3 className="font-bold text-black">Department Budget Breakdown</h3>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Department</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Allocated</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Spent</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Utilization</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black">{dept.dept}</td>
                  <td className="px-6 py-4 text-black font-bold">{dept.allocated}</td>
                  <td className="px-6 py-4 text-black">{dept.spent}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className="h-full rounded-full bg-blue-500"
                          style={{ width: dept.utilization }}
                        ></div>
                      </div>
                      <span className="text-sm font-bold text-black">{dept.utilization}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      dept.status === 'On Track' ? 'bg-green-100 text-green-700' :
                      dept.status === 'Under Budget' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {dept.status}
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
