import React, { useState } from 'react';

export default function ProjectList() {
    // Dummy Data
    const projects = [
        {
            id: 1,
            name: 'Banking',
            client: 'Hyman M. Cross',
            image: 'https://mannatthemes.com/metrica/default/assets/images/small/project-2.jpg',
            start: '15 Nov 2021',
            deadline: '28 Feb 2022',
            budget: '$56,800',
            hours: '530 / 281:30',
            daysLeft: 35,
            progress: 15,
            users: [1, 2, 3, 4],
            extraUsers: 6,
            status: 'active'
        },
        {
            id: 2,
            name: 'Transfer money',
            client: 'Jack Z Jackson',
            image: 'https://mannatthemes.com/metrica/default/assets/images/small/project-1.jpg',
            start: '08 Dec 2021',
            deadline: '28 Feb 2022',
            budget: '$33,100',
            hours: '530 / 281:30',
            daysLeft: 35,
            progress: 15,
            users: [5, 6, 7, 8],
            extraUsers: 2,
            status: 'success' // Mapping to green badge usage
        },
        {
            id: 3,
            name: 'Organic Farming',
            client: 'Hyman M. Cross',
            image: 'https://mannatthemes.com/metrica/default/assets/images/small/project-3.jpg',
            start: '15 Nov 2021',
            deadline: '28 Feb 2022',
            budget: '$56,800',
            hours: '530 / 281:30',
            daysLeft: 35,
            progress: 15,
            users: [1, 2, 3, 4],
            extraUsers: 6,
            status: 'primary'
        },
        {
            id: 4,
            name: 'Book My World',
            client: 'Hyman M. Cross',
            image: 'https://mannatthemes.com/metrica/default/assets/images/small/project-1.jpg',
            start: '15 Nov 2021',
            deadline: '28 Feb 2022',
            budget: '$82,000',
            hours: '530 / 281:30',
            daysLeft: 35,
            progress: 15,
            users: [5, 6, 7, 8],
            extraUsers: 6,
            status: 'warning'
        },
        {
            id: 5,
            name: 'Body Care',
            client: 'Hyman M. Cross',
            image: 'https://mannatthemes.com/metrica/default/assets/images/small/project-2.jpg',
            start: '15 Nov 2021',
            deadline: '28 Feb 2022',
            budget: '$28,500',
            hours: '530 / 281:30',
            daysLeft: 35,
            progress: 15,
            users: [1, 2, 3, 4],
            extraUsers: 6,
            status: 'info'
        },
        {
            id: 6,
            name: 'New GPS System',
            client: 'Hyman M. Cross',
            image: 'https://mannatthemes.com/metrica/default/assets/images/small/project-3.jpg',
            start: '15 Nov 2021',
            deadline: '28 Feb 2022',
            budget: '$35,200',
            hours: '530 / 281:30',
            daysLeft: 35,
            progress: 15,
            users: [5, 6, 7, 8],
            extraUsers: 6,
            status: 'purple'
        },
    ];

    return (
        <div className="w-full">
            {/* Header / Breadcrumb */}
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold text-white tracking-wide">Projects</h4>
                <div className="text-sm text-slate-400">
                    <span className="hover:text-white cursor-pointer">Metrica</span>
                    <span className="mx-2">/</span>
                    <span className="hover:text-white cursor-pointer">Projects</span>
                    <span className="mx-2">/</span>
                    <span className="text-white">All</span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h5 className="text-slate-300">Here is the list of all projects. <span className="bg-pink-500/20 text-pink-500 px-2 py-0.5 rounded text-xs ml-2">6</span></h5>
                <div className="flex gap-2">
                    <div className="relative">
                        <input type="text" placeholder="Search" className="bg-white/5 border border-white/10 rounded-lg px-4 py-1.5 text-sm text-white focus:outline-none focus:border-primary/50 w-48" />
                        <span className="material-icons-round absolute right-2 top-1.5 text-slate-400 text-sm pointer-events-none">search</span>
                    </div>
                    <button className="bg-primary hover:bg-primary-dark text-white px-4 py-1.5 rounded-lg text-sm transition-colors shadow-lg shadow-primary/20 flex items-center gap-1">
                        <span className="material-icons-round text-sm">filter_list</span>
                    </button>
                    <button className="bg-primary hover:bg-primary-dark text-white px-4 py-1.5 rounded-lg text-sm transition-colors shadow-lg shadow-primary/20">
                        + Add New Project
                    </button>
                </div>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="glass-card p-6 flex flex-col h-full hover:bg-white/10 transition-colors group">
                        <div className="flex items-center gap-4 mb-4">
                            <img src={project.image} alt={project.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/10" />
                            <div className="overflow-hidden">
                                <h4 className="text-lg font-bold text-white truncate">{project.name}</h4>
                                <p className="text-slate-400 text-xs truncate">Client: {project.client}</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-4 text-xs text-slate-400 border-b border-white/5 pb-4">
                            <div>
                                <span className="block font-semibold text-slate-300">Start:</span> {project.start}
                            </div>
                            <div className="text-right">
                                <span className="block font-semibold text-slate-300">Deadline:</span> {project.deadline}
                            </div>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-white">{project.budget}</h3>
                            <p className="text-slate-500 text-xs font-medium">Total Budget</p>
                        </div>

                        <p className="text-slate-400 text-xs mb-4 line-clamp-3">
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form.
                        </p>

                        <div className="mt-auto">
                            <div className="flex justify-between text-xs mb-1">
                                <span className="font-semibold text-slate-300">All Hours: <span className="text-slate-500 font-normal">{project.hours}</span></span>
                                <span className="font-semibold text-slate-300">
                                    Today: <span className="text-slate-500 font-normal">2:45</span>
                                    <span className={`bg-${getBadgeColor(project.status)}-500/20 text-${getBadgeColor(project.status)}-400 ml-2 px-1.5 py-0.5 rounded`}>
                                        {project.daysLeft} days left
                                    </span>
                                </span>
                            </div>
                            <div className="flex justify-end text-xs text-slate-500 mb-1">{project.progress}% Complete</div>
                            <div className="w-full bg-slate-700/50 rounded-full h-1.5 mb-4">
                                <div className={`h-1.5 rounded-full bg-${getProgressBarColor(project.status)}-500`} style={{ width: `${project.progress}%` }}></div>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex -space-x-2">
                                    {project.users.map((u, index) => (
                                        <img key={index} src={`https://mannatthemes.com/metrica/default/assets/images/users/user-${u + 4}.jpg`} className="w-8 h-8 rounded-full border-2 border-slate-800" alt="user" />
                                    ))}
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 border-2 border-slate-800 flex items-center justify-center text-xs text-blue-400 font-semibold">+{project.extraUsers}</div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="text-slate-400 hover:text-white transition-colors" title="List"><span className="material-icons-round text-lg">format_list_bulleted</span></button>
                                    <button className="text-slate-400 hover:text-white transition-colors" title="Comments"><span className="material-icons-round text-lg">chat_bubble_outline</span></button>
                                    <button className="text-slate-400 hover:text-white transition-colors" title="Edit"><span className="material-icons-round text-lg">edit</span></button>
                                    <button className="text-slate-400 hover:text-red-400 transition-colors" title="Delete"><span className="material-icons-round text-lg">delete</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function getBadgeColor(status) {
    if (status === 'success') return 'green';
    if (status === 'warning') return 'orange';
    if (status === 'info') return 'cyan';
    if (status === 'purple') return 'purple';
    return 'pink'; // default active/primary
}

function getProgressBarColor(status) {
    if (status === 'success') return 'green';
    if (status === 'warning') return 'orange';
    if (status === 'info') return 'cyan';
    if (status === 'purple') return 'purple';
    return 'purple'; // default
}
