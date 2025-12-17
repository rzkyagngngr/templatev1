import React from 'react';
import { CreditCard, TrendingDown, Plus, Filter } from 'lucide-react';

export default function Expenses() {
  const expenses = [
    { id: 1, category: 'Office Supplies', vendor: 'Staples', amount: '$245.50', date: 'Dec 15', status: 'Paid' },
    { id: 2, category: 'Utilities', vendor: 'Electric Co', amount: '$1,250.00', date: 'Dec 14', status: 'Pending' },
    { id: 3, category: 'Software License', vendor: 'Adobe', amount: '$599.99', date: 'Dec 13', status: 'Paid' },
    { id: 4, category: 'Travel', vendor: 'Airlines', amount: '$850.00', date: 'Dec 12', status: 'Approved' },
    { id: 5, category: 'Meals', vendor: 'Restaurant', amount: '$125.75', date: 'Dec 15', status: 'Paid' },
  ];

  const categoryTotals = [
    { category: 'Office Supplies', total: '$1,245.50' },
    { category: 'Utilities', total: '$3,750.00' },
    { category: 'Software', total: '$2,599.99' },
    { category: 'Travel', total: '$2,850.00' },
    { category: 'Meals & Entertainment', total: '$685.25' },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Expenses</h1>
          <p className="text-gray-600 mt-2">Track and manage business expenses</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur border border-gray-300 rounded-lg text-gray-900 hover:bg-white/60 transition-all">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-slate-900 rounded-lg hover:bg-blue-600 transition-all">
            <Plus className="w-4 h-4" />
            Log Expense
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Monthly Expenses</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">$13,130.74</p>
          <p className="text-red-600 text-sm mt-1">-8.5% vs last month</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Budget Remaining</p>
          <p className="text-3xl font-bold text-green-600 mt-2">$6,869.26</p>
          <p className="text-gray-700 text-sm mt-1">34.3% of budget left</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Pending Approval</p>
          <p className="text-3xl font-bold text-orange-600 mt-2">$975.75</p>
          <p className="text-gray-700 text-sm mt-1">3 items awaiting</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Expenses</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2 px-3 text-gray-900 font-semibold">Category</th>
                  <th className="text-left py-2 px-3 text-gray-900 font-semibold">Amount</th>
                  <th className="text-left py-2 px-3 text-gray-900 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense) => (
                  <tr key={expense.id} className="border-b border-gray-200 hover:bg-white/20">
                    <td className="py-2 px-3 text-gray-900">{expense.category}</td>
                    <td className="py-2 px-3 text-gray-900 font-semibold">{expense.amount}</td>
                    <td className="py-2 px-3">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        expense.status === 'Paid'
                          ? 'bg-green-100 text-green-800'
                          : expense.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {expense.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Expenses by Category</h2>
          <div className="space-y-4">
            {categoryTotals.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <p className="text-gray-900 text-sm font-medium">{item.category}</p>
                  <p className="text-gray-900 font-semibold text-sm">{item.total}</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: `${(idx + 1) * 18}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
