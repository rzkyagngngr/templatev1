import React, { useState } from 'react';
import { Plus, Edit2, Trash2, ChevronRight } from 'lucide-react';

export default function ProjectKanban() {
  const [tasks, setTasks] = useState({
    todo: [
      { id: 1, title: 'Design Mockups', priority: 'high', assignee: 'Sarah' },
      { id: 2, title: 'Setup Database', priority: 'high', assignee: 'John' },
    ],
    inProgress: [
      { id: 3, title: 'API Development', priority: 'medium', assignee: 'Mike' },
      { id: 4, title: 'Frontend Components', priority: 'medium', assignee: 'Lisa' },
    ],
    review: [
      { id: 5, title: 'Code Review', priority: 'medium', assignee: 'Tom' },
    ],
    done: [
      { id: 6, title: 'Project Kickoff', priority: 'low', assignee: 'All' },
      { id: 7, title: 'Requirements Doc', priority: 'low', assignee: 'Admin' },
    ],
  });

  const columns = [
    { key: 'todo', label: 'To Do', color: 'bg-gray-100' },
    { key: 'inProgress', label: 'In Progress', color: 'bg-blue-100' },
    { key: 'review', label: 'Review', color: 'bg-yellow-100' },
    { key: 'done', label: 'Done', color: 'bg-green-100' },
  ];

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-black">Project Kanban Board</h1>
        <button className="bg-blue-500 text-slate-900 px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
          <Plus size={20} /> New Task
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {columns.map((column) => (
          <div key={column.key} className="glass-card border border-gray-300 rounded-lg p-4 bg-white min-h-96">
            <div className={`${column.color} p-3 rounded-lg mb-4`}>
              <h2 className="text-lg font-bold text-black">{column.label}</h2>
              <p className="text-sm text-gray-600">{tasks[column.key].length} tasks</p>
            </div>

            <div className="space-y-3">
              {tasks[column.key].map((task) => (
                <div key={task.id} className="border border-gray-300 rounded-lg p-3 bg-white hover:bg-gray-50 cursor-move">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-black text-sm flex-1">{task.title}</h3>
                    <Edit2 size={16} className="text-gray-400 cursor-pointer hover:text-black" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                    <span className="text-xs bg-gray-200 text-black px-2 py-1 rounded">{task.assignee}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 border border-gray-300 rounded-lg p-2 text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-2">
              <Plus size={16} /> Add Task
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
