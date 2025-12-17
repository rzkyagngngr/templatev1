import React, { useState } from 'react';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';

export default function QAPriority() {
  const [priorities] = useState([
    { level: 'Critical', count: 12, description: 'System breaking issues', color: 'bg-red-100/50 text-red-700', icon: AlertTriangle },
    { level: 'High', count: 34, description: 'Major feature impact', color: 'bg-orange-100/50 text-orange-700', icon: AlertCircle },
    { level: 'Medium', count: 67, description: 'Moderate functionality issues', color: 'bg-yellow-100/50 text-yellow-700', icon: AlertCircle },
    { level: 'Low', count: 89, description: 'Minor improvements needed', color: 'bg-blue-100/50 text-blue-700', icon: Info }
  ]);

  const [tasks] = useState([
    { id: 1, name: 'Database connection timeout', priority: 'Critical', assignee: 'John Doe', dueDate: '2025-01-16' },
    { id: 2, name: 'Payment gateway integration', priority: 'High', assignee: 'Jane Smith', dueDate: '2025-01-18' },
    { id: 3, name: 'UI button alignment', priority: 'Medium', assignee: 'Mike Johnson', dueDate: '2025-01-20' },
    { id: 4, name: 'Tooltip text update', priority: 'Low', assignee: 'Sarah Davis', dueDate: '2025-01-25' },
    { id: 5, name: 'API rate limiting', priority: 'High', assignee: 'Tom Wilson', dueDate: '2025-01-17' },
    { id: 6, name: 'Cache optimization', priority: 'Medium', assignee: 'John Doe', dueDate: '2025-01-22' }
  ]);

  const getPriorityColor = (priority) => {
    const colors = { Critical: 'text-red-700', High: 'text-orange-700', Medium: 'text-yellow-700', Low: 'text-blue-700' };
    return colors[priority] || 'text-gray-700';
  };

  const getPriorityBg = (priority) => {
    const colors = { Critical: 'bg-red-100/50', High: 'bg-orange-100/50', Medium: 'bg-yellow-100/50', Low: 'bg-blue-100/50' };
    return colors[priority] || 'bg-gray-100/50';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Priority Management</h1>

        {/* Priority Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {priorities.map((pri, idx) => {
            const Icon = pri.icon;
            return (
              <div key={idx} className={`backdrop-blur-xl ${pri.color} border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition`}>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-bold">{pri.level}</p>
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-3xl font-bold mb-2">{pri.count}</p>
                <p className="text-xs text-gray-600">{pri.description}</p>
              </div>
            );
          })}
        </div>

        {/* Priority Distribution Chart */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 mb-8 hover:bg-white/50 transition">
          <h2 className="text-lg font-bold text-black mb-6">Priority Distribution</h2>
          <div className="space-y-4">
            {priorities.map((pri, idx) => {
              const total = priorities.reduce((sum, p) => sum + p.count, 0);
              const percentage = (pri.count / total) * 100;
              return (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-black font-medium">{pri.level}</span>
                    <span className={`font-bold ${getPriorityColor(pri.level)}`}>{pri.count} ({percentage.toFixed(1)}%)</span>
                  </div>
                  <div className="w-full bg-gray-300/50 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full ${getPriorityBg(pri.level)}`}
                      style={{width: `${percentage}%`}}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Priority Tasks */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg overflow-hidden hover:bg-white/50 transition">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-4 px-6 text-black font-bold">Task</th>
                <th className="text-left py-4 px-6 text-black font-bold">Priority</th>
                <th className="text-left py-4 px-6 text-black font-bold">Assignee</th>
                <th className="text-left py-4 px-6 text-black font-bold">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, idx) => (
                <tr key={task.id} className={`border-b border-gray-300 hover:bg-white/30 ${idx % 2 === 0 ? 'bg-white/10' : ''}`}>
                  <td className="py-4 px-6 text-black font-medium">{task.name}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded text-sm font-bold ${getPriorityBg(task.priority)} ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-black">{task.assignee}</td>
                  <td className="py-4 px-6 text-black text-sm">{task.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
