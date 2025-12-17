import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export default function ProjectCalendar() {
  const [currentMonth, setCurrentMonth] = useState(0);

  const events = [
    { date: '2025-01-15', title: 'Sprint Planning', type: 'meeting' },
    { date: '2025-01-18', title: 'Design Review', type: 'review' },
    { date: '2025-01-20', title: 'Code Review', type: 'review' },
    { date: '2025-01-25', title: 'Release Preparation', type: 'milestone' },
    { date: '2025-01-28', title: 'Team Standup', type: 'meeting' },
  ];

  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const today = new Date();
  const currentDate = new Date(today.getFullYear(), today.getMonth() + currentMonth);
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  const getEventColor = (type) => {
    switch(type) {
      case 'meeting': return 'bg-blue-100 text-blue-800';
      case 'review': return 'bg-purple-100 text-purple-800';
      case 'milestone': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const upcomingEvents = events.filter(e => new Date(e.date) > today).slice(0, 5);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-black">Project Calendar</h1>
        <button className="bg-blue-500 text-slate-900 px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
          <Plus size={20} /> New Event
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="col-span-2 glass-card border border-gray-300 rounded-lg p-6 bg-white">
          <div className="flex justify-between items-center mb-6">
            <button onClick={() => setCurrentMonth(prev => prev - 1)} className="p-2 hover:bg-gray-100 rounded">
              <ChevronLeft size={20} className="text-black" />
            </button>
            <h2 className="text-xl font-bold text-black">{monthName}</h2>
            <button onClick={() => setCurrentMonth(prev => prev + 1)} className="p-2 hover:bg-gray-100 rounded">
              <ChevronRight size={20} className="text-black" />
            </button>
          </div>

          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center font-semibold text-black text-sm py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2">
            {Array(firstDay).fill(null).map((_, i) => (
              <div key={`empty-${i}`} className="p-2"></div>
            ))}
            {Array(daysInMonth).fill(null).map((_, i) => {
              const date = i + 1;
              const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
              const dayEvents = events.filter(e => e.date === dateStr);
              const isToday = date === today.getDate() && currentDate.getMonth() === today.getMonth();

              return (
                <div
                  key={date}
                  className={`p-2 rounded-lg border text-center min-h-20 ${
                    isToday ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
                  } hover:bg-gray-50 cursor-pointer`}
                >
                  <div className={`font-semibold ${isToday ? 'text-blue-600' : 'text-black'}`}>{date}</div>
                  {dayEvents.length > 0 && (
                    <div className="mt-1 space-y-1">
                      {dayEvents.slice(0, 2).map((event, idx) => (
                        <div key={idx} className={`text-xs px-1 py-0.5 rounded truncate ${getEventColor(event.type)}`}>
                          {event.title}
                        </div>
                      ))}
                      {dayEvents.length > 2 && <div className="text-xs text-gray-600">+{dayEvents.length - 2}</div>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="glass-card border border-gray-300 rounded-lg p-6 bg-white">
          <h2 className="text-xl font-bold text-black mb-4">Upcoming Events</h2>
          <div className="space-y-3">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="border border-gray-300 rounded-lg p-3 bg-white hover:bg-gray-50">
                <p className="font-semibold text-black text-sm mb-1">{event.title}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">{event.date}</span>
                  <span className={`text-xs px-2 py-1 rounded capitalize ${getEventColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-300">
            <h3 className="font-bold text-black mb-3 text-sm">Event Types</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-100 border border-blue-300 rounded"></div>
                <span className="text-black">Meeting</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-100 border border-purple-300 rounded"></div>
                <span className="text-black">Review</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-100 border border-green-300 rounded"></div>
                <span className="text-black">Milestone</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
