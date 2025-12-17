import React, { useState } from 'react';
import { Users, TrendingUp, Award, Target } from 'lucide-react';

export default function SalesTeam() {
  const teamMembers = [
    { id: 1, name: 'John Smith', role: 'Senior Sales Manager', email: 'john.smith@company.com', region: 'North America', quota: '$500,000', achievement: '$625,000', percentage: 125 },
    { id: 2, name: 'Sarah Lee', role: 'Sales Representative', email: 'sarah.lee@company.com', region: 'Europe', quota: '$300,000', achievement: '$285,000', percentage: 95 },
    { id: 3, name: 'Mike Chen', role: 'Sales Executive', email: 'mike.chen@company.com', region: 'Asia Pacific', quota: '$400,000', achievement: '$475,000', percentage: 119 },
    { id: 4, name: 'Emily Davis', role: 'Sales Representative', email: 'emily.davis@company.com', region: 'South America', quota: '$250,000', achievement: '$198,000', percentage: 79 },
    { id: 5, name: 'David Wilson', role: 'Regional Sales Head', email: 'david.wilson@company.com', region: 'Middle East', quota: '$350,000', achievement: '$380,000', percentage: 109 },
    { id: 6, name: 'Lisa White', role: 'Sales Associate', email: 'lisa.white@company.com', region: 'North America', quota: '$200,000', achievement: '$215,000', percentage: 108 },
  ];

  const getPerformanceColor = (percentage) => {
    if (percentage >= 100) return 'bg-green-100 text-green-700';
    if (percentage >= 80) return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-red-700';
  };

  const stats = [
    { label: 'Team Size', value: teamMembers.length, icon: Users, color: 'bg-blue-100' },
    { label: 'Total Quota', value: '$2.0M', icon: Target, color: 'bg-orange-100' },
    { label: 'Total Achievement', value: '$2.18M', icon: TrendingUp, color: 'bg-green-100' },
    { label: 'Avg Performance', value: '109%', icon: Award, color: 'bg-purple-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Sales Team</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className={`${stat.color} p-2 rounded-lg`}>
                    <Icon size={20} className="text-gray-700" />
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-black">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Team Members Table */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Role</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Region</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Quota</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Achievement</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Performance</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member) => (
                <tr key={member.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-black">{member.name}</p>
                      <p className="text-xs text-gray-500">{member.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-black">{member.role}</td>
                  <td className="px-6 py-4 text-black">{member.region}</td>
                  <td className="px-6 py-4 text-black font-semibold">{member.quota}</td>
                  <td className="px-6 py-4 text-black font-semibold">{member.achievement}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-full rounded-full ${member.percentage >= 100 ? 'bg-green-500' : member.percentage >= 80 ? 'bg-yellow-500' : 'bg-red-500'}`}
                            style={{ width: `${Math.min(member.percentage, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className={`text-sm font-bold px-2 py-1 rounded ${getPerformanceColor(member.percentage)}`}>
                        {member.percentage}%
                      </span>
                    </div>
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
