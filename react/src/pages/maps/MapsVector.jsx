import React, { useState } from 'react';
import { MapPin, Globe, TrendingUp, BarChart3 } from 'lucide-react';

export default function MapsVector() {
    const [selectedRegion, setSelectedRegion] = useState(null);

    const regions = [
        { name: 'North America', value: 45, color: '#3B82F6' },
        { name: 'Europe', value: 38, color: '#10B981' },
        { name: 'Asia Pacific', value: 62, color: '#F59E0B' },
        { name: 'South America', value: 28, color: '#EF4444' },
        { name: 'Africa', value: 15, color: '#8B5CF6' },
        { name: 'Middle East', value: 22, color: '#06B6D4' },
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
                        <span className="text-gray-900 font-semibold">Vector Maps</span>
                    </nav>
                    <h1 className="text-4xl font-bold text-gray-900">Vector Maps</h1>
                    <p className="text-gray-600 mt-2">Regional data visualization and choropleth mapping</p>
                </div>

                {/* Main Vector Map Visualization */}
                <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl overflow-hidden shadow-xl shadow-black/5 p-8">
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Globe className="text-blue-600" size={24} />
                            Global Regional Data
                        </h2>
                    </div>

                    {/* Vector Map Representation */}
                    <div className="w-full h-72 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-2xl border border-white/40 flex items-center justify-center relative overflow-hidden">
                        {/* Simplified World Map Layout */}
                        <svg viewBox="0 0 1000 600" className="w-full h-full opacity-50">
                            {/* Simplified continents */}
                            <rect x="50" y="100" width="200" height="150" fill="#3B82F6" opacity="0.3" rx="10" />
                            <text x="150" y="175" textAnchor="middle" fill="#1F2937" fontSize="14" fontWeight="bold">NA</text>
                            
                            <rect x="300" y="80" width="180" height="140" fill="#10B981" opacity="0.3" rx="10" />
                            <text x="390" y="155" textAnchor="middle" fill="#1F2937" fontSize="14" fontWeight="bold">EU</text>
                            
                            <rect x="550" y="100" width="250" height="160" fill="#F59E0B" opacity="0.3" rx="10" />
                            <text x="675" y="185" textAnchor="middle" fill="#1F2937" fontSize="14" fontWeight="bold">ASIA</text>
                            
                            <rect x="100" y="300" width="140" height="120" fill="#EF4444" opacity="0.3" rx="10" />
                            <text x="170" y="360" textAnchor="middle" fill="#1F2937" fontSize="14" fontWeight="bold">SA</text>
                            
                            <rect x="320" y="320" width="120" height="100" fill="#8B5CF6" opacity="0.3" rx="10" />
                            <text x="380" y="375" textAnchor="middle" fill="#1F2937" fontSize="14" fontWeight="bold">AF</text>
                            
                            <rect x="500" y="300" width="100" height="80" fill="#06B6D4" opacity="0.3" rx="10" />
                            <text x="550" y="345" textAnchor="middle" fill="#1F2937" fontSize="14" fontWeight="bold">ME</text>
                        </svg>

                        {/* Interactive overlays */}
                        <div className="absolute inset-0 flex items-center justify-center text-center">
                            <div className="z-10">
                                <MapPin className="w-12 h-12 text-gray-700 mx-auto mb-2 opacity-30" />
                                <p className="text-gray-600 text-sm">Hover over regions to view data</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Regional Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regions.map((region, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedRegion(region)}
                            className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-gray-900">{region.name}</h3>
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                                    style={{ backgroundColor: region.color }}
                                >
                                    {region.value}
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full h-2 bg-gray-200/50 rounded-full overflow-hidden mb-3">
                                <div
                                    className="h-full transition-all duration-300"
                                    style={{
                                        backgroundColor: region.color,
                                        width: `${(region.value / 62) * 100}%`,
                                    }}
                                ></div>
                            </div>

                            <p className="text-sm text-gray-600">
                                <span className="font-semibold text-gray-900">{region.value}%</span> of total
                            </p>
                        </div>
                    ))}
                </div>

                {/* Selected Region Details */}
                {selectedRegion && (
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div
                                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white"
                                style={{ backgroundColor: selectedRegion.color }}
                            >
                                <BarChart3 size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">{selectedRegion.name} Statistics</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 rounded-2xl bg-white/40 border border-white/60">
                                <p className="text-sm text-gray-600 mb-1">Market Share</p>
                                <p className="text-2xl font-bold text-gray-900">{selectedRegion.value}%</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/40 border border-white/60">
                                <p className="text-sm text-gray-600 mb-1">Growth Rate</p>
                                <p className="text-2xl font-bold text-green-600">+12%</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/40 border border-white/60">
                                <p className="text-sm text-gray-600 mb-1">Active Users</p>
                                <p className="text-2xl font-bold text-gray-900">234K</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
