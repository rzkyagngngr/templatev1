import React from 'react';
import { UserPlus, CheckCircle, Plus, Edit2, Eye } from 'lucide-react';

export default function HROnboarding() {
  const onboardingData = [
    { id: 1, employee: 'Sarah Chen', joinDate: '2025-01-15', position: 'Senior Developer', department: 'IT', mentor: 'John Doe', progress: '75%', status: 'In Progress' },
    { id: 2, employee: 'Michael Park', joinDate: '2025-01-10', position: 'Junior Developer', department: 'IT', mentor: 'Robert Davis', progress: '100%', status: 'Completed' },
    { id: 3, employee: 'Lisa Zhang', joinDate: '2025-01-08', position: 'HR Specialist', department: 'HR', mentor: 'Jessica Brown', progress: '100%', status: 'Completed' },
    { id: 4, employee: 'James Wilson', joinDate: '2025-01-12', position: 'Finance Analyst', department: 'Finance', mentor: 'Michael Garcia', progress: '50%', status: 'In Progress' },
    { id: 5, employee: 'Rachel Thompson', joinDate: '2025-01-20', position: 'Marketing Specialist', department: 'Marketing', mentor: 'Amanda White', progress: '25%', status: 'In Progress' },
    { id: 6, employee: 'David Kumar', joinDate: '2025-01-22', position: 'Sales Executive', department: 'Sales', mentor: 'Christopher Lee', progress: '10%', status: 'Not Started' },
    { id: 7, employee: 'Emma Robinson', joinDate: '2025-01-05', position: 'QA Engineer', department: 'IT', mentor: 'Robert Davis', progress: '100%', status: 'Completed' },
    { id: 8, employee: 'Oliver Hayes', joinDate: '2025-01-18', position: 'Support Executive', department: 'Support', mentor: 'Sarah Taylor', progress: '40%', status: 'In Progress' }
  ];

  const stats = [
    { label: 'Total Onboarding', value: '18', icon: UserPlus, color: 'text-blue-600' },
    { label: 'Completed', value: '8', icon: CheckCircle, color: 'text-green-600' }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Completed': 'bg-green-100 text-green-800',
      'In Progress': 'bg-blue-100 text-blue-800',
      'Not Started': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-black">Onboarding</h1>
          <button className="px-6 py-2 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" /> New Onboarding
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

        {/* Onboarding Table */}
        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-black mb-6">Onboarding Progress</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 text-left text-black font-semibold">Employee</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Position</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Department</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Join Date</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Mentor</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Progress</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Status</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {onboardingData.map((record) => (
                  <tr key={record.id} className="border-b border-gray-200 hover:bg-white/30">
                    <td className="px-4 py-3 text-black font-medium">{record.employee}</td>
                    <td className="px-4 py-3 text-black">{record.position}</td>
                    <td className="px-4 py-3 text-black">{record.department}</td>
                    <td className="px-4 py-3 text-black text-sm">{record.joinDate}</td>
                    <td className="px-4 py-3 text-black">{record.mentor}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-300 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: record.progress }}
                          />
                        </div>
                        <span className="text-black text-sm font-semibold">{record.progress}</span>
                      </div>
                    </td>
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
