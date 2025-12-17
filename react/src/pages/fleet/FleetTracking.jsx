import React, { useState } from 'react';
import { MapPin, Navigation, Speed, Clock } from 'lucide-react';

export default function FleetTracking() {
  const activeTrips = [
    { id: 'TR-001', vehicle: 'TRK-2401', driver: 'John Smith', location: '42.3314Â° N, 83.0458Â° W', speed: '78 km/h', destination: 'Detroit, MI', eta: '2 hrs 15 min', status: 'On Route' },
    { id: 'TR-002', vehicle: 'VAN-2402', driver: 'Sarah Lee', location: '40.7128Â° N, 74.0060Â° W', speed: '65 km/h', destination: 'New York, NY', eta: '4 hrs 30 min', status: 'On Route' },
    { id: 'TR-003', vehicle: 'TRK-2403', driver: 'Mike Chen', location: '34.0522Â° N, 118.2437Â° W', speed: '82 km/h', destination: 'Los Angeles, CA', eta: '1 hr 45 min', status: 'On Route' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Fleet Tracking</h1>

        {/* Map Placeholder */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6 mb-8 h-96 flex items-center justify-center bg-gray-200">
          <p className="text-black text-lg">Map view would be displayed here</p>
        </div>

        {/* Active Trips */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <h2 className="text-xl font-bold text-black mb-4">Active Trips</h2>
          <div className="space-y-4">
            {activeTrips.map((trip) => (
              <div key={trip.id} className="border border-gray-300 rounded-lg p-4 bg-gradient-to-r from-transparent to-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-gray-600 text-sm">Trip ID / Vehicle</p>
                    <p className="text-black font-bold">{trip.id} â€¢ {trip.vehicle}</p>
                    <p className="text-black text-sm">{trip.driver}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={16} className="text-black" />
                      <p className="text-gray-600 text-sm">Current Location</p>
                    </div>
                    <p className="text-black font-semibold">{trip.location}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <p className="text-gray-600 text-sm flex items-center gap-1"><Speed size={14} /> Speed</p>
                      <p className="text-black font-bold">{trip.speed}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Destination</p>
                      <p className="text-black font-semibold text-sm">{trip.destination}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm flex items-center gap-1"><Clock size={14} /> ETA</p>
                      <p className="text-black font-bold text-sm">{trip.eta}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex justify-end">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                    {trip.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
