import React from 'react';
import { BarChart3, Download, Filter, Plus } from 'lucide-react';

export default function FinancialReports() {
  const reports = [
    { id: 1, name: 'Annual Financial Summary', type: 'PDF', date: 'Dec 1', size: '2.4 MB', status: 'Available' },
    { id: 2, name: 'Quarterly Report Q3', type: 'Excel', date: 'Oct 15', size: '1.8 MB', status: 'Available' },
    { id: 3, name: 'Monthly Statement Nov', type: 'PDF', date: 'Nov 30', size: '856 KB', status: 'Available' },
    { id: 4, name: 'Tax Summary 2024', type: 'Excel', date: 'Dec 10', size: '3.2 MB', status: 'In Progress' },
    { id: 5, name: 'Cash Flow Analysis', type: 'PDF', date: 'Dec 5', size: '1.1 MB', status: 'Available' },
  ];

  const reportTypes = [
    { name: 'Income Statement', lastGenerated: 'Nov 30', frequency: 'Monthly' },
    { name: 'Balance Sheet', lastGenerated: 'Nov 30', frequency: 'Quarterly' },
    { name: 'Cash Flow Statement', lastGenerated: 'Nov 30', frequency: 'Monthly' },
    { name: 'Tax Report', lastGenerated: 'Dec 10', frequency: 'Annual' },
    { name: 'Expense Report', lastGenerated: 'Dec 15', frequency: 'Monthly' },
    { name: 'Revenue Report', lastGenerated: 'Dec 15', frequency: 'Weekly' },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Financial Reports</h1>
          <p className="text-gray-600 mt-2">Generate and manage financial reports</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur border border-gray-300 rounded-lg text-gray-900 hover:bg-white/60 transition-all">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-slate-900 rounded-lg hover:bg-blue-600 transition-all">
            <Plus className="w-4 h-4" />
            Generate Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Total Reports</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
          <p className="text-gray-700 text-sm mt-1">This year</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Generated This Month</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">8</p>
          <p className="text-gray-700 text-sm mt-1">4 pending</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Total Size</p>
          <p className="text-3xl font-bold text-purple-600 mt-2">45.2 MB</p>
          <p className="text-gray-700 text-sm mt-1">Archived storage</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Reports</h2>
          <div className="space-y-3">
            {reports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-3 bg-white/30 rounded hover:bg-white/50 transition-all">
                <div className="flex-1">
                  <p className="text-gray-900 font-medium">{report.name}</p>
                  <div className="flex gap-3 mt-1 text-xs text-gray-600">
                    <span>{report.type}</span>
                    <span>â€¢</span>
                    <span>{report.size}</span>
                    <span>â€¢</span>
                    <span>{report.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    report.status === 'Available'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {report.status}
                  </span>
                  <button className="p-2 hover:bg-white/40 rounded">
                    <Download className="w-4 h-4 text-blue-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Report Types</h2>
          <div className="space-y-3">
            {reportTypes.map((type, idx) => (
              <div key={idx} className="p-3 bg-white/30 rounded">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-900 font-medium">{type.name}</p>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
                    {type.frequency}
                  </span>
                </div>
                <p className="text-gray-600 text-xs">Last generated: {type.lastGenerated}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-6 h-6 =" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Quick Stats</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3 bg-white/30 rounded">
            <p className="text-gray-600 text-xs font-medium">Avg Report Size</p>
            <p className="text-lg font-bold text-gray-900 mt-1">1.88 MB</p>
          </div>
          <div className="p-3 bg-white/30 rounded">
            <p className="text-gray-600 text-xs font-medium">Reports Generated</p>
            <p className="text-lg font-bold text-gray-900 mt-1">This Month: 8</p>
          </div>
          <div className="p-3 bg-white/30 rounded">
            <p className="text-gray-600 text-xs font-medium">Pending</p>
            <p className="text-lg font-bold text-orange-600 mt-1">1 Report</p>
          </div>
          <div className="p-3 bg-white/30 rounded">
            <p className="text-gray-600 text-xs font-medium">Compliance</p>
            <p className="text-lg font-bold text-green-600 mt-1">100% Current</p>
          </div>
        </div>
      </div>
    </div>
  );
}
