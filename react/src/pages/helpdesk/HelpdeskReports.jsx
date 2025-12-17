import React, { useState } from 'react';

export default function HelpdeskReports() {
  const ratingDistribution = [
    { stars: 5, count: 593, percent: 80 },
    { stars: 4, count: 99, percent: 18 },
    { stars: 3, count: 6, percent: 10 },
    { stars: 2, count: 2, percent: 1 },
    { stars: 1, count: 0, percent: 0 }
  ];

  const metrics = [
    {
      title: 'Avg.Speed of answer',
      value: '0m:27s',
      icon: 'ðŸ“ž'
    },
    {
      title: 'Time to Resolved Complaint',
      value: '4m:30s',
      icon: 'â±ï¸'
    },
    {
      title: 'Tickets',
      value: '1530',
      icon: 'ðŸŽ«'
    }
  ];

  return (
    <div className="w-full space-y-6 p-6">
      {/* Header */}
      <div>
        <h4 className="text-2xl font-bold text-black">Reports</h4>
        <div className="text-sm text-gray-600 mt-2">Glacia / Helpdesk / Reports</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tickets Status Chart Placeholder */}
          <div className="glass-card border border-gray-300 rounded-lg p-6">
            <h4 className="text-lg font-bold text-black mb-4">Tickets Status</h4>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-600">
              Chart Placeholder - Apex Charts
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="glass-card border border-gray-300 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-2xl font-bold text-black">{metric.value}</p>
                    <p className="text-xs text-gray-600 mt-2">{metric.title}</p>
                    <p className="text-xs text-gray-600">It is a long established fact that a reader.</p>
                  </div>
                  <span className="text-3xl">{metric.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rating Summary */}
        <div className="glass-card border border-gray-300 rounded-lg p-6">
          <h4 className="text-lg font-bold text-black mb-4">Overall Rating</h4>

          {/* Rating Display */}
          <div className="bg-gray-100 rounded p-4 text-center mb-4">
            <p className="text-3xl font-bold text-black">4.8</p>
            <div className="flex justify-center gap-1 mt-2">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-yellow-500">â˜…</span>
              ))}
              <span className="text-yellow-500">â˜†</span>
            </div>
            <p className="text-xs text-gray-600 mt-2">Total Review (700)</p>
          </div>

          {/* Rating Distribution */}
          <div className="space-y-3 mb-6">
            {ratingDistribution.map((item) => (
              <div key={item.stars}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-black">{item.stars} Star</span>
                  <span className="text-gray-600">{item.count}</span>
                </div>
                <div className="w-full bg-gray-200 rounded h-1">
                  <div
                    className="bg-blue-500 h-1 rounded"
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Satisfied Customers */}
          <div className="border-t border-gray-300 pt-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl font-bold text-black">98.5%</p>
                <p className="text-xs text-black font-semibold">Satisfied Customer</p>
              </div>
              <span className="text-4xl">ðŸ˜Š</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
