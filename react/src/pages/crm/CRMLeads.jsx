import React, { useState } from 'react';

export default function CRMLeads() {
  const leads = [
    {
      id: 1,
      name: 'Donald Gardner',
      email: 'donald.gardner@example.com',
      phone: '+1 (555) 123-4567',
      company: 'Starbucks Coffee',
      status: 'New Lead',
      statusColor: 'bg-indigo-100 text-indigo-800',
      isNew: true
    },
    {
      id: 2,
      name: 'Matt Rosales',
      email: 'matt.rosales@example.com',
      phone: '+1 (555) 234-5678',
      company: 'McDonald\'s Corp',
      status: 'Follow Up',
      statusColor: 'bg-blue-100 text-blue-800',
      isNew: false
    },
    {
      id: 3,
      name: 'Michael Hill',
      email: 'michael.hill@example.com',
      phone: '+1 (555) 345-6789',
      company: 'Life is Good',
      status: 'Converted',
      statusColor: 'bg-emerald-100 text-emerald-800',
      isNew: true
    },
    {
      id: 4,
      name: 'Nancy Flanary',
      email: 'nancy.flanary@example.com',
      phone: '+1 (555) 456-7890',
      company: 'Flipkart',
      status: 'New Lead',
      statusColor: 'bg-indigo-100 text-indigo-800',
      isNew: false
    },
    {
      id: 5,
      name: 'Dorothy Key',
      email: 'dorothy.key@example.com',
      phone: '+1 (555) 567-8901',
      company: 'Adidas',
      status: 'Lost',
      statusColor: 'bg-red-100 text-red-800',
      isNew: false
    },
    {
      id: 6,
      name: 'Joseph Cross',
      email: 'joseph.cross@example.com',
      phone: '+1 (555) 678-9012',
      company: 'Reebok',
      status: 'New Lead',
      statusColor: 'bg-indigo-100 text-indigo-800',
      isNew: false
    },
    {
      id: 7,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      phone: '+1 (555) 789-0123',
      company: 'Nike Inc',
      status: 'Follow Up',
      statusColor: 'bg-blue-100 text-blue-800',
      isNew: true
    },
    {
      id: 8,
      name: 'Robert Chen',
      email: 'robert.chen@example.com',
      phone: '+1 (555) 890-1234',
      company: 'Tesla Motors',
      status: 'Converted',
      statusColor: 'bg-emerald-100 text-emerald-800',
      isNew: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="w-full space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h4 className="text-2xl font-bold text-slate-900 tracking-tight">CRM Leads</h4>
          <div className="text-sm text-slate-600">
            <span className="hover:text-indigo-600 cursor-pointer transition-colors">Glacia</span>
            <span className="mx-2">/</span>
            <span className="hover:text-indigo-600 cursor-pointer transition-colors">CRM</span>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-semibold">Leads</span>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white/40 backdrop-blur-2xl rounded-3xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200/50 bg-slate-50/50">
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Customer Name</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Phone No</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="border-b border-slate-200/50 last:border-0 hover:bg-white/30 transition-all duration-200">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full shadow-lg flex items-center justify-center text-white font-semibold text-sm">
                          {lead.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-slate-900">{lead.name}</span>
                            {lead.isNew && <span className="px-2 py-0.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[10px] rounded-full font-semibold shadow-sm">New</span>}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{lead.email}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{lead.phone}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{lead.company}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1.5 text-xs font-semibold rounded-full ${lead.statusColor}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-1.5 rounded-lg bg-slate-100 hover:bg-indigo-100 text-slate-600 hover:text-indigo-600 transition-all">
                          <span className="material-icons-round text-lg">edit</span>
                        </button>
                        <button className="p-1.5 rounded-lg bg-slate-100 hover:bg-red-100 text-slate-600 hover:text-red-600 transition-all">
                          <span className="material-icons-round text-lg">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add New Button */}
        <div className="flex justify-start">
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300">
            <span className="material-icons-round text-sm align-middle mr-2">add</span>
            Add New Lead
          </button>
        </div>
      </div>
    </div>
  );
}
