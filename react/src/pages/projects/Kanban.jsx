import React, { useState } from 'react';

export default function Kanban() {
    const [columns] = useState([
        {
            id: 'new',
            title: 'New Projects',
            color: 'border-blue-500',
            tasks: [
                { id: 1, title: 'Mobile Account Setting', subtitle: 'Mobile App', priority: 'warning', comments: 3, assigned: [1, 9], totalInfo: '0/5' },
                { id: 2, title: 'Mobile Account Setting', subtitle: 'Mobile App', priority: 'success', comments: 3, assigned: [2], totalInfo: '0/5' },
                { id: 3, title: 'Mobile Account Setting', subtitle: 'Mobile App', priority: 'danger', comments: 3, assigned: [3, 1], totalInfo: '0/5' },
                { id: 4, title: 'Mobile Account Setting', subtitle: 'Mobile App', priority: 'purple', comments: 3, assigned: [4], totalInfo: '0/5' },
            ]
        },
        {
            id: 'todo',
            title: 'To Do',
            color: 'border-pink-500',
            tasks: [
                { id: 5, title: 'Mobile Account Setting', subtitle: 'Mobile App', priority: 'warning', comments: 3, assigned: [1, 9], totalInfo: '0/5' },
                { id: 6, title: 'Mobile Account Setting', subtitle: 'Mobile App', priority: 'success', comments: 3, assigned: [2], totalInfo: '0/5' },
            ]
        },
        {
            id: 'progress',
            title: 'In Progress',
            color: 'border-purple-500',
            tasks: [
                { id: 7, title: 'Mobile Account Setting', subtitle: 'Mobile App', priority: 'warning', comments: 3, assigned: [1, 9], totalInfo: '0/5' },
                { id: 8, title: 'Mobile Account Setting', subtitle: 'Mobile App', priority: 'success', comments: 3, assigned: [2], totalInfo: '0/5' },
                { id: 9, title: 'Mobile Account Setting', subtitle: 'Mobile App', priority: 'danger', comments: 3, assigned: [3, 1], totalInfo: '0/5' },
            ]
        },
        {
            id: 'done',
            title: 'Done',
            color: 'border-green-500',
            tasks: [
                { id: 10, title: 'Mobile Account Setting', subtitle: 'Mobile App', priority: 'warning', comments: 3, assigned: [1, 9], totalInfo: '0/5' },
            ]
        },
    ]);

    return (
        <div className="w-full h-full flex flex-col">
            {/* Header / Breadcrumb */}
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold text-slate-900 tracking-wide">Kanban Board</h4>
                <div className="text-sm text-slate-400">
                    <span className="hover:text-slate-900 cursor-pointer">Glacia</span>
                    <span className="mx-2">/</span>
                    <span className="hover:text-slate-900 cursor-pointer">Projects</span>
                    <span className="mx-2">/</span>
                    <span className="text-slate-900">Kanban</span>
                </div>
            </div>

            <div className="flex-grow overflow-x-auto">
                <div className="flex gap-6 min-w-max pb-6">
                    {columns.map((col) => (
                        <div key={col.id} className="w-80 flex-shrink-0 flex flex-col">
                            <div className={`glass-card p-4 border-t-4 ${col.color} mb-4 flex justify-between items-center bg-slate-900/40`}>
                                <h5 className="font-bold =">{col.title}</h5>
                                <button className="text-slate-700 hover:="><span className="material-icons-round text-sm">more_vert</span></button>
                            </div>

                            <div className="flex flex-col gap-4">
                                {col.tasks.map((task) => (
                                    <div key={task.id} className="glass-card p-4 hover:bg-white/10 transition-colors cursor-pointer group">
                                        <div className="flex justify-between items-start mb-2">
                                            <i className={`mdi mdi-circle-outline font-14 text-${task.priority === 'purple' ? 'purple-500' : task.priority === 'danger' ? 'red-500' : task.priority === 'success' ? 'green-500' : 'yellow-500'}`}></i>
                                            <div className="dropdown opacity-0 group-hover:opacity-100 transition-opacity">
                                                <a href="#" className="text-slate-700 hover:="><span className="material-icons-round text-sm">more_vert</span></a>
                                            </div>
                                        </div>
                                        <h5 className="text-slate-900 font-bold text-sm mb-1">{task.title}</h5>
                                        <p className="text-slate-700 text-xs mb-3">{task.subtitle}</p>

                                        <div className="flex justify-between items-center">
                                            <div className="flex gap-3 text-slate-700 text-xs">
                                                <span className="flex items-center"><span className="material-icons-round text-[10px] mr-1">format_list_bulleted</span> {task.totalInfo}</span>
                                                <span className="flex items-center"><span className="material-icons-round text-[10px] mr-1">chat_bubble_outline</span> {task.comments}</span>
                                            </div>
                                            <div className="flex -space-x-2">
                                                {task.assigned.map((a, i) => (
                                                    <img key={i} src={`https://picsum.photos/seed/user${a}/100`} className="w-6 h-6 rounded-full backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 border border-white/60 shadow-2xl hover:scale-105 transition-all duration-300" alt="" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <button className="w-full py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors border border-dashed border-white/20">
                                    + Add Task
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
