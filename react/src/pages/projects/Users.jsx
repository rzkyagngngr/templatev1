import React, { useState } from 'react';

export default function Users() {
    const [users] = useState([
        { id: 1, name: 'Merri Diamond', email: '@SaraHopkins.com', status: 'New', role: 'Manager', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-1.jpg' },
        { id: 2, name: 'Paul Schmidt', email: '@SaraHopkins.com', status: 'New', role: 'Member', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-5.jpg' },
        { id: 3, name: 'Harry McCall', email: '@SaraHopkins.com', status: '', role: 'Member', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-8.jpg' },
    ]);

    const [regularUsers] = useState([
        { id: 1, name: 'Aaron Poulin', role: 'Agent', email: 'AaronPoulin@example.com', contact: '+21 123456789', status: 'Active', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-3.jpg' },
        { id: 2, name: 'Richard Ali', role: 'Administrator', email: 'RichardAli@example.com', contact: '+41 123456789', status: 'Active', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-4.jpg' },
        { id: 3, name: 'Juan Clark', role: 'Contributor', email: 'JuanClark@example.com', contact: '+65 123456789', status: 'Active', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-5.jpg' },
        { id: 4, name: 'Albert Hull', role: 'Agent', email: 'AlbertHull@example.com', contact: '+88 123456789', status: 'Active', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-6.jpg' },
        { id: 5, name: 'Crystal Darling', role: 'Contributor', email: 'CrystalDarling@example.com', contact: '+56 123456789', status: 'Deactivated', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-7.jpg' },
        { id: 6, name: 'Thomas Milligan', role: 'Administrator', email: 'ThomasMilligan@example.com', contact: '+35 123456789', status: 'Deactivated', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-8.jpg' },
    ]);

    return (
        <div className="w-full">
            {/* Header / Breadcrumb */}
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold text-slate-900 tracking-wide">Users</h4>
                <div className="text-sm text-slate-400">
                    <span className="hover:text-slate-900 cursor-pointer">Glacia</span>
                    <span className="mx-2">/</span>
                    <span className="hover:text-slate-900 cursor-pointer">Projects</span>
                    <span className="mx-2">/</span>
                    <span className="text-slate-900">Users</span>
                </div>
            </div>

            {/* Profile Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {users.map((user) => (
                    <div key={user.id} className="glass-card p-6 flex flex-col items-center relative group">
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                            <button className="text-slate-700 hover:="><span className="material-icons-round text-base">edit</span></button>
                            <button className="text-slate-700 hover:="><span className="material-icons-round text-base">delete</span></button>
                        </div>
                        <img src={user.img} alt="" className="w-20 h-20 rounded-full border-4 border-white/10 mb-4" />
                        <h5 className="text-lg font-bold text-slate-900 mb-1">
                            {user.name}
                            {user.status && <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-500">{user.status}</span>}
                        </h5>
                        <p className="text-slate-700 text-sm mb-4">{user.email}</p>
                    </div>
                ))}
            </div>

            {/* Regular Users Table */}
            <div className="glass-card">
                <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-4">
                    <h4 className="text-lg font-semibold =">Our Regular Users</h4>
                </div>

                <div className="overflow-x-auto">
                    <table className="clean-table w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="p-3 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-white/10">Users</th>
                                <th className="p-3 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-white/10">Roles</th>
                                <th className="p-3 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-white/10">Email</th>
                                <th className="p-3 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-white/10">Contact No</th>
                                <th className="p-3 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-white/10">Status</th>
                                <th className="p-3 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-white/10">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {regularUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="p-3 border-b border-white/5">
                                        <div className="flex items-center">
                                            <img src={user.img} alt="" className="w-8 h-8 rounded-full mr-3 border border-white/10" />
                                            <span className="text-sm font-medium text-slate-200 group-hover:text-slate-900 transition-colors">{user.name}</span>
                                        </div>
                                    </td>
                                    <td className="p-3 text-sm text-slate-700 border-b border-white/5">{user.role}</td>
                                    <td className="p-3 text-sm text-slate-700 border-b border-white/5">{user.email}</td>
                                    <td className="p-3 text-sm text-slate-700 border-b border-white/5">{user.contact}</td>
                                    <td className="p-3 border-b border-white/5">
                                        <span className={`text-[10px] px-2 py-0.5 rounded bg-${user.status === 'Active' ? 'green' : 'red'}-500/20 text-${user.status === 'Active' ? 'green' : 'red'}-300`}>
                                            {user.status}
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

                {/* Pagination */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
                    <button className="px-4 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-600 border border-white/10 text-sm font-medium transition-all">
                        + Add New
                    </button>
                    <div className="flex gap-1">
                        <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-700 transition-colors">
                            Prev
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-primary/20 text-primary border border-primary/30 flex items-center justify-center text-xs font-bold">1</button>
                        <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-700 transition-colors">2</button>
                        <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-700 transition-colors">3</button>
                        <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-700 transition-colors">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
