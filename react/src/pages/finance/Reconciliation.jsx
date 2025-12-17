import React from 'react';
import { RefreshCw, CheckCircle, AlertCircle, Plus } from 'lucide-react';

export default function Reconciliation() {
  const reconciliationItems = [
    { id: 1, account: 'Business Checking', bankBalance: '$125,450.80', bookBalance: '$128,230.45', variance: '-$2,779.65', status: 'Pending', date: 'Dec 15' },
    { id: 2, account: 'Operating Account', bankBalance: '$52,100.00', bookBalance: '$51,850.25', variance: '$249.75', status: 'Reconciled', date: 'Dec 14' },
    { id: 3, account: 'Savings Account', bankBalance: '$89,230.45', bookBalance: '$89,230.45', variance: '$0.00', status: 'Reconciled', date: 'Dec 13' },
    { id: 4, account: 'Credit Card', bankBalance: '$0.00', bookBalance: '$2,150.80', variance: '-$2,150.80', status: 'In Progress', date: 'Dec 15' },
  ];

  const pendingItems = [
    { id: 1, type: 'Outstanding Check', amount: '$1,500.00', date: 'Dec 10', account: 'Business Checking', description: 'Check #2847 - Vendor ABC' },
    { id: 2, type: 'Deposit in Transit', amount: '$2,400.00', date: 'Dec 14', account: 'Business Checking', description: 'Customer payment' },
    { id: 3, type: 'Bank Fee', amount: '$29.50', date: 'Dec 15', account: 'Operating Account', description: 'Monthly service charge' },
    { id: 4, type: 'Interest Income', amount: '$45.15', date: 'Dec 15', account: 'Savings Account', description: 'Monthly interest' },
  ];

  const reconciliationSummary = [
    { label: 'Total Accounts', value: '4' },
    { label: 'Reconciled', value: '2' },
    { label: 'In Progress', value: '1' },
    { label: 'Pending', value: '1' },
    { label: 'Variance Found', value: '$4,729.55' },
    { label: 'Last Reconciliation', value: 'Dec 14' },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Reconciliation</h1>
          <p className="text-gray-600 mt-2">Bank and account reconciliation management</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-slate-900 rounded-lg hover:bg-blue-600 transition-all">
          <Plus className="w-4 h-4" />
          New Reconciliation
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {reconciliationSummary.map((stat, idx) => (
          <div key={idx} className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-4 shadow-sm">
            <p className="text-gray-600 text-xs font-medium">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Account Reconciliation Status</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Account</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Bank Balance</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Book Balance</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Variance</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Status</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              {reconciliationItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-200 hover:bg-white/20">
                  <td className="py-3 px-4 text-gray-900 font-medium">{item.account}</td>
                  <td className="py-3 px-4 text-gray-900 font-semibold">{item.bankBalance}</td>
                  <td className="py-3 px-4 text-gray-900 font-semibold">{item.bookBalance}</td>
                  <td className={`py-3 px-4 font-semibold ${item.variance === '$0.00' ? 'text-green-600' : 'text-orange-600'}`}>
                    {item.variance}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit ${
                      item.status === 'Reconciled'
                        ? 'bg-green-100 text-green-800'
                        : item.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status === 'Reconciled' && <CheckCircle className="w-3 h-3" />}
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Reconciliation Process</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 =" />
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Get Bank Statement</p>
                <p className="text-gray-600 text-sm">Download from bank portal</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 =" />
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Compare Balances</p>
                <p className="text-gray-600 text-sm">Match bank and book balances</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-5 h-5 =" />
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Identify Differences</p>
                <p className="text-gray-600 text-sm">Find outstanding items</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Record Adjustments</p>
                <p className="text-gray-600 text-sm">Post reconciling entries</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Pending Items</h2>
          <div className="space-y-3 max-h-72 overflow-y-auto">
            {pendingItems.map((item) => (
              <div key={item.id} className="p-3 bg-white/30 rounded border border-gray-300 hover:border-gray-400">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">{item.type}</p>
                    <p className="text-gray-700 text-xs mt-1">{item.description}</p>
                  </div>
                  <p className="text-gray-900 font-bold text-sm">{item.amount}</p>
                </div>
                <div className="flex justify-between text-xs text-gray-600 mt-2 pt-2 border-t border-gray-200">
                  <span>{item.account}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Reconciliation Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Business Checking Reconciliation</h3>
            <div className="space-y-2">
              <div className="flex justify-between p-2 text-sm">
                <p className="text-gray-900">Bank Statement Balance</p>
                <p className="text-gray-900 font-semibold">$125,450.80</p>
              </div>
              <div className="flex justify-between p-2 text-sm text-blue-600">
                <p className="text-gray-900">Add: Deposits in Transit</p>
                <p className="font-semibold">+$2,400.00</p>
              </div>
              <div className="flex justify-between p-2 text-sm text-red-600">
                <p className="text-gray-900">Less: Outstanding Checks</p>
                <p className="font-semibold">-$1,500.00</p>
              </div>
              <div className="flex justify-between p-3 bg-blue-100 rounded border-2 border-blue-300 font-bold">
                <p className="text-blue-800">Adjusted Bank Balance</p>
                <p className="text-blue-800">$126,350.80</p>
              </div>
              <div className="flex justify-between p-2 text-sm">
                <p className="text-gray-900">Book Balance</p>
                <p className="text-gray-900 font-semibold">$128,230.45</p>
              </div>
              <div className="flex justify-between p-3 bg-orange-100 rounded border-2 border-orange-300 font-bold">
                <p className="text-orange-800">Difference</p>
                <p className="text-orange-800">-$1,879.65</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Recent Reconciliation Actions</h3>
            <div className="space-y-2">
              <div className="p-3 bg-white/30 rounded border-l-4 border-green-500">
                <p className="text-gray-900 font-semibold text-sm">Savings Account Reconciled</p>
                <p className="text-gray-600 text-xs">Dec 13 - No variance</p>
              </div>
              <div className="p-3 bg-white/30 rounded border-l-4 border-green-500">
                <p className="text-gray-900 font-semibold text-sm">Operating Account Reconciled</p>
                <p className="text-gray-600 text-xs">Dec 14 - $249.75 variance resolved</p>
              </div>
              <div className="p-3 bg-white/30 rounded border-l-4 border-blue-500">
                <p className="text-gray-900 font-semibold text-sm">Credit Card In Progress</p>
                <p className="text-gray-600 text-xs">Dec 15 - $2,150.80 variance pending</p>
              </div>
              <div className="p-3 bg-white/30 rounded border-l-4 border-orange-500">
                <p className="text-gray-900 font-semibold text-sm">Checking Account Pending</p>
                <p className="text-gray-600 text-xs">Dec 15 - Awaiting bank feed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
