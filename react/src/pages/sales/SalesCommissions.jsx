import React, { useState } from 'react';
import { DollarSign, TrendingUp, Users, Award } from 'lucide-react';

export default function SalesCommissions() {
  const [period, setPeriod] = useState('current');

  const commissions = [
    { id: 1, name: 'John Smith', sales: '$625,000', rate: '5%', earned: '$31,250', status: 'Paid', date: '2024-12-10' },
    { id: 2, name: 'Sarah Lee', sales: '$285,000', rate: '5%', earned: '$14,250', status: 'Pending', date: '2024-12-15' },
    { id: 3, name: 'Mike Chen', sales: '$475,000', rate: '6%', earned: '$28,500', status: 'Paid', date: '2024-12-10' },
    { id: 4, name: 'Emily Davis', sales: '$198,000', rate: '4%', earned: '$7,920', status: 'Pending', date: '2024-12-15' },
    { id: 5, name: 'David Wilson', sales: '$380,000', rate: '5%', earned: '$19,000', status: 'Approved', date: '2024-12-12' },
    { id: 6, name: 'Lisa White', sales: '$215,000', rate: '4%', earned: '$8,600', status: 'Paid', date: '2024-12-10' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Paid': 'bg-green-100 text-green-700',
      'Approved': 'bg-blue-100 text-blue-700',
      'Pending': 'bg-yellow-100 text-yellow-700',
      'Disputed': 'bg-red-100 text-red-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const stats = [
    { label: 'Total Commissioned', value: '$109,520', change: '+15%', icon: DollarSign, color: 'bg-green-100' },
    { label: 'Paid Out', value: '$82,700', change: '+12%', icon: TrendingUp, color: 'bg-blue-100' },
    { label: 'Pending', value: '$22,170', change: '+5%', icon: Users, color: 'bg-yellow-100' },
    { label: 'Commission Rate', value: 'Avg 4.8%', change: '-0.2%', icon: Award, color: 'bg-purple-100' },
  ];

  const commissionTiers = [
    { tier: 'Tier 1', target: '$0 - $100K', rate: '3%', bonus: 'No' },
    { tier: 'Tier 2', target: '$100K - $250K', rate: '4%', bonus: 'Yes - 0.5%' },
    { tier: 'Tier 3', target: '$250K - $500K', rate: '5%', bonus: 'Yes - 1%' },
    { tier: 'Tier 4', target: '$500K+', rate: '6%', bonus: 'Yes - 1.5%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Sales Commissions</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className={`${stat.color} p-2 rounded-lg`}>
                    <Icon size={20} className="text-gray-700" />
                  </div>
                  <span className="text-green-600 text-sm font-semibold">{stat.change}</span>
                </div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-black">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Period Filter */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-4 mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setPeriod('current')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                period === 'current'
                  ? 'bg-blue-600 ='
                  : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
              }`}
            >
              Current Period
            </button>
            <button
              onClick={() => setPeriod('previous')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                period === 'previous'
                  ? 'bg-blue-600 ='
                  : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
              }`}
            >
              Previous Period
            </button>
            <button
              onClick={() => setPeriod('year')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                period === 'year'
                  ? 'bg-blue-600 ='
                  : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
              }`}
            >
              Year to Date
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Commission Tiers */}
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-300 bg-white/50">
              <h3 className="font-bold text-black">Commission Tiers</h3>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300 bg-white/50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Tier</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Sales Target</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Rate</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Bonus</th>
                </tr>
              </thead>
              <tbody>
                {commissionTiers.map((tier, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-white/50 transition">
                    <td className="px-6 py-4 font-semibold text-black">{tier.tier}</td>
                    <td className="px-6 py-4 text-black">{tier.target}</td>
                    <td className="px-6 py-4 text-black font-bold text-lg">{tier.rate}</td>
                    <td className="px-6 py-4 text-black">{tier.bonus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-bold text-black mb-4">Commission Summary</h3>
            <div className="space-y-4">
              <div className="pb-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-600">Gross Commission</p>
                  <p className="text-2xl font-bold text-black">$109,520</p>
                </div>
              </div>
              <div className="pb-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-600">Adjustments</p>
                  <p className="text-lg font-bold text-red-600">-$3,400</p>
                </div>
              </div>
              <div className="pb-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-600">Bonuses</p>
                  <p className="text-lg font-bold text-green-600">+$5,200</p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-600 font-semibold">Net Commission</p>
                  <p className="text-3xl font-bold text-black">$111,320</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commissions Table */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-300 bg-white/50">
            <h3 className="font-bold text-black">Commission Details</h3>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Sales Rep</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Sales</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Rate</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Earned</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Date</th>
              </tr>
            </thead>
            <tbody>
              {commissions.map((comm) => (
                <tr key={comm.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black">{comm.name}</td>
                  <td className="px-6 py-4 text-black font-semibold">{comm.sales}</td>
                  <td className="px-6 py-4 text-black font-bold">{comm.rate}</td>
                  <td className="px-6 py-4 text-black font-bold text-lg">{comm.earned}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(comm.status)}`}>
                      {comm.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{comm.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
