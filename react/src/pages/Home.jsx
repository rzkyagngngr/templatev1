import React, { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownLeft, Eye, EyeOff, Star, MoreVertical, Zap, Activity, DollarSign, PieChart } from 'lucide-react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function Home() {
    const [selectedCoin, setSelectedCoin] = useState('BTC');
    const [showBalance, setShowBalance] = useState(true);
    const [timeframe, setTimeframe] = useState('24h');

    const chartData = {
        labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
        datasets: [{
            label: 'Price',
            data: [42000, 41500, 43200, 44100, 42800, 45200, 43800],
            fill: true,
            backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                gradient.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
                gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
                return gradient;
            },
            borderColor: '#3B82F6',
            borderWidth: 2.5,
            pointBackgroundColor: '#ffffff',
            pointBorderColor: '#3B82F6',
            pointBorderWidth: 2,
            pointRadius: 3.5,
            pointHoverRadius: 5,
            tension: 0.4,
        }],
    };

    const volumeData = {
        labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
        datasets: [{
            label: 'Volume',
            data: [24, 18, 32, 28, 35, 22, 26],
            backgroundColor: 'rgba(59, 130, 246, 0.15)',
            borderColor: '#3B82F6',
            borderRadius: 6,
            borderWidth: 0,
        }],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                titleColor: '#1e293b',
                bodyColor: '#64748b',
                borderColor: 'rgba(59, 130, 246, 0.3)',
                borderWidth: 1,
                padding: 12,
                boxPadding: 6,
                usePointStyle: true,
                titleFont: { family: 'Inter', size: 12, weight: 'bold' },
                bodyFont: { family: 'Inter', size: 11 },
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                grid: { color: 'rgba(226, 232, 240, 0.6)', drawBorder: false },
                ticks: { color: '#94a3b8', font: { family: 'Inter', size: 10 } }
            },
            x: {
                grid: { display: false },
                ticks: { color: '#94a3b8', font: { family: 'Inter', size: 10 } }
            }
        },
        interaction: { mode: 'index', intersect: false }
    };

    const portfolioData = [
        { symbol: 'BTC', name: 'Bitcoin', amount: 0.5432, value: '$23,156.80', change: '+2.5%', icon: 'â‚¿', color: 'from-orange-400 to-orange-600' },
        { symbol: 'ETH', name: 'Ethereum', amount: 8.234, value: '$18,526.65', change: '+1.8%', icon: 'Îž', color: 'from-blue-400 to-purple-600' },
        { symbol: 'SOL', name: 'Solana', amount: 125.5, value: '$11,922.50', change: '+5.2%', icon: 'â—Ž', color: 'from-green-400 to-cyan-600' },
        { symbol: 'BNB', name: 'Binance Coin', amount: 3.2, value: '$1,024.00', change: '-0.8%', icon: 'â¬¡', color: 'from-yellow-400 to-orange-500' },
    ];

    const tradingPairs = [
        { pair: 'BTC/USDT', price: '43,250.50', change: '+2.45%', high: '44,100', low: '42,800', volume: '125.3M', trend: true },
        { pair: 'ETH/USDT', price: '2,250.30', change: '+1.82%', high: '2,320', low: '2,210', volume: '87.5M', trend: true },
        { pair: 'SOL/USDT', price: '95.42', change: '+5.23%', high: '96.5', low: '91.2', volume: '64.2M', trend: true },
        { pair: 'BNB/USDT', price: '320.50', change: '-0.85%', high: '328.90', low: '318.20', volume: '45.8M', trend: false },
        { pair: 'ADA/USDT', price: '0.9820', change: '+3.45%', high: '0.998', low: '0.951', volume: '32.1M', trend: true },
        { pair: 'XRP/USDT', price: '2.4520', change: '+1.25%', high: '2.532', low: '2.425', volume: '28.5M', trend: true },
    ];

    const orderBook = {
        bids: [
            { price: '43,240', amount: '2.5', total: '108,100' },
            { price: '43,230', amount: '1.8', total: '77,814' },
            { price: '43,220', amount: '3.2', total: '138,304' },
            { price: '43,210', amount: '2.1', total: '90,741' },
            { price: '43,200', amount: '4.5', total: '194,400' },
        ],
        asks: [
            { price: '43,260', amount: '1.9', total: '82,194' },
            { price: '43,270', amount: '2.3', total: '99,521' },
            { price: '43,280', amount: '3.5', total: '151,480' },
            { price: '43,290', amount: '2.7', total: '116,883' },
            { price: '43,300', amount: '5.2', total: '225,160' },
        ]
    };

    const recentTrades = [
        { time: '14:32:45', pair: 'BTC/USDT', type: 'BUY', price: '43,245', amount: '0.5', total: '21,622.50', maker: false },
        { time: '14:32:12', pair: 'ETH/USDT', type: 'SELL', price: '2,248', amount: '5.0', total: '11,240', maker: true },
        { time: '14:31:58', pair: 'BTC/USDT', type: 'BUY', price: '43,250', amount: '1.2', total: '51,900', maker: false },
        { time: '14:31:22', pair: 'SOL/USDT', type: 'BUY', price: '95.35', amount: '100', total: '9,535', maker: true },
        { time: '14:30:45', pair: 'ETH/USDT', type: 'BUY', price: '2,250', amount: '3.5', total: '7,875', maker: false },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-slate-900">Crypto Trading Dashboard</h1>
                        <p className="text-slate-700 text-sm mt-1">Real-time market data & portfolio tracking</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button onClick={() => setShowBalance(!showBalance)} className="backdrop-blur-xl bg-white/70 hover:bg-white/90 border border-white/60 text-slate-700 px-4 py-2.5 rounded-2xl font-medium transition-all flex items-center gap-2 shadow-lg shadow-blue-200/30">
                            {showBalance ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                            {showBalance ? 'Hide' : 'Show'}
                        </button>
                        <button className="backdrop-blur-xl bg-blue-500/20 hover:bg-blue-500/30 border border-blue-300/50 text-blue-700 px-4 py-2.5 rounded-2xl font-medium transition-all shadow-lg shadow-blue-200/40">Trade</button>
                    </div>
                </div>

                {/* Portfolio Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 border border-white/80 rounded-3xl p-6 hover:border-white/90 hover:shadow-2xl hover:shadow-blue-200/40 transition-all shadow-xl shadow-blue-100/40">
                        <p className="text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">Total Balance</p>
                        <h2 className="text-3xl font-bold text-slate-900">{showBalance ? '$54,630.15' : 'â€¢â€¢â€¢â€¢â€¢â€¢'}</h2>
                        <p className="text-emerald-600 text-sm font-semibold mt-3 flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" /> +2.8% (24h)
                        </p>
                    </div>

                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 border border-white/80 rounded-3xl p-6 hover:border-white/90 hover:shadow-2xl hover:shadow-blue-200/40 transition-all shadow-xl shadow-blue-100/40">
                        <p className="text-slate-600 text-xs font-bold uppercase tracking-wider mb-2">24h Volume</p>
                        <h2 className="text-3xl font-bold text-slate-900">$2.45B</h2>
                        <p className="text-emerald-600 text-sm font-semibold mt-3 flex items-center gap-1">
                            <Activity className="w-4 h-4" /> +12.5% Peak
                        </p>
                    </div>

                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 border border-white/80 rounded-3xl p-6 hover:border-white/90 hover:shadow-2xl hover:shadow-blue-200/40 transition-all shadow-xl shadow-blue-100/40">
                        <p className="text-slate-600 text-xs font-bold uppercase tracking-wider mb-2">Market Cap</p>
                        <h2 className="text-3xl font-bold text-slate-900">$1.25T</h2>
                        <p className="text-blue-600 text-sm font-semibold mt-3 flex items-center gap-1">
                            <DollarSign className="w-4 h-4" /> +5.2% Weekly
                        </p>
                    </div>

                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 border border-white/80 rounded-3xl p-6 hover:border-white/90 hover:shadow-2xl hover:shadow-blue-200/40 transition-all shadow-xl shadow-blue-100/40">
                        <p className="text-slate-600 text-xs font-bold uppercase tracking-wider mb-2">Active Trades</p>
                        <h2 className="text-3xl font-bold text-slate-900">12</h2>
                        <p className="text-purple-600 text-sm font-semibold mt-3 flex items-center gap-1">
                            <Zap className="w-4 h-4" /> 8 Profitable
                        </p>
                    </div>
                </div>

                {/* Main Trading Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
                    {/* Price Chart */}
                    <div className="xl:col-span-2 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/40 border border-white/80 rounded-3xl p-7 shadow-2xl shadow-blue-200/40 hover:border-white/90 transition-all">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <div>
                                    <h3 className="text-slate-900 font-bold text-lg">BTC/USDT</h3>
                                    <p className="text-slate-700 text-sm">Bitcoin to Tether</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                {['15m', '1h', '4h', '1d'].map(tf => (
                                    <button
                                        key={tf}
                                        onClick={() => setTimeframe(tf)}
                                        className={`px-3 py-1 text-xs rounded-xl font-medium transition-all ${
                                            timeframe === tf
                                                ? 'bg-blue-500 text-slate-900 shadow-lg shadow-blue-300/50'
                                                : 'bg-white/50 text-slate-600 hover:bg-white/70 border border-white/60'
                                        }`}
                                    >
                                        {tf}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="h-72 mb-6">
                            <Line data={chartData} options={chartOptions} />
                        </div>
                        <div className="flex items-center justify-between border-t border-white/50 pt-4">
                            <div>
                                <p className="text-slate-800 text-xs mb-1">Current Price</p>
                                <p className="text-slate-900 text-2xl font-bold">$43,250.50</p>
                            </div>
                            <div className="text-right">
                                <p className="text-slate-800 text-xs mb-1">24h Change</p>
                                <p className="text-emerald-600 text-2xl font-bold">+2.45%</p>
                            </div>
                        </div>
                    </div>

                    {/* Volume & Portfolio */}
                    <div className="flex flex-col gap-6">
                        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/40 border border-white/80 rounded-3xl p-6 shadow-2xl shadow-blue-200/40 hover:border-white/90 transition-all">
                            <h4 className="text-slate-900 font-bold text-sm mb-4 flex items-center gap-2">
                                <Activity className="w-4 h-4" /> Volume (24h)
                            </h4>
                            <div className="h-40">
                                <Bar data={volumeData} options={chartOptions} />
                            </div>
                        </div>

                        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/40 border border-white/80 rounded-3xl p-6 shadow-2xl shadow-blue-200/40 hover:border-white/90 transition-all">
                            <h4 className="text-slate-900 font-bold text-sm mb-4 flex items-center gap-2">
                                <PieChart className="w-4 h-4" /> Top Holdings
                            </h4>
                            <div className="space-y-3">
                                {portfolioData.slice(0, 2).map((asset, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/50 transition-all">
                                        <div className="flex items-center gap-3 flex-1">
                                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${asset.color} flex items-center justify-center text-slate-900 font-bold text-sm`}>
                                                {asset.icon}
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-slate-900 text-xs font-bold">{asset.symbol}</p>
                                                <p className="text-slate-800 text-[0.65rem]">{asset.amount}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-slate-900 text-xs font-bold">{asset.value}</p>
                                            <p className="text-emerald-600 text-[0.65rem]">{asset.change}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trading Pairs & Order Book */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
                    {/* Trading Pairs */}
                    <div className="xl:col-span-2 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/40 border border-white/80 rounded-3xl p-7 shadow-2xl shadow-blue-200/40 hover:border-white/90 transition-all">
                        <h3 className="text-slate-900 font-bold text-lg mb-5">Trading Pairs</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b-2 border-white/60 bg-white/30">
                                        <th className="text-left text-slate-700 font-bold text-xs py-4 px-2">Pair</th>
                                        <th className="text-right text-slate-700 font-bold text-xs py-4 px-2">Price</th>
                                        <th className="text-right text-slate-700 font-bold text-xs py-4 px-2">Change</th>
                                        <th className="text-right text-slate-700 font-bold text-xs py-4 px-2">24h High</th>
                                        <th className="text-right text-slate-700 font-bold text-xs py-4 px-2">Volume</th>
                                        <th className="text-right text-slate-700 font-bold text-xs py-4 px-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tradingPairs.map((pair, idx) => (
                                        <tr key={idx} className="border-b border-white/50 hover:bg-white/50 transition-all group">
                                            <td className="py-3 px-2">
                                                <div className="flex items-center gap-2">
                                                    <Star className="w-3 h-3 text-slate-700 group-hover:text-yellow-500 transition-colors cursor-pointer" />
                                                    <span className="text-slate-900 font-semibold">{pair.pair}</span>
                                                </div>
                                            </td>
                                            <td className="text-right text-slate-900 font-bold px-2">${pair.price}</td>
                                            <td className={`text-right font-bold px-2 ${pair.trend ? 'text-emerald-600' : 'text-red-600'}`}>
                                                {pair.trend ? '+' : ''}{pair.change}
                                            </td>
                                            <td className="text-right text-slate-600 px-2">${pair.high}</td>
                                            <td className="text-right text-slate-700 px-2">${pair.volume}</td>
                                            <td className="text-right px-2">
                                                <button className="px-3 py-1 text-xs bg-blue-500/20 text-blue-700 rounded-lg hover:bg-blue-500/35 transition-all font-semibold border border-blue-300/60 shadow-md shadow-blue-200/20">Trade</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Order Book */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/40 border border-white/80 rounded-3xl p-7 shadow-2xl shadow-blue-200/40 hover:border-white/90 transition-all">
                        <h3 className="text-slate-900 font-bold text-lg mb-5">Order Book</h3>
                        <div className="grid grid-cols-2 gap-5 mb-5">
                            <div>
                                <p className="text-slate-700 text-xs font-bold mb-3 uppercase">Bids (BUY)</p>
                                <div className="space-y-2">
                                    {orderBook.bids.map((bid, idx) => (
                                        <div key={idx} className="flex items-end justify-between text-[0.65rem] relative group">
                                            <div className="absolute inset-0 bg-emerald-500/15 -ml-2 group-hover:bg-emerald-500/25 transition-all rounded" style={{ width: `${(parseFloat(bid.amount) / 5) * 100}%` }}></div>
                                            <div className="relative z-10">
                                                <p className="text-emerald-600 font-bold">${bid.price}</p>
                                                <p className="text-slate-800">{bid.amount}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-slate-700 text-xs font-bold mb-3 uppercase">Asks (SELL)</p>
                                <div className="space-y-2">
                                    {orderBook.asks.map((ask, idx) => (
                                        <div key={idx} className="flex items-end justify-between text-[0.65rem] relative group">
                                            <div className="absolute inset-0 bg-red-500/15 -ml-2 group-hover:bg-red-500/25 transition-all rounded" style={{ width: `${(parseFloat(ask.amount) / 5.5) * 100}%` }}></div>
                                            <div className="relative z-10">
                                                <p className="text-red-600 font-bold">${ask.price}</p>
                                                <p className="text-slate-800">{ask.amount}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-white/60 pt-4">
                            <p className="text-slate-600 text-xs font-bold mb-2">Spread</p>
                            <div className="flex items-center justify-between">
                                <span className="text-red-600 font-bold">43,260</span>
                                <span className="text-slate-800 text-xs">20 USDT</span>
                                <span className="text-emerald-600 font-bold">43,240</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Trades */}
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/40 border border-white/80 rounded-3xl p-7 shadow-2xl shadow-blue-200/40 hover:border-white/90 transition-all">
                    <h3 className="text-slate-900 font-bold text-lg mb-5">Recent Trades</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b-2 border-white/60 bg-white/30">
                                    <th className="text-left text-slate-700 font-bold text-xs py-4 px-2">Time</th>
                                    <th className="text-left text-slate-700 font-bold text-xs py-4 px-2">Pair</th>
                                    <th className="text-left text-slate-700 font-bold text-xs py-4 px-2">Type</th>
                                    <th className="text-right text-slate-700 font-bold text-xs py-4 px-2">Price</th>
                                    <th className="text-right text-slate-700 font-bold text-xs py-4 px-2">Amount</th>
                                    <th className="text-right text-slate-700 font-bold text-xs py-4 px-2">Total</th>
                                    <th className="text-center text-slate-700 font-bold text-xs py-4 px-2">Fee</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentTrades.map((trade, idx) => (
                                    <tr key={idx} className="border-b border-white/50 hover:bg-white/50 transition-all">
                                        <td className="py-3 px-2 text-slate-700">{trade.time}</td>
                                        <td className="text-slate-900 font-semibold px-2">{trade.pair}</td>
                                        <td className="py-3 px-2">
                                            <span className={`px-2 py-0.5 rounded text-xs font-bold ${trade.type === 'BUY' ? 'bg-emerald-500/20 text-emerald-700' : 'bg-red-500/20 text-red-700'}`}>
                                                {trade.type}
                                            </span>
                                        </td>
                                        <td className="text-right text-slate-900 font-bold px-2">${trade.price}</td>
                                        <td className="text-right text-slate-700 px-2">{trade.amount}</td>
                                        <td className="text-right text-slate-900 px-2">${trade.total}</td>
                                        <td className="text-center">
                                            <span className="text-slate-600 text-xs">{trade.maker ? 'Maker' : 'Taker'}</span>
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
}
