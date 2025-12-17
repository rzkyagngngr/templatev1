import React from 'react';
import { Building2, Plus, Eye, Edit } from 'lucide-react';

export default function BankAccounts() {
  const accounts = [
    { id: 1, name: 'Business Checking', bank: 'First National Bank', balance: '$125,450.80', accountNumber: '****3210', status: 'Active' },
    { id: 2, name: 'Business Savings', bank: 'First National Bank', balance: '$89,230.45', accountNumber: '****6789', status: 'Active' },
    { id: 3, name: 'Operating Account', bank: 'Commerce Bank', balance: '$52,100.00', accountNumber: '****1234', status: 'Active' },
    { id: 4, name: 'Payroll Account', bank: 'Commerce Bank', balance: '$15,800.20', accountNumber: '****5678', status: 'Active' },
  ];

  const recentTransactions = [
    { id: 1, account: 'Business Checking', description: 'Client Deposit', type: 'Credit', amount: '$5,000.00', date: 'Dec 15' },
    { id: 2, account: 'Operating Account', description: 'Vendor Payment', type: 'Debit', amount: '-$2,350.00', date: 'Dec 15' },
    { id: 3, account: 'Payroll Account', description: 'Employee Salary', type: 'Debit', amount: '-$8,500.00', date: 'Dec 14' },
    { id: 4, account: 'Business Savings', description: 'Transfer In', type: 'Credit', amount: '$10,000.00', date: 'Dec 13' },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Bank Accounts</h1>
          <p className="text-gray-600 mt-2">Manage and monitor all bank accounts</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-slate-900 rounded-lg hover:bg-blue-600 transition-all">
          <Plus className="w-4 h-4" />
          Add Account
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {accounts.map((account) => (
          <div key={account.id} className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 =" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold">{account.name}</p>
                  <p className="text-gray-600 text-sm">{account.bank}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-white/40 rounded">
                  <Eye className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-white/40 rounded">
                  <Edit className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-300">
              <p className="text-gray-600 text-xs mb-1">Account Number</p>
              <p className="text-gray-900 font-mono text-sm mb-4">{account.accountNumber}</p>
              <div className="flex items-center justify-between">
                <p className="text-gray-600 text-sm">Available Balance</p>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                  {account.status}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-2">{account.balance}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Total Balance</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">$282,581.45</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Liquid Assets</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">$193,681.25</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Reserved Funds</p>
          <p className="text-3xl font-bold text-purple-600 mt-2">$88,900.20</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Accounts</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">4</p>
        </div>
      </div>

      <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Account</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Description</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Type</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Amount</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-200 hover:bg-white/20">
                  <td className="py-3 px-4 text-gray-900 font-medium text-sm">{transaction.account}</td>
                  <td className="py-3 px-4 text-gray-900 text-sm">{transaction.description}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      transaction.type === 'Credit'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {transaction.type}
                    </span>
                  </td>
                  <td className={`py-3 px-4 font-semibold text-sm ${
                    transaction.type === 'Credit' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.amount}
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
