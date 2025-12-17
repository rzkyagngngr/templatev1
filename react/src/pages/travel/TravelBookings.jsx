import React, { useState } from 'react';
import { BookOpen, Calendar, DollarSign, MapPin } from 'lucide-react';

export default function TravelBookings() {
  const bookings = [
    { id: 'BK-001', destination: 'New York', hotel: 'Marriott', checkIn: '2025-01-10', nights: 3, cost: '$1,200', status: 'CREATED' },
    { id: 'BK-002', destination: 'London', hotel: 'The Ritz', checkIn: '2025-01-15', nights: 5, cost: '$3,500', status: 'CREATED' },
    { id: 'BK-003', destination: 'Tokyo', hotel: 'Park Hyatt', checkIn: '2025-01-20', nights: 4, cost: '$2,800', status: 'CREATED' },
    { id: 'BK-004', destination: 'Paris', hotel: 'Le Bristol', checkIn: '2025-01-25', nights: 3, cost: '$2,400', status: 'CREATED' },
    { id: 'BK-005', destination: 'Singapore', hotel: 'Marina Bay Sands', checkIn: '2025-02-01', nights: 2, cost: '$1,600', status: 'CREATED' },
  ];

  const stats = [
    { label: 'Total Bookings', value: '24', icon: BookOpen, color: 'bg-blue-100' },
    { label: 'Upcoming', value: '12', icon: Calendar, color: 'bg-purple-100' },
    { label: 'Total Spend', value: '$45,600', icon: DollarSign, color: 'bg-green-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Travel Bookings</h1>

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

        {/* Bookings Table */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Booking ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Destination</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Hotel</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Check-in</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Nights</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Cost</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black">{booking.id}</td>
                  <td className="px-6 py-4 text-black">{booking.destination}</td>
                  <td className="px-6 py-4 text-black">{booking.hotel}</td>
                  <td className="px-6 py-4 text-black flex items-center gap-1">
                    <Calendar size={16} />
                    {booking.checkIn}
                  </td>
                  <td className="px-6 py-4 text-black">{booking.nights}</td>
                  <td className="px-6 py-4 font-bold text-black">{booking.cost}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      {booking.status}
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
