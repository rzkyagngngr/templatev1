import React, { useState } from 'react';
import { Fuel, TrendingUp, AlertTriangle, DollarSign } from 'lucide-react';

export default function FleetFuel() {
  const fuelRecords = [
    { id: 'FUL-001', vehicle: 'TRK-2401', date: '2024-12-15', quantity: '120L', cost: '$180', fuelType: 'Diesel', efficiency: '8.1 km/L', location: 'Detroit Station' },
    { id: 'FUL-002', vehicle: 'VAN-2402', date: '2024-12-15', quantity: '85L', cost: '$127.50', fuelType: 'Diesel', efficiency: '7.9 km/L', location: 'Chicago Hub' },
    { id: 'FUL-003', vehicle: 'TRK-2403', date: '2024-12-14', quantity: '140L', cost: '$210', fuelType: 'Diesel', efficiency: '8.3 km/L', location: 'Denver Station' },
    { id: 'FUL-004', vehicle: 'TRK-2404', date: '2024-12-14', quantity: '110L', cost: '$165', fuelType: 'Diesel', efficiency: '8.0 km/L', location: 'Atlanta Hub' },
    { id: 'FUL-005', vehicle: 'VAN-2405', date: '2024-12-13', quantity: '95L', cost: '$142.50', fuelType: 'Diesel', efficiency: '8.4 km/L', location: 'Miami Station' },
  ];

  const stats = [
    { label: 'Total Fuel Used (Month)', value: '2,450L', icon: Fuel, color: 'bg-blue-100' },
    { label: 'Avg Efficiency', value: '8.1 km/L', icon: TrendingUp, color: 'bg-green-100' },
    { label: 'Fuel Cost (Month)', value: '$3,675', icon: DollarSign, color: 'bg-orange-100' },
  ];

  const lowEfficiencyVehicles = fuelRecords.filter(r => parseFloat(r.efficiency) < 8.0).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Fleet Fuel Management</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

        {/* Alert */}
        {lowEfficiencyVehicles > 0 && (
          <div className="backdrop-blur-md bg-yellow-50/70 border border-yellow-300 rounded-lg p-4 mb-8 flex items-center gap-3">
            <AlertTriangle size={24} className="text-orange-600" />
            <div>
              <p className="text-black font-semibold">{lowEfficiencyVehicles} vehicle(s) showing low fuel efficiency</p>
              <p className="text-gray-600 text-sm">Consider scheduling maintenance to improve performance</p>
            </div>
          </div>
        )}

        {/* Fuel Records */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <h2 className="text-xl font-bold text-black mb-4">Fuel Records</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2 px-4 text-black font-semibold">Record ID</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Vehicle</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Date</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Quantity</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Cost</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Type</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Efficiency</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Location</th>
                </tr>
              </thead>
              <tbody>
                {fuelRecords.map((record) => (
                  <tr key={record.id} className="border-b border-gray-300 hover:bg-gray-50">
                    <td className="py-2 px-4 text-black">{record.id}</td>
                    <td className="py-2 px-4 text-black font-semibold">{record.vehicle}</td>
                    <td className="py-2 px-4 text-black">{record.date}</td>
                    <td className="py-2 px-4 text-black">{record.quantity}</td>
                    <td className="py-2 px-4 text-black font-semibold">{record.cost}</td>
                    <td className="py-2 px-4 text-black">{record.fuelType}</td>
                    <td className="py-2 px-4 text-black">{record.efficiency}</td>
                    <td className="py-2 px-4 text-black">{record.location}</td>
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
