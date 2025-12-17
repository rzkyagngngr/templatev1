import React, { useState } from 'react';
import Chart from 'react-apexcharts';

export default function CryptoICO() {
  const icoChartOptions = {
    chart: { type: 'bar', height: 300 },
    series: [{ name: 'Funded Amount', data: [45, 60, 75, 55, 90, 65] }],
    xaxis: { categories: ['ICO 1', 'ICO 2', 'ICO 3', 'ICO 4', 'ICO 5', 'ICO 6'] },
    colors: ['#3b82f6']
  };

  const icoList = [
    { name: 'Token X', funded: '$5.2M', goal: '$10M', progress: 52, status: 'Active' },
    { name: 'Coin Y', funded: '$8.1M', goal: '$10M', progress: 81, status: 'Active' },
    { name: 'Digital Z', funded: '$10M', goal: '$10M', progress: 100, status: 'Completed' }
  ];

  return (
    <div className="w-full space-y-6 p-6">
      <div>
        <h4 className="text-2xl font-bold text-black">ICO</h4>
        <div className="text-sm text-black mt-2">Glacia / Crypto / ICO</div>
      </div>

      <div className="glass-card p-6 border border-gray-300">
        <h5 className="text-lg font-semibold text-black mb-4">ICO Funding Chart</h5>
        <Chart options={icoChartOptions} series={icoChartOptions.series} type="bar" height={300} />
      </div>

      <div className="glass-card p-6 border border-gray-300">
        <h5 className="text-lg font-semibold text-black mb-4">Active ICOs</h5>
        <div className="space-y-4">
          {icoList.map((ico, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-black">{ico.name}</p>
                <span className={`text-xs px-3 py-1 rounded-full ${ico.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>{ico.status}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div style={{ width: `${ico.progress}%` }} className="bg-blue-500 h-2 rounded-full"></div>
              </div>
              <div className="flex justify-between text-sm text-black">
                <p>{ico.funded} / {ico.goal}</p>
                <p>{ico.progress}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
