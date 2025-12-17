import React, { useState } from 'react';
import { CheckCircle, Clock, AlertCircle, Plus } from 'lucide-react';

export default function ProjectApprovals() {
  const [approvals, setApprovals] = useState([
    { id: 1, title: 'Design System Update', requester: 'Lisa Chen', type: 'design', status: 'pending', date: '2025-01-20', priority: 'high' },
    { id: 2, title: 'API Authentication Flow', requester: 'John Smith', type: 'development', status: 'pending', date: '2025-01-19', priority: 'high' },
    { id: 3, title: 'Database Migration Plan', requester: 'Mike Johnson', type: 'infrastructure', status: 'approved', date: '2025-01-18', priority: 'medium' },
    { id: 4, title: 'Budget Reallocation', requester: 'Sarah Johnson', type: 'budget', status: 'pending', date: '2025-01-17', priority: 'medium' },
    { id: 5, title: 'Third-party Service Integration', requester: 'John Smith', type: 'development', status: 'rejected', date: '2025-01-16', priority: 'low' },
  ]);

  const handleApprove = (id) => {
    setApprovals(approvals.map(a => a.id === id ? { ...a, status: 'approved' } : a));
  };

  const handleReject = (id) => {
    setApprovals(approvals.map(a => a.id === id ? { ...a, status: 'rejected' } : a));
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending': return <Clock size={18} className="text-orange-600" />;
      case 'approved': return <CheckCircle size={18} className="text-green-600" />;
      case 'rejected': return <AlertCircle size={18} className="text-red-600" />;
      default: return null;
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'design': return 'bg-pink-100 text-pink-800';
      case 'development': return 'bg-blue-100 text-blue-800';
      case 'infrastructure': return 'bg-purple-100 text-purple-800';
      case 'budget': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const stats = [
    { label: 'Pending Approvals', value: approvals.filter(a => a.status === 'pending').length, color: 'bg-orange-100' },
    { label: 'Approved', value: approvals.filter(a => a.status === 'approved').length, color: 'bg-green-100' },
    { label: 'Rejected', value: approvals.filter(a => a.status === 'rejected').length, color: 'bg-red-100' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-black">Project Approvals</h1>
        <button className="bg-blue-500 text-slate-900 px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
          <Plus size={20} /> Request Approval
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className={`${stat.color} glass-card border border-gray-300 rounded-lg p-4`}>
            <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-black">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Approval Requests */}
      <div className="glass-card border border-gray-300 rounded-lg p-6 bg-white">
        <h2 className="text-xl font-bold text-black mb-4">All Requests</h2>
        <div className="space-y-3">
          {approvals.map((approval) => (
            <div key={approval.id} className="border border-gray-300 rounded-lg p-4 bg-white hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-black">{approval.title}</h3>
                    <div className="flex items-center gap-1">
                      {getStatusIcon(approval.status)}
                      <span className={`text-xs px-2 py-1 rounded capitalize ${
                        approval.status === 'pending' ? 'bg-orange-100 text-orange-800' :
                        approval.status === 'approved' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {approval.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Requested by {approval.requester}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className={`text-xs px-2 py-1 rounded ${getTypeColor(approval.type)}`}>
                      {approval.type}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      approval.priority === 'high' ? 'bg-red-100 text-red-800' :
                      approval.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {approval.priority} priority
                    </span>
                    <span className="text-xs text-gray-600">{approval.date}</span>
                  </div>
                </div>

                {approval.status === 'pending' && (
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => handleApprove(approval.id)}
                      className="bg-green-500 text-slate-900 px-4 py-2 rounded-lg hover:bg-green-600 text-sm font-medium"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(approval.id)}
                      className="bg-red-500 text-slate-900 px-4 py-2 rounded-lg hover:bg-red-600 text-sm font-medium"
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
