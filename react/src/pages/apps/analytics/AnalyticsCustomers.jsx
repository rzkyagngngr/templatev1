import React, { useState } from 'react';
import Chart from 'react-apexcharts';

export default function AnalyticsCustomers() {
  const [chartReady, setChartReady] = useState(true);

  // Line Chart: Customers Growth
  const lineChartOptions = {
    chart: { height: 375, type: 'line', toolbar: { show: false } },
    stroke: { width: 3, curve: 'smooth' },
    series: [{ name: 'Likes', data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5] }],
    xaxis: {
      type: 'datetime',
      categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
      axisBorder: { show: true, color: '#bec7e0' },
      axisTicks: { show: true, color: '#bec7e0' }
    },
    colors: ['#5766da'],
    markers: { size: 3, opacity: 0.9, colors: ['#fdb5c8'], strokeColors: '#fff', strokeWidth: 1 },
    yaxis: { min: -10, max: 40, title: { text: 'Engagement' } },
    grid: { row: { colors: ['transparent', 'transparent'], opacity: 0.2 }, strokeDashArray: 3.5 }
  };

  // Stat Cards
  const stats = [
    { label: 'Returning Customers', value: '150', trend: '+12%', icon: 'ðŸ“Š' },
    { label: 'New Customers', value: '10', trend: '-5%', icon: 'ðŸ‘¥' },
    { label: 'Bounce Rate', value: '50%', trend: '+2%', icon: 'ðŸ“ˆ' }
  ];

  // Customer Data
  const customers = [
    { id: 1, name: 'Oli Bob', progress: 12, gender: 'male', rating: 1, dob: '19/02/1984' },
    { id: 2, name: 'Mary May', progress: 1, gender: 'female', rating: 2, dob: '14/05/1982' },
    { id: 3, name: 'Christine Lobowski', progress: 42, gender: 'female', rating: 0, dob: '22/05/1982' },
    { id: 4, name: 'Brendon Philips', progress: 100, gender: 'male', rating: 1, dob: '01/08/1980' },
    { id: 5, name: 'Margret Marmajuke', progress: 16, gender: 'female', rating: 5, dob: '31/01/1999' },
    { id: 6, name: 'Frank Harbours', progress: 38, gender: 'male', rating: 4, dob: '12/05/1966' }
  ];

  return (
    <div className="w-full space-y-6 p-6">
      {/* Header */}
      <div>
        <h4 className="text-2xl font-bold text-black">Customers</h4>
        <div className="text-sm text-black mt-2">
          <span>Glacia</span> <span className="mx-2">/</span> <span>Analytics</span> <span className="mx-2">/</span> <span>Customers</span>
        </div>
      </div>

      {/* Main Chart */}
      <div className="glass-card p-6 border border-gray-300">
        <h5 className="text-lg font-semibold text-black mb-4">Customers Growth</h5>
        {chartReady && <Chart options={lineChartOptions} series={lineChartOptions.series} type="line" height={375} />}
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-card p-6 border border-gray-300">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-black text-xs font-semibold uppercase">{stat.label}</p>
                <h4 className="text-3xl font-bold text-black my-2">{stat.value}</h4>
                <p className="text-black text-sm"><span className={stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}>{stat.trend}</span> from Last Month</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-2xl">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Customers Table */}
      <div className="glass-card p-6 border border-gray-300">
        <h5 className="text-lg font-semibold text-black mb-4">Customers Details</h5>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-4 px-4 text-xs font-bold text-black uppercase">Name</th>
                <th className="text-left py-4 px-4 text-xs font-bold text-black uppercase">Progress</th>
                <th className="text-left py-4 px-4 text-xs font-bold text-black uppercase">Gender</th>
                <th className="text-left py-4 px-4 text-xs font-bold text-black uppercase">Rating</th>
                <th className="text-left py-4 px-4 text-xs font-bold text-black uppercase">DOB</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((cust) => (
                <tr key={cust.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-4 px-4 text-black">{cust.name}</td>
                  <td className="py-4 px-4">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div style={{ width: `${cust.progress}%` }} className="bg-blue-500 h-2 rounded-full"></div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-black capitalize">{cust.gender}</td>
                  <td className="py-4 px-4 text-black">{'â­'.repeat(cust.rating)}</td>
                  <td className="py-4 px-4 text-black">{cust.dob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
