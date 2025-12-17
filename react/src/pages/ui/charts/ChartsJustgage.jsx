import React from 'react';

export default function ChartsJustgage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">JustGage Gauges</h1>
        <nav className="text-sm text-gray-600">
          <span>UI / </span>
          <span>Charts / </span>
          <span className="text-gray-900 font-medium">JustGage</span>
        </nav>
      </div>

      {/* Gauge Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Gauge 1 */}
        <div className="bg-white rounded-2xl border border-gray-300 p-8 backdrop-blur-xl bg-opacity-80">
          <h2 className="text-lg font-semibold text-black mb-6 text-center">Performance</h2>
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 border border-gray-300">
            ðŸ“Š Gauge: 75%
          </div>
        </div>

        {/* Gauge 2 */}
        <div className="bg-white rounded-2xl border border-gray-300 p-8 backdrop-blur-xl bg-opacity-80">
          <h2 className="text-lg font-semibold text-black mb-6 text-center">Usage</h2>
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 border border-gray-300">
            ðŸ“Š Gauge: 60%
          </div>
        </div>

        {/* Gauge 3 */}
        <div className="bg-white rounded-2xl border border-gray-300 p-8 backdrop-blur-xl bg-opacity-80">
          <h2 className="text-lg font-semibold text-black mb-6 text-center">Progress</h2>
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 border border-gray-300">
            ðŸ“Š Gauge: 85%
          </div>
        </div>

        {/* Gauge 4 */}
        <div className="bg-white rounded-2xl border border-gray-300 p-8 backdrop-blur-xl bg-opacity-80">
          <h2 className="text-lg font-semibold text-black mb-6 text-center">Storage</h2>
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 border border-gray-300">
            ðŸ“Š Gauge: 45%
          </div>
        </div>

        {/* Gauge 5 */}
        <div className="bg-white rounded-2xl border border-gray-300 p-8 backdrop-blur-xl bg-opacity-80">
          <h2 className="text-lg font-semibold text-black mb-6 text-center">Efficiency</h2>
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 border border-gray-300">
            ðŸ“Š Gauge: 92%
          </div>
        </div>
      </div>
    </div>
  );
}
