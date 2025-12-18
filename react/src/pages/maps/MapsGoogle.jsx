import React from 'react';
import { MapPin, Navigation, Map as MapIcon, Layers } from 'lucide-react';

export default function MapsGoogle() {
    const locations = [
        { name: 'New York', coordinates: '40.7128°N, 74.0060°W', address: 'New York, NY 10001' },
        { name: 'Los Angeles', coordinates: '34.0522°N, 118.2437°W', address: 'Los Angeles, CA 90001' },
        { name: 'Chicago', coordinates: '41.8781°N, 87.6298°W', address: 'Chicago, IL 60601' },
        { name: 'Houston', coordinates: '29.7604°N, 95.3698°W', address: 'Houston, TX 77001' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <div className="w-full space-y-6">
                <div>
                    <nav className="flex text-gray-600 text-sm mb-3">
                        <span className="hover:text-gray-900 cursor-pointer transition">Glacia</span>
                        <span className="mx-2">/</span>
                        <span className="hover:text-gray-900 cursor-pointer transition">Maps</span>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-semibold">Google Maps</span>
                    </nav>
                    <h1 className="text-4xl font-bold text-gray-900">Google Maps Integration</h1>
                    <p className="text-gray-600 mt-2">API-based map integration with location markers</p>
                </div>

                {/* Map Preview Area */}
                <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl overflow-hidden shadow-xl shadow-black/5 h-96">
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                        {/* Map Placeholder with Grid */}
                        <div className="absolute inset-0 opacity-20">
                            <div className="w-full h-full grid grid-cols-4 grid-rows-3">
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <div key={i} className="border border-gray-300"></div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Location Markers */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center z-10">
                                <MapIcon className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                                <p className="text-gray-700 text-lg font-semibold">Google Maps Integration</p>
                                <p className="text-gray-600 text-sm mt-2">API Key Required for Full Functionality</p>
                            </div>
                        </div>

                        {/* Sample Markers */}
                        <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold">1</div>
                        <div className="absolute top-2/3 right-1/4 w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold">2</div>
                        <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold">3</div>
                    </div>
                </div>

                {/* Locations List */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {locations.map((location, idx) => (
                        <div key={idx} className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-2xl bg-blue-100/60 text-blue-600 flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{location.name}</h3>
                                    <p className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                                        <Navigation size={16} className="text-blue-600" />
                                        {location.coordinates}
                                    </p>
                                    <p className="text-sm text-gray-700 font-medium">{location.address}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Map Controls Info */}
                <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-2xl bg-purple-100/60 text-purple-600">
                            <Layers size={24} />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">Map Features</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 rounded-2xl bg-white/40 border border-white/60">
                            <p className="text-sm font-semibold text-gray-900 mb-1">Zoom Controls</p>
                            <p className="text-xs text-gray-600">Pan and zoom with mouse wheel or controls</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/40 border border-white/60">
                            <p className="text-sm font-semibold text-gray-900 mb-1">Multiple Markers</p>
                            <p className="text-xs text-gray-600">Click markers to view location details</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/40 border border-white/60">
                            <p className="text-sm font-semibold text-gray-900 mb-1">Street View</p>
                            <p className="text-xs text-gray-600">View street-level imagery and navigation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
