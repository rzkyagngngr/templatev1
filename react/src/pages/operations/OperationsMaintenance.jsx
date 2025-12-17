import React, { useState } from 'react';
import { Wrench, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export default function OperationsMaintenance() {
  const [maintenanceWindows] = useState([
    { id: 1, system: 'Web Server', type: 'Planned', status: 'Scheduled', start: '2025-01-16 02:00 AM', end: '2025-01-16 04:00 AM', impact: 'Minor' },
    { id: 2, system: 'Database Server', type: 'Planned', status: 'In Progress', start: '2025-01-15 10:00 PM', end: '2025-01-16 12:00 AM', impact: 'Major' },
    { id: 3, system: 'API Gateway', type: 'Emergency', status: 'Scheduled', start: '2025-01-16 03:00 PM', end: '2025-01-16 03:30 PM', impact: 'Critical' },
    { id: 4, system: 'Cache Servers', type: 'Planned', status: 'Completed', start: '2025-01-14 11:00 PM', end: '2025-01-15 01:00 AM', impact: 'Low' },
    { id: 5, system: 'Load Balancer', type: 'Planned', status: 'Scheduled', start: '2025-01-17 01:00 AM', end: '2025-01-17 02:00 AM', impact: 'Major' }
  ]);

  const getTypeColor = (type) => {
    return type === 'Emergency' ? 'text-red-700' : 'text-blue-700';
  };

  const getStatusIcon = (status) => {
    if (status === 'Completed') return <CheckCircle className="w-4 h-4 text-green-600" />;
    if (status === 'In Progress') return <Wrench className="w-4 h-4 text-yellow-600" />;
    return <Clock className="w-4 h-4 text-blue-600" />;
  };

  const getImpactColor = (impact) => {
    const colors = { Critical: 'bg-red-100/50 text-red-700', Major: 'bg-orange-100/50 text-orange-700', Minor: 'bg-yellow-100/50 text-yellow-700', Low: 'bg-green-100/50 text-green-700' };
    return colors[impact] || 'bg-gray-100/50';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Maintenance Management</h1>

        {/* Maintenance Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">Total Windows</p>
            <p className="text-3xl font-bold text-black mt-2">{maintenanceWindows.length}</p>
          </div>
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">Planned</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">4</p>
          </div>
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">Emergency</p>
            <p className="text-3xl font-bold text-red-600 mt-2">1</p>
          </div>
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">Completed</p>
            <p className="text-3xl font-bold text-green-600 mt-2">1</p>
          </div>
        </div>

        {/* Maintenance Windows Table */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg overflow-hidden hover:bg-white/50 transition">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-4 px-6 text-black font-bold">System</th>
                <th className="text-left py-4 px-6 text-black font-bold">Type</th>
                <th className="text-left py-4 px-6 text-black font-bold">Status</th>
                <th className="text-left py-4 px-6 text-black font-bold">Start Time</th>
                <th className="text-left py-4 px-6 text-black font-bold">End Time</th>
                <th className="text-left py-4 px-6 text-black font-bold">Impact</th>
              </tr>
            </thead>
            <tbody>
              {maintenanceWindows.map((window, idx) => (
                <tr key={window.id} className={`border-b border-gray-300 hover:bg-white/30 ${idx % 2 === 0 ? 'bg-white/10' : ''}`}>
                  <td className="py-4 px-6 text-black font-medium">{window.system}</td>
                  <td className={`py-4 px-6 font-semibold ${getTypeColor(window.type)}`}>{window.type}</td>
                  <td className="py-4 px-6 flex items-center gap-2 text-black font-medium">
                    {getStatusIcon(window.status)} {window.status}
                  </td>
                  <td className="py-4 px-6 text-black text-sm">{window.start}</td>
                  <td className="py-4 px-6 text-black text-sm">{window.end}</td>
                  <td className="py-4 px-6">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${getImpactColor(window.impact)}`}>{window.impact}</span>
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
