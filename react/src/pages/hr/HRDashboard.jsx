import React from 'react';
import { Users, TrendingUp, Calendar, DollarSign, AlertCircle } from 'lucide-react';

export default function HRDashboard() {
  const stats = [
    { label: 'Total Employees', value: '248', icon: Users, trend: '+12%' },
    { label: 'Active Leaves', value: '18', icon: Calendar, trend: '-3%' },
    { label: 'Department', value: '12', icon: TrendingUp, trend: '+2' },
    { label: 'Payroll Cost', value: '$2.4M', icon: DollarSign, trend: '+8%' }
  ];

  const recentActivities = [
    { id: 1, employee: 'John Doe', action: 'Leave Request', date: '2025-01-15', status: 'Pending' },
    { id: 2, employee: 'Jane Smith', action: 'Performance Review', date: '2025-01-14', status: 'Completed' },
    { id: 3, employee: 'Mike Johnson', action: 'Salary Review', date: '2025-01-13', status: 'In Progress' },
    { id: 4, employee: 'Sarah Williams', action: 'Training Completed', date: '2025-01-12', status: 'Completed' },
    { id: 5, employee: 'Alex Brown', action: 'Promotion', date: '2025-01-11', status: 'Approved' },
    { id: 6, employee: 'Emily Davis', action: 'Onboarding', date: '2025-01-10', status: 'In Progress' }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Pending': 'bg-yellow-100 text-yellow-800',
      'Completed': 'bg-green-100 text-green-800',
      'In Progress': 'bg-blue-100 text-blue-800',
      'Approved': 'bg-green-100 text-green-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">HR Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-8 h-8 text-black" />
                  <span className="text-green-600 text-sm font-semibold">{stat.trend}</span>
                </div>
                <h3 className="text-gray-700 text-sm font-medium mb-2">{stat.label}</h3>
                <p className="text-3xl font-bold text-black">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Recent Activities */}
        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-black">Recent Activities</h2>
            <button className="px-4 py-2 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 transition-colors">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 text-left text-black font-semibold">Employee</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Action</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Date</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Status</th>
                  <th className="px-4 py-3 text-left text-black font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentActivities.map((activity) => (
                  <tr key={activity.id} className="border-b border-gray-200 hover:bg-white/30">
                    <td className="px-4 py-3 text-black font-medium">{activity.employee}</td>
                    <td className="px-4 py-3 text-black">{activity.action}</td>
                    <td className="px-4 py-3 text-black text-sm">{activity.date}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(activity.status)}`}>
                        {activity.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">View</button>
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
