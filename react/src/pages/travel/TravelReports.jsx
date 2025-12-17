import React, { useState } from 'react';
import { BarChart3, TrendingUp, MapPin, Users } from 'lucide-react';

export default function TravelReports() {
  const reports = [
    { id: 'REP-001', name: 'Monthly Travel Summary', period: 'January 2025', travelers: 47, trips: 12, spend: '$89,500', status: 'CREATED' },
    { id: 'REP-002', name: 'Q1 Travel Forecast', period: 'Q1 2025', travelers: 125, trips: 38, spend: '$285,600', status: 'CREATED' },
    { id: 'REP-003', name: 'Travel Policy Compliance', period: 'December 2024', travelers: 98, trips: 28, spend: '$156,200', status: 'CREATED' },
    { id: 'REP-004', name: 'Cost Analysis by Destination', period: 'YTD', travelers: 156, trips: 45, spend: '$425,800', status: 'CREATED' },
    { id: 'REP-005', name: 'Travel Budget vs Actual', period: 'January 2025', travelers: 47, trips: 12, spend: '$89,500', status: 'CREATED' },
  ];

  const stats = [
    { label: 'Reports Generated', value: '24', icon: BarChart3, color: 'bg-blue-100' },
    { label: 'Total Spend Tracked', value: '$1.2M', icon: TrendingUp, color: 'bg-purple-100' },
    { label: 'Top Destination', value: 'New York', icon: MapPin, color: 'bg-orange-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Travel Reports</h1>

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

        {/* Reports Table */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Report Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Period</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Travelers</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Trips</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Spend</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black">{report.id}</td>
                  <td className="px-6 py-4 text-black">{report.name}</td>
                  <td className="px-6 py-4 text-black">{report.period}</td>
                  <td className="px-6 py-4 text-black">{report.travelers}</td>
                  <td className="px-6 py-4 text-black">{report.trips}</td>
                  <td className="px-6 py-4 font-bold text-black">{report.spend}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      {report.status}
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
