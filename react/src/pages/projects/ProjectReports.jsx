import React from 'react';
import { BarChart3, PieChart, Download, Plus } from 'lucide-react';

export default function ProjectReports() {
  const reports = [
    { id: 1, title: 'Project Health Report', date: '2025-01-20', type: 'Health', status: 'completed' },
    { id: 2, title: 'Sprint Performance', date: '2025-01-19', type: 'Performance', status: 'completed' },
    { id: 3, title: 'Resource Allocation', date: '2025-01-18', type: 'Resource', status: 'completed' },
    { id: 4, title: 'Risk Assessment', date: '2025-01-17', type: 'Risk', status: 'draft' },
  ];

  const metrics = [
    { label: 'Project Progress', value: '65%', trend: '+5%', color: 'bg-blue-50' },
    { label: 'Team Productivity', value: '88%', trend: '+3%', color: 'bg-green-50' },
    { label: 'Budget Health', value: '72%', trend: '-2%', color: 'bg-orange-50' },
    { label: 'Schedule Variance', value: '+3d', trend: 'delayed', color: 'bg-red-50' },
  ];

  const chartData = [
    { label: 'Planning', value: 20 },
    { label: 'Development', value: 45 },
    { label: 'Testing', value: 20 },
    { label: 'Deployment', value: 15 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-black">Project Reports</h1>
        <button className="bg-blue-500 text-slate-900 px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
          <Plus size={20} /> Generate Report
        </button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {metrics.map((metric, idx) => (
          <div key={idx} className={`${metric.color} glass-card border border-gray-300 rounded-lg p-4`}>
            <p className="text-gray-600 text-xs mb-2">{metric.label}</p>
            <p className="text-2xl font-bold text-black mb-1">{metric.value}</p>
            <p className={`text-xs ${metric.trend.includes('-') || metric.trend === 'delayed' ? 'text-red-600' : 'text-green-600'}`}>
              {metric.trend}
            </p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Time Distribution */}
        <div className="glass-card border border-gray-300 rounded-lg p-6 bg-white">
          <h2 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
            <BarChart3 size={20} /> Time Distribution
          </h2>
          <div className="space-y-4">
            {chartData.map((item, idx) => (
              <div key={idx} className="border border-gray-300 rounded-lg p-3 bg-white">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-black text-sm">{item.label}</span>
                  <span className="text-sm text-black font-bold">{item.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div style={{ width: `${item.value}%` }} className="bg-blue-500 h-2 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="glass-card border border-gray-300 rounded-lg p-6 bg-white">
          <h2 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
            <PieChart size={20} /> Project Status
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-3 bg-white">
              <span className="font-semibold text-black">Tasks Completed</span>
              <span className="text-lg font-bold text-green-600">158/240</span>
            </div>
            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-3 bg-white">
              <span className="font-semibold text-black">Team Members</span>
              <span className="text-lg font-bold text-blue-600">24</span>
            </div>
            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-3 bg-white">
              <span className="font-semibold text-black">Active Issues</span>
              <span className="text-lg font-bold text-orange-600">12</span>
            </div>
            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-3 bg-white">
              <span className="font-semibold text-black">Documentation %</span>
              <span className="text-lg font-bold text-purple-600">85%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reports List */}
      <div className="glass-card border border-gray-300 rounded-lg p-6">
        <h2 className="text-xl font-bold text-black mb-4">Generated Reports</h2>
        <div className="space-y-3">
          {reports.map((report) => (
            <div key={report.id} className="flex items-center justify-between border border-gray-300 rounded-lg p-4 bg-white hover:bg-gray-50">
              <div className="flex-1">
                <h3 className="font-semibold text-black mb-1">{report.title}</h3>
                <div className="flex gap-3 text-xs text-gray-600">
                  <span>{report.date}</span>
                  <span>â€¢</span>
                  <span>{report.type}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs px-2 py-1 rounded capitalize ${
                  report.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {report.status}
                </span>
                <button className="p-2 text-gray-400 hover:text-blue-500">
                  <Download size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
