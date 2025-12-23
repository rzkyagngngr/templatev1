import React, { useState } from 'react';
import { Plus, Search, Filter, Clock, CheckCircle2, AlertCircle, User, Calendar, Tag, MessageSquare, XCircle, MoreVertical } from 'lucide-react';

export default function OperationsTickets() {
  const [tickets] = useState([
    { id: 'TKT-001', title: 'Server CPU high usage alert', priority: 'Critical', status: 'Open', assignee: 'John Doe', created: '2025-01-15', updated: '2 hours ago', category: 'Performance', description: 'CPU usage consistently above 90%', comments: 5 },
    { id: 'TKT-002', title: 'Database maintenance required', priority: 'High', status: 'In Progress', assignee: 'Jane Smith', created: '2025-01-14', updated: '5 hours ago', category: 'Maintenance', description: 'Scheduled database optimization', comments: 3 },
    { id: 'TKT-003', title: 'Backup verification failed', priority: 'Medium', status: 'In Progress', assignee: 'Mike Johnson', created: '2025-01-13', updated: '1 day ago', category: 'Backup', description: 'Daily backup integrity check failed', comments: 7 },
    { id: 'TKT-004', title: 'Network infrastructure upgrade', priority: 'High', status: 'Scheduled', assignee: 'Sarah Davis', created: '2025-01-12', updated: '2 days ago', category: 'Infrastructure', description: 'Upgrade to 10Gbps network', comments: 2 },
    { id: 'TKT-005', title: 'Critical security patch deployment', priority: 'Critical', status: 'Open', assignee: 'Tom Wilson', created: '2025-01-11', updated: '3 hours ago', category: 'Security', description: 'Deploy CVE-2024-xxxxx patch', comments: 8 },
    { id: 'TKT-006', title: 'Log rotation configuration', priority: 'Low', status: 'Resolved', assignee: 'John Doe', created: '2025-01-10', updated: '4 days ago', category: 'Configuration', description: 'Setup automated log rotation', comments: 1 },
    { id: 'TKT-007', title: 'SSL certificate renewal', priority: 'Medium', status: 'Scheduled', assignee: 'Emily Chen', created: '2025-01-09', updated: '1 week ago', category: 'Security', description: 'Renew expiring SSL certificates', comments: 4 },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const getPriorityConfig = (priority) => {
    const configs = {
      Critical: { bg: 'bg-red-500/20', border: 'border-red-500/30', text: 'text-red-700', icon: 'text-red-600' },
      High: { bg: 'bg-orange-500/20', border: 'border-orange-500/30', text: 'text-orange-700', icon: 'text-orange-600' },
      Medium: { bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-700', icon: 'text-blue-600' },
      Low: { bg: 'bg-slate-500/20', border: 'border-slate-500/30', text: 'text-slate-700', icon: 'text-slate-600' }
    };
    return configs[priority] || configs.Medium;
  };

  const getStatusConfig = (status) => {
    const configs = {
      Open: { icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-500/20', border: 'border-red-500/30', text: 'text-red-700' },
      'In Progress': { icon: Clock, color: 'text-blue-600', bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-700' },
      Scheduled: { icon: Calendar, color: 'text-purple-600', bg: 'bg-purple-500/20', border: 'border-purple-500/30', text: 'text-purple-700' },
      Resolved: { icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-500/20', border: 'border-green-500/30', text: 'text-green-700' },
      Closed: { icon: XCircle, color: 'text-slate-600', bg: 'bg-slate-500/20', border: 'border-slate-500/30', text: 'text-slate-700' }
    };
    return configs[status] || configs.Open;
  };

  const getCategoryColor = (category) => {
    const colors = {
      Performance: 'bg-orange-500/20 border-orange-500/30 text-orange-700',
      Maintenance: 'bg-blue-500/20 border-blue-500/30 text-blue-700',
      Backup: 'bg-purple-500/20 border-purple-500/30 text-purple-700',
      Infrastructure: 'bg-indigo-500/20 border-indigo-500/30 text-indigo-700',
      Security: 'bg-red-500/20 border-red-500/30 text-red-700',
      Configuration: 'bg-green-500/20 border-green-500/30 text-green-700'
    };
    return colors[category] || 'bg-slate-500/20 border-slate-500/30 text-slate-700';
  };

  const stats = [
    { label: 'Open Tickets', value: tickets.filter(t => t.status === 'Open').length, icon: AlertCircle, color: 'from-red-500 to-pink-500' },
    { label: 'In Progress', value: tickets.filter(t => t.status === 'In Progress').length, icon: Clock, color: 'from-blue-500 to-indigo-500' },
    { label: 'Scheduled', value: tickets.filter(t => t.status === 'Scheduled').length, icon: Calendar, color: 'from-purple-500 to-pink-500' },
    { label: 'Resolved', value: tickets.filter(t => t.status === 'Resolved').length, icon: CheckCircle2, color: 'from-green-500 to-emerald-500' },
  ];

  const filteredTickets = tickets.filter(t => {
    const matchesStatus = filterStatus === 'all' || t.status === filterStatus;
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         t.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-1">Operations Tickets</h1>
            <p className="text-slate-600 text-sm">Track and manage operational tickets</p>
          </div>
          <button className="px-4 py-2.5 backdrop-blur-xl bg-gradient-to-r from-indigo-500 to-purple-500 border border-white/60 rounded-3xl text-white hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl">
            <Plus className="inline-block w-4 h-4 mr-2" />
            New Ticket
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1">{stat.label}</p>
                <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
              </div>
            );
          })}
        </div>

        {/* Search & Filter */}
        <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tickets by ID or title..."
                className="w-full pl-12 pr-4 py-3 backdrop-blur-xl bg-white/60 border border-white/60 rounded-3xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-2 flex-wrap">
              {[
                { id: 'all', label: 'All' },
                { id: 'Open', label: 'Open' },
                { id: 'In Progress', label: 'In Progress' },
                { id: 'Scheduled', label: 'Scheduled' },
                { id: 'Resolved', label: 'Resolved' }
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilterStatus(f.id)}
                  className={`px-4 py-2 rounded-3xl font-medium text-sm transition-all duration-300 ${
                    filterStatus === f.id
                      ? 'backdrop-blur-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                      : 'backdrop-blur-xl bg-white/40 text-slate-700 hover:bg-white/60'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tickets List */}
        <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-white/40">
            <h2 className="text-xl font-bold text-slate-900">All Tickets ({filteredTickets.length})</h2>
          </div>
          
          <div className="divide-y divide-white/30">
            {filteredTickets.map((ticket) => {
              const priorityConfig = getPriorityConfig(ticket.priority);
              const statusConfig = getStatusConfig(ticket.status);
              const StatusIcon = statusConfig.icon;

              return (
                <div key={ticket.id} className="p-5 hover:bg-white/30 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-start gap-4">
                    {/* Status Icon */}
                    <div className={`w-10 h-10 rounded-2xl backdrop-blur-xl ${statusConfig.bg} flex items-center justify-center flex-shrink-0`}>
                      <StatusIcon className={`w-5 h-5 ${statusConfig.color}`} />
                    </div>

                    {/* Ticket Content */}
                    <div className="flex-1 min-w-0">
                      {/* Title & ID */}
                      <div className="flex flex-wrap items-start gap-3 mb-2">
                        <h3 className="font-bold text-slate-900 text-base">{ticket.title}</h3>
                        <span className="backdrop-blur-xl bg-slate-500/10 border border-slate-500/20 text-slate-700 px-3 py-1 rounded-2xl text-xs font-bold">
                          {ticket.id}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-600 mb-3">{ticket.description}</p>

                      {/* Metadata */}
                      <div className="flex flex-wrap gap-3 items-center text-xs">
                        {/* Priority */}
                        <span className={`px-3 py-1.5 rounded-2xl backdrop-blur-xl border font-semibold ${priorityConfig.bg} ${priorityConfig.border} ${priorityConfig.text}`}>
                          {ticket.priority}
                        </span>

                        {/* Status */}
                        <span className={`px-3 py-1.5 rounded-2xl backdrop-blur-xl border font-semibold ${statusConfig.bg} ${statusConfig.border} ${statusConfig.text}`}>
                          {ticket.status}
                        </span>

                        {/* Category */}
                        <span className={`px-3 py-1.5 rounded-2xl backdrop-blur-xl border font-semibold ${getCategoryColor(ticket.category)}`}>
                          <Tag className="inline-block w-3 h-3 mr-1" />
                          {ticket.category}
                        </span>

                        {/* Assignee */}
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <User className="w-4 h-4" />
                          <span className="font-medium">{ticket.assignee}</span>
                        </div>

                        {/* Created Date */}
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <Calendar className="w-4 h-4" />
                          <span>{ticket.created}</span>
                        </div>

                        {/* Comments */}
                        <div className="flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 cursor-pointer transition-colors">
                          <MessageSquare className="w-4 h-4" />
                          <span className="font-medium">{ticket.comments}</span>
                        </div>

                        {/* Updated */}
                        <span className="text-slate-500">Updated {ticket.updated}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 backdrop-blur-xl bg-white/40 rounded-2xl hover:bg-white/60">
                      <MoreVertical className="w-4 h-4 text-slate-600" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredTickets.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              <AlertCircle className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="font-medium">No tickets found</p>
              <p className="text-sm">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
