import React, { useState } from 'react';
import PillLayout from '../components/PillLayout';
import DataTable from '../components/DataTable';

// --- Helper Functions ---
const getAvatar = (name) => `https://ui-avatars.com/api/?name=${name}&background=random&color=fff`;

// --- Sub-View: Dashboard ---
const DashboardView = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
        <div className="space-y-6">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900">Project Dashboard</h1>
                <p className="text-slate-600 mt-2">Track projects, tasks, and team performance</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: 'Total Projects', value: '42', change: '+4', color: 'from-blue-600 to-cyan-600', icon: 'folder' },
                    { label: 'Active Tasks', value: '1,204', change: '-12', color: 'from-emerald-500 to-teal-500', icon: 'check_circle' },
                    { label: 'Team Members', value: '24', change: '+2', color: 'from-purple-500 to-pink-500', icon: 'groups' },
                    { label: 'Client Satisfaction', value: '98%', change: '+1%', color: 'from-orange-500 to-amber-500', icon: 'sentiment_satisfied' },
                ].map((stat, i) => (
                    <div key={i} className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 rounded-3xl border border-white/60 p-6 hover:shadow-2xl hover:shadow-blue-200/40 hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-100/30">
                        <div className="flex items-start justify-between mb-3">
                            <div className={`p-3 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                                <span className="material-icons-round text-white">{stat.icon}</span>
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-emerald-500/20 text-emerald-700' : 'bg-red-500/20 text-red-700'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-slate-600 text-sm font-semibold">{stat.label}</p>
                        <h3 className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</h3>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40 p-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-6">Project Timeline</h2>
                    <div className="min-h-[300px] flex items-center justify-center text-slate-500">
                        <div className="text-center">
                            <span className="material-icons-round text-5xl mb-2 opacity-20">timeline</span>
                            <p>Project Timeline Overview</p>
                        </div>
                    </div>
                </div>
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40 p-6">
                    <h3 className="font-bold text-slate-900 mb-4">Upcoming Deadlines</h3>
                    <div className="space-y-3">
                        {[
                            { task: 'Homepage Redesign', project: 'Nike Site', date: 'Tomorrow', color: 'from-rose-500 to-rose-600' },
                            { task: 'Database Migration', project: 'Internal Ops', date: 'Oct 28', color: 'from-amber-500 to-amber-600' },
                            { task: 'Client Presentation', project: 'Starbucks App', date: 'Nov 01', color: 'from-blue-500 to-blue-600' },
                            { task: 'Q4 Report', project: 'Finance', date: 'Nov 05', color: 'from-emerald-500 to-emerald-600' },
                        ].map((item, i) => (
                            <div key={i} className="backdrop-blur-xl bg-white/40 rounded-2xl p-4 border border-white/50 hover:shadow-lg hover:scale-102 transition-all">
                                <div className="flex gap-3 items-center">
                                    <div className={`w-1 h-12 rounded-full bg-gradient-to-b ${item.color}`}></div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-semibold text-slate-900">{item.task}</h4>
                                        <p className="text-xs text-slate-600">{item.project}</p>
                                    </div>
                                    <div className="text-xs font-bold text-blue-700 bg-blue-500/20 px-3 py-1 rounded-full">{item.date}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

// --- Sub-View: Projects ---
const ProjectsView = () => {
    const columns = [
        { header: 'Project Name', accessor: 'name' },
        { header: 'Client', accessor: 'client' },
        { header: 'Leader', render: (row) => <img src={getAvatar(row.leader)} className="w-6 h-6 rounded-full" alt={row.leader} title={row.leader} /> },
        {
            header: 'Status', render: (row) => (
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${row.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                        row.status === 'In Progress' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                            'bg-amber-500/10 text-amber-500 border-amber-500/20'
                    }`}>
                    {row.status}
                </span>
            )
        },
        { header: 'Deadline', accessor: 'deadline' },
    ];
    const data = [
        { name: 'Redesign Web App', client: 'Pixel Ltd', leader: 'Mike Ross', status: 'In Progress', deadline: '20 Oct 2023' },
        { name: 'Mobile App POC', client: 'Initech', leader: 'Rachel Zane', status: 'Completed', deadline: '15 Sep 2023' },
        { name: 'Marketing Campaign', client: 'Globex', leader: 'Harvey Specter', status: 'Pending', deadline: '01 Nov 2023' },
    ];
    return <DataTable columns={columns} data={data} />;
};

// --- Sub-View: Tasks ---
const TasksView = () => {
    const columns = [
        { header: 'Task', accessor: 'title' },
        {
            header: 'Priority', render: (row) => (
                <span className={`text-xs font-bold ${row.priority === 'High' ? 'text-rose-500' : 'text-emerald-500'
                    }`}>{row.priority}</span>
            )
        },
        { header: 'Assigned To', render: (row) => <img src={getAvatar(row.assignee)} className="w-6 h-6 rounded-full" alt={row.assignee} title={row.assignee} /> },
        { header: 'Status', accessor: 'status' },
    ];
    const data = [
        { title: 'Fix Login Bug', priority: 'High', assignee: 'Louis Litt', status: 'Todo' },
        { title: 'Update Color Palette', priority: 'Low', assignee: 'Donna Paulsen', status: 'In Progress' },
    ];
    return <DataTable columns={columns} data={data} />;
};

