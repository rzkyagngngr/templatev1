import React, { useState } from 'react';
import { Users, Mail, Phone, Shield, CheckCircle2, XCircle, Search, Filter, Plus } from 'lucide-react';

export default function UsersPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [filterRole, setFilterRole] = useState('all');

    const [users] = useState([
        { 
            id: 1, 
            name: 'Merri Diamond', 
            email: 'merri.diamond@example.com', 
            phone: '+1 (555) 234-5678',
            status: 'Active', 
            role: 'Manager', 
            permissions: ['Full Access', 'Edit Users', 'View Reports'],
            img: 'https://picsum.photos/seed/user1/100',
            joinDate: '2024-01-15'
        },
        { 
            id: 2, 
            name: 'Paul Schmidt', 
            email: 'paul.schmidt@example.com', 
            phone: '+1 (555) 345-6789',
            status: 'Active', 
            role: 'Member', 
            permissions: ['View Only', 'Basic Access'],
            img: 'https://picsum.photos/seed/user2/100',
            joinDate: '2024-02-20'
        },
        { 
            id: 3, 
            name: 'Harry McCall', 
            email: 'harry.mccall@example.com', 
            phone: '+1 (555) 456-7890',
            status: 'Inactive', 
            role: 'Member', 
            permissions: ['View Only'],
            img: 'https://picsum.photos/seed/user3/100',
            joinDate: '2024-03-10'
        },
        { 
            id: 4, 
            name: 'Aaron Poulin', 
            role: 'Agent', 
            email: 'aaron.poulin@example.com', 
            phone: '+21 123456789', 
            status: 'Active', 
            permissions: ['Support Access', 'Ticket Management'],
            img: 'https://picsum.photos/seed/user4/100',
            joinDate: '2024-04-05'
        },
        { 
            id: 5, 
            name: 'Richard Ali', 
            role: 'Administrator', 
            email: 'richard.ali@example.com', 
            phone: '+41 123456789', 
            status: 'Active', 
            permissions: ['Full Access', 'System Config', 'User Management'],
            img: 'https://picsum.photos/seed/user5/100',
            joinDate: '2023-12-01'
        },
        { 
            id: 6, 
            name: 'Juan Clark', 
            role: 'Contributor', 
            email: 'juan.clark@example.com', 
            phone: '+65 123456789', 
            status: 'Active', 
            permissions: ['Content Edit', 'Publish'],
            img: 'https://picsum.photos/seed/user6/100',
            joinDate: '2024-05-15'
        },
        { 
            id: 7, 
            name: 'Albert Hull', 
            role: 'Agent', 
            email: 'albert.hull@example.com', 
            phone: '+88 123456789', 
            status: 'Active', 
            permissions: ['Support Access'],
            img: 'https://picsum.photos/seed/user7/100',
            joinDate: '2024-06-20'
        },
        { 
            id: 8, 
            name: 'Crystal Darling', 
            role: 'Contributor', 
            email: 'crystal.darling@example.com', 
            phone: '+56 123456789', 
            status: 'Inactive', 
            permissions: ['Content Edit'],
            img: 'https://picsum.photos/seed/user8/100',
            joinDate: '2024-02-28'
        },
        { 
            id: 9, 
            name: 'Thomas Milligan', 
            role: 'Administrator', 
            email: 'thomas.milligan@example.com', 
            phone: '+35 123456789', 
            status: 'Inactive', 
            permissions: ['Full Access', 'System Config'],
            img: 'https://picsum.photos/seed/user9/100',
            joinDate: '2024-01-10'
        },
    ]);

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            user.role.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'all' || user.status.toLowerCase() === filterStatus.toLowerCase();
        const matchesRole = filterRole === 'all' || user.role === filterRole;
        return matchesSearch && matchesStatus && matchesRole;
    });

    const stats = [
        { label: 'Total Users', value: users.length, icon: Users, color: 'from-blue-500 to-indigo-500' },
        { label: 'Active', value: users.filter(u => u.status === 'Active').length, icon: CheckCircle2, color: 'from-green-500 to-emerald-500' },
        { label: 'Inactive', value: users.filter(u => u.status === 'Inactive').length, icon: XCircle, color: 'from-red-500 to-rose-500' },
        { label: 'Admins', value: users.filter(u => u.role === 'Administrator').length, icon: Shield, color: 'from-purple-500 to-pink-500' },
    ];

    const getRoleBadgeColor = (role) => {
        const colors = {
            'Administrator': 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-700 border-purple-300/30',
            'Manager': 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-700 border-blue-300/30',
            'Agent': 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-700 border-green-300/30',
            'Contributor': 'bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-700 border-orange-300/30',
            'Member': 'bg-gradient-to-r from-slate-500/20 to-gray-500/20 text-slate-700 border-slate-300/30',
        };
        return colors[role] || colors['Member'];
    };

    return (
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6 min-h-screen">
            {/* Header */}
            <div className="backdrop-blur-xl bg-white/50 rounded-3xl border border-white/60 p-6 mb-6 shadow-xl">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                            User Management System
                        </h1>
                        <p className="text-slate-600 text-sm">Manage users, roles, permissions, and access control</p>
                    </div>
                    <button className="backdrop-blur-xl bg-gradient-to-r from-indigo-500/90 to-purple-500/90 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group">
                        <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                        Add New User
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {stats.map((stat, index) => (
                    <div key={index} className="backdrop-blur-xl bg-white/50 rounded-3xl border border-white/60 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <stat.icon className="text-white" size={28} />
                            </div>
                            <div className="text-right">
                                <div className="text-3xl font-bold text-slate-800">{stat.value}</div>
                                <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
                            </div>
                        </div>
                        <div className="h-1 bg-gradient-to-r from-slate-200/50 via-slate-300/50 to-slate-200/50 rounded-full overflow-hidden">
                            <div className={`h-full bg-gradient-to-r ${stat.color} rounded-full group-hover:animate-pulse`} style={{ width: `${(stat.value / users.length) * 100}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Search and Filters */}
            <div className="backdrop-blur-xl bg-white/50 rounded-3xl border border-white/60 p-6 mb-6 shadow-xl">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search by name, email, or role..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 backdrop-blur-xl bg-white/70 border border-white/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300 text-slate-800 placeholder-slate-400"
                        />
                    </div>
                    <div className="flex gap-3">
                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className="pl-10 pr-8 py-3 backdrop-blur-xl bg-white/70 border border-white/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300 text-slate-800 appearance-none cursor-pointer"
                            >
                                <option value="all">All Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                        <div className="relative">
                            <Shield className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <select
                                value={filterRole}
                                onChange={(e) => setFilterRole(e.target.value)}
                                className="pl-10 pr-8 py-3 backdrop-blur-xl bg-white/70 border border-white/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300 text-slate-800 appearance-none cursor-pointer"
                            >
                                <option value="all">All Roles</option>
                                <option value="Administrator">Administrator</option>
                                <option value="Manager">Manager</option>
                                <option value="Agent">Agent</option>
                                <option value="Contributor">Contributor</option>
                                <option value="Member">Member</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* User Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUsers.map((user) => (
                    <div key={user.id} className="backdrop-blur-xl bg-white/50 rounded-3xl border border-white/60 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                        {/* Card Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <img 
                                        src={user.img} 
                                        alt={user.name}
                                        className="w-16 h-16 rounded-2xl border-2 border-white shadow-lg object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white shadow-lg ${user.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 text-lg group-hover:text-indigo-600 transition-colors">
                                        {user.name}
                                    </h3>
                                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-semibold border mt-1 ${getRoleBadgeColor(user.role)}`}>
                                        <Shield size={12} />
                                        {user.role}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-4">
                            <div className="flex items-center gap-3 text-sm">
                                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                                    <Mail size={16} className="text-indigo-600" />
                                </div>
                                <span className="text-slate-600 truncate">{user.email}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                                    <Phone size={16} className="text-green-600" />
                                </div>
                                <span className="text-slate-600">{user.phone}</span>
                            </div>
                        </div>

                        {/* Permissions */}
                        <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Shield size={14} className="text-slate-600" />
                                <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Permissions</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {user.permissions.map((permission, idx) => (
                                    <span key={idx} className="px-2 py-1 text-xs rounded-lg backdrop-blur-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-700 border border-indigo-200/30">
                                        {permission}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Status Badge */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/40">
                            <div className="flex items-center gap-2">
                                {user.status === 'Active' ? (
                                    <>
                                        <CheckCircle2 size={16} className="text-green-600" />
                                        <span className="text-sm font-semibold text-green-600">Active</span>
                                    </>
                                ) : (
                                    <>
                                        <XCircle size={16} className="text-red-600" />
                                        <span className="text-sm font-semibold text-red-600">Inactive</span>
                                    </>
                                )}
                            </div>
                            <span className="text-xs text-slate-500">Joined {user.joinDate}</span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 mt-4 pt-4 border-t border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="flex-1 py-2 px-4 rounded-xl backdrop-blur-xl bg-gradient-to-r from-blue-500/80 to-indigo-500/80 hover:from-blue-600 hover:to-indigo-600 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                Edit Profile
                            </button>
                            <button className="py-2 px-4 rounded-xl backdrop-blur-xl bg-white/70 hover:bg-red-500/20 border border-white/60 hover:border-red-300/50 text-slate-700 hover:text-red-600 text-sm font-semibold transition-all duration-300">
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* No Results */}
            {filteredUsers.length === 0 && (
                <div className="backdrop-blur-xl bg-white/50 rounded-3xl border border-white/60 p-12 text-center shadow-xl">
                    <Users size={64} className="mx-auto text-slate-300 mb-4" />
                    <h3 className="text-xl font-bold text-slate-700 mb-2">No Users Found</h3>
                    <p className="text-slate-600">Try adjusting your search or filter criteria</p>
                </div>
            )}

            {/* Footer Stats */}
            <div className="backdrop-blur-xl bg-white/50 rounded-3xl border border-white/60 p-6 mt-6 shadow-xl">
                <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-600">
                        Showing <span className="font-bold text-indigo-600">{filteredUsers.length}</span> of <span className="font-bold text-indigo-600">{users.length}</span> users
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 rounded-xl backdrop-blur-xl bg-white/70 hover:bg-indigo-500/20 border border-white/60 hover:border-indigo-300/50 text-slate-700 hover:text-indigo-600 text-sm font-semibold transition-all duration-300">
                            Previous
                        </button>
                        <button className="px-4 py-2 rounded-xl backdrop-blur-xl bg-gradient-to-r from-indigo-500/80 to-purple-500/80 text-white text-sm font-semibold shadow-lg">
                            1
                        </button>
                        <button className="px-4 py-2 rounded-xl backdrop-blur-xl bg-white/70 hover:bg-indigo-500/20 border border-white/60 hover:border-indigo-300/50 text-slate-700 hover:text-indigo-600 text-sm font-semibold transition-all duration-300">
                            2
                        </button>
                        <button className="px-4 py-2 rounded-xl backdrop-blur-xl bg-white/70 hover:bg-indigo-500/20 border border-white/60 hover:border-indigo-300/50 text-slate-700 hover:text-indigo-600 text-sm font-semibold transition-all duration-300">
                            3
                        </button>
                        <button className="px-4 py-2 rounded-xl backdrop-blur-xl bg-white/70 hover:bg-indigo-500/20 border border-white/60 hover:border-indigo-300/50 text-slate-700 hover:text-indigo-600 text-sm font-semibold transition-all duration-300">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
