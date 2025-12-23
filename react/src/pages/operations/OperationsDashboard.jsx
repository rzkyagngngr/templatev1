import React, { useState } from 'react';
import { Activity, AlertCircle, Zap, TrendingUp, Server, Database, Globe, Shield, CheckCircle2, XCircle, Clock, BarChart3 } from 'lucide-react';

export default function OperationsDashboard() {
  const [metrics] = useState({
    systemUptime: 99.95,
    activeServices: 48,
    totalServices: 50,
    incidentsToday: 2,
    resolvedToday: 15,
    averageResponseTime: '2.3m',
    cpuUsage: 67,
    memoryUsage: 73,
    diskUsage: 45,
    networkTraffic: '1.2 GB/s'
  });

  const [systemHealth] = useState([
    { id: 1, service: 'Web Application', status: 'operational', uptime: 99.99, response: '45ms', icon: Globe },
    { id: 2, service: 'Database Cluster', status: 'operational', uptime: 99.95, response: '12ms', icon: Database },
    { id: 3, service: 'API Gateway', status: 'degraded', uptime: 98.50, response: '250ms', icon: Server },
    { id: 4, service: 'Authentication Service', status: 'operational', uptime: 100.0, response: '32ms', icon: Shield },
    { id: 5, service: 'CDN Network', status: 'operational', uptime: 99.98, response: '18ms', icon: Zap },
    { id: 6, service: 'Message Queue', status: 'maintenance', uptime: 95.00, response: '—', icon: Activity },
  ]);

  const [recentActivity] = useState([
    { id: 1, event: 'Database backup completed successfully', type: 'Success', time: '30 minutes ago', severity: 'low' },
    { id: 2, event: 'CPU usage spike detected on server-03', type: 'Warning', time: '1 hour ago', severity: 'medium' },
    { id: 3, event: 'Scheduled network maintenance window', type: 'Info', time: '2 hours ago', severity: 'low' },
    { id: 4, event: 'Production deployment v2.4.1 completed', type: 'Success', time: '4 hours ago', severity: 'low' },
    { id: 5, event: 'API service degradation resolved', type: 'Success', time: '6 hours ago', severity: 'high' },
    { id: 6, event: 'Security patch applied to all servers', type: 'Success', time: '8 hours ago', severity: 'medium' },
  ]);

  const [activeIncidents] = useState([
    { id: 1, title: 'API Gateway Performance Degradation', severity: 'medium', since: '2 hours ago', affected: 'API Gateway', status: 'investigating' },
    { id: 2, title: 'Message Queue Scheduled Maintenance', severity: 'low', since: '30 minutes ago', affected: 'Message Queue', status: 'maintenance' },
  ]);

  const getStatusConfig = (status) => {
    const configs = {
      operational: { bg: 'bg-green-500/20', border: 'border-green-500/30', text: 'text-green-700', icon: 'text-green-600' },
      degraded: { bg: 'bg-orange-500/20', border: 'border-orange-500/30', text: 'text-orange-700', icon: 'text-orange-600' },
      down: { bg: 'bg-red-500/20', border: 'border-red-500/30', text: 'text-red-700', icon: 'text-red-600' },
      maintenance: { bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-700', icon: 'text-blue-600' }
    };
    return configs[status] || configs.operational;
  };

  const getActivityConfig = (type) => {
    const configs = {
      Success: { bg: 'bg-green-500/20', text: 'text-green-700', icon: CheckCircle2 },
      Warning: { bg: 'bg-orange-500/20', text: 'text-orange-700', icon: AlertCircle },
      Error: { bg: 'bg-red-500/20', text: 'text-red-700', icon: XCircle },
      Info: { bg: 'bg-blue-500/20', text: 'text-blue-700', icon: Activity }
    };
    return configs[type] || configs.Info;
  };

  const getSeverityConfig = (severity) => {
    const configs = {
      high: { bg: 'bg-red-500/20', border: 'border-red-500/30', text: 'text-red-700' },
      medium: { bg: 'bg-orange-500/20', border: 'border-orange-500/30', text: 'text-orange-700' },
      low: { bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-700' }
    };
    return configs[severity] || configs.low;
  };

  const resourceMetrics = [
    { label: 'CPU', value: metrics.cpuUsage, color: 'from-blue-500 to-indigo-500' },
    { label: 'Memory', value: metrics.memoryUsage, color: 'from-purple-500 to-pink-500' },
    { label: 'Disk', value: metrics.diskUsage, color: 'from-green-500 to-emerald-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-1">Operations Dashboard</h1>
            <p className="text-slate-600 text-sm">Real-time system monitoring and operations management</p>
          </div>
          <div className="flex items-center gap-2 backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl px-4 py-2 shadow-lg">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-medium text-slate-700">All Systems Operational</span>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="backdrop-blur-xl bg-green-500/20 border border-green-500/30 text-green-700 px-3 py-1 rounded-2xl text-xs font-bold">
                Excellent
              </span>
            </div>
            <p className="text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1">System Uptime</p>
            <h3 className="text-3xl font-bold text-slate-900 mb-1">{metrics.systemUptime}%</h3>
            <p className="text-slate-500 text-xs">Last 30 days average</p>
          </div>

          <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="backdrop-blur-xl bg-blue-500/20 border border-blue-500/30 text-blue-700 px-3 py-1 rounded-2xl text-xs font-bold">
                Active
              </span>
            </div>
            <p className="text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1">Active Services</p>
            <h3 className="text-3xl font-bold text-slate-900 mb-1">{metrics.activeServices}/{metrics.totalServices}</h3>
            <p className="text-slate-500 text-xs">Running normally</p>
          </div>

          <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center shadow-lg">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <span className="backdrop-blur-xl bg-orange-500/20 border border-orange-500/30 text-orange-700 px-3 py-1 rounded-2xl text-xs font-bold">
                Low
              </span>
            </div>
            <p className="text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1">Incidents Today</p>
            <h3 className="text-3xl font-bold text-slate-900 mb-1">{metrics.incidentsToday}</h3>
            <p className="text-slate-500 text-xs">{metrics.resolvedToday} resolved today</p>
          </div>

          <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="backdrop-blur-xl bg-purple-500/20 border border-purple-500/30 text-purple-700 px-3 py-1 rounded-2xl text-xs font-bold">
                Fast
              </span>
            </div>
            <p className="text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1">Avg Response Time</p>
            <h3 className="text-3xl font-bold text-slate-900 mb-1">{metrics.averageResponseTime}</h3>
            <p className="text-slate-500 text-xs">Across all endpoints</p>
          </div>
        </div>

        {/* System Health & Resource Usage */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* System Health */}
          <div className="lg:col-span-2 backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">System Health</h4>
                <p className="text-xs text-slate-600">Service status monitoring</p>
              </div>
              <button className="text-indigo-600 hover:text-indigo-700 text-xs font-semibold">View Details</button>
            </div>
            <div className="space-y-3">
              {systemHealth.map((service) => {
                const statusConfig = getStatusConfig(service.status);
                const ServiceIcon = service.icon;
                return (
                  <div key={service.id} className="backdrop-blur-xl bg-white/40 border border-white/60 rounded-2xl p-4 hover:bg-white/60 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <div className={`w-10 h-10 rounded-2xl backdrop-blur-xl ${statusConfig.bg} flex items-center justify-center`}>
                          <ServiceIcon className={`w-5 h-5 ${statusConfig.icon}`} />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-slate-900 text-sm">{service.service}</h5>
                          <div className="flex items-center gap-3 text-xs text-slate-600 mt-1">
                            <span>Uptime: <span className="font-semibold">{service.uptime}%</span></span>
                            <span>•</span>
                            <span>Response: <span className="font-semibold">{service.response}</span></span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-3 py-1.5 rounded-2xl backdrop-blur-xl border font-semibold text-xs ${statusConfig.bg} ${statusConfig.border} ${statusConfig.text} capitalize`}>
                        {service.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Resource Usage */}
          <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Resource Usage</h4>
                <p className="text-xs text-slate-600">Current utilization</p>
              </div>
            </div>
            <div className="space-y-5">
              {resourceMetrics.map((metric, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-700">{metric.label}</span>
                    <span className="text-sm font-bold text-slate-900">{metric.value}%</span>
                  </div>
                  <div className="relative w-full backdrop-blur-xl bg-white/40 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${metric.color} transition-all duration-500`}
                      style={{ width: `${metric.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              <div className="mt-6 pt-5 border-t border-white/40">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700">Network Traffic</span>
                  <span className="text-sm font-bold text-slate-900">{metrics.networkTraffic}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Incidents & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Incidents */}
          <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Active Incidents</h4>
                <p className="text-xs text-slate-600">Currently being tracked</p>
              </div>
            </div>
            <div className="space-y-3">
              {activeIncidents.map((incident) => {
                const severityConfig = getSeverityConfig(incident.severity);
                return (
                  <div key={incident.id} className="backdrop-blur-xl bg-white/40 border border-white/60 rounded-2xl p-4 hover:bg-white/60 transition-all duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="font-semibold text-slate-900 text-sm flex-1">{incident.title}</h5>
                      <span className={`px-2.5 py-1 rounded-2xl backdrop-blur-xl border font-bold text-xs ${severityConfig.bg} ${severityConfig.border} ${severityConfig.text} capitalize`}>
                        {incident.severity}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{incident.since}</span>
                      </div>
                      <span>•</span>
                      <span>Affected: <span className="font-semibold">{incident.affected}</span></span>
                    </div>
                    <div className="mt-2">
                      <span className="backdrop-blur-xl bg-blue-500/20 border border-blue-500/30 text-blue-700 px-2.5 py-1 rounded-2xl text-xs font-semibold capitalize">
                        {incident.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Recent Activity</h4>
                <p className="text-xs text-slate-600">Latest system events</p>
              </div>
            </div>
            <div className="space-y-3">
              {recentActivity.map((activity) => {
                const activityConfig = getActivityConfig(activity.type);
                const ActivityIcon = activityConfig.icon;
                return (
                  <div key={activity.id} className="backdrop-blur-xl bg-white/40 border border-white/60 rounded-2xl p-4 hover:bg-white/60 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className={`w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0 ${activityConfig.bg}`}>
                        <ActivityIcon className={`w-4 h-4 ${activityConfig.text}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900">{activity.event}</p>
                        <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
