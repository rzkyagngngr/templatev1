import React from 'react';
import { CreditCard, Check, AlertCircle, Plus } from 'lucide-react';

export default function PaymentGateway() {
  const gateways = [
    { id: 1, name: 'Stripe', status: 'Active', volume: '$125,450.00', transactions: 1245, fees: '$3,764.50' },
    { id: 2, name: 'PayPal', status: 'Active', volume: '$89,230.00', transactions: 856, fees: '$2,677.90' },
    { id: 3, name: 'Square', status: 'Active', volume: '$45,100.00', transactions: 542, fees: '$1,353.00' },
    { id: 4, name: 'Apple Pay', status: 'Inactive', volume: '$12,050.00', transactions: 128, fees: '$361.50' },
  ];

  const recentPayments = [
    { id: 1, gateway: 'Stripe', customer: 'Acme Corp', amount: '$5,000.00', date: 'Dec 15', status: 'Success' },
    { id: 2, gateway: 'PayPal', customer: 'Tech Solutions', amount: '$3,250.00', date: 'Dec 15', status: 'Success' },
    { id: 3, gateway: 'Square', customer: 'Global Inc', amount: '$2,100.00', date: 'Dec 14', status: 'Success' },
    { id: 4, gateway: 'Stripe', customer: 'Digital Co', amount: '$1,500.00', date: 'Dec 14', status: 'Failed' },
    { id: 5, gateway: 'PayPal', customer: 'Creative Ltd', amount: '$4,200.00', date: 'Dec 13', status: 'Pending' },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Payment Gateway</h1>
          <p className="text-gray-600 mt-2">Manage payment processors and transactions</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-slate-900 rounded-lg hover:bg-blue-600 transition-all">
          <Plus className="w-4 h-4" />
          Add Gateway
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Total Volume</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">$271,830.00</p>
          <p className="text-green-600 text-sm mt-1">+22.5% this month</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Total Transactions</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">2,771</p>
          <p className="text-gray-700 text-sm mt-1">Across all gateways</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Processing Fees</p>
          <p className="text-3xl font-bold text-red-600 mt-2">$8,156.90</p>
          <p className="text-gray-700 text-sm mt-1">2.99% avg rate</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Success Rate</p>
          <p className="text-3xl font-bold text-green-600 mt-2">98.2%</p>
          <p className="text-gray-700 text-sm mt-1">Very good</p>
        </div>
      </div>

      <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Gateways</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Gateway</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Status</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Volume</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Transactions</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Fees</th>
              </tr>
            </thead>
            <tbody>
              {gateways.map((gateway) => (
                <tr key={gateway.id} className="border-b border-gray-200 hover:bg-white/20">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-5 h-5 =" />
                      </div>
                      <p className="text-gray-900 font-semibold">{gateway.name}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      gateway.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {gateway.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-900 font-semibold">{gateway.volume}</td>
                  <td className="py-3 px-4 text-gray-900">{gateway.transactions}</td>
                  <td className="py-3 px-4 text-red-600 font-semibold">{gateway.fees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Gateway</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Customer</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Amount</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Date</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentPayments.map((payment) => (
                <tr key={payment.id} className="border-b border-gray-200 hover:bg-white/20">
                  <td className="py-3 px-4 text-gray-900 font-medium text-sm">{payment.gateway}</td>
                  <td className="py-3 px-4 text-gray-900 text-sm">{payment.customer}</td>
                  <td className="py-3 px-4 text-gray-900 font-semibold">{payment.amount}</td>
                  <td className="py-3 px-4 text-gray-700 text-sm">{payment.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit ${
                      payment.status === 'Success'
                        ? 'bg-green-100 text-green-800'
                        : payment.status === 'Failed'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {payment.status === 'Success' && <Check className="w-3 h-3" />}
                      {payment.status === 'Failed' && <AlertCircle className="w-3 h-3" />}
                      {payment.status}
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
