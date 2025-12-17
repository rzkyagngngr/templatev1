import React from 'react';
import { TrendingUp, Star, Plus, Edit2, Eye } from 'lucide-react';

export default function HRPerformance() {
  const performanceData = [
    { id: 1, employee: 'John Doe', department: 'IT', rating: '4.5/5.0', reviewPeriod: 'Q4 2024', lastReview: '2025-01-15', status: 'Reviewed', manager: 'Robert Davis' },
    { id: 2, employee: 'Jane Smith', department: 'HR', rating: '4.8/5.0', reviewPeriod: 'Q4 2024', lastReview: '2025-01-14', status: 'Reviewed', manager: 'Jessica Brown' },
    { id: 3, employee: 'Mike Johnson', department: 'Finance', rating: '4.2/5.0', reviewPeriod: 'Q4 2024', lastReview: '2025-01-13', status: 'Pending', manager: 'Michael Garcia' },
    { id: 4, employee: 'Sarah Williams', department: 'Marketing', rating: '4.6/5.0', reviewPeriod: 'Q4 2024', lastReview: '2025-01-12', status: 'Reviewed', manager: 'Amanda White' },
    { id: 5, employee: 'Alex Brown', department: 'IT', rating: '4.1/5.0', reviewPeriod: 'Q4 2024', lastReview: '2025-01-11', status: 'Reviewed', manager: 'Robert Davis' },
    { id: 6, employee: 'Emily Davis', department: 'Operations', rating: '4.7/5.0', reviewPeriod: 'Q4 2024', lastReview: '2025-01-10', status: 'Reviewed', manager: 'David Martinez' },
    { id: 7, employee: 'David Wilson', department: 'Sales', rating: '4.4/5.0', reviewPeriod: 'Q4 2024', lastReview: '2025-01-09', status: 'Reviewed', manager: 'Christopher Lee' },
    { id: 8, employee: 'Lisa Anderson', department: 'IT', rating: '4.9/5.0', reviewPeriod: 'Q4 2024', lastReview: '2025-01-08', status: 'Reviewed', manager: 'Robert Davis' }
  ];

  const stats = [
    { label: 'Average Rating', value: '4.5/5.0', icon: Star, color: 'text-yellow-600' },
    { label: 'Reviews Completed', value: '234', icon: TrendingUp, color: 'text-green-600' }
  ];

  const getRatingColor = (rating) => {
    const score = parseFloat(rating);
    if (score >= 4.7) return 'text-green-700 font-bold';
    if (score >= 4.3) return 'text-blue-700 font-bold';
    return 'text-orange-700 font-bold';
  };

  const getStatusColor = (status) => {
    return status === 'Reviewed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-black">Performance Management</h1>
          <button className="px-6 py-2 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" /> Add Review
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

        {/* Performance Table */}
        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-black mb-6">Performance Reviews</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 text-left text-black font-semibold">Employee</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Department</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Rating</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Review Period</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Last Review</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Manager</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Status</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {performanceData.map((record) => (
                  <tr key={record.id} className="border-b border-gray-200 hover:bg-white/30">
                    <td className="px-4 py-3 text-black font-medium">{record.employee}</td>
                    <td className="px-4 py-3 text-black">{record.department}</td>
                    <td className={`px-4 py-3 ${getRatingColor(record.rating)}`}>{record.rating}</td>
                    <td className="px-4 py-3 text-black">{record.reviewPeriod}</td>
                    <td className="px-4 py-3 text-black text-sm">{record.lastReview}</td>
                    <td className="px-4 py-3 text-black">{record.manager}</td>
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
