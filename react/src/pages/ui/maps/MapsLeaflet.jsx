import React, { useState } from 'react';

export default function MapsLeaflet() {
  const [lat, setLat] = useState(40.7128);
  const [lng, setLng] = useState(-74.006);
  const [zoom, setZoom] = useState(10);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Leaflet Maps</h1>
        <nav className="text-sm text-gray-600">
          <span>UI / </span>
          <span>Maps / </span>
          <span className="text-gray-900 font-medium">Leaflet</span>
        </nav>
      </div>

      {/* Map Container */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Interactive Map</h2>
        <div className="h-96 bg-blue-100 rounded-lg border border-gray-300 flex items-center justify-center text-gray-400">
          ðŸ—ºï¸ Leaflet Map Visualization (Lat: {lat}, Lng: {lng}, Zoom: {zoom})
        </div>
      </div>

      {/* Map Controls */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Map Controls</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black mb-2">Latitude: {lat.toFixed(4)}</label>
            <input
              type="range"
              min="-90"
              max="90"
              step="0.0001"
              value={lat}
              onChange={(e) => setLat(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">Longitude: {lng.toFixed(4)}</label>
            <input
              type="range"
              min="-180"
              max="180"
              step="0.0001"
              value={lng}
              onChange={(e) => setLng(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">Zoom Level: {zoom}</label>
            <input
              type="range"
              min="1"
              max="20"
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Marker Locations */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Markers</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-300">
            <div className="text-2xl">ðŸ“</div>
            <div className="text-black">New York - (40.7128, -74.0060)</div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-300">
            <div className="text-2xl">ðŸ“</div>
            <div className="text-black">Los Angeles - (34.0522, -118.2437)</div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-300">
            <div className="text-2xl">ðŸ“</div>
            <div className="text-black">Chicago - (41.8781, -87.6298)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
