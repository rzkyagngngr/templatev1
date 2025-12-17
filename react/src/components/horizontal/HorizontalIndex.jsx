import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const HorizontalIndex = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('thisYear');

  const audienceData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
  ];

  const deviceData = [
    { name: 'Desktop', value: 400 },
    { name: 'Mobile', value: 300 },
    { name: 'Tablet', value: 200 },
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b'];

  const statCards = [
    { title: 'Sessions', value: '24k', trend: '+8.5%', icon: '👥', status: 'up' },
    { title: 'Avg.Sessions', value: '00:18', trend: '+1.5%', icon: '⏱️', status: 'up' },
    { title: 'Bounce Rate', value: '$2400', trend: '-35%', icon: '📊', status: 'down' },
    { title: 'Goal Completions', value: '85000', trend: '+10.5%', icon: '🎉', status: 'up' },
  ];

  const deviceStats = [
    { name: 'Desktop', sessions: '12,400', day: '4.3%', week: '8.5%' },
    { name: 'Mobile', sessions: '8,900', day: '2.1%', week: '5.2%' },
    { name: 'Tablet', sessions: '2,700', day: '1.2%', week: '2.1%' },
  ];

  return (
    <div className="page-wrapper">
      <div className="page-content-tab">
        <div className="container-fluid">
          {/* Page Title */}
          <div className="row mb-4">
            <div className="col-sm-12">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold text-black mb-2">Analytics</h2>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="mx-1">Glacia</span>
                  <span className="mx-1">/</span>
                  <span className="mx-1">Dashboards</span>
                  <span className="mx-1">/</span>
                  <span className="text-black font-semibold">Analytics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {statCards.map((card, idx) => (
              <div
                key={idx}
                className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-black text-sm font-semibold mb-2">{card.title}</p>
                    <h3 className="text-2xl font-bold text-black mb-2">{card.value}</h3>
                    <p className="text-xs text-gray-600">
                      <span className={card.status === 'up' ? 'text-green-600' : 'text-red-600'}>
                        {card.trend}
                      </span>
                      {' '}
                      {card.title === 'Sessions' && 'New Sessions Today'}
                      {card.title === 'Avg.Sessions' && 'Weekly Avg.Sessions'}
                      {card.title === 'Bounce Rate' && 'Bounce Rate Weekly'}
                      {card.title === 'Goal Completions' && 'Completions Weekly'}
                    </p>
                  </div>
                  <div className="text-3xl">{card.icon}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Audience Overview Chart */}
            <div className="lg:col-span-2">
              <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-lg font-bold text-black">Audience Overview</h4>
                  <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white/60 text-black"
                  >
                    <option value="today">Today</option>
                    <option value="lastWeek">Last Week</option>
                    <option value="lastMonth">Last Month</option>
                    <option value="thisYear">This Year</option>
                  </select>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={audienceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="name" stroke="#000" />
                    <YAxis stroke="#000" />
                    <Tooltip contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', border: '1px solid #ccc', borderRadius: '8px' }} />
                    <Legend />
                    <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Sessions Device Chart */}
            <div>
              <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-lg font-bold text-black">Sessions Device</h4>
                  <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white/60 text-black">
                    <option>All</option>
                    <option>Purchases</option>
                    <option>Emails</option>
                  </select>
                </div>
                <div className="flex justify-center mb-6">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie data={deviceData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                        {deviceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="bg-gray-100/50 rounded-lg p-3 mb-4 text-center text-xs text-black">
                  📅 01 January 2020 to 31 December 2020
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left text-black py-2">Device</th>
                        <th className="text-right text-black py-2">Sessions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deviceStats.map((stat, idx) => (
                        <tr key={idx} className="border-b border-gray-300">
                          <td className="text-black py-2">{stat.name}</td>
                          <td className="text-right text-black">{stat.sessions}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalIndex;
