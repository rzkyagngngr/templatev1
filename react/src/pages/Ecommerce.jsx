import React, { useState } from 'react';
import {
    BarChart3, TrendingUp, ShoppingCart, DollarSign, Users,
    Package, Star, Eye, Download, Plus
} from 'lucide-react';

export default function EcommerceDashboard() {
    const [timeframe, setTimeframe] = useState('month');

    const stats = [
        { label: 'Total Revenue', value: '$1,850.00', icon: DollarSign, color: 'text-green-600', bgColor: 'bg-green-500/20' },
        { label: 'Total Orders', value: '1,250', icon: ShoppingCart, color: 'text-blue-600', bgColor: 'bg-blue-500/20' },
        { label: 'New Customers', value: '180', icon: Users, color: 'text-purple-600', bgColor: 'bg-purple-500/20' },
        { label: 'Product Views', value: '45.2K', icon: Eye, color: 'text-orange-600', bgColor: 'bg-orange-500/20' },
    ];

    const topProducts = [
        { id: 1, name: 'Wireless Headphones', price: '$89.99', sales: 1240, rating: 4.8, stock: 125 },
        { id: 2, name: 'USB-C Cable', price: '$12.99', sales: 980, rating: 4.5, stock: 450 },
        { id: 3, name: 'Phone Case', price: '$24.99', sales: 756, rating: 4.6, stock: 320 },
        { id: 4, name: 'Screen Protector', price: '$9.99', sales: 620, rating: 4.7, stock: 890 },
        { id: 5, name: 'Portable Charger', price: '$45.99', sales: 540, rating: 4.4, stock: 210 },
    ];

    const recentOrders = [
        { id: '#ORD001', customer: 'John Doe', amount: '$245.50', status: 'Completed', date: '2024-12-15' },
        { id: '#ORD002', customer: 'Jane Smith', amount: '$189.99', status: 'Processing', date: '2024-12-15' },
        { id: '#ORD003', customer: 'Mike Johnson', amount: '$567.80', status: 'Pending', date: '2024-12-14' },
        { id: '#ORD004', customer: 'Sarah Williams', amount: '$123.45', status: 'Completed', date: '2024-12-14' },
    ];

    const getStatusColor = (status) => {
        switch(status) {
            case 'Completed': return 'bg-emerald-500/20 text-emerald-700';
            case 'Processing': return 'bg-blue-500/20 text-blue-700';
            case 'Pending': return 'bg-yellow-500/20 text-yellow-700';
            default: return 'bg-slate-500/20 text-slate-700';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-slate-900">E-Commerce Dashboard</h1>
                    <p className="text-slate-600 mt-2">Monitor your online store performance and sales metrics</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div key={idx} className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 border border-white/80 rounded-3xl p-6 hover:border-white/90 hover:shadow-2xl hover:shadow-blue-200/40 transition-all shadow-xl shadow-blue-100/40">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-slate-600 text-sm font-semibold mb-2">{stat.label}</p>
                                        <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
                                    </div>
                                    <div className={`${stat.bgColor} p-3 rounded-xl`}>
                                        <Icon className={`w-6 h-6 ${stat.color}`} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Revenue Chart & Top Stats */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Revenue Chart Placeholder */}
                    <div className="lg:col-span-2 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/40 border border-white/80 rounded-3xl p-7 shadow-2xl shadow-blue-200/40">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-slate-900 font-bold text-lg">Revenue Status</h3>
                                <p className="text-slate-500 text-sm">Last 7 days performance</p>
                            </div>
                            <select 
                                value={timeframe} 
                                onChange={(e) => setTimeframe(e.target.value)}
                                className="px-3 py-2 bg-white/50 border border-white/60 rounded-lg text-slate-700 text-sm"
                            >
                                <option value="week">This Week</option>
                                <option value="month">This Month</option>
                                <option value="year">This Year</option>
                            </select>
                        </div>
                        <div className="h-48 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-white/50">
                            <p className="text-slate-500">Revenue chart placeholder</p>
                        </div>
                    </div>

                    {/* Today's Stats */}
                    <div className="space-y-4">
                        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 border border-white/80 rounded-3xl p-6 hover:border-white/90 hover:shadow-2xl hover:shadow-blue-200/40 transition-all shadow-xl shadow-blue-100/40">
                            <p className="text-slate-600 text-sm font-semibold mb-2">Today's Revenue</p>
                            <h3 className="text-3xl font-bold text-slate-900">$24,500</h3>
                            <p className="text-emerald-600 text-xs font-semibold mt-2">↑ 12.5% from yesterday</p>
                        </div>
                        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 border border-white/80 rounded-3xl p-6 hover:border-white/90 hover:shadow-2xl hover:shadow-blue-200/40 transition-all shadow-xl shadow-blue-100/40">
                            <p className="text-slate-600 text-sm font-semibold mb-2">Today's Orders</p>
                            <h3 className="text-3xl font-bold text-slate-900">520</h3>
                            <p className="text-blue-600 text-xs font-semibold mt-2">Average: $45/order</p>
                        </div>
                        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 border border-white/80 rounded-3xl p-6 hover:border-white/90 hover:shadow-2xl hover:shadow-blue-200/40 transition-all shadow-xl shadow-blue-100/40">
                            <p className="text-slate-600 text-sm font-semibold mb-2">Conversion Rate</p>
                            <h3 className="text-3xl font-bold text-slate-900">82.8%</h3>
                            <p className="text-emerald-600 text-xs font-semibold mt-2">↑ 5.2% from last week</p>
                        </div>
                    </div>
                </div>

                {/* Top Products & Recent Orders */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Top Products */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/40 border border-white/80 rounded-3xl p-7 shadow-2xl shadow-blue-200/40">
                        <h3 className="text-slate-900 font-bold text-lg mb-5">Top Products</h3>
                        <div className="space-y-3">
                            {topProducts.map((product) => (
                                <div key={product.id} className="flex items-center justify-between p-3 bg-white/30 rounded-xl hover:bg-white/50 transition-all">
                                    <div className="flex-1">
                                        <p className="text-slate-900 font-semibold text-sm">{product.name}</p>
                                        <p className="text-slate-500 text-xs">{product.sales} sales</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-slate-900 font-bold text-sm">{product.price}</p>
                                        <div className="flex items-center gap-1 text-yellow-500 text-xs justify-end">
                                            <Star className="w-3 h-3 fill-current" />
                                            <span>{product.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Orders */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/40 border border-white/80 rounded-3xl p-7 shadow-2xl shadow-blue-200/40">
                        <h3 className="text-slate-900 font-bold text-lg mb-5">Recent Orders</h3>
                        <div className="space-y-3">
                            {recentOrders.map((order) => (
                                <div key={order.id} className="flex items-center justify-between p-3 bg-white/30 rounded-xl hover:bg-white/50 transition-all">
                                    <div className="flex-1">
                                        <p className="text-slate-900 font-semibold text-sm">{order.id}</p>
                                        <p className="text-slate-500 text-xs">{order.customer} · {order.date}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-slate-900 font-bold text-sm">{order.amount}</p>
                                        <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