// --- Sub-View: Kanban ---
const KanbanView = () => {
    const cols = ['To Do', 'In Progress', 'Done'];
    return (
        <div className="flex gap-4 overflow-x-auto pb-4 h-[calc(100vh-250px)]">
            {cols.map(col => (
                <div key={col} className="min-w-[300px] flex-1 glass-card p-4 flex flex-col bg-opacity-30">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-textPrimary">{col}</h3>
                        <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs =">3</span>
                    </div>
                    <div className="flex-1 space-y-3 overflow-y-auto">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="p-3 bg-black/20 hover:bg-black/30 rounded-lg border border-white/5 cursor-pointer transition shadow-lg backdrop-blur-md">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-600 border border-blue-500/20">Design</span>
                                    <span className="material-icons-round text-tertiary text-sm">more_horiz</span>
                                </div>
                                <h4 className="text-sm font-medium text-textPrimary mb-2">Implement new user flow for dashboard</h4>
                                <div className="flex justify-between items-center text-xs text-tertiary">
                                    <div className="flex -space-x-2">
                                        <img src={getAvatar('A')} className="w-6 h-6 rounded-full border-2 border-[#1e1e2d]" alt="" />
                                        <img src={getAvatar('B')} className="w-6 h-6 rounded-full border-2 border-[#1e1e2d]" alt="" />
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="material-icons-round text-sm">attachment</span>
                                        <span>2</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="mt-3 w-full py-2 flex items-center justify-center gap-2 text-tertiary hover:text-slate-900 hover:bg-white/5 rounded-lg transition border border-dashed border-white/10">
                        <span className="material-icons-round text-sm">add</span>
                        <span className="text-sm font-medium">Add Task</span>
                    </button>
                </div>
            ))}
        </div>
    );
};

// --- Sub-View: Clients ---
const ClientsView = () => {
    const columns = [
        {
            header: 'Client', render: (row) => (
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-slate-900 font-bold">{row.name[0]}</div>
                    <div>
                        <div className="font-medium">{row.name}</div>
                        <div className="text-xs text-tertiary">{row.country}</div>
                    </div>
                </div>
            )
        },
        { header: 'Email', accessor: 'email' },
        { header: 'Projects', accessor: 'projects' },
        { header: 'Status', render: (row) => <span className="text-emerald-500 font-bold text-xs">{row.status}</span> },
    ];
    const data = [
        { name: 'Mozilla', country: 'USA', email: 'info@mozilla.com', projects: '3', status: 'Active' },
        { name: 'Github', country: 'USA', email: 'support@github.com', projects: '5', status: 'Active' },
    ];
    return <DataTable columns={columns} data={data} />;
};

// --- Sub-View: Team ---
const TeamView = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Sarah Connor', 'John Doe', 'Jane Smith', 'Mike Ross', 'Rachel Zane', 'Harvey Specter'].map((name, i) => (
                <div key={i} className="glass-card p-6 flex flex-col items-center text-center group hover:border-primary/50 transition duration-300">
                    <div className="relative mb-4">
                        <img src={getAvatar(name)} className="w-20 h-20 rounded-full shadow-lg group-hover:scale-110 transition duration-300" alt={name} />
                        <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-[#1e1e2d] rounded-full"></span>
                    </div>
                    <h3 className="text-lg font-bold text-textPrimary">{name}</h3>
                    <p className="text-xs text-tertiary mb-4">Senior Developer</p>
                    <div className="flex gap-2">
                        <button className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary hover:text-slate-900 flex items-center justify-center text-tertiary transition">
                            <span className="material-icons-round text-sm">email</span>
                        </button>
                        <button className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary hover:text-slate-900 flex items-center justify-center text-tertiary transition">
                            <span className="material-icons-round text-sm">chat</span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function Projects() {
    const [activePill, setActivePill] = useState('dashboard');
    const pills = [
        { id: 'dashboard', label: 'Dashboard' },
        { id: 'projects', label: 'Projects' },
        { id: 'tasks', label: 'Tasks' },
        { id: 'kanban', label: 'Kanban' },
        { id: 'clients', label: 'Clients' },
        { id: 'team', label: 'Team' },
    ];

    const renderView = () => {
        switch (activePill) {
            case 'dashboard': return <DashboardView />;
            case 'projects': return <ProjectsView />;
            case 'tasks': return <TasksView />;
            case 'kanban': return <KanbanView />;
            case 'clients': return <ClientsView />;
            case 'team': return <TeamView />;
            default: return <DashboardView />;
        }
    };

    return (
        <PillLayout title="Projects" bills={pills} activePill={activePill} onPillChange={setActivePill}>
            {renderView()}
        </PillLayout>
    );
}
