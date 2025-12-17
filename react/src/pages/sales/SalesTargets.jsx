import React, { useState } from 'react';
import { Target, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

export default function SalesTargets() {
  const targets = [
    { id: 1, name: 'John Smith', region: 'North America', quarterly: '$500,000', ytd: '$1,250,000', achievement: '92%', status: 'On Track' },
    { id: 2, name: 'Sarah Lee', region: 'Europe', quarterly: '$300,000', ytd: '$725,000', achievement: '85%', status: 'Below Target' },
    { id: 3, name: 'Mike Chen', region: 'Asia Pacific', quarterly: '$400,000', ytd: '$1,100,000', achievement: '110%', status: 'Exceeding' },
    { id: 4, name: 'Emily Davis', region: 'South America', quarterly: '$250,000', ytd: '$580,000', achievement: '78%', status: 'Below Target' },
    { id: 5, name: 'David Wilson', region: 'Middle East', quarterly: '$350,000', ytd: '$950,000', achievement: '105%', status: 'Exceeding' },
    { id: 6, name: 'Lisa White', region: 'North America', quarterly: '$200,000', ytd: '$520,000', achievement: '98%', status: 'On Track' },
  ];

  const departmentTargets = [
    { dept: 'Enterprise Sales', target: '$2.5M', forecast: '$2.8M', achievement: '112%', color: 'bg-green-100' },
    { dept: 'Mid-Market', target: '$1.8M', forecast: '$1.6M', achievement: '89%', color: 'bg-yellow-100' },
    { dept: 'SMB', target: '$1.2M', forecast: '$1.4M', achievement: '117%', color: 'bg-green-100' },
    { dept: 'Partnerships', target: '$800K', forecast: '$850K', achievement: '106%', color: 'bg-green-100' },
  ];

  const getStatusIcon = (status) => {
    if (status === 'Exceeding') return <CheckCircle size={18} className="text-green-600" />;
    if (status === 'On Track') return <TrendingUp size={18} className="text-blue-600" />;
    return <AlertCircle size={18} className="text-red-600" />;
  };

  const getStatusColor = (status) => {
    const colors = {
      'Exceeding': 'bg-green-100 text-green-700',
      'On Track': 'bg-blue-100 text-blue-700',
      'Below Target': 'bg-red-100 text-red-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Sales Targets</h1>

        {/* Overall Targets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <Target size={20} className="text-blue-600" />
              <p className="text-gray-600 text-sm">Annual Target</p>
            </div>
            <p className="text-2xl font-bold text-black">$8.3M</p>
          </div>
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <p className="text-gray-600 text-sm mb-2">Current Achievement</p>
            <p className="text-2xl font-bold text-black">$6.2M</p>
            <p className="text-sm text-green-600 font-semibold mt-1">74.7% of Target</p>
          </div>
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <p className="text-gray-600 text-sm mb-2">Remaining to Target</p>
            <p className="text-2xl font-bold text-black">$2.1M</p>
            <p className="text-sm text-gray-600 mt-1">25.3% remaining</p>
          </div>
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <p className="text-gray-600 text-sm mb-2">Team Performance</p>
            <p className="text-2xl font-bold text-black">97%</p>
            <p className="text-sm text-green-600 font-semibold mt-1">Team Average</p>
          </div>
        </div>

        {/* Department Targets */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-black mb-4">Department Targets</h3>
          <div className="space-y-4">
            {departmentTargets.map((dept, idx) => (
              <div key={idx} className="pb-4 border-b border-gray-200 last:border-b-0">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-black">{dept.dept}</p>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${dept.color} text-gray-700`}>
                    {dept.achievement}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm mb-2">
                  <span className="text-gray-600">Target: <span className="font-semibold text-black">{dept.target}</span></span>
                  <span className="text-gray-600">Forecast: <span className="font-semibold text-black">{dept.forecast}</span></span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600`}
                    style={{ width: `${Math.min(parseInt(dept.achievement), 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Targets */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-300 bg-white/50">
            <h3 className="font-bold text-black">Individual Sales Targets</h3>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Sales Rep</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Region</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Quarterly Target</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">YTD Achievement</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">% Achievement</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
              </tr>
            </thead>
            <tbody>
              {targets.map((target) => (
                <tr key={target.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black">{target.name}</td>
                  <td className="px-6 py-4 text-black">{target.region}</td>
                  <td className="px-6 py-4 text-black font-semibold">{target.quarterly}</td>
                  <td className="px-6 py-4 text-black font-semibold">{target.ytd}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-full rounded-full ${
                            target.achievement >= 100
                              ? 'bg-green-500'
                              : target.achievement >= 85
                              ? 'bg-blue-500'
                              : 'bg-red-500'
                          }`}
                          style={{ width: `${Math.min(target.achievement, 100)}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-bold text-black min-w-fit">{target.achievement}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(target.status)}
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(target.status)}`}>
                        {target.status}
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
