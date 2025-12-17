import React, { useState } from 'react';
import {
    AlertCircle, CheckCircle2, Clock, MessageSquare, Users,
    TrendingUp, Phone, Mail, Activity, Zap
} from 'lucide-react';

export default function HelpdeskDashboard() {
    const [filter, setFilter] = useState('all');

    const stats = [
        { label: 'Open Tickets', value: '45', icon: AlertCircle, color: 'text-red-600', bgColor: 'bg-red-500/20', trend: '+12%' },
        { label: 'Resolved Today', value: '28', icon: CheckCircle2, color: 'text-emerald-600', bgColor: 'bg-emerald-500/20', trend: '+5%' },
        { label: 'Avg Response', value: '2.4m', icon: Clock, color: 'text-blue-600', bgColor: 'bg-blue-500/20', trend: '-0.3m' },
        { label: 'Active Agents', value: '12', icon: Users, color: 'text-purple-600', bgColor: 'bg-purple-500/20', trend: 'Online' },
    ];

    const ticketCategories = [
        { name: 'Technical Support', count: 28, percent: 35, color: 'bg-blue-500' },
        { name: 'Billing', count: 15, percent: 19, color: 'bg-green-500' },
        { name: 'General Inquiry', count: 20, percent: 25, color: 'bg-purple-500' },
        { name: 'Feature Request', count: 17, percent: 21, color: 'bg-orange-500' },
    ];

    const recentTickets = [
        { id: '#TKT001', customer: 'John Doe', subject: 'Cannot login to account', priority: 'High', status: 'Open', date: '5m ago' },
        { id: '#TKT002', customer: 'Jane Smith', subject: 'Billing inquiry', priority: 'Medium', status: 'In Progress', date: '15m ago' },
        { id: '#TKT003', customer: 'Mike Wilson', subject: 'Feature request', priority: 'Low', status: 'Resolved', date: '1h ago' },
        { id: '#TKT004', customer: 'Sarah Brown', subject: 'Payment failed', priority: 'High', status: 'Open', date: '2h ago' },
    ];

    const agents = [
        { name: 'Alice Johnson', status: 'Online', tickets: 8, rating: 4.8 },
        { name: 'Bob Smith', status: 'Online', tickets: 6, rating: 4.6 },
        { name: 'Carol Davis', status: 'Away', tickets: 0, rating: 4.9 },
        { name: 'David Lee', status: 'Online', tickets: 5, rating: 4.7 },
    ];

    const getPriorityColor = (priority) => {
        switch(priority) {
            case 'High': return 'bg-red-500/20 text-red-700';
            case 'Medium': return 'bg-yellow-500/20 text-yellow-700';
            case 'Low': return 'bg-green-500/20 text-green-700';
            default: return 'bg-slate-500/20 text-slate-700';
        }
    };

    const getStatusBadge = (status) => {
        switch(status) {
            case 'Open': return 'bg-red-500/20 text-red-700';
            case 'In Progress': return 'bg-blue-500/20 text-blue-700';
            case 'Resolved': return 'bg-emerald-500/20 text-emerald-700';
            default: return 'bg-slate-500/20 text-slate-700';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-slate-900">Helpdesk Dashboard</h1>
                    <p className="text-slate-600 mt-2">Support team performance and ticket management</p>
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
                                        <p className="text-emerald-600 text-xs font-semibold mt-2">{stat.trend}</p>
                                    </div>
                                    <div className={`${stat.bgColor} p-3 rounded-xl`}>
                                        <Icon className={`w-6 h-6 ${stat.color}`} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Charts & Categories */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Ticket Distribution */}
                    <div className="lg:col-span-2 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/40 border border-white/80 rounded-3xl p-7 shadow-2xl shadow-blue-200/40">
                        <h3 className="text-slate-900 font-bold text-lg mb-6">Ticket Categories</h3>
                        <div className="space-y-4">
                            {ticketCategories.map((cat, idx) => (
                                <div key={idx}>
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-slate-700 font-semibold text-sm">{cat.name}</p>
                                        <span className="text-slate-600 text-xs font-bold">{cat.count} ({cat.percent}%)</span>
                                    </div>
                                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                        <div className={`${cat.color} h-full rounded-full transition-all`} style={{ width: `${cat.percent}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="space-y-4">
                        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 border border-white/80 rounded-3xl p-6 hover:border-white/90 hover:shadow-2xl hover:shadow-blue-200/40 transition-all shadow-xl shadow-blue-100/40">
                            <div className="flex items-center gap-2 mb-3">
                                <Activity className="w-5 h-5 text-blue-600" />
                                <p className="text-slate-600 text-sm font-semibold">CSAT Score</p>
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900">4.7/5</h3>
                            <p className="text-emerald-600 text-xs font-semibold mt-2">+0.2 from last week</p>
                        </div>
                        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 border border-white/80 rounded-3xl p-6 hover:border-white/90 hover:shadow-2xl hover:shadow-blue-200/40 transition-all shadow-xl shadow-blue-100/40">
                            <div className="flex items-center gap-2 mb-3">
                                <Zap className="w-5 h-5 text-purple-600" />
                                <p className="text-slate-600 text-sm font-semibold">Resolution Rate</p>
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900">89%</h3>
                            <p className="text-emerald-600 text-xs font-semibold mt-2">↑ 3% improvement</p>
                        </div>
                    </div>
                </div>

                {/* Recent Tickets & Agents */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Recent Tickets */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/40 border border-white/80 rounded-3xl p-7 shadow-2xl shadow-blue-200/40">
                        <div className="flex items-center justify-between mb-5">
                            <h3 className="text-slate-900 font-bold text-lg">Recent Tickets</h3>
                            <select 
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="px-3 py-1 text-sm bg-white/50 border border-white/60 rounded-lg text-slate-700"
                            >
                                <option value="all">All</option>
                                <option value="open">Open</option>
                                <option value="resolved">Resolved</option>
                            </select>
                        </div>
                        <div className="space-y-3">
                            {recentTickets.map((ticket) => (
                                <div key={ticket.id} className="p-3 bg-white/30 rounded-xl hover:bg-white/50 transition-all">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex-1">
                                            <p className="text-slate-900 font-semibold text-sm">{ticket.id} · {ticket.customer}</p>
                                            <p className="text-slate-600 text-xs mt-1">{ticket.subject}</p>
                                        </div>
                                        <span className={`text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap ${getStatusBadge(ticket.status)}`}>
                                            {ticket.status}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className={`text-xs font-bold px-2 py-1 rounded-lg ${getPriorityColor(ticket.priority)}`}>
                                            {ticket.priority}
                                        </span>
                                        <p className="text-slate-500 text-xs">{ticket.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Support Agents */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/40 border border-white/80 rounded-3xl p-7 shadow-2xl shadow-blue-200/40">
                        <h3 className="text-slate-900 font-bold text-lg mb-5">Support Agents</h3>
                        <div className="space-y-3">
                            {agents.map((agent, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 bg-white/30 rounded-xl hover:bg-white/50 transition-all">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${agent.status === 'Online' ? 'bg-emerald-500' : 'bg-slate-400'}`}></div>
                                            <p className="text-slate-900 font-semibold text-sm">{agent.name}</p>
                                        </div>
                                        <p className="text-slate-500 text-xs mt-1">{agent.tickets} active tickets</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-slate-900 font-bold text-sm">{agent.rating}/5</p>
                                        <p className="text-yellow-500 text-xs font-semibold">★ Rating</p>
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
