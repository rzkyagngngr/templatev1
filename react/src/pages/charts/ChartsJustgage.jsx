import React from 'react';
import { Gauge, Activity, Zap, Target, Clock, AlertCircle, TrendingUp, Wind, Droplet, Wifi, Battery, Thermometer, Volume2, Cpu, HardDrive, Globe } from 'lucide-react';

export default function ChartsJustgage() {
    const gaugeData = [
        { label: 'CPU Usage', value: 78, icon: Cpu, color: 'from-blue-400 to-blue-600' },
        { label: 'Memory Load', value: 65, icon: Activity, color: 'from-red-400 to-red-600' },
        { label: 'Disk Space', value: 92, icon: HardDrive, color: 'from-orange-400 to-orange-600' },
        { label: 'Performance', value: 88, icon: Zap, color: 'from-yellow-400 to-yellow-600' },
        { label: 'Network', value: 45, icon: Wifi, color: 'from-cyan-400 to-cyan-600' },
        { label: 'Latency', value: 32, icon: Clock, color: 'from-green-400 to-green-600' },
        { label: 'Error Rate', value: 12, icon: AlertCircle, color: 'from-pink-400 to-pink-600' },
        { label: 'Throughput', value: 76, icon: TrendingUp, color: 'from-indigo-400 to-indigo-600' },
        { label: 'Wind Speed', value: 58, icon: Wind, color: 'from-blue-300 to-blue-500' },
        { label: 'Humidity', value: 67, icon: Droplet, color: 'from-teal-400 to-teal-600' },
        { label: 'Battery Level', value: 84, icon: Battery, color: 'from-lime-400 to-lime-600' },
        { label: 'Temperature', value: 42, icon: Thermometer, color: 'from-red-300 to-orange-500' },
        { label: 'Volume Level', value: 72, icon: Volume2, color: 'from-purple-400 to-purple-600' },
        { label: 'Signal Strength', value: 95, icon: Wifi, color: 'from-green-400 to-green-600' },
        { label: 'Storage Usage', value: 56, icon: HardDrive, color: 'from-purple-300 to-purple-500' },
        { label: 'Traffic Load', value: 38, icon: TrendingUp, color: 'from-cyan-400 to-cyan-600' },
    ];

    // Circular Gauge Component
    const CircularGauge = ({ label, value, max = 100, unit = '%', color = 'from-blue-400 to-blue-600', icon: Icon }) => (
        <div className="flex flex-col items-center">
            <div className="relative w-32 h-32">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                    {/* Background circle */}
                    <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="8" />
                    {/* Progress circle */}
                    <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        strokeWidth="8"
                        strokeDasharray={`${(value / max) * 314} 314`}
                        className={`bg-gradient-to-r ${color}`}
                        stroke="url(#grad)"
                        style={{
                            transition: 'stroke-dasharray 0.3s ease',
                            filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.1))',
                        }}
                    />
                    <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: color.split(' ')[1], stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                </svg>
                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-gray-900">{value}</div>
                    <div className="text-xs text-gray-600">{unit}</div>
                </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
                {Icon && <Icon size={16} className="text-gray-600" />}
                <span className="text-sm font-semibold text-gray-900">{label}</span>
            </div>
        </div>
    );

    // Semi-Circular Gauge Component
    const SemiCircularGauge = ({ label, value, max = 100, color = 'from-emerald-400 to-emerald-600', icon: Icon }) => (
        <div className="flex flex-col items-center">
            <div className="relative w-32 h-20">
                <svg className="w-full h-full" viewBox="0 0 120 60">
                    {/* Background semi-circle */}
                    <path d="M 20 60 A 40 40 0 0 1 100 60" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="6" />
                    {/* Progress semi-circle */}
                    <path
                        d="M 20 60 A 40 40 0 0 1 100 60"
                        fill="none"
                        strokeWidth="6"
                        strokeDasharray={`${(value / max) * 125} 125`}
                        className={`bg-gradient-to-r ${color}`}
                        stroke="currentColor"
                        style={{
                            transition: 'stroke-dasharray 0.3s ease',
                            filter: 'drop-shadow(0 0 6px rgba(0,0,0,0.1))',
                        }}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-start pt-2">
                    <div className="text-lg font-bold text-gray-900">{value}%</div>
                </div>
            </div>
            <div className="mt-2 flex items-center gap-2">
                {Icon && <Icon size={16} className="text-gray-600" />}
                <span className="text-sm font-semibold text-gray-900">{label}</span>
            </div>
        </div>
    );

    // Multi-Ring Gauge Component
    const MultiRingGauge = ({ label, values, colors, icon: Icon }) => (
        <div className="flex flex-col items-center">
            <div className="relative w-32 h-32">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                    {values.map((val, idx) => {
                        const radius = 50 - idx * 10;
                        const circumference = 2 * Math.PI * radius;
                        const offset = circumference - (val.value / val.max) * circumference;
                        return (
                            <circle
                                key={idx}
                                cx="60"
                                cy="60"
                                r={radius}
                                fill="none"
                                stroke={val.color}
                                strokeWidth="6"
                                strokeDasharray={`${circumference - offset} ${offset}`}
                                opacity="0.7"
                                style={{ transition: 'stroke-dasharray 0.3s ease' }}
                            />
                        );
                    })}
                    <circle cx="60" cy="60" r="40" fill="white" opacity="0.8" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-xl font-bold text-gray-900">{values[0]?.value}</div>
                    </div>
                </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
                {Icon && <Icon size={16} className="text-gray-600" />}
                <span className="text-sm font-semibold text-gray-900">{label}</span>
            </div>
        </div>
    );

    // Linear Progress Gauge
    const LinearGauge = ({ label, value, max = 100, color = 'from-purple-400 to-purple-600', icon: Icon }) => (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {Icon && <Icon size={16} className="text-gray-600" />}
                    <span className="text-sm font-semibold text-gray-900">{label}</span>
                </div>
                <span className="text-sm font-bold text-gray-900">{value}%</span>
            </div>
            <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className={`h-full bg-gradient-to-r ${color} transition-all duration-300`}
                    style={{ width: `${(value / max) * 100}%` }}
                />
            </div>
        </div>
    );

    const semiGaugeData = [
        { label: 'Progress', value: 75, color: 'from-emerald-400 to-emerald-600', icon: Target },
        { label: 'Completion', value: 88, color: 'from-blue-400 to-blue-600', icon: Target },
        { label: 'Health', value: 92, color: 'from-green-400 to-green-600', icon: Activity },
        { label: 'Status', value: 65, color: 'from-amber-400 to-amber-600', icon: AlertCircle },
    ];

    const multiRingData = [
        {
            label: 'Multi-Metric',
            values: [
                { value: 75, max: 100, color: '#3B82F6' },
                { value: 60, max: 100, color: '#EC4899' },
                { value: 85, max: 100, color: '#10B981' },
            ],
            icon: Gauge,
        },
        {
            label: 'System Status',
            values: [
                { value: 88, max: 100, color: '#F59E0B' },
                { value: 72, max: 100, color: '#8B5CF6' },
                { value: 55, max: 100, color: '#EF4444' },
            ],
            icon: Zap,
        },
    ];

    const linearData = [
        { label: 'Download Speed', value: 85, color: 'from-blue-400 to-blue-600', icon: TrendingUp },
        { label: 'Upload Speed', value: 62, color: 'from-purple-400 to-purple-600', icon: TrendingUp },
        { label: 'Success Rate', value: 94, color: 'from-green-400 to-green-600', icon: Target },
        { label: 'Availability', value: 99, color: 'from-emerald-400 to-emerald-600', icon: Activity },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <div className="w-full space-y-8">
                <div>
                    <nav className="flex text-gray-600 text-sm mb-3">
                        <span className="hover:text-gray-900 cursor-pointer transition">Dashboard</span>
                        <span className="mx-2">/</span>
                        <span className="hover:text-gray-900 cursor-pointer transition">Charts</span>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-semibold">JustGage</span>
                    </nav>
                    <h1 className="text-4xl font-bold text-gray-900">JustGage - 25+ Gauge Types</h1>
                    <p className="text-gray-600 mt-2">Comprehensive collection of gauge and metric visualizations</p>
                </div>

                {/* Circular Gauges Section */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Circular Gauges (16 Variants)</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {gaugeData.map((gauge, idx) => (
                            <div key={idx} className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
                                <CircularGauge {...gauge} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Semi-Circular Gauges Section */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Semi-Circular Gauges (4 Variants)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {semiGaugeData.map((gauge, idx) => (
                            <div key={idx} className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
                                <SemiCircularGauge {...gauge} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Multi-Ring Gauges Section */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Multi-Ring Gauges (2 Variants)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {multiRingData.map((gauge, idx) => (
                            <div key={idx} className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
                                <MultiRingGauge {...gauge} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Linear Progress Gauges Section */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Linear Progress Gauges (4 Variants)</h2>
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-8 space-y-6">
                        {linearData.map((gauge, idx) => (
                            <LinearGauge key={idx} {...gauge} />
                        ))}
                    </div>
                </div>

                {/* Additional Gauge Variants */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Speedometer Gauges (3+ Variants)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { label: 'Speed 1', value: 65, max: 120 },
                            { label: 'Speed 2', value: 95, max: 120 },
                            { label: 'Speed 3', value: 45, max: 120 },
                        ].map((gauge, idx) => (
                            <div key={idx} className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
                                <div className="flex flex-col items-center">
                                    <div className="relative w-32 h-32">
                                        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                                            <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="10" />
                                            <circle
                                                cx="60"
                                                cy="60"
                                                r="48"
                                                fill="none"
                                                strokeWidth="10"
                                                stroke={gauge.value / gauge.max > 0.7 ? '#EF4444' : gauge.value / gauge.max > 0.5 ? '#F59E0B' : '#10B981'}
                                                strokeDasharray={`${(gauge.value / gauge.max) * 300} 300`}
                                                style={{ transition: 'stroke-dasharray 0.3s ease' }}
                                            />
                                            <circle cx="60" cy="60" r="8" fill="#1F2937" />
                                            <line x1="60" y1="60" x2="60" y2="30" stroke="#1F2937" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center">
                                        <div className="text-2xl font-bold text-gray-900">{gauge.value}</div>
                                        <div className="text-xs text-gray-600">km/h</div>
                                        <div className="text-sm font-semibold text-gray-900 mt-1">{gauge.label}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { label: 'Total Gauges', value: '25+', color: 'blue' },
                        { label: 'Gauge Types', value: '7+', color: 'green' },
                        { label: 'SVG Based', value: 'Yes', color: 'purple' },
                    ].map((stat, idx) => {
                        const colorClass = {
                            blue: 'from-blue-400/20 to-blue-600/5 border-blue-200/40 text-blue-600',
                            green: 'from-green-400/20 to-green-600/5 border-green-200/40 text-green-600',
                            purple: 'from-purple-400/20 to-purple-600/5 border-purple-200/40 text-purple-600',
                        }[stat.color];
                        return (
                            <div key={idx} className={`backdrop-blur-2xl bg-gradient-to-br ${colorClass} border border-white/60 rounded-3xl p-6 shadow-xl shadow-black/5`}>
                                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
