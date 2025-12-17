import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Users } from 'lucide-react';

export default function TravelItineraries() {
  const itineraries = [
    { id: 'IT-001', trip: 'New York Business Trip', startDate: '2025-01-10', endDate: '2025-01-12', days: 3, activities: '8', travelers: 2, status: 'CREATED' },
    { id: 'IT-002', trip: 'London Conference', startDate: '2025-01-15', endDate: '2025-01-19', days: 5, activities: '12', travelers: 3, status: 'CREATED' },
    { id: 'IT-003', trip: 'Tokyo Site Visit', startDate: '2025-01-20', endDate: '2025-01-23', days: 4, activities: '10', travelers: 1, status: 'CREATED' },
    { id: 'IT-004', trip: 'Paris Team Meeting', startDate: '2025-01-25', endDate: '2025-01-27', days: 3, activities: '6', travelers: 4, status: 'CREATED' },
  ];

  const stats = [
    { label: 'Active Itineraries', value: '12', icon: MapPin, color: 'bg-blue-100' },
    { label: 'Total Days Planned', value: '89', icon: Calendar, color: 'bg-green-100' },
    { label: 'Activities', value: '156', icon: Clock, color: 'bg-purple-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Travel Itineraries</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

        {/* Itineraries Table */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Trip</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Start Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">End Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Days</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Activities</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Travelers</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
              </tr>
            </thead>
            <tbody>
              {itineraries.map((itinerary) => (
                <tr key={itinerary.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black">{itinerary.id}</td>
                  <td className="px-6 py-4 text-black">{itinerary.trip}</td>
                  <td className="px-6 py-4 text-black flex items-center gap-1">
                    <Calendar size={16} />
                    {itinerary.startDate}
                  </td>
                  <td className="px-6 py-4 text-black flex items-center gap-1">
                    <Calendar size={16} />
                    {itinerary.endDate}
                  </td>
                  <td className="px-6 py-4 text-black">{itinerary.days}</td>
                  <td className="px-6 py-4 text-black">{itinerary.activities}</td>
                  <td className="px-6 py-4 text-black flex items-center gap-1">
                    <Users size={16} />
                    {itinerary.travelers}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      {itinerary.status}
                    </span>
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
