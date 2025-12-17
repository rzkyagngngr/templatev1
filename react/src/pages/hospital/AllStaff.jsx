import React, { useState } from 'react';
import { Edit2, Trash2 } from 'lucide-react';

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

    return (
        <div className="w-full space-y-6 p-6">
            <div className="flex justify-between items-start">
                <div>
                    <nav className="flex text-gray-500 text-sm mb-2">
                        <span className="hover:text-gray-900 cursor-pointer">Glacia</span>
                        <span className="mx-2">/</span>
                        <span className="hover:text-gray-900 cursor-pointer">Hospital</span>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-semibold">All Staff</span>
                    </nav>
                    <h1 className="text-3xl font-bold text-gray-900">All Staff</h1>
                </div>
            </div>

            <div className="backdrop-blur-md bg-white/30 border border-gray-300 rounded-xl overflow-hidden shadow-lg">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Role</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Department</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Email</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Phone</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Join Date</th>
                                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200/50">
                            {staff.map((member) => (
                                <tr key={member.id} className="hover:bg-white/20 transition">
                                    <td className="px-6 py-4 text-sm text-gray-900">{member.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{member.role}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{member.department}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{member.email}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{member.phone}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{member.joinDate}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <div className="flex items-center justify-center gap-3">
                                            <button
                                                onClick={() => handleEdit(member.id)}
                                                className="text-gray-600 hover:text-blue-600 transition"
                                                title="Edit"
                                            >
                                                <Edit2 size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(member.id)}
                                                className="text-gray-600 hover:text-red-600 transition"
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
    );
}
