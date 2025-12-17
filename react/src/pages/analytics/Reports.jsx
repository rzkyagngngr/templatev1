import React from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

export default function AnalyticsReports() {
    // Traffic Sources Data
    const trafficData = {
        labels: ['Organic', 'Direct', 'Referral', 'Social', 'Email', 'Paid'],
        datasets: [{
            data: [35, 25, 18, 12, 7, 3],
            backgroundColor: ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4'],
            borderWidth: 0
        }]
    };

    // Page Views Trend
    const pageViewsData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Page Views',
            data: [12400, 15200, 13800, 16500, 18200, 14300, 11800],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }]
    };

    // Device Usage
    const deviceData = {
        labels: ['Desktop', 'Mobile', 'Tablet'],
        datasets: [{
            data: [52, 38, 10],
            backgroundColor: ['#3b82f6', '#8b5cf6', '#ec4899'],
            borderWidth: 0
        }]
    };

    // Conversion Rate
    const conversionData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Conversion Rate',
            data: [2.3, 2.8, 3.1, 2.9, 3.5, 3.8],
            backgroundColor: ['#10b981', '#10b981', '#f59e0b', '#10b981', '#10b981', '#10b981'],
            borderRadius: 8
        }]
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            {/* Breadcrumb */}
            <nav className="text-sm text-slate-600 backdrop-blur-xl bg-white/40 px-4 py-2 rounded-2xl border border-white/60 shadow-lg shadow-blue-100/50 mb-6 inline-flex">
                <span className="hover:text-slate-900 cursor-pointer">Glacia</span>
                <span className="mx-2">/</span>
                <span className="hover:text-slate-900 cursor-pointer">Analytics</span>
                <span className="mx-2">/</span>
                <span className="text-slate-900 font-semibold">Reports</span>
            </nav>

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900">Analytics Reports</h1>
                    <p className="text-slate-600 mt-2">Comprehensive website performance analytics</p>
                </div>
                <div className="flex gap-3">
                    <button className="backdrop-blur-xl bg-white/60 hover:bg-white/80 px-5 py-2.5 rounded-2xl text-sm font-semibold text-slate-700 border border-white/60 shadow-lg transition-all">
                        <i className="mdi mdi-calendar mr-2"></i>Last 30 Days
                    </button>
                    <button className="backdrop-blur-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 px-5 py-2.5 rounded-2xl text-sm font-bold text-white shadow-2xl shadow-blue-500/40 transition-all">
                        <i className="mdi mdi-download mr-2"></i>Export Report
                    </button>
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {[
                    { icon: 'eye', color: 'from-blue-500 to-blue-600', value: '892.5K', label: 'Total Page Views', change: '+18.2%', up: true },
                    { icon: 'account-group', color: 'from-purple-500 to-purple-600', value: '124.8K', label: 'Unique Visitors', change: '+12.5%', up: true },
                    { icon: 'clock-outline', color: 'from-amber-500 to-amber-600', value: '4m 32s', label: 'Avg Session Time', change: '+8.3%', up: true },
                    { icon: 'percent', color: 'from-emerald-500 to-emerald-600', value: '42.8%', label: 'Bounce Rate', change: '-5.2%', up: false }
                ].map((metric, i) => (
                    <div key={i} className={`backdrop-blur-2xl bg-gradient-to-br ${metric.color}/90 rounded-3xl p-6 text-white border border-white/30 shadow-2xl hover:scale-105 transition-transform duration-300`}>
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-xl">
                                <i className={`mdi mdi-${metric.icon} text-2xl`}></i>
                            </div>
                            <span className={`text-xs font-bold px-3 py-1 rounded-full ${metric.up ? 'bg-white/20' : 'bg-black/20'}`}>
                                {metric.change}
                            </span>
                        </div>
                        <h3 className="text-3xl font-black mb-1">{metric.value}</h3>
                        <p className="text-sm font-medium opacity-90">{metric.label}</p>
                    </div>
                ))}
            </div>

            {/* Page Views Chart */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40 mb-6">
                <div className="p-6 border-b border-white/40">
                    <h2 className="text-xl font-bold text-slate-900">Page Views Trend</h2>
                    <p className="text-sm text-slate-600 mt-1">Weekly traffic overview</p>
                </div>
                <div className="p-6">
                    <div className="h-80">
                        <Line 
                            data={pageViewsData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: { 
                                    legend: { display: false },
                                    tooltip: { backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: 12, cornerRadius: 8 }
                                },
                                scales: {
                                    y: { 
                                        grid: { color: 'rgba(241, 245, 249, 0.5)' },
                                        ticks: { color: '#64748b', font: { size: 11, weight: '600' } }
                                    },
                                    x: { 
                                        grid: { display: false },
                                        ticks: { color: '#64748b', font: { size: 11, weight: '600' } }
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Traffic Sources & Device Usage */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Traffic Sources */}
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-purple-200/40">
                    <div className="p-6 border-b border-white/40">
                        <h2 className="text-lg font-bold text-slate-900">Traffic Sources</h2>
                        <p className="text-xs text-slate-600 mt-1">Where your visitors come from</p>
                    </div>
                    <div className="p-6">
                        <div className="h-64 flex items-center justify-center mb-4">
                            <Doughnut 
                                data={trafficData}
                                options={{ 
                                    cutout: '60%',
                                    plugins: { 
                                        legend: { display: false },
                                        tooltip: { backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: 12, cornerRadius: 8 }
                                    }
                                }}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { label: 'Organic', color: 'bg-blue-500', value: '35%' },
                                { label: 'Direct', color: 'bg-purple-500', value: '25%' },
                                { label: 'Referral', color: 'bg-pink-500', value: '18%' },
                                { label: 'Social', color: 'bg-amber-500', value: '12%' },
                                { label: 'Email', color: 'bg-emerald-500', value: '7%' },
                                { label: 'Paid', color: 'bg-cyan-500', value: '3%' }
                            ].map((source, i) => (
                                <div key={i} className="flex items-center justify-between text-sm p-2 backdrop-blur-xl bg-white/40 rounded-xl">
                                    <div className="flex items-center gap-2">
                                        <span className={`w-3 h-3 rounded-full ${source.color}`}></span>
                                        <span className="font-semibold text-slate-700">{source.label}</span>
                                    </div>
                                    <span className="font-bold text-slate-900">{source.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Device Usage */}
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
                    <div className="p-6 border-b border-white/40">
                        <h2 className="text-lg font-bold text-slate-900">Device Usage</h2>
                        <p className="text-xs text-slate-600 mt-1">Visitor device breakdown</p>
                    </div>
                    <div className="p-6">
                        <div className="h-64 flex items-center justify-center mb-4">
                            <Doughnut 
                                data={deviceData}
                                options={{ 
                                    cutout: '60%',
                                    plugins: { 
                                        legend: { display: false },
                                        tooltip: { backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: 12, cornerRadius: 8 }
                                    }
                                }}
                            />
                        </div>
                        <div className="space-y-3">
                            {[
                                { label: 'Desktop', icon: 'monitor', color: 'bg-blue-500', value: '52%', users: '64.8K' },
                                { label: 'Mobile', icon: 'cellphone', color: 'bg-purple-500', value: '38%', users: '47.4K' },
                                { label: 'Tablet', icon: 'tablet', color: 'bg-pink-500', value: '10%', users: '12.5K' }
                            ].map((device, i) => (
                                <div key={i} className="p-4 backdrop-blur-xl bg-white/40 rounded-2xl border border-white/60">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 ${device.color} rounded-xl`}>
                                                <i className={`mdi mdi-${device.icon} text-white text-lg`}></i>
                                            </div>
                                            <span className="font-bold text-slate-900">{device.label}</span>
                                        </div>
                                        <span className="text-xl font-black text-slate-900">{device.value}</span>
                                    </div>
                                    <p className="text-xs text-slate-600 ml-12">{device.users} users</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Conversion Rate & Top Pages */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Conversion Rate */}
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-emerald-200/40">
                    <div className="p-6 border-b border-white/40">
                        <h2 className="text-lg font-bold text-slate-900">Conversion Rate</h2>
                        <p className="text-xs text-slate-600 mt-1">Monthly conversion performance</p>
                    </div>
                    <div className="p-6">
                        <div className="h-64">
                            <Bar 
                                data={conversionData}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: { 
                                        legend: { display: false },
                                        tooltip: { backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: 12, cornerRadius: 8 }
                                    },
                                    scales: {
                                        y: { 
                                            grid: { color: 'rgba(241, 245, 249, 0.5)' },
                                            ticks: { color: '#64748b', font: { size: 11, weight: '600' } }
                                        },
                                        x: { 
                                            grid: { display: false },
                                            ticks: { color: '#64748b', font: { size: 11, weight: '600' } }
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Top Pages */}
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-indigo-200/40">
                    <div className="p-6 border-b border-white/40">
                        <h2 className="text-lg font-bold text-slate-900">Top Performing Pages</h2>
                        <p className="text-xs text-slate-600 mt-1">Most visited pages this week</p>
                    </div>
                    <div className="p-6">
                        <div className="space-y-3">
                            {[
                                { page: '/dashboard', views: '45.2K', time: '5m 32s', bounce: '32%' },
                                { page: '/products', views: '38.7K', time: '4m 18s', bounce: '38%' },
                                { page: '/pricing', views: '28.4K', time: '3m 45s', bounce: '42%' },
                                { page: '/blog', views: '22.8K', time: '6m 12s', bounce: '28%' },
                                { page: '/contact', views: '18.5K', time: '2m 35s', bounce: '52%' },
                                { page: '/about', views: '15.2K', time: '3m 22s', bounce: '45%' }
                            ].map((page, i) => (
                                <div key={i} className="p-4 backdrop-blur-xl bg-white/40 rounded-2xl border border-white/60 hover:bg-white/60 transition-all cursor-pointer">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center text-white font-black">
                                                {i + 1}
                                            </div>
                                            <span className="font-bold text-slate-900">{page.page}</span>
                                        </div>
                                        <span className="text-lg font-black text-slate-900">{page.views}</span>
                                    </div>
                                    <div className="flex gap-4 ml-13 text-xs">
                                        <span className="text-slate-600">
                                            <i className="mdi mdi-clock-outline mr-1"></i>
                                            {page.time}
                                        </span>
                                        <span className="text-slate-600">
                                            <i className="mdi mdi-arrow-u-left-top mr-1"></i>
                                            Bounce: {page.bounce}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Geographic Distribution */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
                <div className="p-6 border-b border-white/40">
                    <h2 className="text-lg font-bold text-slate-900">Geographic Distribution</h2>
                    <p className="text-xs text-slate-600 mt-1">Visitor location breakdown</p>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { country: 'United States', flag: '🇺🇸', users: '42.5K', percentage: '34%' },
                            { country: 'United Kingdom', flag: '🇬🇧', users: '28.3K', percentage: '23%' },
                            { country: 'Germany', flag: '🇩🇪', users: '18.7K', percentage: '15%' },
                            { country: 'Canada', flag: '🇨🇦', users: '15.2K', percentage: '12%' },
                            { country: 'Australia', flag: '🇦🇺', users: '10.8K', percentage: '9%' },
                            { country: 'France', flag: '🇫🇷', users: '6.3K', percentage: '5%' },
                            { country: 'Japan', flag: '🇯🇵', users: '1.5K', percentage: '1%' },
                            { country: 'Others', flag: '🌍', users: '1.5K', percentage: '1%' }
                        ].map((country, i) => (
                            <div key={i} className="p-4 backdrop-blur-xl bg-white/40 rounded-2xl border border-white/60 hover:bg-white/60 transition-all">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-3xl">{country.flag}</span>
                                    <div>
                                        <p className="font-bold text-slate-900 text-sm">{country.country}</p>
                                        <p className="text-xs text-slate-600">{country.users} users</p>
                                    </div>
                                </div>
                                <div className="w-full h-2 bg-slate-200/70 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000"
                                        style={{ width: country.percentage }}
                                    ></div>
                                </div>
                                <p className="text-xs font-bold text-slate-900 mt-2">{country.percentage}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
