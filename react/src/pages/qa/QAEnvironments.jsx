import React, { useState } from 'react';
import { Server, CheckCircle, AlertCircle, Settings } from 'lucide-react';

export default function QAEnvironments() {
  const [environments] = useState([
    { name: 'Development', status: 'Healthy', uptime: '99.8%', lastUpdate: '2025-01-15 14:30', testsPassed: 1245, testsFailed: 8 },
    { name: 'Staging', status: 'Healthy', uptime: '99.9%', lastUpdate: '2025-01-15 13:45', testsPassed: 2156, testsFailed: 12 },
    { name: 'Production', status: 'Healthy', uptime: '99.95%', lastUpdate: '2025-01-15 15:00', testsPassed: 3421, testsFailed: 2 },
    { name: 'QA Lab 1', status: 'Maintenance', uptime: '98.5%', lastUpdate: '2025-01-15 12:00', testsPassed: 890, testsFailed: 45 },
    { name: 'QA Lab 2', status: 'Healthy', uptime: '99.7%', lastUpdate: '2025-01-15 14:15', testsPassed: 1567, testsFailed: 18 }
  ]);

  const [configurations] = useState([
    { id: 1, env: 'Development', config: 'Debug Mode ON', value: 'Enabled' },
    { id: 2, env: 'Staging', config: 'Cache Settings', value: 'Redis' },
    { id: 3, env: 'Production', config: 'Load Balancer', value: 'Active' },
    { id: 4, env: 'QA Lab 1', config: 'Database Pool', value: '50 connections' },
    { id: 5, env: 'QA Lab 2', config: 'API Rate Limit', value: '1000 req/min' }
  ]);

  const getStatusColor = (status) => {
    if (status === 'Healthy') return 'text-green-700';
    if (status === 'Maintenance') return 'text-yellow-700';
    return 'text-red-700';
  };

  const getStatusBg = (status) => {
    if (status === 'Healthy') return 'bg-green-100/50';
    if (status === 'Maintenance') return 'bg-yellow-100/50';
    return 'bg-red-100/50';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Test Environments</h1>

        {/* Environment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {environments.map((env, idx) => (
            <div key={idx} className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-4 hover:bg-white/50 transition">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-bold text-black">{env.name}</p>
                <Server className="w-4 h-4 text-gray-400" />
              </div>
              <div className={`flex items-center gap-2 mb-3 px-2 py-1 rounded ${getStatusBg(env.status)}`}>
                {env.status === 'Healthy' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <AlertCircle className="w-4 h-4 text-yellow-600" />}
                <span className={`text-xs font-bold ${getStatusColor(env.status)}`}>{env.status}</span>
              </div>
              <div className="space-y-1 text-xs text-gray-600">
                <p>Uptime: <span className="text-black font-semibold">{env.uptime}</span></p>
                <p>Tests: <span className="text-green-700 font-semibold">{env.testsPassed}P</span> <span className="text-red-700 font-semibold">{env.testsFailed}F</span></p>
              </div>
            </div>
          ))}
        </div>

        {/* Environment Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">Total Environments</p>
            <p className="text-3xl font-bold text-black mt-2">{environments.length}</p>
          </div>
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">Healthy</p>
            <p className="text-3xl font-bold text-green-600 mt-2">4</p>
          </div>
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">Average Uptime</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">99.58%</p>
          </div>
        </div>

        {/* Configuration Table */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg overflow-hidden hover:bg-white/50 transition">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-4 px-6 text-black font-bold">Environment</th>
                <th className="text-left py-4 px-6 text-black font-bold">Configuration</th>
                <th className="text-left py-4 px-6 text-black font-bold">Value</th>
                <th className="text-center py-4 px-6 text-black font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {configurations.map((config, idx) => (
                <tr key={config.id} className={`border-b border-gray-300 hover:bg-white/30 ${idx % 2 === 0 ? 'bg-white/10' : ''}`}>
                  <td className="py-4 px-6 text-black font-medium">{config.env}</td>
                  <td className="py-4 px-6 text-black">{config.config}</td>
                  <td className="py-4 px-6 text-black font-semibold text-blue-700">{config.value}</td>
                  <td className="py-4 px-6 flex justify-center">
                    <button className="p-2 hover:bg-white/50 rounded-lg transition"><Settings className="w-4 h-4 text-gray-600" /></button>
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
