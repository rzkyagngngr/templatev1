import React, { useState } from 'react';
import { Plus, Search, Filter, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function OperationsTickets() {
  const [tickets] = useState([
    { id: 'TKT-001', title: 'Server CPU high', priority: 'Critical', status: 'Open', assignee: 'John Doe', created: '2025-01-15' },
    { id: 'TKT-002', title: 'Database maintenance', priority: 'High', status: 'In Progress', assignee: 'Jane Smith', created: '2025-01-14' },
    { id: 'TKT-003', title: 'Backup verification', priority: 'Medium', status: 'In Progress', assignee: 'Mike Johnson', created: '2025-01-13' },
    { id: 'TKT-004', title: 'Network upgrade', priority: 'High', status: 'Scheduled', assignee: 'Sarah Davis', created: '2025-01-12' },
    { id: 'TKT-005', title: 'Security patch', priority: 'Critical', status: 'Open', assignee: 'Tom Wilson', created: '2025-01-11' },
    { id: 'TKT-006', title: 'Log rotation setup', priority: 'Low', status: 'Resolved', assignee: 'John Doe', created: '2025-01-10' }
  ]);

  const getPriorityColor = (priority) => {
    const colors = { Critical: 'text-red-600', High: 'text-orange-600', Medium: 'text-yellow-600', Low: 'text-green-600' };
    return colors[priority] || 'text-gray-600';
  };

  const getStatusIcon = (status) => {
    if (status === 'Open') return <AlertCircle className="w-4 h-4" />;
    if (status === 'Resolved') return <CheckCircle className="w-4 h-4" />;
    return <Clock className="w-4 h-4" />;
  };

  const getStatusColor = (status) => {
    if (status === 'Open') return 'text-red-600';
    if (status === 'Resolved') return 'text-green-600';
    return 'text-blue-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black">Operations Tickets</h1>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-slate-900 px-4 py-2 rounded-lg transition">
            <Plus className="w-4 h-4" /> New Ticket
          </button>
        </div>

        {/* Search & Filter */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 mb-6 hover:bg-white/50 transition">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search tickets..."
                className="w-full pl-10 pr-4 py-2 bg-white/50 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/50 border border-gray-300 rounded-lg text-black hover:bg-white/70 transition">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>
        </div>

        {/* Tickets Table */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg overflow-hidden hover:bg-white/50 transition">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-4 px-6 text-black font-bold">Ticket ID</th>
                <th className="text-left py-4 px-6 text-black font-bold">Title</th>
                <th className="text-left py-4 px-6 text-black font-bold">Priority</th>
                <th className="text-left py-4 px-6 text-black font-bold">Status</th>
                <th className="text-left py-4 px-6 text-black font-bold">Assignee</th>
                <th className="text-left py-4 px-6 text-black font-bold">Created</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket, idx) => (
                <tr key={ticket.id} className={`border-b border-gray-300 hover:bg-white/30 ${idx % 2 === 0 ? 'bg-white/10' : ''}`}>
                  <td className="py-4 px-6 text-black font-bold">{ticket.id}</td>
                  <td className="py-4 px-6 text-black font-medium">{ticket.title}</td>
                  <td className={`py-4 px-6 font-semibold ${getPriorityColor(ticket.priority)}`}>{ticket.priority}</td>
                  <td className={`py-4 px-6 flex items-center gap-2 font-semibold ${getStatusColor(ticket.status)}`}>
                    {getStatusIcon(ticket.status)} {ticket.status}
                  </td>
                  <td className="py-4 px-6 text-black">{ticket.assignee}</td>
                  <td className="py-4 px-6 text-black text-sm">{ticket.created}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
