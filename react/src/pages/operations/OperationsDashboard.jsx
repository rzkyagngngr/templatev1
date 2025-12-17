import React, { useState } from 'react';
import { Activity, AlertCircle, Zap, TrendingUp } from 'lucide-react';

export default function OperationsDashboard() {
  const [metrics] = useState({
    systemUptime: 99.95,
    activeTickets: 34,
    incidentsToday: 2,
    averageResponseTime: '2.3 hours'
  });

  const [recentActivity] = useState([
    { id: 1, event: 'Database backup completed', type: 'Success', time: '30 minutes ago' },
    { id: 2, event: 'CPU usage spike detected', type: 'Warning', time: '1 hour ago' },
    { id: 3, event: 'Network maintenance window', type: 'Info', time: '2 hours ago' },
    { id: 4, event: 'Production deployment', type: 'Success', time: '4 hours ago' },
    { id: 5, event: 'API service degradation resolved', type: 'Success', time: '6 hours ago' }
  ]);

  const getActivityColor = (type) => {
    switch(type) {
      case 'Success': return 'text-green-600';
      case 'Warning': return 'text-yellow-600';
      case 'Error': return 'text-red-600';
      case 'Info': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const getActivityBg = (type) => {
    switch(type) {
      case 'Success': return 'bg-green-100/50';
      case 'Warning': return 'bg-yellow-100/50';
      case 'Error': return 'bg-red-100/50';
      case 'Info': return 'bg-blue-100/50';
      default: return 'bg-gray-100/50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Operations Dashboard</h1>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'System Uptime', value: `${metrics.systemUptime}%`, icon: TrendingUp, color: 'text-green-600' },
            { label: 'Active Tickets', value: metrics.activeTickets, icon: Activity, color: 'text-blue-600' },
            { label: 'Incidents Today', value: metrics.incidentsToday, icon: AlertCircle, color: 'text-red-600' },
            { label: 'Avg Response Time', value: metrics.averageResponseTime, icon: Zap, color: 'text-orange-600' }
          ].map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div key={idx} className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-600 text-sm font-medium">{metric.label}</p>
                  <Icon className={`w-5 h-5 ${metric.color}`} />
                </div>
                <p className="text-2xl font-bold text-black">{metric.value}</p>
              </div>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
          <h2 className="text-xl font-bold text-black mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((activity, idx) => (
              <div key={activity.id} className={`flex items-center justify-between p-3 rounded-lg ${getActivityBg(activity.type)}`}>
                <div>
                  <p className="text-black font-medium">{activity.event}</p>
                  <p className="text-xs text-gray-600">{activity.time}</p>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded ${getActivityColor(activity.type)}`}>
                  {activity.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
