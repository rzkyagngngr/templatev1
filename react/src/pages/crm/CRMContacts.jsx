import React, { useState } from 'react';

export default function CRMContacts() {
  const contacts = [
    {
      id: 1,
      name: 'Donald Gardner',
      image: '/assets/images/users/user-10.jpg',
      email: 'donald.gardner@example.com',
      phone: '+1 (555) 123-4567',
      leadScore: 68,
      company: 'Starbucks Coffee',
      tags: ['VIP', 'Enterprise'],
      badge: 'New',
    },
    {
      id: 2,
      name: 'Matt Rosales',
      image: '/assets/images/users/user-9.jpg',
      email: 'matt.rosales@example.com',
      phone: '+1 (555) 234-5678',
      leadScore: 112,
      company: 'McDonald\'s Corp',
      tags: ['Premium', 'Partner', 'Active'],
      badge: null,
    },
    {
      id: 3,
      name: 'Michael Hill',
      image: '/assets/images/users/user-8.jpg',
      email: 'michael.hill@example.com',
      phone: '+1 (555) 345-6789',
      leadScore: 64,
      company: 'Life is Good',
      tags: ['Retail', 'B2B'],
      badge: 'New',
    },
    {
      id: 4,
      name: 'Nancy Flanary',
      image: '/assets/images/users/user-7.jpg',
      email: 'nancy.flanary@example.com',
      phone: '+1 (555) 456-7890',
      leadScore: 124,
      company: 'Flipkart',
      tags: ['E-commerce', 'Premium', 'Hot'],
      badge: null,
    },
    {
      id: 5,
      name: 'Dorothy Key',
      image: '/assets/images/users/user-6.jpg',
      email: 'dorothy.key@example.com',
      phone: '+1 (555) 567-8901',
      leadScore: 33,
      company: 'Adidas',
      tags: ['Sports', 'Retail'],
      badge: null,
    },
    {
      id: 6,
      name: 'Joseph Cross',
      image: '/assets/images/users/user-5.jpg',
      email: 'joseph.cross@example.com',
      phone: '+1 (555) 678-9012',
      leadScore: 84,
      company: 'Reebok',
      tags: ['Sports', 'B2B', 'Active'],
      badge: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="w-full space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h4 className="text-2xl font-bold text-slate-900 tracking-tight">CRM Contacts</h4>
          <div className="text-sm text-slate-600">
            <span className="hover:text-indigo-600 cursor-pointer transition-colors">Glacia</span>
            <span className="mx-2">/</span>
            <span className="hover:text-indigo-600 cursor-pointer transition-colors">CRM</span>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-semibold">Contacts</span>
          </div>
        </div>

        {/* Contacts Table */}
        <div className="bg-white/40 backdrop-blur-2xl rounded-3xl p-6 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
          <h5 className="text-lg font-bold text-slate-900 mb-6">Contacts Details</h5>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200/50 bg-slate-50/50">
                  <th className="text-left py-4 px-4 text-xs font-bold text-slate-700 uppercase tracking-wider">Customer Name</th>
                  <th className="text-left py-4 px-4 text-xs font-bold text-slate-700 uppercase tracking-wider">Email</th>
                  <th className="text-left py-4 px-4 text-xs font-bold text-slate-700 uppercase tracking-wider">Phone No</th>
                  <th className="text-left py-4 px-4 text-xs font-bold text-slate-700 uppercase tracking-wider">Lead Score</th>
                  <th className="text-left py-4 px-4 text-xs font-bold text-slate-700 uppercase tracking-wider">Company</th>
                  <th className="text-left py-4 px-4 text-xs font-bold text-slate-700 uppercase tracking-wider">Tags</th>
                  <th className="text-left py-4 px-4 text-xs font-bold text-slate-700 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-4 px-4 text-black">
                    <div className="flex items-center gap-2">
                      <img src={contact.image} alt={contact.name} className="w-8 h-8 rounded-full" />
                      <div>
                        <div className="font-medium">{contact.name}</div>
                        {contact.badge && <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded">{contact.badge}</span>}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-black text-sm">{contact.email}</td>
                  <td className="py-4 px-4 text-black text-sm">{contact.phone}</td>
                  <td className="py-4 px-4 text-black font-semibold">{contact.leadScore}</td>
                  <td className="py-4 px-4 text-black text-sm">{contact.company}</td>
                  <td className="py-4 px-4">
                    <div className="flex gap-1">
                      {contact.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <button className="text-gray-600 hover:text-blue-600">âœï¸</button>
                      <button className="text-gray-600 hover:text-red-600">ðŸ—‘ï¸</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>

          {/* Pagination and Add Button */}
          <div className="mt-6 pt-6 border-t border-slate-200/50 flex justify-between items-center">
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300">
              <span className="material-icons-round text-sm align-middle mr-2">add</span>
              Add New Contact
            </button>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-400 flex items-center justify-center transition-all"><span className="material-icons-round text-sm">chevron_left</span></button>
              <button className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30">1</button>
              <button className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-all">2</button>
              <button className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-all">3</button>
              <button className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-all"><span className="material-icons-round text-sm">chevron_right</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
