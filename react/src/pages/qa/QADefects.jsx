import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Clock, XCircle, Filter } from 'lucide-react';

export default function QADefects() {
  const [defects] = useState([
    { id: 101, title: 'Login button not responding', severity: 'Critical', status: 'Open', assignee: 'John Doe', dateReported: '2025-01-15' },
    { id: 102, title: 'Search results pagination broken', severity: 'High', status: 'In Progress', assignee: 'Jane Smith', dateReported: '2025-01-14' },
    { id: 103, title: 'UI misalignment on mobile', severity: 'Medium', status: 'Open', assignee: 'Mike Johnson', dateReported: '2025-01-13' },
    { id: 104, title: 'Memory leak in profile page', severity: 'High', status: 'Resolved', assignee: 'Sarah Davis', dateReported: '2025-01-12' },
    { id: 105, title: 'Typo in error message', severity: 'Low', status: 'Closed', assignee: 'Tom Wilson', dateReported: '2025-01-11' },
    { id: 106, title: 'API timeout on checkout', severity: 'Critical', status: 'In Progress', assignee: 'John Doe', dateReported: '2025-01-10' }
  ]);

  const getSeverityIcon = (severity) => {
    const icons = { Critical: AlertTriangle, High: AlertTriangle, Medium: Clock, Low: CheckCircle };
    const Icon = icons[severity] || AlertTriangle;
    return <Icon className="w-4 h-4" />;
  };

  const getSeverityColor = (severity) => {
    const colors = { Critical: 'text-red-600', High: 'text-orange-600', Medium: 'text-yellow-600', Low: 'text-green-600' };
    return colors[severity] || 'text-gray-600';
  };

  const getStatusIcon = (status) => {
    const icons = { Open: AlertTriangle, 'In Progress': Clock, Resolved: CheckCircle, Closed: XCircle };
    const Icon = icons[status] || AlertTriangle;
    return <Icon className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black">Defects</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/50 border border-gray-300 rounded-lg text-black hover:bg-white/70 transition">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Defects', value: '156', color: 'bg-red-100/50', textColor: 'text-red-600' },
            { label: 'Critical', value: '8', color: 'bg-red-100/50', textColor: 'text-red-600' },
            { label: 'In Progress', value: '23', color: 'bg-blue-100/50', textColor: 'text-blue-600' },
            { label: 'Resolved', value: '89', color: 'bg-green-100/50', textColor: 'text-green-600' }
          ].map((stat, idx) => (
            <div key={idx} className={`backdrop-blur-xl ${stat.color} border border-gray-300 rounded-lg p-4 hover:bg-white/50 transition`}>
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              <p className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Defects Table */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg overflow-hidden hover:bg-white/50 transition">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-4 px-6 text-black font-bold">Title</th>
                <th className="text-left py-4 px-6 text-black font-bold">Severity</th>
                <th className="text-left py-4 px-6 text-black font-bold">Status</th>
                <th className="text-left py-4 px-6 text-black font-bold">Assignee</th>
                <th className="text-left py-4 px-6 text-black font-bold">Reported</th>
              </tr>
            </thead>
            <tbody>
              {defects.map((defect, idx) => (
                <tr key={defect.id} className={`border-b border-gray-300 hover:bg-white/30 ${idx % 2 === 0 ? 'bg-white/10' : ''}`}>
                  <td className="py-4 px-6 text-black font-medium">{defect.title}</td>
                  <td className={`py-4 px-6 flex items-center gap-2 font-semibold ${getSeverityColor(defect.severity)}`}>
                    {getSeverityIcon(defect.severity)} {defect.severity}
                  </td>
                  <td className="py-4 px-6 flex items-center gap-2 text-black font-medium">
                    {getStatusIcon(defect.status)} {defect.status}
                  </td>
                  <td className="py-4 px-6 text-black">{defect.assignee}</td>
                  <td className="py-4 px-6 text-black text-sm">{defect.dateReported}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
