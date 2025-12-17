import React, { useState } from 'react';

export default function Contacts() {
    const [showModal, setShowModal] = useState(false);

    // Dummy Data
    const [contacts] = useState([
        { id: 1, name: 'Donald Gardner', email: 'xyx@gmail.com', phone: '+123456789', score: '68', company: 'Starbucks coffee', tags: ['test', 'another'], img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-10.jpg', isNew: true },
        { id: 2, name: 'Matt Rosales', email: 'xyx@gmail.com', phone: '+123456789', score: '112', company: 'Mac Donald', tags: ['test', 'another', 'something'], img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-9.jpg' },
        { id: 3, name: 'Michael Hill', email: 'xyx@gmail.com', phone: '+123456789', score: '64', company: 'Life Good', tags: ['test', 'another'], img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-8.jpg', isNew: true },
        { id: 4, name: 'Nancy Flanary', email: 'xyx@gmail.com', phone: '+123456789', score: '124', company: 'Flipcart', tags: ['test', 'another', 'something'], img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-7.jpg' },
        { id: 5, name: 'Dorothy Key', email: 'xyx@gmail.com', phone: '+123456789', score: '33', company: 'Adidas', tags: ['test', 'something'], img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-6.jpg' },
        { id: 6, name: 'Joseph Cross', email: 'xyx@gmail.com', phone: '+123456789', score: '84', company: 'Reebok', tags: ['test', 'another', 'something'], img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-5.jpg' },
    ]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <div className="w-full">
                {/* Header / Breadcrumb */}
                <div className="flex justify-between items-center mb-6">
                    <h4 className="text-2xl font-bold text-slate-900 tracking-tight">CRM Contacts</h4>
                    <div className="text-sm text-slate-600">
                        <span className="hover:text-indigo-600 cursor-pointer transition-colors">Glacia</span>
                        <span className="mx-2">/</span>
                        <span className="hover:text-indigo-600 cursor-pointer transition-colors">CRM</span>
                        <span className="mx-2">/</span>
                        <span className="text-slate-900 font-semibold">Contacts</span>
                    </div>
                </div>

            {/* Contacts Table */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40 p-6">
                <div className="flex justify-between items-center mb-4 border-b border-white/40 pb-4">
                    <h4 className="text-lg font-semibold text-slate-900">Contacts Details</h4>
                    <button
                        className="px-5 py-2 rounded-2xl backdrop-blur-xl bg-blue-500/50 hover:bg-blue-500 text-white border border-blue-400/50 shadow-lg hover:shadow-2xl transition-all text-sm font-semibold"
                        onClick={() => setShowModal(true)}
                    >
                        + Add New
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="backdrop-blur-xl bg-white/30 border-b border-white/40">
                            <tr>
                                <th className="p-4 text-xs font-bold text-slate-900 uppercase tracking-wider">Customer Name</th>
                                <th className="p-4 text-xs font-bold text-slate-900 uppercase tracking-wider">Email</th>
                                <th className="p-4 text-xs font-bold text-slate-900 uppercase tracking-wider">Phone No</th>
                                <th className="p-4 text-xs font-bold text-slate-900 uppercase tracking-wider">Lead Score</th>
                                <th className="p-4 text-xs font-bold text-slate-900 uppercase tracking-wider">Company</th>
                                <th className="p-4 text-xs font-bold text-slate-900 uppercase tracking-wider">Tags</th>
                                <th className="p-4 text-xs font-bold text-slate-900 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/30">
                            {contacts.map((contact) => (
                                <tr key={contact.id} className="hover:bg-white/20 transition-all">
                                    <td className="p-4">
                                        <div className="flex items-center">
                                            <img src={contact.img} alt="" className="w-8 h-8 rounded-full mr-3 border-2 border-white shadow-lg" />
                                            <span className="text-sm font-medium text-slate-900">{contact.name}</span>
                                            {contact.isNew && <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-700 font-semibold">New</span>}
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm text-slate-700">{contact.email}</td>
                                    <td className="p-4 text-sm text-slate-700">{contact.phone}</td>
                                    <td className="p-4 text-sm font-semibold text-slate-900">{contact.score}</td>
                                    <td className="p-4 text-sm text-slate-700">{contact.company}</td>
                                    <td className="p-4">
                                        <div className="flex gap-1 flex-wrap">
                                            {contact.tags.map((tag, i) => (
                                                <span key={i} className="text-[10px] px-2 py-1 rounded-full bg-blue-500/20 text-blue-700 font-semibold">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex gap-2">
                                            <button className="p-1.5 rounded-lg bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 transition-all"><span className="material-icons-round text-sm">edit</span></button>
                                            <button className="p-1.5 rounded-lg bg-slate-100 hover:bg-red-100 text-slate-600 hover:text-red-600 transition-all"><span className="material-icons-round text-sm">delete</span></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination (Visual Only) */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/40">
                    <div className="text-xs text-slate-600 font-medium">Showing 1-6 of 500</div>
                    <div className="flex gap-2">
                        <button className="w-8 h-8 rounded-lg backdrop-blur-xl bg-white/50 hover:bg-white/70 flex items-center justify-center text-slate-700 transition-all shadow-lg">
                            <span className="material-icons-round text-sm">chevron_left</span>
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-xs font-bold shadow-lg">1</button>
                        <button className="w-8 h-8 rounded-lg backdrop-blur-xl bg-white/50 hover:bg-white/70 flex items-center justify-center text-slate-700 text-xs transition-all shadow-lg">2</button>
                        <button className="w-8 h-8 rounded-lg backdrop-blur-xl bg-white/50 hover:bg-white/70 flex items-center justify-center text-slate-700 transition-all shadow-lg">
                            <span className="material-icons-round text-sm">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="w-full max-w-lg backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl shadow-blue-200/40 p-6">
                        <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/40">
                            <h5 className="text-lg font-bold text-slate-900">Add New Contact</h5>
                            <button onClick={() => setShowModal(false)} className="text-slate-700 hover:text-slate-900 transition-colors">
                                <span className="material-icons-round">close</span>
                            </button>
                        </div>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">Name</label>
                                    <input type="text" className="w-full border border-white/50 rounded-2xl bg-white/50 backdrop-blur-xl shadow-lg focus:ring-2 focus:ring-blue-400/50 focus:outline-none px-4 py-2 text-slate-900" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
                                    <input type="email" className="w-full border border-white/50 rounded-2xl bg-white/50 backdrop-blur-xl shadow-lg focus:ring-2 focus:ring-blue-400/50 focus:outline-none px-4 py-2 text-slate-900" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone No</label>
                                    <input type="text" className="w-full border border-white/50 rounded-2xl bg-white/50 backdrop-blur-xl shadow-lg focus:ring-2 focus:ring-blue-400/50 focus:outline-none px-4 py-2 text-slate-900" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">Lead Score</label>
                                    <input type="number" className="w-full border border-white/50 rounded-2xl bg-white/50 backdrop-blur-xl shadow-lg focus:ring-2 focus:ring-blue-400/50 focus:outline-none px-4 py-2 text-slate-900" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">Company</label>
                                    <input type="text" className="w-full border border-white/50 rounded-2xl bg-white/50 backdrop-blur-xl shadow-lg focus:ring-2 focus:ring-blue-400/50 focus:outline-none px-4 py-2 text-slate-900" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">Tags (comma separated)</label>
                                    <input type="text" className="w-full border border-white/50 rounded-2xl bg-white/50 backdrop-blur-xl shadow-lg focus:ring-2 focus:ring-blue-400/50 focus:outline-none px-4 py-2 text-slate-900" required />
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-white/40">
                                <button type="button" onClick={() => setShowModal(false)} className="px-5 py-2 rounded-2xl text-slate-600 hover:text-slate-900 backdrop-blur-xl bg-white/50 hover:bg-white/70 transition-all text-sm font-medium shadow-lg">Cancel</button>
                                <button type="button" className="px-5 py-2 rounded-2xl bg-blue-500 text-white shadow-lg shadow-blue-400/40 hover:shadow-xl hover:shadow-blue-400/60 hover:scale-105 transition-all text-sm font-semibold">Save Contact</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}
