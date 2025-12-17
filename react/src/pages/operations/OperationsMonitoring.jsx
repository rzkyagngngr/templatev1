import React, { useState } from 'react';
import { Activity, Zap, AlertCircle, TrendingUp, TrendingDown } from 'lucide-react';

export default function OperationsMonitoring() {
  const [metrics] = useState([
    { name: 'CPU Usage', value: '45%', status: 'Normal', trend: 'Down 3%', color: 'text-green-600' },
    { name: 'Memory Usage', value: '72%', status: 'High', trend: 'Up 5%', color: 'text-yellow-600' },
    { name: 'Disk I/O', value: '32%', status: 'Normal', trend: 'Down 2%', color: 'text-green-600' },
    { name: 'Network Traffic', value: '890 Mbps', status: 'Normal', trend: 'Up 10%', color: 'text-blue-600' }
  ]);

  const [activeAlerts] = useState([
    { id: 1, alert: 'High memory usage detected', severity: 'High', service: 'App Server 1', time: '5 minutes ago' },
    { id: 2, alert: 'Disk space low on /data', severity: 'Critical', service: 'Database Server', time: '2 minutes ago' },
    { id: 3, alert: 'API response time degraded', severity: 'Medium', service: 'API Gateway', time: '15 minutes ago' }
  ]);

  const [systemHealth] = useState([
    { system: 'Web Tier', health: 98, status: 'Excellent' },
    { system: 'App Tier', health: 92, status: 'Good' },
    { system: 'Database Tier', health: 88, status: 'Good' },
    { system: 'Cache Tier', health: 95, status: 'Excellent' },
    { system: 'Network Tier', health: 99, status: 'Excellent' }
  ]);

  const getAlertColor = (severity) => {
    const colors = { Critical: 'text-red-700', High: 'text-orange-700', Medium: 'text-yellow-700' };
    return colors[severity] || 'text-gray-700';
  };

  const getAlertBg = (severity) => {
    const colors = { Critical: 'bg-red-100/50', High: 'bg-orange-100/50', Medium: 'bg-yellow-100/50' };
    return colors[severity] || 'bg-gray-100/50';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Monitoring</h1>

        {/* System Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, idx) => {
            const TrendIcon = metric.trend.includes('Down') ? TrendingDown : TrendingUp;
            return (
              <div key={idx} className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-600 text-sm font-medium">{metric.name}</p>
                  <Activity className="w-5 h-5 text-gray-400" />
                </div>
                <p className={`text-2xl font-bold ${metric.color} mb-2`}>{metric.value}</p>
                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <TrendIcon className="w-4 h-4" /> {metric.trend}
                </div>
              </div>
            );
          })}
        </div>

        {/* System Health */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 mb-8 hover:bg-white/50 transition">
          <h2 className="text-lg font-bold text-black mb-4">System Health</h2>
          <div className="space-y-4">
            {systemHealth.map((system, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div>
                  <p className="text-black font-medium">{system.system}</p>
                  <p className="text-xs text-gray-600">{system.status}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-32 bg-gray-300/50 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full ${system.health >= 95 ? 'bg-green-500' : system.health >= 85 ? 'bg-blue-500' : 'bg-yellow-500'}`}
                      style={{width: `${system.health}%`}}
                    ></div>
                  </div>
                  <span className="text-black font-bold text-sm w-8">{system.health}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Alerts */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg overflow-hidden hover:bg-white/50 transition">
          <div className="p-6 border-b border-gray-300">
            <h2 className="text-lg font-bold text-black">Active Alerts ({activeAlerts.length})</h2>
          </div>
          <div className="space-y-2">
            {activeAlerts.map((alert) => (
              <div key={alert.id} className={`p-4 border-b border-gray-300 flex justify-between items-start ${getAlertBg(alert.severity)}`}>
                <div>
                  <p className="text-black font-medium">{alert.alert}</p>
                  <p className="text-xs text-gray-600">{alert.service} Â· {alert.time}</p>
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded ${getAlertColor(alert.severity)}`}>{alert.severity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
