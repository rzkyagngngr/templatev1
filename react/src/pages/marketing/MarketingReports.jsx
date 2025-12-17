import React, { useState } from 'react';
import { BarChart3, FileText, Download, TrendingUp } from 'lucide-react';

export default function MarketingReports() {
  const [selectedReport, setSelectedReport] = useState('monthly');

  const reports = [
    { id: 1, name: 'Monthly Performance Summary', type: 'Executive', status: 'Generated', date: '2024-12-15', size: '2.1 MB' },
    { id: 2, name: 'Campaign ROI Analysis', type: 'Campaign', status: 'Generated', date: '2024-12-14', size: '3.4 MB' },
    { id: 3, name: 'Channel Attribution Report', type: 'Channel', status: 'Generated', date: '2024-12-12', size: '2.8 MB' },
    { id: 4, name: 'Lead Generation Report', type: 'Lead', status: 'Generated', date: '2024-12-10', size: '1.9 MB' },
    { id: 5, name: 'Customer Journey Analysis', type: 'Journey', status: 'Generated', date: '2024-12-08', size: '4.2 MB' },
    { id: 6, name: 'Content Performance Metrics', type: 'Content', status: 'Generated', date: '2024-12-05', size: '2.3 MB' },
  ];

  const monthlyStats = [
    { metric: 'Total Reach', value: '2.4M', change: '+15.3%' },
    { metric: 'Lead Generation', value: '2,450', change: '+18.5%' },
    { metric: 'Conversion Rate', value: '3.24%', change: '+0.5%' },
    { metric: 'Marketing ROI', value: '325%', change: '+45%' },
  ];

  const reportTypes = [
    { type: 'Executive Summaries', count: 12, frequency: 'Monthly' },
    { type: 'Campaign Reports', count: 24, frequency: 'Weekly' },
    { type: 'Analytics Deep Dives', count: 8, frequency: 'Monthly' },
    { type: 'Custom Reports', count: 5, frequency: 'On-demand' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Marketing Reports</h1>

        {/* Monthly Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {monthlyStats.map((stat, idx) => (
            <div key={idx} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
              <p className="text-gray-600 text-sm mb-2">{stat.metric}</p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-black">{stat.value}</p>
                <span className="text-green-600 text-sm font-bold">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Report Type Filter */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
            <h3 className="font-bold text-black">Report Period:</h3>
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
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Report Types */}
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
              <BarChart3 size={20} />
              Report Types Available
            </h3>
            <div className="space-y-4">
              {reportTypes.map((rt, idx) => (
                <div key={idx} className="pb-4 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-black">{rt.type}</p>
                    <div className="text-right">
                      <p className="text-lg font-bold text-black">{rt.count}</p>
                      <p className="text-xs text-gray-600">{rt.frequency}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
              <TrendingUp size={20} />
              Key Insights
            </h3>
            <div className="space-y-3">
              <div className="pb-3 border-b border-gray-200">
                <p className="text-sm font-semibold text-black mb-1">Top Campaign</p>
                <p className="text-black">Q4 Holiday Campaign - 320% ROI</p>
              </div>
              <div className="pb-3 border-b border-gray-200">
                <p className="text-sm font-semibold text-black mb-1">Best Performing Channel</p>
                <p className="text-black">Email - 4.5% Conversion Rate</p>
              </div>
              <div className="pb-3 border-b border-gray-200">
                <p className="text-sm font-semibold text-black mb-1">Growth Opportunity</p>
                <p className="text-black">Social Media - +25% MoM Potential</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-black mb-1">YoY Performance</p>
                <p className="text-green-600 font-bold">+42% Growth YoY</p>
              </div>
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
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Generated</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Size</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <FileText size={18} className="text-gray-500" />
                      <p className="font-semibold text-black">{report.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-black">{report.type}</td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{report.date}</td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{report.size}</td>
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
