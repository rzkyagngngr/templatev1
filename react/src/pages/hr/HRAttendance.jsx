import React from 'react';
import { Clock, CheckCircle, AlertCircle, Plus } from 'lucide-react';

export default function HRAttendance() {
  const attendanceRecords = [
    { id: 1, employee: 'John Doe', date: '2025-01-15', checkIn: '09:00 AM', checkOut: '06:00 PM', hours: '9.0', status: 'Present' },
    { id: 2, employee: 'Jane Smith', date: '2025-01-15', checkIn: '08:45 AM', checkOut: '05:45 PM', hours: '9.0', status: 'Present' },
    { id: 3, employee: 'Mike Johnson', date: '2025-01-15', checkIn: '09:30 AM', checkOut: '06:30 PM', hours: '9.0', status: 'Late' },
    { id: 4, employee: 'Sarah Williams', date: '2025-01-15', checkIn: 'N/A', checkOut: 'N/A', hours: '0.0', status: 'Absent' },
    { id: 5, employee: 'Alex Brown', date: '2025-01-15', checkIn: '09:00 AM', checkOut: 'N/A', hours: '4.5', status: 'Half Day' },
    { id: 6, employee: 'Emily Davis', date: '2025-01-15', checkIn: '09:00 AM', checkOut: '06:00 PM', hours: '9.0', status: 'Present' },
    { id: 7, employee: 'David Wilson', date: '2025-01-15', checkIn: '09:00 AM', checkOut: '06:00 PM', hours: '9.0', status: 'Present' },
    { id: 8, employee: 'Lisa Anderson', date: '2025-01-15', checkIn: '09:00 AM', checkOut: '05:30 PM', hours: '8.5', status: 'Present' }
  ];

  const stats = [
    { label: 'Present Today', value: '232', icon: CheckCircle, color: 'text-green-600' },
    { label: 'Absent', value: '8', icon: AlertCircle, color: 'text-red-600' },
    { label: 'Late', value: '5', icon: Clock, color: 'text-yellow-600' },
    { label: 'On Leave', value: '3', icon: Clock, color: 'text-blue-600' }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Present': 'bg-green-100 text-green-800',
      'Absent': 'bg-red-100 text-red-800',
      'Late': 'bg-yellow-100 text-yellow-800',
      'Half Day': 'bg-orange-100 text-orange-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-black">Attendance</h1>
          <button className="px-6 py-2 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" /> Manual Entry
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                </div>
                <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Attendance Table */}
        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-black mb-6">Today's Attendance</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 text-left text-black font-semibold">Employee</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Date</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Check In</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Check Out</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Hours</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceRecords.map((record) => (
                  <tr key={record.id} className="border-b border-gray-200 hover:bg-white/30">
                    <td className="px-4 py-3 text-black font-medium">{record.employee}</td>
                    <td className="px-4 py-3 text-black text-sm">{record.date}</td>
                    <td className="px-4 py-3 text-black">{record.checkIn}</td>
                    <td className="px-4 py-3 text-black">{record.checkOut}</td>
                    <td className="px-4 py-3 text-black font-semibold">{record.hours}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(record.status)}`}>
                        {record.status}
                      </span>
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
