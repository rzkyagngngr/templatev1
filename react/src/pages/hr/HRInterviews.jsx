import React from 'react';
import { Calendar, Plus, Edit2, Trash2, Check } from 'lucide-react';

export default function HRInterviews() {
  const interviews = [
    { id: 1, candidate: 'Alice Johnson', position: 'Senior Developer', interviewer: 'Robert Davis', date: '2025-01-20', time: '10:00 AM', round: 'Round 1', status: 'Scheduled' },
    { id: 2, candidate: 'Bob Williams', position: 'Junior Developer', interviewer: 'Robert Davis', date: '2025-01-22', time: '02:00 PM', round: 'Round 1', status: 'Scheduled' },
    { id: 3, candidate: 'Carol Martinez', position: 'HR Manager', interviewer: 'Jessica Brown', date: '2025-01-21', time: '11:00 AM', round: 'Round 2', status: 'Completed' },
    { id: 4, candidate: 'David Brown', position: 'Sales Executive', interviewer: 'Christopher Lee', date: '2025-01-25', time: '03:00 PM', round: 'Round 1', status: 'Scheduled' },
    { id: 5, candidate: 'Emma Davis', position: 'QA Engineer', interviewer: 'Robert Davis', date: '2025-01-23', time: '09:00 AM', round: 'Round 1', status: 'Scheduled' },
    { id: 6, candidate: 'Frank Wilson', position: 'Marketing Manager', interviewer: 'Amanda White', date: '2025-01-18', time: '04:00 PM', round: 'Final', status: 'Completed' },
    { id: 7, candidate: 'Grace Lee', position: 'Finance Analyst', interviewer: 'Michael Garcia', date: '2025-01-17', time: '01:00 PM', round: 'Round 1', status: 'Completed' },
    { id: 8, candidate: 'Henry Taylor', position: 'Support Executive', interviewer: 'Sarah Taylor', date: '2025-01-26', time: '10:30 AM', round: 'Round 1', status: 'Scheduled' }
  ];

  const stats = [
    { label: 'Total Interviews', value: '45', color: 'text-blue-600' },
    { label: 'Completed', value: '28', color: 'text-green-600' }
  ];

  const getStatusColor = (status) => {
    return status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-black">Interviews</h1>
          <button className="px-6 py-2 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" /> Schedule Interview
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-4">
                <Calendar className="w-10 h-10 text-blue-600" />
                <div>
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                  <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interviews Table */}
        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-black mb-6">Interview Schedule</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 text-left text-black font-semibold">Candidate</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Position</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Interviewer</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Date</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Time</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Round</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Status</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {interviews.map((interview) => (
                  <tr key={interview.id} className="border-b border-gray-200 hover:bg-white/30">
                    <td className="px-4 py-3 text-black font-medium">{interview.candidate}</td>
                    <td className="px-4 py-3 text-black">{interview.position}</td>
                    <td className="px-4 py-3 text-black">{interview.interviewer}</td>
                    <td className="px-4 py-3 text-black text-sm">{interview.date}</td>
                    <td className="px-4 py-3 text-black">{interview.time}</td>
                    <td className="px-4 py-3 text-black">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">
                        {interview.round}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(interview.status)}`}>
                        {interview.status}
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
