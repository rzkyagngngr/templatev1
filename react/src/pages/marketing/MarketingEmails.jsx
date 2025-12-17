import React, { useState } from 'react';
import { Mail, Send, Clock, CheckCircle } from 'lucide-react';

export default function MarketingEmails() {
  const [filter, setFilter] = useState('all');

  const campaigns = [
    { id: 'EMAIL-001', name: 'Welcome Series', recipients: 15420, sent: 15250, opens: 6540, clicks: 1850, rate: '42.3%', status: 'Sent' },
    { id: 'EMAIL-002', name: 'Black Friday Promo', recipients: 12850, sent: 12800, opens: 5500, clicks: 2100, rate: '42.8%', status: 'Active' },
    { id: 'EMAIL-003', name: 'Q4 Newsletter', recipients: 8960, sent: 8960, opens: 3200, clicks: 850, rate: '35.7%', status: 'Sent' },
    { id: 'EMAIL-004', name: 'Product Updates', recipients: 6240, sent: 4150, opens: 1850, clicks: 420, rate: '29.6%', status: 'In Progress' },
    { id: 'EMAIL-005', name: 'Re-engagement Campaign', recipients: 5800, sent: 5800, opens: 2100, clicks: 600, rate: '36.2%', status: 'Sent' },
    { id: 'EMAIL-006', name: 'Holiday Gift Guide', recipients: 9200, sent: 0, opens: 0, clicks: 0, rate: '0%', status: 'Scheduled' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Sent': 'bg-green-100 text-green-700',
      'Active': 'bg-blue-100 text-blue-700',
      'In Progress': 'bg-yellow-100 text-yellow-700',
      'Scheduled': 'bg-purple-100 text-purple-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const stats = [
    { label: 'Total Sent', value: '47,860', icon: Send, color: 'bg-blue-100' },
    { label: 'Avg Open Rate', value: '39.2%', icon: Mail, color: 'bg-green-100' },
    { label: 'Scheduled', value: 2, icon: Clock, color: 'bg-purple-100' },
    { label: 'Completed', value: 4, icon: CheckCircle, color: 'bg-green-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Marketing Emails</h1>

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

        {/* Filter */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-4 mb-6">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${filter === 'all' ? 'bg-blue-600 =' : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'}`}
            >
              All Campaigns
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${filter === 'active' ? 'bg-blue-600 =' : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'}`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter('sent')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${filter === 'sent' ? 'bg-blue-600 =' : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'}`}
            >
              Sent
            </button>
            <button
              onClick={() => setFilter('scheduled')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${filter === 'scheduled' ? 'bg-blue-600 =' : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'}`}
            >
              Scheduled
            </button>
          </div>
        </div>

        {/* Email Campaigns Table */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Campaign</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Recipients</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Sent</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Opens</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Clicks</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Rate</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black">{campaign.name}</td>
                  <td className="px-6 py-4 text-black">{campaign.recipients.toLocaleString()}</td>
                  <td className="px-6 py-4 text-black font-semibold">{campaign.sent.toLocaleString()}</td>
                  <td className="px-6 py-4 text-black">{campaign.opens.toLocaleString()}</td>
                  <td className="px-6 py-4 text-black">{campaign.clicks.toLocaleString()}</td>
                  <td className="px-6 py-4 text-green-600 font-bold">{campaign.rate}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(campaign.status)}`}>
                      {campaign.status}
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
