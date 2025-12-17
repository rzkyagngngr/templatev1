import React from 'react';
import { Calendar, Plus, Edit2, Trash2 } from 'lucide-react';

export default function HRLeaves() {
  const leaves = [
    { id: 1, employee: 'John Doe', leaveType: 'Sick Leave', fromDate: '2025-01-20', toDate: '2025-01-21', days: 2, status: 'Pending', approver: 'Jane Smith' },
    { id: 2, employee: 'Jane Smith', leaveType: 'Annual Leave', fromDate: '2025-02-01', toDate: '2025-02-05', days: 5, status: 'Approved', approver: 'Michael Garcia' },
    { id: 3, employee: 'Mike Johnson', leaveType: 'Casual Leave', fromDate: '2025-01-25', toDate: '2025-01-25', days: 1, status: 'Approved', approver: 'Michael Garcia' },
    { id: 4, employee: 'Sarah Williams', leaveType: 'Maternity Leave', fromDate: '2025-03-01', toDate: '2025-05-31', days: 90, status: 'Pending', approver: 'Jessica Brown' },
    { id: 5, employee: 'Alex Brown', leaveType: 'Annual Leave', fromDate: '2025-02-10', toDate: '2025-02-15', days: 6, status: 'Rejected', approver: 'Jane Smith' },
    { id: 6, employee: 'Emily Davis', leaveType: 'Compensatory Leave', fromDate: '2025-01-30', toDate: '2025-01-30', days: 1, status: 'Approved', approver: 'Jessica Brown' },
    { id: 7, employee: 'David Wilson', leaveType: 'Bereavement Leave', fromDate: '2025-01-22', toDate: '2025-01-24', days: 3, status: 'Approved', approver: 'Jane Smith' },
    { id: 8, employee: 'Lisa Anderson', leaveType: 'Annual Leave', fromDate: '2025-02-20', toDate: '2025-02-25', days: 6, status: 'Pending', approver: 'Michael Garcia' }
  ];

  const stats = [
    { label: 'Total Leave Requests', value: '156', color: 'text-blue-600' },
    { label: 'Pending Approval', value: '12', color: 'text-yellow-600' },
    { label: 'Approved', value: '138', color: 'text-green-600' },
    { label: 'Rejected', value: '6', color: 'text-red-600' }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Pending': 'bg-yellow-100 text-yellow-800',
      'Approved': 'bg-green-100 text-green-800',
      'Rejected': 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-black">Leaves</h1>
          <button className="px-6 py-2 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" /> Request Leave
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-4 shadow-md">
              <p className="text-gray-700 text-sm font-medium mb-1">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Leaves Table */}
        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-black mb-6">Leave Requests</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 text-left text-black font-semibold">Employee</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Leave Type</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">From Date</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">To Date</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Days</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Status</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Approver</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {leaves.map((leave) => (
                  <tr key={leave.id} className="border-b border-gray-200 hover:bg-white/30">
                    <td className="px-4 py-3 text-black font-medium">{leave.employee}</td>
                    <td className="px-4 py-3 text-black">{leave.leaveType}</td>
                    <td className="px-4 py-3 text-black text-sm">{leave.fromDate}</td>
                    <td className="px-4 py-3 text-black text-sm">{leave.toDate}</td>
                    <td className="px-4 py-3 text-black font-semibold">{leave.days}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(leave.status)}`}>
                        {leave.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-black">{leave.approver}</td>
                    <td className="px-4 py-3 flex gap-2">
                      <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4 text-blue-600" />
                      </button>
                      <button className="p-2 hover:bg-red-100 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-red-600" />
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
