import React from 'react';
import { MapPin, Zap, Clock } from 'lucide-react';

export default function AssetTracking() {
  const assets = [
    { id: 'ASSET-001', name: 'Server A', location: 'Data Center', lastUpdate: '5 mins ago', status: 'Online' },
    { id: 'ASSET-002', name: 'Vehicle #5', location: 'Route 5', lastUpdate: '2 mins ago', status: 'Moving' },
    { id: 'ASSET-003', name: 'Equipment B', location: 'Warehouse 2', lastUpdate: '10 mins ago', status: 'Idle' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Asset Tracking</h1>

        <div className="grid grid-cols-1 gap-6">
          {assets.map(asset => (
            <div key={asset.id} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-black font-bold text-lg">{asset.name}</p>
                  <p className="text-black text-sm mt-1">{asset.id}</p>
                </div>
                <span className={`px-3 py-1 rounded text-xs font-semibold ${asset.status === 'Online' ? 'bg-green-100 text-black' : asset.status === 'Moving' ? 'bg-blue-100 text-black' : 'bg-gray-100 text-black'}`}>
                  {asset.status}
                </span>
              </div>
              <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-black" />
                  <span className="text-black text-sm">{asset.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-black" />
                  <span className="text-black text-sm">{asset.lastUpdate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <span className="inline-block bg-green-500 text-slate-900 text-xs px-2 py-1 rounded">CREATED</span>
        </div>
      </div>
    </div>
  );
}
