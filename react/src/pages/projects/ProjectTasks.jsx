import React, { useState } from 'react';
import { CheckCircle2, Circle, Trash2, Edit2, Plus, Filter, Search, Calendar, Clock, Flag, User } from 'lucide-react';

export default function ProjectTasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Design UI Mockups', status: 'completed', dueDate: '2025-01-10', priority: 'high', assignee: 'Sarah Chen', desc: 'Create mockups for all pages', project: 'Banking App', tags: ['design', 'ui'] },
    { id: 2, title: 'Setup Development Environment', status: 'completed', dueDate: '2025-01-05', priority: 'high', assignee: 'John Doe', desc: 'Configure dev tools and dependencies', project: 'E-Commerce', tags: ['dev', 'setup'] },
    { id: 3, title: 'API Endpoint Development', status: 'pending', dueDate: '2025-01-20', priority: 'high', assignee: 'Mike Johnson', desc: 'Build REST APIs for core features', project: 'Healthcare Portal', tags: ['backend', 'api'] },
    { id: 4, title: 'Database Schema Design', status: 'pending', dueDate: '2025-01-18', priority: 'medium', assignee: 'Lisa Wang', desc: 'Design database structure and relationships', project: 'Real Estate CRM', tags: ['database', 'design'] },
    { id: 5, title: 'Frontend Testing', status: 'pending', dueDate: '2025-02-01', priority: 'medium', assignee: 'Tom Martinez', desc: 'Unit and integration tests', project: 'E-Commerce', tags: ['testing', 'qa'] },
    { id: 6, title: 'Mobile Responsive Design', status: 'progress', dueDate: '2025-01-22', priority: 'high', assignee: 'Sarah Chen', desc: 'Ensure mobile compatibility', project: 'Banking App', tags: ['mobile', 'responsive'] },
    { id: 7, title: 'Security Audit', status: 'progress', dueDate: '2025-01-25', priority: 'critical', assignee: 'John Doe', desc: 'Comprehensive security review', project: 'Healthcare Portal', tags: ['security', 'audit'] },
  ]);

  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTasks = tasks.filter(t => {
    const matchesFilter = filter === 'all' || t.status === filter;
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         t.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getPriorityConfig = (priority) => {
    const configs = {
      critical: { bg: 'bg-red-500/20', border: 'border-red-500/30', text: 'text-red-700', icon: 'text-red-600' },
      high: { bg: 'bg-orange-500/20', border: 'border-orange-500/30', text: 'text-orange-700', icon: 'text-orange-600' },
      medium: { bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-700', icon: 'text-blue-600' },
      low: { bg: 'bg-slate-500/20', border: 'border-slate-500/30', text: 'text-slate-700', icon: 'text-slate-600' }
    };
    return configs[priority] || configs.medium;
  };

  const statusConfig = {
    completed: { label: 'Completed', color: 'from-green-500 to-emerald-500', text: 'text-green-700' },
    progress: { label: 'In Progress', color: 'from-purple-500 to-pink-500', text: 'text-purple-700' },
    pending: { label: 'Pending', color: 'from-orange-500 to-amber-500', text: 'text-orange-700' }
  };

  const stats = [
    { label: 'Total Tasks', value: tasks.length, icon: CheckCircle2, color: 'from-blue-500 to-indigo-500' },
    { label: 'Completed', value: tasks.filter(t => t.status === 'completed').length, icon: CheckCircle2, color: 'from-green-500 to-emerald-500' },
    { label: 'In Progress', value: tasks.filter(t => t.status === 'progress').length, icon: Clock, color: 'from-purple-500 to-pink-500' },
    { label: 'Pending', value: tasks.filter(t => t.status === 'pending').length, icon: Circle, color: 'from-orange-500 to-amber-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-1">Project Tasks</h1>
            <p className="text-slate-600 text-sm">Track and manage all project tasks</p>
          </div>
          <button className="px-4 py-2.5 backdrop-blur-xl bg-gradient-to-r from-indigo-500 to-purple-500 border border-white/60 rounded-3xl text-white hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl">
            <Plus className="inline-block w-4 h-4 mr-2" />
            New Task
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1">{stat.label}</p>
                <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
              </div>
            );
          })}
        </div>

        {/* Filters & Search */}
        <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tasks..."
                className="w-full pl-12 pr-4 py-3 backdrop-blur-xl bg-white/60 border border-white/60 rounded-3xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              {[
                { id: 'all', label: 'All' },
                { id: 'pending', label: 'Pending' },
                { id: 'progress', label: 'In Progress' },
                { id: 'completed', label: 'Completed' }
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`px-4 py-2 rounded-3xl font-medium text-sm transition-all duration-300 ${
                    filter === f.id
                      ? 'backdrop-blur-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                      : 'backdrop-blur-xl bg-white/40 text-slate-700 hover:bg-white/60'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tasks List */}
        <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl mb-6">
          <div className="space-y-3">
            {filteredTasks.map((task) => {
              const priorityConfig = getPriorityConfig(task.priority);
              const statusCfg = statusConfig[task.status];
              
              return (
                <div key={task.id} className="backdrop-blur-xl bg-white/60 border border-white/60 rounded-3xl p-5 hover:bg-white/70 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {/* Status Icon */}
                    <button className="mt-1 flex-shrink-0">
                      {task.status === 'completed' ? (
                        <CheckCircle2 className="text-green-600 w-6 h-6" />
                      ) : (
                        <Circle className="text-slate-400 w-6 h-6 hover:text-indigo-600 transition-colors" />
                      )}
                    </button>

                    {/* Task Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start gap-3 mb-2">
                        <h3 className={`font-bold text-slate-900 ${task.status === 'completed' ? 'line-through text-slate-500' : ''}`}>
                          {task.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-2xl text-xs font-semibold backdrop-blur-xl border ${priorityConfig.bg} ${priorityConfig.border} ${priorityConfig.text}`}>
                          <Flag className={`inline-block w-3 h-3 mr-1 ${priorityConfig.icon}`} />
                          {task.priority}
                        </span>
                        <span className={`px-3 py-1 rounded-2xl text-xs font-semibold backdrop-blur-xl bg-gradient-to-r ${statusCfg.color} text-white border border-white/30`}>
                          {statusCfg.label}
                        </span>
                      </div>

                      <p className="text-sm text-slate-600 mb-3">{task.desc}</p>

                      {/* Metadata */}
                      <div className="flex flex-wrap gap-4 items-center text-xs">
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <User className="w-4 h-4" />
                          <span className="font-medium">{task.assignee}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <Calendar className="w-4 h-4" />
                          <span>Due: {task.dueDate}</span>
                        </div>
                        <div className="backdrop-blur-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-700 px-2.5 py-1 rounded-2xl font-medium">
                          {task.project}
                        </div>
                        {task.tags.map((tag, i) => (
                          <span key={i} className="backdrop-blur-xl bg-slate-500/10 border border-slate-500/20 text-slate-600 px-2 py-0.5 rounded-2xl">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 flex-shrink-0">
                      <button className="p-2 backdrop-blur-xl bg-white/40 rounded-2xl hover:bg-white/60 transition-all duration-300 group">
                        <Edit2 className="w-4 h-4 text-slate-500 group-hover:text-indigo-600" />
                      </button>
                      <button className="p-2 backdrop-blur-xl bg-white/40 rounded-2xl hover:bg-red-500/20 transition-all duration-300 group">
                        <Trash2 className="w-4 h-4 text-slate-500 group-hover:text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredTasks.length === 0 && (
              <div className="text-center py-12 text-slate-500">
                <Circle className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p className="font-medium">No tasks found</p>
                <p className="text-sm">Try adjusting your filters or search query</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
