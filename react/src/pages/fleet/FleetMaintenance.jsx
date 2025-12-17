import React, { useState } from 'react';
import { Wrench, AlertTriangle, Calendar, CheckCircle } from 'lucide-react';

export default function FleetMaintenance() {
  const maintenanceRecords = [
    { id: 'MNT-001', vehicle: 'TRK-2401', task: 'Oil Change', dueDate: '2025-01-15', status: 'Scheduled', cost: '$150', technician: 'John Doe' },
    { id: 'MNT-002', vehicle: 'TRK-2402', task: 'Tire Replacement', dueDate: '2024-12-18', status: 'Overdue', cost: '$800', technician: 'Jane Smith' },
    { id: 'MNT-003', vehicle: 'VAN-2403', task: 'Brake Inspection', dueDate: '2025-02-01', status: 'Scheduled', cost: '$200', technician: 'Mike Wilson' },
    { id: 'MNT-004', vehicle: 'TRK-2404', task: 'Engine Servicing', dueDate: '2024-12-20', status: 'Completed', cost: '$1,200', technician: 'Sarah Chen' },
    { id: 'MNT-005', vehicle: 'VAN-2405', task: 'Filter Replacement', dueDate: '2025-01-05', status: 'Scheduled', cost: '$120', technician: 'David Brown' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Scheduled': 'bg-blue-100 text-blue-700',
      'Overdue': 'bg-red-100 text-red-700',
      'Completed': 'bg-green-100 text-green-700',
      'In Progress': 'bg-orange-100 text-orange-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const overdueTasks = maintenanceRecords.filter(r => r.status === 'Overdue').length;
  const completedTasks = maintenanceRecords.filter(r => r.status === 'Completed').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black">Fleet Maintenance</h1>
          <button className="bg-blue-600 text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
            + Schedule Maintenance
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <AlertTriangle size={24} className="text-black" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Overdue Tasks</p>
                <p className="text-2xl font-bold text-black">{overdueTasks}</p>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Calendar size={24} className="text-black" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Scheduled Tasks</p>
                <p className="text-2xl font-bold text-black">{maintenanceRecords.filter(r => r.status === 'Scheduled').length}</p>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle size={24} className="text-black" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Completed Tasks</p>
                <p className="text-2xl font-bold text-black">{completedTasks}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Maintenance Records */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <h2 className="text-xl font-bold text-black mb-4">Maintenance Records</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2 px-4 text-black font-semibold">ID</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Vehicle</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Task</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Due Date</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Status</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Cost</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Technician</th>
                </tr>
              </thead>
              <tbody>
                {maintenanceRecords.map((record) => (
                  <tr key={record.id} className="border-b border-gray-300 hover:bg-gray-50">
                    <td className="py-2 px-4 text-black">{record.id}</td>
                    <td className="py-2 px-4 text-black font-semibold">{record.vehicle}</td>
                    <td className="py-2 px-4 text-black">{record.task}</td>
                    <td className="py-2 px-4 text-black">{record.dueDate}</td>
                    <td className="py-2 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(record.status)}`}>
                        {record.status}
                      </span>
                    </td>
                    <td className="py-2 px-4 text-black font-semibold">{record.cost}</td>
                    <td className="py-2 px-4 text-black">{record.technician}</td>
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
