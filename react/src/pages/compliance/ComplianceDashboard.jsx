import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const ComplianceDashboard = () => {
  const [status] = useState('CREATED');
  
  const stats = [
    { label: 'Total Policies', value: '24', icon: CheckCircle, color: 'bg-blue-500' },
    { label: 'Pending Audits', value: '8', icon: Clock, color: 'bg-yellow-500' },
    { label: 'Open Issues', value: '5', icon: AlertCircle, color: 'bg-red-500' },
    { label: 'Compliance Rate', value: '92%', icon: TrendingUp, color: 'bg-green-500' }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Compliance Dashboard</h1>
        <p className="text-gray-600">Status: <span className="font-semibold text-green-600">{status}</span></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="glass-card border border-gray-300 rounded-lg p-6 backdrop-blur-md bg-white bg-opacity-60"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-2">{stat.label}</p>
                <p className="text-2xl font-bold text-black">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 =" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card border border-gray-300 rounded-lg p-6 backdrop-blur-md bg-white bg-opacity-60">
        <h2 className="text-xl font-bold text-black mb-4">Recent Compliance Activities</h2>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-3 px-4 text-black font-semibold">Activity</th>
              <th className="text-left py-3 px-4 text-black font-semibold">Date</th>
              <th className="text-left py-3 px-4 text-black font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-4 text-black">Policy Review</td>
              <td className="py-3 px-4 text-gray-700">2025-12-15</td>
              <td className="py-3 px-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Completed</span></td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-4 text-black">Audit Schedule</td>
              <td className="py-3 px-4 text-gray-700">2025-12-16</td>
              <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">In Progress</span></td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-4 text-black">Risk Assessment</td>
              <td className="py-3 px-4 text-gray-700">2025-12-17</td>
              <td className="py-3 px-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">Pending</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComplianceDashboard;
