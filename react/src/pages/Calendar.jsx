import React, { useState } from 'react';
import PillLayout from '../components/PillLayout';

// Simple Calendar Grid Implementation
const CalendarGrid = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // Mocking October 2023 for visual consistency with other pages
    const dates = Array.from({ length: 35 }, (_, i) => {
        const d = i - 1; // Start from Sep 29 ish
        return d > 0 && d <= 31 ? d : '';
    });

    const events = [
        { date: 5, title: 'Meeting with Client', color: 'bg-blue-500' },
        { date: 12, title: 'Project Due', color: 'bg-rose-500' },
        { date: 15, title: 'Conference', color: 'bg-primary' },
        { date: 24, title: 'Team Outing', color: 'bg-emerald-500' },
    ];

    return (
        <div className="glass-card p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-textPrimary">October 2023</h2>
                <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-tertiary hover:bg-white/10 hover:text-slate-900 transition"><span className="material-icons-round">chevron_left</span></button>
                    <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-tertiary hover:bg-white/10 hover:text-slate-900 transition"><span className="material-icons-round">chevron_right</span></button>
                </div>
            </div>
            <div className="grid grid-cols-7 mb-4">
                {days.map(d => <div key={d} className="text-center text-sm font-semibold text-tertiary uppercase tracking-wider py-2">{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-2">
                {dates.map((d, i) => {
                    const dayEvents = events.filter(e => e.date === d);
                    return (
                        <div key={i} className={`min-h-[100px] rounded-xl border border-white/5 p-2 flex flex-col items-end gap-1 ${d ? 'hover:bg-white/5 cursor-pointer transition' : ''}`}>
                            {d && <span className={`text-sm font-medium ${[6, 0].includes(i % 7) ? 'text-rose-400' : 'text-textPrimary'}`}>{d}</span>}
                            <div className="w-full flex flex-col gap-1 mt-1">
                                {dayEvents.map((e, idx) => (
                                    <div key={idx} className={`${e.color} text-slate-900 text-[10px] px-1.5 py-0.5 rounded shadow-sm w-full truncate`}>
                                        {e.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default function Calendar() {
    // Calendar typically has Month/Week/Day views. We'll use PillLayout for these.
    const [view, setView] = useState('month');
    const pills = [
        { id: 'month', label: 'Month' },
        { id: 'week', label: 'Week' },
        { id: 'day', label: 'Day' },
    ];

    return (
        <PillLayout title="Calendar" bills={pills} activePill={view} onPillChange={setView}>
            <CalendarGrid />
        </PillLayout>
    );
}
