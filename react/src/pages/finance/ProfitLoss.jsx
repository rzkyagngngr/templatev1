import React from 'react';
import { TrendingUp, Filter, Download } from 'lucide-react';

export default function ProfitLoss() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const revenue = [82, 85, 88, 91, 95, 98, 102, 105, 108, 112, 115, 118];
  const expenses = [62, 63, 64, 65, 67, 68, 70, 71, 73, 75, 76, 78];
  const netIncome = revenue.map((r, i) => r - expenses[i]);

  const currentPeriodData = {
    revenue: '$582,400.00',
    costOfRevenue: '$232,960.00',
    grossProfit: '$349,440.00',
    operatingExpenses: '$128,660.00',
    operatingIncome: '$220,780.00',
    otherIncome: '$5,250.00',
    interestExpense: '$3,200.00',
    taxExpense: '$55,195.00',
    netIncome: '$167,635.00',
  };

  const revenueBreakdown = [
    { source: 'Product Sales', amount: '$320,240.00', percentage: '55%' },
    { source: 'Service Revenue', amount: '$174,720.00', percentage: '30%' },
    { source: 'Consulting', value: '$87,440.00', percentage: '15%' },
  ];

  const expenseBreakdown = [
    { category: 'Salaries & Benefits', amount: '$98,560.00', percentage: '34%' },
    { category: 'Cost of Goods', amount: '$71,440.00', percentage: '25%' },
    { category: 'Rent & Utilities', amount: '$45,200.00', percentage: '16%' },
    { category: 'Marketing', amount: '$35,440.00', percentage: '12%' },
    { category: 'Other', amount: '$28,960.00', percentage: '10%' },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Profit & Loss Statement</h1>
          <p className="text-gray-600 mt-2">December 1 - December 16, 2024</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur border border-gray-300 rounded-lg text-gray-900 hover:bg-white/60 transition-all">
            <Filter className="w-4 h-4" />
            Filter Period
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-slate-900 rounded-lg hover:bg-blue-600 transition-all">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Total Revenue</p>
          <p className="text-3xl font-bold text-green-600 mt-2">{currentPeriodData.revenue}</p>
          <p className="text-green-600 text-sm mt-1">+15.3% vs last period</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Gross Profit</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">{currentPeriodData.grossProfit}</p>
          <p className="text-gray-700 text-sm mt-1">60% margin</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Operating Income</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">{currentPeriodData.operatingIncome}</p>
          <p className="text-gray-700 text-sm mt-1">37.9% of revenue</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Net Income</p>
          <p className="text-3xl font-bold text-green-600 mt-2">{currentPeriodData.netIncome}</p>
          <p className="text-green-600 text-sm mt-1">+18.9% vs prior period</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">P&L Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between p-3 bg-white/30 rounded">
              <p className="text-gray-900 font-medium">Revenue</p>
              <p className="text-gray-900 font-bold">{currentPeriodData.revenue}</p>
            </div>
            <div className="flex justify-between p-3 text-gray-900">
              <p className="font-medium">Cost of Revenue</p>
              <p className="font-medium">-{currentPeriodData.costOfRevenue}</p>
            </div>
            <div className="flex justify-between p-3 bg-white/30 rounded border-b-2 border-gray-300">
              <p className="text-gray-900 font-bold">Gross Profit</p>
              <p className="text-gray-900 font-bold">{currentPeriodData.grossProfit}</p>
            </div>
            <div className="flex justify-between p-3 text-gray-900">
              <p className="font-medium">Operating Expenses</p>
              <p className="font-medium">-{currentPeriodData.operatingExpenses}</p>
            </div>
            <div className="flex justify-between p-3 bg-white/30 rounded border-b-2 border-gray-300">
              <p className="text-gray-900 font-bold">Operating Income</p>
              <p className="text-gray-900 font-bold text-green-600">{currentPeriodData.operatingIncome}</p>
            </div>
            <div className="flex justify-between p-3 text-gray-900">
              <p className="font-medium">Other Income</p>
              <p className="font-medium">+{currentPeriodData.otherIncome}</p>
            </div>
            <div className="flex justify-between p-3 text-gray-900">
              <p className="font-medium">Interest Expense</p>
              <p className="font-medium">-{currentPeriodData.interestExpense}</p>
            </div>
            <div className="flex justify-between p-3 text-gray-900">
              <p className="font-medium">Tax Expense</p>
              <p className="font-medium">-{currentPeriodData.taxExpense}</p>
            </div>
            <div className="flex justify-between p-3 bg-green-100 rounded font-bold text-green-800 border-2 border-green-300">
              <p>NET INCOME</p>
              <p>{currentPeriodData.netIncome}</p>
            </div>
          </div>
        </div>

        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Revenue by Source</h2>
          <div className="space-y-4">
            {revenueBreakdown.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <p className="text-gray-900 font-medium text-sm">{item.source}</p>
                  <p className="text-gray-900 font-bold text-sm">{item.amount}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                      style={{ width: item.percentage }}
                    ></div>
                  </div>
                  <p className="text-gray-600 text-xs font-semibold w-8">{item.percentage}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-6 mb-4">Expenses by Category</h2>
          <div className="space-y-4">
            {expenseBreakdown.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <p className="text-gray-900 font-medium text-sm">{item.category}</p>
                  <p className="text-gray-900 font-bold text-sm">{item.amount}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full"
                      style={{ width: item.percentage }}
                    ></div>
                  </div>
                  <p className="text-gray-600 text-xs font-semibold w-8">{item.percentage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Trend Analysis</h2>
        <div className="overflow-x-auto">
          <div className="min-w-full flex items-end gap-2 h-48 p-4">
            {months.map((month, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center justify-end">
                <div className="relative w-full flex flex-col items-center" style={{ height: '140px' }}>
                  <div className="absolute bottom-0 w-full flex gap-1">
                    <div 
                      className="flex-1 bg-green-500 rounded-t opacity-70"
                      style={{ height: `${revenue[idx] * 1.2}px` }}
                    ></div>
                    <div 
                      className="flex-1 bg-red-500 rounded-t opacity-70"
                      style={{ height: `${expenses[idx] * 1.2}px` }}
                    ></div>
                  </div>
                </div>
                <p className="text-gray-700 text-xs font-semibold mt-2">{month}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-gray-300">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <p className="text-gray-900 text-sm font-medium">Revenue</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <p className="text-gray-900 text-sm font-medium">Expenses</p>
          </div>
        </div>
      </div>
    </div>
  );
}
