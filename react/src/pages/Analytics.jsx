
import React, { useState } from 'react';
import { Line, Doughnut, Bar, PolarArea } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler,
    RadialLinearScale
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler,
    RadialLinearScale
);

// --- Sub-View: Reports (Strict adherence to analytics-reports.html) ---
const ReportsView = () => {
    // Live Visits Pie Chart Data
    const liveVisitsData = {
        labels: ['Organic', 'Direct', 'Campaign'],
        datasets: [{
            data: [55, 28, 17],
            backgroundColor: ['#0ea5e9', '#6b7280', '#f59e0b'],
            borderWidth: 0,
        }]
    };
    const liveVisitsOptions = {
        cutout: '70%',
        plugins: { legend: { display: false } }
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
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900">Analytics Reports</h1>
                <p className="text-slate-600 mt-2">Comprehensive analytics and performance metrics</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
                    <div className="p-6 border-b border-white/40">
                        <h2 className="text-xl font-bold text-slate-900">Visitors By Country</h2>
                    </div>
                    <div className="p-6 relative">
                        <img src="/assets/images/small/svg-map.svg" alt="" className="w-full rounded-2xl" />
                        <div className="absolute top-16 left-10 p-3 backdrop-blur-xl bg-white/80 shadow-lg rounded-2xl border border-white/60">
                            <span className="text-sm font-semibold text-slate-900">India</span>
                            <span className="text-xs text-slate-600 ml-2">2,201</span>
                        </div>
                        <div className="absolute top-16 right-10 p-3 backdrop-blur-xl bg-white/80 shadow-lg rounded-2xl border border-white/60">
                            <span className="text-sm font-semibold text-slate-900">USA</span>
                            <span className="text-xs text-slate-600 ml-2">3,201</span>
                        </div>
                    </div>
                </div>
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
                    <div className="p-6 border-b border-white/40">
                        <h2 className="text-xl font-bold text-slate-900">Live Visits & Traffic Sources</h2>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="h-48 flex items-center justify-center">
                                <Doughnut data={liveVisitsData} options={liveVisitsOptions} />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-4xl font-bold text-slate-900 mb-2">80</h3>
                                <p className="text-sm font-medium text-slate-600 mb-4">Right Now</p>
                                <div className="space-y-3">
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-xs font-semibold text-slate-700">Organic</span>
                                            <span className="text-xs font-bold text-slate-900">55%</span>
                                        </div>
                                        <div className="h-2 bg-slate-200/50 rounded-full overflow-hidden">
                                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full" style={{width: '55%'}}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-xs font-semibold text-slate-700">Direct</span>
                                            <span className="text-xs font-bold text-slate-900">28%</span>
                                        </div>
                                        <div className="h-2 bg-slate-200/50 rounded-full overflow-hidden">
                                            <div className="bg-gradient-to-r from-slate-500 to-slate-600 h-full rounded-full" style={{width: '28%'}}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-xs font-semibold text-slate-700">Campaign</span>
                                            <span className="text-xs font-bold text-slate-900">17%</span>
                                        </div>
                                        <div className="h-2 bg-slate-200/50 rounded-full overflow-hidden">
                                            <div className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full" style={{width: '17%'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Sub-View: Customers (iOS 26 Liquid Glass Design - Enhanced Complex Dashboard) ---
const CustomersView = () => {
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } },
        elements: { point: { radius: 0 } }
    };

    const growthData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{ data: [10, 25, 30, 50, 40, 60], borderColor: '#0ea5e9', borderWidth: 3, fill: true, backgroundColor: 'rgba(14, 165, 233, 0.1)', tension: 0.4 }]
    };

    const segmentData = {
        labels: ['Premium', 'Standard', 'Basic', 'Trial'],
        datasets: [{
            data: [35, 30, 25, 10],
            backgroundColor: ['#8b5cf6', '#3b82f6', '#10b981', '#f59e0b'],
            borderWidth: 0
        }]
    };

    const satisfactionData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            data: [4.2, 4.5, 4.3, 4.7, 4.6, 4.8, 4.9],
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }]
    };

    const revenueData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            data: [45000, 52000, 48000, 65000, 71000, 68000],
            backgroundColor: ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4'],
            borderRadius: 8,
            borderWidth: 0
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
                <span className="text-slate-900 font-semibold">Customers</span>
            </nav>

            {/* Header with Actions */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900">Customer Analytics</h1>
                    <p className="text-slate-600 mt-2">Comprehensive customer insights and metrics</p>
                </div>
                <div className="flex gap-3">
                    <button className="backdrop-blur-xl bg-white/60 hover:bg-white/80 px-5 py-2.5 rounded-2xl text-sm font-semibold text-slate-700 border border-white/60 shadow-lg transition-all">
                        Export Data
                    </button>
                    <button className="backdrop-blur-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 px-5 py-2.5 rounded-2xl text-sm font-bold text-white shadow-2xl shadow-blue-500/40 transition-all">
                        + Add Customer
                    </button>
                </div>
            </div>

            {/* Key Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="backdrop-blur-2xl bg-gradient-to-br from-blue-500/90 to-blue-600/90 rounded-3xl p-6 text-white border border-blue-400/30 shadow-2xl shadow-blue-400/40 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-xl">
                            <i className="mdi mdi-account-group text-2xl"></i>
                        </div>
                        <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">+12.5%</span>
                    </div>
                    <h3 className="text-3xl font-black mb-1">24,583</h3>
                    <p className="text-sm text-blue-100 font-medium">Total Customers</p>
                </div>

                <div className="backdrop-blur-2xl bg-gradient-to-br from-purple-500/90 to-purple-600/90 rounded-3xl p-6 text-white border border-purple-400/30 shadow-2xl shadow-purple-400/40 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-xl">
                            <i className="mdi mdi-account-plus text-2xl"></i>
                        </div>
                        <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">+8.2%</span>
                    </div>
                    <h3 className="text-3xl font-black mb-1">1,245</h3>
                    <p className="text-sm text-purple-100 font-medium">New This Month</p>
                </div>

                <div className="backdrop-blur-2xl bg-gradient-to-br from-emerald-500/90 to-emerald-600/90 rounded-3xl p-6 text-white border border-emerald-400/30 shadow-2xl shadow-emerald-400/40 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-xl">
                            <i className="mdi mdi-cash-multiple text-2xl"></i>
                        </div>
                        <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">+15.8%</span>
                    </div>
                    <h3 className="text-3xl font-black mb-1">$3.2M</h3>
                    <p className="text-sm text-emerald-100 font-medium">Total Revenue</p>
                </div>

                <div className="backdrop-blur-2xl bg-gradient-to-br from-amber-500/90 to-amber-600/90 rounded-3xl p-6 text-white border border-amber-400/30 shadow-2xl shadow-amber-400/40 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-xl">
                            <i className="mdi mdi-star text-2xl"></i>
                        </div>
                        <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">+0.3</span>
                    </div>
                    <h3 className="text-3xl font-black mb-1">4.8/5</h3>
                    <p className="text-sm text-amber-100 font-medium">Avg Satisfaction</p>
                </div>
            </div>

            {/* Main Growth Chart */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40 mb-6">
                <div className="p-6 border-b border-white/40 flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900">Customer Growth Trend</h2>
                        <p className="text-sm text-slate-600 mt-1">Monthly acquisition rate over 6 months</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 text-xs font-bold bg-blue-500/10 text-blue-600 rounded-xl hover:bg-blue-500/20 transition-all">6M</button>
                        <button className="px-4 py-2 text-xs font-bold text-slate-600 rounded-xl hover:bg-slate-100 transition-all">1Y</button>
                        <button className="px-4 py-2 text-xs font-bold text-slate-600 rounded-xl hover:bg-slate-100 transition-all">All</button>
                    </div>
                </div>
                <div className="p-6">
                    <div className="h-72">
                        <Line data={growthData} options={{ 
                            responsive: true, 
                            maintainAspectRatio: false,
                            plugins: { legend: { display: false } },
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
                        }} />
                    </div>
                </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* Customer Segments */}
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-purple-200/40">
                    <div className="p-6 border-b border-white/40">
                        <h2 className="text-lg font-bold text-slate-900">Customer Segments</h2>
                        <p className="text-xs text-slate-600 mt-1">Distribution by tier</p>
                    </div>
                    <div className="p-6">
                        <div className="h-56 flex items-center justify-center mb-4">
                            <Doughnut data={segmentData} options={{ cutout: '65%', plugins: { legend: { display: false } } }} />
                        </div>
                        <div className="space-y-2">
                            {[
                                { label: 'Premium', color: 'bg-purple-500', value: '35%' },
                                { label: 'Standard', color: 'bg-blue-500', value: '30%' },
                                { label: 'Basic', color: 'bg-emerald-500', value: '25%' },
                                { label: 'Trial', color: 'bg-amber-500', value: '10%' }
                            ].map((seg, i) => (
                                <div key={i} className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className={`w-3 h-3 rounded-full ${seg.color}`}></span>
                                        <span className="font-semibold text-slate-700">{seg.label}</span>
                                    </div>
                                    <span className="font-bold text-slate-900">{seg.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Activities & Revenue */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Monthly Revenue */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-emerald-200/40">
                        <div className="p-6 border-b border-white/40">
                            <h2 className="text-lg font-bold text-slate-900">Monthly Revenue</h2>
                            <p className="text-xs text-slate-600 mt-1">Customer generated revenue</p>
                        </div>
                        <div className="p-6">
                            <div className="h-56">
                                <Bar data={revenueData} options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: { legend: { display: false } },
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
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Customers & Recent Activities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Top Customers */}
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
                    <div className="p-6 border-b border-white/40">
                        <h2 className="text-lg font-bold text-slate-900">Top Customers</h2>
                        <p className="text-xs text-slate-600 mt-1">Highest revenue contributors</p>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            {[
                                { name: 'Acme Corporation', revenue: '$125,450', growth: '+24%', avatar: 'https://picsum.photos/seed/acme/80/80', badge: 'Premium' },
                                { name: 'TechStart Inc', revenue: '$98,200', growth: '+18%', avatar: 'https://picsum.photos/seed/tech/80/80', badge: 'Premium' },
                                { name: 'Global Dynamics', revenue: '$87,900', growth: '+15%', avatar: 'https://picsum.photos/seed/global/80/80', badge: 'Standard' },
                                { name: 'Digital Solutions', revenue: '$76,300', growth: '+12%', avatar: 'https://picsum.photos/seed/digital/80/80', badge: 'Standard' },
                                { name: 'Innovation Labs', revenue: '$65,800', growth: '+9%', avatar: 'https://picsum.photos/seed/innov/80/80', badge: 'Basic' }
                            ].map((customer, i) => (
                                <div key={i} className="flex items-center justify-between p-4 backdrop-blur-xl bg-white/40 rounded-2xl border border-white/60 hover:bg-white/60 transition-all cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <img src={customer.avatar} alt="" className="w-12 h-12 rounded-xl border-2 border-white shadow-lg" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">{customer.name}</h4>
                                            <p className="text-xs text-slate-600 mt-0.5">
                                                <span className={`px-2 py-0.5 rounded-full text-[0.65rem] font-bold ${
                                                    customer.badge === 'Premium' ? 'bg-purple-100 text-purple-700' :
                                                    customer.badge === 'Standard' ? 'bg-blue-100 text-blue-700' :
                                                    'bg-emerald-100 text-emerald-700'
                                                }`}>{customer.badge}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-slate-900">{customer.revenue}</p>
                                        <p className="text-xs text-emerald-600 font-semibold">{customer.growth}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Activities */}
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-indigo-200/40">
                    <div className="p-6 border-b border-white/40">
                        <h2 className="text-lg font-bold text-slate-900">Recent Activities</h2>
                        <p className="text-xs text-slate-600 mt-1">Latest customer interactions</p>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            {[
                                { icon: 'account-plus', color: 'from-blue-400 to-blue-600', title: 'New customer registered', desc: 'Sarah Johnson signed up for Premium', time: '5 min ago' },
                                { icon: 'currency-usd', color: 'from-emerald-400 to-emerald-600', title: 'Payment received', desc: 'Acme Corp paid $12,450', time: '12 min ago' },
                                { icon: 'email-outline', color: 'from-purple-400 to-purple-600', title: 'Support ticket opened', desc: 'TechStart Inc needs assistance', time: '28 min ago' },
                                { icon: 'account-check', color: 'from-amber-400 to-amber-600', title: 'Subscription renewed', desc: 'Global Dynamics extended plan', time: '1 hour ago' },
                                { icon: 'star', color: 'from-pink-400 to-pink-600', title: 'Review submitted', desc: 'Digital Solutions left 5-star review', time: '2 hours ago' },
                                { icon: 'chart-line', color: 'from-cyan-400 to-cyan-600', title: 'Usage milestone', desc: 'Innovation Labs hit 10K transactions', time: '3 hours ago' }
                            ].map((activity, i) => (
                                <div key={i} className="flex items-start gap-4 p-3 backdrop-blur-xl bg-white/30 rounded-2xl border border-white/40 hover:bg-white/50 transition-all cursor-pointer">
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                        <i className={`mdi mdi-${activity.icon} text-white text-lg`}></i>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h5 className="text-sm font-bold text-slate-900">{activity.title}</h5>
                                        <p className="text-xs text-slate-600 mt-0.5">{activity.desc}</p>
                                        <p className="text-[0.65rem] text-slate-500 font-semibold mt-1">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Satisfaction Trend */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-emerald-200/40 mb-6">
                <div className="p-6 border-b border-white/40">
                    <h2 className="text-lg font-bold text-slate-900">Customer Satisfaction Trend</h2>
                    <p className="text-xs text-slate-600 mt-1">Weekly average ratings</p>
                </div>
                <div className="p-6">
                    <div className="h-56">
                        <Line data={satisfactionData} options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: { legend: { display: false } },
                            scales: {
                                y: { 
                                    grid: { color: 'rgba(241, 245, 249, 0.5)' },
                                    min: 0,
                                    max: 5,
                                    ticks: { color: '#64748b', font: { size: 11, weight: '600' } }
                                },
                                x: { 
                                    grid: { display: false },
                                    ticks: { color: '#64748b', font: { size: 11, weight: '600' } }
                                }
                            }
                        }} />
                    </div>
                </div>
            </div>

            {/* Customer Details Table */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
                <div className="p-6 border-b border-white/40 flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-bold text-slate-900">All Customers</h2>
                        <p className="text-xs text-slate-600 mt-1">Complete customer directory</p>
                    </div>
                    <div className="flex gap-2">
                        <input type="search" placeholder="Search customers..." className="px-4 py-2 text-sm border border-white/60 rounded-xl bg-white/50 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-blue-400/50" />
                    </div>
                </div>
                <div className="p-6">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="backdrop-blur-xl bg-white/30 border-b border-white/40">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Customer</th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Status</th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Location</th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Join Date</th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">LTV</th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/30">
                                {[
                                    { name: 'Unity Pugh', status: 'active', city: 'Curicó', date: '2005/02/11', ltv: '$24,350' },
                                    { name: 'Theodore Duran', status: 'active', city: 'Dhanbad', date: '1999/04/07', ltv: '$18,970' },
                                    { name: 'Kylie Bishop', status: 'inactive', city: 'Norman', date: '2005/09/08', ltv: '$12,630' },
                                    { name: 'Willow Gilliam', status: 'active', city: 'Amqui', date: '2009/11/29', ltv: '$9,300' },
                                    { name: 'Blossom Dickerson', status: 'trial', city: 'Kempten', date: '2006/11/09', ltv: '$5,170' },
                                    { name: 'Elliott Snyder', status: 'active', city: 'Enines', date: '2006/03/08', ltv: '$15,570' },
                                    { name: 'Castor Pugh', status: 'active', city: 'Neath', date: '2014/12/23', ltv: '$32,930' },
                                    { name: 'Pearl Carlson', status: 'active', city: 'Cobourg', date: '2014/08/31', ltv: '$21,100' }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-white/20 transition-all">
                                        <td className="px-4 py-4 text-sm text-slate-700">
                                            <div className="flex items-center gap-3">
                                                <img src={`https://picsum.photos/seed/user${i}/64/64`} alt="" className="w-10 h-10 rounded-xl border-2 border-white shadow-md" />
                                                <div>
                                                    <p className="font-bold text-slate-900">{row.name}</p>
                                                    <p className="text-xs text-slate-500">ID: #{9000 + i}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-sm">
                                            <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                                                row.status === 'active' ? 'bg-emerald-100 text-emerald-700' :
                                                row.status === 'inactive' ? 'bg-slate-100 text-slate-700' :
                                                'bg-amber-100 text-amber-700'
                                            }`}>
                                                {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 text-sm font-semibold text-slate-700">{row.city}</td>
                                        <td className="px-4 py-4 text-sm font-semibold text-slate-700">{row.date}</td>
                                        <td className="px-4 py-4 text-sm font-bold text-slate-900">{row.ltv}</td>
                                        <td className="px-4 py-4 text-sm">
                                            <div className="flex gap-2">
                                                <button className="p-2 hover:bg-blue-100 rounded-lg transition-all" title="View">
                                                    <i className="mdi mdi-eye text-blue-600"></i>
                                                </button>
                                                <button className="p-2 hover:bg-emerald-100 rounded-lg transition-all" title="Edit">
                                                    <i className="mdi mdi-pencil text-emerald-600"></i>
                                                </button>
                                                <button className="p-2 hover:bg-red-100 rounded-lg transition-all" title="Delete">
                                                    <i className="mdi mdi-delete text-red-600"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Analytics({ view = 'reports' }) {
    return (
        <>
            {view === 'reports' && <ReportsView />}
            {view === 'customers' && <CustomersView />}
        </>
    );
}
