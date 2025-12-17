import React from 'react';
import { BarChart3, Download, Filter } from 'lucide-react';

export default function AssetReports() {
  const reports = [
    { id: 1, name: 'Asset Inventory Report', type: 'Inventory', lastRun: '2024-12-16', format: 'PDF' },
    { id: 2, name: 'Depreciation Analysis', type: 'Financial', lastRun: '2024-12-15', format: 'Excel' },
    { id: 3, name: 'Maintenance Schedule', type: 'Maintenance', lastRun: '2024-12-14', format: 'PDF' },
    { id: 4, name: 'Asset Location Report', type: 'Tracking', lastRun: '2024-12-16', format: 'Excel' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black">Asset Reports</h1>
          <button className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg px-4 py-2 text-black flex items-center gap-2">
            <Filter size={18} /> Filter
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map(report => (
            <div key={report.id} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-black font-bold text-lg">{report.name}</p>
                  <p className="text-black text-sm mt-2">Type: {report.type}</p>
                  <p className="text-black text-sm">Format: {report.format}</p>
                  <p className="text-black text-xs mt-3">Last Run: {report.lastRun}</p>
                </div>
                <button className="backdrop-blur-md bg-blue-100 border border-gray-300 rounded-lg p-2 text-black hover:bg-blue-200">
                  <Download size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <span className="inline-block bg-green-500 text-slate-900 text-xs px-2 py-1 rounded">CREATED</span>
        </div>
      </div>
    </div>
  );
}
