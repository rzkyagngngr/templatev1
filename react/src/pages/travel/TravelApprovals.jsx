import React, { useState } from 'react';
import { CheckCircle, Clock, Users, DollarSign } from 'lucide-react';

export default function TravelApprovals() {
  const approvals = [
    { id: 'APR-001', traveler: 'John Smith', destination: 'New York', amount: '$2,500', requestDate: '2025-01-08', approver: 'Sarah Lee', status: 'CREATED' },
    { id: 'APR-002', traveler: 'Emily Davis', destination: 'London', amount: '$4,200', requestDate: '2025-01-10', approver: 'Mike Chen', status: 'CREATED' },
    { id: 'APR-003', traveler: 'David Wilson', destination: 'Tokyo', amount: '$5,800', requestDate: '2025-01-12', approver: 'Lisa White', status: 'CREATED' },
    { id: 'APR-004', traveler: 'Jessica Brown', destination: 'Paris', amount: '$3,600', requestDate: '2025-01-14', approver: 'Tom Harris', status: 'CREATED' },
    { id: 'APR-005', traveler: 'Robert Taylor', destination: 'Singapore', amount: '$6,200', requestDate: '2025-01-16', approver: 'Anna Martinez', status: 'CREATED' },
  ];

  const stats = [
    { label: 'Pending', value: '8', icon: Clock, color: 'bg-orange-100' },
    { label: 'Approved', value: '34', icon: CheckCircle, color: 'bg-green-100' },
    { label: 'Total Travelers', value: '156', icon: Users, color: 'bg-blue-100' },
    { label: 'Total Approved', value: '$89,500', icon: DollarSign, color: 'bg-purple-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Travel Approvals</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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

        {/* Approvals Table */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Traveler</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Destination</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Request Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Approver</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
              </tr>
            </thead>
            <tbody>
              {approvals.map((approval) => (
                <tr key={approval.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black">{approval.id}</td>
                  <td className="px-6 py-4 text-black">{approval.traveler}</td>
                  <td className="px-6 py-4 text-black">{approval.destination}</td>
                  <td className="px-6 py-4 font-bold text-black">{approval.amount}</td>
                  <td className="px-6 py-4 text-black">{approval.requestDate}</td>
                  <td className="px-6 py-4 text-black">{approval.approver}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      {approval.status}
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
