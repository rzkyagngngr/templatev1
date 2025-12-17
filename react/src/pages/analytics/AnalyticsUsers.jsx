import React from 'react';
import { Users, MapPin, Globe } from 'lucide-react';

export default function AnalyticsUsers() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-6">
        <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
          CREATED
        </div>
        <h1 className="text-4xl font-bold text-black mt-4">Analytics Users</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg p-6">
          <h3 className="text-sm font-medium text-black mb-2">New Users</h3>
          <p className="text-3xl font-bold text-black">8,234</p>
          <p className="text-sm text-gray-600 mt-2">â†‘ 15% from last month</p>
        </div>
        <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg p-6">
          <h3 className="text-sm font-medium text-black mb-2">Returning Users</h3>
          <p className="text-3xl font-bold text-black">37,000</p>
          <p className="text-sm text-gray-600 mt-2">â†‘ 8% from last month</p>
        </div>
        <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg p-6">
          <h3 className="text-sm font-medium text-black mb-2">Active Sessions</h3>
          <p className="text-3xl font-bold text-black">2,847</p>
          <p className="text-sm text-gray-600 mt-2">Currently active</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-black">User Demographics</h2>
            <Users className="text-black" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-black">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Age Group</th>
                  <th className="px-4 py-2 text-right">Users</th>
                  <th className="px-4 py-2 text-right">Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2">18-24</td>
                  <td className="px-4 py-2 text-right">12,450</td>
                  <td className="px-4 py-2 text-right">27.5%</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2">25-34</td>
                  <td className="px-4 py-2 text-right">18,920</td>
                  <td className="px-4 py-2 text-right">41.8%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-black">Geographic Distribution</h2>
            <MapPin className="text-black" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-black">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Region</th>
                  <th className="px-4 py-2 text-right">Users</th>
                  <th className="px-4 py-2 text-right">Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2">North America</td>
                  <td className="px-4 py-2 text-right">22,100</td>
                  <td className="px-4 py-2 text-right">48.8%</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2">Europe</td>
                  <td className="px-4 py-2 text-right">15,340</td>
                  <td className="px-4 py-2 text-right">33.9%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
