import React, { useState } from 'react';
import { AlertTriangle, AlertCircle, AlertOctagon, Info } from 'lucide-react';

export default function QASeverity() {
  const [severityLevels] = useState([
    { level: 'Blocker', count: 5, description: 'Complete app failure', icon: AlertOctagon, color: 'bg-red-100/50 text-red-700' },
    { level: 'Critical', count: 18, description: 'Major functionality broken', icon: AlertTriangle, color: 'bg-orange-100/50 text-orange-700' },
    { level: 'Major', count: 42, description: 'Significant feature issue', icon: AlertCircle, color: 'bg-yellow-100/50 text-yellow-700' },
    { level: 'Minor', count: 156, description: 'Small issues, workaround exists', icon: Info, color: 'bg-blue-100/50 text-blue-700' }
  ]);

  const [issues] = useState([
    { id: 1, title: 'App crashes on startup', severity: 'Blocker', module: 'Core', status: 'In Progress' },
    { id: 2, title: 'Login not working', severity: 'Critical', module: 'Auth', status: 'Open' },
    { id: 3, title: 'Payment processing fails', severity: 'Critical', module: 'Payments', status: 'In Progress' },
    { id: 4, title: 'Search results misaligned', severity: 'Major', module: 'Search', status: 'Open' },
    { id: 5, title: 'Typo in help text', severity: 'Minor', module: 'UI', status: 'Open' },
    { id: 6, title: 'Button color incorrect', severity: 'Minor', module: 'Styling', status: 'Resolved' }
  ]);

  const getSeverityColor = (severity) => {
    const colors = {
      Blocker: 'text-red-700',
      Critical: 'text-orange-700',
      Major: 'text-yellow-700',
      Minor: 'text-blue-700'
    };
    return colors[severity] || 'text-gray-700';
  };

  const getSeverityBg = (severity) => {
    const colors = {
      Blocker: 'bg-red-100/50',
      Critical: 'bg-orange-100/50',
      Major: 'bg-yellow-100/50',
      Minor: 'bg-blue-100/50'
    };
    return colors[severity] || 'bg-gray-100/50';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Severity Levels</h1>

        {/* Severity Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {severityLevels.map((sev, idx) => {
            const Icon = sev.icon;
            return (
              <div key={idx} className={`backdrop-blur-xl ${sev.color} border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition`}>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-bold">{sev.level}</p>
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-3xl font-bold mb-2">{sev.count}</p>
                <p className="text-xs text-gray-600">{sev.description}</p>
              </div>
            );
          })}
        </div>

        {/* Severity Overview */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 mb-8 hover:bg-white/50 transition">
          <h2 className="text-lg font-bold text-black mb-6">Severity Overview</h2>
          <div className="space-y-4">
            {severityLevels.map((sev, idx) => {
              const total = severityLevels.reduce((sum, s) => sum + s.count, 0);
              const percentage = (sev.count / total) * 100;
              return (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-black font-medium">{sev.level}</span>
                    <span className={`font-bold ${getSeverityColor(sev.level)}`}>{sev.count} ({percentage.toFixed(1)}%)</span>
                  </div>
                  <div className="w-full bg-gray-300/50 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full ${getSeverityBg(sev.level)}`}
                      style={{width: `${percentage}%`}}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Issues by Severity */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg overflow-hidden hover:bg-white/50 transition">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-4 px-6 text-black font-bold">Issue</th>
                <th className="text-left py-4 px-6 text-black font-bold">Severity</th>
                <th className="text-left py-4 px-6 text-black font-bold">Module</th>
                <th className="text-left py-4 px-6 text-black font-bold">Status</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((issue, idx) => (
                <tr key={issue.id} className={`border-b border-gray-300 hover:bg-white/30 ${idx % 2 === 0 ? 'bg-white/10' : ''}`}>
                  <td className="py-4 px-6 text-black font-medium">{issue.title}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded text-sm font-bold ${getSeverityBg(issue.severity)} ${getSeverityColor(issue.severity)}`}>
                      {issue.severity}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-black">{issue.module}</td>
                  <td className="py-4 px-6 text-black font-medium">
                    <span className={`px-2 py-1 rounded text-sm ${issue.status === 'Open' ? 'bg-red-100/50 text-red-700' : issue.status === 'In Progress' ? 'bg-blue-100/50 text-blue-700' : 'bg-green-100/50 text-green-700'}`}>
                      {issue.status}
                    </span>
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
