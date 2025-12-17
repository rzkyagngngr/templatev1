import React from 'react';
import { Layout, BookOpen, CheckCircle, AlertCircle } from 'lucide-react';

export default function TrainingModules() {
  const modules = [
    { id: 'MOD-001', name: 'Module 1: Foundations', lessons: '8', status: 'Completed' },
    { id: 'MOD-002', name: 'Module 2: Intermediate', lessons: '10', status: 'In Progress' },
    { id: 'MOD-003', name: 'Module 3: Advanced', lessons: '12', status: 'Not Started' },
    { id: 'MOD-004', name: 'Module 4: Mastery', lessons: '15', status: 'Not Started' },
  ];

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Completed': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'In Progress': return <AlertCircle className="w-5 h-5 text-blue-600" />;
      default: return <Layout className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Training Modules</h1>

        {/* Modules List */}
        <div className="space-y-4 mb-8">
          {modules.map((module) => (
            <div key={module.id} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <BookOpen className="w-6 h-6 text-black" />
                  <div>
                    <p className="font-bold text-black">{module.name}</p>
                    <p className="text-gray-600 text-sm">Lessons: {module.lessons}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(module.status)}
                  <p className="text-black font-medium">{module.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Status */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <h2 className="text-xl font-bold text-black mb-4">Status</h2>
          <p className="text-black">CREATED</p>
        </div>
      </div>
    </div>
  );
}
