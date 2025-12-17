import React from 'react';
import { FileText, Plus, Download, Filter } from 'lucide-react';

export default function Invoices() {
  const invoices = [
    { id: 'INV-001', client: 'Acme Corporation', amount: '$5,000.00', date: 'Dec 10', dueDate: 'Dec 25', status: 'Paid' },
    { id: 'INV-002', client: 'Tech Solutions Ltd', amount: '$3,250.00', date: 'Dec 12', dueDate: 'Dec 27', status: 'Pending' },
    { id: 'INV-003', client: 'Global Industries', amount: '$8,900.00', date: 'Dec 08', dueDate: 'Dec 23', status: 'Overdue' },
    { id: 'INV-004', client: 'Digital Ventures', amount: '$2,150.00', date: 'Dec 15', dueDate: 'Dec 30', status: 'Draft' },
    { id: 'INV-005', client: 'Creative Agency Co', amount: '$4,500.00', date: 'Dec 14', dueDate: 'Dec 29', status: 'Paid' },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Invoices</h1>
          <p className="text-gray-600 mt-2">Manage and track all invoices</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur border border-gray-300 rounded-lg text-gray-900 hover:bg-white/60 transition-all">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-slate-900 rounded-lg hover:bg-blue-600 transition-all">
            <Plus className="w-4 h-4" />
            New Invoice
          </button>
        </div>
      </div>

      <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Invoice ID</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Client</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Amount</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Date</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Due Date</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Status</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-gray-200 hover:bg-white/20">
                  <td className="py-3 px-4 text-gray-900 font-medium">{invoice.id}</td>
                  <td className="py-3 px-4 text-gray-900">{invoice.client}</td>
                  <td className="py-3 px-4 text-gray-900 font-semibold">{invoice.amount}</td>
                  <td className="py-3 px-4 text-gray-700">{invoice.date}</td>
                  <td className="py-3 px-4 text-gray-700">{invoice.dueDate}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      invoice.status === 'Paid'
                        ? 'bg-green-100 text-green-800'
                        : invoice.status === 'Pending'
                        ? 'bg-blue-100 text-blue-800'
                        : invoice.status === 'Overdue'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-700 p-1">
                      <Download className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Total Invoices</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">$23,800.00</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Outstanding</p>
          <p className="text-3xl font-bold text-red-600 mt-2">$14,300.00</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Paid</p>
          <p className="text-3xl font-bold text-green-600 mt-2">$9,500.00</p>
        </div>
      </div>
    </div>
  );
}
