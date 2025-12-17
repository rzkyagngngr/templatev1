import React, { useState } from 'react';
import { Shield, Edit, Trash2, Plus } from 'lucide-react';

const CompliancePolicies = () => {
  const [status] = useState('CREATED');

  const policies = [
    { id: 1, name: 'Data Protection Policy', category: 'Privacy', version: '2.1', lastUpdated: '2025-11-20', status: 'Active' },
    { id: 2, name: 'Information Security Policy', category: 'Security', version: '3.0', lastUpdated: '2025-10-15', status: 'Active' },
    { id: 3, name: 'Incident Response Policy', category: 'Operations', version: '1.8', lastUpdated: '2025-12-01', status: 'Active' },
    { id: 4, name: 'Third-Party Risk Management', category: 'Vendor', version: '1.5', lastUpdated: '2025-09-30', status: 'Under Review' },
    { id: 5, name: 'Business Continuity Policy', category: 'Operations', version: '2.0', lastUpdated: '2025-08-10', status: 'Active' }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Privacy':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Security':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'Operations':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Vendor':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-black mb-2">Compliance Policies</h1>
          <p className="text-gray-600">Status: <span className="font-semibold text-green-600">{status}</span></p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-slate-900 px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Policy
        </button>
      </div>

      <div className="glass-card border border-gray-300 rounded-lg p-6 backdrop-blur-md bg-white bg-opacity-60">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-4 px-6 text-black font-semibold">Policy Name</th>
                <th className="text-left py-4 px-6 text-black font-semibold">Category</th>
                <th className="text-left py-4 px-6 text-black font-semibold">Version</th>
                <th className="text-left py-4 px-6 text-black font-semibold">Last Updated</th>
                <th className="text-left py-4 px-6 text-black font-semibold">Status</th>
                <th className="text-left py-4 px-6 text-black font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {policies.map((policy) => (
                <tr key={policy.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-black font-medium flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                    {policy.name}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`${getCategoryColor(policy.category)} px-3 py-1 rounded-full text-sm font-semibold border`}>
                      {policy.category}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-black font-medium">v{policy.version}</td>
                  <td className="py-4 px-6 text-black">{policy.lastUpdated}</td>
                  <td className="py-4 px-6">
                    <span className={`${policy.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'} px-3 py-1 rounded-full text-sm font-semibold`}>
                      {policy.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800 p-1">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-800 p-1">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompliancePolicies;
