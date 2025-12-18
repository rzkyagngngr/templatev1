import React, { useState } from 'react';

export default function Leads() {
    const [showModal, setShowModal] = useState(false);

    // Dummy Data
    const [leads] = useState([
        { id: 1, name: 'Donald Gardner', email: 'xyx@gmail.com', phone: '+123456789', company: 'Starbucks coffee', status: 'New Lead', statusColor: 'bg-indigo-500/20 text-indigo-300', img: 'https://picsum.photos/seed/crm-lead-1/100/100', isNew: true },
        { id: 2, name: 'Matt Rosales', email: 'xyx@gmail.com', phone: '+123456789', company: 'Mac Donald', status: 'Follow Up', statusColor: 'bg-blue-500/20 text-blue-300', img: 'https://picsum.photos/seed/crm-lead-2/100/100' },
        { id: 3, name: 'Michael Hill', email: 'xyx@gmail.com', phone: '+123456789', company: 'Life Good', status: 'Converted', statusColor: 'bg-green-500/20 text-green-300', img: 'https://picsum.photos/seed/crm-lead-3/100/100', isNew: true },
        { id: 4, name: 'Nancy Flanary', email: 'xyx@gmail.com', phone: '+123456789', company: 'Flipcart', status: 'New Lead', statusColor: 'bg-indigo-500/20 text-indigo-300', img: 'https://picsum.photos/seed/crm-lead-4/100/100' },
        { id: 5, name: 'Dorothy Key', email: 'xyx@gmail.com', phone: '+123456789', company: 'Adidas', status: 'Lost', statusColor: 'bg-red-500/20 text-red-300', img: 'https://picsum.photos/seed/crm-lead-5/100/100' },
        { id: 6, name: 'Joseph Cross', email: 'xyx@gmail.com', phone: '+123456789', company: 'Reebok', status: 'New Lead', statusColor: 'bg-indigo-500/20 text-indigo-300', img: 'https://picsum.photos/seed/crm-lead-6/100/100' },
    ]);

    return (
        <div className="w-full">
            {/* Header / Breadcrumb - Simplified as it's implied by navigation, but good to have title */}
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold text-slate-900 tracking-wide">Leads</h4>
                <div className="text-sm text-slate-400">
                    <span className="hover:text-slate-900 cursor-pointer">Glacia</span>
                    <span className="mx-2">/</span>
                    <span className="hover:text-slate-900 cursor-pointer">CRM</span>
                    <span className="mx-2">/</span>
                    <span className="text-slate-900">Leads</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
                {/* Profile Card */}
                <div className="lg:col-span-4 glass-card flex items-center gap-4">
                    <img src="https://picsum.photos/seed/crm-lead-profile/80/80" alt="user" className="w-20 h-20 rounded-full object-cover border-2 border-white/60 shadow-2xl backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 shadow-lg hover:scale-105 transition-all duration-300" />
                    <div className="flex-1">
                        <h5 className="text-lg font-bold text-slate-900 m-0">Merri Diamond</h5>
                        <p className="text-sm text-slate-400">Lead Manager</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-600 transition-colors">
                            <span className="material-icons-round text-base">edit</span>
                        </button>
                        <button className="p-2 rounded-full bg-white/5 hover:bg-red-500/20 text-slate-600 hover:text-red-600 transition-colors">
                            <span className="material-icons-round text-base">delete</span>
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass-card flex items-center p-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                            <span className="material-icons-round text-secondary">groups</span>
                        </div>
                        <div className="text-right flex-1">
                            <p className="text-slate-700 text-xs uppercase font-semibold mb-1">Total Leads</p>
                            <h4 className="text-2xl font-bold =">1935</h4>
                        </div>
                    </div>
                    <div className="glass-card flex items-center p-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                            <span className="material-icons-round text-secondary">book</span>
                        </div>
                        <div className="text-right flex-1">
                            <p className="text-slate-700 text-xs uppercase font-semibold mb-1">Open</p>
                            <h4 className="text-2xl font-bold text-slate-900 inline-block mr-2">1240</h4>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-green-500/20 text-green-300">Active</span>
                        </div>
                    </div>
                    <div className="glass-card flex items-center p-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                            <span className="material-icons-round text-secondary">class</span>
                        </div>
                        <div className="text-right flex-1">
                            <p className="text-slate-700 text-xs uppercase font-semibold mb-1">Close</p>
                            <h4 className="text-2xl font-bold =">240</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Leads Table */}
            <div className="glass-card">
                <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-4">
                    <h4 className="text-lg font-semibold =">All Leads</h4>
                    <div className="flex gap-2">
                        <button
                            className="px-4 py-1.5 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 text-sm font-medium transition-all"
                            onClick={() => setShowModal(true)}
                        >
                            + Add New
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="clean-table w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="p-3 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-white/10">Customer Name</th>
                                <th className="p-3 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-white/10">Email</th>
                                <th className="p-3 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-white/10">Phone No</th>
                                <th className="p-3 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-white/10">Company</th>
                                <th className="p-3 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-white/10">Status</th>
                                <th className="p-3 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-white/10">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leads.map((lead) => (
                                <tr key={lead.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="p-3 border-b border-white/5">
                                        <div className="flex items-center">
                                            <img src={lead.img} alt="" className="w-8 h-8 rounded-full mr-3 border border-white/10" />
                                            <span className="text-sm font-medium text-slate-200 group-hover:text-slate-900 transition-colors">{lead.name}</span>
                                            {lead.isNew && <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-pink-500/20 text-pink-300">New</span>}
                                        </div>
                                    </td>
                                    <td className="p-3 text-sm text-slate-700 border-b border-white/5">{lead.email}</td>
                                    <td className="p-3 text-sm text-slate-700 border-b border-white/5">{lead.phone}</td>
                                    <td className="p-3 text-sm text-slate-700 border-b border-white/5">{lead.company}</td>
                                    <td className="p-3 border-b border-white/5">
                                        <span className={`text-xs px-2.5 py-1 rounded-md font-medium ${lead.statusColor}`}>
                                            {lead.status}
                                        </span>
                                    </td>
                                    <td className="p-3 border-b border-white/5">
                                        <div className="flex gap-2">
                                            <button className="text-slate-700 hover:text-slate-900 transition-colors"><span className="material-icons-round text-lg">edit</span></button>
                                            <button className="text-slate-700 hover:text-red-600 transition-colors"><span className="material-icons-round text-lg">delete</span></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination (Visual Only) */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
                    <div className="text-xs text-slate-500">Showing 1-6 of 24</div>
                    <div className="flex gap-1">
                        <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-700 transition-colors">
                            <span className="material-icons-round text-sm">chevron_left</span>
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-primary/20 text-primary border border-primary/30 flex items-center justify-center text-xs font-bold">1</button>
                        <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-700 text-xs transition-colors">2</button>
                        <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-700 transition-colors">
                            <span className="material-icons-round text-sm">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="w-full max-w-lg glass-card  animate-in fade-in zoom-in duration-300">
                        <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                            <h5 className="text-lg font-bold =">Add New Lead</h5>
                            <button onClick={() => setShowModal(false)} className="text-slate-700 hover:text-slate-900 transition-colors">
                                <span className="material-icons-round">close</span>
                            </button>
                        </div>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-primary/50 transition-colors" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-primary/50 transition-colors" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone No</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-primary/50 transition-colors" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">Country</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-primary/50 transition-colors">
                                        <option className="bg-slate-800">Select</option>
                                        <option className="bg-slate-800">India</option>
                                        <option className="bg-slate-800">USA</option>
                                        <option className="bg-slate-800">Japan</option>
                                        <option className="bg-slate-800">China</option>
                                        <option className="bg-slate-800">Germany</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-white/10">
                                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-white/5 transition-all text-sm font-medium">Cancel</button>
                                <button type="button" className="px-4 py-2 rounded-xl bg-primary text-slate-900 shadow-[0_0_15px_rgba(14,165,233,0.4)] hover:shadow-[0_0_20px_rgba(14,165,233,0.6)] hover:-translate-y-0.5 transition-all text-sm font-medium">Save Lead</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
