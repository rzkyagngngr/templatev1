import React from 'react';
import { BookOpen, Plus, Edit2, Trash2, Users } from 'lucide-react';

export default function HRTraining() {
  const trainingPrograms = [
    { id: 1, programName: 'Leadership Development', department: 'All', startDate: '2025-01-15', endDate: '2025-03-15', participants: 24, status: 'Active', instructor: 'Dr. Sarah Martin' },
    { id: 2, programName: 'Technical Certification', department: 'IT', startDate: '2025-02-01', endDate: '2025-04-30', participants: 18, status: 'Scheduled', instructor: 'Robert Davis' },
    { id: 3, programName: 'Soft Skills Workshop', department: 'All', startDate: '2025-01-20', endDate: '2025-02-20', participants: 45, status: 'Active', instructor: 'Jessica Brown' },
    { id: 4, programName: 'Data Analytics Bootcamp', department: 'Finance', startDate: '2025-03-01', endDate: '2025-05-31', participants: 12, status: 'Scheduled', instructor: 'Michael Garcia' },
    { id: 5, programName: 'Sales Excellence Program', department: 'Sales', startDate: '2025-01-10', endDate: '2025-02-10', participants: 28, status: 'Completed', instructor: 'Christopher Lee' },
    { id: 6, programName: 'IT Security Training', department: 'IT', startDate: '2025-02-15', endDate: '2025-03-30', participants: 35, status: 'Scheduled', instructor: 'Alex Johnson' },
    { id: 7, programName: 'Customer Service Excellence', department: 'Support', startDate: '2025-01-25', endDate: '2025-02-25', participants: 22, status: 'Active', instructor: 'Sarah Taylor' },
    { id: 8, programName: 'Project Management Training', department: 'Operations', startDate: '2025-02-01', endDate: '2025-03-15', participants: 16, status: 'Scheduled', instructor: 'David Martinez' }
  ];

  const stats = [
    { label: 'Total Programs', value: '32', icon: BookOpen, color: 'text-blue-600' },
    { label: 'Active Training', value: '8', icon: Users, color: 'text-green-600' }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Active': 'bg-green-100 text-green-800',
      'Scheduled': 'bg-blue-100 text-blue-800',
      'Completed': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-black">Training Programs</h1>
          <button className="px-6 py-2 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" /> Add Program
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

        {/* Training Table */}
        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-black mb-6">Training Programs List</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 text-left text-black font-semibold">Program Name</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Department</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Start Date</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">End Date</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Participants</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Instructor</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Status</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {trainingPrograms.map((program) => (
                  <tr key={program.id} className="border-b border-gray-200 hover:bg-white/30">
                    <td className="px-4 py-3 text-black font-medium">{program.programName}</td>
                    <td className="px-4 py-3 text-black">{program.department}</td>
                    <td className="px-4 py-3 text-black text-sm">{program.startDate}</td>
                    <td className="px-4 py-3 text-black text-sm">{program.endDate}</td>
                    <td className="px-4 py-3 text-black font-semibold">{program.participants}</td>
                    <td className="px-4 py-3 text-black">{program.instructor}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(program.status)}`}>
                        {program.status}
                      </span>
                    </td>
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
