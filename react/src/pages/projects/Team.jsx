import React from 'react';
import { Users, TrendingUp, Calendar, CheckCircle2, AlertCircle, Mail, Phone, BarChart3, FolderKanban } from 'lucide-react';

export default function Team() {
    const teams = [
        {
            id: 1,
            name: 'Sarah Mitchell',
            role: 'Engineering Lead',
            teamName: 'Product Engineering',
            desc: 'Building next-generation features with cutting-edge technology and innovative solutions.',
            img: 'https://picsum.photos/seed/team1/100',
            email: 'sarah.mitchell@company.com',
            phone: '+1 (555) 123-4567',
            members: [
                { id: 1, name: 'Alex Chen', avatar: 'https://picsum.photos/seed/member1/100' },
                { id: 2, name: 'Jordan Lee', avatar: 'https://picsum.photos/seed/member2/100' },
                { id: 3, name: 'Taylor Brown', avatar: 'https://picsum.photos/seed/member3/100' },
                { id: 4, name: 'Morgan Davis', avatar: 'https://picsum.photos/seed/member4/100' }
            ],
            extraMembers: 8,
            project: {
                name: 'Mobile Banking App',
                tasks: { completed: 68, total: 92 },
                progress: 74,
                status: 'on-track',
                deadline: '2024-02-15'
            },
            metrics: {
                efficiency: 94,
                satisfaction: 4.8,
                velocity: 87
            }
        },
        {
            id: 2,
            name: 'Marcus Johnson',
            role: 'Design Director',
            teamName: 'User Experience Design',
            desc: 'Crafting beautiful and intuitive experiences that delight users worldwide.',
            img: 'https://picsum.photos/seed/team2/100',
            email: 'marcus.johnson@company.com',
            phone: '+1 (555) 234-5678',
            members: [
                { id: 5, name: 'Emma Wilson', avatar: 'https://picsum.photos/seed/member5/100' },
                { id: 6, name: 'Liam Garcia', avatar: 'https://picsum.photos/seed/member6/100' },
                { id: 7, name: 'Olivia Martinez', avatar: 'https://picsum.photos/seed/member7/100' },
                { id: 8, name: 'Noah Anderson', avatar: 'https://picsum.photos/seed/member8/100' }
            ],
            extraMembers: 5,
            project: {
                name: 'Design System 2.0',
                tasks: { completed: 42, total: 85 },
                progress: 49,
                status: 'at-risk',
                deadline: '2024-03-01'
            },
            metrics: {
                efficiency: 88,
                satisfaction: 4.6,
                velocity: 79
            }
        },
        {
            id: 3,
            name: 'Priya Sharma',
            role: 'Platform Lead',
            teamName: 'Cloud Infrastructure',
            desc: 'Ensuring reliability, scalability, and security for mission-critical systems.',
            img: 'https://picsum.photos/seed/team3/100',
            email: 'priya.sharma@company.com',
            phone: '+1 (555) 345-6789',
            members: [
                { id: 9, name: 'James Taylor', avatar: 'https://picsum.photos/seed/member9/100' },
                { id: 10, name: 'Sophia Thomas', avatar: 'https://picsum.photos/seed/member10/100' },
                { id: 11, name: 'William Moore', avatar: 'https://picsum.photos/seed/member11/100' }
            ],
            extraMembers: 0,
            project: {
                name: 'Cloud Migration',
                tasks: { completed: 95, total: 100 },
                progress: 95,
                status: 'on-track',
                deadline: '2024-01-30'
            },
            metrics: {
                efficiency: 97,
                satisfaction: 4.9,
                velocity: 92
            }
        },
        {
            id: 4,
            name: 'David Kim',
            role: 'Product Manager',
            teamName: 'Product Strategy',
            desc: 'Defining product vision and roadmap to drive business growth and customer value.',
            img: 'https://picsum.photos/seed/team4/100',
            email: 'david.kim@company.com',
            phone: '+1 (555) 456-7890',
            members: [
                { id: 12, name: 'Isabella White', avatar: 'https://picsum.photos/seed/member12/100' },
                { id: 13, name: 'Benjamin Harris', avatar: 'https://picsum.photos/seed/member13/100' },
                { id: 14, name: 'Mia Jackson', avatar: 'https://picsum.photos/seed/member14/100' },
                { id: 15, name: 'Ethan Martin', avatar: 'https://picsum.photos/seed/member15/100' }
            ],
            extraMembers: 6,
            project: {
                name: 'Q1 Product Launch',
                tasks: { completed: 58, total: 78 },
                progress: 74,
                status: 'on-track',
                deadline: '2024-03-31'
            },
            metrics: {
                efficiency: 91,
                satisfaction: 4.7,
                velocity: 85
            }
        },
        {
            id: 5,
            name: 'Elena Rodriguez',
            role: 'Data Science Lead',
            teamName: 'Analytics & Insights',
            desc: 'Leveraging data-driven insights to optimize performance and drive strategic decisions.',
            img: 'https://picsum.photos/seed/team5/100',
            email: 'elena.rodriguez@company.com',
            phone: '+1 (555) 567-8901',
            members: [
                { id: 16, name: 'Lucas Thompson', avatar: 'https://picsum.photos/seed/member16/100' },
                { id: 17, name: 'Ava Robinson', avatar: 'https://picsum.photos/seed/member17/100' },
                { id: 18, name: 'Mason Clark', avatar: 'https://picsum.photos/seed/member18/100' }
            ],
            extraMembers: 4,
            project: {
                name: 'Predictive Analytics',
                tasks: { completed: 36, total: 65 },
                progress: 55,
                status: 'on-track',
                deadline: '2024-04-15'
            },
            metrics: {
                efficiency: 89,
                satisfaction: 4.5,
                velocity: 82
            }
        },
        {
            id: 6,
            name: 'Ryan O\'Connor',
            role: 'Security Director',
            teamName: 'Security & Compliance',
            desc: 'Protecting systems and data with world-class security practices and protocols.',
            img: 'https://picsum.photos/seed/team6/100',
            email: 'ryan.oconnor@company.com',
            phone: '+1 (555) 678-9012',
            members: [
                { id: 19, name: 'Charlotte Lewis', avatar: 'https://picsum.photos/seed/member19/100' },
                { id: 20, name: 'Henry Walker', avatar: 'https://picsum.photos/seed/member20/100' },
                { id: 21, name: 'Amelia Hall', avatar: 'https://picsum.photos/seed/member21/100' },
                { id: 22, name: 'Daniel Allen', avatar: 'https://picsum.photos/seed/member22/100' }
            ],
            extraMembers: 3,
            project: {
                name: 'Security Audit 2024',
                tasks: { completed: 88, total: 95 },
                progress: 93,
                status: 'on-track',
                deadline: '2024-01-31'
            },
            metrics: {
                efficiency: 96,
                satisfaction: 4.9,
                velocity: 94
            }
        }
    ];

    const getStatusColor = (status) => {
        switch(status) {
            case 'on-track': return 'text-green-600 bg-green-500/10';
            case 'at-risk': return 'text-amber-600 bg-amber-500/10';
            case 'delayed': return 'text-red-600 bg-red-500/10';
            default: return 'text-blue-600 bg-blue-500/10';
        }
    };

    const getProgressColor = (progress) => {
        if (progress >= 80) return 'from-green-500 to-emerald-500';
        if (progress >= 50) return 'from-blue-500 to-indigo-500';
        return 'from-amber-500 to-orange-500';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <div className="max-w-[1600px] mx-auto">
                {/* Header Section */}
                <div className="backdrop-blur-xl bg-white/50 rounded-3xl border border-white/60 p-8 mb-6 shadow-xl">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                                    <Users className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                        Team Collaboration
                                    </h1>
                                    <p className="text-slate-600 text-sm mt-1">Manage teams, track projects, and monitor performance</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 mt-4">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-200/50">
                                    <Users className="w-4 h-4 text-blue-600" />
                                    <span className="text-sm font-semibold text-blue-900">{teams.length} Active Teams</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 border border-green-200/50">
                                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                                    <span className="text-sm font-semibold text-green-900">
                                        {teams.reduce((acc, t) => acc + t.members.length + t.extraMembers, 0)} Members
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-200/50">
                                    <FolderKanban className="w-4 h-4 text-purple-600" />
                                    <span className="text-sm font-semibold text-purple-900">{teams.length} Projects</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button className="px-6 py-3 rounded-2xl bg-white/80 hover:bg-white border border-white/60 backdrop-blur-xl text-slate-700 font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2">
                                <BarChart3 className="w-5 h-5" />
                                View Analytics
                            </button>
                            <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 flex items-center justify-center gap-2">
                                <Users className="w-5 h-5" />
                                Add Team
                            </button>
                        </div>
                    </div>
                </div>

                {/* Teams Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
                    {teams.map((team) => (
                        <div key={team.id} className="backdrop-blur-xl bg-white/50 rounded-3xl border border-white/60 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
                            {/* Team Leader Header */}
                            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-slate-200/50">
                                <div className="relative">
                                    <img 
                                        src={team.img} 
                                        alt={team.name} 
                                        className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-lg ring-2 ring-blue-500/20"
                                    />
                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-md"></div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-bold text-slate-900 truncate mb-0.5">{team.name}</h3>
                                    <p className="text-sm text-indigo-600 font-medium mb-2">{team.role}</p>
                                    <div className="flex flex-wrap gap-2">
                                        <a href={`mailto:${team.email}`} className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-blue-600 transition-colors">
                                            <Mail className="w-3 h-3" />
                                            <span className="truncate max-w-[150px]">Email</span>
                                        </a>
                                        <a href={`tel:${team.phone}`} className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-blue-600 transition-colors">
                                            <Phone className="w-3 h-3" />
                                            <span>Call</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Team Name & Description */}
                            <div className="mb-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <Users className="w-5 h-5 text-indigo-600" />
                                    <h4 className="text-xl font-bold text-slate-900">{team.teamName}</h4>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">{team.desc}</p>
                            </div>

                            {/* Team Members */}
                            <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-blue-50/50 to-indigo-50/50 border border-blue-100/50">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Team Members</span>
                                    <span className="text-xs font-bold text-indigo-600">
                                        {team.members.length + team.extraMembers} Total
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex -space-x-3">
                                        {team.members.map((member) => (
                                            <div key={member.id} className="relative group/avatar">
                                                <img 
                                                    src={member.avatar} 
                                                    alt={member.name}
                                                    className="w-10 h-10 rounded-xl border-2 border-white shadow-md hover:scale-110 hover:z-10 transition-all duration-300 object-cover"
                                                />
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-900 text-white text-xs rounded-lg opacity-0 invisible group-hover/avatar:opacity-100 group-hover/avatar:visible transition-all duration-200 whitespace-nowrap pointer-events-none z-20 shadow-xl">
                                                    {member.name}
                                                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900"></div>
                                                </div>
                                            </div>
                                        ))}
                                        {team.extraMembers > 0 && (
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 border-2 border-white shadow-md flex items-center justify-center">
                                                <span className="text-xs font-bold text-white">+{team.extraMembers}</span>
                                            </div>
                                        )}
                                    </div>
                                    <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors flex items-center gap-1 group">
                                        <span>View All</span>
                                        <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Project Status */}
                            <div className="mb-5 p-4 rounded-2xl bg-gradient-to-br from-purple-50/50 to-pink-50/50 border border-purple-100/50">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 rounded-xl bg-purple-500/10">
                                        <FolderKanban className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="font-bold text-slate-900 text-sm mb-0.5">{team.project.name}</h5>
                                        <div className="flex items-center gap-3 text-xs text-slate-600">
                                            <span className="flex items-center gap-1">
                                                <CheckCircle2 className="w-3 h-3 text-green-600" />
                                                {team.project.tasks.completed}/{team.project.tasks.total} Tasks
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3 text-blue-600" />
                                                Due {new Date(team.project.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                            </span>
                                        </div>
                                    </div>
                                    <div className={`px-3 py-1.5 rounded-xl text-xs font-bold ${getStatusColor(team.project.status)}`}>
                                        {team.project.status === 'on-track' ? 'On Track' : 
                                         team.project.status === 'at-risk' ? 'At Risk' : 'Delayed'}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="font-semibold text-slate-700">Progress</span>
                                        <span className="font-bold text-slate-900">{team.project.progress}%</span>
                                    </div>
                                    <div className="h-2.5 bg-slate-200/50 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full bg-gradient-to-r ${getProgressColor(team.project.progress)} rounded-full transition-all duration-500 shadow-lg`}
                                            style={{ width: `${team.project.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            {/* Performance Metrics */}
                            <div className="grid grid-cols-3 gap-3 mb-5">
                                <div className="p-3 rounded-xl bg-gradient-to-br from-green-50/80 to-emerald-50/80 border border-green-200/50">
                                    <div className="flex items-center justify-center mb-1.5">
                                        <TrendingUp className="w-4 h-4 text-green-600" />
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-green-900">{team.metrics.efficiency}%</div>
                                        <div className="text-[10px] text-green-700 font-medium uppercase tracking-wide">Efficiency</div>
                                    </div>
                                </div>
                                <div className="p-3 rounded-xl bg-gradient-to-br from-amber-50/80 to-yellow-50/80 border border-amber-200/50">
                                    <div className="flex items-center justify-center mb-1.5">
                                        <BarChart3 className="w-4 h-4 text-amber-600" />
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-amber-900">{team.metrics.satisfaction}</div>
                                        <div className="text-[10px] text-amber-700 font-medium uppercase tracking-wide">Rating</div>
                                    </div>
                                </div>
                                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50/80 to-indigo-50/80 border border-blue-200/50">
                                    <div className="flex items-center justify-center mb-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-blue-900">{team.metrics.velocity}%</div>
                                        <div className="text-[10px] text-blue-700 font-medium uppercase tracking-wide">Velocity</div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2">
                                <button className="flex-1 py-3 rounded-xl bg-white/80 hover:bg-white border border-white/60 backdrop-blur-xl text-slate-700 font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2">
                                    <BarChart3 className="w-4 h-4" />
                                    Details
                                </button>
                                <button className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 flex items-center justify-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    Contact
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Footer */}
                <div className="backdrop-blur-xl bg-white/50 rounded-3xl border border-white/60 p-6 mt-6 shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 mb-3">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-2xl font-bold text-slate-900 mb-1">
                                {teams.reduce((acc, t) => acc + t.members.length + t.extraMembers, 0)}
                            </div>
                            <div className="text-sm text-slate-600 font-medium">Total Members</div>
                        </div>
                        <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-green-50/50 to-emerald-50/50">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 mb-3">
                                <CheckCircle2 className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-2xl font-bold text-slate-900 mb-1">
                                {teams.reduce((acc, t) => acc + t.project.tasks.completed, 0)}
                            </div>
                            <div className="text-sm text-slate-600 font-medium">Completed Tasks</div>
                        </div>
                        <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-purple-50/50 to-pink-50/50">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 mb-3">
                                <FolderKanban className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-2xl font-bold text-slate-900 mb-1">
                                {teams.length}
                            </div>
                            <div className="text-sm text-slate-600 font-medium">Active Projects</div>
                        </div>
                        <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-amber-50/50 to-orange-50/50">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 mb-3">
                                <TrendingUp className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-2xl font-bold text-slate-900 mb-1">
                                {Math.round(teams.reduce((acc, t) => acc + t.metrics.efficiency, 0) / teams.length)}%
                            </div>
                            <div className="text-sm text-slate-600 font-medium">Avg Efficiency</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
