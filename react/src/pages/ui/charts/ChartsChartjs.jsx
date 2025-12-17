import React from 'react';

export default function ChartsChartjs() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Chart.js</h1>
        <nav className="text-sm text-gray-600">
          <span>UI / </span>
          <span>Charts / </span>
          <span className="text-gray-900 font-medium">Chart.js</span>
        </nav>
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Bar Chart</h2>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 border border-gray-300">
          ðŸ“Š Bar Chart with Chart.js
        </div>
      </div>

      {/* Doughnut Chart */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Doughnut Chart</h2>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 border border-gray-300">
          ðŸ“Š Doughnut Chart with Chart.js
        </div>
      </div>

      {/* Polar Area Chart */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Polar Area Chart</h2>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 border border-gray-300">
          ðŸ“Š Polar Area Chart with Chart.js
        </div>
      </div>
    </div>
  );
}
