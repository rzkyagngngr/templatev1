import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export default function OperationsIncidents() {
  const [incidents] = useState([
    { id: 'INC-001', title: 'Database connection timeout', severity: 'Critical', status: 'Open', startTime: '2025-01-15 14:30', duration: '45 minutes', affectedUsers: '2500+' },
    { id: 'INC-002', title: 'API response time degradation', severity: 'High', status: 'In Progress', startTime: '2025-01-15 13:15', duration: '2 hours', affectedUsers: '1000+' },
    { id: 'INC-003', title: 'Memory leak detected', severity: 'Medium', status: 'Investigating', startTime: '2025-01-15 12:00', duration: '3 hours', affectedUsers: '500+' },
    { id: 'INC-004', title: 'Email service outage', severity: 'High', status: 'Resolved', startTime: '2025-01-14 22:00', duration: '1.5 hours', affectedUsers: '10000+' },
    { id: 'INC-005', title: 'Cache invalidation issue', severity: 'Low', status: 'Resolved', startTime: '2025-01-14 18:30', duration: '30 minutes', affectedUsers: '100+' }
  ]);

  const getSeverityIcon = (severity) => {
    if (severity === 'Critical') return <AlertTriangle className="w-4 h-4" />;
    if (severity === 'High') return <AlertCircle className="w-4 h-4" />;
    return <Clock className="w-4 h-4" />;
  };

  const getSeverityColor = (severity) => {
    const colors = { Critical: 'text-red-700', High: 'text-orange-700', Medium: 'text-yellow-700', Low: 'text-green-700' };
    return colors[severity] || 'text-gray-700';
  };

  const getSeverityBg = (severity) => {
    const colors = { Critical: 'bg-red-100/50', High: 'bg-orange-100/50', Medium: 'bg-yellow-100/50', Low: 'bg-green-100/50' };
    return colors[severity] || 'bg-gray-100/50';
  };

  const getStatusColor = (status) => {
    if (status === 'Open') return 'text-red-700';
    if (status === 'Resolved') return 'text-green-700';
    if (status === 'In Progress') return 'text-blue-700';
    return 'text-yellow-700';
  };

  const getStatusBg = (status) => {
    if (status === 'Open') return 'bg-red-100/50';
    if (status === 'Resolved') return 'bg-green-100/50';
    if (status === 'In Progress') return 'bg-blue-100/50';
    return 'bg-yellow-100/50';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Incidents</h1>

        {/* Incident Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">Total Incidents</p>
            <p className="text-3xl font-bold text-black mt-2">{incidents.length}</p>
          </div>
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">Open</p>
            <p className="text-3xl font-bold text-red-600 mt-2">1</p>
          </div>
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">In Progress</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">2</p>
          </div>
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">Resolved</p>
            <p className="text-3xl font-bold text-green-600 mt-2">2</p>
          </div>
        </div>

        {/* Incidents Table */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg overflow-hidden hover:bg-white/50 transition">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-4 px-6 text-black font-bold">Incident ID</th>
                <th className="text-left py-4 px-6 text-black font-bold">Title</th>
                <th className="text-left py-4 px-6 text-black font-bold">Severity</th>
                <th className="text-left py-4 px-6 text-black font-bold">Status</th>
                <th className="text-left py-4 px-6 text-black font-bold">Duration</th>
                <th className="text-left py-4 px-6 text-black font-bold">Affected Users</th>
              </tr>
            </thead>
            <tbody>
              {incidents.map((incident, idx) => (
                <tr key={incident.id} className={`border-b border-gray-300 hover:bg-white/30 ${idx % 2 === 0 ? 'bg-white/10' : ''}`}>
                  <td className="py-4 px-6 text-black font-bold">{incident.id}</td>
                  <td className="py-4 px-6 text-black font-medium">{incident.title}</td>
                  <td className={`py-4 px-6 flex items-center gap-2 font-semibold ${getSeverityColor(incident.severity)}`}>
                    {getSeverityIcon(incident.severity)} {incident.severity}
                  </td>
                  <td className={`py-4 px-6 font-semibold ${getStatusColor(incident.status)}`}>{incident.status}</td>
                  <td className="py-4 px-6 text-black text-sm">{incident.duration}</td>
                  <td className="py-4 px-6 text-black font-semibold">{incident.affectedUsers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
