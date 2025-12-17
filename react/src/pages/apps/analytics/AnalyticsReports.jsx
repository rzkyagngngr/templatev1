import React, { useState } from 'react';
import Chart from 'react-apexcharts';

export default function AnalyticsReports() {
  const [chartReady, setChartReady] = useState(true);

  // Radial Chart: Domestic vs International
  const radialChartOptions = {
    chart: { type: 'radialBar', height: 265 },
    plotOptions: {
      radialBar: {
        inverseOrder: true,
        hollow: { margin: 5, size: '60%', background: 'transparent' },
        track: { show: true, background: '#ddd', strokeWidth: '10%', opacity: 1, margin: 5 },
        dataLabels: { name: { fontSize: '18px' }, value: { fontSize: '16px', color: '#50649c' } }
      }
    },
    series: [71, 63],
    labels: ['Domestic', 'International'],
    legend: { show: true, position: 'bottom', offsetX: -40, offsetY: -5 },
    colors: ['#1ccab8', '#2a76f4'],
    stroke: { lineCap: 'round', width: 2 }
  };

  // Top Countries Data
  const topCountries = [
    { country: 'USA', flag: 'ðŸ‡ºðŸ‡¸', value: 50289, trend: '+2.5%' },
    { country: 'Germany', flag: 'ðŸ‡©ðŸ‡ª', value: 50289, trend: '+1.2%' },
    { country: 'Spain', flag: 'ðŸ‡ªðŸ‡¸', value: 50289, trend: '+0.8%' }
  ];

  // Social Report Data
  const socialData = [
    { network: 'Google', sessions: 4541, conRate: '3.2%', avgTime: '3:20', bounceRate: '57.8%', change: '+17.8%', icon: 'ðŸ”', color: 'text-red-500' },
    { network: 'Yahoo', sessions: 1522, conRate: '4.2%', avgTime: '4:20', bounceRate: '62.8%', change: '-12.8%', icon: 'ðŸŸ£', color: 'text-blue-500' },
    { network: 'UC Browser', sessions: 1292, conRate: '3.2%', avgTime: '5:20', bounceRate: '33.8%', change: '+17.8%', icon: 'ðŸŒ', color: 'text-pink-500' },
    { network: 'Facebook', sessions: 2241, conRate: '4.9%', avgTime: '2:20', bounceRate: '48.8%', change: '+17.8%', icon: 'f', color: 'text-blue-600' },
    { network: 'Twitter', sessions: 6806, conRate: '3.2%', avgTime: '3:20', bounceRate: '57.8%', change: '-11.8%', icon: 'ð•', color: 'text-cyan-500' },
    { network: 'LinkedIn', sessions: 4541, conRate: '3.2%', avgTime: '3:20', bounceRate: '52.8%', change: '+17.8%', icon: 'ðŸ”—', color: 'text-blue-700' },
    { network: 'Pinterest', sessions: 3542, conRate: '8.2%', avgTime: '6:20', bounceRate: '61.8%', change: '+23.8%', icon: 'P', color: 'text-red-600' },
    { network: 'Instagram', sessions: 3521, conRate: '1.2%', avgTime: '6:45', bounceRate: '66.2%', change: '+34.8%', icon: 'ðŸ“·', color: 'text-green-500' }
  ];

  return (
    <div className="w-full space-y-6 p-6">
      {/* Header */}
      <div>
        <h4 className="text-2xl font-bold text-black">Reports</h4>
        <div className="text-sm text-black mt-2">
          <span>Glacia</span> <span className="mx-2">/</span> <span>Analytics</span> <span className="mx-2">/</span> <span>Reports</span>
        </div>
      </div>

      {/* Radial Chart & Top Countries */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Radial Chart */}
        <div className="glass-card p-6 border border-gray-300">
          <h5 className="text-lg font-semibold text-black mb-4">Domestic vs International</h5>
          {chartReady && <Chart options={radialChartOptions} series={radialChartOptions.series} type="radialBar" height={265} />}
        </div>

        {/* Top 3 Countries */}
        <div className="glass-card p-6 border border-gray-300">
          <h5 className="text-lg font-semibold text-black mb-4">Top 3 Country</h5>
          <div className="space-y-4">
            {topCountries.map((country, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{country.flag}</span>
                  <div>
                    <p className="text-sm font-semibold text-black">{country.country}</p>
                    <p className="text-xs text-black">Last Month</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-black">{country.value.toLocaleString()}</p>
                  <p className="text-xs text-green-600">{country.trend}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Report Table */}
      <div className="glass-card p-6 border border-gray-300">
        <h5 className="text-lg font-semibold text-black mb-4">Social Report</h5>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-3 px-4 text-xs font-bold text-black uppercase">Network</th>
                <th className="text-left py-3 px-4 text-xs font-bold text-black uppercase">Sessions</th>
                <th className="text-left py-3 px-4 text-xs font-bold text-black uppercase">Con.Rate</th>
                <th className="text-left py-3 px-4 text-xs font-bold text-black uppercase">Avg.Time</th>
                <th className="text-left py-3 px-4 text-xs font-bold text-black uppercase">Bounce Rate</th>
                <th className="text-left py-3 px-4 text-xs font-bold text-black uppercase">%Change</th>
              </tr>
            </thead>
            <tbody>
              {socialData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-4 text-black font-semibold">{row.network}</td>
                  <td className="py-3 px-4 text-black">{row.sessions.toLocaleString()}</td>
                  <td className="py-3 px-4 text-black">{row.conRate}</td>
                  <td className="py-3 px-4 text-black">{row.avgTime}</td>
                  <td className="py-3 px-4 text-black">{row.bounceRate}</td>
                  <td className={`py-3 px-4 font-semibold ${row.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{row.change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
