import React, { useState } from 'react';
import { Zap, Settings, Play, CheckCircle } from 'lucide-react';

export default function MarketingAutomation() {
  const workflows = [
    { id: 'WF-001', name: 'Welcome Email Series', trigger: 'New Subscriber', status: 'Active', emails: 5, engaged: '68%' },
    { id: 'WF-002', name: 'Cart Abandonment', trigger: 'Abandoned Cart', status: 'Active', emails: 3, engaged: '42%' },
    { id: 'WF-003', name: 'Lead Nurturing', trigger: 'Lead Score > 50', status: 'Active', emails: 8, engaged: '55%' },
    { id: 'WF-004', name: 'Re-engagement Campaign', trigger: 'Inactive > 30 days', status: 'Active', emails: 4, engaged: '35%' },
    { id: 'WF-005', name: 'Post-Purchase Follow-up', trigger: 'Order Completed', status: 'Paused', emails: 3, engaged: '61%' },
    { id: 'WF-006', name: 'VIP Customer Program', trigger: 'High-Value Customer', status: 'Active', emails: 6, engaged: '78%' },
  ];

  const automationTypes = [
    { type: 'Email Workflows', count: 12, active: 10, conversions: '3.8%' },
    { type: 'SMS Campaigns', count: 5, active: 4, conversions: '5.2%' },
    { type: 'Push Notifications', count: 3, active: 3, conversions: '2.1%' },
    { type: 'Lead Scoring', count: 1, active: 1, conversions: 'N/A' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Active': 'bg-green-100 text-green-700',
      'Paused': 'bg-yellow-100 text-yellow-700',
      'Completed': 'bg-blue-100 text-blue-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const stats = [
    { label: 'Active Workflows', value: '10', icon: Zap, color: 'bg-blue-100' },
    { label: 'Total Automations', value: '21', icon: Settings, color: 'bg-purple-100' },
    { label: 'Avg Conversion', value: '4.1%', icon: CheckCircle, color: 'bg-green-100' },
    { label: 'Time Saved/mo', value: '320 hrs', icon: Play, color: 'bg-orange-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Marketing Automation</h1>

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Automation Types */}
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-300 bg-white/50">
              <h3 className="font-bold text-black">Automation Types</h3>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300 bg-white/50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Type</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Total</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Active</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Conversions</th>
                </tr>
              </thead>
              <tbody>
                {automationTypes.map((auto, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-white/50 transition">
                    <td className="px-6 py-4 font-semibold text-black">{auto.type}</td>
                    <td className="px-6 py-4 text-black">{auto.count}</td>
                    <td className="px-6 py-4 text-black font-bold">{auto.active}</td>
                    <td className="px-6 py-4 text-green-600 font-bold">{auto.conversions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick Stats */}
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-bold text-black mb-4">Performance Overview</h3>
            <div className="space-y-4">
              <div className="pb-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-black font-semibold">Email Workflows</p>
                  <p className="text-green-600 font-bold">68% engaged</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="h-full rounded-full bg-green-500" style={{ width: '68%' }}></div>
                </div>
              </div>
              <div className="pb-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-black font-semibold">SMS Campaigns</p>
                  <p className="text-green-600 font-bold">52% engaged</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="h-full rounded-full bg-blue-500" style={{ width: '52%' }}></div>
                </div>
              </div>
              <div className="pb-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-black font-semibold">Push Notifications</p>
                  <p className="text-green-600 font-bold">41% engaged</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="h-full rounded-full bg-purple-500" style={{ width: '41%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-black font-semibold">Lead Scoring</p>
                  <p className="text-green-600 font-bold">Active</p>
                </div>
                <p className="text-sm text-gray-600">Scoring 45.2K contacts daily</p>
              </div>
            </div>
          </div>
        </div>

        {/* Workflows Table */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-300 bg-white/50">
            <h3 className="font-bold text-black">Active Workflows</h3>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Workflow ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Trigger</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Emails</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Engagement</th>
              </tr>
            </thead>
            <tbody>
              {workflows.map((wf) => (
                <tr key={wf.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black text-sm">{wf.id}</td>
                  <td className="px-6 py-4 font-semibold text-black">{wf.name}</td>
                  <td className="px-6 py-4 text-black text-sm">{wf.trigger}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(wf.status)}`}>
                      {wf.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-black font-bold">{wf.emails}</td>
                  <td className="px-6 py-4 text-green-600 font-bold">{wf.engaged}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
