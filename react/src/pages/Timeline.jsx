import React, { useState } from 'react';
import { ChevronRight, Circle, Calendar, Clock } from 'lucide-react';

export default function Timeline() {
  const [activeId, setActiveId] = useState(1);

  const events = [
    { id: 1, title: 'Company Founded', date: 'January 2020', icon: '🚀', color: 'blue', desc: 'Started our journey to revolutionize dashboard solutions' },
    { id: 2, title: 'Series A Funding', date: 'June 2021', icon: '💰', color: 'emerald', desc: 'Raised $5M to accelerate growth and development' },
    { id: 3, title: 'First 10K Users', date: 'December 2021', icon: '🎉', color: 'amber', desc: 'Reached significant milestone in user adoption' },
    { id: 4, title: 'Global Expansion', date: 'August 2022', icon: '🌍', color: 'cyan', desc: 'Launched operations in 15 new countries' },
    { id: 5, title: 'AI Integration', date: 'March 2023', icon: '🤖', color: 'violet', desc: 'Released AI-powered analytics features' },
    { id: 6, title: 'Series B Closing', date: 'November 2023', icon: '📈', color: 'rose', desc: 'Secured additional funding for innovation' }
  ];

  const colorMap = {
    blue: 'from-blue-400/50 to-cyan-400/50',
    emerald: 'from-emerald-400/50 to-teal-400/50',
    amber: 'from-amber-400/50 to-orange-400/50',
    cyan: 'from-cyan-400/50 to-blue-400/50',
    violet: 'from-violet-400/50 to-purple-400/50',
    rose: 'from-rose-400/50 to-pink-400/50'
  };

  const shadowMap = {
    blue: 'shadow-blue-200/40',
    emerald: 'shadow-emerald-200/40',
    amber: 'shadow-amber-200/40',
    cyan: 'shadow-cyan-200/40',
    violet: 'shadow-violet-200/40',
    rose: 'shadow-rose-200/40'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm">
        <span className="text-gray-600">Glacia</span>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="text-gray-600">Pages</span>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Timeline</span>
      </div>

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">Our Journey</h1>
        <p className="text-gray-600 text-lg">Milestones and achievements that shaped Glacia</p>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, idx) => (
            <div
              key={event.id}
              onClick={() => setActiveId(event.id)}
              className={`group cursor-pointer transition-all duration-300 ${activeId === event.id ? 'md:col-span-2' : ''}`}
            >
              <div className={`backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl ${shadowMap[event.color]} overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 p-8 ${activeId === event.id ? 'ring-2 ring-offset-2 ring-blue-400' : ''}`}>
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className={`p-4 backdrop-blur-xl bg-gradient-to-br ${colorMap[event.color]} border border-white/50 rounded-2xl flex-shrink-0 flex items-center justify-center text-2xl h-fit`}>
                    {event.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    {activeId === event.id && (
                      <p className="text-gray-700 leading-relaxed">{event.desc}</p>
                    )}
                  </div>

                  {/* Timeline Dot */}
                  <div className="flex flex-col items-center gap-2 flex-shrink-0">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${colorMap[event.color]} border-2 border-white shadow-lg`} />
                    {idx < events.length - 1 && (
                      <div className="w-1 h-12 bg-gradient-to-b from-blue-300 to-purple-300 rounded-full" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
