import React from 'react';

export default function Dashboard() {
    return (
        <div className="w-full space-y-6">
            {/* Header / Breadcrumb */}
            <div className="flex justify-between items-center">
                <h4 className="text-xl font-bold text-white tracking-wide">Dashboard</h4>
                <div className="text-sm text-slate-400">
                    <span className="hover:text-white cursor-pointer">Metrica</span>
                    <span className="mx-2">/</span>
                    <span className="hover:text-white cursor-pointer">CRM</span>
                    <span className="mx-2">/</span>
                    <span className="text-white">Dashboard</span>
                </div>
            </div>

            {/* Top Row: Stats & Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Stats Card */}
                <div className="lg:col-span-2 glass-card p-6 relative overflow-hidden">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h4 className="text-lg font-bold text-white">Leads And Vendors</h4>
                            <p className="text-slate-400 text-xs mt-1">This Month</p>
                        </div>
                        <div className="p-2 bg-white/5 rounded-lg">
                            <span className="material-icons-round text-slate-300">more_horiz</span>
                        </div>
                    </div>

                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
                            <span className="material-icons-round text-green-400">phone_in_talk</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white flex items-center">
                                76% <span className="text-sm font-normal text-slate-400 ml-2">Deals Successful</span>
                                <span className="material-icons-round text-green-400 text-sm ml-1">check_circle</span>
                            </h3>
                            <p className="text-slate-400 text-sm">Performance against target for this month.</p>
                        </div>
                    </div>

                    {/* Placeholder for Chart */}
                    <div className="h-48 w-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl border border-white/5 flex items-center justify-center relative">
                        <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end justify-between px-4 pb-2 gap-2 opacity-50">
                            {[40, 60, 45, 70, 50, 65, 55, 80, 60, 75, 50, 65].map((h, i) => (
                                <div key={i} className="w-full bg-blue-400/30 rounded-t-sm" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                        <span className="text-white/30 text-sm font-medium">Chart Visualization</span>
                    </div>
                </div>

                {/* Side Stats */}
                <div className="space-y-6">
                    <div className="glass-card p-6 flex items-center justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white">60k</h3>
                            <p className="text-slate-400 text-xs uppercase tracking-wider mt-1">Happy Customers</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                            <span className="material-icons-round text-blue-400">sentiment_satisfied</span>
                        </div>
                    </div>
                    <div className="glass-card p-6 flex items-center justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white">10k</h3>
                            <p className="text-slate-400 text-xs uppercase tracking-wider mt-1">New Customers</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                            <span className="material-icons-round text-purple-400">person_add</span>
                        </div>
                    </div>
                    <div className="glass-card p-6 flex items-center justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white">964</h3>
                            <p className="text-slate-400 text-xs uppercase tracking-wider mt-1">New Deals</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                            <span className="material-icons-round text-pink-400">local_offer</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Row: Leads Report & Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Leads Report Table */}
                <div className="lg:col-span-2 glass-card p-0 overflow-hidden">
                    <div className="p-6 border-b border-white/5 flex justify-between items-center">
                        <h4 className="text-lg font-bold text-white">Leads Report</h4>
                        <button className="text-xs text-primary hover:text-white transition-colors">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-white/5">
                                <tr>
                                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-white/5">Lead</th>
                                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-white/5">Email</th>
                                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-white/5">Phone</th>
                                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-white/5">Company</th>
                                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-white/5">Status</th>
                                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-white/5">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: 'Donald Gardner', email: 'xyx@gmail.com', phone: '+123456789', company: 'Starbucks coffee', status: 'New Lead', statusColor: 'bg-purple-500/20 text-purple-300', img: 'https://mannatthemes.com/metrica/default/assets/images/users/user-10.jpg' },
                                    { name: 'Matt Rosales', email: 'xyx@gmail.com', phone: '+123456789', company: 'Mac Donald', status: 'New Lead', statusColor: 'bg-purple-500/20 text-purple-300', img: 'https://mannatthemes.com/metrica/default/assets/images/users/user-9.jpg' },
                                    { name: 'Michael Hill', email: 'xyx@gmail.com', phone: '+123456789', company: 'Life Good', status: 'Lost', statusColor: 'bg-red-500/20 text-red-300', img: 'https://mannatthemes.com/metrica/default/assets/images/users/user-8.jpg' },
                                    { name: 'Nancy Flanary', email: 'xyx@gmail.com', phone: '+123456789', company: 'Flipcart', status: 'New Lead', statusColor: 'bg-purple-500/20 text-purple-300', img: 'https://mannatthemes.com/metrica/default/assets/images/users/user-7.jpg' },
                                    { name: 'Dorothy Key', email: 'xyx@gmail.com', phone: '+123456789', company: 'Adidas', status: 'Follow Up', statusColor: 'bg-blue-500/20 text-blue-300', img: 'https://mannatthemes.com/metrica/default/assets/images/users/user-6.jpg' },
                                ].map((lead, i) => (
                                    <tr key={i} className="hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                                        <td className="p-4">
                                            <div className="flex items-center">
                                                <img src={lead.img} alt="" className="w-8 h-8 rounded-full google-shadow mr-3" />
                                                <span className="text-sm font-medium text-slate-200">{lead.name}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-xs text-slate-400">{lead.email}</td>
                                        <td className="p-4 text-xs text-slate-400">{lead.phone}</td>
                                        <td className="p-4 text-xs text-slate-400">{lead.company}</td>
                                        <td className="p-4"><span className={`text-[10px] px-2 py-0.5 rounded ${lead.statusColor}`}>{lead.status}</span></td>
                                        <td className="p-4">
                                            <div className="flex gap-2">
                                                <button className="text-slate-400 hover:text-white transition-colors"><span className="material-icons-round text-sm">edit</span></button>
                                                <button className="text-slate-400 hover:text-red-400 transition-colors"><span className="material-icons-round text-sm">delete</span></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Activity Feed */}
                <div className="glass-card p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h4 className="text-lg font-bold text-white">Activity</h4>
                        <button className="text-xs text-slate-400 hover:text-white">All</button>
                    </div>
                    <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10 before:content-['']">
                        {[
                            { user: 'Donald', action: 'updated status of Refund #1234', time: '10 Min ago', icon: 'person', color: 'bg-blue-500/20 text-blue-400' },
                            { user: 'Lucy Peterson', action: 'was added to Overtake', time: '50 Min ago', icon: 'group_add', color: 'bg-purple-500/20 text-purple-400' },
                            { user: 'Joseph Rust', action: 'opened new showcase', time: '10 hours ago', icon: 'image', color: 'bg-green-500/20 text-green-400' },
                            { user: 'Donald', action: 'updated status again', time: 'Yesterday', icon: 'update', color: 'bg-orange-500/20 text-orange-400' },
                            { user: 'System', action: 'Auto-backup completed', time: 'Yesterday', icon: 'settings', color: 'bg-slate-500/20 text-slate-400' },
                        ].map((activity, i) => (
                            <div key={i} className="flex relative pl-10">
                                <div className={`absolute left-0 w-8 h-8 rounded-full ${activity.color} flex items-center justify-center border border-white/10 z-10`}>
                                    <span className="material-icons-round text-sm">{activity.icon}</span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm text-slate-300">
                                        <span className="font-semibold text-white">{activity.user}</span> {activity.action}
                                    </p>
                                    <span className="text-[10px] text-slate-500 mt-1">{activity.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
