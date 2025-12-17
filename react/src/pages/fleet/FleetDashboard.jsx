import React, { useState } from 'react';
import { Truck, MapPin, AlertTriangle, Zap } from 'lucide-react';

export default function FleetDashboard() {
  const stats = [
    { label: 'Total Vehicles', value: '245', icon: Truck, color: 'bg-blue-100' },
    { label: 'Active Routes', value: '42', icon: MapPin, color: 'bg-green-100' },
    { label: 'Maintenance Due', value: '8', icon: AlertTriangle, color: 'bg-orange-100' },
    { label: 'Fuel Efficiency', value: '8.2 km/L', icon: Zap, color: 'bg-yellow-100' },
  ];

  const recentTrips = [
    { id: 'T-001', vehicle: 'TRK-2401', driver: 'John Smith', distance: '245 km', status: 'Completed', fuel: '32L' },
    { id: 'T-002', vehicle: 'VAN-2402', driver: 'Sarah Lee', distance: '128 km', status: 'In Progress', fuel: '18L' },
    { id: 'T-003', vehicle: 'TRK-2403', driver: 'Mike Chen', distance: '356 km', status: 'Completed', fuel: '48L' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Fleet Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon size={24} className="text-black" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold text-black">{stat.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Trips */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <h2 className="text-xl font-bold text-black mb-4">Recent Trips</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2 px-4 text-black font-semibold">Trip ID</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Vehicle</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Driver</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Distance</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Fuel Used</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentTrips.map((trip) => (
                  <tr key={trip.id} className="border-b border-gray-300">
                    <td className="py-2 px-4 text-black">{trip.id}</td>
                    <td className="py-2 px-4 text-black">{trip.vehicle}</td>
                    <td className="py-2 px-4 text-black">{trip.driver}</td>
                    <td className="py-2 px-4 text-black">{trip.distance}</td>
                    <td className="py-2 px-4 text-black">{trip.fuel}</td>
                    <td className="py-2 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${trip.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                        {trip.status}
                      </span>
                    </td>
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
