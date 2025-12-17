import React from 'react';

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <div className="w-full space-y-6">
                {/* Header / Breadcrumb */}
                <div className="flex justify-between items-center">
                    <h4 className="text-2xl font-bold text-slate-900 tracking-tight">CRM Dashboard</h4>
                    <div className="text-sm text-slate-600">
                        <span className="hover:text-indigo-600 cursor-pointer transition-colors">Glacia</span>
                        <span className="mx-2">/</span>
                        <span className="hover:text-indigo-600 cursor-pointer transition-colors">CRM</span>
                        <span className="mx-2">/</span>
                        <span className="text-slate-900 font-semibold">Dashboard</span>
                    </div>
                </div>

                {/* Top Row: Stats & Chart */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Stats Card */}
                    <div className="lg:col-span-2 bg-white/40 backdrop-blur-2xl rounded-3xl p-6 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_48px_rgba(99,102,241,0.15)] transition-all duration-300 relative overflow-hidden">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h4 className="text-lg font-bold text-slate-900">Leads And Vendors</h4>
                                <p className="text-slate-600 text-xs mt-1">This Month</p>
                            </div>
                            <div className="p-2 bg-white/50 rounded-xl hover:bg-white/70 transition-all cursor-pointer">
                                <span className="material-icons-round text-slate-600">more_horiz</span>
                            </div>
                        </div>

                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
                            <span className="material-icons-round text-emerald-600">phone_in_talk</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 flex items-center">
                                76% <span className="text-sm font-normal text-slate-700 ml-2">Deals Successful</span>
                                <span className="material-icons-round text-emerald-600 text-sm ml-1">check_circle</span>
                            </h3>
                            <p className="text-slate-700 text-sm">Performance against target for this month.</p>
                        </div>
                    </div>

                    {/* Placeholder for Chart */}
                    <div className="h-48 w-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl border border-white/5 flex items-center justify-center relative">
                        <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end justify-between px-4 pb-2 gap-2 opacity-50">
                            {[40, 60, 45, 70, 50, 65, 55, 80, 60, 75, 50, 65].map((h, i) => (
                                <div key={i} className="w-full bg-blue-400/30 rounded-t-sm" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                        <span className="=/30 text-sm font-medium">Chart Visualization</span>
                    </div>
                </div>

                    {/* Side Stats */}
                    <div className="space-y-6">
                        <div className="bg-white/40 backdrop-blur-2xl rounded-3xl p-6 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_48px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900">60k</h3>
                                <p className="text-slate-600 text-xs uppercase tracking-wider mt-1">Happy Customers</p>
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-500/50 flex items-center justify-center">
                                <span className="material-icons-round text-white">sentiment_satisfied</span>
                            </div>
                        </div>
                        <div className="bg-white/40 backdrop-blur-2xl rounded-3xl p-6 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_48px_rgba(168,85,247,0.2)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900">10k</h3>
                                <p className="text-slate-600 text-xs uppercase tracking-wider mt-1">New Customers</p>
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg shadow-purple-500/50 flex items-center justify-center">
                                <span className="material-icons-round text-white">person_add</span>
                            </div>
                        </div>
                        <div className="bg-white/40 backdrop-blur-2xl rounded-3xl p-6 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_48px_rgba(236,72,153,0.2)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900">964</h3>
                                <p className="text-slate-600 text-xs uppercase tracking-wider mt-1">New Deals</p>
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-400 to-pink-600 shadow-lg shadow-pink-500/50 flex items-center justify-center">
                                <span className="material-icons-round text-white">local_offer</span>
                            </div>
                        </div>
                    </div>
            </div>

                {/* Middle Row: Leads Report & Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Leads Report Table */}
                    <div className="lg:col-span-2 bg-white/40 backdrop-blur-2xl rounded-3xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] overflow-hidden">
                        <div className="p-6 border-b border-slate-200/50 flex justify-between items-center">
                            <h4 className="text-lg font-bold text-slate-900">Leads Report</h4>
                            <button className="text-xs text-indigo-600 hover:text-indigo-700 font-semibold transition-colors">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50/50">
                                    <tr>
                                        <th className="p-4 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-slate-200/50">Lead</th>
                                        <th className="p-4 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-slate-200/50">Email</th>
                                        <th className="p-4 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-slate-200/50">Phone</th>
                                        <th className="p-4 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-slate-200/50">Company</th>
                                        <th className="p-4 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-slate-200/50">Status</th>
                                        <th className="p-4 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-slate-200/50">Action</th>
                                    </tr>
                                </thead>
                            <tbody>
                                {[
                                    { name: 'Donald Gardner', email: 'xyx@gmail.com', phone: '+123456789', company: 'Starbucks coffee', status: 'New Lead', statusColor: 'bg-purple-500/20 text-purple-300', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-10.jpg' },
                                    { name: 'Matt Rosales', email: 'xyx@gmail.com', phone: '+123456789', company: 'Mac Donald', status: 'New Lead', statusColor: 'bg-purple-500/20 text-purple-300', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-9.jpg' },
                                    { name: 'Michael Hill', email: 'xyx@gmail.com', phone: '+123456789', company: 'Life Good', status: 'Lost', statusColor: 'bg-red-500/20 text-red-300', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-8.jpg' },
                                    { name: 'Nancy Flanary', email: 'xyx@gmail.com', phone: '+123456789', company: 'Flipcart', status: 'New Lead', statusColor: 'bg-purple-500/20 text-purple-300', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-7.jpg' },
                                    { name: 'Dorothy Key', email: 'xyx@gmail.com', phone: '+123456789', company: 'Adidas', status: 'Follow Up', statusColor: 'bg-blue-500/20 text-blue-300', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-6.jpg' },
                                ].map((lead, i) => (
                                    <tr key={i} className="hover:bg-white/30 transition-all duration-200 border-b border-slate-200/50 last:border-0">
                                        <td className="p-4">
                                            <div className="flex items-center">
                                                <img src={lead.img} alt="" className="w-8 h-8 rounded-full shadow-lg border-2 border-white mr-3" />
                                                <span className="text-sm font-medium text-slate-900">{lead.name}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-xs text-slate-600">{lead.email}</td>
                                        <td className="p-4 text-xs text-slate-600">{lead.phone}</td>
                                        <td className="p-4 text-xs text-slate-600">{lead.company}</td>
                                        <td className="p-4"><span className={`text-[10px] px-3 py-1 rounded-full font-semibold ${lead.statusColor}`}>{lead.status}</span></td>
                                        <td className="p-4">
                                            <div className="flex gap-2">
                                                <button className="p-1.5 rounded-lg bg-slate-100 hover:bg-indigo-100 text-slate-600 hover:text-indigo-600 transition-all"><span className="material-icons-round text-sm">edit</span></button>
                                                <button className="p-1.5 rounded-lg bg-slate-100 hover:bg-red-100 text-slate-600 hover:text-red-600 transition-all"><span className="material-icons-round text-sm">delete</span></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                    {/* Activity Feed */}
                    <div className="bg-white/40 backdrop-blur-2xl rounded-3xl p-6 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                        <div className="flex justify-between items-center mb-6">
                            <h4 className="text-lg font-bold text-slate-900">Activity</h4>
                            <button className="text-xs text-indigo-600 hover:text-indigo-700 font-semibold">All</button>
                        </div>
                        <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-indigo-200 before:to-purple-200 before:content-['']">
                            {[
                                { user: 'Donald', action: 'updated status of Refund #1234', time: '10 Min ago', icon: 'person', color: 'bg-blue-500/20 text-blue-600' },
                                { user: 'Lucy Peterson', action: 'was added to Overtake', time: '50 Min ago', icon: 'group_add', color: 'bg-purple-500/20 text-purple-600' },
                                    { user: 'Joseph Rust', action: 'opened new showcase', time: '10 hours ago', icon: 'image', color: 'bg-green-500/20 text-emerald-600' },
                                { user: 'Donald', action: 'updated status again', time: 'Yesterday', icon: 'update', color: 'bg-orange-500/20 text-orange-600' },
                                { user: 'System', action: 'Auto-backup completed', time: 'Yesterday', icon: 'settings', color: 'bg-slate-500/20 text-slate-600' },
                            ].map((activity, i) => (
                                <div key={i} className="flex relative pl-10">
                                    <div className={`absolute left-0 w-8 h-8 rounded-xl ${activity.color} flex items-center justify-center border-2 border-white shadow-md z-10`}>
                                        <span className="material-icons-round text-sm">{activity.icon}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm text-slate-700">
                                            <span className="font-semibold text-slate-900">{activity.user}</span> {activity.action}
                                        </p>
                                        <span className="text-[10px] text-slate-500 mt-1">{activity.time}</span>
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
