import React, { useState } from 'react';
import { Truck, Calendar, CheckCircle, AlertTriangle } from 'lucide-react';

export default function FleetVehicles() {
  const vehicles = [
    { id: 'VEH-001', make: 'Volvo', model: 'FH16', plate: 'TRK-2401', year: 2022, status: 'Active', mileage: '45,230 km', owner: 'John Smith' },
    { id: 'VEH-002', make: 'Mercedes', model: 'Actros', plate: 'TRK-2402', year: 2021, status: 'Maintenance', mileage: '78,540 km', owner: 'Sarah Lee' },
    { id: 'VEH-003', make: 'Scania', model: 'R450', plate: 'VAN-2403', year: 2023, status: 'Active', mileage: '12,350 km', owner: 'Mike Chen' },
    { id: 'VEH-004', make: 'DAF', model: 'XF', plate: 'TRK-2404', year: 2020, status: 'Active', mileage: '125,670 km', owner: 'Emily Davis' },
    { id: 'VEH-005', make: 'Iveco', model: 'S-Way', plate: 'VAN-2405', year: 2022, status: 'Active', mileage: '38,900 km', owner: 'David Wilson' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Active': 'bg-green-100 text-green-700',
      'Maintenance': 'bg-orange-100 text-orange-700',
      'Inactive': 'bg-gray-100 text-gray-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black">Fleet Vehicles</h1>
          <button className="bg-blue-600 text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
            + Add Vehicle
          </button>
        </div>

        {/* Vehicles List */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2 px-4 text-black font-semibold">Vehicle ID</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Make/Model</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Plate</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Year</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Mileage</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Owner</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="border-b border-gray-300 hover:bg-gray-50">
                    <td className="py-2 px-4 text-black">{vehicle.id}</td>
                    <td className="py-2 px-4 text-black">{vehicle.make} {vehicle.model}</td>
                    <td className="py-2 px-4 text-black font-semibold">{vehicle.plate}</td>
                    <td className="py-2 px-4 text-black">{vehicle.year}</td>
                    <td className="py-2 px-4 text-black">{vehicle.mileage}</td>
                    <td className="py-2 px-4 text-black">{vehicle.owner}</td>
                    <td className="py-2 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(vehicle.status)}`}>
                        {vehicle.status}
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
