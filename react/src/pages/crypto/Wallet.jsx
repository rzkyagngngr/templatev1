import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function CryptoWallet() {
    const portfolioData = {
        labels: ['Bitcoin', 'Ethereum', 'Binance Coin', 'Solana', 'Cardano'],
        datasets: [{
            data: [45, 25, 15, 10, 5],
            backgroundColor: ['#f59e0b', '#3b82f6', '#facc15', '#8b5cf6', '#06b6d4'],
            borderWidth: 0
        }]
    };

    const holdings = [
        { symbol: 'BTC', name: 'Bitcoin', amount: '0.5421', value: '$23,789.50', change: '+5.24%', icon: '₿', color: 'from-amber-500 to-orange-600', up: true },
        { symbol: 'ETH', name: 'Ethereum', amount: '4.8245', value: '$13,729.60', change: '+3.82%', icon: 'Ξ', color: 'from-blue-500 to-indigo-600', up: true },
        { symbol: 'BNB', name: 'Binance Coin', amount: '18.250', value: '$7,770.80', change: '-1.45%', icon: 'B', color: 'from-yellow-400 to-yellow-600', up: false },
        { symbol: 'SOL', name: 'Solana', amount: '58.420', value: '$5,750.04', change: '+8.96%', icon: 'S', color: 'from-purple-500 to-pink-600', up: true },
        { symbol: 'ADA', name: 'Cardano', amount: '4850.00', value: '$2,522.00', change: '+2.15%', icon: 'A', color: 'from-cyan-500 to-cyan-700', up: true }
    ];

    const transactions = [
        { type: 'Received', crypto: 'BTC', amount: '+0.0245', value: '+$1,074.50', time: '2 hours ago', from: '1A1zP1...eP5QGefi2DMPTfTL5SL', status: 'completed' },
        { type: 'Sent', crypto: 'ETH', amount: '-1.5000', value: '-$4,268.40', time: '5 hours ago', to: '0x742d35...Cc9181315', status: 'completed' },
        { type: 'Exchanged', crypto: 'BNB', amount: '+5.000', value: '+$2,129.00', time: '1 day ago', from: 'SOL', status: 'completed' },
        { type: 'Received', crypto: 'SOL', amount: '+12.500', value: '+$1,230.25', time: '2 days ago', from: 'D7wP4M...hT8vKu2x', status: 'completed' },
        { type: 'Sent', crypto: 'ADA', amount: '-250.00', value: '-$130.00', time: '3 days ago', to: 'addr1qx...8yg7hrjv', status: 'pending' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            {/* Breadcrumb */}
            <nav className="text-sm text-slate-600 backdrop-blur-xl bg-white/40 px-4 py-2 rounded-2xl border border-white/60 shadow-lg shadow-blue-100/50 mb-6 inline-flex">
                <span className="hover:text-slate-900 cursor-pointer">Glacia</span>
                <span className="mx-2">/</span>
                <span className="hover:text-slate-900 cursor-pointer">Crypto</span>
                <span className="mx-2">/</span>
                <span className="text-slate-900 font-semibold">Wallet</span>
            </nav>

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900">My Wallet</h1>
                    <p className="text-slate-600 mt-2">Manage your cryptocurrency portfolio</p>
                </div>
                <div className="flex gap-3">
                    <button className="backdrop-blur-xl bg-white/60 hover:bg-white/80 px-5 py-2.5 rounded-2xl text-sm font-semibold text-slate-700 border border-white/60 shadow-lg transition-all">
                        <i className="mdi mdi-download mr-2"></i>Receive
                    </button>
                    <button className="backdrop-blur-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 px-5 py-2.5 rounded-2xl text-sm font-bold text-white shadow-2xl shadow-blue-500/40 transition-all">
                        <i className="mdi mdi-send mr-2"></i>Send
                    </button>
                </div>
            </div>

            {/* Total Balance */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-blue-500/90 to-indigo-600/90 rounded-3xl p-8 text-white border border-blue-400/30 shadow-2xl shadow-blue-400/40 mb-6">
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <p className="text-sm font-medium text-blue-100 mb-2">Total Portfolio Value</p>
                        <h2 className="text-5xl font-black mb-2">$53,561.94</h2>
                        <p className="text-lg font-semibold text-emerald-300">+$3,245.20 (+6.44%) today</p>
                    </div>
                    <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-xl">
                        <i className="mdi mdi-wallet text-4xl"></i>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                    <div>
                        <p className="text-xs font-medium text-blue-100 mb-1">24h Change</p>
                        <p className="text-xl font-black text-emerald-300">+6.44%</p>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-blue-100 mb-1">Assets</p>
                        <p className="text-xl font-black">5</p>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-blue-100 mb-1">Best Performer</p>
                        <p className="text-xl font-black">SOL +8.96%</p>
                    </div>
                </div>
            </div>

            {/* Holdings & Portfolio Distribution */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* Holdings List */}
                <div className="lg:col-span-2 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
                    <div className="p-6 border-b border-white/40 flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-bold text-slate-900">My Holdings</h2>
                            <p className="text-xs text-slate-600 mt-1">Your crypto assets</p>
                        </div>
                        <button className="px-4 py-2 text-xs font-bold bg-blue-500/10 text-blue-600 rounded-xl hover:bg-blue-500/20 transition-all">
                            <i className="mdi mdi-plus-circle mr-1"></i>Add Asset
                        </button>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            {holdings.map((holding, i) => (
                                <div key={i} className={`p-5 backdrop-blur-xl bg-gradient-to-br ${holding.color}/10 rounded-2xl border border-white/60 hover:scale-102 transition-all cursor-pointer`}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-14 h-14 bg-gradient-to-br ${holding.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                                                <span className="text-white text-2xl font-black">{holding.icon}</span>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-black text-slate-900">{holding.name}</h3>
                                                <p className="text-sm text-slate-600 font-semibold">{holding.amount} {holding.symbol}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xl font-black text-slate-900">{holding.value}</p>
                                            <p className={`text-sm font-bold ${holding.up ? 'text-emerald-600' : 'text-red-600'}`}>
                                                {holding.change}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Portfolio Distribution */}
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-purple-200/40">
                    <div className="p-6 border-b border-white/40">
                        <h2 className="text-lg font-bold text-slate-900">Portfolio Distribution</h2>
                        <p className="text-xs text-slate-600 mt-1">Asset allocation</p>
                    </div>
                    <div className="p-6">
                        <div className="h-64 flex items-center justify-center mb-6">
                            <Doughnut 
                                data={portfolioData}
                                options={{ 
                                    cutout: '60%',
                                    plugins: { legend: { display: false } }
                                }}
                            />
                        </div>
                        <div className="space-y-3">
                            {[
                                { name: 'Bitcoin', percentage: '45%', color: 'bg-amber-500' },
                                { name: 'Ethereum', percentage: '25%', color: 'bg-blue-500' },
                                { name: 'Binance Coin', percentage: '15%', color: 'bg-yellow-400' },
                                { name: 'Solana', percentage: '10%', color: 'bg-purple-500' },
                                { name: 'Cardano', percentage: '5%', color: 'bg-cyan-500' }
                            ].map((asset, i) => (
                                <div key={i} className="flex items-center justify-between p-3 backdrop-blur-xl bg-white/40 rounded-xl">
                                    <div className="flex items-center gap-2">
                                        <span className={`w-3 h-3 rounded-full ${asset.color}`}></span>
                                        <span className="text-sm font-semibold text-slate-700">{asset.name}</span>
                                    </div>
                                    <span className="text-sm font-black text-slate-900">{asset.percentage}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Transactions */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-indigo-200/40">
                <div className="p-6 border-b border-white/40 flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-bold text-slate-900">Recent Transactions</h2>
                        <p className="text-xs text-slate-600 mt-1">Your transaction history</p>
                    </div>
                    <button className="px-4 py-2 text-xs font-bold text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                        View All <i className="mdi mdi-arrow-right ml-1"></i>
                    </button>
                </div>
                <div className="p-6">
                    <div className="space-y-4">
                        {transactions.map((tx, i) => (
                            <div key={i} className="p-5 backdrop-blur-xl bg-white/40 rounded-2xl border border-white/60 hover:bg-white/60 transition-all">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                                            tx.type === 'Received' ? 'bg-gradient-to-br from-emerald-400 to-emerald-600' :
                                            tx.type === 'Sent' ? 'bg-gradient-to-br from-red-400 to-red-600' :
                                            'bg-gradient-to-br from-blue-400 to-indigo-600'
                                        } shadow-lg`}>
                                            <i className={`mdi mdi-${
                                                tx.type === 'Received' ? 'arrow-down' :
                                                tx.type === 'Sent' ? 'arrow-up' :
                                                'swap-horizontal'
                                            } text-white text-xl`}></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{tx.type} {tx.crypto}</h4>
                                            <p className="text-xs text-slate-600 font-semibold mt-0.5">{tx.time}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className={`text-lg font-black ${tx.type === 'Received' ? 'text-emerald-600' : tx.type === 'Sent' ? 'text-red-600' : 'text-blue-600'}`}>
                                            {tx.amount}
                                        </p>
                                        <p className="text-xs text-slate-600 font-semibold">{tx.value}</p>
                                    </div>
                                </div>
                                {(tx.from || tx.to) && (
                                    <div className="pt-3 border-t border-white/40">
                                        <p className="text-xs text-slate-600 font-semibold">
                                            {tx.from ? `From: ${tx.from}` : `To: ${tx.to}`}
                                        </p>
                                    </div>
                                )}
                                <div className="flex items-center justify-between mt-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                        tx.status === 'completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                                    }`}>
                                        {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                                    </span>
                                    <button className="text-xs font-bold text-blue-600 hover:text-blue-700">
                                        View Details <i className="mdi mdi-arrow-right ml-1"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
