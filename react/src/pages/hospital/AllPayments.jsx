import React, { useState } from 'react';
import { Edit2, Trash2, Plus, DollarSign, TrendingUp, CheckCircle } from 'lucide-react';

export default function AllPayments() {
    const payments = [
        { id: 1, patientName: 'John Doe', patientId: 'PT-2024-001', amount: '$1,250.00', date: '2024-12-15', type: 'Consultation', status: 'Paid', method: 'Credit Card' },
        { id: 2, patientName: 'Jane Smith', patientId: 'PT-2024-002', amount: '$3,500.00', date: '2024-12-14', type: 'Surgery', status: 'Pending', method: 'Insurance' },
        { id: 3, patientName: 'Mike Johnson', patientId: 'PT-2024-003', amount: '$850.00', date: '2024-12-14', type: 'Lab Tests', status: 'Paid', method: 'Cash' },
        { id: 4, patientName: 'Sarah Williams', patientId: 'PT-2024-004', amount: '$2,100.00', date: '2024-12-13', type: 'Emergency', status: 'Partial', method: 'Credit Card' },
        { id: 5, patientName: 'Robert Brown', patientId: 'PT-2024-005', amount: '$4,200.00', date: '2024-12-12', type: 'Surgery', status: 'Paid', method: 'Insurance' },
        { id: 6, patientName: 'Emily Davis', patientId: 'PT-2024-006', amount: '$650.00', date: '2024-12-12', type: 'Consultation', status: 'Pending', method: 'Cash' },
        { id: 7, patientName: 'David Anderson', patientId: 'PT-2024-007', amount: '$1,900.00', date: '2024-12-11', type: 'Radiology', status: 'Paid', method: 'Credit Card' },
        { id: 8, patientName: 'Lisa Jackson', patientId: 'PT-2024-008', amount: '$2,750.00', date: '2024-12-11', type: 'Hospitalization', status: 'Partial', method: 'Insurance' },
    ];

    const handleEdit = (id) => console.log('Edit payment:', id);
    const handleDelete = (id) => console.log('Delete payment:', id);

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Paid': return 'from-green-400/20 to-green-600/5 border-green-200/40 text-green-700';
            case 'Pending': return 'from-yellow-400/20 to-yellow-600/5 border-yellow-200/40 text-yellow-700';
            case 'Partial': return 'from-blue-400/20 to-blue-600/5 border-blue-200/40 text-blue-700';
            default: return 'from-gray-400/20 to-gray-600/5 border-gray-200/40 text-gray-700';
        }
    };

    const totalAmount = payments.reduce((sum, p) => sum + parseFloat(p.amount.replace(/[$,]/g, '')), 0);
    const paidCount = payments.filter(p => p.status === 'Paid').length;

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
                            <span className="text-gray-900 font-semibold">Payments</span>
                        </nav>
                        <h1 className="text-4xl font-bold text-gray-900">Payment Management</h1>
                        <p className="text-gray-600 mt-2">Track all hospital payments and transactions</p>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl hover:shadow-xl hover:shadow-blue-400/30 transition-all duration-300">
                        <Plus size={20} />
                        <span className="font-semibold">Record Payment</span>
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { label: 'Total Amount', value: `$${totalAmount.toFixed(2)}`, icon: DollarSign, color: 'green' },
                        { label: 'Paid', value: paidCount, icon: CheckCircle, color: 'blue' },
                        { label: 'Pending', value: payments.filter(p => p.status === 'Pending').length, icon: TrendingUp, color: 'amber' },
                    ].map((stat, idx) => {
                        const Icon = stat.icon;
                        const colorClass = {
                            green: 'from-green-400/20 to-green-600/5 border-green-200/40 text-green-600',
                            blue: 'from-blue-400/20 to-blue-600/5 border-blue-200/40 text-blue-600',
                            amber: 'from-amber-400/20 to-amber-600/5 border-amber-200/40 text-amber-600',
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
                        <h2 className="text-xl font-bold text-gray-900">Payment Transactions</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/40">
                                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Patient</th>
                                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Amount</th>
                                    <th className="px-8 py-4 text-left text-sm font-semibold text-indigo-900">Date</th>
                                    <th className="px-8 py-4 text-left text-sm font-semibold text-indigo-900">Type</th>
                                    <th className="px-8 py-4 text-left text-sm font-semibold text-indigo-900">Method</th>
                                    <th className="px-8 py-4 text-left text-sm font-semibold text-indigo-900">Status</th>
                                    <th className="px-8 py-4 text-center text-sm font-semibold text-indigo-900">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payments.map((payment) => (
                                    <tr key={payment.id} className="border-b border-white/30 hover:bg-white/40 transition-colors">
                                        <td className="px-8 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-sm">
                                                    {payment.patientName.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-indigo-900">{payment.patientName}</p>
                                                    <p className="text-indigo-600/60 text-sm">{payment.patientId}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-4 text-indigo-900 font-bold text-lg">{payment.amount}</td>
                                        <td className="px-8 py-4 text-indigo-900 text-sm">{payment.date}</td>
                                        <td className="px-8 py-4">
                                            <span className="inline-block px-3 py-1.5 rounded-2xl bg-indigo-100/60 text-indigo-700 text-xs font-medium">{payment.type}</span>
                                        </td>
                                        <td className="px-8 py-4 text-indigo-900 text-sm">{payment.method}</td>
                                        <td className="px-8 py-4">
                                            <span className={`inline-block px-4 py-2 rounded-2xl text-xs font-bold backdrop-blur-xl border border-white/60 bg-gradient-to-br ${getStatusBadge(payment.status)}`}>
                                                {payment.status}
                                            </span>
                                        </td>
                                        <td className="px-8 py-4 text-sm">
                                            <div className="flex items-center justify-center gap-3">
                                                <button
                                                    onClick={() => handleEdit(payment.id)}
                                                    className="p-2 rounded-2xl bg-blue-100/60 text-blue-600 hover:bg-blue-200/60 hover:shadow-lg hover:shadow-blue-400/30 transition-all"
                                                    title="Edit"
                                                >
                                                    <Edit2 size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(payment.id)}
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
