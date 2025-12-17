import React, { useState } from 'react';
import { Receipt, DollarSign, TrendingUp, Calendar } from 'lucide-react';

export default function TravelExpenses() {
  const expenses = [
    { id: 'EXP-001', category: 'Flight', amount: '$450', date: '2025-01-10', description: 'JFK to LHR', status: 'CREATED' },
    { id: 'EXP-002', category: 'Hotel', amount: '$1,200', date: '2025-01-11', description: 'Marriott NY', status: 'CREATED' },
    { id: 'EXP-003', category: 'Meals', amount: '$320', date: '2025-01-12', description: 'Business dinners', status: 'CREATED' },
    { id: 'EXP-004', category: 'Transportation', amount: '$180', date: '2025-01-12', description: 'Taxi & Uber', status: 'CREATED' },
    { id: 'EXP-005', category: 'Flight', amount: '$520', date: '2025-01-15', description: 'LHR to NRT', status: 'CREATED' },
    { id: 'EXP-006', category: 'Parking', amount: '$75', date: '2025-01-20', description: 'Airport parking', status: 'CREATED' },
  ];

  const stats = [
    { label: 'Total Expenses', value: '$2,745', icon: DollarSign, color: 'bg-blue-100' },
    { label: 'This Month', value: '$8,920', icon: TrendingUp, color: 'bg-orange-100' },
    { label: 'Pending Claims', value: '4', icon: Receipt, color: 'bg-purple-100' },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Flight': 'bg-blue-100 text-blue-700',
      'Hotel': 'bg-purple-100 text-purple-700',
      'Meals': 'bg-orange-100 text-orange-700',
      'Transportation': 'bg-green-100 text-green-700',
      'Parking': 'bg-yellow-100 text-yellow-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Travel Expenses</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon size={24} className="text-gray-700" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold text-black">{stat.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expenses Table */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Category</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Description</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black">{expense.id}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(expense.category)}`}>
                      {expense.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold text-black">{expense.amount}</td>
                  <td className="px-6 py-4 text-black flex items-center gap-1">
                    <Calendar size={16} />
                    {expense.date}
                  </td>
                  <td className="px-6 py-4 text-black">{expense.description}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      {expense.status}
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
