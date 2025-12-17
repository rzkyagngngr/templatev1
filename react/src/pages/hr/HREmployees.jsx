import React, { useState } from 'react';
import { Users, Plus, Edit2, Trash2, Search, TrendingUp, Award, Clock } from 'lucide-react';

export default function HREmployees() {
    const [searchTerm, setSearchTerm] = useState('');

    const employees = [
        { id: 1, name: 'John Doe', email: 'john@company.com', department: 'IT', position: 'Senior Developer', joinDate: '2022-03-15', status: 'Active', level: 'Senior', performance: 'Excellent' },
        { id: 2, name: 'Jane Smith', email: 'jane@company.com', department: 'HR', position: 'HR Manager', joinDate: '2021-06-20', status: 'Active', level: 'Manager', performance: 'Good' },
        { id: 3, name: 'Mike Johnson', email: 'mike@company.com', department: 'Finance', position: 'Accountant', joinDate: '2023-01-10', status: 'Active', level: 'Mid', performance: 'Excellent' },
        { id: 4, name: 'Sarah Williams', email: 'sarah@company.com', department: 'Marketing', position: 'Marketing Lead', joinDate: '2022-09-05', status: 'Active', level: 'Lead', performance: 'Very Good' },
        { id: 5, name: 'Alex Brown', email: 'alex@company.com', department: 'IT', position: 'QA Engineer', joinDate: '2023-02-28', status: 'On Leave', level: 'Mid', performance: 'Good' },
        { id: 6, name: 'Emily Davis', email: 'emily@company.com', department: 'Operations', position: 'Operations Specialist', joinDate: '2022-11-12', status: 'Active', level: 'Mid', performance: 'Very Good' },
        { id: 7, name: 'David Wilson', email: 'david@company.com', department: 'Sales', position: 'Sales Executive', joinDate: '2023-05-08', status: 'Active', level: 'Mid', performance: 'Good' },
        { id: 8, name: 'Lisa Anderson', email: 'lisa@company.com', department: 'IT', position: 'DevOps Engineer', joinDate: '2021-08-22', status: 'Active', level: 'Senior', performance: 'Excellent' },
        { id: 9, name: 'Robert Taylor', email: 'robert@company.com', department: 'Finance', position: 'Finance Director', joinDate: '2020-02-10', status: 'Active', level: 'Director', performance: 'Excellent' },
        { id: 10, name: 'Maria Garcia', email: 'maria@company.com', department: 'Marketing', position: 'Content Strategist', joinDate: '2022-07-15', status: 'Active', level: 'Mid', performance: 'Very Good' },
        { id: 11, name: 'James Martinez', email: 'james@company.com', department: 'IT', position: 'Frontend Developer', joinDate: '2023-03-20', status: 'Active', level: 'Junior', performance: 'Good' },
        { id: 12, name: 'Patricia Lee', email: 'patricia@company.com', department: 'HR', position: 'Recruiter', joinDate: '2022-05-12', status: 'Active', level: 'Mid', performance: 'Very Good' },
        { id: 13, name: 'Charles Brown', email: 'charles@company.com', department: 'Sales', position: 'Sales Manager', joinDate: '2021-11-18', status: 'On Leave', level: 'Manager', performance: 'Excellent' },
        { id: 14, name: 'Jennifer White', email: 'jennifer@company.com', department: 'Operations', position: 'Operations Manager', joinDate: '2021-09-22', status: 'Active', level: 'Manager', performance: 'Very Good' },
        { id: 15, name: 'Thomas Johnson', email: 'thomas@company.com', department: 'IT', position: 'Backend Developer', joinDate: '2023-01-15', status: 'Active', level: 'Mid', performance: 'Good' },
        { id: 16, name: 'Linda Davis', email: 'linda@company.com', department: 'Marketing', position: 'Marketing Manager', joinDate: '2021-12-01', status: 'Active', level: 'Manager', performance: 'Excellent' },
    ];

    const stats = [
        { label: 'Total Employees', value: '348', color: 'bg-blue-100', textColor: 'text-blue-600', icon: Users },
        { label: 'Active', value: '328', color: 'bg-green-100', textColor: 'text-green-600', icon: TrendingUp },
        { label: 'On Leave', value: '16', color: 'bg-yellow-100', textColor: 'text-yellow-600', icon: Clock },
        { label: 'Top Performers', value: '48', color: 'bg-purple-100', textColor: 'text-purple-600', icon: Award }
    ];

    const filteredEmployees = employees.filter(emp =>
        emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusColor = (status) => {
        switch (status) {
            case 'Active': return 'bg-green-100 text-green-800';
            case 'On Leave': return 'bg-yellow-100 text-yellow-800';
            case 'Inactive': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getPerformanceColor = (performance) => {
        switch (performance) {
            case 'Excellent': return 'bg-green-50 text-green-700 border-green-300';
            case 'Very Good': return 'bg-blue-50 text-blue-700 border-blue-300';
            case 'Good': return 'bg-cyan-50 text-cyan-700 border-cyan-300';
            default: return 'bg-gray-50 text-gray-700 border-gray-300';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800">Employees</h1>
                        <p className="text-gray-600 mt-1">Manage and view all company employees</p>
                    </div>
                    <button className="px-6 py-3 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all flex items-center gap-2 font-medium">
                        <Plus className="w-5 h-5" /> Add Employee
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div key={idx} className={`backdrop-blur-lg ${stat.color} border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-all`}>
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-gray-700 text-sm font-medium mb-2">{stat.label}</p>
                                        <p className={`text-4xl font-bold ${stat.textColor}`}>{stat.value}</p>
                                    </div>
                                    <Icon className={`w-10 h-10 ${stat.textColor} opacity-20`} />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-6 shadow-lg">
                    <div className="mb-6 flex gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-600" />
                            <input
                                type="text"
                                placeholder="Search by name or email..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg bg-white/60 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-white/80 transition-all"
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-gray-300 bg-white/20">
                                    <th className="px-4 py-4 text-left text-gray-800 font-bold">Name</th>
                                    <th className="px-4 py-4 text-left text-gray-800 font-bold">Email</th>
                                    <th className="px-4 py-4 text-left text-gray-800 font-bold">Department</th>
                                    <th className="px-4 py-4 text-left text-gray-800 font-bold">Position</th>
                                    <th className="px-4 py-4 text-left text-gray-800 font-bold">Level</th>
                                    <th className="px-4 py-4 text-left text-gray-800 font-bold">Performance</th>
                                    <th className="px-4 py-4 text-left text-gray-800 font-bold">Status</th>
                                    <th className="px-4 py-4 text-center text-gray-800 font-bold">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredEmployees.map((emp) => (
                                    <tr key={emp.id} className="border-b border-gray-200 hover:bg-white/40 transition-all">
                                        <td className="px-4 py-4 text-gray-800 font-medium">{emp.name}</td>
                                        <td className="px-4 py-4 text-gray-700 text-sm">{emp.email}</td>
                                        <td className="px-4 py-4 text-gray-800">{emp.department}</td>
                                        <td className="px-4 py-4 text-gray-800">{emp.position}</td>
                                        <td className="px-4 py-4">
                                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">{emp.level}</span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${getPerformanceColor(emp.performance)}`}>{emp.performance}</span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(emp.status)}`}>{emp.status}</span>
                                        </td>
                                        <td className="px-4 py-4 flex gap-2 justify-center">
                                            <button className="p-2 hover:bg-blue-200 rounded-lg transition-colors">
                                                <Edit2 className="w-4 h-4 text-blue-600" />
                                            </button>
                                            <button className="p-2 hover:bg-red-200 rounded-lg transition-colors">
                                                <Trash2 className="w-4 h-4 text-red-600" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {filteredEmployees.length === 0 && (
                        <div className="text-center py-8 text-gray-600">
                            <p>No employees found matching your search.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
