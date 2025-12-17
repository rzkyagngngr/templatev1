import React from 'react';
import { Building2, Package, Thermometer, AlertCircle } from 'lucide-react';

export default function LogisticsWarehouses() {
  const warehouses = [
    { id: 'WH-001', name: 'New York Hub', location: 'New York, NY', capacity: '85%', temperature: '18-22Â°C', status: 'Operational' },
    { id: 'WH-002', name: 'Los Angeles Hub', location: 'Los Angeles, CA', capacity: '72%', temperature: '18-22Â°C', status: 'Operational' },
    { id: 'WH-003', name: 'Chicago Distribution', location: 'Chicago, IL', capacity: '91%', temperature: '18-22Â°C', status: 'Optimal' },
    { id: 'WH-004', name: 'Miami Facility', location: 'Miami, FL', capacity: '68%', temperature: '22-25Â°C', status: 'Operational' },
    { id: 'WH-005', name: 'Seattle Center', location: 'Seattle, WA', capacity: '95%', temperature: '18-22Â°C', status: 'Warning' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Operational': 'bg-green-100 text-green-700',
      'Optimal': 'bg-blue-100 text-blue-700',
      'Warning': 'bg-yellow-100 text-yellow-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">Logistics Warehouses</h1>
          <p className="text-black text-opacity-70 mt-2">CREATED</p>
        </div>

        {/* Warehouses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {warehouses.map((warehouse) => (
            <div key={warehouse.id} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-black">{warehouse.name}</h3>
                  <p className="text-black text-opacity-70 text-sm">{warehouse.location}</p>
                </div>
                <Building2 className="w-5 h-5 text-black" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-black" />
                  <div className="flex-1">
                    <p className="text-black text-opacity-70 text-xs">Capacity</p>
                    <div className="bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: warehouse.capacity }}></div>
                    </div>
                  </div>
                  <span className="text-black font-semibold text-sm">{warehouse.capacity}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-black" />
                  <span className="text-black text-opacity-70 text-sm">{warehouse.temperature}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(warehouse.status)}`}>
                    {warehouse.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
