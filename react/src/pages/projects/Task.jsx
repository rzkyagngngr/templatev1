import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { 
    CheckCircle2, 
    Clock, 
    AlertCircle, 
    Calendar, 
    Users, 
    MessageSquare, 
    Paperclip, 
    BarChart3, 
    Search, 
    Filter, 
    Plus 
} from 'lucide-react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Task() {
    const [tasks] = useState([
        { 
            id: 1, 
            title: 'UI/UX Design System', 
            time: '01:33 / 9:30', 
            date: 'Dec 20, 2025', 
            desc: 'Create comprehensive design system with component library, guidelines, and tokens for enterprise application.', 
            progress: 75, 
            priority: 'high', 
            status: 'In Progress',
            assigned: ['taskuser1', 'taskuser2', 'taskuser3'], 
            stats: { 
                tasks: '15/20', 
                comments: 8,
                attachments: 5 
            },
            tags: ['Design', 'Frontend']
        },
        { 
            id: 2, 
            title: 'API Integration', 
            time: '02:15 / 8:00', 
            date: 'Dec 21, 2025', 
            desc: 'Integrate third-party payment gateway and implement secure transaction handling with proper error management.', 
            progress: 45, 
            priority: 'medium', 
            status: 'In Progress',
            assigned: ['taskuser4', 'taskuser5'], 
            stats: { 
                tasks: '12/26', 
                comments: 12,
                attachments: 8 
            },
            tags: ['Backend', 'API']
        },
        { 
            id: 3, 
            title: 'Database Migration', 
            time: '10:33 / 12:30', 
            date: 'Dec 18, 2025', 
            desc: 'Migrate legacy database to new architecture with zero downtime and complete data integrity validation.', 
            progress: 95, 
            priority: 'critical', 
            status: 'Review',
            assigned: ['taskuser6', 'taskuser7', 'taskuser8'], 
            stats: { 
                tasks: '82/85', 
                comments: 24,
                attachments: 15 
            },
            tags: ['Database', 'DevOps']
        },
        { 
            id: 4, 
            title: 'User Authentication', 
            time: '01:20 / 1:30', 
            date: 'Dec 15, 2025', 
            desc: 'Implement multi-factor authentication, OAuth integration, and session management for enterprise security.', 
            progress: 100, 
            priority: 'low', 
            status: 'Completed',
            assigned: ['taskuser9', 'taskuser10'], 
            stats: { 
                tasks: '28/28', 
                comments: 16,
                attachments: 6 
            },
            tags: ['Security', 'Auth']
        },
        { 
            id: 5, 
            title: 'Performance Optimization', 
            time: '03:45 / 6:00', 
            date: 'Dec 22, 2025', 
            desc: 'Optimize application performance, implement lazy loading, reduce bundle size, and improve lighthouse scores.', 
            progress: 30, 
            priority: 'high', 
            status: 'Planning',
            assigned: ['taskuser11', 'taskuser12'], 
            stats: { 
                tasks: '8/25', 
                comments: 5,
                attachments: 3 
            },
            tags: ['Performance', 'Frontend']
        },
        { 
            id: 6, 
            title: 'Testing & QA', 
            time: '04:20 / 10:00', 
            date: 'Dec 23, 2025', 
            desc: 'Comprehensive unit, integration, and E2E testing with automated CI/CD pipeline integration.', 
            progress: 60, 
            priority: 'medium', 
            status: 'In Progress',
            assigned: ['taskuser13', 'taskuser14', 'taskuser15'], 
            stats: { 
                tasks: '35/58', 
                comments: 19,
                attachments: 11 
            },
            tags: ['Testing', 'QA']
        },
    ]);

    const [searchQuery, setSearchQuery] = useState('');
    const [filterPriority, setFilterPriority] = useState('all');

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Completed Tasks',
                data: [12, 19, 15, 25, 22, 30, 28, 35, 32, 40, 38, 45],
                backgroundColor: 'rgba(99, 102, 241, 0.8)',
                borderColor: 'rgba(99, 102, 241, 1)',
                borderWidth: 2,
                borderRadius: 8,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { 
                position: 'top', 
                labels: { 
                    color: '#64748b',
                    font: {
                        size: 12,
                        weight: '600'
                    },
                    padding: 15
                } 
            },
            title: { display: false },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { 
                    color: 'rgba(148, 163, 184, 0.1)',
                    drawBorder: false
                },
                ticks: { 
                    color: '#94a3b8',
                    font: { size: 11 },
                    padding: 8
                }
            },
            x: {
                grid: { display: false },
                ticks: { 
                    color: '#94a3b8',
                    font: { size: 11 },
                    padding: 8
                }
            }
        }
    };

    const getPriorityColor = (priority) => {
        switch(priority) {
            case 'critical': return { bg: 'bg-red-500/20', text: 'text-red-600', border: 'border-red-500/30', icon: 'bg-red-500' };
            case 'high': return { bg: 'bg-orange-500/20', text: 'text-orange-600', border: 'border-orange-500/30', icon: 'bg-orange-500' };
            case 'medium': return { bg: 'bg-blue-500/20', text: 'text-blue-600', border: 'border-blue-500/30', icon: 'bg-blue-500' };
            case 'low': return { bg: 'bg-green-500/20', text: 'text-green-600', border: 'border-green-500/30', icon: 'bg-green-500' };
            default: return { bg: 'bg-gray-500/20', text: 'text-gray-600', border: 'border-gray-500/30', icon: 'bg-gray-500' };
        }
    };

    const getStatusIcon = (status) => {
        switch(status) {
            case 'Completed': return <CheckCircle2 className="w-5 h-5 text-green-600" />;
            case 'In Progress': return <Clock className="w-5 h-5 text-blue-600" />;
            case 'Review': return <AlertCircle className="w-5 h-5 text-orange-600" />;
            case 'Planning': return <BarChart3 className="w-5 h-5 text-purple-600" />;
            default: return <Clock className="w-5 h-5 text-gray-600" />;
        }
    };

    const stats = [
        { label: 'Total Tasks', value: '156', change: '+12%', icon: BarChart3, color: 'from-blue-500 to-indigo-600' },
        { label: 'In Progress', value: '42', change: '+8%', icon: Clock, color: 'from-orange-500 to-red-600' },
        { label: 'Completed', value: '98', change: '+24%', icon: CheckCircle2, color: 'from-green-500 to-emerald-600' },
        { label: 'Team Members', value: '24', change: '+3', icon: Users, color: 'from-purple-500 to-pink-600' },
    ];

    const milestones = [
        { label: 'Overall Progress', progress: 72, color: 'from-indigo-500 to-blue-500', tasks: '112/156' },
        { label: 'Frontend Tasks', progress: 85, color: 'from-purple-500 to-pink-500', tasks: '42/50' },
        { label: 'Backend Tasks', progress: 65, color: 'from-orange-500 to-red-500', tasks: '39/60' },
        { label: 'Testing & QA', progress: 58, color: 'from-green-500 to-emerald-500', tasks: '28/48' },
    ];

    return (
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6 min-h-screen">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                <BarChart3 className="w-6 h-6 text-white" />
                            </div>
                            Task Management
                        </h1>
                        <p className="text-slate-600 text-sm">Track, manage, and analyze your project tasks</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-2xl px-5 py-2.5 text-slate-700 hover:bg-white/70 transition-all duration-300 font-medium text-sm flex items-center gap-2 shadow-lg shadow-black/5">
                            <Filter className="w-4 h-4" />
                            Filter
                        </button>
                        <button className="backdrop-blur-xl bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl px-5 py-2.5 text-white hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 font-medium text-sm flex items-center gap-2 shadow-lg shadow-indigo-500/25">
                            <Plus className="w-4 h-4" />
                            New Task
                        </button>
                    </div>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="backdrop-blur-xl bg-white/50 rounded-3xl border border-white/60 p-6 hover:bg-white/60 transition-all duration-300 shadow-lg shadow-black/5">
                            <div className="flex items-start justify-between mb-4">
                                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                                    {stat.change}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                            <p className="text-sm text-slate-600">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Analytics & Milestones */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Chart Card */}
                    <div className="backdrop-blur-xl bg-white/50 rounded-3xl border border-white/60 p-6 shadow-lg shadow-black/5">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                    <BarChart3 className="w-5 h-5 text-indigo-600" />
                                    Task Analytics
                                </h2>
                                <p className="text-sm text-slate-600 mt-1">Monthly completion trends</p>
                            </div>
                        </div>
                        <div className="h-[280px]">
                            <Bar data={chartData} options={chartOptions} />
                        </div>
                    </div>

                    {/* Milestones Card */}
                    <div className="backdrop-blur-xl bg-white/50 rounded-3xl border border-white/60 p-6 shadow-lg shadow-black/5">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                                    Project Milestones
                                </h2>
                                <p className="text-sm text-slate-600 mt-1">Track progress by category</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            {milestones.map((milestone, index) => (
                                <div key={index} className="group">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-semibold text-slate-900">{milestone.label}</span>
                                        <span className="text-sm font-bold text-slate-700">{milestone.progress}%</span>
                                    </div>
                                    <div className="relative h-3 bg-slate-200/50 rounded-full overflow-hidden backdrop-blur-sm">
                                        <div 
                                            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${milestone.color} rounded-full transition-all duration-500 shadow-md`}
                                            style={{ width: `${milestone.progress}%` }}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between mt-1">
                                        <span className="text-xs text-slate-500">{milestone.tasks} tasks</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Search & Filter Bar */}
                <div className="backdrop-blur-xl bg-white/50 rounded-3xl border border-white/60 p-4 mb-6 shadow-lg shadow-black/5">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search tasks..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white/50 border border-white/60 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:bg-white/70 transition-all"
                            />
                        </div>
                        <div className="flex gap-2">
                            {['all', 'critical', 'high', 'medium', 'low'].map((priority) => (
                                <button
                                    key={priority}
                                    onClick={() => setFilterPriority(priority)}
                                    className={`px-4 py-3 rounded-2xl font-medium text-sm transition-all duration-300 ${
                                        filterPriority === priority
                                            ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                                            : 'bg-white/50 border border-white/60 text-slate-700 hover:bg-white/70'
                                    }`}
                                >
                                    {priority.charAt(0).toUpperCase() + priority.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Team Members Section */}
                <div className="backdrop-blur-xl bg-white/50 rounded-3xl border border-white/60 p-5 mb-6 shadow-lg shadow-black/5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-indigo-600" />
                            <span className="text-sm font-semibold text-slate-900">Team Members</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-3">
                                {['taskuser1', 'taskuser2', 'taskuser3', 'taskuser4', 'taskuser5'].map((user, i) => (
                                    <img 
                                        key={i} 
                                        src={`https://picsum.photos/seed/${user}/100`} 
                                        className="w-10 h-10 rounded-full border-3 border-white shadow-md hover:scale-110 transition-transform cursor-pointer" 
                                        alt="" 
                                    />
                                ))}
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-3 border-white flex items-center justify-center text-xs font-bold text-white cursor-pointer hover:scale-110 transition-transform shadow-md">
                                    +19
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tasks Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {tasks.map((task) => {
                        const priorityColor = getPriorityColor(task.priority);
                        
                        return (
                            <div 
                                key={task.id} 
                                className="backdrop-blur-xl bg-white/50 rounded-3xl border border-white/60 p-6 hover:bg-white/60 hover:shadow-xl transition-all duration-300 group shadow-lg shadow-black/5"
                            >
                                {/* Task Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        {getStatusIcon(task.status)}
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                                {task.title}
                                            </h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${priorityColor.bg} ${priorityColor.text}`}>
                                                    {task.priority.toUpperCase()}
                                                </span>
                                                <span className="text-xs text-slate-500">{task.status}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`w-2 h-2 rounded-full ${priorityColor.icon} animate-pulse`} />
                                </div>

                                {/* Task Description */}
                                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                                    {task.desc}
                                </p>

                                {/* Task Meta */}
                                <div className="flex items-center gap-4 mb-4 text-xs text-slate-500">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>{task.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span>{task.time}</span>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex gap-2 mb-4">
                                    {task.tags.map((tag, i) => (
                                        <span key={i} className="text-xs px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Progress Bar */}
                                <div className="mb-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-semibold text-slate-700">Progress</span>
                                        <span className="text-xs font-bold text-slate-900">{task.progress}%</span>
                                    </div>
                                    <div className="relative h-2.5 bg-slate-200/50 rounded-full overflow-hidden backdrop-blur-sm">
                                        <div 
                                            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${
                                                task.progress === 100 ? 'from-green-500 to-emerald-500' :
                                                task.progress >= 75 ? 'from-blue-500 to-indigo-500' :
                                                task.progress >= 50 ? 'from-orange-500 to-amber-500' :
                                                'from-purple-500 to-pink-500'
                                            } rounded-full transition-all duration-500 shadow-md`}
                                            style={{ width: `${task.progress}%` }}
                                        />
                                    </div>
                                </div>

                                {/* Task Footer */}
                                <div className="flex items-center justify-between pt-4 border-t border-slate-200/50">
                                    <div className="flex -space-x-2">
                                        {task.assigned.map((user, i) => (
                                            <img 
                                                key={i} 
                                                src={`https://picsum.photos/seed/${user}/100`} 
                                                className="w-8 h-8 rounded-full border-2 border-white shadow-sm hover:scale-110 transition-transform cursor-pointer" 
                                                alt="" 
                                            />
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer">
                                            <CheckCircle2 className="w-4 h-4" />
                                            <span className="text-xs font-medium">{task.stats.tasks}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer">
                                            <MessageSquare className="w-4 h-4" />
                                            <span className="text-xs font-medium">{task.stats.comments}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer">
                                            <Paperclip className="w-4 h-4" />
                                            <span className="text-xs font-medium">{task.stats.attachments}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
