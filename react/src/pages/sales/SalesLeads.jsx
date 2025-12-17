import React, { useState } from 'react';
import { TrendingUp, User, Target, Phone } from 'lucide-react';

export default function SalesLeads() {
  const [status, setStatus] = useState('all');

  const leads = [
    { id: 'LD-001', name: 'John Anderson', company: 'Tech Corp', email: 'john@techcorp.com', phone: '+1-555-0201', value: '$45,000', status: 'Hot', score: 95 },
    { id: 'LD-002', name: 'Sarah Chen', company: 'Innovation Labs', email: 'sarah@innovlab.com', phone: '+1-555-0202', value: '$32,000', status: 'Warm', score: 75 },
    { id: 'LD-003', name: 'Mike Johnson', company: 'Global Trade', email: 'mike@globaltrade.com', phone: '+1-555-0203', value: '$58,000', status: 'Hot', score: 88 },
    { id: 'LD-004', name: 'Emily Roberts', company: 'Market Co', email: 'emily@market.com', phone: '+1-555-0204', value: '$21,000', status: 'Cold', score: 45 },
    { id: 'LD-005', name: 'David Lee', company: 'Enterprise X', email: 'david@enterprisex.com', phone: '+1-555-0205', value: '$95,000', status: 'Hot', score: 92 },
    { id: 'LD-006', name: 'Lisa Wang', company: 'Start Ventures', email: 'lisa@startventures.com', phone: '+1-555-0206', value: '$15,500', status: 'Warm', score: 62 },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Hot': 'bg-red-100 text-red-700',
      'Warm': 'bg-yellow-100 text-yellow-700',
      'Cold': 'bg-blue-100 text-blue-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const scoreColor = (score) => {
    if (score >= 85) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const filteredLeads = status === 'all' ? leads : leads.filter(lead => lead.status === status);

  const stats = [
    { label: 'Total Leads', value: leads.length, icon: User, color: 'bg-blue-100' },
    { label: 'Hot Leads', value: leads.filter(l => l.status === 'Hot').length, icon: TrendingUp, color: 'bg-red-100' },
    { label: 'Pipeline Value', value: '$266,500', icon: Target, color: 'bg-green-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Sales Leads</h1>

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

        {/* Filter */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-4 mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setStatus('all')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                status === 'all' 
                  ? 'bg-blue-600 =' 
                  : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
              }`}
            >
              All Leads
            </button>
            <button
              onClick={() => setStatus('Hot')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                status === 'Hot' 
                  ? 'bg-red-600 =' 
                  : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
              }`}
            >
              Hot
            </button>
            <button
              onClick={() => setStatus('Warm')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                status === 'Warm' 
                  ? 'bg-yellow-600 =' 
                  : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
              }`}
            >
              Warm
            </button>
            <button
              onClick={() => setStatus('Cold')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                status === 'Cold' 
                  ? 'bg-blue-600 =' 
                  : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
              }`}
            >
              Cold
            </button>
          </div>
        </div>

        {/* Leads Table */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Lead ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Contact</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Company</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Phone</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Value</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Score</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black">{lead.id}</td>
                  <td className="px-6 py-4 text-black">{lead.name}</td>
                  <td className="px-6 py-4 text-black">{lead.company}</td>
                  <td className="px-6 py-4 text-blue-600">{lead.email}</td>
                  <td className="px-6 py-4 text-black flex items-center gap-1">
                    <Phone size={16} className="text-gray-500" />
                    {lead.phone}
                  </td>
                  <td className="px-6 py-4 font-bold text-black">{lead.value}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div className={`h-full rounded-full bg-gradient-to-r from-green-400 to-green-600`} style={{ width: `${lead.score}%` }}></div>
                      </div>
                      <span className={`font-bold ${scoreColor(lead.score)}`}>{lead.score}</span>
                    </div>
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
