import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

export default function EcommerceProducts() {
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

    const salesData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales',
            data: [125000, 142000, 138000, 165000, 189000, 172000],
            backgroundColor: ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4'],
            borderRadius: 8
        }]
    };

    const products = [
        { 
            id: 1, name: 'Premium Wireless Headphones', category: 'Electronics', price: '$299.99', 
            stock: 45, sold: 234, rating: 4.8, image: 'https://picsum.photos/seed/prod1/400/400',
            status: 'active', trend: 'up' 
        },
        { 
            id: 2, name: 'Smart Fitness Watch', category: 'Wearables', price: '$199.99', 
            stock: 128, sold: 567, rating: 4.9, image: 'https://picsum.photos/seed/prod2/400/400',
            status: 'active', trend: 'up' 
        },
        { 
            id: 3, name: 'Portable Bluetooth Speaker', category: 'Audio', price: '$79.99', 
            stock: 5, sold: 892, rating: 4.7, image: 'https://picsum.photos/seed/prod3/400/400',
            status: 'low-stock', trend: 'up' 
        },
        { 
            id: 4, name: 'Ultra HD 4K Monitor', category: 'Electronics', price: '$549.99', 
            stock: 0, sold: 156, rating: 4.6, image: 'https://picsum.photos/seed/prod4/400/400',
            status: 'out-of-stock', trend: 'down' 
        },
        { 
            id: 5, name: 'Mechanical Gaming Keyboard', category: 'Accessories', price: '$159.99', 
            stock: 78, sold: 445, rating: 4.8, image: 'https://picsum.photos/seed/prod5/400/400',
            status: 'active', trend: 'up' 
        },
        { 
            id: 6, name: 'Wireless Mouse Pro', category: 'Accessories', price: '$69.99', 
            stock: 210, sold: 1203, rating: 4.9, image: 'https://picsum.photos/seed/prod6/400/400',
            status: 'active', trend: 'up' 
        },
        { 
            id: 7, name: 'USB-C Hub Adapter', category: 'Accessories', price: '$49.99', 
            stock: 342, sold: 678, rating: 4.5, image: 'https://picsum.photos/seed/prod7/400/400',
            status: 'active', trend: 'stable' 
        },
        { 
            id: 8, name: 'HD Webcam 1080p', category: 'Electronics', price: '$89.99', 
            stock: 15, sold: 389, rating: 4.7, image: 'https://picsum.photos/seed/prod8/400/400',
            status: 'low-stock', trend: 'up' 
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            {/* Breadcrumb */}
            <nav className="text-sm text-slate-600 backdrop-blur-xl bg-white/40 px-4 py-2 rounded-2xl border border-white/60 shadow-lg shadow-blue-100/50 mb-6 inline-flex">
                <span className="hover:text-slate-900 cursor-pointer">Glacia</span>
                <span className="mx-2">/</span>
                <span className="hover:text-slate-900 cursor-pointer">Ecommerce</span>
                <span className="mx-2">/</span>
                <span className="text-slate-900 font-semibold">Products</span>
            </nav>

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900">Product Management</h1>
                    <p className="text-slate-600 mt-2">Manage your product catalog and inventory</p>
                </div>
                <button className="backdrop-blur-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 px-5 py-2.5 rounded-2xl text-sm font-bold text-white shadow-2xl shadow-blue-500/40 transition-all">
                    <i className="mdi mdi-plus-circle mr-2"></i>Add Product
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {[
                    { icon: 'package-variant', color: 'from-blue-500 to-blue-600', value: '1,247', label: 'Total Products', change: '+12%', up: true },
                    { icon: 'currency-usd', color: 'from-emerald-500 to-emerald-600', value: '$931K', label: 'Total Revenue', change: '+18.2%', up: true },
                    { icon: 'alert-circle', color: 'from-amber-500 to-amber-600', value: '23', label: 'Low Stock', change: '+5', up: false },
                    { icon: 'star', color: 'from-purple-500 to-purple-600', value: '4.7', label: 'Avg Rating', change: '+0.2', up: true }
                ].map((stat, i) => (
                    <div key={i} className={`backdrop-blur-2xl bg-gradient-to-br ${stat.color}/90 rounded-3xl p-6 text-white border border-white/30 shadow-2xl hover:scale-105 transition-transform duration-300`}>
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-xl">
                                <i className={`mdi mdi-${stat.icon} text-2xl`}></i>
                            </div>
                            <span className={`text-xs font-bold px-3 py-1 rounded-full ${stat.up ? 'bg-white/20' : 'bg-black/20'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-3xl font-black mb-1">{stat.value}</h3>
                        <p className="text-sm font-medium opacity-90">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Sales Chart */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40 mb-6">
                <div className="p-6 border-b border-white/40">
                    <h2 className="text-xl font-bold text-slate-900">Sales Performance</h2>
                    <p className="text-sm text-slate-600 mt-1">Monthly revenue trends</p>
                </div>
                <div className="p-6">
                    <div className="h-72">
                        <Bar 
                            data={salesData}
                            options={{
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
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Filters & View Toggle */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 p-6 shadow-2xl shadow-purple-200/40 mb-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex gap-3 flex-wrap">
                        <select className="px-4 py-2.5 bg-white/60 border border-white/60 rounded-2xl text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400/50">
                            <option>All Categories</option>
                            <option>Electronics</option>
                            <option>Wearables</option>
                            <option>Audio</option>
                            <option>Accessories</option>
                        </select>
                        <select className="px-4 py-2.5 bg-white/60 border border-white/60 rounded-2xl text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400/50">
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Low Stock</option>
                            <option>Out of Stock</option>
                        </select>
                        <input 
                            type="search" 
                            placeholder="Search products..." 
                            className="px-4 py-2.5 bg-white/60 border border-white/60 rounded-2xl text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400/50 w-64"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button 
                            onClick={() => setViewMode('grid')}
                            className={`p-2.5 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-blue-500 text-white shadow-lg' : 'bg-white/60 text-slate-700 hover:bg-white/80'}`}
                        >
                            <i className="mdi mdi-view-grid text-lg"></i>
                        </button>
                        <button 
                            onClick={() => setViewMode('list')}
                            className={`p-2.5 rounded-xl transition-all ${viewMode === 'list' ? 'bg-blue-500 text-white shadow-lg' : 'bg-white/60 text-slate-700 hover:bg-white/80'}`}
                        >
                            <i className="mdi mdi-view-list text-lg"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40 hover:scale-105 transition-transform duration-300 cursor-pointer group">
                            <div className="relative h-64 overflow-hidden">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-xl ${
                                        product.status === 'active' ? 'bg-emerald-500/80 text-white' :
                                        product.status === 'low-stock' ? 'bg-amber-500/80 text-white' :
                                        'bg-red-500/80 text-white'
                                    }`}>
                                        {product.status === 'active' ? 'In Stock' : 
                                         product.status === 'low-stock' ? 'Low Stock' : 'Out of Stock'}
                                    </span>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-xl rounded-full text-xs font-bold text-slate-900">
                                        {product.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-slate-900 mb-2 text-lg">{product.name}</h3>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex items-center gap-1">
                                        <i className="mdi mdi-star text-amber-400"></i>
                                        <span className="text-sm font-bold text-slate-900">{product.rating}</span>
                                    </div>
                                    <span className="text-xs text-slate-600 font-semibold">({product.sold} sold)</span>
                                </div>
                                <div className="flex items-center justify-between pt-3 border-t border-white/40">
                                    <span className="text-2xl font-black text-blue-600">{product.price}</span>
                                    <span className="text-sm font-semibold text-slate-600">{product.stock} left</span>
                                </div>
                                <div className="flex gap-2 mt-4">
                                    <button className="flex-1 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-xs font-bold transition-all">
                                        Edit
                                    </button>
                                    <button className="px-4 py-2 bg-white/60 hover:bg-white/80 border border-white/60 rounded-xl transition-all">
                                        <i className="mdi mdi-dots-vertical text-slate-700"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
                    <table className="w-full">
                        <thead className="backdrop-blur-xl bg-white/30 border-b border-white/40">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Product</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Category</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Price</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Stock</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Sold</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Rating</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Status</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/30">
                            {products.map((product) => (
                                <tr key={product.id} className="hover:bg-white/20 transition-all">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <img src={product.image} alt={product.name} className="w-12 h-12 rounded-xl object-cover shadow-md" />
                                            <span className="font-bold text-slate-900">{product.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-slate-700">{product.category}</td>
                                    <td className="px-6 py-4 text-sm font-black text-blue-600">{product.price}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-slate-700">{product.stock}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-slate-700">{product.sold}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1">
                                            <i className="mdi mdi-star text-amber-400"></i>
                                            <span className="text-sm font-bold text-slate-900">{product.rating}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                                            product.status === 'active' ? 'bg-emerald-100 text-emerald-700' :
                                            product.status === 'low-stock' ? 'bg-amber-100 text-amber-700' :
                                            'bg-red-100 text-red-700'
                                        }`}>
                                            {product.status === 'active' ? 'Active' : 
                                             product.status === 'low-stock' ? 'Low Stock' : 'Out of Stock'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <button className="p-2 hover:bg-blue-100 rounded-lg transition-all" title="Edit">
                                                <i className="mdi mdi-pencil text-blue-600"></i>
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
            )}
        </div>
    );
}
