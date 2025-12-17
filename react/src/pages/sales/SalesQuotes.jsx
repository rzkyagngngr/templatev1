import React, { useState } from 'react';
import { FileText, Eye, Download, Plus } from 'lucide-react';

export default function SalesQuotes() {
  const quotes = [
    { id: 'QT-2024-001', client: 'Acme Corp', amount: '$45,000', status: 'Accepted', date: '2024-12-10', validity: '2024-12-31' },
    { id: 'QT-2024-002', client: 'Tech Innovations', amount: '$32,500', status: 'Pending', date: '2024-12-12', validity: '2025-01-11' },
    { id: 'QT-2024-003', client: 'Global Partners', amount: '$58,750', status: 'Pending', date: '2024-12-13', validity: '2025-01-12' },
    { id: 'QT-2024-004', client: 'Market Solutions', amount: '$21,000', status: 'Declined', date: '2024-12-08', validity: '2024-12-22' },
    { id: 'QT-2024-005', client: 'Enterprise Plus', amount: '$95,200', status: 'Accepted', date: '2024-12-05', validity: '2024-12-20' },
    { id: 'QT-2024-006', client: 'Startup Growth', amount: '$15,500', status: 'Pending', date: '2024-12-14', validity: '2025-01-13' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Accepted': 'bg-green-100 text-green-700',
      'Pending': 'bg-yellow-100 text-yellow-700',
      'Declined': 'bg-red-100 text-red-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const stats = [
    { label: 'Total Quotes', value: quotes.length, color: 'bg-blue-100' },
    { label: 'Pending', value: quotes.filter(q => q.status === 'Pending').length, color: 'bg-yellow-100' },
    { label: 'Accepted', value: quotes.filter(q => q.status === 'Accepted').length, color: 'bg-green-100' },
    { label: 'Declined', value: quotes.filter(q => q.status === 'Declined').length, color: 'bg-red-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-black">Sales Quotes</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-slate-900 px-4 py-2 rounded-lg flex items-center gap-2 transition">
            <Plus size={20} />
            Create Quote
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-4">
              <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-black">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Quotes Table */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Quote ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Client</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Validity</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Actions</th>
              </tr>
            </thead>
            <tbody>
              {quotes.map((quote) => (
                <tr key={quote.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black flex items-center gap-2">
                    <FileText size={18} className="text-gray-500" />
                    {quote.id}
                  </td>
                  <td className="px-6 py-4 text-black">{quote.client}</td>
                  <td className="px-6 py-4 font-semibold text-black">{quote.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(quote.status)}`}>
                      {quote.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{quote.validity}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-white/50 rounded transition" title="View">
                        <Eye size={18} className="text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-white/50 rounded transition" title="Download">
                        <Download size={18} className="text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
