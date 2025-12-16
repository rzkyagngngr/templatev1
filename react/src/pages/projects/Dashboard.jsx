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
import { Line, Doughnut } from 'react-chartjs-2';

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

    // Chart Data
    const overviewData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: '2021',
                data: [10, 20, 15, 25, 20, 30, 25, 35, 30, 40, 35, 50],
                borderColor: 'rgba(56, 189, 248, 0.8)', // Sky blue
                backgroundColor: 'rgba(56, 189, 248, 0.2)',
                tension: 0.4,
                fill: true,
            },
            {
                label: '2020',
                data: [5, 15, 10, 20, 15, 25, 20, 30, 25, 35, 30, 45],
                borderColor: 'rgba(168, 85, 247, 0.8)', // Purple
                backgroundColor: 'rgba(168, 85, 247, 0.2)',
                tension: 0.4,
                fill: true,
                borderDash: [5, 5],
            },
        ],
    };

    const overviewOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: { color: '#94a3b8' }
            },
            title: {
                display: false,
            },
        },
        scales: {
            y: {
                grid: { color: 'rgba(255, 255, 255, 0.05)' },
                ticks: { color: '#94a3b8' }
            },
            x: {
                grid: { display: false },
                ticks: { color: '#94a3b8' }
            }
        }
    };

    const taskStatusData = {
        labels: ['Active', 'Completed', 'Pending'],
        datasets: [
            {
                data: [45, 25, 30],
                backgroundColor: [
                    'rgba(56, 189, 248, 0.8)', // Sky
                    'rgba(34, 197, 94, 0.8)',  // Green
                    'rgba(244, 63, 94, 0.8)',  // Rose
                ],
                borderColor: 'transparent',
                hoverOffset: 4,
            },
        ],
    };

    const taskStatusOptions = {
        responsive: true,
        cutout: '70%',
        plugins: {
            legend: {
                position: 'bottom',
                labels: { color: '#94a3b8' }
            }
        }
    };


    return (
        <div className="w-full">
            {/* Header / Breadcrumb */}
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold text-white tracking-wide">Dashboard</h4>
                <div className="text-sm text-slate-400">
                    <span className="hover:text-white cursor-pointer">Metrica</span>
                    <span className="mx-2">/</span>
                    <span className="hover:text-white cursor-pointer">Project</span>
                    <span className="mx-2">/</span>
                    <span className="text-white">Dashboard</span>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {/* Projects */}
                <div className="glass-card p-6 flex items-center justify-between">
                    <div>
                        <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Projects</p>
                        <h3 className="text-2xl font-bold text-white">77</h3>
                        <p className="text-slate-500 text-xs mt-1">
                            <span className="text-green-400 font-bold"><span className="material-icons-round text-xs align-middle">check_circle</span> 26</span> Complete
                        </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                        <span className="material-icons-round text-slate-300 text-2xl">layers</span>
                    </div>
                </div>

                {/* Tasks */}
                <div className="glass-card p-6 flex items-center justify-between">
                    <div>
                        <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Tasks</p>
                        <h3 className="text-2xl font-bold text-white">41</h3>
                        <p className="text-slate-500 text-xs mt-1">
                            <span className="text-green-400 font-bold">Active</span> Weekly Avg.
                        </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                        <span className="material-icons-round text-slate-300 text-2xl">check_box</span>
                    </div>
                </div>

                {/* Total Hours */}
                <div className="glass-card p-6 flex items-center justify-between">
                    <div>
                        <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Total Hours</p>
                        <h3 className="text-2xl font-bold text-white">801:30</h3>
                        <p className="text-slate-500 text-xs mt-1">
                            <span className="text-slate-400">01:33</span> / <span className="text-slate-400">9:30</span> Duration
                        </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                        <span className="material-icons-round text-slate-300 text-2xl">schedule</span>
                    </div>
                </div>

                {/* Budget */}
                <div className="glass-card p-6 flex items-center justify-between">
                    <div>
                        <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Budget</p>
                        <h3 className="text-2xl font-bold text-white">$24,100</h3>
                        <p className="text-slate-500 text-xs mt-1">
                            <span className="text-white">$14k</span> Total used
                        </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                        <span className="material-icons-round text-slate-300 text-2xl">attach_money</span>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* Overview Chart */}
                <div className="glass-card p-6 lg:col-span-2">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-bold text-white">Overview</h4>
                        <div className="flex gap-2">
                            <button className="text-slate-400 hover:text-white"><span className="material-icons-round">more_horiz</span></button>
                        </div>
                    </div>
                    <div className="h-64">
                        <Line options={overviewOptions} data={overviewData} />
                    </div>
                    <div className="mt-4 p-3 bg-blue-500/10 rounded-lg text-center border border-blue-500/20">
                        <h6 className="text-blue-400 font-semibold text-sm">
                            <span className="material-icons-round align-middle text-sm mr-1">calendar_today</span>
                            01 January 2021 to 01 January 2022
                        </h6>
                    </div>
                </div>

                {/* Task Performance */}
                <div className="glass-card p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-bold text-white">Tasks Performance</h4>
                        <button className="text-slate-400 hover:text-white"><span className="material-icons-round">more_horiz</span></button>
                    </div>
                    <div className="h-64 flex justify-center items-center">
                        <Doughnut options={taskStatusOptions} data={taskStatusData} />
                    </div>
                    <div className="mt-4 p-3 bg-blue-500/10 rounded-lg text-center border border-blue-500/20">
                        <h6 className="text-blue-400 font-semibold text-sm">
                            <span className="material-icons-round align-middle text-sm mr-1">calendar_today</span>
                            Current Report
                        </h6>
                    </div>
                </div>
            </div>

            {/* Projects Tabs & Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="lg:col-span-2 glass-card p-6">
                    {/* Tabs */}
                    <div className="border-b border-white/10 mb-6">
                        <div className="flex gap-6">
                            {['project1', 'project2', 'project3'].map((tab, idx) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${activeTab === tab
                                            ? 'border-primary text-white'
                                            : 'border-transparent text-slate-400 hover:text-slate-200'
                                        }`}
                                >
                                    Project {idx + 1}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content (Example for Project 2 - matching HTML) */}
                    {activeTab === 'project2' && (
                        <div>
                            <div className="flex flex-col md:flex-row justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <img src="https://mannatthemes.com/metrica/default/assets/images/small/project-2.jpg" alt="" className="w-16 h-16 rounded-full border-2 border-white/10 shadow-lg object-cover" />
                                    <div>
                                        <h4 className="text-xl font-bold text-white">Banking App</h4>
                                        <p className="text-slate-400 text-sm">Client: <span className="text-slate-200">Hyman M. Cross</span></p>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0 text-right">
                                    <p className="text-slate-400 text-sm font-semibold">Start: <span className="text-slate-200 font-normal">15 Nov 2021</span></p>
                                    <p className="text-slate-400 text-sm font-semibold mt-1">Deadline: <span className="text-slate-200 font-normal">28 Feb 2022</span></p>
                                </div>
                            </div>

                            {/* Progress Steps */}
                            <div className="flex justify-between items-center mb-6 relative">
                                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -z-10"></div>
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white border-4 border-slate-900 shadow-lg"><span className="material-icons-round text-xs">check</span></div>
                                    <span className="text-xs text-white mt-2 font-medium">Planning</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white border-4 border-slate-900 shadow-lg"><span className="material-icons-round text-xs">check</span></div>
                                    <span className="text-xs text-white mt-2 font-medium">Design</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 border-4 border-slate-900 shadow-lg"><span className="material-icons-round text-xs">code</span></div>
                                    <span className="text-xs text-slate-400 mt-2">Dev</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 border-4 border-slate-900 shadow-lg"><span className="material-icons-round text-xs">bug_report</span></div>
                                    <span className="text-xs text-slate-400 mt-2">Testing</span>
                                </div>
                            </div>

                            {/* Stats & Progress */}
                            <div className="glass-card bg-white/5 p-4 rounded-xl border border-white/5">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs font-semibold text-slate-400 uppercase">Progress</span>
                                    <span className="text-xs font-bold text-white">15%</span>
                                </div>
                                <div className="w-full bg-slate-700 rounded-full h-2 mb-4">
                                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-slate-400 text-xs">Hours: 281:30 / 530</p>
                                    </div>
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4].map(i => (
                                            <img key={i} src={`https://mannatthemes.com/metrica/default/assets/images/users/user-${i + 4}.jpg`} className="w-8 h-8 rounded-full border-2 border-slate-800" alt="" />
                                        ))}
                                        <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-800 flex items-center justify-center text-xs text-white">+4</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab !== 'project2' && (
                        <div className="flex items-center justify-center h-64 text-slate-500">
                            Content for {activeTab}
                        </div>
                    )}
                </div>

                {/* Calendar Placeholder / Extra Stats */}
                <div className="glass-card p-6">
                    <h4 className="text-lg font-bold text-white mb-4">Calendar</h4>
                    <div className="h-64 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-slate-500 mb-6">
                        Calendar Component Placeholder
                    </div>
                </div>
            </div>

            {/* All Projects Table */}
            <div className="glass-card">
                <div className="p-6 border-b border-white/5 flex justify-between items-center">
                    <h4 className="text-lg font-bold text-white">All Projects</h4>
                    <button className="text-primary text-sm hover:text-white transition-colors">View All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="clean-table w-full text-left">
                        <thead>
                            <tr>
                                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-white/10">Project Name</th>
                                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-white/10">Client</th>
                                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-white/10">Start Date</th>
                                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-white/10">Deadline</th>
                                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-white/10">Status</th>
                                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-white/10">Progress</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[
                                { name: 'Product Dev', client: 'Kevin Heal', start: '20/2/2021', end: '5/6/2021', status: 'Active', progress: 85, color: 'blue' },
                                { name: 'New Office', client: 'Frank M', start: '15/3/2021', end: '12/8/2021', status: 'Pending', progress: 45, color: 'orange' },
                                { name: 'Website Redesign', client: 'Hyman Cross', start: '10/1/2021', end: '30/4/2021', status: 'Completed', progress: 100, color: 'green' },
                                { name: 'App Launch', client: 'Mike T', start: '01/4/2021', end: '01/9/2021', status: 'Active', progress: 25, color: 'blue' },
                            ].map((proj, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-medium text-white">{proj.name}</td>
                                    <td className="p-4 text-slate-400 text-sm">{proj.client}</td>
                                    <td className="p-4 text-slate-400 text-sm">{proj.start}</td>
                                    <td className="p-4 text-slate-400 text-sm">{proj.end}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded text-xs font-medium bg-${proj.color}-500/20 text-${proj.color}-400`}>
                                            {proj.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-24 bg-slate-700 rounded-full h-1.5">
                                                <div className={`bg-${proj.color}-500 h-1.5 rounded-full`} style={{ width: `${proj.progress}%` }}></div>
                                            </div>
                                            <span className="text-xs text-slate-400">{proj.progress}%</span>
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
