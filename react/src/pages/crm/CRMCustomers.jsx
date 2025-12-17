import React, { useState } from 'react';

export default function CRMCustomers() {
  const customers = [
    {
      id: 1,
      name: 'Dorothy Key',
      rating: 4.8,
      location: 'New York, USA',
      date: '20 June 2020',
      phone: '+1 (212) 555-0123',
      email: 'dorothy.key@example.com',
      lastMessage: 'Interested in premium enterprise package. Would like to schedule a demo call.'
    },
    {
      id: 2,
      name: 'Donald Gardner',
      rating: 4.9,
      location: 'Seattle, Washington',
      date: '15 July 2020',
      phone: '+1 (206) 555-0145',
      email: 'donald.gardner@example.com',
      lastMessage: 'Thanks for the quick response. Looking forward to starting the project.'
    },
    {
      id: 3,
      name: 'Joseph Cross',
      rating: 4.7,
      location: 'Tokyo, Japan',
      date: '10 August 2020',
      phone: '+81 3-5555-0189',
      email: 'joseph.cross@example.com',
      lastMessage: 'Very satisfied with the service. Planning to expand our subscription.'
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      rating: 5.0,
      location: 'London, UK',
      date: '5 September 2020',
      phone: '+44 20 5555 0167',
      email: 'sarah.johnson@example.com',
      lastMessage: 'Excellent support team! Ready to renew our annual contract.'
    },
    {
      id: 5,
      name: 'Michael Chen',
      rating: 4.6,
      location: 'Singapore',
      date: '22 October 2020',
      phone: '+65 6555 0234',
      email: 'michael.chen@example.com',
      lastMessage: 'Would like to discuss integration options for our platform.'
    },
    {
      id: 6,
      name: 'Emma Wilson',
      rating: 4.9,
      location: 'Sydney, Australia',
      date: '18 November 2020',
      phone: '+61 2 5555 0198',
      email: 'emma.wilson@example.com',
      lastMessage: 'Great experience so far. Recommending to our partners.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="w-full space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h4 className="text-2xl font-bold text-slate-900 tracking-tight">CRM Customers</h4>
          <div className="text-sm text-slate-600">
            <span className="hover:text-indigo-600 cursor-pointer transition-colors">Glacia</span>
            <span className="mx-2">/</span>
            <span className="hover:text-indigo-600 cursor-pointer transition-colors">CRM</span>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-semibold">Customers</span>
          </div>
        </div>

        {/* Customers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customers.map((customer) => (
            <div key={customer.id} className="bg-white/40 backdrop-blur-2xl rounded-3xl p-6 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_48px_rgba(99,102,241,0.15)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start mb-5">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl shadow-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                  {customer.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-bold text-slate-900 truncate">{customer.name}</h4>
                  <p className="text-sm text-slate-600 flex items-center gap-1 mt-1">
                    <span className="material-icons-round text-xs">place</span>
                    {customer.location}
                  </p>
                  <div className="flex items-center gap-1 mt-2 bg-amber-50 px-2 py-1 rounded-lg w-fit">
                    <span className="material-icons-round text-amber-500 text-sm">star</span>
                    <span className="text-sm font-bold text-amber-600">{customer.rating}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-5 border-t border-b border-slate-200/50 py-4">
                <div className="flex items-center text-xs text-slate-600">
                  <span className="material-icons-round text-sm mr-2 text-indigo-500">calendar_today</span>
                  <span className="font-semibold mr-2">Joined:</span> {customer.date}
                </div>
                <div className="flex items-center text-xs text-slate-600">
                  <span className="material-icons-round text-sm mr-2 text-indigo-500">phone</span>
                  <span className="font-semibold mr-2">Phone:</span> {customer.phone}
                </div>
                <div className="flex items-center text-xs text-slate-600">
                  <span className="material-icons-round text-sm mr-2 text-indigo-500">mail</span>
                  <span className="font-semibold mr-2">Email:</span> <span className="truncate">{customer.email}</span>
                </div>
              </div>

              <div className="mb-5">
                <p className="text-xs text-slate-700 line-clamp-2">
                  <span className="font-semibold text-slate-900">Last Message:</span> {customer.lastMessage}
                </p>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 py-2.5 text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-1">
                  <span className="material-icons-round text-sm">sms</span>
                  SMS
                </button>
                <button className="flex-1 py-2.5 text-sm bg-white/50 hover:bg-white/70 text-slate-700 rounded-xl font-semibold border border-slate-200 hover:border-indigo-300 transition-all duration-300 flex items-center justify-center gap-1">
                  <span className="material-icons-round text-sm">email</span>
                  Email
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
