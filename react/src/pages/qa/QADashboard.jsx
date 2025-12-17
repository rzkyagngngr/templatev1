import React, { useState } from 'react';
import { Activity, AlertCircle, CheckCircle, Clock } from 'lucide-react';

export default function QADashboard() {
  const [metrics] = useState({
    totalTestCases: 1250,
    passRate: 94.5,
    failureRate: 3.2,
    pendingTests: 78,
    coverage: 87.3
  });

  const [recentActivity] = useState([
    { id: 1, test: 'Login Flow Test', status: 'Passed', time: '2 hours ago' },
    { id: 2, test: 'Payment Integration', status: 'Failed', time: '4 hours ago' },
    { id: 3, test: 'User Profile Update', status: 'Passed', time: '6 hours ago' },
    { id: 4, test: 'Search Functionality', status: 'Pending', time: '8 hours ago' }
  ]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Passed': return 'text-green-600';
      case 'Failed': return 'text-red-600';
      case 'Pending': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Passed': return <CheckCircle className="w-4 h-4" />;
      case 'Failed': return <AlertCircle className="w-4 h-4" />;
      case 'Pending': return <Clock className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">QA Dashboard</h1>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {[
            { label: 'Total Tests', value: metrics.totalTestCases, icon: Activity },
            { label: 'Pass Rate', value: `${metrics.passRate}%`, icon: CheckCircle },
            { label: 'Failure Rate', value: `${metrics.failureRate}%`, icon: AlertCircle },
            { label: 'Pending', value: metrics.pendingTests, icon: Clock },
            { label: 'Coverage', value: `${metrics.coverage}%`, icon: Activity }
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

        {/* Recent Activity */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
          <h2 className="text-xl font-bold text-black mb-4">Recent Activity</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-3 px-4 text-black font-semibold">Test Name</th>
                  <th className="text-left py-3 px-4 text-black font-semibold">Status</th>
                  <th className="text-left py-3 px-4 text-black font-semibold">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((row) => (
                  <tr key={row.id} className="border-b border-gray-300 hover:bg-white/30">
                    <td className="py-3 px-4 text-black">{row.test}</td>
                    <td className="py-3 px-4">
                      <div className={`flex items-center gap-2 ${getStatusColor(row.status)}`}>
                        {getStatusIcon(row.status)}
                        <span className="font-medium">{row.status}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-black text-sm">{row.time}</td>
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
