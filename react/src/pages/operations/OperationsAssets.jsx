import React, { useState } from 'react';
import { Server, Zap, HardDrive, Wifi, AlertCircle, CheckCircle } from 'lucide-react';

export default function OperationsAssets() {
  const [assets] = useState([
    { id: 'AST-001', name: 'Web Server 1', type: 'Server', status: 'Healthy', location: 'DC-1', uptime: '99.98%', lastMaintenance: '2025-01-10' },
    { id: 'AST-002', name: 'Database Server', type: 'Server', status: 'Healthy', location: 'DC-1', uptime: '99.99%', lastMaintenance: '2025-01-08' },
    { id: 'AST-003', name: 'Load Balancer', type: 'Network', status: 'Healthy', location: 'DC-1', uptime: '100%', lastMaintenance: '2025-01-12' },
    { id: 'AST-004', name: 'Storage Array 1', type: 'Storage', status: 'Warning', location: 'DC-1', uptime: '99.95%', lastMaintenance: '2025-01-05' },
    { id: 'AST-005', name: 'API Gateway', type: 'Network', status: 'Healthy', location: 'DC-2', uptime: '99.97%', lastMaintenance: '2025-01-11' },
    { id: 'AST-006', name: 'Cache Cluster', type: 'Server', status: 'Healthy', location: 'DC-2', uptime: '99.92%', lastMaintenance: '2025-01-09' }
  ]);

  const getTypeIcon = (type) => {
    const icons = { Server: Server, Network: Wifi, Storage: HardDrive, Power: Zap };
    const Icon = icons[type] || Server;
    return <Icon className="w-4 h-4" />;
  };

  const getStatusBg = (status) => {
    if (status === 'Healthy') return 'bg-green-100/50 text-green-700';
    if (status === 'Warning') return 'bg-yellow-100/50 text-yellow-700';
    return 'bg-red-100/50 text-red-700';
  };

  const getStatusIcon = (status) => {
    return status === 'Healthy' ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Assets Management</h1>

        {/* Asset Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">Total Assets</p>
            <p className="text-3xl font-bold text-black mt-2">{assets.length}</p>
          </div>
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">Healthy</p>
            <p className="text-3xl font-bold text-green-600 mt-2">5</p>
          </div>
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">Warning</p>
            <p className="text-3xl font-bold text-yellow-600 mt-2">1</p>
          </div>
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">Avg Uptime</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">99.97%</p>
          </div>
        </div>

        {/* Assets Table */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg overflow-hidden hover:bg-white/50 transition">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-4 px-6 text-black font-bold">Asset ID</th>
                <th className="text-left py-4 px-6 text-black font-bold">Name</th>
                <th className="text-left py-4 px-6 text-black font-bold">Type</th>
                <th className="text-left py-4 px-6 text-black font-bold">Status</th>
                <th className="text-left py-4 px-6 text-black font-bold">Location</th>
                <th className="text-left py-4 px-6 text-black font-bold">Uptime</th>
                <th className="text-left py-4 px-6 text-black font-bold">Last Maintenance</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset, idx) => (
                <tr key={asset.id} className={`border-b border-gray-300 hover:bg-white/30 ${idx % 2 === 0 ? 'bg-white/10' : ''}`}>
                  <td className="py-4 px-6 text-black font-bold">{asset.id}</td>
                  <td className="py-4 px-6 text-black font-medium">{asset.name}</td>
                  <td className="py-4 px-6 text-black flex items-center gap-2">
                    {getTypeIcon(asset.type)} {asset.type}
                  </td>
                  <td className={`py-4 px-6 flex items-center gap-2 font-semibold ${getStatusBg(asset.status)}`}>
                    {getStatusIcon(asset.status)} {asset.status}
                  </td>
                  <td className="py-4 px-6 text-black">{asset.location}</td>
                  <td className="py-4 px-6 text-black font-semibold text-green-700">{asset.uptime}</td>
                  <td className="py-4 px-6 text-black text-sm">{asset.lastMaintenance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
