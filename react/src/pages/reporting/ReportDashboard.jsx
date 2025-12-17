import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

export default function ReportDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-6">
        <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
          CREATED
        </div>
        <h1 className="text-4xl font-bold text-black mt-4">Report Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-black">Monthly Reports</h2>
            <BarChart3 className="text-black" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-black">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Report Name</th>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2">Sales Report</td>
                  <td className="px-4 py-2">Dec 2024</td>
                  <td className="px-4 py-2"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Active</span></td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2">Revenue Report</td>
                  <td className="px-4 py-2">Dec 2024</td>
                  <td className="px-4 py-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">Complete</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-black">Report Metrics</h2>
            <TrendingUp className="text-black" />
          </div>
          <div className="space-y-4">
            <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center text-black">
              Chart Placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

