import React, { useEffect, useRef } from 'react';
import { MapPin, Compass, ZoomIn, ZoomOut } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapsLeaflet() {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (!mapContainer.current) return;

        // Initialize map
        map.current = L.map(mapContainer.current).setView([40, -95], 4);

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19,
        }).addTo(map.current);

        // Add markers
        const locations = [
            { lat: 40.7128, lng: -74.0060, title: 'New York', city: 'New York, USA' },
            { lat: 34.0522, lng: -118.2437, title: 'Los Angeles', city: 'Los Angeles, USA' },
            { lat: 41.8781, lng: -87.6298, title: 'Chicago', city: 'Chicago, USA' },
            { lat: 29.7604, lng: -95.3698, title: 'Houston', city: 'Houston, USA' },
        ];

        locations.forEach(location => {
            L.marker([location.lat, location.lng])
                .bindPopup(`<strong>${location.title}</strong><br>${location.city}`)
                .addTo(map.current);
        });

        return () => {
            if (map.current) map.current.remove();
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <div className="w-full space-y-6">
                <div>
                    <nav className="flex text-gray-600 text-sm mb-3">
                        <span className="hover:text-gray-900 cursor-pointer transition">Glacia</span>
                        <span className="mx-2">/</span>
                        <span className="hover:text-gray-900 cursor-pointer transition">Maps</span>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-semibold">Leaflet Maps</span>
                    </nav>
                    <h1 className="text-4xl font-bold text-gray-900">Leaflet Maps</h1>
                    <p className="text-gray-600 mt-2">Interactive map with markers and zoom controls</p>
                </div>

                <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl overflow-hidden shadow-xl shadow-black/5">
                    <div ref={mapContainer} className="w-full h-96 rounded-3xl" />
                    
                    {/* Map Info */}
                    <div className="p-6 border-t border-white/40 bg-white/20">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-2xl bg-blue-100/60 text-blue-600">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-600">Markers</p>
                                    <p className="font-semibold text-gray-900">4 Locations</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-2xl bg-green-100/60 text-green-600">
                                    <Compass size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-600">Zoom Level</p>
                                    <p className="font-semibold text-gray-900">Level 4</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-2xl bg-purple-100/60 text-purple-600">
                                    <ZoomIn size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-600">Provider</p>
                                    <p className="font-semibold text-gray-900">OpenStreetMap</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-2xl bg-orange-100/60 text-orange-600">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-600">Type</p>
                                    <p className="font-semibold text-gray-900">Interactive</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
