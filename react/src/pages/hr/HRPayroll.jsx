import React from 'react';
import { DollarSign, TrendingUp, Plus, Edit2 } from 'lucide-react';

export default function HRPayroll() {
  const payrollData = [
    { id: 1, employee: 'John Doe', month: 'January 2025', baseSalary: '$5000', allowances: '$800', deductions: '$500', netSalary: '$5300', status: 'Processed' },
    { id: 2, employee: 'Jane Smith', month: 'January 2025', baseSalary: '$6000', allowances: '$1000', deductions: '$600', netSalary: '$6400', status: 'Processed' },
    { id: 3, employee: 'Mike Johnson', month: 'January 2025', baseSalary: '$4500', allowances: '$600', deductions: '$400', netSalary: '$4700', status: 'Pending' },
    { id: 4, employee: 'Sarah Williams', month: 'January 2025', baseSalary: '$5500', allowances: '$900', deductions: '$550', netSalary: '$5850', status: 'Processed' },
    { id: 5, employee: 'Alex Brown', month: 'January 2025', baseSalary: '$4800', allowances: '$700', deductions: '$480', netSalary: '$5020', status: 'Processed' },
    { id: 6, employee: 'Emily Davis', month: 'January 2025', baseSalary: '$5200', allowances: '$850', deductions: '$520', netSalary: '$5530', status: 'Pending' },
    { id: 7, employee: 'David Wilson', month: 'January 2025', baseSalary: '$5400', allowances: '$800', deductions: '$540', netSalary: '$5660', status: 'Processed' },
    { id: 8, employee: 'Lisa Anderson', month: 'January 2025', baseSalary: '$6200', allowances: '$1100', deductions: '$620', netSalary: '$6680', status: 'Processed' }
  ];

  const stats = [
    { label: 'Total Payroll', value: '$42.04M', icon: DollarSign, change: '+2.5%' },
    { label: 'Average Salary', value: '$5,685', icon: TrendingUp, change: '+1.2%' }
  ];

  const getStatusColor = (status) => {
    return status === 'Processed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-black">Payroll Management</h1>
          <button className="px-6 py-2 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" /> Generate Payroll
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-700 font-medium mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-black">{stat.value}</p>
                  </div>
                  <div className="text-right">
                    <Icon className="w-10 h-10 text-blue-600 mb-2" />
                    <p className="text-green-600 font-semibold">{stat.change}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Payroll Table */}
        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-black mb-6">January 2025 Payroll</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 text-left text-black font-semibold">Employee</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Base Salary</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Allowances</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Deductions</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Net Salary</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Status</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {payrollData.map((record) => (
                  <tr key={record.id} className="border-b border-gray-200 hover:bg-white/30">
                    <td className="px-4 py-3 text-black font-medium">{record.employee}</td>
                    <td className="px-4 py-3 text-black font-semibold">{record.baseSalary}</td>
                    <td className="px-4 py-3 text-black font-semibold text-green-600">{record.allowances}</td>
                    <td className="px-4 py-3 text-black font-semibold text-red-600">{record.deductions}</td>
                    <td className="px-4 py-3 text-black font-bold text-lg">{record.netSalary}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(record.status)}`}>
                        {record.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 flex gap-2">
                      <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4 text-blue-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
