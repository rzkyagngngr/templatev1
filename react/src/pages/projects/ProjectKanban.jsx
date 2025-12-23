import React, { useState } from 'react';
import { Plus, MoreVertical, MessageSquare, CheckSquare, Paperclip, Calendar as CalendarIcon } from 'lucide-react';

export default function ProjectKanban() {
    const [columns] = useState([
        {
            id: 'backlog',
            title: 'Backlog',
            color: 'from-slate-500 to-gray-500',
            borderColor: 'border-slate-500',
            tasks: [
                { id: 1, title: 'Implement dark mode toggle', subtitle: 'UI Enhancement', priority: 'medium', comments: 3, attachments: 2, assigned: ['https://picsum.photos/seed/user1/100', 'https://picsum.photos/seed/user2/100'], dueDate: '2024-02-01', checklist: { completed: 2, total: 5 } },
                { id: 2, title: 'Add user authentication', subtitle: 'Backend Feature', priority: 'high', comments: 5, attachments: 1, assigned: ['https://picsum.photos/seed/user3/100'], dueDate: '2024-01-28', checklist: { completed: 0, total: 8 } },
            ]
        },
        {
            id: 'todo',
            title: 'To Do',
            color: 'from-blue-500 to-indigo-500',
            borderColor: 'border-blue-500',
            tasks: [
                { id: 3, title: 'Design new landing page', subtitle: 'Marketing', priority: 'high', comments: 8, attachments: 5, assigned: ['https://picsum.photos/seed/user4/100', 'https://picsum.photos/seed/user5/100'], dueDate: '2024-01-25', checklist: { completed: 3, total: 6 } },
                { id: 4, title: 'Optimize database queries', subtitle: 'Performance', priority: 'critical', comments: 2, attachments: 0, assigned: ['https://picsum.photos/seed/user6/100'], dueDate: '2024-01-22', checklist: { completed: 1, total: 4 } },
                { id: 5, title: 'Update documentation', subtitle: 'Documentation', priority: 'low', comments: 1, attachments: 3, assigned: ['https://picsum.photos/seed/user7/100', 'https://picsum.photos/seed/user8/100'], dueDate: '2024-02-05', checklist: { completed: 0, total: 3 } },
            ]
        },
        {
            id: 'progress',
            title: 'In Progress',
            color: 'from-purple-500 to-pink-500',
            borderColor: 'border-purple-500',
            tasks: [
                { id: 6, title: 'Mobile app development', subtitle: 'Mobile App', priority: 'high', comments: 12, attachments: 8, assigned: ['https://picsum.photos/seed/user9/100', 'https://picsum.photos/seed/user10/100', 'https://picsum.photos/seed/user11/100'], dueDate: '2024-01-30', checklist: { completed: 5, total: 10 } },
                { id: 7, title: 'API integration testing', subtitle: 'Testing', priority: 'medium', comments: 4, attachments: 2, assigned: ['https://picsum.photos/seed/user12/100'], dueDate: '2024-01-27', checklist: { completed: 3, total: 5 } },
            ]
        },
        {
            id: 'review',
            title: 'Review',
            color: 'from-orange-500 to-amber-500',
            borderColor: 'border-orange-500',
            tasks: [
                { id: 8, title: 'Security audit results', subtitle: 'Security', priority: 'critical', comments: 6, attachments: 4, assigned: ['https://picsum.photos/seed/user13/100', 'https://picsum.photos/seed/user14/100'], dueDate: '2024-01-24', checklist: { completed: 7, total: 8 } },
            ]
        },
        {
            id: 'done',
            title: 'Done',
            color: 'from-green-500 to-emerald-500',
            borderColor: 'border-green-500',
            tasks: [
                { id: 9, title: 'Payment gateway integration', subtitle: 'Payment', priority: 'high', comments: 15, attachments: 6, assigned: ['https://picsum.photos/seed/user15/100'], dueDate: '2024-01-20', checklist: { completed: 12, total: 12 } },
                { id: 10, title: 'User onboarding flow', subtitle: 'UX', priority: 'medium', comments: 7, attachments: 3, assigned: ['https://picsum.photos/seed/user16/100', 'https://picsum.photos/seed/user17/100'], dueDate: '2024-01-18', checklist: { completed: 6, total: 6 } },
            ]
        },
    ]);

    const getPriorityColor = (priority) => {
        const colors = {
            critical: 'bg-red-500/20 border-red-500/30 text-red-700',
            high: 'bg-orange-500/20 border-orange-500/30 text-orange-700',
            medium: 'bg-blue-500/20 border-blue-500/30 text-blue-700',
            low: 'bg-slate-500/20 border-slate-500/30 text-slate-700'
        };
        return colors[priority] || colors.medium;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <div className="w-full h-full flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-1">Kanban Board</h1>
                        <p className="text-slate-600 text-sm">Visualize and manage project workflow</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2.5 backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl text-slate-700 hover:bg-white/70 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl">
                            <MoreVertical className="inline-block w-4 h-4 mr-2" />
                            Options
                        </button>
                        <button className="px-4 py-2.5 backdrop-blur-xl bg-gradient-to-r from-indigo-500 to-purple-500 border border-white/60 rounded-3xl text-white hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl">
                            <Plus className="inline-block w-4 h-4 mr-2" />
                            Add Task
                        </button>
                    </div>
                </div>

                {/* Board Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                    {columns.map((col) => (
                        <div key={col.id} className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className={`w-8 h-8 rounded-2xl bg-gradient-to-r ${col.color} flex items-center justify-center mb-2 shadow-md`}>
                                <span className="text-white font-bold text-sm">{col.tasks.length}</span>
                            </div>
                            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider">{col.title}</p>
                        </div>
                    ))}
                </div>

                {/* Kanban Columns */}
                <div className="flex-grow overflow-x-auto pb-6">
                    <div className="flex gap-6 min-w-max">
                        {columns.map((col) => (
                            <div key={col.id} className="w-80 flex-shrink-0 flex flex-col">
                                {/* Column Header */}
                                <div className={`backdrop-blur-xl bg-white/50 border-t-4 ${col.borderColor} border border-white/60 rounded-3xl p-4 mb-4 shadow-xl`}>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${col.color}`}></div>
                                            <h5 className="font-bold text-slate-900 text-sm">{col.title}</h5>
                                            <span className="backdrop-blur-xl bg-slate-500/20 border border-slate-500/30 text-slate-700 text-xs font-bold px-2 py-0.5 rounded-2xl">
                                                {col.tasks.length}
                                            </span>
                                        </div>
                                        <button className="text-slate-600 hover:text-slate-900 transition-colors">
                                            <MoreVertical className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Tasks */}
                                <div className="flex flex-col gap-3 flex-1">
                                    {col.tasks.map((task) => (
                                        <div key={task.id} className="backdrop-blur-xl bg-white/60 border border-white/60 rounded-3xl p-4 shadow-lg hover:shadow-2xl hover:bg-white/70 transition-all duration-300 cursor-pointer group">
                                            {/* Priority Badge */}
                                            <div className="flex justify-between items-start mb-3">
                                                <span className={`px-2.5 py-1 rounded-2xl text-xs font-semibold backdrop-blur-xl border ${getPriorityColor(task.priority)}`}>
                                                    {task.priority}
                                                </span>
                                                <button className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-600 hover:text-slate-900">
                                                    <MoreVertical className="w-4 h-4" />
                                                </button>
                                            </div>

                                            {/* Task Title */}
                                            <h5 className="text-slate-900 font-bold text-sm mb-1">{task.title}</h5>
                                            <p className="text-slate-600 text-xs mb-4">{task.subtitle}</p>

                                            {/* Checklist Progress */}
                                            {task.checklist && (
                                                <div className="mb-4">
                                                    <div className="flex items-center justify-between mb-1.5">
                                                        <div className="flex items-center gap-1 text-xs text-slate-600">
                                                            <CheckSquare className="w-3 h-3" />
                                                            <span className="font-medium">{task.checklist.completed}/{task.checklist.total}</span>
                                                        </div>
                                                        <span className="text-xs font-semibold text-slate-700">
                                                            {Math.round((task.checklist.completed / task.checklist.total) * 100)}%
                                                        </span>
                                                    </div>
                                                    <div className="w-full backdrop-blur-xl bg-white/40 rounded-full h-1.5">
                                                        <div 
                                                            className={`h-1.5 rounded-full bg-gradient-to-r ${col.color}`}
                                                            style={{ width: `${(task.checklist.completed / task.checklist.total) * 100}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Due Date */}
                                            {task.dueDate && (
                                                <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-3">
                                                    <CalendarIcon className="w-3 h-3" />
                                                    <span>{task.dueDate}</span>
                                                </div>
                                            )}

                                            {/* Footer */}
                                            <div className="flex justify-between items-center pt-3 border-t border-white/40">
                                                <div className="flex gap-3 text-slate-600 text-xs">
                                                    {task.comments > 0 && (
                                                        <div className="flex items-center gap-1 hover:text-slate-900 transition-colors cursor-pointer">
                                                            <MessageSquare className="w-3.5 h-3.5" />
                                                            <span className="font-medium">{task.comments}</span>
                                                        </div>
                                                    )}
                                                    {task.attachments > 0 && (
                                                        <div className="flex items-center gap-1 hover:text-slate-900 transition-colors cursor-pointer">
                                                            <Paperclip className="w-3.5 h-3.5" />
                                                            <span className="font-medium">{task.attachments}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex -space-x-2">
                                                    {task.assigned.slice(0, 3).map((avatar, i) => (
                                                        <img 
                                                            key={i} 
                                                            src={avatar} 
                                                            className="w-7 h-7 rounded-full backdrop-blur-xl bg-white/90 border-2 border-white shadow-lg hover:scale-110 hover:z-10 transition-all duration-300" 
                                                            alt="" 
                                                        />
                                                    ))}
                                                    {task.assigned.length > 3 && (
                                                        <div className="w-7 h-7 rounded-full backdrop-blur-xl bg-gradient-to-r from-indigo-500 to-purple-500 border-2 border-white shadow-lg flex items-center justify-center text-xs text-white font-bold">
                                                            +{task.assigned.length - 3}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Add Task Button */}
                                    <button className="backdrop-blur-xl bg-white/40 border-2 border-dashed border-white/60 rounded-3xl py-3 text-slate-600 hover:text-slate-900 hover:bg-white/60 hover:border-white/80 text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                                        <Plus className="inline-block w-4 h-4 mr-2" />
                                        Add Task
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
