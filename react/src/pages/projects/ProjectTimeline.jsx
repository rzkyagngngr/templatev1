import React from 'react';
import { Plus, ChevronRight } from 'lucide-react';

export default function ProjectTimeline() {
  const timeline = [
    { 
      date: '2025-01-05', 
      title: 'Project Kickoff', 
      description: 'Initial meeting with stakeholders',
      milestone: true,
      color: 'bg-green-100'
    },
    { 
      date: '2025-01-10', 
      title: 'Design Phase Complete', 
      description: 'All mockups and wireframes approved',
      milestone: false,
      color: 'bg-blue-100'
    },
    { 
      date: '2025-01-20', 
      title: 'Development Sprint 1', 
      description: 'API endpoints and database schema implementation',
      milestone: false,
      color: 'bg-purple-100'
    },
    { 
      date: '2025-02-01', 
      title: 'Sprint 1 Review', 
      description: 'Code review and QA testing',
      milestone: true,
      color: 'bg-orange-100'
    },
    { 
      date: '2025-02-15', 
      title: 'Development Sprint 2', 
      description: 'Frontend development and integration',
      milestone: false,
      color: 'bg-pink-100'
    },
    { 
      date: '2025-03-01', 
      title: 'UAT Phase', 
      description: 'User acceptance testing',
      milestone: true,
      color: 'bg-indigo-100'
    },
  ];

  const phases = [
    { phase: 'Planning', progress: 100, status: 'completed', color: 'bg-green-500' },
    { phase: 'Design', progress: 100, status: 'completed', color: 'bg-green-500' },
    { phase: 'Development', progress: 65, status: 'in-progress', color: 'bg-blue-500' },
    { phase: 'Testing', progress: 0, status: 'pending', color: 'bg-gray-300' },
    { phase: 'Launch', progress: 0, status: 'pending', color: 'bg-gray-300' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-black">Project Timeline</h1>
        <button className="bg-blue-500 text-slate-900 px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
          <Plus size={20} /> Add Event
        </button>
      </div>

      {/* Project Phases */}
      <div className="glass-card border border-gray-300 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-black mb-4">Project Phases</h2>
        <div className="space-y-4">
          {phases.map((phase, idx) => (
            <div key={idx} className="border border-gray-300 rounded-lg p-4 bg-white">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-black">{phase.phase}</span>
                <span className="text-sm text-gray-600">{phase.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div style={{ width: `${phase.progress}%` }} className={`${phase.color} h-2 rounded-full`}></div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-600"></span>
                <span className={`text-xs px-2 py-1 rounded capitalize ${
                  phase.status === 'completed' ? 'bg-green-100 text-green-800' :
                  phase.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {phase.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Events */}
      <div className="glass-card border border-gray-300 rounded-lg p-6">
        <h2 className="text-xl font-bold text-black mb-6">Timeline Events</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-400"></div>

          {/* Events */}
          <div className="space-y-6">
            {timeline.map((event, idx) => (
              <div key={idx} className="relative pl-24">
                {/* Timeline dot */}
                <div className={`absolute left-1 top-2 w-14 h-14 ${event.color} rounded-full flex items-center justify-center border border-gray-300`}>
                  <div className={`w-3 h-3 ${event.milestone ? 'bg-black rounded-full' : 'bg-white rounded-full border-2 border-black'}`}></div>
                </div>

                {/* Event card */}
                <div className="border border-gray-300 rounded-lg p-4 bg-white hover:bg-gray-50">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-black">{event.title}</h3>
                    <span className="text-sm text-gray-600">{event.date}</span>
                  </div>
                  <p className="text-sm text-gray-600">{event.description}</p>
                  {event.milestone && (
                    <div className="mt-2 inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      Milestone
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
