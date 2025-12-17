import React from 'react';
import { BarChart3, TrendingUp, Calendar, Download } from 'lucide-react';

export default function LogisticsReports() {
  const reports = [
    { id: 'RPT-001', title: 'Monthly Performance', date: '2025-12-01', type: 'Performance', status: 'Completed' },
    { id: 'RPT-002', title: 'Fleet Utilization', date: '2025-12-10', type: 'Analytics', status: 'Completed' },
    { id: 'RPT-003', title: 'Cost Analysis', date: '2025-12-15', type: 'Financial', status: 'In Progress' },
    { id: 'RPT-004', title: 'Delivery Metrics', date: '2025-12-16', type: 'Operations', status: 'Pending' },
    { id: 'RPT-005', title: 'Route Optimization', date: '2025-12-14', type: 'Analytics', status: 'Completed' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Completed': 'bg-green-100 text-green-700',
      'In Progress': 'bg-blue-100 text-blue-700',
      'Pending': 'bg-yellow-100 text-yellow-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const getTypeColor = (type) => {
    const colors = {
      'Performance': 'bg-purple-100',
      'Analytics': 'bg-indigo-100',
      'Financial': 'bg-orange-100',
      'Operations': 'bg-cyan-100',
    };
    return colors[type] || 'bg-gray-100';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">Logistics Reports</h1>
          <p className="text-black text-opacity-70 mt-2">CREATED</p>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <div key={report.id} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className={`${getTypeColor(report.type)} p-3 rounded-lg`}>
                  <BarChart3 className="w-5 h-5 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-black">{report.title}</h3>
                  <p className="text-black text-opacity-60 text-xs mt-1">{report.id}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-black text-opacity-70 text-sm">
                  <Calendar className="w-4 h-4" />
                  {report.date}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black text-opacity-70 text-sm">{report.type}</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(report.status)}`}>
                    {report.status}
                  </span>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-slate-900 py-2 rounded hover:bg-blue-700 transition">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
