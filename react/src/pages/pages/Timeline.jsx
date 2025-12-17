import React from 'react';
import { ChevronRight, Dot } from 'lucide-react';

export default function Timeline() {
  const events = [
    { date: 'December 16, 2024', title: 'Project Launch', description: 'Successfully launched the new dashboard platform' },
    { date: 'December 10, 2024', title: 'Beta Testing', description: 'Completed beta testing with selected users' },
    { date: 'December 1, 2024', title: 'Development Phase', description: 'Finalized core features and components' },
    { date: 'November 15, 2024', title: 'Design Review', description: 'Completed design review with stakeholders' },
    { date: 'November 1, 2024', title: 'Project Kickoff', description: 'Project officially started with team planning' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span>Glacia</span>
          <ChevronRight size={16} />
          <span>Pages</span>
          <ChevronRight size={16} />
          <span className="text-gray-900 font-semibold">Timeline</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Project Timeline</h1>
      </div>

      {/* Timeline */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-300"></div>

          <div className="space-y-6">
            {events.map((event, idx) => (
              <div key={idx} className="pl-24">
                <div className="absolute left-2 w-12 h-12 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center">
                  <Dot size={24} className="text-blue-600" />
                </div>

                <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-sm">
                  <p className="text-xs font-semibold text-blue-600 mb-1">{event.date}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
