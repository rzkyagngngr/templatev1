import React from 'react';
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
import { Line } from 'react-chartjs-2';

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
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [{
            label: 'Revenue',
            data: [12, 19, 15, 25, 22, 30, 28, 35, 20, 40],
            fill: true,
            backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                gradient.addColorStop(0, 'rgba(14, 165, 233, 0.5)');
                gradient.addColorStop(1, 'rgba(14, 165, 233, 0)');
                return gradient;
            },
            borderColor: '#0ea5e9',
            borderWidth: 3,
            pointBackgroundColor: '#ffffff',
            pointBorderColor: '#0ea5e9',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6,
            tension: 0.4,
        }],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                titleColor: '#111827',
                bodyColor: '#6B7280',
                borderColor: '#E5E7EB',
                borderWidth: 1,
                padding: 10,
                boxPadding: 4,
                usePointStyle: true,
                titleFont: { family: 'Inter', size: 13 },
                bodyFont: { family: 'Inter', size: 13 },
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: '#F3F4F6', drawBorder: false },
                ticks: { color: '#9CA3AF', font: { family: 'Inter', size: 11 } }
            },
            x: {
                grid: { display: false },
                ticks: { color: '#9CA3AF', font: { family: 'Inter', size: 11 } }
            }
        },
        interaction: { mode: 'index', intersect: false }
    };

    return (
        <div className="space-y-6">
            <header className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-textPrimary to-secondary">Dashboard</h2>
                    <p className="text-tertiary text-sm mt-1">Welcome back, Admin</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white/40 border border-white/40 rounded-lg text-sm font-medium text-textPrimary hover:bg-white/60 transition shadow-sm">
                        <span className="material-icons-round text-base">cloud_download</span> Export
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition shadow-md shadow-primary/20">
                        <span className="material-icons-round text-base">add</span> New Report
                    </button>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: "Total Revenue", value: "$54,239", trend: "+12.5%", trendUp: true, icon: "payments", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                    { title: "Active Users", value: "2,345", trend: "+5.2%", trendUp: true, icon: "people", color: "text-blue-500", bg: "bg-blue-500/10" },
                    { title: "New Orders", value: "1,234", trend: "-2.4%", trendUp: false, icon: "shopping_cart", color: "text-orange-500", bg: "bg-orange-500/10" },
                ].map((stat, i) => (
                    <div key={i} className="glass-card flex items-center justify-between">
                        <div>
                            <p className="text-tertiary text-xs font-semibold uppercase tracking-wider">{stat.title}</p>
                            <h3 className="text-2xl font-bold text-textPrimary mt-1">{stat.value}</h3>
                            <p className={`text-xs mt-1 flex items-center gap-1 font-medium ${stat.trendUp ? 'text-emerald-500' : 'text-red-500'}`}>
                                <span className="material-icons-round text-sm">{stat.trendUp ? 'trending_up' : 'trending_down'}</span>
                                {stat.trend} <span className="text-tertiary font-normal">from last month</span>
                            </p>
                        </div>
                        <div className={`p-3 rounded-xl ${stat.bg}`}>
                            <span className={`material-icons-round text-2xl ${stat.color}`}>{stat.icon}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6">
                <div className="glass-card flex flex-col min-h-[400px]">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-textPrimary">Revenue Overview</h3>
                        <select className="bg-black/5 border-none text-xs rounded-lg px-2 py-1 outline-none">
                            <option>This Year</option>
                            <option>Last Year</option>
                        </select>
                    </div>
                    <div className="flex-1 relative w-full h-full">
                        <Line data={chartData} options={chartOptions} />
                    </div>
                </div>

                <div className="glass-card flex flex-col justify-between bg-gradient-to-br from-indigo-500 to-purple-600 text-white !border-none">
                    <div>
                        <div className="flex justify-between items-start opacity-80">
                            <span className="text-sm font-medium">Total Balance</span>
                            <span className="material-icons-round bg-white/20 p-1.5 rounded-lg">more_horiz</span>
                        </div>
                        <h2 className="text-3xl font-bold mt-2">$24,562.00</h2>
                        <div className="mt-6 flex gap-3">
                            <button className="flex-1 py-2 bg-white/20 rounded-xl text-sm font-medium backdrop-blur-sm hover:bg-white/30 transition">Deposit</button>
                            <button className="flex-1 py-2 bg-white/20 rounded-xl text-sm font-medium backdrop-blur-sm hover:bg-white/30 transition">Send</button>
                        </div>
                    </div>
                    <div className="mt-8">
                        <p className="text-sm opacity-80 mb-3">Recent Transfers</p>
                        <div className="space-y-3">
                            {[
                                { name: "John Doe", time: "2m ago", amount: "+$500", img: "1" },
                                { name: "Sarah Smith", time: "1h ago", amount: "-$120", img: "2" },
                                { name: "Mike Johnson", time: "3h ago", amount: "+$1,250", img: "3" },
                            ].map((t, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <img src={`https://i.pravatar.cc/150?img=${t.img}`} className="w-8 h-8 rounded-full border border-white/30" alt={t.name} />
                                        <div>
                                            <p className="text-sm font-medium">{t.name}</p>
                                            <p className="text-[0.65rem] opacity-70">{t.time}</p>
                                        </div>
                                    </div>
                                    <span className={`text-sm font-bold ${t.amount.startsWith('+') ? 'text-emerald-300' : 'text-white'}`}>{t.amount}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity & History */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="glass-card">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-textPrimary">Recent Activity</h3>
                        <a href="#" className="text-xs text-primary font-medium hover:underline">View All</a>
                    </div>
                    <div className="space-y-4">
                        {[
                            { title: "Project Alpha", desc: "Milestone completed", time: "Just now", icon: "assignment_turned_in", color: "bg-blue-500/10 text-blue-500" },
                            { title: "Client Meeting", desc: "Discussing new features", time: "2h ago", icon: "videocam", color: "bg-purple-500/10 text-purple-500" },
                            { title: "Server Maintenance", desc: "Scheduled downtime", time: "Yesterday", icon: "dns", color: "bg-orange-500/10 text-orange-500" },
                        ].map((activity, i) => (
                            <div key={i} className="flex gap-4 p-3 hover:bg-black/5 rounded-xl transition">
                                <div className={`p-2.5 rounded-xl h-fit ${activity.color}`}>
                                    <span className="material-icons-round text-lg">{activity.icon}</span>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-textPrimary">{activity.title}</h4>
                                    <p className="text-xs text-secondary mt-0.5">{activity.desc}</p>
                                    <span className="text-[0.65rem] text-tertiary mt-1 block">{activity.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-card">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-textPrimary">Transaction History</h3>
                        <button className="p-1 hover:bg-black/5 rounded-lg text-tertiary">
                            <span className="material-icons-round text-lg">filter_list</span>
                        </button>
                    </div>
                    <table className="clean-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Recipient</th>
                                <th>Status</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { id: "#TRX-9982", name: "Amazon AWS", status: "Completed", amount: "-$125.00", statusColor: "text-emerald-500 bg-emerald-500/10" },
                                { id: "#TRX-9981", name: "Spotify", status: "Pending", amount: "-$12.99", statusColor: "text-orange-500 bg-orange-500/10" },
                                { id: "#TRX-9980", name: "Client Payment", status: "Completed", amount: "+$2,500.00", statusColor: "text-emerald-500 bg-emerald-500/10" },
                                { id: "#TRX-9979", name: "Adobe Creative", status: "Failed", amount: "-$54.99", statusColor: "text-red-500 bg-red-500/10" },
                            ].map((trx, i) => (
                                <tr key={i} className="hover:bg-black/[0.02] transition">
                                    <td className="font-medium text-textPrimary">{trx.id}</td>
                                    <td>{trx.name}</td>
                                    <td>
                                        <span className={`px-2 py-0.5 rounded text-[0.65rem] font-bold uppercase ${trx.statusColor}`}>{trx.status}</span>
                                    </td>
                                    <td className={trx.amount.startsWith('+') ? 'text-emerald-600 font-bold' : ''}>{trx.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Market Overview */}
            <div className="glass-card">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-textPrimary">Market Overview</h3>
                    <button className="text-xs bg-black/5 px-2 py-1 rounded-lg">View All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="clean-table min-w-[600px]">
                        <thead>
                            <tr>
                                <th>Asset</th>
                                <th>Price</th>
                                <th>Change (24h)</th>
                                <th>Market Cap</th>
                                <th>Volume</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: "Bitcoin", symbol: "BTC", price: "$42,500.00", change: "+2.5%", cap: "$850B", vol: "$32B", color: "text-emerald-500" },
                                { name: "Ethereum", symbol: "ETH", price: "$2,250.00", change: "-1.2%", cap: "$280B", vol: "$15B", color: "text-red-500" },
                                { name: "Solana", symbol: "SOL", price: "$95.00", change: "+8.4%", cap: "$45B", vol: "$4B", color: "text-emerald-500" },
                            ].map((coin, i) => (
                                <tr key={i}>
                                    <td className="flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[0.6rem] font-bold text-primary">{coin.symbol[0]}</span>
                                        <span className="font-bold text-textPrimary">{coin.name}</span>
                                        <span className="text-xs text-tertiary">{coin.symbol}</span>
                                    </td>
                                    <td className="font-medium">{coin.price}</td>
                                    <td className={coin.color}>{coin.change}</td>
                                    <td>{coin.cap}</td>
                                    <td>{coin.vol}</td>
                                    <td>
                                        <button className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-lg hover:bg-primary hover:text-white transition">Trade</button>
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
