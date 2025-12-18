import React, { useState } from 'react';
import { Edit2, Trash2, Plus, Users, Mail, Phone } from 'lucide-react';

export default function AllStaff() {
    const [filterRole, setFilterRole] = useState('all');

    const staff = [
        { id: 1, name: 'Maria Gibson', role: 'Chief Nurse', department: 'General', phone: '+1 (555) 111-1111', email: 'maria@hospital.com', joinDate: '2020-01-15', status: 'Active' },
        { id: 2, name: 'John Smith', role: 'Pharmacist', department: 'Pharmacy', phone: '+1 (555) 222-2222', email: 'john@hospital.com', joinDate: '2021-03-20', status: 'Active' },
        { id: 3, name: 'Sarah Johnson', role: 'Lab Technician', department: 'Lab', phone: '+1 (555) 333-3333', email: 'sarah@hospital.com', joinDate: '2019-06-10', status: 'Active' },
        { id: 4, name: 'Mike Wilson', role: 'Security', department: 'Security', phone: '+1 (555) 444-4444', email: 'mike@hospital.com', joinDate: '2022-01-05', status: 'Active' },
        { id: 5, name: 'Emily Brown', role: 'Receptionist', department: 'Admin', phone: '+1 (555) 555-5555', email: 'emily@hospital.com', joinDate: '2021-09-15', status: 'Active' },
        { id: 6, name: 'David Thompson', role: 'Nurse', department: 'ICU', phone: '+1 (555) 666-6666', email: 'david@hospital.com', joinDate: '2020-11-08', status: 'Active' },
        { id: 7, name: 'Lisa Martin', role: 'Technician', department: 'Imaging', phone: '+1 (555) 777-7777', email: 'lisa@hospital.com', joinDate: '2021-05-12', status: 'Active' },
        { id: 8, name: 'James Wilson', role: 'Orderly', department: 'General', phone: '+1 (555) 888-8888', email: 'james@hospital.com', joinDate: '2022-03-20', status: 'Active' },
    ];

    const handleEdit = (id) => console.log('Edit staff:', id);
    const handleDelete = (id) => console.log('Delete staff:', id);

    const uniqueDepartments = [...new Set(staff.map(s => s.department))];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <div className="w-full space-y-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <nav className="flex text-gray-600 text-sm mb-3">
                            <span className="hover:text-gray-900 cursor-pointer transition">Dashboard</span>
                            <span className="mx-2">/</span>
                            <span className="hover:text-gray-900 cursor-pointer transition">Hospital</span>
                            <span className="mx-2">/</span>
                            <span className="text-gray-900 font-semibold">Staff</span>
                        </nav>
                        <h1 className="text-4xl font-bold text-gray-900">Hospital Staff</h1>
                        <p className="text-gray-600 mt-2">Manage all hospital staff members</p>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl hover:shadow-xl hover:shadow-blue-400/30 transition-all duration-300">
                        <Plus size={20} />
                        <span className="font-semibold">Add Staff</span>
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { label: 'Total Staff', value: staff.length, icon: Users, color: 'blue' },
                        { label: 'Departments', value: uniqueDepartments.length, icon: Mail, color: 'blue' },
                        { label: 'Active', value: staff.filter(s => s.status === 'Active').length, icon: Phone, color: 'green' },
                    ].map((stat, idx) => {
                        const Icon = stat.icon;
                        const colorClass = {
                            blue: 'from-blue-400/20 to-blue-600/5 border-blue-200/40 text-blue-600',
                            green: 'from-green-400/20 to-green-600/5 border-green-200/40 text-green-600',
                        }[stat.color];
                        return (
                            <div key={idx} className={`backdrop-blur-2xl bg-gradient-to-br ${colorClass} border border-white/60 rounded-3xl p-6 shadow-xl shadow-black/5`}>
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                                        <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                                    </div>
                                    <Icon size={28} className="opacity-60" />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Table */}
                <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 overflow-hidden">
                    <div className="px-8 py-6 border-b border-white/40 bg-gradient-to-r from-blue-600/10 to-blue-600/5">
                        <h2 className="text-xl font-bold text-gray-900">Staff Directory</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/40">
                                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Name</th>
                                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Role</th>
                                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Department</th>
                                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Email</th>
                                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Phone</th>
                                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Join Date</th>
                                    <th className="px-8 py-4 text-center text-sm font-semibold text-gray-900">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {staff.map((member) => (
                                    <tr key={member.id} className="border-b border-white/30 hover:bg-white/40 transition-colors">
                                        <td className="px-8 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white font-bold text-sm">
                                                    {member.name.charAt(0)}
                                                </div>
                                                <p className="font-semibold text-indigo-900">{member.name}</p>
                                            </div>
                                        </td>
                                        <td className="px-8 py-4">
                                            <span className="inline-block px-4 py-2 rounded-2xl bg-blue-100/60 text-blue-700 text-sm font-medium">{member.role}</span>
                                        </td>
                                        <td className="px-8 py-4 text-indigo-900 text-sm">{member.department}</td>
                                        <td className="px-8 py-4">
                                            <div className="flex items-center gap-2 text-indigo-600">
                                                <Mail size={16} />
                                                <span className="text-sm">{member.email}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-4">
                                            <div className="flex items-center gap-2 text-indigo-600">
                                                <Phone size={16} />
                                                <span className="text-sm">{member.phone}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-4 text-indigo-900 text-sm">{member.joinDate}</td>
                                        <td className="px-8 py-4 text-sm">
                                            <div className="flex items-center justify-center gap-3">
                                                <button
                                                    onClick={() => handleEdit(member.id)}
                                                    className="p-2 rounded-2xl bg-blue-100/60 text-blue-600 hover:bg-blue-200/60 hover:shadow-lg hover:shadow-blue-400/30 transition-all"
                                                    title="Edit"
                                                >
                                                    <Edit2 size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(member.id)}
                                                    className="p-2 rounded-2xl bg-red-100/60 text-red-600 hover:bg-red-200/60 hover:shadow-lg hover:shadow-red-400/30 transition-all"
                                                    title="Delete"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
