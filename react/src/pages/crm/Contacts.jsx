import React, { useState } from 'react';

export default function Contacts() {
    const [showModal, setShowModal] = useState(false);

    // Dummy Data
    const [contacts] = useState([
        { id: 1, name: 'Donald Gardner', email: 'xyx@gmail.com', phone: '+123456789', score: '68', company: 'Starbucks coffee', tags: ['test', 'another'], img: 'https://mannatthemes.com/metrica/default/assets/images/users/user-10.jpg', isNew: true },
        { id: 2, name: 'Matt Rosales', email: 'xyx@gmail.com', phone: '+123456789', score: '112', company: 'Mac Donald', tags: ['test', 'another', 'something'], img: 'https://mannatthemes.com/metrica/default/assets/images/users/user-9.jpg' },
        { id: 3, name: 'Michael Hill', email: 'xyx@gmail.com', phone: '+123456789', score: '64', company: 'Life Good', tags: ['test', 'another'], img: 'https://mannatthemes.com/metrica/default/assets/images/users/user-8.jpg', isNew: true },
        { id: 4, name: 'Nancy Flanary', email: 'xyx@gmail.com', phone: '+123456789', score: '124', company: 'Flipcart', tags: ['test', 'another', 'something'], img: 'https://mannatthemes.com/metrica/default/assets/images/users/user-7.jpg' },
        { id: 5, name: 'Dorothy Key', email: 'xyx@gmail.com', phone: '+123456789', score: '33', company: 'Adidas', tags: ['test', 'something'], img: 'https://mannatthemes.com/metrica/default/assets/images/users/user-6.jpg' },
        { id: 6, name: 'Joseph Cross', email: 'xyx@gmail.com', phone: '+123456789', score: '84', company: 'Reebok', tags: ['test', 'another', 'something'], img: 'https://mannatthemes.com/metrica/default/assets/images/users/user-5.jpg' },
    ]);

    return (
        <div className="w-full">
            {/* Header / Breadcrumb */}
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold text-white tracking-wide">Contacts</h4>
                <div className="text-sm text-slate-400">
                    <span className="hover:text-white cursor-pointer">Metrica</span>
                    <span className="mx-2">/</span>
                    <span className="hover:text-white cursor-pointer">CRM</span>
                    <span className="mx-2">/</span>
                    <span className="text-white">Contacts</span>
                </div>
            </div>

            {/* Contacts Table */}
            <div className="glass-card">
                <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-4">
                    <h4 className="text-lg font-semibold text-white">Contacts Details</h4>
                    <button
                        className="px-4 py-1.5 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 text-sm font-medium transition-all"
                        onClick={() => setShowModal(true)}
                    >
                        + Add New
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="clean-table w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="p-3 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-white/10">Customer Name</th>
                                <th className="p-3 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-white/10">Email</th>
                                <th className="p-3 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-white/10">Phone No</th>
                                <th className="p-3 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-white/10">Lead Score</th>
                                <th className="p-3 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-white/10">Company</th>
                                <th className="p-3 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-white/10">Tags</th>
                                <th className="p-3 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-white/10">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact) => (
                                <tr key={contact.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="p-3 border-b border-white/5">
                                        <div className="flex items-center">
                                            <img src={contact.img} alt="" className="w-8 h-8 rounded-full mr-3 border border-white/10" />
                                            <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">{contact.name}</span>
                                            {contact.isNew && <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-pink-500/20 text-pink-300">New</span>}
                                        </div>
                                    </td>
                                    <td className="p-3 text-sm text-slate-400 border-b border-white/5">{contact.email}</td>
                                    <td className="p-3 text-sm text-slate-400 border-b border-white/5">{contact.phone}</td>
                                    <td className="p-3 text-sm text-slate-400 border-b border-white/5">{contact.score}</td>
                                    <td className="p-3 text-sm text-slate-400 border-b border-white/5">{contact.company}</td>
                                    <td className="p-3 border-b border-white/5">
                                        <div className="flex gap-1 flex-wrap">
                                            {contact.tags.map((tag, i) => (
                                                <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="p-3 border-b border-white/5">
                                        <div className="flex gap-2">
                                            <button className="text-slate-400 hover:text-white transition-colors"><span className="material-icons-round text-lg">edit</span></button>
                                            <button className="text-slate-400 hover:text-red-400 transition-colors"><span className="material-icons-round text-lg">delete</span></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination (Visual Only) */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
                    <div className="text-xs text-slate-500">Showing 1-6 of 500</div>
                    <div className="flex gap-1">
                        <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 transition-colors">
                            <span className="material-icons-round text-sm">chevron_left</span>
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-primary/20 text-primary border border-primary/30 flex items-center justify-center text-xs font-bold">1</button>
                        <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 text-xs transition-colors">2</button>
                        <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 transition-colors">
                            <span className="material-icons-round text-sm">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="w-full max-w-lg glass-card animate-in fade-in zoom-in duration-300">
                        <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                            <h5 className="text-lg font-bold text-white">Add New Contact</h5>
                            <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white transition-colors">
                                <span className="material-icons-round">close</span>
                            </button>
                        </div>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-400 mb-1">Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-primary/50 transition-colors" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-400 mb-1">Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-primary/50 transition-colors" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-400 mb-1">Phone No</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-primary/50 transition-colors" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-400 mb-1">Lead Score</label>
                                    <input type="number" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-primary/50 transition-colors" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-400 mb-1">Company</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-primary/50 transition-colors" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-400 mb-1">Tags (comma separated)</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-primary/50 transition-colors" required />
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-white/10">
                                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all text-sm font-medium">Cancel</button>
                                <button type="button" className="px-4 py-2 rounded-xl bg-primary text-white shadow-[0_0_15px_rgba(14,165,233,0.4)] hover:shadow-[0_0_20px_rgba(14,165,233,0.6)] hover:-translate-y-0.5 transition-all text-sm font-medium">Save Contact</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
