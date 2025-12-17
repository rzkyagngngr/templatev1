import React, { useState } from 'react';
import { Search, Filter, Plus, Edit2, Trash2 } from 'lucide-react';

export default function QATestCases() {
  const [testCases] = useState([
    { id: 1, name: 'Login with Valid Credentials', module: 'Authentication', status: 'Active', priority: 'High', created: '2025-01-10' },
    { id: 2, name: 'Password Reset Flow', module: 'Authentication', status: 'Active', priority: 'High', created: '2025-01-09' },
    { id: 3, name: 'User Registration', module: 'Users', status: 'Active', priority: 'Medium', created: '2025-01-08' },
    { id: 4, name: 'Product Search', module: 'Products', status: 'Inactive', priority: 'High', created: '2025-01-07' },
    { id: 5, name: 'Cart Operations', module: 'E-commerce', status: 'Active', priority: 'Critical', created: '2025-01-06' },
    { id: 6, name: 'Payment Processing', module: 'E-commerce', status: 'Active', priority: 'Critical', created: '2025-01-05' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const getPriorityColor = (priority) => {
    const colors = { Critical: 'text-red-600', High: 'text-orange-600', Medium: 'text-yellow-600', Low: 'text-green-600' };
    return colors[priority] || 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black">Test Cases</h1>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-slate-900 px-4 py-2 rounded-lg transition">
            <Plus className="w-4 h-4" /> New Test Case
          </button>
        </div>

        {/* Search & Filter */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 mb-6 hover:bg-white/50 transition">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search test cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/50 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/50 border border-gray-300 rounded-lg text-black hover:bg-white/70 transition">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>
        </div>

        {/* Test Cases Table */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg overflow-hidden hover:bg-white/50 transition">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-4 px-6 text-black font-bold">Test Case Name</th>
                <th className="text-left py-4 px-6 text-black font-bold">Module</th>
                <th className="text-left py-4 px-6 text-black font-bold">Status</th>
                <th className="text-left py-4 px-6 text-black font-bold">Priority</th>
                <th className="text-left py-4 px-6 text-black font-bold">Created</th>
                <th className="text-center py-4 px-6 text-black font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {testCases.map((test, idx) => (
                <tr key={test.id} className={`border-b border-gray-300 hover:bg-white/30 ${idx % 2 === 0 ? 'bg-white/10' : ''}`}>
                  <td className="py-4 px-6 text-black font-medium">{test.name}</td>
                  <td className="py-4 px-6 text-black">{test.module}</td>
                  <td className="py-4 px-6 text-black"><span className="px-3 py-1 bg-green-100/50 text-green-700 rounded-full text-sm">{test.status}</span></td>
                  <td className={`py-4 px-6 font-semibold ${getPriorityColor(test.priority)}`}>{test.priority}</td>
                  <td className="py-4 px-6 text-black text-sm">{test.created}</td>
                  <td className="py-4 px-6 flex justify-center gap-2">
                    <button className="p-2 hover:bg-white/50 rounded-lg transition"><Edit2 className="w-4 h-4 text-blue-600" /></button>
                    <button className="p-2 hover:bg-white/50 rounded-lg transition"><Trash2 className="w-4 h-4 text-red-600" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
