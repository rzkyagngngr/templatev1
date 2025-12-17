import React from 'react';
import { Building2, Users, Plus, Edit2, Trash2 } from 'lucide-react';

export default function HRDepartments() {
  const departments = [
    { id: 1, name: 'Information Technology', head: 'Robert Davis', employees: 45, budget: '$450K', status: 'Active' },
    { id: 2, name: 'Human Resources', head: 'Jessica Brown', employees: 12, budget: '$85K', status: 'Active' },
    { id: 3, name: 'Finance', head: 'Michael Garcia', employees: 28, budget: '$320K', status: 'Active' },
    { id: 4, name: 'Marketing', head: 'Amanda White', employees: 22, budget: '$200K', status: 'Active' },
    { id: 5, name: 'Operations', head: 'David Martinez', employees: 35, budget: '$280K', status: 'Active' },
    { id: 6, name: 'Sales', head: 'Christopher Lee', employees: 38, budget: '$360K', status: 'Active' },
    { id: 7, name: 'Customer Support', head: 'Sarah Taylor', employees: 18, budget: '$120K', status: 'Active' }
  ];

  const stats = [
    { label: 'Total Departments', value: '7', icon: Building2 },
    { label: 'Total Staff', value: '198', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-black">Departments</h1>
          <button className="px-6 py-2 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" /> Add Department
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-4">
                  <Icon className="w-10 h-10 text-blue-600" />
                  <div>
                    <p className="text-gray-700 font-medium">{stat.label}</p>
                    <p className="text-4xl font-bold text-black">{stat.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Departments Table */}
        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-black mb-6">Department List</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 text-left text-black font-semibold">Department Name</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Head</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Employees</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Budget</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Status</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((dept) => (
                  <tr key={dept.id} className="border-b border-gray-200 hover:bg-white/30">
                    <td className="px-4 py-3 text-black font-medium">{dept.name}</td>
                    <td className="px-4 py-3 text-black">{dept.head}</td>
                    <td className="px-4 py-3 text-black font-semibold">{dept.employees}</td>
                    <td className="px-4 py-3 text-black font-semibold">{dept.budget}</td>
                    <td className="px-4 py-3">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        {dept.status}
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
