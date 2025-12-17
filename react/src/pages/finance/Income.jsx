import React from 'react';
import { TrendingUp, DollarSign, Plus, Filter } from 'lucide-react';

export default function Income() {
  const incomeStreams = [
    { id: 1, source: 'Product Sales', amount: '$45,000.00', percentage: '55%', date: 'Monthly' },
    { id: 2, source: 'Service Revenue', amount: '$25,000.00', percentage: '30%', date: 'Monthly' },
    { id: 3, source: 'Consulting', amount: '$12,000.00', percentage: '15%', date: 'Monthly' },
  ];

  const monthlyIncome = [
    { month: 'October', amount: '$72,000.00' },
    { month: 'November', amount: '$78,500.00' },
    { month: 'December', amount: '$82,000.00' },
  ];

  const invoicedButNotReceived = [
    { id: 1, client: 'TechCorp Inc', amount: '$8,500.00', daysOutstanding: 15 },
    { id: 2, client: 'Global Solutions', amount: '$5,200.00', daysOutstanding: 22 },
    { id: 3, client: 'Enterprise Ltd', amount: '$3,750.00', daysOutstanding: 8 },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Income</h1>
          <p className="text-gray-600 mt-2">Monitor revenue and income streams</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur border border-gray-300 rounded-lg text-gray-900 hover:bg-white/60 transition-all">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-slate-900 rounded-lg hover:bg-green-600 transition-all">
            <Plus className="w-4 h-4" />
            Add Income
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Total Income (YTD)</p>
          <p className="text-3xl font-bold text-green-600 mt-2">$982,500.00</p>
          <p className="text-green-600 text-sm mt-1">+15.3% vs last year</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Average Monthly</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">$81,875.00</p>
          <p className="text-gray-700 text-sm mt-1">12-month average</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Accounts Receivable</p>
          <p className="text-3xl font-bold text-orange-600 mt-2">$17,450.00</p>
          <p className="text-gray-700 text-sm mt-1">Pending collection</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Income by Source</h2>
          <div className="space-y-4">
            {incomeStreams.map((stream) => (
              <div key={stream.id}>
                <div className="flex justify-between mb-2">
                  <p className="text-gray-900 font-medium">{stream.source}</p>
                  <p className="text-gray-900 font-bold">{stream.amount}</p>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <div className="w-full bg-gray-200 rounded-full h-2 mr-3">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" 
                      style={{ width: stream.percentage }}
                    ></div>
                  </div>
                  <p className="text-gray-600 text-sm font-semibold">{stream.percentage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Monthly Income</h2>
          <div className="space-y-3">
            {monthlyIncome.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-white/30 rounded">
                <p className="text-gray-900 font-medium">{item.month}</p>
                <p className="text-gray-900 font-bold text-lg">{item.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Outstanding Invoices</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Client</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Amount</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Days Outstanding</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Priority</th>
              </tr>
            </thead>
            <tbody>
              {invoicedButNotReceived.map((invoice) => (
                <tr key={invoice.id} className="border-b border-gray-200 hover:bg-white/20">
                  <td className="py-3 px-4 text-gray-900 font-medium">{invoice.client}</td>
                  <td className="py-3 px-4 text-gray-900 font-semibold">{invoice.amount}</td>
                  <td className="py-3 px-4 text-gray-700">{invoice.daysOutstanding}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      invoice.daysOutstanding > 20
                        ? 'bg-red-100 text-red-800'
                        : invoice.daysOutstanding > 15
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {invoice.daysOutstanding > 20 ? 'High' : invoice.daysOutstanding > 15 ? 'Medium' : 'Low'}
                    </span>
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
