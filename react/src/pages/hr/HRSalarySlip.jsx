import React from 'react';
import { FileText, Download, Plus, Eye } from 'lucide-react';

export default function HRSalarySlip() {
  const salarySlips = [
    { id: 1, employee: 'John Doe', month: 'January 2025', netSalary: '$5300', issuedDate: '2025-01-31', status: 'Issued' },
    { id: 2, employee: 'Jane Smith', month: 'January 2025', netSalary: '$6400', issuedDate: '2025-01-31', status: 'Issued' },
    { id: 3, employee: 'Mike Johnson', month: 'January 2025', netSalary: '$4700', issuedDate: '2025-01-31', status: 'Pending' },
    { id: 4, employee: 'Sarah Williams', month: 'January 2025', netSalary: '$5850', issuedDate: '2025-01-31', status: 'Issued' },
    { id: 5, employee: 'Alex Brown', month: 'January 2025', netSalary: '$5020', issuedDate: '2025-01-31', status: 'Issued' },
    { id: 6, employee: 'Emily Davis', month: 'January 2025', netSalary: '$5530', issuedDate: '2025-01-31', status: 'Pending' },
    { id: 7, employee: 'David Wilson', month: 'January 2025', netSalary: '$5660', issuedDate: '2025-01-31', status: 'Issued' },
    { id: 8, employee: 'Lisa Anderson', month: 'January 2025', netSalary: '$6680', issuedDate: '2025-01-31', status: 'Issued' }
  ];

  const stats = [
    { label: 'Total Slips Issued', value: '248', color: 'text-blue-600' },
    { label: 'Pending Slips', value: '12', color: 'text-yellow-600' }
  ];

  const getStatusColor = (status) => {
    return status === 'Issued' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-black">Salary Slips</h1>
          <button className="px-6 py-2 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" /> Generate Slips
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-4">
                <FileText className="w-10 h-10 text-blue-600" />
                <div>
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                  <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Salary Slips Table */}
        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-black mb-6">Recent Salary Slips</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 text-left text-black font-semibold">Employee</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Month</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Net Salary</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Issued Date</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Status</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {salarySlips.map((slip) => (
                  <tr key={slip.id} className="border-b border-gray-200 hover:bg-white/30">
                    <td className="px-4 py-3 text-black font-medium">{slip.employee}</td>
                    <td className="px-4 py-3 text-black">{slip.month}</td>
                    <td className="px-4 py-3 text-black font-bold">{slip.netSalary}</td>
                    <td className="px-4 py-3 text-black text-sm">{slip.issuedDate}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(slip.status)}`}>
                        {slip.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 flex gap-2">
                      <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors" title="View">
                        <Eye className="w-4 h-4 text-blue-600" />
                      </button>
                      <button className="p-2 hover:bg-green-100 rounded-lg transition-colors" title="Download">
                        <Download className="w-4 h-4 text-green-600" />
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
