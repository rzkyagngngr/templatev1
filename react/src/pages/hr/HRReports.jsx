import React, { useState } from 'react';
import { BarChart3, Download, Plus, Filter } from 'lucide-react';

export default function HRReports() {
  const [reportType, setReportType] = useState('employee');

  const reports = [
    { id: 1, name: 'Employee Summary Report', type: 'Employee', generatedDate: '2025-01-15', period: 'January 2025', format: 'PDF', status: 'Ready' },
    { id: 2, name: 'Payroll Report', type: 'Payroll', generatedDate: '2025-01-31', period: 'January 2025', format: 'Excel', status: 'Ready' },
    { id: 3, name: 'Attendance Report', type: 'Attendance', generatedDate: '2025-01-14', period: 'January 2025', format: 'PDF', status: 'Ready' },
    { id: 4, name: 'Leave Analysis', type: 'Leave', generatedDate: '2025-01-10', period: 'Q4 2024', format: 'Excel', status: 'Ready' },
    { id: 5, name: 'Performance Review Summary', type: 'Performance', generatedDate: '2025-01-08', period: 'Q4 2024', format: 'PDF', status: 'Ready' },
    { id: 6, name: 'Recruitment Report', type: 'Recruitment', generatedDate: '2025-01-12', period: 'January 2025', format: 'Excel', status: 'Ready' },
    { id: 7, name: 'Training & Development Report', type: 'Training', generatedDate: '2025-01-09', period: 'Q4 2024', format: 'PDF', status: 'Ready' },
    { id: 8, name: 'Departmental Analytics', type: 'Analytics', generatedDate: '2025-01-15', period: 'January 2025', format: 'Excel', status: 'Ready' }
  ];

  const stats = [
    { label: 'Total Reports', value: '142', color: 'text-blue-600' },
    { label: 'This Month', value: '8', color: 'text-green-600' }
  ];

  const reportOptions = [
    { value: 'employee', label: 'Employee Reports' },
    { value: 'payroll', label: 'Payroll Reports' },
    { value: 'attendance', label: 'Attendance Reports' },
    { value: 'leave', label: 'Leave Reports' },
    { value: 'performance', label: 'Performance Reports' },
    { value: 'recruitment', label: 'Recruitment Reports' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-black">HR Reports</h1>
          <button className="px-6 py-2 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" /> Generate Report
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-4">
                <BarChart3 className="w-10 h-10 text-blue-600" />
                <div>
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                  <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Section */}
        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-xl p-6 shadow-lg mb-8">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-black" />
            <label className="text-black font-medium">Report Type:</label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white/50 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {reportOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Reports Table */}
        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-black mb-6">Available Reports</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 text-left text-black font-semibold">Report Name</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Type</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Period</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Generated Date</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Format</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Status</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id} className="border-b border-gray-200 hover:bg-white/30">
                    <td className="px-4 py-3 text-black font-medium">{report.name}</td>
                    <td className="px-4 py-3 text-black">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">
                        {report.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-black">{report.period}</td>
                    <td className="px-4 py-3 text-black text-sm">{report.generatedDate}</td>
                    <td className="px-4 py-3 text-black font-medium">{report.format}</td>
                    <td className="px-4 py-3">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        {report.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 flex gap-2">
                      <button className="p-2 hover:bg-green-100 rounded-lg transition-colors" title="Download">
                        <Download className="w-4 h-4 text-green-600" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                        View
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
