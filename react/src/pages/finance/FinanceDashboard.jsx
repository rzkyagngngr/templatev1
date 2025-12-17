import React from 'react';
import { TrendingUp, Wallet, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export default function FinanceDashboard() {
  const stats = [
    { label: 'Total Revenue', value: '$1,245,890', change: '+12.5%', icon: TrendingUp, color: 'text-green-500' },
    { label: 'Total Expenses', value: '$456,230', change: '-3.2%', icon: ArrowDownLeft, color: 'text-red-500' },
    { label: 'Net Income', value: '$789,660', change: '+18.9%', icon: Wallet, color: 'text-blue-500' },
    { label: 'Cash Balance', value: '$325,400', change: '+5.1%', icon: ArrowUpRight, color: 'text-purple-500' },
  ];

  const recentTransactions = [
    { id: 1, description: 'Client Payment', amount: '$5,000.00', date: 'Dec 15', status: 'Completed' },
    { id: 2, description: 'Vendor Invoice', amount: '-$1,200.00', date: 'Dec 15', status: 'Pending' },
    { id: 3, description: 'Salary Payment', amount: '-$8,500.00', date: 'Dec 14', status: 'Completed' },
    { id: 4, description: 'Interest Income', amount: '$250.00', date: 'Dec 14', status: 'Completed' },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Finance Dashboard</h1>
        <p className="text-gray-600 mt-2">Overview of your financial performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <p className={`text-sm mt-1 ${stat.color}`}>{stat.change}</p>
              </div>
              <stat.icon className={`w-12 h-12 ${stat.color} opacity-20`} />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Description</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Amount</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Date</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-200 hover:bg-white/20">
                  <td className="py-3 px-4 text-gray-900">{transaction.description}</td>
                  <td className={`py-3 px-4 font-semibold ${transaction.amount.startsWith('-') ? 'text-red-600' : 'text-green-600'}`}>
                    {transaction.amount}
                  </td>
                  <td className="py-3 px-4 text-gray-700">{transaction.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      transaction.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {transaction.status}
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
