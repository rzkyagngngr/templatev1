import React, { useState } from 'react';
import { Edit2, Trash2 } from 'lucide-react';

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
            case 'Paid': return 'bg-green-100 text-green-800';
            case 'Pending': return 'bg-yellow-100 text-yellow-800';
            case 'Partial': return 'bg-blue-100 text-blue-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="w-full space-y-6 p-6">
            <div>
                <nav className="flex text-gray-500 text-sm mb-2">
                    <span className="hover:text-gray-900 cursor-pointer">Glacia</span>
                    <span className="mx-2">/</span>
                    <span className="hover:text-gray-900 cursor-pointer">Hospital</span>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900 font-semibold">All Payments</span>
                </nav>
                <h1 className="text-3xl font-bold text-gray-900">All Payments</h1>
            </div>

            <div className="backdrop-blur-md bg-white/30 border border-gray-300 rounded-xl overflow-hidden shadow-lg">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Patient Name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Patient ID</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Amount</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Method</th>
                                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200/50">
                            {payments.map((payment) => (
                                <tr key={payment.id} className="hover:bg-white/20 transition">
                                    <td className="px-6 py-4 text-sm text-gray-900">{payment.patientName}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{payment.patientId}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{payment.amount}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{payment.date}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{payment.type}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(payment.status)}`}>
                                            {payment.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{payment.method}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <div className="flex items-center justify-center gap-3">
                                            <button
                                                onClick={() => handleEdit(payment.id)}
                                                className="text-gray-600 hover:text-blue-600 transition"
                                                title="Edit"
                                            >
                                                <Edit2 size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(payment.id)}
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
