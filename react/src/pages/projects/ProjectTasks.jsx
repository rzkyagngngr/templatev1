import React, { useState } from 'react';
import { CheckCircle, Circle, Trash2, Edit2, Plus } from 'lucide-react';

export default function ProjectTasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Design UI Mockups', status: 'completed', dueDate: '2025-01-10', priority: 'high', assignee: 'Sarah', desc: 'Create mockups for all pages' },
    { id: 2, title: 'Setup Development Environment', status: 'completed', dueDate: '2025-01-05', priority: 'high', assignee: 'John', desc: 'Configure dev tools' },
    { id: 3, title: 'API Endpoint Development', status: 'pending', dueDate: '2025-01-20', priority: 'high', assignee: 'Mike', desc: 'Build REST APIs' },
    { id: 4, title: 'Database Schema Design', status: 'pending', dueDate: '2025-01-18', priority: 'medium', assignee: 'Lisa', desc: 'Design database structure' },
    { id: 5, title: 'Frontend Testing', status: 'pending', dueDate: '2025-02-01', priority: 'medium', assignee: 'Tom', desc: 'Unit and integration tests' },
  ]);

  const [filter, setFilter] = useState('all');

  const filteredTasks = filter === 'all' ? tasks : tasks.filter(t => t.status === filter);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-black">Project Tasks</h1>
        <button className="bg-blue-500 text-slate-900 px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
          <Plus size={20} /> New Task
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {['all', 'pending', 'completed'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg font-medium text-sm capitalize ${
              filter === f
                ? 'bg-blue-500 ='
                : 'glass-card border border-gray-300 text-black hover:bg-gray-100'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Tasks List */}
      <div className="glass-card border border-gray-300 rounded-lg p-6 mb-6">
        <div className="space-y-4">
          {filteredTasks.map((task) => (
            <div key={task.id} className="border border-gray-300 rounded-lg p-4 bg-white hover:bg-gray-50">
              <div className="flex items-start gap-4">
                <button className="mt-1 flex-shrink-0">
                  {task.status === 'completed' ? (
                    <CheckCircle className="text-green-500" size={24} />
                  ) : (
                    <Circle className="text-gray-400" size={24} />
                  )}
                </button>

                <div className="flex-1">
                  <h3 className={`font-bold text-black mb-1 ${task.status === 'completed' ? 'line-through text-gray-500' : ''}`}>
                    {task.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{task.desc}</p>

                  <div className="flex flex-wrap gap-2 items-center">
                    <span className={`text-xs px-2 py-1 rounded ${
                      task.priority === 'high' ? 'bg-red-100 text-red-800' :
                      task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {task.priority} priority
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{task.assignee}</span>
                    <span className="text-xs text-gray-600">Due: {task.dueDate}</span>
                  </div>
                </div>

                <div className="flex gap-2 flex-shrink-0">
                  <Edit2 size={18} className="text-gray-400 cursor-pointer hover:text-black" />
                  <Trash2 size={18} className="text-gray-400 cursor-pointer hover:text-red-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Task Statistics */}
      <div className="grid grid-cols-3 gap-4">
        <div className="glass-card border border-gray-300 rounded-lg p-4 bg-white">
          <p className="text-gray-600 text-sm mb-1">Total Tasks</p>
          <p className="text-3xl font-bold text-black">{tasks.length}</p>
        </div>
        <div className="glass-card border border-gray-300 rounded-lg p-4 bg-white">
          <p className="text-gray-600 text-sm mb-1">Completed</p>
          <p className="text-3xl font-bold text-green-600">{tasks.filter(t => t.status === 'completed').length}</p>
        </div>
        <div className="glass-card border border-gray-300 rounded-lg p-4 bg-white">
          <p className="text-gray-600 text-sm mb-1">Pending</p>
          <p className="text-3xl font-bold text-orange-600">{tasks.filter(t => t.status === 'pending').length}</p>
        </div>
      </div>
    </div>
  );
}
