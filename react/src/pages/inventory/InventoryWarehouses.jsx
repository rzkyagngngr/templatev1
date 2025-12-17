import React from 'react';
import { Warehouse, MapPin, Users, Package } from 'lucide-react';

export default function InventoryWarehouses() {
  const stats = [
    { label: 'Total Warehouses', value: '12', color: 'bg-blue-500' },
    { label: 'Active Staff', value: '156', color: 'bg-green-500' },
    { label: 'Capacity Used', value: '78%', color: 'bg-orange-500' },
    { label: 'Total SKUs', value: '2,458', color: 'bg-purple-500' }
  ];

  const warehouses = [
    { id: 1, name: 'Main Warehouse', location: 'New York, NY', capacity: 10000, used: 7800, staff: 25, status: 'Operational' },
    { id: 2, name: 'Secondary Distribution', location: 'Los Angeles, CA', capacity: 8500, used: 6200, staff: 18, status: 'Operational' },
    { id: 3, name: 'Regional Hub East', location: 'Boston, MA', capacity: 5000, used: 3900, staff: 12, status: 'Operational' },
    { id: 4, name: 'Distribution Center', location: 'Chicago, IL', capacity: 7200, used: 5500, staff: 15, status: 'Operational' },
    { id: 5, name: 'West Coast Depot', location: 'Seattle, WA', capacity: 4500, used: 3100, staff: 10, status: 'Operational' },
    { id: 6, name: 'Central Processing', location: 'Dallas, TX', capacity: 6000, used: 4200, staff: 14, status: 'Maintenance' },
    { id: 7, name: 'Northeast Storage', location: 'Philadelphia, PA', capacity: 3500, used: 2450, staff: 8, status: 'Operational' },
    { id: 8, name: 'South Region', location: 'Atlanta, GA', capacity: 5500, used: 3800, staff: 11, status: 'Operational' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">Warehouses</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-xl p-6 shadow-lg">
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              <p className="text-3xl font-bold text-black mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Warehouses Table */}
        <div className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-300">
            <h2 className="text-xl font-bold text-black">All Warehouses</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100/50">
                <tr className="border-b border-gray-300">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Location</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Capacity</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Used</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Staff</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
                </tr>
              </thead>
              <tbody>
                {warehouses.map((warehouse, index) => {
                  const usagePercent = (warehouse.used / warehouse.capacity) * 100;
                  return (
                    <tr key={index} className="border-b border-gray-300 hover:bg-white/20 transition">
                      <td className="px-6 py-4 text-sm font-semibold text-black">{warehouse.name}</td>
                      <td className="px-6 py-4 text-sm text-black flex items-center gap-2"><MapPin className="w-4 h-4" /> {warehouse.location}</td>
                      <td className="px-6 py-4 text-sm text-black">{warehouse.capacity.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-300 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{width: `${usagePercent}%`}}></div>
                          </div>
                          <span className="text-black text-xs font-semibold">{usagePercent.toFixed(0)}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-black flex items-center gap-2"><Users className="w-4 h-4" /> {warehouse.staff}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          warehouse.status === 'Operational' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {warehouse.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
