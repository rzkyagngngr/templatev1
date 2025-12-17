import React from 'react';
import { DollarSign, FileText, Plus, Filter } from 'lucide-react';

export default function Taxes() {
  const taxSummary = [
    { name: 'Federal Income Tax', estimated: '$45,200.00', paid: '$35,000.00', due: '$10,200.00', dueDate: 'Apr 15, 2025' },
    { name: 'State Income Tax', estimated: '$8,500.00', paid: '$6,500.00', due: '$2,000.00', dueDate: 'Apr 15, 2025' },
    { name: 'Payroll Tax', estimated: '$32,800.00', paid: '$32,800.00', due: '$0.00', dueDate: 'Monthly' },
    { name: 'Sales Tax', estimated: '$12,450.00', paid: '$11,200.00', due: '$1,250.00', dueDate: 'Jan 31, 2025' },
  ];

  const deductions = [
    { category: 'Office Expenses', amount: '$8,450.00' },
    { category: 'Equipment & Depreciation', amount: '$15,230.00' },
    { category: 'Salaries & Wages', amount: '$156,000.00' },
    { category: 'Meals & Entertainment', amount: '$3,200.00' },
    { category: 'Travel Expenses', amount: '$5,850.00' },
    { category: 'Utilities & Rent', amount: '$24,500.00' },
    { category: 'Professional Services', amount: '$9,800.00' },
    { category: 'Insurance', amount: '$12,400.00' },
  ];

  const filingSchedule = [
    { form: '1040-ES', description: 'Estimated Tax Payment Q4', dueDate: 'Jan 15, 2025', status: 'Pending' },
    { form: '1099-NEC', description: 'Non-Employee Compensation', dueDate: 'Jan 31, 2025', status: 'Pending' },
    { form: '1099-MISC', description: 'Miscellaneous Income', dueDate: 'Jan 31, 2025', status: 'Pending' },
    { form: '941', description: 'Employer Quarterly Tax Return', dueDate: 'Jan 31, 2025', status: 'Pending' },
    { form: '1120-S', description: 'Corporate Tax Return', dueDate: 'Mar 15, 2025', status: 'In Progress' },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Taxes</h1>
          <p className="text-gray-600 mt-2">Manage tax obligations and filings</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur border border-gray-300 rounded-lg text-gray-900 hover:bg-white/60 transition-all">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-slate-900 rounded-lg hover:bg-blue-600 transition-all">
            <Plus className="w-4 h-4" />
            Add Item
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Total Tax Liability</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">$98,950.00</p>
          <p className="text-gray-700 text-sm mt-1">2024 Estimate</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Total Paid</p>
          <p className="text-3xl font-bold text-green-600 mt-2">$85,500.00</p>
          <p className="text-green-600 text-sm mt-1">86.4% of estimate</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Amount Due</p>
          <p className="text-3xl font-bold text-red-600 mt-2">$13,450.00</p>
          <p className="text-red-600 text-sm mt-1">Due by deadlines</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Effective Tax Rate</p>
          <p className="text-3xl font-bold text-purple-600 mt-2">22.8%</p>
          <p className="text-gray-700 text-sm mt-1">Of total income</p>
        </div>
      </div>

      <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Tax Obligations</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Tax Type</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Estimated</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Paid</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Due</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {taxSummary.map((tax, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-white/20">
                  <td className="py-3 px-4 text-gray-900 font-medium">{tax.name}</td>
                  <td className="py-3 px-4 text-gray-900 font-semibold">{tax.estimated}</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">{tax.paid}</td>
                  <td className="py-3 px-4 text-red-600 font-semibold">{tax.due}</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">{tax.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tax Deductions</h2>
          <div className="space-y-2 max-h-72 overflow-y-auto">
            {deductions.map((deduction, idx) => (
              <div key={idx} className="flex justify-between p-2 text-sm hover:bg-white/20 rounded">
                <p className="text-gray-900">{deduction.category}</p>
                <p className="text-gray-900 font-semibold">{deduction.amount}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-300 flex justify-between font-bold text-gray-900">
            <p>Total Deductions</p>
            <p>$237,430.00</p>
          </div>
        </div>

        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Filing Schedule</h2>
          <div className="space-y-2">
            {filingSchedule.map((filing, idx) => (
              <div key={idx} className="p-3 bg-white/30 rounded border border-gray-300 hover:border-gray-400">
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <p className="text-gray-900 font-bold text-sm">{filing.form}</p>
                    <p className="text-gray-600 text-xs">{filing.description}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    filing.status === 'Pending'
                      ? 'bg-blue-100 text-blue-800'
                      : filing.status === 'In Progress'
                      ? 'bg-orange-100 text-orange-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {filing.status}
                  </span>
                </div>
                <p className="text-gray-600 text-xs">Due: {filing.dueDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Income & Tax Calculation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Taxable Income</h3>
            <div className="space-y-2">
              <div className="flex justify-between p-2 text-sm">
                <p className="text-gray-900">Gross Income</p>
                <p className="text-gray-900 font-semibold">$433,000.00</p>
              </div>
              <div className="flex justify-between p-2 text-sm text-red-600">
                <p className="text-gray-900">Less: Deductions</p>
                <p className="font-semibold">-$237,430.00</p>
              </div>
              <div className="flex justify-between p-3 bg-blue-100 rounded border-2 border-blue-300 font-bold">
                <p className="text-blue-800">Taxable Income</p>
                <p className="text-blue-800">$195,570.00</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Tax Breakdown</h3>
            <div className="space-y-2">
              <div className="flex justify-between p-2 text-sm">
                <p className="text-gray-900">Federal Tax</p>
                <p className="text-gray-900 font-semibold">$45,200.00</p>
              </div>
              <div className="flex justify-between p-2 text-sm">
                <p className="text-gray-900">State Tax</p>
                <p className="text-gray-900 font-semibold">$8,500.00</p>
              </div>
              <div className="flex justify-between p-2 text-sm">
                <p className="text-gray-900">Payroll Tax</p>
                <p className="text-gray-900 font-semibold">$32,800.00</p>
              </div>
              <div className="flex justify-between p-2 text-sm">
                <p className="text-gray-900">Sales Tax</p>
                <p className="text-gray-900 font-semibold">$12,450.00</p>
              </div>
              <div className="flex justify-between p-3 bg-red-100 rounded border-2 border-red-300 font-bold">
                <p className="text-red-800">Total Tax</p>
                <p className="text-red-800">$98,950.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
