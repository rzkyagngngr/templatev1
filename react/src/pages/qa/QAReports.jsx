import React, { useState } from 'react';
import { Download, Filter, Calendar } from 'lucide-react';

export default function QAReports() {
  const [reports] = useState([
    { id: 1, name: 'Weekly Test Summary - Week 3', type: 'Summary', created: '2025-01-15', status: 'Completed', size: '2.4 MB' },
    { id: 2, name: 'Regression Test Report', type: 'Detailed', created: '2025-01-14', status: 'Completed', size: '5.1 MB' },
    { id: 3, name: 'Defect Analysis Report', type: 'Analysis', created: '2025-01-13', status: 'Completed', size: '3.7 MB' },
    { id: 4, name: 'Coverage Trend Report', type: 'Metrics', created: '2025-01-12', status: 'Completed', size: '1.8 MB' },
    { id: 5, name: 'Performance Benchmark', type: 'Performance', created: '2025-01-11', status: 'Completed', size: '4.2 MB' },
    { id: 6, name: 'API Test Results', type: 'Technical', created: '2025-01-10', status: 'Completed', size: '2.9 MB' }
  ]);

  const getTypeColor = (type) => {
    const colors = {
      Summary: 'bg-blue-100/50 text-blue-700',
      Detailed: 'bg-purple-100/50 text-purple-700',
      Analysis: 'bg-green-100/50 text-green-700',
      Metrics: 'bg-orange-100/50 text-orange-700',
      Performance: 'bg-red-100/50 text-red-700',
      Technical: 'bg-cyan-100/50 text-cyan-700'
    };
    return colors[type] || 'bg-gray-100/50 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black">QA Reports</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/50 border border-gray-300 rounded-lg text-black hover:bg-white/70 transition">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>

        {/* Report Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">Total Reports</p>
            <p className="text-3xl font-bold text-black mt-2">42</p>
          </div>
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">This Month</p>
            <p className="text-3xl font-bold text-black mt-2">18</p>
          </div>
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">Total Size</p>
            <p className="text-3xl font-bold text-black mt-2">125 GB</p>
          </div>
        </div>

        {/* Reports Table */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg overflow-hidden hover:bg-white/50 transition">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-4 px-6 text-black font-bold">Report Name</th>
                <th className="text-left py-4 px-6 text-black font-bold">Type</th>
                <th className="text-left py-4 px-6 text-black font-bold">Created</th>
                <th className="text-left py-4 px-6 text-black font-bold">Status</th>
                <th className="text-left py-4 px-6 text-black font-bold">Size</th>
                <th className="text-center py-4 px-6 text-black font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, idx) => (
                <tr key={report.id} className={`border-b border-gray-300 hover:bg-white/30 ${idx % 2 === 0 ? 'bg-white/10' : ''}`}>
                  <td className="py-4 px-6 text-black font-medium">{report.name}</td>
                  <td className="py-4 px-6">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${getTypeColor(report.type)}`}>{report.type}</span>
                  </td>
                  <td className="py-4 px-6 text-black text-sm flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" /> {report.created}
                  </td>
                  <td className="py-4 px-6 text-black font-medium"><span className="px-2 py-1 bg-green-100/50 text-green-700 rounded text-sm">{report.status}</span></td>
                  <td className="py-4 px-6 text-black text-sm">{report.size}</td>
                  <td className="py-4 px-6 flex justify-center">
                    <button className="p-2 hover:bg-white/50 rounded-lg transition"><Download className="w-4 h-4 text-blue-600" /></button>
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
