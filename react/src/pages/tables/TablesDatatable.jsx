import React, { useState, useMemo } from 'react';
import { Search, ChevronUp, ChevronDown, Eye, Trash2 } from 'lucide-react';

export default function TablesDatatable() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const fullData = [
        { id: 1, name: 'John Doe', email: 'john@example.com', department: 'IT', status: 'Active', salary: '$5000' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', department: 'HR', status: 'Active', salary: '$4500' },
        { id: 3, name: 'Mike Johnson', email: 'mike@example.com', department: 'Sales', status: 'Pending', salary: '$4800' },
        { id: 4, name: 'Sarah Lee', email: 'sarah@example.com', department: 'Marketing', status: 'Active', salary: '$4700' },
        { id: 5, name: 'Tom Wilson', email: 'tom@example.com', department: 'IT', status: 'Inactive', salary: '$5200' },
        { id: 6, name: 'Emma Davis', email: 'emma@example.com', department: 'Finance', status: 'Active', salary: '$5100' },
        { id: 7, name: 'Chris Brown', email: 'chris@example.com', department: 'Operations', status: 'Active', salary: '$4600' },
        { id: 8, name: 'Lisa Anderson', email: 'lisa@example.com', department: 'HR', status: 'Active', salary: '$4900' },
        { id: 9, name: 'David Miller', email: 'david@example.com', department: 'IT', status: 'Pending', salary: '$5300' },
        { id: 10, name: 'Rachel Taylor', email: 'rachel@example.com', department: 'Marketing', status: 'Active', salary: '$4800' },
        { id: 11, name: 'Kevin Garcia', email: 'kevin@example.com', department: 'Sales', status: 'Active', salary: '$5000' },
        { id: 12, name: 'Anna Martinez', email: 'anna@example.com', department: 'Finance', status: 'Active', salary: '$5150' },
    ];

    // Filter data
    const filteredData = useMemo(() => {
        return fullData.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.department.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    // Sort data
    const sortedData = useMemo(() => {
        const sorted = [...filteredData];
        sorted.sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];
            if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
        return sorted;
    }, [filteredData, sortConfig]);

    // Paginate data
    const paginatedData = useMemo(() => {
        const startIdx = (currentPage - 1) * itemsPerPage;
        return sortedData.slice(startIdx, startIdx + itemsPerPage);
    }, [sortedData, currentPage]);

    const totalPages = Math.ceil(sortedData.length / itemsPerPage);

    const handleSort = (key) => {
        setSortConfig({
            key,
            direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
        });
    };

    const SortIcon = ({ column }) => {
        if (sortConfig.key !== column) return <ChevronUp size={16} className="text-gray-400" />;
        return sortConfig.direction === 'asc' ? 
            <ChevronUp size={16} className="text-blue-600" /> : 
            <ChevronDown size={16} className="text-blue-600" />;
    };

    const getStatusColor = (status) => {
        switch(status) {
            case 'Active': return 'bg-green-100 text-green-900';
            case 'Pending': return 'bg-yellow-100 text-yellow-900';
            case 'Inactive': return 'bg-red-100 text-red-900';
            default: return 'bg-gray-100 text-gray-900';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <div className="w-full space-y-6">
                <div>
                    <nav className="flex text-gray-600 text-sm mb-3">
                        <span className="hover:text-gray-900 cursor-pointer transition">Glacia</span>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-semibold">DataTables</span>
                    </nav>
                    <h1 className="text-4xl font-bold text-gray-900">DataTables</h1>
                    <p className="text-gray-600 mt-2">Searchable, sortable, and paginated data table</p>
                </div>

                {/* Search */}
                <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl p-4 shadow-xl shadow-black/5">
                    <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/50 border border-white/40">
                        <Search size={20} className="text-gray-600" />
                        <input
                            type="text"
                            placeholder="Search by name, email, or department..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-500"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl overflow-hidden shadow-xl shadow-black/5">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-white/30 border-b border-white/40">
                                <tr>
                                    {[
                                        { key: 'name', label: 'Name' },
                                        { key: 'email', label: 'Email' },
                                        { key: 'department', label: 'Department' },
                                        { key: 'status', label: 'Status' },
                                        { key: 'salary', label: 'Salary' },
                                    ].map(({ key, label }) => (
                                        <th key={key} onClick={() => handleSort(key)} className="px-6 py-4 text-left">
                                            <button className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition group">
                                                {label}
                                                <SortIcon column={key} />
                                            </button>
                                        </th>
                                    ))}
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedData.map((item) => (
                                    <tr key={item.id} className="border-b border-white/20 hover:bg-white/40 transition-colors">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{item.email}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{item.department}</td>
                                        <td className="px-6 py-4">
                                            <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(item.status)}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 font-semibold">{item.salary}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <button className="p-2 rounded-lg hover:bg-blue-100 transition text-blue-600">
                                                    <Eye size={18} />
                                                </button>
                                                <button className="p-2 rounded-lg hover:bg-red-100 transition text-red-600">
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="bg-white/20 border-t border-white/40 px-6 py-4 flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                            Showing {paginatedData.length ? (currentPage - 1) * itemsPerPage + 1 : 0} to {Math.min(currentPage * itemsPerPage, sortedData.length)} of {sortedData.length} entries
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className="px-4 py-2 rounded-lg bg-blue-600 text-white disabled:bg-gray-300 hover:bg-blue-700 transition"
                            >
                                Previous
                            </button>
                            <div className="flex items-center gap-1">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`px-3 py-2 rounded-lg transition ${
                                            currentPage === page
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-white/40 text-gray-900 hover:bg-white/60'
                                        }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 rounded-lg bg-blue-600 text-white disabled:bg-gray-300 hover:bg-blue-700 transition"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
