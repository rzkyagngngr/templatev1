import React from 'react';
import { Users, TrendingUp, Plus, Eye, Mail } from 'lucide-react';

export default function HRCandidates() {
  const candidates = [
    { id: 1, name: 'Alice Johnson', position: 'Senior Developer', email: 'alice@email.com', phone: '+1-234-567-8901', appliedDate: '2025-01-10', status: 'Interview Scheduled' },
    { id: 2, name: 'Bob Williams', position: 'Junior Developer', email: 'bob@email.com', phone: '+1-234-567-8902', appliedDate: '2025-01-12', status: 'Under Review' },
    { id: 3, name: 'Carol Martinez', position: 'HR Manager', email: 'carol@email.com', phone: '+1-234-567-8903', appliedDate: '2025-01-08', status: 'Shortlisted' },
    { id: 4, name: 'David Brown', position: 'Sales Executive', email: 'david@email.com', phone: '+1-234-567-8904', appliedDate: '2025-01-14', status: 'Under Review' },
    { id: 5, name: 'Emma Davis', position: 'QA Engineer', email: 'emma@email.com', phone: '+1-234-567-8905', appliedDate: '2025-01-11', status: 'Interview Scheduled' },
    { id: 6, name: 'Frank Wilson', position: 'Marketing Manager', email: 'frank@email.com', phone: '+1-234-567-8906', appliedDate: '2025-01-09', status: 'Offer Made' },
    { id: 7, name: 'Grace Lee', position: 'Finance Analyst', email: 'grace@email.com', phone: '+1-234-567-8907', appliedDate: '2025-01-07', status: 'Rejected' },
    { id: 8, name: 'Henry Taylor', position: 'Support Executive', email: 'henry@email.com', phone: '+1-234-567-8908', appliedDate: '2025-01-13', status: 'Under Review' }
  ];

  const stats = [
    { label: 'Total Candidates', value: '227', icon: Users, color: 'text-blue-600' },
    { label: 'Shortlisted', value: '32', icon: TrendingUp, color: 'text-green-600' }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Under Review': 'bg-yellow-100 text-yellow-800',
      'Shortlisted': 'bg-blue-100 text-blue-800',
      'Interview Scheduled': 'bg-purple-100 text-purple-800',
      'Offer Made': 'bg-green-100 text-green-800',
      'Rejected': 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-black">Candidates</h1>
          <button className="px-6 py-2 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" /> Add Candidate
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

        {/* Candidates Table */}
        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-black mb-6">Recent Candidates</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 text-left text-black font-semibold">Name</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Position</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Email</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Phone</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Applied Date</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Status</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {candidates.map((candidate) => (
                  <tr key={candidate.id} className="border-b border-gray-200 hover:bg-white/30">
                    <td className="px-4 py-3 text-black font-medium">{candidate.name}</td>
                    <td className="px-4 py-3 text-black">{candidate.position}</td>
                    <td className="px-4 py-3 text-black text-sm">{candidate.email}</td>
                    <td className="px-4 py-3 text-black text-sm">{candidate.phone}</td>
                    <td className="px-4 py-3 text-black text-sm">{candidate.appliedDate}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(candidate.status)}`}>
                        {candidate.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 flex gap-2">
                      <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors" title="View Profile">
                        <Eye className="w-4 h-4 text-blue-600" />
                      </button>
                      <button className="p-2 hover:bg-green-100 rounded-lg transition-colors" title="Send Email">
                        <Mail className="w-4 h-4 text-green-600" />
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
