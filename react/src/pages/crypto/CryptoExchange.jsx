import React, { useState } from 'react';
import { Send, Download, TrendingUp, TrendingDown, DollarSign, Bitcoin, BarChart3, Coins } from 'lucide-react';

export default function CryptoExchange() {
    const [activeTab, setActiveTab] = useState('dollar');
    const [showSendModal, setShowSendModal] = useState(false);
    const [showRequestModal, setShowRequestModal] = useState(false);

    // Mock data for stat cards
    const exchangeStats = [
        { name: 'Binance', value: '$12,450', icon: TrendingUp, color: 'from-emerald-500 to-emerald-600' },
        { name: 'Kraken', value: '$5,520', icon: TrendingDown, color: 'from-blue-500 to-blue-600' },
        { name: 'Bittrex', value: '$2,153', icon: BarChart3, color: 'from-purple-500 to-purple-600' }
    ];

    // Mock data for coin market
    const coinMarket = {
        dollar: [
            { pair: 'BTC-USD', price: '$1,420.00', change: '-0.2%', changeColor: 'text-red-500' },
            { pair: 'ETH-USD', price: '$233.00', change: '+0.28%', changeColor: 'text-emerald-500' },
            { pair: 'BCH-USD', price: '$12.00', change: '+0.12%', changeColor: 'text-emerald-500' },
            { pair: 'BSV-USD', price: '$95.00', change: '-0.22%', changeColor: 'text-red-500' },
            { pair: 'LTC-USD', price: '$32.00', change: '-0.09%', changeColor: 'text-red-500' },
            { pair: 'BNB-USD', price: '$51.00', change: '+0.27%', changeColor: 'text-emerald-500' },
            { pair: 'ADA-USD', price: '$88.00', change: '-0.2%', changeColor: 'text-red-500' }
        ],
        btc: [
            { pair: 'BTC-BTC', price: '0.000041', change: '-0.2%', changeColor: 'text-red-500' },
            { pair: 'ETH-BTC', price: '0.0000411', change: '+0.28%', changeColor: 'text-emerald-500' },
            { pair: 'BCH-BTC', price: '0.0000652', change: '+0.12%', changeColor: 'text-emerald-500' },
            { pair: 'BSV-BTC', price: '0.0000120', change: '-0.22%', changeColor: 'text-red-500' },
            { pair: 'LTC-BTC', price: '0.00001141', change: '-0.09%', changeColor: 'text-red-500' },
            { pair: 'BNB-BTC', price: '0.000096', change: '+0.27%', changeColor: 'text-emerald-500' },
            { pair: 'ADA-BTC', price: '0.0000321', change: '-0.2%', changeColor: 'text-red-500' }
        ],
        eth: [
            { pair: 'BTC-ETH', price: '0.000096', change: '-0.2%', changeColor: 'text-red-500' },
            { pair: 'ETH-ETH', price: '0.000016', change: '+0.28%', changeColor: 'text-emerald-500' },
            { pair: 'BCH-ETH', price: '0.000044', change: '+0.12%', changeColor: 'text-emerald-500' },
            { pair: 'BSV-ETH', price: '0.0003254', change: '-0.22%', changeColor: 'text-red-500' },
            { pair: 'LTC-ETH', price: '0.00009621', change: '-0.09%', changeColor: 'text-red-500' },
            { pair: 'BNB-ETH', price: '0.00009965', change: '+0.27%', changeColor: 'text-emerald-500' },
            { pair: 'ADA-ETH', price: '0.0065496', change: '-0.2%', changeColor: 'text-red-500' }
        ]
    };

    // Mock data for order book
    const buyOrders = [
        { price: '1235.12', amount: '1.2154300', total: '1235.21' },
        { price: '1235.12', amount: '1.2154300', total: '1235.21' },
        { price: '1235.12', amount: '1.2154300', total: '1235.21' },
        { price: '1235.12', amount: '1.2154300', total: '1235.21' },
        { price: '1235.12', amount: '1.2154300', total: '1235.21' },
        { price: '1235.12', amount: '1.2154300', total: '1235.21' },
        { price: '1235.12', amount: '1.2154300', total: '1235.21' },
        { price: '1235.12', amount: '1.2154300', total: '1235.21' },
        { price: '1235.12', amount: '1.2154300', total: '1235.21' },
        { price: '1235.12', amount: '1.2154300', total: '1235.21' }
    ];

    const sellOrders = [
        { price: '1235.12', amount: '1.2154300', total: '1235.21' },
        { price: '1235.12', amount: '1.2154300', total: '1235.21' },
        { price: '1235.12', amount: '1.2154300', total: '1235.21' },
        { price: '1235.12', amount: '1.2154300', total: '1235.21' },
        { price: '1235.12', amount: '1.2154300', total: '1235.21' },
        { price: '1235.12', amount: '1.2154300', total: '1235.21' },
        { price: '1235.12', amount: '1.2154300', total: '1235.21' },
        { price: '1235.12', amount: '1.2154300', total: '1235.21' },
        { price: '1235.12', amount: '1.2154300', total: '1235.21' },
        { price: '1235.12', amount: '1.2154300', total: '1235.21' }
    ];

    // Mock data for transaction history
    const transactions = [
        { no: '01', date: '14 Jan 2021', time: '12:05PM', id: 'c12b001a15f9bd46ef1c6551386c6a2bcda1ab3eae5091fba', type: 'Sent', value: '$521.36', typeColor: 'bg-red-100 text-red-700' },
        { no: '02', date: '13 Jan 2021', time: '10:15AM', id: 'c12b001a15f9bd46ef1c6551386c6a2bcda1ab3eae5091fba', type: 'Received', value: '$990.00', typeColor: 'bg-emerald-100 text-emerald-700' },
        { no: '03', date: '11 Jan 2021', time: '09:14PM', id: 'c12b001a15f9bd46ef1c6551386c6a2bcda1ab3eae5091fba', type: 'Sent', value: '$321.21', typeColor: 'bg-red-100 text-red-700' },
        { no: '04', date: '08 Jan 2021', time: '12:05PM', id: 'c12b001a15f9bd46ef1c6551386c6a2bcda1ab3eae5091fba', type: 'Received', value: '$321.21', typeColor: 'bg-emerald-100 text-emerald-700' },
        { no: '05', date: '06 Jan 2021', time: '11:30AM', id: 'c12b001a15f9bd46ef1c6551386c6a2bcda1ab3eae5091fba', type: 'Sent', value: '$458.80', typeColor: 'bg-red-100 text-red-700' },
        { no: '06', date: '05 Jan 2021', time: '05:50PM', id: 'c12b001a15f9bd46ef1c6551386c6a2bcda1ab3eae5091fba', type: 'Received', value: '125.50', typeColor: 'bg-emerald-100 text-emerald-700' },
        { no: '07', date: '04 Jan 2021', time: '08:10PM', id: 'c12b001a15f9bd46ef1c6551386c6a2bcda1ab3eae5091fba', type: 'Sent', value: '$365.21', typeColor: 'bg-red-100 text-red-700' },
        { no: '08', date: '03 Jan 2021', time: '01:30PM', id: 'c12b001a15f9bd46ef1c6551386c6a2bcda1ab3eae5091fba', type: 'Received', value: '$843.21', typeColor: 'bg-emerald-100 text-emerald-700' },
        { no: '09', date: '03 Jan 2021', time: '12:05PM', id: 'c12b001a15f9bd46ef1c6551386c6a2bcda1ab3eae5091fba', type: 'Sent', value: '$335.15', typeColor: 'bg-red-100 text-red-700' },
        { no: '10', date: '02 Jan 2021', time: '03:15PM', id: 'c12b001a15f9bd46ef1c6551386c6a2bcda1ab3eae5091fba', type: 'Received', value: '$554.50', typeColor: 'bg-emerald-100 text-emerald-700' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            {/* Breadcrumb */}
            <nav className="text-sm text-slate-600 backdrop-blur-xl bg-white/40 px-4 py-2 rounded-2xl border border-white/60 shadow-lg shadow-blue-100/50 mb-6 inline-flex">
                <span className="hover:text-slate-900 cursor-pointer">Glacia</span>
                <span className="mx-2">/</span>
                <span className="hover:text-slate-900 cursor-pointer">Crypto</span>
                <span className="mx-2">/</span>
                <span className="text-slate-900 font-semibold">Exchange</span>
            </nav>

            {/* Balance Section */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 p-6 mb-6 shadow-2xl shadow-blue-200/40">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setShowSendModal(true)}
                            className="backdrop-blur-xl bg-red-500/90 hover:bg-red-600/90 px-5 py-2.5 rounded-2xl text-sm font-semibold text-white border border-red-400/30 shadow-xl shadow-red-500/30 transition-all"
                        >
                            <Send className="w-4 h-4 mr-2 inline" />
                            Send
                        </button>
                        <button
                            onClick={() => setShowRequestModal(true)}
                            className="backdrop-blur-xl bg-emerald-500/90 hover:bg-emerald-600/90 px-5 py-2.5 rounded-2xl text-sm font-semibold text-white border border-emerald-400/30 shadow-xl shadow-emerald-500/30 transition-all"
                        >
                            <Download className="w-4 h-4 mr-2 inline" />
                            Request
                        </button>
                    </div>
                    <div className="flex items-center gap-3">
                        <img src="https://picsum.photos/seed/btc/40/40" alt="BTC" className="w-10 h-10 rounded-full" />
                        <div>
                            <p className="text-sm text-slate-600 mb-0">Total Balance</p>
                            <h5 className="text-xl font-bold text-slate-900 mb-0">122.00125503 BTC</h5>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
                {/* Chart Section */}
                <div className="lg:col-span-8">
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 p-6 shadow-2xl shadow-blue-200/40">
                        <h4 className="text-xl font-bold text-slate-900 mb-6">Market Overview</h4>

                        {/* Exchange Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {exchangeStats.map((stat, index) => (
                                <div key={index} className={`backdrop-blur-xl bg-gradient-to-br ${stat.color} rounded-3xl p-5 text-white border border-white/30 shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-100/30`}>
                                    <div className="flex items-center justify-between mb-2">
                                        <stat.icon className="w-6 h-6" />
                                        <div className="text-2xl font-black">{stat.value}</div>
                                    </div>
                                    <div className="text-sm font-semibold text-white/80">{stat.name}</div>
                                </div>
                            ))}
                        </div>

                        {/* Crypto Converter Widget Placeholder */}
                        <div className="backdrop-blur-xl bg-gradient-to-br from-slate-100/60 to-slate-200/60 rounded-3xl border border-white/60 p-6 shadow-xl">
                            <div className="text-center text-slate-600">
                                <Bitcoin className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                <p className="text-lg font-semibold mb-2">Crypto Converter</p>
                                <p className="text-sm">Live price conversion widget would be here</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Coin Market */}
                <div className="lg:col-span-4">
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl shadow-blue-200/40">
                        <div className="p-6 border-b border-white/40">
                            <h4 className="text-xl font-bold text-slate-900">Coin Market</h4>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-white/40">
                            {[
                                { id: 'dollar', label: 'Dollar', icon: DollarSign },
                                { id: 'btc', label: 'BTC', icon: Bitcoin },
                                { id: 'eth', label: 'ETH', icon: Coins }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex-1 px-4 py-3 text-sm font-semibold transition-all ${activeTab === tab.id ? 'bg-blue-500 text-white shadow-xl shadow-blue-500/40' : 'bg-transparent text-slate-600 hover:bg-white/40'}`}
                                >
                                    <tab.icon className="w-4 h-4 mr-2 inline" />
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Market List */}
                        <div className="max-h-64 overflow-y-auto p-4 space-y-2">
                            {coinMarket[activeTab].map((coin, index) => (
                                <div key={index} className="flex items-center justify-between py-2 border-b border-white/20 last:border-b-0">
                                    <div className="flex items-center gap-3">
                                        <img src={`https://picsum.photos/seed/${coin.pair.split('-')[0].toLowerCase()}/24/24`} alt={coin.pair} className="w-6 h-6 rounded-full" />
                                        <span className="text-sm font-semibold text-slate-900">{coin.pair}</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-bold text-slate-900">{coin.price}</div>
                                        <div className={`text-xs font-semibold ${coin.changeColor}`}>{coin.change}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Trading Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Buy Coins */}
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 p-6 shadow-2xl shadow-blue-200/40">
                    <h4 className="text-xl font-bold text-slate-900 mb-6">Buy Coins</h4>

                    <form className="space-y-4">
                        <div className="flex">
                            <span className="backdrop-blur-xl bg-slate-100/60 px-4 py-3 border border-white/50 rounded-l-2xl text-slate-700 font-semibold">Amount</span>
                            <input type="text" className="flex-1 px-4 py-3 border border-white/50 bg-white/50 backdrop-blur-xl rounded-r-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50" placeholder="0.00" />
                            <span className="backdrop-blur-xl bg-slate-100/60 px-4 py-3 border border-white/50 rounded-r-2xl text-slate-700 font-semibold">BTC</span>
                        </div>

                        <div className="flex">
                            <select className="backdrop-blur-xl bg-slate-100/60 px-4 py-3 border border-white/50 rounded-l-2xl text-slate-700 font-semibold w-1/3">
                                <option>Last Trade Price</option>
                                <option>Last Buy Price</option>
                                <option>Last Sell Price</option>
                            </select>
                            <input type="text" className="flex-1 px-4 py-3 border border-white/50 bg-white/50 backdrop-blur-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50" placeholder="$25,000" />
                            <span className="backdrop-blur-xl bg-slate-100/60 px-4 py-3 border border-white/50 rounded-r-2xl text-slate-700 font-semibold">$</span>
                        </div>

                        <div className="flex">
                            <span className="backdrop-blur-xl bg-slate-100/60 px-4 py-3 border border-white/50 rounded-l-2xl text-slate-700 font-semibold">Total</span>
                            <input type="text" className="flex-1 px-4 py-3 border border-white/50 bg-white/50 backdrop-blur-xl rounded-r-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50" placeholder="0.00" />
                            <span className="backdrop-blur-xl bg-slate-100/60 px-4 py-3 border border-white/50 rounded-r-2xl text-slate-700 font-semibold">$</span>
                        </div>

                        <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-2xl font-bold shadow-2xl shadow-emerald-500/40 transition-all">
                            Buy Coins
                        </button>
                    </form>

                    <hr className="my-6 border-white/40" />

                    <h6 className="text-lg font-bold text-slate-900 mb-4">Last Trade</h6>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img src="https://picsum.photos/seed/btc/30/30" alt="BTC" className="w-8 h-8 rounded-full" />
                            <div>
                                <h6 className="text-sm font-bold text-slate-900 mb-0">BTC</h6>
                                <p className="text-xs text-slate-600 mb-0">$50,562.24</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-bold text-emerald-600 mb-0">0.95842536</p>
                            <p className="text-xs text-slate-600 mb-0">$17,214</p>
                        </div>
                    </div>
                </div>

                {/* Sell Coins */}
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 p-6 shadow-2xl shadow-blue-200/40">
                    <h4 className="text-xl font-bold text-slate-900 mb-6">Sell Coins</h4>

                    <form className="space-y-4">
                        <div className="flex">
                            <span className="backdrop-blur-xl bg-slate-100/60 px-4 py-3 border border-white/50 rounded-l-2xl text-slate-700 font-semibold">Amount</span>
                            <input type="text" className="flex-1 px-4 py-3 border border-white/50 bg-white/50 backdrop-blur-xl rounded-r-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50" placeholder="0.00" />
                            <span className="backdrop-blur-xl bg-slate-100/60 px-4 py-3 border border-white/50 rounded-r-2xl text-slate-700 font-semibold">BTC</span>
                        </div>

                        <div className="flex">
                            <select className="backdrop-blur-xl bg-slate-100/60 px-4 py-3 border border-white/50 rounded-l-2xl text-slate-700 font-semibold w-1/3">
                                <option>Last Trade Price</option>
                                <option>Last Buy Price</option>
                                <option>Last Sell Price</option>
                            </select>
                            <input type="text" className="flex-1 px-4 py-3 border border-white/50 bg-white/50 backdrop-blur-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50" placeholder="$25,000" />
                            <span className="backdrop-blur-xl bg-slate-100/60 px-4 py-3 border border-white/50 rounded-r-2xl text-slate-700 font-semibold">$</span>
                        </div>

                        <div className="flex">
                            <span className="backdrop-blur-xl bg-slate-100/60 px-4 py-3 border border-white/50 rounded-l-2xl text-slate-700 font-semibold">Total</span>
                            <input type="text" className="flex-1 px-4 py-3 border border-white/50 bg-white/50 backdrop-blur-xl rounded-r-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50" placeholder="0.00" />
                            <span className="backdrop-blur-xl bg-slate-100/60 px-4 py-3 border border-white/50 rounded-r-2xl text-slate-700 font-semibold">$</span>
                        </div>

                        <button className="w-full py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-2xl font-bold shadow-2xl shadow-red-500/40 transition-all">
                            Sell Coins
                        </button>
                    </form>

                    <hr className="my-6 border-white/40" />

                    <h6 className="text-lg font-bold text-slate-900 mb-4">Last Trade</h6>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img src="https://picsum.photos/seed/eth/30/30" alt="ETH" className="w-8 h-8 rounded-full" />
                            <div>
                                <h6 className="text-sm font-bold text-slate-900 mb-0">ETH</h6>
                                <p className="text-xs text-slate-600 mb-0">$1,798.24</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-bold text-red-600 mb-0">2.325468</p>
                            <p className="text-xs text-slate-600 mb-0">$5,214</p>
                        </div>
                    </div>
                </div>

                {/* Live Trading */}
                <div className="md:col-span-3 lg:col-span-1">
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 p-6 shadow-2xl shadow-blue-200/40">
                        <h4 className="text-xl font-bold text-slate-900 mb-6">Live Trading</h4>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Buy Orders */}
                            <div>
                                <h6 className="text-sm font-bold text-emerald-600 mb-3">Buy Orders</h6>
                                <div className="space-y-1 max-h-64 overflow-y-auto">
                                    {buyOrders.map((order, index) => (
                                        <div key={index} className="flex justify-between text-xs py-1 border-b border-emerald-100 last:border-b-0">
                                            <span className="text-emerald-600 font-semibold">{order.price}</span>
                                            <span className="text-slate-600">{order.amount}</span>
                                            <span className="text-slate-600">{order.total}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Sell Orders */}
                            <div>
                                <h6 className="text-sm font-bold text-red-600 mb-3">Sell Orders</h6>
                                <div className="space-y-1 max-h-64 overflow-y-auto">
                                    {sellOrders.map((order, index) => (
                                        <div key={index} className="flex justify-between text-xs py-1 border-b border-red-100 last:border-b-0">
                                            <span className="text-red-600 font-semibold">{order.price}</span>
                                            <span className="text-slate-600">{order.amount}</span>
                                            <span className="text-slate-600">{order.total}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transaction History */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl shadow-blue-200/40">
                <div className="p-6 border-b border-white/40 flex justify-between items-center">
                    <h4 className="text-xl font-bold text-slate-900">Transaction History</h4>
                    <select className="backdrop-blur-xl bg-white/60 px-4 py-2 border border-white/80 rounded-2xl text-slate-900 font-semibold">
                        <option>Today</option>
                        <option>Yesterday</option>
                        <option>Last Week</option>
                        <option>Last Month</option>
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50/60">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">No</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Time</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Transaction ID</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Type</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Value</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/40">
                            {transactions.map((tx, index) => (
                                <tr key={index} className="hover:bg-white/20 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-slate-900">{tx.no}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">{tx.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">{tx.time}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-600 font-mono">{tx.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`backdrop-blur-xl rounded-2xl border shadow-lg px-3 py-1 text-xs font-bold ${tx.typeColor}`}>
                                            {tx.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900">{tx.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-white/40 flex justify-end">
                    <div className="flex gap-1">
                        <button className="px-3 py-1 text-sm bg-slate-100/60 hover:bg-slate-200/60 rounded-xl transition-colors">Previous</button>
                        <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-xl">1</button>
                        <button className="px-3 py-1 text-sm bg-slate-100/60 hover:bg-slate-200/60 rounded-xl transition-colors">2</button>
                        <button className="px-3 py-1 text-sm bg-slate-100/60 hover:bg-slate-200/60 rounded-xl transition-colors">3</button>
                        <button className="px-3 py-1 text-sm bg-slate-100/60 hover:bg-slate-200/60 rounded-xl transition-colors">Next</button>
                    </div>
                </div>
            </div>

            {/* Send Modal */}
            {showSendModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 p-6 max-w-md w-full mx-4 shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <h5 className="text-xl font-bold text-slate-900">Send Coin</h5>
                            <button onClick={() => setShowSendModal(false)} className="text-slate-400 hover:text-slate-600">
                                <i className="mdi mdi-close text-2xl"></i>
                            </button>
                        </div>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Crypto Currency</label>
                                <select className="w-full px-4 py-3 border border-white/50 rounded-2xl bg-white/50 backdrop-blur-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400/50">
                                    <option>-- Currency --</option>
                                    <option>BTC</option>
                                    <option>ETH</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Currency From</label>
                                <select className="w-full px-4 py-3 border border-white/50 rounded-2xl bg-white/50 backdrop-blur-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400/50">
                                    <option>-- My wallet --</option>
                                    <option>BTC</option>
                                    <option>ETH</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">To</label>
                                <div className="flex">
                                    <span className="backdrop-blur-xl bg-slate-100/60 px-4 py-3 border border-white/50 rounded-l-2xl text-slate-700">
                                        <i className="mdi mdi-qrcode"></i>
                                    </span>
                                    <input type="text" className="flex-1 px-4 py-3 border border-white/50 bg-white/50 backdrop-blur-xl rounded-r-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50" placeholder="Can you scan" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">USD</label>
                                    <div className="flex">
                                        <span className="backdrop-blur-xl bg-slate-100/60 px-4 py-3 border border-white/50 rounded-l-2xl text-slate-700">
                                            <DollarSign className="w-4 h-4" />
                                        </span>
                                        <input type="text" className="flex-1 px-4 py-3 border border-white/50 bg-white/50 backdrop-blur-xl rounded-r-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50" placeholder="USD" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">BTC</label>
                                    <div className="flex">
                                        <span className="backdrop-blur-xl bg-slate-100/60 px-4 py-3 border border-white/50 rounded-l-2xl text-slate-700">
                                            <Bitcoin className="w-4 h-4" />
                                        </span>
                                        <input type="text" className="flex-1 px-4 py-3 border border-white/50 bg-white/50 backdrop-blur-xl rounded-r-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50" placeholder="BTC" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
                                <textarea className="w-full px-4 py-3 border border-white/50 rounded-2xl bg-white/50 backdrop-blur-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50" rows="3" placeholder="Description"></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Network Fee</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center">
                                        <input type="radio" name="networkFee" className="mr-2" defaultChecked />
                                        <span className="text-sm text-slate-700">Regular</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="networkFee" className="mr-2" />
                                        <span className="text-sm text-slate-700">Priority</span>
                                    </label>
                                </div>
                            </div>
                            <div className="flex gap-3 pt-4">
                                <button type="button" onClick={() => setShowSendModal(false)} className="flex-1 py-3 bg-slate-100/60 hover:bg-slate-200/60 text-slate-700 rounded-2xl font-semibold transition-all">
                                    Close
                                </button>
                                <button type="submit" className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-2xl font-bold shadow-2xl shadow-blue-500/40 transition-all">
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Request Modal */}
            {showRequestModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 p-6 max-w-md w-full mx-4 shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <h5 className="text-xl font-bold text-slate-900">Request Coin</h5>
                            <button onClick={() => setShowRequestModal(false)} className="text-slate-400 hover:text-slate-600">
                                <i className="mdi mdi-close text-2xl"></i>
                            </button>
                        </div>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Crypto Currency</label>
                                <select className="w-full px-4 py-3 border border-white/50 rounded-2xl bg-white/50 backdrop-blur-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400/50">
                                    <option>-- Currency --</option>
                                    <option>BTC</option>
                                    <option>ETH</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Receive To</label>
                                <select className="w-full px-4 py-3 border border-white/50 rounded-2xl bg-white/50 backdrop-blur-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400/50">
                                    <option>-- My wallet --</option>
                                    <option>BTC</option>
                                    <option>ETH</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Address</label>
                                <div className="flex">
                                    <input type="text" className="flex-1 px-4 py-3 border border-white/50 bg-white/50 backdrop-blur-xl rounded-l-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400/50" defaultValue="c12b001a15f9bd46ef1c6551386c" />
                                    <button className="backdrop-blur-xl bg-slate-100/60 px-4 py-3 border border-white/50 rounded-r-2xl text-slate-700 hover:bg-slate-200/60 transition-all">
                                        <i className="mdi mdi-content-copy"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="flex gap-3 pt-4">
                                <button type="submit" className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-2xl font-bold shadow-2xl shadow-emerald-500/40 transition-all">
                                    Done
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
