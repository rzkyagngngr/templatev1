import React from 'react';
import { Filter, Download, TrendingDown } from 'lucide-react';

export default function CashFlow() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const operatingCF = [45, 52, 48, 55, 62, 58, 68, 75, 72, 85, 92, 95];
  const investingCF = [-20, -15, -22, -18, -25, -20, -30, -25, -28, -35, -32, -40];
  const financingCF = [10, 8, 12, 10, 15, 12, 18, 15, 20, 22, 25, 30];

  const currentPeriodData = {
    operatingActivities: '$450,230.00',
    investingActivities: '-$285,400.00',
    financingActivities: '$178,600.00',
    netCashFlow: '$343,430.00',
    beginningBalance: '$125,450.80',
    endingBalance: '$468,880.80',
  };

  const operatingBreakdown = [
    { item: 'Net Income', value: '$167,635.00' },
    { item: 'Depreciation & Amortization', value: '$32,400.00' },
    { item: 'Changes in Working Capital', value: '$125,850.00' },
    { item: 'Stock-based Compensation', value: '$15,200.00' },
    { item: 'Accounts Receivable Increase', value: '-$35,200.00' },
    { item: 'Inventory Decrease', value: '$45,300.00' },
    { item: 'Accounts Payable Increase', value: '$82,045.00' },
  ];

  const investingBreakdown = [
    { item: 'Capital Expenditures', value: '-$185,000.00' },
    { item: 'Equipment Purchases', value: '-$65,200.00' },
    { item: 'Proceeds from Asset Sales', value: '$25,400.00' },
    { item: 'Short-term Investments', value: '-$60,600.00' },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Cash Flow Statement</h1>
          <p className="text-gray-600 mt-2">Year-to-date cash position analysis</p>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Operating Activities</p>
          <p className="text-3xl font-bold text-green-600 mt-2">{currentPeriodData.operatingActivities}</p>
          <p className="text-green-600 text-sm mt-1">+22.5% vs YTD</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Investing Activities</p>
          <p className="text-3xl font-bold text-red-600 mt-2">{currentPeriodData.investingActivities}</p>
          <p className="text-red-600 text-sm mt-1">Capital investments</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Financing Activities</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">{currentPeriodData.financingActivities}</p>
          <p className="text-blue-600 text-sm mt-1">Debt repayment</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Net Cash Position</p>
          <p className="text-3xl font-bold text-green-600 mt-2">{currentPeriodData.endingBalance}</p>
          <p className="text-green-600 text-sm mt-1">+273.5% vs start</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Cash Flow Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between p-3 bg-white/30 rounded">
              <p className="text-gray-900 font-medium">Operating Activities</p>
              <p className="text-green-600 font-bold">{currentPeriodData.operatingActivities}</p>
            </div>
            <div className="flex justify-between p-3 bg-white/30 rounded">
              <p className="text-gray-900 font-medium">Investing Activities</p>
              <p className="text-red-600 font-bold">{currentPeriodData.investingActivities}</p>
            </div>
            <div className="flex justify-between p-3 bg-white/30 rounded">
              <p className="text-gray-900 font-medium">Financing Activities</p>
              <p className="text-blue-600 font-bold">{currentPeriodData.financingActivities}</p>
            </div>
            <div className="flex justify-between p-3 bg-green-100 rounded border-2 border-green-300 font-bold">
              <p className="text-green-800">Net Change in Cash</p>
              <p className="text-green-800">{currentPeriodData.netCashFlow}</p>
            </div>
            <div className="flex justify-between p-3 text-gray-900 font-medium">
              <p>Cash - Beginning of Period</p>
              <p>{currentPeriodData.beginningBalance}</p>
            </div>
            <div className="flex justify-between p-3 bg-blue-100 rounded border-2 border-blue-300 font-bold">
              <p className="text-blue-800">Cash - End of Period</p>
              <p className="text-blue-800">{currentPeriodData.endingBalance}</p>
            </div>
          </div>
        </div>

        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Operating Activities</h2>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {operatingBreakdown.map((item, idx) => (
              <div key={idx} className="flex justify-between p-2 text-sm hover:bg-white/20 rounded">
                <p className="text-gray-900">{item.item}</p>
                <p className={`font-semibold ${item.value.startsWith('-') ? 'text-red-600' : 'text-green-600'}`}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Investing & Financing Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Investing Activities</h3>
            <div className="space-y-2">
              {investingBreakdown.map((item, idx) => (
                <div key={idx} className="flex justify-between p-2 text-sm hover:bg-white/20 rounded">
                  <p className="text-gray-900">{item.item}</p>
                  <p className="font-semibold text-red-600">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Financing Activities</h3>
            <div className="space-y-2">
              <div className="flex justify-between p-2 text-sm hover:bg-white/20 rounded">
                <p className="text-gray-900">Proceeds from Loan</p>
                <p className="font-semibold text-green-600">$150,000.00</p>
              </div>
              <div className="flex justify-between p-2 text-sm hover:bg-white/20 rounded">
                <p className="text-gray-900">Debt Repayment</p>
                <p className="font-semibold text-red-600">-$75,000.00</p>
              </div>
              <div className="flex justify-between p-2 text-sm hover:bg-white/20 rounded">
                <p className="text-gray-900">Dividend Payment</p>
                <p className="font-semibold text-red-600">-$25,000.00</p>
              </div>
              <div className="flex justify-between p-2 text-sm hover:bg-white/20 rounded">
                <p className="text-gray-900">Stock Issuance</p>
                <p className="font-semibold text-green-600">$128,600.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Monthly Trend</h2>
        <div className="overflow-x-auto">
          <div className="min-w-full flex items-end gap-2 h-48 p-4">
            {months.map((month, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center justify-end">
                <div className="relative w-full flex flex-col items-center" style={{ height: '140px' }}>
                  <div className="absolute bottom-0 w-full space-y-1 flex flex-col-reverse">
                    <div 
                      className="w-full bg-blue-400 rounded-t opacity-70"
                      style={{ height: `${Math.max(financingCF[idx], 0) * 1.2}px` }}
                    ></div>
                    <div 
                      className="w-full bg-red-500 rounded-t opacity-70"
                      style={{ height: `${Math.abs(Math.min(investingCF[idx], 0)) * 1.2}px` }}
                    ></div>
                    <div 
                      className="w-full bg-green-500 rounded-t opacity-70"
                      style={{ height: `${operatingCF[idx] * 1.2}px` }}
                    ></div>
                  </div>
                </div>
                <p className="text-gray-700 text-xs font-semibold mt-2">{month}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
