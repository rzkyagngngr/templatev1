import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import PillLayout from '../components/PillLayout';
import DataTable from '../components/DataTable';
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
    Filler
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
    Filler
);

// --- Sub-View: Index (Dashboard) ---
const IndexView = () => {
    // Reusing the main dashboard vibe but focused on Crypto
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { coin: 'Bitcoin', symbol: 'BTC', price: '$48,254.00', change: '+2.5%', color: 'from-orange-500 to-amber-500' },
                    { coin: 'Ethereum', symbol: 'ETH', price: '$3,542.40', change: '+1.2%', color: 'from-indigo-500 to-purple-500' },
                    { coin: 'Ripple', symbol: 'XRP', price: '$1.45', change: '-5.2%', color: 'from-blue-500 to-cyan-500' },
                    { coin: 'Litecoin', symbol: 'LTC', price: '$180.20', change: '+0.5%', color: 'from-sky-500 to-blue-500' },
                ].map((c, i) => (
                    <div key={i} className="glass-card p-4 relative overflow-hidden">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${c.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                                    {c.symbol[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-textPrimary">{c.coin}</h4>
                                    <span className="text-xs text-tertiary">{c.symbol}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-end">
                            <h3 className="text-xl font-bold text-textPrimary">{c.price}</h3>
                            <span className={`text-xs font-semibold ${c.change.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>{c.change}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 glass-card p-6 min-h-[300px] flex items-center justify-center text-tertiary">
                    {/* Placeholder for Main Chart */}
                    <div className="text-center">
                        <span className="material-icons-round text-5xl mb-2 opacity-20">show_chart</span>
                        <p>Market Overview Chart</p>
                    </div>
                </div>
                <div className="glass-card p-6">
                    <h3 className="font-bold text-textPrimary mb-4">Recent Transactions</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                        <span className="material-icons-round text-sm">arrow_downward</span>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-textPrimary">Received BTC</div>
                                        <div className="text-xs text-tertiary">Today, 10:20 AM</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-bold text-emerald-500">+0.005 BTC</div>
                                    <div className="text-xs text-tertiary">$245.50</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Sub-View: Exchange ---
const ExchangeView = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Order Book */}
            <div className="glass-card p-0 flex flex-col h-[500px]">
                <div className="p-4 border-b border-white/10 font-bold text-textPrimary">Order Book</div>
                <div className="flex-1 overflow-y-auto p-2">
                    <table className="w-full text-xs">
                        <thead>
                            <tr className="text-tertiary">
                                <th className="text-left py-2">Price (USDT)</th>
                                <th className="text-right py-2">Amount (BTC)</th>
                                <th className="text-right py-2">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(10)].map((_, i) => (
                                <tr key={`ask-${i}`} className="hover:bg-white/5 cursor-pointer text-rose-500">
                                    <td className="py-1">48,{(250 + i * 5).toLocaleString()}</td>
                                    <td className="text-right text-textPrimary">0.{(i + 1) * 34}</td>
                                    <td className="text-right text-tertiary">12.54</td>
                                </tr>
                            ))}
                            <tr className="border-y border-white/10">
                                <td colSpan="3" className="py-3 text-center text-lg font-bold text-textPrimary">48,254.00 <span className="text-emerald-500 text-xs">↑</span></td>
                            </tr>
                            {[...Array(10)].map((_, i) => (
                                <tr key={`bid-${i}`} className="hover:bg-white/5 cursor-pointer text-emerald-500">
                                    <td className="py-1">48,{(240 - i * 5).toLocaleString()}</td>
                                    <td className="text-right text-textPrimary">0.{(i + 2) * 12}</td>
                                    <td className="text-right text-tertiary">8.42</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Trading Form */}
            <div className="lg:col-span-2 space-y-6">
                <div className="glass-card p-6">
                    <div className="flex gap-4 mb-6">
                        <button className="flex-1 py-2 bg-emerald-500 text-white rounded-lg font-bold shadow-lg shadow-emerald-500/20">Buy BTC</button>
                        <button className="flex-1 py-2 bg-white/5 text-tertiary hover:bg-white/10 rounded-lg font-bold">Sell BTC</button>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-medium text-tertiary mb-1">Price (USDT)</label>
                            <div className="relative">
                                <input type="text" value="48,254.00" className="w-full bg-black/5 border border-white/10 rounded-lg py-2 pl-3 pr-10 text-textPrimary outline-none focus:border-primary/50" />
                                <span className="absolute right-3 top-2 text-xs text-tertiary">USDT</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-tertiary mb-1">Amount (BTC)</label>
                            <div className="relative">
                                <input type="text" placeholder="0.00" className="w-full bg-black/5 border border-white/10 rounded-lg py-2 pl-3 pr-10 text-textPrimary outline-none focus:border-primary/50" />
                                <span className="absolute right-3 top-2 text-xs text-tertiary">BTC</span>
                            </div>
                        </div>
                        <div className="flex justify-between text-xs text-tertiary">
                            <span>Available: <b className="text-textPrimary">2,450.00 USDT</b></span>
                            <span>Max Buy: <b className="text-textPrimary">0.05 BTC</b></span>
                        </div>
                        <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-bold transition mt-4">
                            Buy BTC
                        </button>
                    </div>
                </div>

                {/* Open Orders Placeholder */}
                <div className="glass-card p-6">
                    <h3 className="font-bold text-textPrimary mb-4">Open Orders</h3>
                    <div className="text-center py-8 text-tertiary text-sm">No open orders</div>
                </div>
            </div>
        </div>
    );
};

// --- Sub-View: Wallet ---
const WalletView = () => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Main Balance Card */}
                <div className="md:col-span-2 glass-card p-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <span className="text-blue-200 text-sm font-medium">Estimated Balance</span>
                        <h2 className="text-4xl font-bold mt-1">$42,593.00</h2>
                        <div className="mt-8 flex gap-4">
                            <button className="px-6 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-lg font-medium transition">Deposit</button>
                            <button className="px-6 py-2 bg-black/20 hover:bg-black/30 backdrop-blur-md rounded-lg font-medium transition">Withdraw</button>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                </div>

                {/* Asset List */}
                <div className="glass-card p-0 overflow-hidden">
                    <div className="p-4 border-b border-white/10 font-bold text-textPrimary">Assets</div>
                    <div className="divide-y divide-white/5">
                        {[
                            { s: 'BTC', n: 'Bitcoin', v: '0.45', u: '$21,500' },
                            { s: 'ETH', n: 'Ethereum', v: '4.20', u: '$14,200' },
                            { s: 'USDT', n: 'Tether', v: '6,893', u: '$6,893' },
                        ].map((c, i) => (
                            <div key={i} className="flex justify-between items-center p-4 hover:bg-white/5 transition">
                                <div>
                                    <div className="font-bold text-textPrimary">{c.s}</div>
                                    <div className="text-xs text-tertiary">{c.n}</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-textPrimary">{c.v}</div>
                                    <div className="text-xs text-tertiary">{c.u}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Sub-View: News ---
const NewsView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
            <div key={i} className="glass-card p-0 overflow-hidden flex flex-col">
                <div className="h-40 bg-black/10 w-full animate-pulse"></div>
                <div className="p-4 flex-1 flex flex-col">
                    <span className="text-xs text-primary font-bold mb-2">CRYPTO</span>
                    <h3 className="font-bold text-lg text-textPrimary mb-2">Bitcoin hits new all-time high amidst global adoption</h3>
                    <p className="text-sm text-tertiary flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt...</p>
                    <div className="mt-4 text-xs text-secondary">2 hours ago</div>
                </div>
            </div>
        ))}
    </div>
);

// --- Sub-View: ICO ---
const ICOView = () => (
    <div className="glass-card p-6 flex items-center justify-center h-64 text-tertiary">
        <p>ICO List Feature - Coming Soon</p>
    </div>
);

// --- Sub-View: Settings ---
const SettingsView = () => (
    <div className="glass-card p-6 max-w-2xl mx-auto">
        <h3 className="text-lg font-bold text-textPrimary mb-6">Crypto Settings</h3>
        <div className="space-y-4">
            <div className="flex justify-between items-center p-4 border border-white/10 rounded-xl">
                <div>
                    <div className="font-medium text-textPrimary">Default Currency</div>
                    <div className="text-xs text-tertiary">Select your preferred display currency</div>
                </div>
                <select className="bg-black/5 border-none rounded-lg px-3 py-1 text-sm outline-none text-textPrimary">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                </select>
            </div>
            <div className="flex justify-between items-center p-4 border border-white/10 rounded-xl">
                <div>
                    <div className="font-medium text-textPrimary">Price Alerts</div>
                    <div className="text-xs text-tertiary">Receive notifications for price changes</div>
                </div>
                <div className="w-10 h-6 bg-emerald-500 rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
            </div>
        </div>
    </div>
);


export default function Crypto() {
    const [activePill, setActivePill] = useState('index');

    const pills = [
        { id: 'index', label: 'Dashboard' },
        { id: 'exchange', label: 'Exchange' },
        { id: 'wallet', label: 'Wallet' },
        { id: 'news', label: 'News' },
        { id: 'ico', label: 'ICO List' },
        { id: 'settings', label: 'Settings' }
    ];

    const renderView = () => {
        switch (activePill) {
            case 'index': return <IndexView />;
            case 'exchange': return <ExchangeView />;
            case 'wallet': return <WalletView />;
            case 'news': return <NewsView />;
            case 'ico': return <ICOView />;
            case 'settings': return <SettingsView />;
            default: return <IndexView />;
        }
    };

    return (
        <PillLayout
            title="Crypto"
            bills={pills}
            activePill={activePill}
            onPillChange={setActivePill}
        >
            {renderView()}
        </PillLayout>
    );
}
