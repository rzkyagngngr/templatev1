import React, { useState } from 'react';
import { Zap, BarChart3, Workflow, CheckCircle } from 'lucide-react';

export default function QAAutomation() {
  const [automationSuites] = useState([
    { id: 1, name: 'Smoke Tests', status: 'Active', coverage: 89, executions: 1250, successRate: 97.8, lastRun: '2 hours ago' },
    { id: 2, name: 'Regression Suite', status: 'Active', coverage: 94, executions: 450, successRate: 95.2, lastRun: '1 day ago' },
    { id: 3, name: 'API Integration', status: 'Active', coverage: 87, executions: 320, successRate: 98.5, lastRun: '4 hours ago' },
    { id: 4, name: 'Performance Tests', status: 'Scheduled', coverage: 76, executions: 150, successRate: 92.1, lastRun: '3 days ago' },
    { id: 5, name: 'Security Scans', status: 'Active', coverage: 82, executions: 200, successRate: 99.2, lastRun: '6 hours ago' }
  ]);

  const [automationMetrics] = useState({
    totalSuites: 24,
    totalTests: 3456,
    averageCoverage: 89.3,
    averageSuccessRate: 96.5
  });

  const getStatusBg = (status) => {
    return status === 'Active' ? 'bg-green-100/50 text-green-700' : 'bg-blue-100/50 text-blue-700';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Test Automation</h1>

        {/* Automation Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Suites', value: automationMetrics.totalSuites, icon: Workflow },
            { label: 'Total Tests', value: automationMetrics.totalTests, icon: BarChart3 },
            { label: 'Avg Coverage', value: `${automationMetrics.averageCoverage}%`, icon: Zap },
            { label: 'Success Rate', value: `${automationMetrics.averageSuccessRate}%`, icon: CheckCircle }
          ].map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div key={idx} className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-600 text-sm font-medium">{metric.label}</p>
                  <Icon className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-2xl font-bold text-black">{metric.value}</p>
              </div>
            );
          })}
        </div>

        {/* Automation Suites */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg overflow-hidden hover:bg-white/50 transition">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-4 px-6 text-black font-bold">Suite Name</th>
                <th className="text-left py-4 px-6 text-black font-bold">Status</th>
                <th className="text-left py-4 px-6 text-black font-bold">Coverage</th>
                <th className="text-left py-4 px-6 text-black font-bold">Executions</th>
                <th className="text-left py-4 px-6 text-black font-bold">Success Rate</th>
                <th className="text-left py-4 px-6 text-black font-bold">Last Run</th>
              </tr>
            </thead>
            <tbody>
              {automationSuites.map((suite, idx) => (
                <tr key={suite.id} className={`border-b border-gray-300 hover:bg-white/30 ${idx % 2 === 0 ? 'bg-white/10' : ''}`}>
                  <td className="py-4 px-6 text-black font-medium">{suite.name}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusBg(suite.status)}`}>{suite.status}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-20 bg-gray-300/50 rounded-full h-2 overflow-hidden">
                        <div className="bg-blue-500 h-full" style={{width: `${suite.coverage}%`}}></div>
                      </div>
                      <span className="text-black text-sm font-semibold">{suite.coverage}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-black font-semibold">{suite.executions}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-green-600 font-bold">{suite.successRate}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-black text-sm">{suite.lastRun}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
