import React, { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { TrendingUp, Calendar, Users, Clock, Target, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('project2');
    const [timeRange, setTimeRange] = useState('month');

    // Chart Data
    const overviewData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Completed Projects',
                data: [10, 20, 15, 25, 20, 30, 25, 35, 30, 40, 35, 50],
                borderColor: 'rgba(99, 102, 241, 1)',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                tension: 0.4,
                fill: true,
                pointRadius: 4,
                pointHoverRadius: 6,
            },
            {
                label: 'Active Projects',
                data: [5, 15, 10, 20, 15, 25, 20, 30, 25, 35, 30, 45],
                borderColor: 'rgba(168, 85, 247, 1)',
                backgroundColor: 'rgba(168, 85, 247, 0.1)',
                tension: 0.4,
                fill: true,
                borderDash: [5, 5],
                pointRadius: 4,
                pointHoverRadius: 6,
            },
        ],
    };

    const overviewOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: { 
                    color: '#64748b',
                    usePointStyle: true,
                    padding: 15
                }
            },
            title: {
                display: false,
            },
        },
        scales: {
            y: {
                grid: { color: 'rgba(148, 163, 184, 0.1)' },
                ticks: { color: '#64748b' }
            },
            x: {
                grid: { display: false },
                ticks: { color: '#64748b' }
            }
        }
    };

    const taskStatusData = {
        labels: ['Active', 'Completed', 'On Hold', 'Pending'],
        datasets: [
            {
                data: [45, 25, 15, 15],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(34, 197, 94, 0.8)',
                    'rgba(251, 146, 60, 0.8)',
                    'rgba(168, 85, 247, 0.8)',
                ],
                borderWidth: 0,
                hoverOffset: 8,
            },
        ],
    };

    const taskStatusOptions = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
            legend: {
                position: 'bottom',
                labels: { 
                    color: '#64748b',
                    padding: 12,
                    usePointStyle: true
                }
            }
        }
    };

    const teamPerformanceData = {
        labels: ['Design', 'Development', 'Testing', 'Deployment', 'Planning'],
        datasets: [
            {
                label: 'Hours Spent',
                data: [120, 200, 85, 45, 60],
                backgroundColor: 'rgba(99, 102, 241, 0.8)',
                borderRadius: 8,
            },
        ],
    };

    const teamPerformanceOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            y: {
                grid: { color: 'rgba(148, 163, 184, 0.1)' },
                ticks: { color: '#64748b' }
            },
            x: {
                grid: { display: false },
                ticks: { color: '#64748b' }
            }
        }
    };

    const projects = [
        { id: 1, name: 'Banking App Redesign', client: 'Hyman M. Cross', progress: 85, status: 'Active', team: 8, deadline: '28 Feb 2024', budget: '$45,000', spent: '$38,250' },
        { id: 2, name: 'E-Commerce Platform', client: 'Sarah Johnson', progress: 45, status: 'Active', team: 12, deadline: '15 Mar 2024', budget: '$82,000', spent: '$36,900' },
        { id: 3, name: 'Healthcare Portal', client: 'Dr. Michael Chen', progress: 100, status: 'Completed', team: 6, deadline: '10 Jan 2024', budget: '$52,000', spent: '$51,200' },
        { id: 4, name: 'Real Estate CRM', client: 'Emma Wilson', progress: 25, status: 'Active', team: 5, deadline: '20 Apr 2024', budget: '$38,000', spent: '$9,500' },
        { id: 5, name: 'Inventory System', client: 'Tech Solutions Inc', progress: 60, status: 'Active', team: 7, deadline: '05 Mar 2024', budget: '$65,000', spent: '$39,000' },
    ];

    const upcomingMilestones = [
        { id: 1, title: 'Design Phase Complete', project: 'Banking App', date: '2024-01-25', status: 'upcoming' },
        { id: 2, title: 'Beta Launch', project: 'E-Commerce Platform', date: '2024-02-01', status: 'upcoming' },
        { id: 3, title: 'Security Audit', project: 'Healthcare Portal', date: '2024-01-28', status: 'critical' },
        { id: 4, title: 'Client Review Meeting', project: 'Real Estate CRM', date: '2024-01-30', status: 'upcoming' },
    ];

    const recentActivities = [
        { id: 1, action: 'Project milestone achieved', project: 'Banking App', user: 'John Doe', time: '2 hours ago', type: 'success' },
        { id: 2, action: 'New task assigned', project: 'E-Commerce Platform', user: 'Jane Smith', time: '5 hours ago', type: 'info' },
        { id: 3, action: 'Bug reported', project: 'Healthcare Portal', user: 'Mike Johnson', time: '1 day ago', type: 'warning' },
        { id: 4, action: 'Code review completed', project: 'Real Estate CRM', user: 'Sarah Davis', time: '2 days ago', type: 'success' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <div className="w-full">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-1">Projects Dashboard</h1>
                        <p className="text-slate-600 text-sm">Overview of all project activities and performance metrics</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2.5 backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl text-slate-700 hover:bg-white/70 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl">
                            <Calendar className="inline-block w-4 h-4 mr-2" />
                            {timeRange === 'month' ? 'This Month' : 'This Week'}
                        </button>
                        <button className="px-4 py-2.5 backdrop-blur-xl bg-gradient-to-r from-indigo-500 to-purple-500 border border-white/60 rounded-3xl text-white hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl">
                            <TrendingUp className="inline-block w-4 h-4 mr-2" />
                            Generate Report
                        </button>
                    </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        <div className="flex items-start justify-between mb-3">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
                                <Target className="text-white w-6 h-6" />
                            </div>
                            <span className="px-2.5 py-1 backdrop-blur-xl bg-green-500/20 border border-green-500/30 rounded-2xl text-green-700 text-xs font-bold">
                                +12%
                            </span>
                        </div>
                        <p className="text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1">Total Projects</p>
                        <h3 className="text-3xl font-bold text-slate-900 mb-1">77</h3>
                        <p className="text-slate-500 text-xs flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600 font-bold">26 Complete</span>
                        </p>
                    </div>

                    <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        <div className="flex items-start justify-between mb-3">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                                <CheckCircle2 className="text-white w-6 h-6" />
                            </div>
                            <span className="px-2.5 py-1 backdrop-blur-xl bg-purple-500/20 border border-purple-500/30 rounded-2xl text-purple-700 text-xs font-bold">
                                Active
                            </span>
                        </div>
                        <p className="text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1">Active Tasks</p>
                        <h3 className="text-3xl font-bold text-slate-900 mb-1">341</h3>
                        <p className="text-slate-500 text-xs">Weekly average workload</p>
                    </div>

                    <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        <div className="flex items-start justify-between mb-3">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                                <Clock className="text-white w-6 h-6" />
                            </div>
                            <span className="px-2.5 py-1 backdrop-blur-xl bg-orange-500/20 border border-orange-500/30 rounded-2xl text-orange-700 text-xs font-bold">
                                Track
                            </span>
                        </div>
                        <p className="text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1">Total Hours</p>
                        <h3 className="text-3xl font-bold text-slate-900 mb-1">8,015</h3>
                        <p className="text-slate-500 text-xs">Across all active projects</p>
                    </div>

                    <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        <div className="flex items-start justify-between mb-3">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                                <TrendingUp className="text-white w-6 h-6" />
                            </div>
                            <span className="px-2.5 py-1 backdrop-blur-xl bg-emerald-500/20 border border-emerald-500/30 rounded-2xl text-emerald-700 text-xs font-bold">
                                +8%
                            </span>
                        </div>
                        <p className="text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1">Total Budget</p>
                        <h3 className="text-3xl font-bold text-slate-900 mb-1">$282K</h3>
                        <p className="text-slate-500 text-xs">$175K utilized (62%)</p>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    {/* Project Performance Chart */}
                    <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl lg:col-span-2">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h4 className="text-lg font-bold text-slate-900 mb-1">Project Performance</h4>
                                <p className="text-xs text-slate-600">Monthly completion trends</p>
                            </div>
                            <div className="flex gap-2">
                                {['week', 'month', 'year'].map((range) => (
                                    <button
                                        key={range}
                                        onClick={() => setTimeRange(range)}
                                        className={`px-3 py-1.5 rounded-2xl text-xs font-medium transition-all duration-300 ${
                                            timeRange === range
                                                ? 'backdrop-blur-xl bg-indigo-500 text-white shadow-lg'
                                                : 'backdrop-blur-xl bg-white/40 text-slate-600 hover:bg-white/60'
                                        }`}
                                    >
                                        {range.charAt(0).toUpperCase() + range.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="h-72">
                            <Line options={overviewOptions} data={overviewData} />
                        </div>
                    </div>

                    {/* Task Distribution */}
                    <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h4 className="text-lg font-bold text-slate-900 mb-1">Task Distribution</h4>
                                <p className="text-xs text-slate-600">Current status breakdown</p>
                            </div>
                        </div>
                        <div className="h-64 flex justify-center items-center">
                            <Doughnut options={taskStatusOptions} data={taskStatusData} />
                        </div>
                    </div>
                </div>

                {/* Team Performance & Milestones */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Team Performance */}
                    <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h4 className="text-lg font-bold text-slate-900 mb-1">Team Performance</h4>
                                <p className="text-xs text-slate-600">Hours by activity type</p>
                            </div>
                        </div>
                        <div className="h-64">
                            <Bar options={teamPerformanceOptions} data={teamPerformanceData} />
                        </div>
                    </div>

                    {/* Upcoming Milestones */}
                    <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h4 className="text-lg font-bold text-slate-900 mb-1">Upcoming Milestones</h4>
                                <p className="text-xs text-slate-600">Next critical dates</p>
                            </div>
                            <button className="text-indigo-600 hover:text-indigo-700 text-xs font-semibold">View All</button>
                        </div>
                        <div className="space-y-3">
                            {upcomingMilestones.map((milestone) => (
                                <div key={milestone.id} className="backdrop-blur-xl bg-white/40 border border-white/60 rounded-2xl p-4 hover:bg-white/60 transition-all duration-300">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${milestone.status === 'critical' ? 'bg-red-500' : 'bg-indigo-500'}`}></div>
                                            <h5 className="font-semibold text-slate-900 text-sm">{milestone.title}</h5>
                                        </div>
                                        {milestone.status === 'critical' && (
                                            <AlertCircle className="w-4 h-4 text-red-500" />
                                        )}
                                    </div>
                                    <p className="text-xs text-slate-600 mb-1">{milestone.project}</p>
                                    <div className="flex items-center gap-1 text-xs text-slate-500">
                                        <Calendar className="w-3 h-3" />
                                        {milestone.date}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* All Projects Table */}
                <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl shadow-xl overflow-hidden">
                    <div className="p-6 border-b border-white/40 flex justify-between items-center">
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 mb-1">Active Projects</h4>
                            <p className="text-xs text-slate-600">Detailed project tracking</p>
                        </div>
                        <button className="px-4 py-2 backdrop-blur-xl bg-indigo-500 border border-white/60 rounded-3xl text-white text-sm font-medium hover:bg-indigo-600 transition-all duration-300 shadow-lg">
                            View All Projects
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/30">
                                    <th className="p-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Project</th>
                                    <th className="p-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Client</th>
                                    <th className="p-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Progress</th>
                                    <th className="p-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Status</th>
                                    <th className="p-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Team</th>
                                    <th className="p-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Deadline</th>
                                    <th className="p-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Budget</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/30">
                                {projects.map((proj) => (
                                    <tr key={proj.id} className="hover:bg-white/30 transition-colors">
                                        <td className="p-4">
                                            <div className="font-semibold text-slate-900 text-sm">{proj.name}</div>
                                        </td>
                                        <td className="p-4 text-slate-700 text-sm">{proj.client}</td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1 backdrop-blur-xl bg-white/40 rounded-full h-2 min-w-[80px]">
                                                    <div
                                                        className={`h-2 rounded-full ${
                                                            proj.progress >= 75 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                                                            proj.progress >= 50 ? 'bg-gradient-to-r from-blue-500 to-indigo-500' :
                                                            proj.progress >= 25 ? 'bg-gradient-to-r from-orange-500 to-amber-500' :
                                                            'bg-gradient-to-r from-red-500 to-pink-500'
                                                        }`}
                                                        style={{ width: `${proj.progress}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-xs font-bold text-slate-600 min-w-[40px]">{proj.progress}%</span>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className={`px-3 py-1.5 rounded-2xl text-xs font-semibold backdrop-blur-xl border ${
                                                proj.status === 'Completed' ? 'bg-green-500/20 border-green-500/30 text-green-700' :
                                                proj.status === 'Active' ? 'bg-blue-500/20 border-blue-500/30 text-blue-700' :
                                                'bg-orange-500/20 border-orange-500/30 text-orange-700'
                                            }`}>
                                                {proj.status}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4 text-slate-500" />
                                                <span className="text-sm text-slate-700 font-medium">{proj.team}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-slate-700 text-sm">{proj.deadline}</td>
                                        <td className="p-4">
                                            <div className="text-sm">
                                                <div className="text-slate-900 font-semibold">{proj.budget}</div>
                                                <div className="text-xs text-slate-500">{proj.spent} spent</div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="mt-6 backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 mb-1">Recent Activity</h4>
                            <p className="text-xs text-slate-600">Latest updates across projects</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        {recentActivities.map((activity) => (
                            <div key={activity.id} className="flex items-center gap-4 backdrop-blur-xl bg-white/40 border border-white/60 rounded-2xl p-4 hover:bg-white/60 transition-all duration-300">
                                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                                    activity.type === 'success' ? 'bg-green-500/20' :
                                    activity.type === 'warning' ? 'bg-orange-500/20' :
                                    'bg-blue-500/20'
                                }`}>
                                    {activity.type === 'success' && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                                    {activity.type === 'warning' && <AlertCircle className="w-5 h-5 text-orange-600" />}
                                    {activity.type === 'info' && <TrendingUp className="w-5 h-5 text-blue-600" />}
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-semibold text-slate-900">{activity.action}</p>
                                    <p className="text-xs text-slate-600">{activity.project} · {activity.user}</p>
                                </div>
                                <span className="text-xs text-slate-500">{activity.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
