import React, { useState } from 'react';
import { BookOpen, DollarSign, AlertCircle, Users } from 'lucide-react';

export default function TravelPolicies() {
  const policies = [
    { id: 'POL-001', name: 'Air Travel Policy', category: 'Flights', maxPerTrip: '$5,000', approval: 'Manager', status: 'CREATED' },
    { id: 'POL-002', name: 'Hotel Accommodation', category: 'Hotels', maxPerNight: '$300', approval: 'Manager', status: 'CREATED' },
    { id: 'POL-003', name: 'Meal Allowance', category: 'Meals', maxPerDay: '$150', approval: 'No', status: 'CREATED' },
    { id: 'POL-004', name: 'Ground Transportation', category: 'Transport', maxPerTrip: '$500', approval: 'No', status: 'CREATED' },
    { id: 'POL-005', name: 'International Travel', category: 'International', maxPerTrip: '$10,000', approval: 'Director', status: 'CREATED' },
  ];

  const stats = [
    { label: 'Active Policies', value: '12', icon: BookOpen, color: 'bg-blue-100' },
    { label: 'Total Budget', value: '$2.5M', icon: DollarSign, color: 'bg-green-100' },
    { label: 'Policy Violations', value: '3', icon: AlertCircle, color: 'bg-red-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Travel Policies</h1>

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

        {/* Policies Table */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Policy Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Category</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Limit</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Requires Approval</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
              </tr>
            </thead>
            <tbody>
              {policies.map((policy) => (
                <tr key={policy.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black">{policy.id}</td>
                  <td className="px-6 py-4 text-black">{policy.name}</td>
                  <td className="px-6 py-4 text-black">{policy.category}</td>
                  <td className="px-6 py-4 font-bold text-black">{policy.maxPerTrip || policy.maxPerNight || policy.maxPerDay}</td>
                  <td className="px-6 py-4 text-black">{policy.approval}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      {policy.status}
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
