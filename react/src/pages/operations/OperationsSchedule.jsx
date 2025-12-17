import React, { useState } from 'react';
import { Calendar, Clock, AlertCircle, CheckCircle } from 'lucide-react';

export default function OperationsSchedule() {
  const [scheduledTasks] = useState([
    { id: 1, name: 'Database backup', type: 'Maintenance', startTime: '2025-01-16 02:00 AM', duration: '2 hours', frequency: 'Daily', status: 'Scheduled' },
    { id: 2, name: 'Log rotation', type: 'Maintenance', startTime: '2025-01-16 03:30 AM', duration: '30 minutes', frequency: 'Daily', status: 'Scheduled' },
    { id: 3, name: 'Security scan', type: 'Security', startTime: '2025-01-16 10:00 PM', duration: '1 hour', frequency: 'Weekly', status: 'Scheduled' },
    { id: 4, name: 'Performance optimization', type: 'Optimization', startTime: '2025-01-17 01:00 AM', duration: '3 hours', frequency: 'Monthly', status: 'Scheduled' },
    { id: 5, name: 'System update', type: 'Maintenance', startTime: '2025-01-18 11:00 PM', duration: '4 hours', frequency: 'Monthly', status: 'Scheduled' },
    { id: 6, name: 'Configuration backup', type: 'Backup', startTime: '2025-01-19 04:00 AM', duration: '15 minutes', frequency: 'Weekly', status: 'Scheduled' }
  ]);

  const getTypeColor = (type) => {
    const colors = {
      Maintenance: 'bg-blue-100/50 text-blue-700',
      Security: 'bg-red-100/50 text-red-700',
      Optimization: 'bg-green-100/50 text-green-700',
      Backup: 'bg-purple-100/50 text-purple-700'
    };
    return colors[type] || 'bg-gray-100/50 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Operations Schedule</h1>

        {/* Schedule Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">Total Scheduled Tasks</p>
            <p className="text-3xl font-bold text-black mt-2">{scheduledTasks.length}</p>
          </div>
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">This Week</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">8</p>
          </div>
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">Total Downtime</p>
            <p className="text-3xl font-bold text-orange-600 mt-2">11.5h</p>
          </div>
        </div>

        {/* Scheduled Tasks Table */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg overflow-hidden hover:bg-white/50 transition">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-4 px-6 text-black font-bold">Task Name</th>
                <th className="text-left py-4 px-6 text-black font-bold">Type</th>
                <th className="text-left py-4 px-6 text-black font-bold">Scheduled Time</th>
                <th className="text-left py-4 px-6 text-black font-bold">Duration</th>
                <th className="text-left py-4 px-6 text-black font-bold">Frequency</th>
                <th className="text-left py-4 px-6 text-black font-bold">Status</th>
              </tr>
            </thead>
            <tbody>
              {scheduledTasks.map((task, idx) => (
                <tr key={task.id} className={`border-b border-gray-300 hover:bg-white/30 ${idx % 2 === 0 ? 'bg-white/10' : ''}`}>
                  <td className="py-4 px-6 text-black font-medium">{task.name}</td>
                  <td className="py-4 px-6">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${getTypeColor(task.type)}`}>{task.type}</span>
                  </td>
                  <td className="py-4 px-6 text-black flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" /> {task.startTime}
                  </td>
                  <td className="py-4 px-6 text-black flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" /> {task.duration}
                  </td>
                  <td className="py-4 px-6 text-black">{task.frequency}</td>
                  <td className="py-4 px-6 flex items-center gap-2 text-green-600 font-medium">
                    <CheckCircle className="w-4 h-4" /> {task.status}
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
