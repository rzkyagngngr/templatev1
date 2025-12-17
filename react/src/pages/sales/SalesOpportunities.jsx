import React, { useState } from 'react';
import { Target, DollarSign, Calendar, CheckCircle } from 'lucide-react';

export default function SalesOpportunities() {
  const opportunities = [
    { id: 'OPP-001', name: 'Enterprise Platform Deal', account: 'Acme Corp', amount: '$250,000', probability: '75%', stage: 'Proposal', closDate: '2025-01-15', owner: 'John Smith' },
    { id: 'OPP-002', name: 'Integration Project', account: 'Tech Solutions', amount: '$125,000', probability: '50%', stage: 'Negotiation', closDate: '2025-02-01', owner: 'Sarah Lee' },
    { id: 'OPP-003', name: 'Software License', account: 'Global Trade', amount: '$75,000', probability: '90%', stage: 'Close', closDate: '2024-12-20', owner: 'Mike Chen' },
    { id: 'OPP-004', name: 'Consulting Services', account: 'Market Co', amount: '$50,000', probability: '25%', stage: 'Discovery', closDate: '2025-03-15', owner: 'Emily Davis' },
    { id: 'OPP-005', name: 'SaaS Implementation', account: 'Enterprise Plus', amount: '$180,000', probability: '60%', stage: 'Demo', closDate: '2025-01-30', owner: 'David Wilson' },
    { id: 'OPP-006', name: 'Support Package', account: 'Startup Labs', amount: '$35,000', probability: '40%', stage: 'Qualification', closDate: '2025-02-28', owner: 'Lisa White' },
  ];

  const getStageColor = (stage) => {
    const colors = {
      'Discovery': 'bg-blue-100 text-blue-700',
      'Qualification': 'bg-indigo-100 text-indigo-700',
      'Demo': 'bg-purple-100 text-purple-700',
      'Proposal': 'bg-orange-100 text-orange-700',
      'Negotiation': 'bg-yellow-100 text-yellow-700',
      'Close': 'bg-green-100 text-green-700',
    };
    return colors[stage] || 'bg-gray-100 text-gray-700';
  };

  const probabilityColor = (prob) => {
    const value = parseInt(prob);
    if (value >= 75) return 'text-green-600';
    if (value >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const stats = [
    { label: 'Total Pipeline', value: '$715,000', icon: Target, color: 'bg-blue-100' },
    { label: 'Weighted Pipeline', value: '$452,500', icon: DollarSign, color: 'bg-green-100' },
    { label: 'Avg Deal Size', value: '$119,167', icon: CheckCircle, color: 'bg-purple-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Sales Opportunities</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon size={24} className="text-gray-700" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold text-black">{stat.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Opportunities Table */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Opportunity</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Account</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Probability</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Stage</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Close Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Owner</th>
              </tr>
            </thead>
            <tbody>
              {opportunities.map((opp) => (
                <tr key={opp.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black">{opp.name}</td>
                  <td className="px-6 py-4 text-black">{opp.account}</td>
                  <td className="px-6 py-4 font-bold text-black">{opp.amount}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-12 bg-gray-200 rounded-full h-2">
                        <div className={`h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600`} style={{ width: opp.probability }}></div>
                      </div>
                      <span className={`font-bold text-sm ${probabilityColor(opp.probability)}`}>{opp.probability}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStageColor(opp.stage)}`}>
                      {opp.stage}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 flex items-center gap-1">
                    <Calendar size={16} />
                    {opp.closDate}
                  </td>
                  <td className="px-6 py-4 text-black">{opp.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
