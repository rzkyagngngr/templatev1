import React, { useState } from 'react';

export default function Opportunities() {
    const [showModal, setShowModal] = useState(false);
    const [filter, setFilter] = useState('All');

    // Dummy Data
    const [opportunities] = useState([
        { id: 1, company: 'Starbucks coffee', email: 'Ernest@Webster.com', phone: '+1 234 567 890', status: 'Won', statusColor: 'text-green-400', img: 'https://mannatthemes.com/metrica/default/assets/images/small/opp-1.png' },
        { id: 2, company: 'Mac Donald', email: 'Ernest@Webster.com', phone: '+1 234 567 890', status: 'Cold', statusColor: 'text-slate-400', img: 'https://mannatthemes.com/metrica/default/assets/images/small/opp-2.png' },
        { id: 3, company: 'Life Good', email: 'Ernest@Webster.com', phone: '+1 234 567 890', status: 'Hot', statusColor: 'text-purple-400', img: 'https://mannatthemes.com/metrica/default/assets/images/small/opp-3.png' },
        { id: 4, company: 'Build Construction', email: 'Ernest@Webster.com', phone: '+1 234 567 890', status: 'In Progress', statusColor: 'text-yellow-400', img: 'https://mannatthemes.com/metrica/default/assets/images/small/opp-1.png' },
    ]);

    return (
        <div className="w-full">
            {/* Header / Breadcrumb */}
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold text-white tracking-wide">Opportunities</h4>
                <div className="text-sm text-slate-400">
                    <span className="hover:text-white cursor-pointer">Metrica</span>
                    <span className="mx-2">/</span>
                    <span className="hover:text-white cursor-pointer">CRM</span>
                    <span className="mx-2">/</span>
                    <span className="text-white">Opportunities</span>
                </div>
            </div>

            <div className="glass-card mb-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    {/* Simplified Radial Chart Placeholder */}
                    <div className="relative w-32 h-32 flex-none">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white/5" />
                            <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="351.86" strokeDashoffset="87.96" className="text-primary" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                            <span className="text-2xl font-bold text-white">75%</span>
                            <span className="text-[10px] text-slate-400 uppercase">Won</span>
                        </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <h4 className="text-xl font-bold text-white mb-2">Leads Won by Owner</h4>
                        <p className="text-slate-400 text-sm max-w-lg">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                        </p>
                        <ul className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
                            <li className="flex items-center text-xs text-slate-300"><span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>Won</li>
                            <li className="flex items-center text-xs text-slate-300"><span className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>In Progress</li>
                            <li className="flex items-center text-xs text-slate-300"><span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span>Hot</li>
                            <li className="flex items-center text-xs text-slate-300"><span className="w-2 h-2 rounded-full bg-slate-400 mr-2"></span>Cold</li>
                            <li className="flex items-center text-xs text-slate-300"><span className="w-2 h-2 rounded-full bg-red-400 mr-2"></span>Lost</li>
                        </ul>
                    </div>

                    <div className="flex-none flex flex-col gap-3">
                        <div className="flex items-center bg-white/5 rounded-xl border border-white/10 px-3 py-1.5">
                            <span className="material-icons-round text-slate-400 text-sm mr-2">search</span>
                            <input type="text" placeholder="Search..." className="bg-transparent border-none focus:outline-none text-white text-sm w-32" />
                        </div>
                        <div className="flex gap-2">
                            <select className="bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-white text-sm focus:outline-none focus:border-primary/50">
                                <option className="bg-slate-800">All</option>
                                <option className="bg-slate-800">Hot</option>
                                <option className="bg-slate-800">Cold</option>
                                <option className="bg-slate-800">In Progress</option>
                                <option className="bg-slate-800">Lost</option>
                                <option className="bg-slate-800">Won</option>
                            </select>
                            <button className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-colors">
                                <span className="material-icons-round text-lg">filter_list</span>
                            </button>
                            <button
                                className="px-3 py-1.5 rounded-xl bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 text-sm font-medium transition-all whitespace-nowrap"
                                onClick={() => setShowModal(true)}
                            >
                                + Add New
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {opportunities.map((opp) => (
                    <div key={opp.id} className="glass-card hover:bg-white/5 transition-colors group">
                        <div className="flex items-center p-2">
                            <img src={opp.img} alt="" className="w-12 h-12 rounded-full mr-4 border border-white/10" />
                            <div className="flex-1 min-w-0">
                                <h5 className="text-base font-bold text-white mb-1 truncate">{opp.company}</h5>
                                <div className="flex flex-col sm:flex-row sm:items-center text-xs text-slate-400 gap-1 sm:gap-4">
                                    <span className="flex items-center"><span className="material-icons-round text-[14px] mr-1">email</span> {opp.email}</span>
                                    <span className="flex items-center"><span className="material-icons-round text-[14px] mr-1">phone</span> {opp.phone}</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-2 ml-2">
                                <span className={`material-icons-round text-[10px] ${opp.statusColor}`}>circle</span>
                                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-1 text-slate-400 hover:text-white transition-colors"><span className="material-icons-round text-base">edit</span></button>
                                    <button className="p-1 text-slate-400 hover:text-red-400 transition-colors"><span className="material-icons-round text-base">delete</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="w-full max-w-lg glass-card animate-in fade-in zoom-in duration-300">
                        <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                            <h5 className="text-lg font-bold text-white">Add New Opportunity</h5>
                            <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white transition-colors">
                                <span className="material-icons-round">close</span>
                            </button>
                        </div>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-400 mb-1">Location</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-primary/50 transition-colors" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-400 mb-1">Phone No</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-primary/50 transition-colors" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-semibold text-slate-400 mb-1">Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-primary/50 transition-colors" required />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-semibold text-slate-400 mb-1">Category</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-primary/50 transition-colors">
                                        <option className="bg-slate-800">Select</option>
                                        <option className="bg-slate-800">Hot</option>
                                        <option className="bg-slate-800">Cold</option>
                                        <option className="bg-slate-800">In Progress</option>
                                        <option className="bg-slate-800">Lost</option>
                                        <option className="bg-slate-800">Won</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-white/10">
                                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all text-sm font-medium">Cancel</button>
                                <button type="button" className="px-4 py-2 rounded-xl bg-primary text-white shadow-[0_0_15px_rgba(14,165,233,0.4)] hover:shadow-[0_0_20px_rgba(14,165,233,0.6)] hover:-translate-y-0.5 transition-all text-sm font-medium">Save Opportunity</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
