import React, { useState } from 'react';
import { CheckCircle2, Clock, XCircle, Plus, Filter, Search, Calendar, User, FileText, AlertTriangle } from 'lucide-react';

export default function ProjectApprovals() {
  const [approvals, setApprovals] = useState([
    { id: 1, title: 'Design System Update', requester: 'Lisa Chen', type: 'design', status: 'pending', date: '2025-01-20', priority: 'high', description: 'Update design tokens and component library', project: 'Banking App', department: 'Design' },
    { id: 2, title: 'API Authentication Flow', requester: 'John Smith', type: 'development', status: 'pending', date: '2025-01-19', priority: 'high', description: 'Implement OAuth 2.0 authentication', project: 'E-Commerce', department: 'Engineering' },
    { id: 3, title: 'Database Migration Plan', requester: 'Mike Johnson', type: 'infrastructure', status: 'approved', date: '2025-01-18', priority: 'medium', description: 'Migrate to PostgreSQL 15', project: 'Healthcare Portal', department: 'DevOps' },
    { id: 4, title: 'Budget Reallocation', requester: 'Sarah Johnson', type: 'budget', status: 'pending', date: '2025-01-17', priority: 'medium', description: 'Reallocate Q1 budget for hiring', project: 'Real Estate CRM', department: 'Finance' },
    { id: 5, title: 'Third-party Service Integration', requester: 'John Smith', type: 'development', status: 'rejected', date: '2025-01-16', priority: 'low', description: 'Integrate Stripe payment gateway', project: 'E-Commerce', department: 'Engineering' },
    { id: 6, title: 'Security Compliance Audit', requester: 'Emily Rodriguez', type: 'security', status: 'pending', date: '2025-01-21', priority: 'critical', description: 'SOC 2 Type II audit preparation', project: 'Healthcare Portal', department: 'Security' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const handleApprove = (id) => {
    setApprovals(approvals.map(a => a.id === id ? { ...a, status: 'approved' } : a));
  };

  const handleReject = (id) => {
    setApprovals(approvals.map(a => a.id === id ? { ...a, status: 'rejected' } : a));
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending': return <Clock className="w-5 h-5" />;
      case 'approved': return <CheckCircle2 className="w-5 h-5" />;
      case 'rejected': return <XCircle className="w-5 h-5" />;
      default: return null;
    }
  };

  const getStatusConfig = (status) => {
    const configs = {
      pending: { bg: 'bg-orange-500/20', border: 'border-orange-500/30', text: 'text-orange-700', gradient: 'from-orange-500 to-amber-500' },
      approved: { bg: 'bg-green-500/20', border: 'border-green-500/30', text: 'text-green-700', gradient: 'from-green-500 to-emerald-500' },
      rejected: { bg: 'bg-red-500/20', border: 'border-red-500/30', text: 'text-red-700', gradient: 'from-red-500 to-pink-500' }
    };
    return configs[status] || configs.pending;
  };

  const getTypeConfig = (type) => {
    const configs = {
      design: { bg: 'bg-pink-500/20', border: 'border-pink-500/30', text: 'text-pink-700' },
      development: { bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-700' },
      infrastructure: { bg: 'bg-purple-500/20', border: 'border-purple-500/30', text: 'text-purple-700' },
      budget: { bg: 'bg-green-500/20', border: 'border-green-500/30', text: 'text-green-700' },
      security: { bg: 'bg-red-500/20', border: 'border-red-500/30', text: 'text-red-700' }
    };
    return configs[type] || configs.development;
  };

  const getPriorityConfig = (priority) => {
    const configs = {
      critical: { bg: 'bg-red-500/20', border: 'border-red-500/30', text: 'text-red-700' },
      high: { bg: 'bg-orange-500/20', border: 'border-orange-500/30', text: 'text-orange-700' },
      medium: { bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-700' },
      low: { bg: 'bg-slate-500/20', border: 'border-slate-500/30', text: 'text-slate-700' }
    };
    return configs[priority] || configs.medium;
  };

  const stats = [
    { 
      label: 'Pending Approvals', 
      value: approvals.filter(a => a.status === 'pending').length, 
      icon: Clock,
      color: 'from-orange-500 to-amber-500' 
    },
    { 
      label: 'Approved', 
      value: approvals.filter(a => a.status === 'approved').length, 
      icon: CheckCircle2,
      color: 'from-green-500 to-emerald-500' 
    },
    { 
      label: 'Rejected', 
      value: approvals.filter(a => a.status === 'rejected').length, 
      icon: XCircle,
      color: 'from-red-500 to-pink-500' 
    },
    { 
      label: 'Total Requests', 
      value: approvals.length, 
      icon: FileText,
      color: 'from-blue-500 to-indigo-500' 
    },
  ];

  const filteredApprovals = approvals.filter(a => {
    const matchesStatus = filterStatus === 'all' || a.status === filterStatus;
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         a.requester.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-1">Project Approvals</h1>
            <p className="text-slate-600 text-sm">Review and manage approval requests</p>
          </div>
          <button className="px-4 py-2.5 backdrop-blur-xl bg-gradient-to-r from-indigo-500 to-purple-500 border border-white/60 rounded-3xl text-white hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl">
            <Plus className="inline-block w-4 h-4 mr-2" />
            Request Approval
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

        {/* Filters & Search */}
        <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search approvals..."
                className="w-full pl-12 pr-4 py-3 backdrop-blur-xl bg-white/60 border border-white/60 rounded-3xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300"
              />
            </div>

            {/* Status Filters */}
            <div className="flex gap-2">
              {[
                { id: 'all', label: 'All' },
                { id: 'pending', label: 'Pending' },
                { id: 'approved', label: 'Approved' },
                { id: 'rejected', label: 'Rejected' }
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

        {/* Approval Requests */}
        <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Approval Requests</h2>
          <div className="space-y-4">
            {filteredApprovals.map((approval) => {
              const statusConfig = getStatusConfig(approval.status);
              const typeConfig = getTypeConfig(approval.type);
              const priorityConfig = getPriorityConfig(approval.priority);
              
              return (
                <div key={approval.id} className="backdrop-blur-xl bg-white/60 border border-white/60 rounded-3xl p-5 hover:bg-white/70 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {/* Title & Status */}
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="font-bold text-slate-900 text-lg">{approval.title}</h3>
                        <div className="flex items-center gap-2">
                          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl backdrop-blur-xl border ${statusConfig.bg} ${statusConfig.border}`}>
                            <span className={statusConfig.text}>{getStatusIcon(approval.status)}</span>
                            <span className={`text-xs font-semibold ${statusConfig.text} capitalize`}>
                              {approval.status}
                            </span>
                          </div>
                        </div>
                        {approval.priority === 'critical' && (
                          <div className="flex items-center gap-1 px-2.5 py-1 rounded-2xl backdrop-blur-xl bg-red-500/20 border border-red-500/30">
                            <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                            <span className="text-xs font-bold text-red-700">Critical</span>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-600 mb-3">{approval.description}</p>

                      {/* Metadata */}
                      <div className="flex flex-wrap gap-3 items-center text-xs">
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <User className="w-4 h-4" />
                          <span>Requested by <span className="font-semibold">{approval.requester}</span></span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <Calendar className="w-4 h-4" />
                          <span>{approval.date}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-2xl backdrop-blur-xl border font-semibold ${typeConfig.bg} ${typeConfig.border} ${typeConfig.text} capitalize`}>
                          {approval.type}
                        </span>
                        <span className={`px-3 py-1 rounded-2xl backdrop-blur-xl border font-semibold ${priorityConfig.bg} ${priorityConfig.border} ${priorityConfig.text} capitalize`}>
                          {approval.priority} priority
                        </span>
                        <span className="backdrop-blur-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-700 px-3 py-1 rounded-2xl font-semibold">
                          {approval.project}
                        </span>
                        <span className="backdrop-blur-xl bg-slate-500/10 border border-slate-500/20 text-slate-600 px-2.5 py-1 rounded-2xl">
                          {approval.department}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    {approval.status === 'pending' && (
                      <div className="flex gap-2 flex-shrink-0">
                        <button
                          onClick={() => handleApprove(approval.id)}
                          className="px-4 py-2.5 backdrop-blur-xl bg-gradient-to-r from-green-500 to-emerald-500 border border-white/60 rounded-3xl text-white hover:from-green-600 hover:to-emerald-600 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl"
                        >
                          <CheckCircle2 className="inline-block w-4 h-4 mr-2" />
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(approval.id)}
                          className="px-4 py-2.5 backdrop-blur-xl bg-gradient-to-r from-red-500 to-pink-500 border border-white/60 rounded-3xl text-white hover:from-red-600 hover:to-pink-600 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl"
                        >
                          <XCircle className="inline-block w-4 h-4 mr-2" />
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {filteredApprovals.length === 0 && (
              <div className="text-center py-12 text-slate-500">
                <FileText className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p className="font-medium">No approval requests found</p>
                <p className="text-sm">Try adjusting your filters or search query</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
