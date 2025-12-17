import React from 'react';
import { BarChart3, FileText, Download, Calendar } from 'lucide-react';

export default function InventoryReports() {
  const stats = [
    { label: 'Reports Generated', value: '127', color: 'bg-blue-500' },
    { label: 'This Month', value: '24', color: 'bg-green-500' },
    { label: 'Pending', value: '3', color: 'bg-orange-500' },
    { label: 'Avg Generation Time', value: '2.3m', color: 'bg-purple-500' }
  ];

  const reports = [
    { id: 1, name: 'Monthly Stock Report', type: 'Excel', generated: '2024-01-15', size: '2.4 MB', status: 'Ready' },
    { id: 2, name: 'Inventory Valuation', type: 'PDF', generated: '2024-01-14', size: '1.8 MB', status: 'Ready' },
    { id: 3, name: 'SKU Performance Analysis', type: 'Excel', generated: '2024-01-13', size: '3.1 MB', status: 'Ready' },
    { id: 4, name: 'Warehouse Utilization', type: 'PDF', generated: '2024-01-12', size: '0.9 MB', status: 'Ready' },
    { id: 5, name: 'Quarterly Audit Report', type: 'Excel', generated: '2024-01-10', size: '5.2 MB', status: 'Ready' },
    { id: 6, name: 'Movement Analysis', type: 'PDF', generated: '2024-01-09', size: '2.1 MB', status: 'Ready' },
    { id: 7, name: 'Expiry Tracking Report', type: 'Excel', generated: '2024-01-08', size: '1.5 MB', status: 'Processing' },
    { id: 8, name: 'Supplier Performance', type: 'PDF', generated: '2024-01-07', size: '2.7 MB', status: 'Ready' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-black">Reports</h1>
          <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-slate-900 px-4 py-2 rounded-lg transition">
            <FileText className="w-4 h-4" /> Generate New
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-xl p-6 shadow-lg">
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              <p className="text-3xl font-bold text-black mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Reports Table */}
        <div className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-300">
            <h2 className="text-xl font-bold text-black">Recent Reports</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100/50">
                <tr className="border-b border-gray-300">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Report Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Type</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Generated</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Size</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Action</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report, index) => (
                  <tr key={index} className="border-b border-gray-300 hover:bg-white/20 transition">
                    <td className="px-6 py-4 text-sm font-semibold text-black">{report.name}</td>
                    <td className="px-6 py-4 text-sm text-black">{report.type}</td>
                    <td className="px-6 py-4 text-sm text-black flex items-center gap-2"><Calendar className="w-4 h-4" /> {report.generated}</td>
                    <td className="px-6 py-4 text-sm text-black">{report.size}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        report.status === 'Ready' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                        <Download className="w-4 h-4" /> Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
