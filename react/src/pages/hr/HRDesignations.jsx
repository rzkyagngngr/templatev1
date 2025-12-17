import React from 'react';
import { Briefcase, Plus, Edit2, Trash2 } from 'lucide-react';

export default function HRDesignations() {
  const designations = [
    { id: 1, title: 'Senior Developer', department: 'IT', level: 'Senior', salary: '$120K - $150K', positions: 8, status: 'Active' },
    { id: 2, title: 'Junior Developer', department: 'IT', level: 'Junior', salary: '$60K - $80K', positions: 12, status: 'Active' },
    { id: 3, title: 'HR Manager', department: 'HR', level: 'Manager', salary: '$90K - $110K', positions: 2, status: 'Active' },
    { id: 4, title: 'HR Executive', department: 'HR', level: 'Executive', salary: '$45K - $60K', positions: 3, status: 'Active' },
    { id: 5, title: 'Sales Executive', department: 'Sales', level: 'Executive', salary: '$50K - $70K', positions: 15, status: 'Active' },
    { id: 6, title: 'Finance Manager', department: 'Finance', level: 'Manager', salary: '$100K - $130K', positions: 3, status: 'Active' },
    { id: 7, title: 'Marketing Manager', department: 'Marketing', level: 'Manager', salary: '$85K - $110K', positions: 2, status: 'Active' },
    { id: 8, title: 'QA Engineer', department: 'IT', level: 'Mid-Level', salary: '$70K - $90K', positions: 6, status: 'Active' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-black">Designations</h1>
          <button className="px-6 py-2 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" /> Add Designation
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-4">
              <Briefcase className="w-10 h-10 text-blue-600" />
              <div>
                <p className="text-gray-700 font-medium">Total Designations</p>
                <p className="text-4xl font-bold text-black">51</p>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-4">
              <Briefcase className="w-10 h-10 text-green-600" />
              <div>
                <p className="text-gray-700 font-medium">Open Positions</p>
                <p className="text-4xl font-bold text-black">25</p>
              </div>
            </div>
          </div>
        </div>

        {/* Designations Table */}
        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-black mb-6">Designation List</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 text-left text-black font-semibold">Title</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Department</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Level</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Salary Range</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Positions</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Status</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {designations.map((desig) => (
                  <tr key={desig.id} className="border-b border-gray-200 hover:bg-white/30">
                    <td className="px-4 py-3 text-black font-medium">{desig.title}</td>
                    <td className="px-4 py-3 text-black">{desig.department}</td>
                    <td className="px-4 py-3 text-black">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">
                        {desig.level}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-black font-semibold">{desig.salary}</td>
                    <td className="px-4 py-3 text-black font-semibold">{desig.positions}</td>
                    <td className="px-4 py-3">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        {desig.status}
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
