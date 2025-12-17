import React, { useState } from 'react';

export default function MapsVector() {
  const [mapType, setMapType] = useState('road');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Vector Maps</h1>
        <nav className="text-sm text-gray-600">
          <span>UI / </span>
          <span>Maps / </span>
          <span className="text-gray-900 font-medium">Vector</span>
        </nav>
      </div>

      {/* Map Type Selector */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Map Type</h2>
        <div className="flex gap-3">
          <button
            onClick={() => setMapType('road')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              mapType === 'road'
                ? 'bg-blue-500 ='
                : 'bg-gray-100 text-black border border-gray-300 hover:bg-gray-200'
            }`}
          >
            Road Map
          </button>
          <button
            onClick={() => setMapType('satellite')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              mapType === 'satellite'
                ? 'bg-blue-500 ='
                : 'bg-gray-100 text-black border border-gray-300 hover:bg-gray-200'
            }`}
          >
            Satellite
          </button>
          <button
            onClick={() => setMapType('terrain')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              mapType === 'terrain'
                ? 'bg-blue-500 ='
                : 'bg-gray-100 text-black border border-gray-300 hover:bg-gray-200'
            }`}
          >
            Terrain
          </button>
          <button
            onClick={() => setMapType('hybrid')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              mapType === 'hybrid'
                ? 'bg-blue-500 ='
                : 'bg-gray-100 text-black border border-gray-300 hover:bg-gray-200'
            }`}
          >
            Hybrid
          </button>
        </div>
      </div>

      {/* Vector Map Display */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">World Vector Map - {mapType.toUpperCase()}</h2>
        <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg border border-gray-300 flex items-center justify-center text-gray-400">
          ðŸŒ Vector Map - {mapType}
        </div>
      </div>

      {/* Region Data */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Region Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-300">
            <p className="text-sm text-gray-600">North America</p>
            <p className="text-2xl font-bold text-black">1.2M</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-300">
            <p className="text-sm text-gray-600">Europe</p>
            <p className="text-2xl font-bold text-black">2.1M</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-300">
            <p className="text-sm text-gray-600">Asia</p>
            <p className="text-2xl font-bold text-black">3.8M</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-300">
            <p className="text-sm text-gray-600">Africa</p>
            <p className="text-2xl font-bold text-black">890K</p>
          </div>
        </div>
      </div>
    </div>
  );
}
