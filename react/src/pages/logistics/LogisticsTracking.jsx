import React, { useState } from 'react';
import { Search, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function LogisticsTracking() {
  const [searchId, setSearchId] = useState('');

  const trackingData = [
    { id: 'TRACK-001', location: 'Origin Warehouse', time: '2025-12-16 08:00 AM', status: 'Completed' },
    { id: 'TRACK-001', location: 'In Transit Hub', time: '2025-12-16 02:30 PM', status: 'Completed' },
    { id: 'TRACK-001', location: 'Regional Center', time: '2025-12-16 06:45 PM', status: 'Current' },
    { id: 'TRACK-001', location: 'Destination', time: '2025-12-17 (Est.)', status: 'Pending' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">Logistics Tracking</h1>
          <p className="text-black text-opacity-70 mt-2">CREATED</p>
        </div>

        {/* Search */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-black text-opacity-50" />
              <input
                type="text"
                placeholder="Enter Shipment ID..."
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="bg-blue-600 text-slate-900 px-6 py-2 rounded-lg font-medium hover:bg-blue-700">Track</button>
          </div>
        </div>

        {/* Tracking Timeline */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <h2 className="text-xl font-bold text-black mb-6">Shipment Progress</h2>
          <div className="space-y-6">
            {trackingData.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full border-2 ${item.status === 'Current' ? 'bg-blue-600 border-blue-600' : item.status === 'Completed' ? 'bg-green-600 border-green-600' : 'bg-gray-300 border-gray-300'}`}></div>
                  {idx !== trackingData.length - 1 && <div className="w-1 h-12 bg-gray-300 mt-2"></div>}
                </div>
                <div className="flex-1 pt-1">
                  <p className="font-semibold text-black">{item.location}</p>
                  <p className="text-black text-opacity-60 text-sm">{item.time}</p>
                  <p className={`text-xs font-medium mt-1 ${item.status === 'Current' ? 'text-blue-600' : item.status === 'Completed' ? 'text-green-600' : 'text-gray-500'}`}>
                    {item.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
