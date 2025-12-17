import React, { useState } from 'react';
import { BarChart3, TrendingUp, Download, Filter } from 'lucide-react';

export default function SalesReports() {
  const [selectedReport, setSelectedReport] = useState('monthly');

  const reports = [
    { id: 1, name: 'Monthly Performance', type: 'Performance', status: 'Generated', date: '2024-12-15', size: '2.4 MB' },
    { id: 2, name: 'Quarterly Revenue Analysis', type: 'Revenue', status: 'Generated', date: '2024-12-10', size: '3.1 MB' },
    { id: 3, name: 'Sales Pipeline Report', type: 'Pipeline', status: 'Generated', date: '2024-12-12', size: '1.8 MB' },
    { id: 4, name: 'Customer Acquisition', type: 'Customer', status: 'Generated', date: '2024-12-08', size: '2.7 MB' },
    { id: 5, name: 'Regional Performance', type: 'Regional', status: 'Generated', date: '2024-12-05', size: '3.3 MB' },
    { id: 6, name: 'Product Sales Mix', type: 'Product', status: 'Generated', date: '2024-12-01', size: '1.9 MB' },
  ];

  const monthlyData = [
    { month: 'January', revenue: '$180,000', orders: 240, growth: '+12%' },
    { month: 'February', revenue: '$195,000', orders: 260, growth: '+8.3%' },
    { month: 'March', revenue: '$210,000', orders: 280, growth: '+7.7%' },
    { month: 'April', revenue: '$225,000', orders: 300, growth: '+7.1%' },
    { month: 'May', revenue: '$245,000', orders: 325, growth: '+8.9%' },
    { month: 'June', revenue: '$265,000', orders: 350, growth: '+8.2%' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Generated': 'bg-green-100 text-green-700',
      'Processing': 'bg-yellow-100 text-yellow-700',
      'Failed': 'bg-red-100 text-red-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Sales Reports</h1>

        {/* Report Filters */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedReport('monthly')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedReport === 'monthly'
                    ? 'bg-blue-600 ='
                    : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setSelectedReport('quarterly')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedReport === 'quarterly'
                    ? 'bg-blue-600 ='
                    : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
                }`}
              >
                Quarterly
              </button>
              <button
                onClick={() => setSelectedReport('annual')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedReport === 'annual'
                    ? 'bg-blue-600 ='
                    : 'bg-white/50 text-black border border-gray-300 hover:bg-white/70'
                }`}
              >
                Annual
              </button>
            </div>
            <button className="ml-auto flex items-center gap-2 px-4 py-2 bg-white/50 border border-gray-300 rounded-lg hover:bg-white/70 transition text-black">
              <Filter size={20} />
              More Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Key Metrics */}
          <div className="lg:col-span-1 backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-bold text-black mb-4">Key Metrics</h3>
            <div className="space-y-4">
              <div className="pb-4 border-b border-gray-200">
                <p className="text-gray-600 text-sm mb-1">Total Revenue</p>
                <p className="text-2xl font-bold text-black">$1.32M</p>
              </div>
              <div className="pb-4 border-b border-gray-200">
                <p className="text-gray-600 text-sm mb-1">Avg Order Value</p>
                <p className="text-2xl font-bold text-black">$4,125</p>
              </div>
              <div className="pb-4 border-b border-gray-200">
                <p className="text-gray-600 text-sm mb-1">Total Orders</p>
                <p className="text-2xl font-bold text-black">1,855</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Growth Rate</p>
                <p className="text-2xl font-bold text-green-600">+8.4%</p>
              </div>
            </div>
          </div>

          {/* Monthly Performance */}
          <div className="lg:col-span-2 backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
              <BarChart3 size={20} />
              Monthly Performance
            </h3>
            <div className="space-y-3">
              {monthlyData.map((data, idx) => (
                <div key={idx} className="pb-3 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-black">{data.month}</p>
                    <span className="text-green-600 font-semibold text-sm">{data.growth}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                          style={{ width: `${(idx + 1) * 16.7}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-right min-w-fit">
                      <p className="font-bold text-black">{data.revenue}</p>
                      <p className="text-xs text-gray-600">{data.orders} orders</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Available Reports */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-300 bg-white/50">
            <h3 className="text-lg font-bold text-black">Available Reports</h3>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Report Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Size</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black">{report.name}</td>
                  <td className="px-6 py-4 text-black">{report.type}</td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{report.date}</td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{report.size}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-1 hover:bg-white/50 rounded transition">
                      <Download size={18} className="text-gray-600" />
                    </button>
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
