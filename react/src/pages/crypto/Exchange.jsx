import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

export default function CryptoExchange() {
    const [selectedPair, setSelectedPair] = useState('BTC/USDT');
    const [tradeType, setTradeType] = useState('buy');
    const [orderType, setOrderType] = useState('limit'); // limit, market, stop-limit
    const [price, setPrice] = useState('43890.25');
    const [amount, setAmount] = useState('');
    const [total, setTotal] = useState('');
    const [leverage, setLeverage] = useState(1);
    const [activeTab, setActiveTab] = useState('spot'); // spot, futures, margin
    const [chartInterval, setChartInterval] = useState('1H');
    const [showOrderBook, setShowOrderBook] = useState(true);

    // Mock real-time price updates
    useEffect(() => {
        const interval = setInterval(() => {
            const basePrice = 43890.25;
            const randomChange = (Math.random() - 0.5) * 100;
            setPrice((basePrice + randomChange).toFixed(2));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const cryptoPairs = [
        { pair: 'BTC/USDT', price: '43,890.25', change: '+5.24%', volume: '$2.4B', high: '44,120', low: '41,850', up: true },
        { pair: 'ETH/USDT', price: '2,845.60', change: '+3.82%', volume: '$1.8B', high: '2,892', low: '2,745', up: true },
        { pair: 'BNB/USDT', price: '425.80', change: '-1.45%', volume: '$845M', high: '438', low: '421', up: false },
        { pair: 'SOL/USDT', price: '98.42', change: '+8.96%', volume: '$654M', high: '102', low: '89', up: true },
        { pair: 'ADA/USDT', price: '0.52', change: '+2.15%', volume: '$423M', high: '0.54', low: '0.49', up: true },
        { pair: 'XRP/USDT', price: '0.68', change: '-0.82%', volume: '$389M', high: '0.71', low: '0.66', up: false },
        { pair: 'DOT/USDT', price: '7.24', change: '-2.34%', volume: '$245M', high: '7.52', low: '7.15', up: false },
        { pair: 'MATIC/USDT', price: '0.89', change: '+4.67%', volume: '$198M', high: '0.92', low: '0.84', up: true },
        { pair: 'LINK/USDT', price: '14.82', change: '+1.23%', volume: '$167M', high: '15.12', low: '14.45', up: true },
        { pair: 'AVAX/USDT', price: '36.45', change: '+6.89%', volume: '$234M', high: '37.82', low: '33.98', up: true }
    ];

    const priceChartData = {
        labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
        datasets: [{
            label: 'Price',
            data: [42150, 42380, 42580, 41920, 42150, 43200, 42850, 43520, 43200, 43650, 43890, 43720, 43890],
            borderColor: tradeType === 'buy' ? '#10b981' : '#ef4444',
            backgroundColor: tradeType === 'buy' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 6
        }]
    };

    const volumeChartData = {
        labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
        datasets: [{
            label: 'Volume',
            data: [1200, 1450, 980, 1650, 2100, 1890, 2350, 1780, 2450, 2100, 1950, 2200, 2400],
            backgroundColor: tradeType === 'buy' ? 'rgba(16, 185, 129, 0.6)' : 'rgba(239, 68, 68, 0.6)',
            borderRadius: 4
        }]
    };

    const orderBook = {
        bids: [
            { price: '43,889.50', amount: '2.458', total: '107,847.47' },
            { price: '43,888.25', amount: '1.892', total: '83,036.33' },
            { price: '43,887.00', amount: '3.125', total: '137,146.88' },
            { price: '43,886.50', amount: '0.845', total: '37,083.79' },
            { price: '43,885.00', amount: '4.567', total: '200,443.19' },
            { price: '43,884.75', amount: '1.234', total: '54,153.42' },
            { price: '43,883.50', amount: '2.789', total: '122,413.02' },
            { price: '43,882.00', amount: '0.567', total: '24,881.09' },
            { price: '43,881.25', amount: '3.456', total: '151,653.84' },
            { price: '43,880.00', amount: '1.890', total: '82,933.20' }
        ],
        asks: [
            { price: '43,890.50', amount: '1.234', total: '54,157.24' },
            { price: '43,891.00', amount: '2.567', total: '112,667.90' },
            { price: '43,892.25', amount: '0.789', total: '34,631.21' },
            { price: '43,893.50', amount: '3.124', total: '137,122.09' },
            { price: '43,894.00', amount: '1.456', total: '63,909.66' },
            { price: '43,895.75', amount: '2.234', total: '98,062.66' },
            { price: '43,896.00', amount: '0.912', total: '40,033.15' },
            { price: '43,897.50', amount: '1.678', total: '73,661.53' },
            { price: '43,898.25', amount: '2.890', total: '126,865.94' },
            { price: '43,899.00', amount: '1.234', total: '54,171.17' }
        ]
    };

    const recentTrades = [
        { time: '14:32:45', type: 'buy', price: '43,892.00', amount: '0.245', total: '10,753.54' },
        { time: '14:32:38', type: 'sell', price: '43,885.50', amount: '0.158', total: '6,933.91' },
        { time: '14:32:22', type: 'buy', price: '43,890.00', amount: '0.520', total: '22,822.80' },
        { time: '14:32:15', type: 'buy', price: '43,888.75', amount: '0.092', total: '4,037.77' },
        { time: '14:32:08', type: 'sell', price: '43,882.00', amount: '0.385', total: '16,894.57' },
        { time: '14:31:55', type: 'buy', price: '43,895.50', amount: '0.175', total: '7,681.71' },
        { time: '14:31:42', type: 'sell', price: '43,880.00', amount: '0.628', total: '27,556.64' },
        { time: '14:31:28', type: 'buy', price: '43,892.25', amount: '0.314', total: '13,782.17' },
        { time: '14:31:15', type: 'sell', price: '43,878.50', amount: '0.456', total: '20,008.64' },
        { time: '14:31:02', type: 'buy', price: '43,895.00', amount: '0.789', total: '34,633.16' }
    ];

    const openOrders = [
        { time: '14:25:12', pair: 'BTC/USDT', type: 'Buy', orderType: 'Limit', price: '43,500.00', amount: '0.5', filled: '0%', total: '21,750.00', status: 'Open' },
        { time: '13:45:33', pair: 'ETH/USDT', type: 'Sell', orderType: 'Limit', price: '2,900.00', amount: '2.0', filled: '45%', total: '5,800.00', status: 'Partial' },
        { time: '12:30:45', pair: 'BNB/USDT', type: 'Buy', orderType: 'Stop', price: '420.00', amount: '10', filled: '0%', total: '4,200.00', status: 'Open' }
    ];

    const handlePercentageClick = (percent) => {
        // Simulate setting amount based on available balance
        const maxAmount = 0.5; // Mock available balance
        setAmount((maxAmount * percent).toFixed(4));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 -m-6 p-6">
            <nav className="text-sm text-slate-300 backdrop-blur-xl bg-white/10 px-4 py-2 rounded-2xl border border-white/20 shadow-lg shadow-blue-900/50 mb-6 inline-flex">
                <span className="hover:text-white cursor-pointer">Glacia</span>
                <span className="mx-2">/</span>
                <span className="hover:text-white cursor-pointer">Crypto</span>
                <span className="mx-2">/</span>
                <span className="text-white font-semibold">Exchange</span>
            </nav>

            {/* Top Stats Bar */}
            <div className="grid grid-cols-5 gap-4 mb-6">
                {['24h Change', '24h High', '24h Low', '24h Volume (BTC)', '24h Volume (USDT)'].map((label, i) => (
                    <div key={i} className="backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-4 border border-white/10">
                        <div className="text-xs text-slate-400 mb-1">{label}</div>
                        <div className="text-lg font-bold text-white">{i === 0 ? '+5.24%' : i === 1 ? '$44,120' : i === 2 ? '$41,850' : i === 3 ? '28,450 BTC' : '$2.4B'}</div>
                        {i === 0 && <div className="text-xs text-emerald-400 mt-1">+$2,185</div>}
                    </div>
                ))}
            </div>

            {/* Trading Type Tabs */}
            <div className="flex gap-2 mb-6">
                {['spot', 'futures', 'margin'].map((type) => (
                    <button 
                        key={type}
                        onClick={() => setActiveTab(type)}
                        className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${activeTab === type ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl shadow-blue-500/40' : 'bg-white/10 text-slate-300 hover:bg-white/20'}`}
                    >
                        {type.charAt(0).toUpperCase() + type.slice(1)} Trading
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Left Panel - Markets */}
                <div className="col-span-3">
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                        <div className="p-4 border-b border-white/10">
                            <input 
                                type="text"
                                placeholder="Search pairs..."
                                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm"
                            />
                        </div>
                        <div className="h-[600px] overflow-y-auto">
                            {cryptoPairs.map((pair, i) => (
                                <button 
                                    key={i}
                                    onClick={() => setSelectedPair(pair.pair)}
                                    className={`w-full p-3 border-b border-white/5 hover:bg-white/10 transition-all text-left ${selectedPair === pair.pair ? 'bg-white/10' : ''}`}
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-bold text-white text-sm">{pair.pair}</span>
                                        <span className={`text-xs font-bold ${pair.up ? 'text-emerald-400' : 'text-red-400'}`}>{pair.change}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-slate-400">Vol: {pair.volume}</span>
                                        <span className="text-slate-300">${pair.price}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Center Panel - Chart & Trading */}
                <div className="col-span-6 space-y-6">
                    {/* Chart */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                        <div className="p-4 border-b border-white/10 flex items-center justify-between">
                            <div>
                                <div className="text-2xl font-black text-white mb-1">${price}</div>
                                <div className="text-sm text-emerald-400 font-semibold">+5.24% (+$2,185.50)</div>
                            </div>
                            <div className="flex gap-2">
                                {['1m', '5m', '15m', '1H', '4H', '1D', '1W'].map((interval) => (
                                    <button 
                                        key={interval}
                                        onClick={() => setChartInterval(interval)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${chartInterval === interval ? 'bg-blue-500 text-white' : 'bg-white/10 text-slate-300 hover:bg-white/20'}`}
                                    >
                                        {interval}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="p-4">
                            <Line data={priceChartData} options={{ 
                                responsive: true, 
                                maintainAspectRatio: false,
                                plugins: { legend: { display: false } },
                                scales: {
                                    x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: 'rgba(255, 255, 255, 0.6)' } },
                                    y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: 'rgba(255, 255, 255, 0.6)' } }
                                }
                            }} height={250} />
                        </div>
                        <div className="p-4 border-t border-white/10">
                            <Bar data={volumeChartData} options={{ 
                                responsive: true, 
                                maintainAspectRatio: false,
                                plugins: { legend: { display: false } },
                                scales: {
                                    x: { grid: { display: false }, ticks: { color: 'rgba(255, 255, 255, 0.6)' } },
                                    y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: 'rgba(255, 255, 255, 0.6)' } }
                                }
                            }} height={80} />
                        </div>
                    </div>

                    {/* Trading Panel */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                        <div className="grid grid-cols-2">
                            <button 
                                onClick={() => setTradeType('buy')}
                                className={`py-4 font-bold transition-all ${tradeType === 'buy' ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
                            >
                                Buy {selectedPair.split('/')[0]}
                            </button>
                            <button 
                                onClick={() => setTradeType('sell')}
                                className={`py-4 font-bold transition-all ${tradeType === 'sell' ? 'bg-gradient-to-r from-red-500 to-red-600 text-white' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
                            >
                                Sell {selectedPair.split('/')[0]}
                            </button>
                        </div>

                        <div className="p-6 space-y-4">
                            {/* Order Type */}
                            <div className="flex gap-2">
                                {['limit', 'market', 'stop-limit'].map((type) => (
                                    <button 
                                        key={type}
                                        onClick={() => setOrderType(type)}
                                        className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${orderType === type ? 'bg-blue-500 text-white' : 'bg-white/10 text-slate-300 hover:bg-white/20'}`}
                                    >
                                        {type.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('-')}
                                    </button>
                                ))}
                            </div>

                            {/* Leverage (for futures) */}
                            {activeTab === 'futures' && (
                                <div>
                                    <label className="block text-sm font-semibold text-slate-300 mb-2">Leverage: {leverage}x</label>
                                    <input 
                                        type="range" 
                                        min="1" 
                                        max="125" 
                                        value={leverage}
                                        onChange={(e) => setLeverage(e.target.value)}
                                        className="w-full"
                                    />
                                    <div className="flex justify-between text-xs text-slate-400 mt-1">
                                        <span>1x</span>
                                        <span>125x</span>
                                    </div>
                                </div>
                            )}

                            {/* Price Input */}
                            {orderType !== 'market' && (
                                <div>
                                    <label className="block text-sm font-semibold text-slate-300 mb-2">Price (USDT)</label>
                                    <input 
                                        type="text"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                    />
                                </div>
                            )}

                            {/* Amount Input */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-300 mb-2">Amount (BTC)</label>
                                <input 
                                    type="text"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="0.00"
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                />
                                <div className="flex gap-2 mt-2">
                                    {[0.25, 0.5, 0.75, 1].map((percent) => (
                                        <button 
                                            key={percent}
                                            onClick={() => handlePercentageClick(percent)}
                                            className="flex-1 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold text-slate-300 transition-all"
                                        >
                                            {percent * 100}%
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Total */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-300 mb-2">Total (USDT)</label>
                                <input 
                                    type="text"
                                    value={total}
                                    onChange={(e) => setTotal(e.target.value)}
                                    placeholder="0.00"
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                />
                            </div>

                            {/* Available Balance */}
                            <div className="flex justify-between text-sm text-slate-400">
                                <span>Available:</span>
                                <span className="font-bold text-white">12,450.00 USDT</span>
                            </div>

                            {/* Trade Button */}
                            <button className={`w-full py-4 rounded-2xl font-bold text-white shadow-2xl transition-all ${tradeType === 'buy' ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-emerald-500/40' : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-red-500/40'}`}>
                                {tradeType === 'buy' ? 'Buy' : 'Sell'} {selectedPair.split('/')[0]}
                            </button>

                            <div className="text-xs text-slate-400 text-center">
                                Fee: 0.1% • Est. Total: {tradeType === 'buy' ? '21,945.12' : '21,734.88'} USDT
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Order Book & Trades */}
                <div className="col-span-3 space-y-6">
                    {/* Order Book */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                        <div className="p-4 border-b border-white/10 flex items-center justify-between">
                            <span className="font-bold text-white">Order Book</span>
                            <button 
                                onClick={() => setShowOrderBook(!showOrderBook)}
                                className="text-xs text-slate-400 hover:text-white"
                            >
                                <i className={`mdi mdi-${showOrderBook ? 'eye-off' : 'eye'}`}></i>
                            </button>
                        </div>
                        {showOrderBook && (
                            <div>
                                {/* Asks (Sells) */}
                                <div className="p-2">
                                    <div className="grid grid-cols-3 text-xs text-slate-400 font-semibold mb-1 px-2">
                                        <span>Price</span>
                                        <span className="text-right">Amount</span>
                                        <span className="text-right">Total</span>
                                    </div>
                                    {orderBook.asks.slice(0, 8).map((ask, i) => (
                                        <div key={i} className="grid grid-cols-3 text-xs py-1 px-2 hover:bg-red-500/10 rounded transition-all relative">
                                            <div className="absolute inset-0 bg-red-500/10 rounded" style={{ width: `${Math.random() * 60 + 20}%` }}></div>
                                            <span className="text-red-400 font-semibold relative z-10">{ask.price}</span>
                                            <span className="text-slate-300 text-right relative z-10">{ask.amount}</span>
                                            <span className="text-slate-400 text-right relative z-10">{ask.total}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Current Price */}
                                <div className="py-3 px-4 bg-white/5 border-y border-white/10">
                                    <div className="text-xl font-black text-emerald-400">${price}</div>
                                    <div className="text-xs text-slate-400">≈ ${price} USDT</div>
                                </div>

                                {/* Bids (Buys) */}
                                <div className="p-2">
                                    {orderBook.bids.slice(0, 8).map((bid, i) => (
                                        <div key={i} className="grid grid-cols-3 text-xs py-1 px-2 hover:bg-emerald-500/10 rounded transition-all relative">
                                            <div className="absolute inset-0 bg-emerald-500/10 rounded" style={{ width: `${Math.random() * 60 + 20}%` }}></div>
                                            <span className="text-emerald-400 font-semibold relative z-10">{bid.price}</span>
                                            <span className="text-slate-300 text-right relative z-10">{bid.amount}</span>
                                            <span className="text-slate-400 text-right relative z-10">{bid.total}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Recent Trades */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                        <div className="p-4 border-b border-white/10">
                            <span className="font-bold text-white">Recent Trades</span>
                        </div>
                        <div className="p-2">
                            <div className="grid grid-cols-3 text-xs text-slate-400 font-semibold mb-1 px-2">
                                <span>Time</span>
                                <span className="text-right">Price</span>
                                <span className="text-right">Amount</span>
                            </div>
                            <div className="max-h-[300px] overflow-y-auto">
                                {recentTrades.map((trade, i) => (
                                    <div key={i} className={`grid grid-cols-3 text-xs py-1.5 px-2 hover:bg-white/5 rounded transition-all`}>
                                        <span className="text-slate-400">{trade.time}</span>
                                        <span className={`text-right font-semibold ${trade.type === 'buy' ? 'text-emerald-400' : 'text-red-400'}`}>{trade.price}</span>
                                        <span className="text-slate-300 text-right">{trade.amount}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Open Orders Section */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/10 overflow-hidden shadow-2xl mt-6">
                <div className="p-4 border-b border-white/10 flex items-center justify-between">
                    <div className="flex gap-4">
                        {['Open Orders (3)', 'Order History', 'Trade History', 'Funds'].map((tab, i) => (
                            <button key={i} className={`text-sm font-semibold ${i === 0 ? 'text-white' : 'text-slate-400 hover:text-white'} transition-all`}>
                                {tab}
                            </button>
                        ))}
                    </div>
                    <button className="text-sm text-red-400 hover:text-red-300 font-semibold">Cancel All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="px-6 py-3 text-left text-xs font-bold text-slate-400 uppercase">Time</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-slate-400 uppercase">Pair</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-slate-400 uppercase">Type</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-slate-400 uppercase">Order Type</th>
                                <th className="px-6 py-3 text-right text-xs font-bold text-slate-400 uppercase">Price</th>
                                <th className="px-6 py-3 text-right text-xs font-bold text-slate-400 uppercase">Amount</th>
                                <th className="px-6 py-3 text-right text-xs font-bold text-slate-400 uppercase">Filled</th>
                                <th className="px-6 py-3 text-right text-xs font-bold text-slate-400 uppercase">Total</th>
                                <th className="px-6 py-3 text-center text-xs font-bold text-slate-400 uppercase">Status</th>
                                <th className="px-6 py-3 text-center text-xs font-bold text-slate-400 uppercase">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {openOrders.map((order, i) => (
                                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-all">
                                    <td className="px-6 py-4 text-sm text-slate-400">{order.time}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-white">{order.pair}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-lg text-xs font-bold ${order.type === 'Buy' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                                            {order.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-300">{order.orderType}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-white text-right">{order.price}</td>
                                    <td className="px-6 py-4 text-sm text-slate-300 text-right">{order.amount}</td>
                                    <td className="px-6 py-4 text-sm text-slate-300 text-right">{order.filled}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-white text-right">{order.total}</td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${order.status === 'Open' ? 'bg-blue-500/20 text-blue-400' : 'bg-amber-500/20 text-amber-400'}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <button className="px-3 py-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-xs font-semibold transition-all">
                                            Cancel
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
