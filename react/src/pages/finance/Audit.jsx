import React from 'react';
import { CheckCircle, AlertCircle, Plus, Filter } from 'lucide-react';

export default function Audit() {
  const auditItems = [
    { id: 1, description: 'Revenue Recognition - Product Sales', status: 'Completed', findingType: 'Compliance', date: 'Dec 10', risk: 'Low' },
    { id: 2, description: 'Accounts Receivable Aging Analysis', status: 'In Progress', findingType: 'Control', date: 'Dec 12', risk: 'Medium' },
    { id: 3, description: 'Inventory Valuation & Count', status: 'Pending', findingType: 'Compliance', date: 'Dec 15', risk: 'Medium' },
    { id: 4, description: 'Expense Documentation Review', status: 'Completed', findingType: 'Control', date: 'Dec 08', risk: 'Low' },
    { id: 5, description: 'Payroll Tax Compliance Check', status: 'Completed', findingType: 'Compliance', date: 'Dec 05', risk: 'Low' },
    { id: 6, description: 'Fixed Asset Depreciation', status: 'In Progress', findingType: 'Accounting', date: 'Dec 13', risk: 'Low' },
  ];

  const findings = [
    { id: 1, area: 'Cash Management', severity: 'Medium', description: 'Need formalized reconciliation process', action: 'Implement monthly reconciliation', status: 'Resolved' },
    { id: 2, area: 'Documentation', severity: 'Low', description: 'Missing backup documentation for Q2 expenses', action: 'Collect and file documents', status: 'In Progress' },
    { id: 3, area: 'Access Controls', severity: 'High', description: 'Multiple users have admin access', action: 'Implement role-based access', status: 'Pending' },
  ];

  const summaryStats = [
    { label: 'Total Audit Items', value: '12' },
    { label: 'Completed', value: '6' },
    { label: 'In Progress', value: '3' },
    { label: 'Pending', value: '3' },
    { label: 'Findings', value: '3' },
    { label: 'Resolved', value: '1' },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Audit</h1>
          <p className="text-gray-600 mt-2">Internal audit tracking and compliance management</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur border border-gray-300 rounded-lg text-gray-900 hover:bg-white/60 transition-all">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-slate-900 rounded-lg hover:bg-blue-600 transition-all">
            <Plus className="w-4 h-4" />
            New Item
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {summaryStats.map((stat, idx) => (
          <div key={idx} className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-4 shadow-sm">
            <p className="text-gray-600 text-xs font-medium">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Audit Procedures</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Procedure</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Type</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Status</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Date</th>
                <th className="text-left py-3 px-4 text-gray-900 font-semibold">Risk</th>
              </tr>
            </thead>
            <tbody>
              {auditItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-200 hover:bg-white/20">
                  <td className="py-3 px-4 text-gray-900 font-medium">{item.description}</td>
                  <td className="py-3 px-4 text-gray-700 text-sm">{item.findingType}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit ${
                      item.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : item.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status === 'Completed' && <CheckCircle className="w-3 h-3" />}
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">{item.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      item.risk === 'Low'
                        ? 'bg-green-100 text-green-800'
                        : item.risk === 'Medium'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {item.risk}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Audit Findings</h2>
        <div className="space-y-3">
          {findings.map((finding) => (
            <div key={finding.id} className="border-l-4 border-gray-300 pl-4 py-3 bg-white/30 rounded">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-gray-900 font-bold">{finding.area}</p>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      finding.severity === 'High'
                        ? 'bg-red-100 text-red-800 border-l-4 border-red-600'
                        : finding.severity === 'Medium'
                        ? 'bg-orange-100 text-orange-800 border-l-4 border-orange-600'
                        : 'bg-blue-100 text-blue-800 border-l-4 border-blue-600'
                    }`}>
                      {finding.severity}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">{finding.description}</p>
                  <p className="text-gray-600 text-xs"><span className="font-semibold">Action:</span> {finding.action}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2 ${
                  finding.status === 'Resolved'
                    ? 'bg-green-100 text-green-800'
                    : finding.status === 'In Progress'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {finding.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Compliance Score</p>
          <p className="text-4xl font-bold text-green-600 mt-2">87%</p>
          <p className="text-gray-700 text-sm mt-1">Good standing</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Last Audit Date</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">Dec 15, 2024</p>
          <p className="text-gray-700 text-sm mt-1">Internal audit</p>
        </div>
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 text-sm font-medium">Next Review</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">Mar 15, 2025</p>
          <p className="text-gray-700 text-sm mt-1">Quarterly review</p>
        </div>
      </div>
    </div>
  );
}
