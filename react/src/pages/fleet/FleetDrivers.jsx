import React, { useState } from 'react';
import { Users, Award, AlertTriangle, Clock } from 'lucide-react';

export default function FleetDrivers() {
  const drivers = [
    { id: 'DRV-001', name: 'John Smith', license: 'DL-2024-001', vehicle: 'TRK-2401', status: 'Active', hoursWorked: '156 hrs', safetyRating: '9.2/10', violations: 0, joinDate: '2023-01-15' },
    { id: 'DRV-002', name: 'Sarah Lee', license: 'DL-2024-002', vehicle: 'VAN-2402', status: 'Active', hoursWorked: '142 hrs', safetyRating: '8.7/10', violations: 1, joinDate: '2023-03-20' },
    { id: 'DRV-003', name: 'Mike Chen', license: 'DL-2024-003', vehicle: 'TRK-2403', status: 'On Leave', hoursWorked: '0 hrs', safetyRating: '9.5/10', violations: 0, joinDate: '2022-11-10' },
    { id: 'DRV-004', name: 'Emily Davis', license: 'DL-2024-004', vehicle: 'TRK-2404', status: 'Active', hoursWorked: '168 hrs', safetyRating: '8.3/10', violations: 2, joinDate: '2023-05-01' },
    { id: 'DRV-005', name: 'David Wilson', license: 'DL-2024-005', vehicle: 'VAN-2405', status: 'Active', hoursWorked: '146 hrs', safetyRating: '9.1/10', violations: 0, joinDate: '2023-02-14' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Active': 'bg-green-100 text-green-700',
      'On Leave': 'bg-blue-100 text-blue-700',
      'Inactive': 'bg-gray-100 text-gray-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const getSafetyColor = (rating) => {
    const value = parseFloat(rating);
    if (value >= 9) return 'text-green-600';
    if (value >= 8.5) return 'text-blue-600';
    return 'text-orange-600';
  };

  const activeDrivers = drivers.filter(d => d.status === 'Active').length;
  const driversWithViolations = drivers.filter(d => d.violations > 0).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black">Fleet Drivers</h1>
          <button className="bg-blue-600 text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
            + Hire Driver
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users size={24} className="text-black" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Active Drivers</p>
                <p className="text-2xl font-bold text-black">{activeDrivers}</p>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Award size={24} className="text-black" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Avg Safety Rating</p>
                <p className="text-2xl font-bold text-black">8.96/10</p>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <AlertTriangle size={24} className="text-black" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Violations (This Month)</p>
                <p className="text-2xl font-bold text-black">{driversWithViolations}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Drivers List */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <h2 className="text-xl font-bold text-black mb-4">Driver Directory</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2 px-4 text-black font-semibold">Name</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">License</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Assigned Vehicle</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Status</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Hours (Month)</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Safety Rating</th>
                  <th className="text-left py-2 px-4 text-black font-semibold">Violations</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map((driver) => (
                  <tr key={driver.id} className="border-b border-gray-300 hover:bg-gray-50">
                    <td className="py-2 px-4 text-black font-semibold">{driver.name}</td>
                    <td className="py-2 px-4 text-black">{driver.license}</td>
                    <td className="py-2 px-4 text-black">{driver.vehicle}</td>
                    <td className="py-2 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(driver.status)}`}>
                        {driver.status}
                      </span>
                    </td>
                    <td className="py-2 px-4 text-black">{driver.hoursWorked}</td>
                    <td className={`py-2 px-4 font-bold ${getSafetyColor(driver.safetyRating)}`}>{driver.safetyRating}</td>
                    <td className="py-2 px-4 text-black font-semibold">{driver.violations}</td>
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
