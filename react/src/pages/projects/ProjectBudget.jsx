import React from 'react';
import { Plus, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

export default function ProjectBudget() {
  const budget = [
    { category: 'Development', allocated: 50000, spent: 42000, percentage: 84 },
    { category: 'Design', allocated: 15000, spent: 12500, percentage: 83 },
    { category: 'Infrastructure', allocated: 20000, spent: 8000, percentage: 40 },
    { category: 'Testing', allocated: 10000, spent: 5500, percentage: 55 },
    { category: 'Documentation', allocated: 5000, spent: 2000, percentage: 40 },
  ];

  const expenses = [
    { date: '2025-01-15', description: 'Development Team', category: 'Development', amount: 8000, status: 'approved' },
    { date: '2025-01-18', description: 'Design Software Licenses', category: 'Design', amount: 2500, status: 'approved' },
    { date: '2025-01-20', description: 'Cloud Services', category: 'Infrastructure', amount: 3000, status: 'pending' },
    { date: '2025-01-22', description: 'QA Tools', category: 'Testing', amount: 1500, status: 'approved' },
    { date: '2025-01-25', description: 'Documentation Tools', category: 'Documentation', amount: 500, status: 'pending' },
  ];

  const totalAllocated = budget.reduce((sum, item) => sum + item.allocated, 0);
  const totalSpent = budget.reduce((sum, item) => sum + item.spent, 0);
  const remaining = totalAllocated - totalSpent;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-black">Project Budget</h1>
        <button className="bg-blue-500 text-slate-900 px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
          <Plus size={20} /> Add Expense
        </button>
      </div>

      {/* Budget Overview */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="glass-card border border-gray-300 rounded-lg p-4 bg-white">
          <p className="text-gray-600 text-sm mb-1">Total Allocated</p>
          <p className="text-2xl font-bold text-black">${totalAllocated.toLocaleString()}</p>
        </div>
        <div className="glass-card border border-gray-300 rounded-lg p-4 bg-white">
          <p className="text-gray-600 text-sm mb-1">Total Spent</p>
          <p className="text-2xl font-bold text-orange-600">${totalSpent.toLocaleString()}</p>
        </div>
        <div className="glass-card border border-gray-300 rounded-lg p-4 bg-white">
          <p className="text-gray-600 text-sm mb-1">Remaining</p>
          <p className="text-2xl font-bold text-green-600">${remaining.toLocaleString()}</p>
        </div>
        <div className="glass-card border border-gray-300 rounded-lg p-4 bg-white">
          <p className="text-gray-600 text-sm mb-1">Spent %</p>
          <p className="text-2xl font-bold text-black">{((totalSpent / totalAllocated) * 100).toFixed(1)}%</p>
        </div>
      </div>

      {/* Budget by Category */}
      <div className="glass-card border border-gray-300 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-black mb-4">Budget by Category</h2>
        <div className="space-y-4">
          {budget.map((item, idx) => (
            <div key={idx} className="border border-gray-300 rounded-lg p-4 bg-white hover:bg-gray-50">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-black">{item.category}</span>
                <span className="text-sm text-gray-600">${item.spent.toLocaleString()} / ${item.allocated.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  style={{ width: `${item.percentage}%` }} 
                  className={`h-3 rounded-full ${item.percentage > 90 ? 'bg-red-500' : item.percentage > 70 ? 'bg-orange-500' : 'bg-green-500'}`}
                ></div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-600"></span>
                <span className="text-sm font-medium text-black">{item.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Expenses */}
      <div className="glass-card border border-gray-300 rounded-lg p-6">
        <h2 className="text-xl font-bold text-black mb-4">Recent Expenses</h2>
        <div className="space-y-3">
          {expenses.map((expense, idx) => (
            <div key={idx} className="flex items-center justify-between border border-gray-300 rounded-lg p-3 bg-white hover:bg-gray-50">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-black">{expense.description}</h3>
                  {expense.status === 'approved' ? (
                    <CheckCircle size={16} className="text-green-600" />
                  ) : (
                    <AlertCircle size={16} className="text-orange-600" />
                  )}
                </div>
                <div className="flex gap-3 text-xs text-gray-600">
                  <span>{expense.category}</span>
                  <span>â€¢</span>
                  <span>{expense.date}</span>
                </div>
              </div>
              <span className="text-lg font-bold text-black">${expense.amount.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
