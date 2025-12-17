import React from 'react';
import { BookOpen, FileText, TrendingUp, Users } from 'lucide-react';

export default function KBDashboard() {
  const stats = [
    { label: 'Total Articles', value: '342', icon: FileText, color: 'bg-blue-100' },
    { label: 'Active Contributors', value: '28', icon: Users, color: 'bg-green-100' },
    { label: 'Views This Month', value: '12,456', icon: TrendingUp, color: 'bg-purple-100' },
    { label: 'Avg Rating', value: '4.8/5', icon: BookOpen, color: 'bg-orange-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Knowledge Base Dashboard - CREATED</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-black">{stat.label}</p>
                    <p className="text-2xl font-bold text-black">{stat.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <h2 className="text-xl font-bold text-black mb-4">Recent Articles</h2>
          <p className="text-black">Knowledge base dashboard content goes here...</p>
        </div>
      </div>
    </div>
  );
}
