import React from 'react';
import { Target, Plus, AlertCircle, TrendingUp } from 'lucide-react';

export default function BudgetPlanning() {
  const departments = [
    { name: 'Sales & Marketing', budgeted: '$125,000.00', spent: '$98,450.00', remaining: '$26,550.00', percentage: 78.8 },
    { name: 'Operations', budgeted: '$85,000.00', spent: '$72,340.00', remaining: '$12,660.00', percentage: 85.1 },
    { name: 'IT & Technology', budgeted: '$65,000.00', spent: '$52,100.00', remaining: '$12,900.00', percentage: 80.2 },
    { name: 'Human Resources', budgeted: '$48,000.00', spent: '$41,230.00', remaining: '$6,770.00', percentage: 85.9 },
    { name: 'Finance & Admin', budgeted: '$42,000.00', spent: '$35,680.00', remaining: '$6,320.00', percentage: 84.9 },
  ];

  const yearlyBudget = [
    { month: 'Jan', budgeted: 65000, spent: 52000 },
    { month: 'Feb', budgeted: 68000, spent: 54500 },
    { month: 'Mar', budgeted: 70000, spent: 58200 },
    { month: 'Apr', budgeted: 72000, spent: 61200 },
    { month: 'May', budgeted: 75000, spent: 63800 },
    { month: 'Jun', budgeted: 78000, spent: 67500 },
    { month: 'Jul', budgeted: 80000, spent: 70200 },
    { month: 'Aug', budgeted: 82000, spent: 72100 },
  ];

  const summaryStats = [
    { label: 'Total Budget', value: '$365,000.00', icon: Target },
    { label: 'Total Spent', value: '$299,800.00', icon: TrendingUp },
    { label: 'Remaining', value: '$65,200.00', icon: AlertCircle },
    { label: 'Burn Rate', value: '82.1%', icon: TrendingUp },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Budget Planning</h1>
          <p className="text-gray-600 mt-2">Monitor departmental budgets and spending</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-slate-900 rounded-lg hover:bg-blue-600 transition-all">
          <Plus className="w-4 h-4" />
          New Budget
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryStats.map((stat, idx) => (
          <div key={idx} className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
            <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
            {idx === 2 && <p className="text-green-600 text-sm mt-1">+18.5% variance</p>}
            {idx === 3 && <p className="text-orange-600 text-sm mt-1">Trending high</p>}
          </div>
        ))}
      </div>

      <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Budget by Department</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Department</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Budgeted</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Spent</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Remaining</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Progress</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-white/20">
                  <td className="py-3 px-4 text-gray-900 font-medium">{dept.name}</td>
                  <td className="py-3 px-4 text-gray-900 font-semibold">{dept.budgeted}</td>
                  <td className="py-3 px-4 text-red-600 font-semibold">{dept.spent}</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">{dept.remaining}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full"
                          style={{ width: `${dept.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-700 font-semibold text-sm">{dept.percentage}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Budget Allocation</h2>
          <div className="space-y-4">
            {departments.map((dept, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <p className="text-gray-900 text-sm font-medium">{dept.name}</p>
                  <p className="text-gray-700 text-sm font-semibold">{dept.budgeted}</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                    style={{ width: `${(idx + 1) * 16}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Spending Trend</h2>
          <div className="overflow-x-auto">
            <div className="min-w-full flex items-end gap-1 h-48 p-4">
              {yearlyBudget.map((item, idx) => {
                const maxBudget = Math.max(...yearlyBudget.map(b => b.budgeted));
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center justify-end">
                    <div className="relative w-full flex flex-col items-center" style={{ height: '120px' }}>
                      <div className="absolute bottom-0 w-full flex gap-0.5 justify-center">
                        <div 
                          className="flex-1 bg-blue-300 rounded-t opacity-50"
                          style={{ height: `${(item.budgeted / maxBudget) * 100}%` }}
                        ></div>
                        <div 
                          className="flex-1 bg-blue-600 rounded-t"
                          style={{ height: `${(item.spent / maxBudget) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-xs font-semibold mt-2">{item.month}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-300 rounded"></div>
              <p className="text-gray-900 text-xs font-medium">Budget</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-600 rounded"></div>
              <p className="text-gray-900 text-xs font-medium">Actual Spend</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm mt-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Budget Alerts</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 bg-red-50 border border-red-300 rounded">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <div className="flex-1">
              <p className="text-red-900 font-medium text-sm">Operations exceeding budget</p>
              <p className="text-red-700 text-xs">85.1% spent - only $12,660 remaining</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-orange-50 border border-orange-300 rounded">
            <AlertCircle className="w-5 h-5 text-orange-600" />
            <div className="flex-1">
              <p className="text-orange-900 font-medium text-sm">HR approaching limit</p>
              <p className="text-orange-700 text-xs">85.9% spent - monitor closely</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
