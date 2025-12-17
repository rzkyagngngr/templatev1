import React from 'react';
import { FileText, Plus, Edit2, Download } from 'lucide-react';

export default function HRPolicies() {
  const policies = [
    { id: 1, policyName: 'Code of Conduct', category: 'General', version: '2.0', lastUpdated: '2024-12-01', status: 'Active', applicableTo: 'All Employees' },
    { id: 2, policyName: 'Leave Policy', category: 'Benefits', version: '3.1', lastUpdated: '2025-01-05', status: 'Active', applicableTo: 'All Employees' },
    { id: 3, policyName: 'Work from Home Policy', category: 'Work Arrangement', version: '1.5', lastUpdated: '2024-11-15', status: 'Active', applicableTo: 'IT & Operations' },
    { id: 4, policyName: 'Anti-Harassment Policy', category: 'Compliance', version: '2.2', lastUpdated: '2024-10-20', status: 'Active', applicableTo: 'All Employees' },
    { id: 5, policyName: 'Travel & Expense Policy', category: 'Finance', version: '1.8', lastUpdated: '2025-01-01', status: 'Active', applicableTo: 'Senior Staff' },
    { id: 6, policyName: 'Training & Development', category: 'Learning', version: '2.0', lastUpdated: '2024-09-30', status: 'Review', applicableTo: 'All Employees' },
    { id: 7, policyName: 'Data Security Policy', category: 'IT Security', version: '3.0', lastUpdated: '2024-12-15', status: 'Active', applicableTo: 'All Employees' },
    { id: 8, policyName: 'Health & Safety Policy', category: 'Workplace Safety', version: '2.1', lastUpdated: '2024-11-25', status: 'Active', applicableTo: 'All Employees' }
  ];

  const stats = [
    { label: 'Total Policies', value: '32', color: 'text-blue-600' },
    { label: 'Under Review', value: '3', color: 'text-orange-600' }
  ];

  const getStatusColor = (status) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-black">HR Policies</h1>
          <button className="px-6 py-2 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" /> Add Policy
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

        {/* Policies Table */}
        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-black mb-6">Policy Repository</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 text-left text-black font-semibold">Policy Name</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Category</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Version</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Last Updated</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Applicable To</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Status</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {policies.map((policy) => (
                  <tr key={policy.id} className="border-b border-gray-200 hover:bg-white/30">
                    <td className="px-4 py-3 text-black font-medium">{policy.policyName}</td>
                    <td className="px-4 py-3 text-black">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">
                        {policy.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-black font-semibold">{policy.version}</td>
                    <td className="px-4 py-3 text-black text-sm">{policy.lastUpdated}</td>
                    <td className="px-4 py-3 text-black text-sm">{policy.applicableTo}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(policy.status)}`}>
                        {policy.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 flex gap-2">
                      <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors" title="View">
                        <FileText className="w-4 h-4 text-blue-600" />
                      </button>
                      <button className="p-2 hover:bg-green-100 rounded-lg transition-colors" title="Download">
                        <Download className="w-4 h-4 text-green-600" />
                      </button>
                      <button className="p-2 hover:bg-orange-100 rounded-lg transition-colors" title="Edit">
                        <Edit2 className="w-4 h-4 text-orange-600" />
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
