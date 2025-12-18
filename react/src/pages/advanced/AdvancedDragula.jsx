import React, { useState } from 'react';
import { GripVertical, RotateCcw, Trash2, Plus } from 'lucide-react';

const AdvancedDragula = () => {
  const initialItems = [
    { id: 1, title: 'Learn React', priority: 'High', color: 'from-red-400 to-pink-400' },
    { id: 2, title: 'Build Components', priority: 'High', color: 'from-orange-400 to-red-400' },
    { id: 3, title: 'Master Hooks', priority: 'Medium', color: 'from-yellow-400 to-orange-400' },
  ];

  const initialInProgress = [
    { id: 4, title: 'Code Review', priority: 'Medium', color: 'from-blue-400 to-cyan-400' },
    { id: 5, title: 'Deploy App', priority: 'Low', color: 'from-green-400 to-emerald-400' },
  ];

  const initialCompleted = [
    { id: 6, title: 'Setup Project', priority: 'Low', color: 'from-purple-400 to-pink-400' },
    { id: 7, title: 'Create Layout', priority: 'High', color: 'from-indigo-400 to-blue-400' },
    { id: 8, title: 'Add Styling', priority: 'Medium', color: 'from-teal-400 to-green-400' },
  ];

  const [todo, setTodo] = useState(initialItems);
  const [inProgress, setInProgress] = useState(initialInProgress);
  const [completed, setCompleted] = useState(initialCompleted);
  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedFrom, setDraggedFrom] = useState(null);

  const handleDragStart = (e, item, source) => {
    setDraggedItem(item);
    setDraggedFrom(source);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, destination) => {
    e.preventDefault();
    if (!draggedItem) return;

    if (draggedFrom === destination) {
      setDraggedItem(null);
      setDraggedFrom(null);
      return;
    }

    // Remove from source
    if (draggedFrom === 'todo') setTodo(todo.filter((i) => i.id !== draggedItem.id));
    if (draggedFrom === 'inProgress') setInProgress(inProgress.filter((i) => i.id !== draggedItem.id));
    if (draggedFrom === 'completed') setCompleted(completed.filter((i) => i.id !== draggedItem.id));

    // Add to destination
    if (destination === 'todo') setTodo([...todo, draggedItem]);
    if (destination === 'inProgress') setInProgress([...inProgress, draggedItem]);
    if (destination === 'completed') setCompleted([...completed, draggedItem]);

    setDraggedItem(null);
    setDraggedFrom(null);
  };

  const handleUndo = () => {
    setTodo(initialItems);
    setInProgress(initialInProgress);
    setCompleted(initialCompleted);
  };

  const renderColumn = (title, items, columnId, color) => (
    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-slate-900 flex items-center gap-2">
          <div className={`p-2 rounded-lg bg-gradient-to-br ${color} text-white`}>
            <GripVertical size={16} />
          </div>
          {title}
        </h3>
        <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
          {items.length}
        </span>
      </div>

      <div
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, columnId)}
        className="space-y-3 min-h-96 bg-slate-50/30 rounded-2xl p-4 border-2 border-dashed border-slate-200/50"
      >
        {items.map((item) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, item, columnId)}
            className={`group cursor-grab active:cursor-grabbing backdrop-blur-xl bg-gradient-to-br ${item.color} rounded-2xl border border-white/60 shadow-lg p-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="font-medium text-white">{item.title}</p>
                <p className="text-xs text-white/70 mt-1">{item.priority}</p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <GripVertical size={16} className="text-white/60" />
              </div>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <div className="flex flex-col items-center justify-center h-40 text-slate-400">
            <Plus size={32} className="opacity-30 mb-2" />
            <p className="text-sm">Drag items here</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Drag & Drop Tasks</h1>
          <div className="flex gap-2 text-sm text-slate-600">
            <span className="hover:text-indigo-600 cursor-pointer">Dashboard</span>
            <span>/</span>
            <span className="hover:text-indigo-600 cursor-pointer">Advanced</span>
            <span>/</span>
            <span className="text-indigo-600 font-medium">Drag & Drop</span>
          </div>
        </div>
        <button
          onClick={handleUndo}
          className="rounded-2xl border border-white/50 hover:scale-105 transition-all duration-300 p-3 bg-gradient-to-br from-indigo-50 to-blue-50 hover:shadow-lg"
        >
          <RotateCcw size={20} className="text-indigo-600" />
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'To Do', count: todo.length, color: 'from-red-100 to-pink-100' },
          { label: 'In Progress', count: inProgress.length, color: 'from-blue-100 to-cyan-100' },
          { label: 'Completed', count: completed.length, color: 'from-green-100 to-emerald-100' },
        ].map((stat) => (
          <div
            key={stat.label}
            className={`backdrop-blur-2xl bg-gradient-to-br ${stat.color} rounded-3xl border border-white/60 shadow-xl p-4 text-center`}
          >
            <p className="text-3xl font-bold text-slate-900">{stat.count}</p>
            <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Drag & Drop Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {renderColumn('To Do', todo, 'todo', 'from-red-400 to-pink-400')}
        {renderColumn('In Progress', inProgress, 'inProgress', 'from-blue-400 to-cyan-400')}
        {renderColumn('Completed', completed, 'completed', 'from-green-400 to-emerald-400')}
      </div>
    </div>
  );
};

export default AdvancedDragula;
