import React from 'react';
import { Navigation, Clock, Gauge, AlertTriangle } from 'lucide-react';

export default function LogisticsRoutes() {
  const routes = [
    { id: 'RT-001', name: 'NY-LA Express', distance: '2,800 km', duration: '42 hours', status: 'Active', efficiency: '94%' },
    { id: 'RT-002', name: 'Chicago Loop', distance: '450 km', duration: '8 hours', status: 'Active', efficiency: '87%' },
    { id: 'RT-003', name: 'Florida Circuit', distance: '650 km', duration: '11 hours', status: 'Active', efficiency: '91%' },
    { id: 'RT-004', name: 'West Coast Connect', distance: '1,200 km', duration: '18 hours', status: 'Inactive', efficiency: '85%' },
    { id: 'RT-005', name: 'Northeast Hub', distance: '380 km', duration: '6 hours', status: 'Active', efficiency: '88%' },
  ];

  const getStatusColor = (status) => {
    return status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700';
  };

  const getEfficiencyColor = (efficiency) => {
    const value = parseInt(efficiency);
    if (value >= 90) return 'text-green-600';
    if (value >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">Logistics Routes</h1>
          <p className="text-black text-opacity-70 mt-2">CREATED</p>
        </div>

        {/* Routes Table */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b border-gray-300">
                <tr>
                  <th className="px-6 py-4 text-left text-black font-semibold">Route ID</th>
                  <th className="px-6 py-4 text-left text-black font-semibold">Name</th>
                  <th className="px-6 py-4 text-left text-black font-semibold">Distance</th>
                  <th className="px-6 py-4 text-left text-black font-semibold">Duration</th>
                  <th className="px-6 py-4 text-left text-black font-semibold">Efficiency</th>
                  <th className="px-6 py-4 text-left text-black font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((route) => (
                  <tr key={route.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-black font-medium">{route.id}</td>
                    <td className="px-6 py-4 text-black">{route.name}</td>
                    <td className="px-6 py-4 text-black">{route.distance}</td>
                    <td className="px-6 py-4 text-black">{route.duration}</td>
                    <td className={`px-6 py-4 font-semibold ${getEfficiencyColor(route.efficiency)}`}>{route.efficiency}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(route.status)}`}>
                        {route.status}
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
