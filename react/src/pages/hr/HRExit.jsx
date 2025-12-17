import React from 'react';
import { LogOut, Plus, Edit2, Eye } from 'lucide-react';

export default function HRExit() {
  const exitData = [
    { id: 1, employee: 'Robert Thompson', department: 'IT', position: 'Senior Developer', lastWorkingDay: '2025-01-31', reason: 'Career Growth', exitInterview: 'Pending', approver: 'Robert Davis' },
    { id: 2, employee: 'Patricia Brown', department: 'HR', position: 'HR Specialist', lastWorkingDay: '2025-02-15', reason: 'Relocation', exitInterview: 'Completed', approver: 'Jessica Brown' },
    { id: 3, employee: 'Charles Wilson', department: 'Sales', position: 'Sales Manager', lastWorkingDay: '2025-02-28', reason: 'Health Issues', exitInterview: 'Pending', approver: 'Christopher Lee' },
    { id: 4, employee: 'Margaret Garcia', department: 'Marketing', position: 'Marketing Executive', lastWorkingDay: '2025-01-20', reason: 'Family Reasons', exitInterview: 'Completed', approver: 'Amanda White' },
    { id: 5, employee: 'Donald Martinez', department: 'Finance', position: 'Finance Analyst', lastWorkingDay: '2025-02-10', reason: 'Pursuing Further Studies', exitInterview: 'Pending', approver: 'Michael Garcia' },
    { id: 6, employee: 'Jennifer Taylor', department: 'Operations', position: 'Operations Manager', lastWorkingDay: '2025-01-25', reason: 'Entrepreneur', exitInterview: 'Completed', approver: 'David Martinez' },
    { id: 7, employee: 'Thomas Anderson', department: 'IT', position: 'QA Engineer', lastWorkingDay: '2025-02-05', reason: 'Better Opportunity', exitInterview: 'Pending', approver: 'Robert Davis' },
    { id: 8, employee: 'Elizabeth Moore', department: 'Support', position: 'Support Executive', lastWorkingDay: '2025-01-15', reason: 'Retirement', exitInterview: 'Completed', approver: 'Sarah Taylor' }
  ];

  const stats = [
    { label: 'Total Exits', value: '18', color: 'text-red-600' },
    { label: 'This Quarter', value: '8', color: 'text-orange-600' }
  ];

  const getInterviewColor = (status) => {
    return status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-black">Exit Management</h1>
          <button className="px-6 py-2 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" /> Record Exit
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-4">
                <LogOut className="w-10 h-10 text-blue-600" />
                <div>
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                  <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Exit Data Table */}
        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-black mb-6">Employee Exits</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 text-left text-black font-semibold">Employee</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Department</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Position</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Last Working Day</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Reason</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Exit Interview</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Approver</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {exitData.map((record) => (
                  <tr key={record.id} className="border-b border-gray-200 hover:bg-white/30">
                    <td className="px-4 py-3 text-black font-medium">{record.employee}</td>
                    <td className="px-4 py-3 text-black">{record.department}</td>
                    <td className="px-4 py-3 text-black">{record.position}</td>
                    <td className="px-4 py-3 text-black text-sm">{record.lastWorkingDay}</td>
                    <td className="px-4 py-3 text-black">{record.reason}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getInterviewColor(record.exitInterview)}`}>
                        {record.exitInterview}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-black">{record.approver}</td>
                    <td className="px-4 py-3 flex gap-2">
                      <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-blue-600" />
                      </button>
                      <button className="p-2 hover:bg-green-100 rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4 text-green-600" />
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
