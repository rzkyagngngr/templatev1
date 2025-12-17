import React, { useState } from 'react';
import { ChevronRight, GripVertical } from 'lucide-react';

export default function AdvancedDragula() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Design new landing page', completed: false },
    { id: 2, title: 'Implement user authentication', completed: false },
    { id: 3, title: 'Setup database', completed: true },
    { id: 4, title: 'Create API endpoints', completed: false },
    { id: 5, title: 'Write documentation', completed: true },
  ]);

  const moveTask = (fromIdx, toIdx) => {
    const newTasks = [...tasks];
    const [task] = newTasks.splice(fromIdx, 1);
    newTasks.splice(toIdx, 0, task);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span>Glacia</span>
          <ChevronRight size={16} />
          <span>UI Kit</span>
          <ChevronRight size={16} />
          <span className="text-gray-900 font-semibold">Drag & Drop</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Advanced Dragula</h1>
      </div>

      {/* Examples */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Draggable Task List</h3>
          <div className="space-y-2">
            {tasks.map((task, idx) => (
              <div
                key={task.id}
                className="flex items-center gap-3 bg-white/50 p-3 rounded border border-gray-300 hover:bg-white/80 transition-colors cursor-move"
                draggable
                onDragStart={(e) => e.dataTransfer.effectAllowed = 'move'}
              >
                <GripVertical size={18} className="text-gray-400" />
                <input type="checkbox" defaultChecked={task.completed} className="rounded" />
                <span className={`text-sm font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                  {task.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Drop Zone</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <p className="text-sm text-gray-600">Drag items here to drop them</p>
          </div>
        </div>
      </div>
    </div>
  );
}
