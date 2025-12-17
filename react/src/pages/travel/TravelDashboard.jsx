import React, { useState } from 'react';
import { Plane, MapPin, Calendar, Users } from 'lucide-react';

export default function TravelDashboard() {
  const stats = [
    { label: 'Active Trips', value: '12', icon: Plane, color: 'bg-blue-100' },
    { label: 'Total Travelers', value: '47', icon: Users, color: 'bg-green-100' },
    { label: 'This Month', value: '$185,400', icon: MapPin, color: 'bg-purple-100' },
    { label: 'Pending Approvals', value: '8', icon: Calendar, color: 'bg-orange-100' },
  ];

  const recentTrips = [
    { id: 1, destination: 'New York', travelers: 3, startDate: '2025-01-10', status: 'CREATED' },
    { id: 2, destination: 'London', travelers: 5, startDate: '2025-01-15', status: 'CREATED' },
    { id: 3, destination: 'Tokyo', travelers: 2, startDate: '2025-01-20', status: 'CREATED' },
    { id: 4, destination: 'Paris', travelers: 4, startDate: '2025-01-25', status: 'CREATED' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Travel Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon size={24} className="text-gray-700" />
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
          <div className="space-y-3">
            {recentTrips.map((trip) => (
              <div key={trip.id} className="flex items-center justify-between p-4 border border-gray-300 rounded-lg hover:bg-white/50 transition">
                <div>
                  <p className="font-semibold text-black">{trip.destination}</p>
                  <p className="text-sm text-gray-600">{trip.travelers} travelers â€¢ {trip.startDate}</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">{trip.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
