import React from 'react';
import { Truck, Package, MapPin, AlertCircle } from 'lucide-react';

export default function LogisticsDashboard() {
  const stats = [
    { label: 'Active Shipments', value: '1,247', icon: Truck, color: 'bg-blue-100' },
    { label: 'Packages in Transit', value: '3,892', icon: Package, color: 'bg-green-100' },
    { label: 'Active Routes', value: '156', icon: MapPin, color: 'bg-purple-100' },
    { label: 'Issues', value: '12', icon: AlertCircle, color: 'bg-red-100' },
  ];

  const recentShipments = [
    { id: 'SHIP-001', destination: 'New York', status: 'In Transit', progress: 65 },
    { id: 'SHIP-002', destination: 'Los Angeles', status: 'Delivered', progress: 100 },
    { id: 'SHIP-003', destination: 'Chicago', status: 'Processing', progress: 20 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">Logistics Dashboard</h1>
          <p className="text-black text-opacity-70 mt-2">CREATED</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-black text-opacity-60 text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold text-black">{stat.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Shipments */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <h2 className="text-xl font-bold text-black mb-4">Recent Shipments</h2>
          <div className="space-y-4">
            {recentShipments.map((shipment) => (
              <div key={shipment.id} className="flex items-center justify-between p-4 border border-gray-200 rounded">
                <div>
                  <p className="font-semibold text-black">{shipment.id}</p>
                  <p className="text-black text-opacity-70">{shipment.destination}</p>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${shipment.progress}%` }}></div>
                  </div>
                </div>
                <span className="text-black text-opacity-70">{shipment.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
