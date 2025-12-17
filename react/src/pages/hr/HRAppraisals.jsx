import React from 'react';
import { Award, TrendingUp, Plus, Edit2, Eye } from 'lucide-react';

export default function HRAppraisals() {
  const appraisalData = [
    { id: 1, employee: 'John Doe', department: 'IT', currentSalary: '$60K', proposedSalary: '$66K', increment: '10%', appraisalDate: '2025-01-15', status: 'Approved', reviewer: 'Robert Davis' },
    { id: 2, employee: 'Jane Smith', department: 'HR', currentSalary: '$70K', proposedSalary: '$75K', increment: '7.1%', appraisalDate: '2025-01-14', status: 'Approved', reviewer: 'Jessica Brown' },
    { id: 3, employee: 'Mike Johnson', department: 'Finance', currentSalary: '$55K', proposedSalary: '$60K', increment: '9.1%', appraisalDate: '2025-01-13', status: 'Pending', reviewer: 'Michael Garcia' },
    { id: 4, employee: 'Sarah Williams', department: 'Marketing', currentSalary: '$65K', proposedSalary: '$72K', increment: '10.8%', appraisalDate: '2025-01-12', status: 'Approved', reviewer: 'Amanda White' },
    { id: 5, employee: 'Alex Brown', department: 'IT', currentSalary: '$52K', proposedSalary: '$56K', increment: '7.7%', appraisalDate: '2025-01-11', status: 'Approved', reviewer: 'Robert Davis' },
    { id: 6, employee: 'Emily Davis', department: 'Operations', currentSalary: '$58K', proposedSalary: '$64K', increment: '10.3%', appraisalDate: '2025-01-10', status: 'Approved', reviewer: 'David Martinez' },
    { id: 7, employee: 'David Wilson', department: 'Sales', currentSalary: '$50K', proposedSalary: '$53K', increment: '6%', appraisalDate: '2025-01-09', status: 'In Review', reviewer: 'Christopher Lee' },
    { id: 8, employee: 'Lisa Anderson', department: 'IT', currentSalary: '$72K', proposedSalary: '$80K', increment: '11.1%', appraisalDate: '2025-01-08', status: 'Approved', reviewer: 'Robert Davis' }
  ];

  const stats = [
    { label: 'Total Appraisals', value: '248', icon: Award, color: 'text-blue-600' },
    { label: 'Avg. Increment', value: '8.8%', icon: TrendingUp, color: 'text-green-600' }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Approved': 'bg-green-100 text-green-800',
      'Pending': 'bg-yellow-100 text-yellow-800',
      'In Review': 'bg-blue-100 text-blue-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-black">Appraisals & Increments</h1>
          <button className="px-6 py-2 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" /> New Appraisal
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-4">
                  <Icon className={`w-10 h-10 ${stat.color}`} />
                  <div>
                    <p className="text-gray-700 font-medium">{stat.label}</p>
                    <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Appraisals Table */}
        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-black mb-6">Appraisal Records</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 text-left text-black font-semibold">Employee</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Department</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Current Salary</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Proposed Salary</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Increment</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Appraisal Date</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Status</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appraisalData.map((record) => (
                  <tr key={record.id} className="border-b border-gray-200 hover:bg-white/30">
                    <td className="px-4 py-3 text-black font-medium">{record.employee}</td>
                    <td className="px-4 py-3 text-black">{record.department}</td>
                    <td className="px-4 py-3 text-black font-semibold">{record.currentSalary}</td>
                    <td className="px-4 py-3 text-black font-semibold text-green-600">{record.proposedSalary}</td>
                    <td className="px-4 py-3 text-black font-bold">{record.increment}</td>
                    <td className="px-4 py-3 text-black text-sm">{record.appraisalDate}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(record.status)}`}>
                        {record.status}
                      </span>
                    </td>
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
