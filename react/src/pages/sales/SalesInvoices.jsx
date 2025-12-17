import React, { useState } from 'react';
import { DollarSign, Calendar, Download } from 'lucide-react';

export default function SalesInvoices() {
  const invoices = [
    { id: 'INV-2024-001', customer: 'Acme Corporation', amount: '$12,450', date: '2024-12-15', dueDate: '2024-12-31', status: 'Paid' },
    { id: 'INV-2024-002', customer: 'Tech Solutions', amount: '$8,920', date: '2024-12-14', dueDate: '2025-01-13', status: 'Sent' },
    { id: 'INV-2024-003', customer: 'Global Traders', amount: '$15,680', date: '2024-12-12', dueDate: '2025-01-11', status: 'Sent' },
    { id: 'INV-2024-004', customer: 'Local Business', amount: '$4,230', date: '2024-12-10', dueDate: '2024-12-25', status: 'Overdue' },
    { id: 'INV-2024-005', customer: 'Enterprise Corp', amount: '$22,100', date: '2024-12-08', dueDate: '2025-01-07', status: 'Sent' },
    { id: 'INV-2024-006', customer: 'Market Leaders', amount: '$19,850', date: '2024-12-05', dueDate: '2024-12-20', status: 'Paid' },
    { id: 'INV-2024-007', customer: 'Startup Labs', amount: '$3,450', date: '2024-12-01', dueDate: '2024-12-16', status: 'Overdue' },
    { id: 'INV-2024-008', customer: 'Digital Group', amount: '$11,200', date: '2024-11-28', dueDate: '2024-12-13', status: 'Overdue' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Paid': 'bg-green-100 text-green-700',
      'Sent': 'bg-blue-100 text-blue-700',
      'Overdue': 'bg-red-100 text-red-700',
      'Draft': 'bg-gray-100 text-gray-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const stats = [
    { label: 'Total Revenue', value: '$97,880', change: '+15%', color: 'bg-green-100' },
    { label: 'Outstanding', value: '$39,650', change: '-5%', color: 'bg-yellow-100' },
    { label: 'Overdue', value: '$14,650', change: '+2%', color: 'bg-red-100' },
    { label: 'Paid This Month', value: '$31,000', change: '+20%', color: 'bg-blue-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Sales Invoices</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                <span className={`${stat.color} px-2 py-1 rounded text-xs font-semibold`}>{stat.change}</span>
              </div>
              <p className="text-2xl font-bold text-black">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Invoices Table */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Invoice ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Customer</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Due Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black">{invoice.id}</td>
                  <td className="px-6 py-4 text-black">{invoice.customer}</td>
                  <td className="px-6 py-4 font-bold text-black">{invoice.amount}</td>
                  <td className="px-6 py-4 text-gray-600 flex items-center gap-1">
                    <Calendar size={16} />
                    {invoice.date}
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{invoice.dueDate}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-1 hover:bg-white/50 rounded transition">
                      <Download size={18} className="text-gray-600" />
                    </button>
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
