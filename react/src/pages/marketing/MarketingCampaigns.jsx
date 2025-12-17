import React, { useState } from 'react';
import { Search, Filter, Plus, Play, Pause } from 'lucide-react';

export default function MarketingCampaigns() {
  const [status, setStatus] = useState('all');

  const campaigns = [
    { id: 'CAM-001', name: 'Q4 Holiday Campaign', type: 'Multi-Channel', status: 'Active', start: '2024-11-15', end: '2025-01-05', budget: '$25,000', roi: '320%' },
    { id: 'CAM-002', name: 'Brand Awareness 2024', type: 'Social Media', status: 'Active', start: '2024-09-01', end: '2025-03-31', budget: '$18,500', roi: '285%' },
    { id: 'CAM-003', name: 'Product Launch Social', type: 'Social', status: 'Planning', start: '2025-01-10', end: '2025-02-10', budget: '$12,000', roi: '-' },
    { id: 'CAM-004', name: 'Email Newsletter Q4', type: 'Email', status: 'Active', start: '2024-10-01', end: '2025-03-31', budget: '$5,500', roi: '450%' },
    { id: 'CAM-005', name: 'SEO Content Push', type: 'Content', status: 'Completed', start: '2024-06-01', end: '2024-12-31', budget: '$8,200', roi: '215%' },
    { id: 'CAM-006', name: 'Influencer Partnership', type: 'Influencer', status: 'Planning', start: '2025-02-01', end: '2025-05-31', budget: '$15,000', roi: '-' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Active': 'bg-green-100 text-green-700',
      'Planning': 'bg-yellow-100 text-yellow-700',
      'Completed': 'bg-blue-100 text-blue-700',
      'Paused': 'bg-gray-100 text-gray-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const filteredCampaigns = status === 'all' ? campaigns : campaigns.filter(c => c.status === status);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-black">Marketing Campaigns</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-slate-900 px-4 py-2 rounded-lg flex items-center gap-2 transition">
            <Plus size={20} />
            New Campaign
          </button>
        </div>

        {/* Filters */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex gap-2">
              <button
                onClick={() => setStatus('all')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${status === 'all' ? 'bg-blue-600 =' : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'}`}
              >
                All
              </button>
              <button
                onClick={() => setStatus('Active')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${status === 'Active' ? 'bg-green-600 =' : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'}`}
              >
                Active
              </button>
              <button
                onClick={() => setStatus('Planning')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${status === 'Planning' ? 'bg-yellow-600 =' : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'}`}
              >
                Planning
              </button>
              <button
                onClick={() => setStatus('Completed')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${status === 'Completed' ? 'bg-blue-600 =' : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'}`}
              >
                Completed
              </button>
            </div>
            <button className="ml-auto flex items-center gap-2 px-4 py-2 bg-white/50 border border-gray-300 rounded-lg hover:bg-white/70 transition text-black">
              <Filter size={20} />
              More Filters
            </button>
          </div>
        </div>

        {/* Campaigns Table */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Campaign Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Dates</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Budget</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">ROI</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCampaigns.map((campaign) => (
                <tr key={campaign.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black">{campaign.name}</td>
                  <td className="px-6 py-4 text-black">{campaign.type}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(campaign.status)}`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{campaign.start} to {campaign.end}</td>
                  <td className="px-6 py-4 text-black font-semibold">{campaign.budget}</td>
                  <td className="px-6 py-4 text-green-600 font-bold">{campaign.roi}</td>
                  <td className="px-6 py-4">
                    <button className="p-1 hover:bg-white/50 rounded transition">
                      {campaign.status === 'Active' ? <Pause size={18} className="text-gray-600" /> : <Play size={18} className="text-gray-600" />}
                    </button>
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
