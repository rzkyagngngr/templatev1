import React from 'react';
import { Plus, Filter, Download } from 'lucide-react';

export default function BalanceSheet() {
  const assets = [
    { category: 'Current Assets', items: [
      { name: 'Cash and Cash Equivalents', value: '$125,450.80' },
      { name: 'Accounts Receivable', value: '$89,230.45' },
      { name: 'Inventory', value: '$45,100.00' },
    ], subtotal: '$259,781.25' },
    { category: 'Fixed Assets', items: [
      { name: 'Property & Equipment', value: '$250,000.00' },
      { name: 'Accumulated Depreciation', value: '-$45,000.00' },
      { name: 'Leasehold Improvements', value: '$32,500.00' },
    ], subtotal: '$237,500.00' },
  ];

  const liabilities = [
    { category: 'Current Liabilities', items: [
      { name: 'Accounts Payable', value: '$78,900.00' },
      { name: 'Short-term Loan', value: '$50,000.00' },
      { name: 'Accrued Expenses', value: '$22,150.00' },
    ], subtotal: '$151,050.00' },
    { category: 'Long-term Liabilities', items: [
      { name: 'Long-term Debt', value: '$150,000.00' },
      { name: 'Deferred Tax Liabilities', value: '$15,000.00' },
    ], subtotal: '$165,000.00' },
  ];

  const equity = [
    { name: 'Common Stock', value: '$100,000.00' },
    { name: 'Retained Earnings', value: '$81,231.25' },
  ];

  const totalAssets = '$497,281.25';
  const totalLiabilities = '$316,050.00';
  const totalEquity = '$181,231.25';

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Balance Sheet</h1>
          <p className="text-gray-600 mt-2">As of December 16, 2024</p>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Total Assets</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">{totalAssets}</p>
          <p className="text-green-600 text-sm mt-1">+12.5% vs prior year</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Total Liabilities</p>
          <p className="text-3xl font-bold text-red-600 mt-2">{totalLiabilities}</p>
          <p className="text-red-600 text-sm mt-1">+8.3% vs prior year</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Total Equity</p>
          <p className="text-3xl font-bold text-green-600 mt-2">{totalEquity}</p>
          <p className="text-green-600 text-sm mt-1">+18.2% vs prior year</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">ASSETS</h2>
          
          {assets.map((assetGroup, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="text-gray-900 font-bold text-lg mb-3 pb-2 border-b border-gray-300">
                {assetGroup.category}
              </h3>
              <div className="space-y-2 mb-3">
                {assetGroup.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex justify-between text-gray-900">
                    <span className="text-gray-700">{item.name}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-gray-900 p-2 bg-white/30 rounded font-bold">
                <span>{assetGroup.category} Total</span>
                <span>{assetGroup.subtotal}</span>
              </div>
            </div>
          ))}

          <div className="flex justify-between text-xl font-bold text-blue-600 p-3 bg-blue-100/30 rounded-lg border border-blue-300 mt-4">
            <span>TOTAL ASSETS</span>
            <span>{totalAssets}</span>
          </div>
        </div>

        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">LIABILITIES & EQUITY</h2>
            
            {liabilities.map((liabilityGroup, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="text-gray-900 font-bold text-lg mb-3 pb-2 border-b border-gray-300">
                  {liabilityGroup.category}
                </h3>
                <div className="space-y-2 mb-3">
                  {liabilityGroup.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex justify-between text-gray-900">
                      <span className="text-gray-700">{item.name}</span>
                      <span className="font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-gray-900 p-2 bg-white/30 rounded font-bold">
                  <span>{liabilityGroup.category} Total</span>
                  <span>{liabilityGroup.subtotal}</span>
                </div>
              </div>
            ))}

            <h3 className="text-gray-900 font-bold text-lg mb-3 pb-2 border-b border-gray-300">Stockholders' Equity</h3>
            <div className="space-y-2 mb-3">
              {equity.map((item, idx) => (
                <div key={idx} className="flex justify-between text-gray-900">
                  <span className="text-gray-700">{item.name}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between text-xl font-bold text-red-600 p-3 bg-red-100/30 rounded-lg border border-red-300 mt-4">
              <span>TOTAL LIABILITIES & EQUITY</span>
              <span>$497,281.25</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Key Financial Ratios</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3 bg-white/30 rounded">
            <p className="text-gray-600 text-xs font-medium">Current Ratio</p>
            <p className="text-xl font-bold text-gray-900 mt-2">1.72</p>
            <p className="text-gray-600 text-xs mt-1">Healthy</p>
          </div>
          <div className="p-3 bg-white/30 rounded">
            <p className="text-gray-600 text-xs font-medium">Debt-to-Equity</p>
            <p className="text-xl font-bold text-gray-900 mt-2">1.74</p>
            <p className="text-gray-600 text-xs mt-1">Moderate leverage</p>
          </div>
          <div className="p-3 bg-white/30 rounded">
            <p className="text-gray-600 text-xs font-medium">Working Capital</p>
            <p className="text-xl font-bold text-green-600 mt-2">$108,731.25</p>
            <p className="text-gray-600 text-xs mt-1">Positive</p>
          </div>
          <div className="p-3 bg-white/30 rounded">
            <p className="text-gray-600 text-xs font-medium">Equity Ratio</p>
            <p className="text-xl font-bold text-gray-900 mt-2">36.4%</p>
            <p className="text-gray-600 text-xs mt-1">Of total assets</p>
          </div>
        </div>
      </div>
    </div>
  );
}
