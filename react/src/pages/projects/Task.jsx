import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Task() {
    const [tasks] = useState([
        { id: 1, title: 'Organic Farming', time: '01:33 / 9:30', date: 'June 06', desc: 'There are many variations of passages of Lorem Ipsum available.', progress: 15, priority: 'success', assigned: [1, 5, 7], stats: { list: '15/100', comments: 3 } },
        { id: 2, title: 'Transfer Money', time: '01:33 / 9:30', date: 'June 06', desc: 'There are many variations of passages of Lorem Ipsum available.', progress: 50, priority: 'secondary', assigned: [2, 5, 7], stats: { list: '25/50', comments: 7 } },
        { id: 3, title: 'Book My World', time: '10:33 / 9:30', date: 'June 08', desc: 'There are many variations of passages of Lorem Ipsum available.', progress: 95, priority: 'danger', assigned: [9, 5, 7], stats: { list: '82/90', comments: 11 } },
        { id: 4, title: 'Mobile Account Setting', time: '01:20 / 1:30', date: 'June 06', desc: 'There are many variations of passages of Lorem Ipsum available.', progress: 100, priority: 'info', assigned: [2, 4, 6], stats: { list: '128/128', comments: 13 } },
    ]);

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Tasks',
                data: [12, 19, 3, 5, 2, 3, 10, 15, 20, 25, 30, 35],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                borderRadius: 4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: 'top', labels: { color: '#cbd5e1' } },
            title: { display: false },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: 'rgba(255, 255, 255, 0.1)' },
                ticks: { color: '#cbd5e1' }
            },
            x: {
                grid: { display: false },
                ticks: { color: '#cbd5e1' }
            }
        }
    };

    return (
        <div className="w-full">
            {/* Header / Breadcrumb */}
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold text-white tracking-wide">Tasks</h4>
                <div className="text-sm text-slate-400">
                    <span className="hover:text-white cursor-pointer">Metrica</span>
                    <span className="mx-2">/</span>
                    <span className="hover:text-white cursor-pointer">Projects</span>
                    <span className="mx-2">/</span>
                    <span className="text-white">Tasks</span>
                </div>
            </div>

            {/* Top Stats Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* Chart Card */}
                <div className="glass-card p-6">
                    <h4 className="text-lg font-bold text-white mb-4">Task Status</h4>
                    <Bar data={chartData} options={chartOptions} />
                </div>

                {/* Profile Card */}
                <div className="glass-card p-6 flex flex-col items-center justify-center text-center">
                    <div className="flex items-center mb-4">
                        <img src="https://mannatthemes.com/metrica/default/assets/images/users/user-4.jpg" alt="" className="w-20 h-20 rounded-full border-4 border-white/10" />
                        <div className="ml-4 text-left">
                            <h5 className="text-xl font-bold text-white">Robert Marshall</h5>
                            <p className="text-slate-400 text-sm">Project Manager</p>
                            <div className="flex text-yellow-400 text-sm mt-1">
                                <span className="material-icons-round">star</span>
                                <span className="material-icons-round">star</span>
                                <span className="material-icons-round">star</span>
                                <span className="material-icons-round">star</span>
                                <span className="material-icons-round">star_half</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-slate-400 text-sm mb-6">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin.</p>
                    <div className="flex gap-4 text-sm font-medium text-yellow-400 mb-6">
                        <span>2843 Followers</span>
                        <span>295 Following</span>
                    </div>
                    <button className="px-4 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 text-sm font-medium transition-all w-full">
                        More Detail
                    </button>
                </div>

                {/* Milestones Card */}
                <div className="glass-card p-6">
                    <h4 className="text-lg font-bold text-white mb-6">Milestones</h4>

                    {[
                        { label: 'Overall', progress: 85, color: 'bg-yellow-500', icon: 'A', iconBg: 'bg-yellow-500/20', iconColor: 'text-yellow-500', total: 100 },
                        { label: 'Frontend', progress: 55, color: 'bg-purple-500', icon: 'F', iconBg: 'bg-purple-500/20', iconColor: 'text-purple-500', total: 100 },
                        { label: 'Backend', progress: 45, color: 'bg-pink-500', icon: 'B', iconBg: 'bg-pink-500/20', iconColor: 'text-pink-500', total: 100 },
                        { label: 'Testing', progress: 35, color: 'bg-green-500', icon: 'T', iconBg: 'bg-green-500/20', iconColor: 'text-green-500', total: 100 },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center mb-5 last:mb-0">
                            <div className={`w-10 h-10 rounded-full ${item.iconBg} ${item.iconColor} flex items-center justify-center font-bold mr-4`}>
                                {item.icon}
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-center mb-1">
                                    <h6 className="text-white font-medium">{item.label}</h6>
                                    <span className="text-slate-400 text-xs">{item.progress}% Complete</span>
                                </div>
                                <div className="w-full bg-slate-700/50 rounded-full h-1.5">
                                    <div className={`h-1.5 rounded-full ${item.color}`} style={{ width: `${item.progress}%` }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Task Controls */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                    <h5 className="text-slate-300 mr-2">🏆 Metrica's available team members.</h5>
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map(i => (
                            <img key={i} src={`https://mannatthemes.com/metrica/default/assets/images/users/user-${i + 4}.jpg`} className="w-8 h-8 rounded-full border-2 border-slate-800" alt="" />
                        ))}
                        <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-800 flex items-center justify-center text-xs text-white cursor-pointer">+6</div>
                    </div>
                </div>
                <button className="bg-primary hover:bg-primary-dark text-white px-4 py-1.5 rounded-lg text-sm transition-colors shadow-lg shadow-primary/20">
                    Add New Task
                </button>
            </div>

            {/* Tasks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tasks.map((task) => (
                    <div key={task.id} className="glass-card p-6 hover:bg-white/10 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <i className={`fas fa-circle text-${task.priority === 'secondary' ? 'slate-400' : task.priority === 'info' ? 'blue-400' : task.priority === 'danger' ? 'red-500' : 'green-500'} text-xs`}></i>
                            <div className="text-xs text-slate-400">
                                <span>{task.time}</span>
                                <span className="mx-1">·</span>
                                <span><i className="far fa-clock mr-1"></i>{task.date}</span>
                            </div>
                        </div>

                        <h5 className="text-lg font-bold text-white mb-2">{task.title}</h5>
                        <p className="text-slate-400 text-sm mb-4">{task.desc}</p>

                        <div className="flex justify-between items-center mb-1 text-xs text-slate-400">
                            <span>Progress</span>
                            <span>{task.progress}% Complete</span>
                        </div>
                        <div className="w-full bg-slate-700/50 rounded-full h-1.5 mb-6">
                            <div className={`h-1.5 rounded-full bg-${task.priority === 'secondary' ? 'slate-400' : task.priority === 'info' ? 'blue-400' : task.priority === 'danger' ? 'red-500' : 'green-500'}`} style={{ width: `${task.progress}%` }}></div>
                        </div>

                        <div className="flex justify-between items-center border-t border-white/5 pt-4">
                            <div className="flex -space-x-2">
                                {task.assigned.map((u, i) => (
                                    <img key={i} src={`https://mannatthemes.com/metrica/default/assets/images/users/user-${u}.jpg`} className="w-8 h-8 rounded-full border-2 border-slate-800" alt="" />
                                ))}
                            </div>
                            <div className="flex gap-4 text-slate-400 text-sm">
                                <span className="flex items-center hover:text-white cursor-pointer"><span className="material-icons-round text-success text-base mr-1">format_list_bulleted</span> {task.stats.list}</span>
                                <span className="flex items-center hover:text-white cursor-pointer"><span className="material-icons-round text-primary text-base mr-1">chat_bubble_outline</span> {task.stats.comments}</span>
                                <span className="flex items-center hover:text-white cursor-pointer"><span className="material-icons-round text-base">edit</span></span>
                                <span className="flex items-center hover:text-red-400 cursor-pointer"><span className="material-icons-round text-base">delete</span></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
