import React, { useState } from 'react';
import { BarChart3, TrendingUp, PieChart, Calendar } from 'lucide-react';

export default function FleetReports() {
  const reportTypes = [
    { id: 'RPT-001', name: 'Monthly Performance', type: 'Summary', dateRange: 'Dec 1 - Dec 31, 2024', status: 'Available', generatedDate: '2024-12-01' },
    { id: 'RPT-002', name: 'Fuel Efficiency Analysis', type: 'Detailed', dateRange: 'Dec 1 - Dec 15, 2024', status: 'Available', generatedDate: '2024-12-15' },
    { id: 'RPT-003', name: 'Driver Performance', type: 'Detailed', dateRange: 'Nov 1 - Nov 30, 2024', status: 'Available', generatedDate: '2024-11-30' },
    { id: 'RPT-004', name: 'Maintenance Overview', type: 'Summary', dateRange: 'Q4 2024', status: 'Pending', generatedDate: null },
    { id: 'RPT-005', name: 'Route Efficiency', type: 'Detailed', dateRange: 'Dec 1 - Dec 15, 2024', status: 'Available', generatedDate: '2024-12-15' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Available': 'bg-green-100 text-green-700',
      'Pending': 'bg-yellow-100 text-yellow-700',
      'Processing': 'bg-blue-100 text-blue-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const stats = [
    { label: 'Total Trips (Month)', value: '156', icon: BarChart3, color: 'bg-blue-100' },
    { label: 'Avg Route Efficiency', value: '92%', icon: TrendingUp, color: 'bg-green-100' },
    { label: 'On-Time Delivery Rate', value: '98.5%', icon: PieChart, color: 'bg-purple-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black">Fleet Reports</h1>
          <button className="bg-blue-600 text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
            + Generate Report
          </button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon size={24} className="text-black" />
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

        {/* Available Reports */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <h2 className="text-xl font-bold text-black mb-4">Available Reports</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2 px-4 text-black font-semibold">Report Name</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Type</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Date Range</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Status</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Generated</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {reportTypes.map((report) => (
                  <tr key={report.id} className="border-b border-gray-300 hover:bg-gray-50">
                    <td className="py-2 px-4 text-black font-semibold">{report.name}</td>
                    <td className="py-2 px-4 text-black">{report.type}</td>
                    <td className="py-2 px-4 text-black">{report.dateRange}</td>
                    <td className="py-2 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(report.status)}`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="py-2 px-4 text-black">{report.generatedDate || '-'}</td>
                    <td className="py-2 px-4">
                      {report.status === 'Available' ? (
                        <button className="text-blue-600 hover:text-blue-800 font-semibold">Download</button>
                      ) : (
                        <button className="text-gray-400 cursor-not-allowed font-semibold">Pending</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Report Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-bold text-black mb-4">Monthly Revenue</h3>
            <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
              <p className="text-black">Chart placeholder</p>
            </div>
          </div>
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-bold text-black mb-4">Fleet Utilization</h3>
            <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
              <p className="text-black">Chart placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
