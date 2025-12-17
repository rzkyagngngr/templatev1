import React from 'react';
import { Briefcase, Users, Plus, Edit2, Filter } from 'lucide-react';

export default function HRRecruitement() {
  const openJobs = [
    { id: 1, position: 'Senior Developer', department: 'IT', applicants: 28, status: 'Active', postedDate: '2024-12-01', deadline: '2025-02-01' },
    { id: 2, position: 'Junior Developer', department: 'IT', applicants: 45, status: 'Active', postedDate: '2024-12-15', deadline: '2025-02-15' },
    { id: 3, position: 'HR Manager', department: 'HR', applicants: 12, status: 'Active', postedDate: '2025-01-01', deadline: '2025-02-01' },
    { id: 4, position: 'Sales Executive', department: 'Sales', applicants: 52, status: 'Active', postedDate: '2024-11-15', deadline: '2025-01-30' },
    { id: 5, position: 'QA Engineer', department: 'IT', applicants: 18, status: 'Active', postedDate: '2025-01-05', deadline: '2025-02-05' },
    { id: 6, position: 'Marketing Manager', department: 'Marketing', applicants: 22, status: 'Active', postedDate: '2024-12-20', deadline: '2025-02-10' },
    { id: 7, position: 'Finance Analyst', department: 'Finance', applicants: 15, status: 'Closed', postedDate: '2024-10-01', deadline: '2024-12-31' },
    { id: 8, position: 'Support Executive', department: 'Support', applicants: 35, status: 'Active', postedDate: '2025-01-10', deadline: '2025-02-20' }
  ];

  const stats = [
    { label: 'Open Positions', value: '7', icon: Briefcase, color: 'text-blue-600' },
    { label: 'Total Applicants', value: '227', icon: Users, color: 'text-green-600' }
  ];

  const getStatusColor = (status) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-black">Recruitment</h1>
          <button className="px-6 py-2 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" /> Post Job
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

        {/* Recruitment Table */}
        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-black">Job Openings</h2>
            <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors">
              <Filter className="w-5 h-5 text-blue-600" />
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 text-left text-black font-semibold">Position</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Department</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Applicants</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Posted Date</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Deadline</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Status</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {openJobs.map((job) => (
                  <tr key={job.id} className="border-b border-gray-200 hover:bg-white/30">
                    <td className="px-4 py-3 text-black font-medium">{job.position}</td>
                    <td className="px-4 py-3 text-black">{job.department}</td>
                    <td className="px-4 py-3 text-black font-semibold">{job.applicants}</td>
                    <td className="px-4 py-3 text-black text-sm">{job.postedDate}</td>
                    <td className="px-4 py-3 text-black text-sm">{job.deadline}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(job.status)}`}>
                        {job.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 flex gap-2">
                      <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4 text-blue-600" />
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
