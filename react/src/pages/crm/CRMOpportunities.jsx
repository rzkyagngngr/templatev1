import React, { useState } from 'react';

export default function CRMOpportunities() {
  const opportunities = [
    {
      id: 1,
      name: 'Starbucks Coffee',
      email: 'deals@starbucks.com',
      phone: '+1 (206) 447-1575',
      status: 'Won',
      statusColor: 'bg-emerald-100 text-emerald-800',
      value: '$450,000'
    },
    {
      id: 2,
      name: 'McDonald\'s Corp',
      email: 'partnerships@mcdonalds.com',
      phone: '+1 (630) 623-3000',
      status: 'Cold',
      statusColor: 'bg-slate-100 text-slate-800',
      value: '$280,000'
    },
    {
      id: 3,
      name: 'Life is Good',
      email: 'business@lifeisgood.com',
      phone: '+1 (617) 225-7000',
      status: 'Hot',
      statusColor: 'bg-purple-100 text-purple-800',
      value: '$320,000'
    },
    {
      id: 4,
      name: 'Nike Inc',
      email: 'enterprise@nike.com',
      phone: '+1 (503) 671-6453',
      status: 'In Progress',
      statusColor: 'bg-amber-100 text-amber-800',
      value: '$550,000'
    },
    {
      id: 5,
      name: 'Amazon Web Services',
      email: 'sales@aws.com',
      phone: '+1 (206) 266-4064',
      status: 'Hot',
      statusColor: 'bg-purple-100 text-purple-800',
      value: '$890,000'
    },
    {
      id: 6,
      name: 'Microsoft Corporation',
      email: 'enterprise@microsoft.com',
      phone: '+1 (425) 882-8080',
      status: 'Won',
      statusColor: 'bg-emerald-100 text-emerald-800',
      value: '$1,200,000'
    }
  ];

  const statusLegend = [
    { label: 'Won', color: 'bg-green-500' },
    { label: 'In Progress', color: 'bg-yellow-500' },
    { label: 'Hot', color: 'bg-purple-500' },
    { label: 'Cold', color: 'bg-gray-500' },
    { label: 'Lost', color: 'bg-red-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="w-full space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h4 className="text-2xl font-bold text-slate-900 tracking-tight">CRM Opportunities</h4>
          <div className="text-sm text-slate-600">
            <span className="hover:text-indigo-600 cursor-pointer transition-colors">Glacia</span>
            <span className="mx-2">/</span>
            <span className="hover:text-indigo-600 cursor-pointer transition-colors">CRM</span>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-semibold">Opportunities</span>
          </div>
        </div>

        {/* Status Legend */}
        <div className="bg-white/40 backdrop-blur-2xl rounded-3xl p-6 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
          <div className="flex flex-wrap gap-6">
            {statusLegend.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${item.color} shadow-sm`}></div>
                <span className="text-sm font-medium text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opportunity) => (
            <div key={opportunity.id} className="bg-white/40 backdrop-blur-2xl rounded-3xl p-6 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_48px_rgba(99,102,241,0.15)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-slate-900 mb-3">{opportunity.name}</h4>
                  <div className="space-y-2">
                    <p className="text-xs text-slate-600 flex items-center gap-2">
                      <span className="material-icons-round text-sm text-indigo-500">email</span>
                      {opportunity.email}
                    </p>
                    <p className="text-xs text-slate-600 flex items-center gap-2">
                      <span className="material-icons-round text-sm text-indigo-500">phone</span>
                      {opportunity.phone}
                    </p>
                    <p className="text-xs text-slate-600 flex items-center gap-2">
                      <span className="material-icons-round text-sm text-indigo-500">attach_money</span>
                      <span className="font-bold text-slate-900">{opportunity.value}</span>
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`px-3 py-1.5 rounded-full text-xs font-semibold ${opportunity.statusColor}`}>
                    {opportunity.status}
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t border-slate-200/50">
                <button className="flex-1 py-2 text-sm bg-slate-100 hover:bg-indigo-100 text-slate-700 hover:text-indigo-600 rounded-xl font-medium transition-all flex items-center justify-center gap-1">
                  <span className="material-icons-round text-sm">edit</span>
                  Edit
                </button>
                <button className="flex-1 py-2 text-sm bg-slate-100 hover:bg-red-100 text-slate-700 hover:text-red-600 rounded-xl font-medium transition-all flex items-center justify-center gap-1">
                  <span className="material-icons-round text-sm">delete</span>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
