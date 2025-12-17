import React from 'react';

export default function Timeline() {
    const events = [
        { title: 'Launched new version', time: '10:00 AM', text: 'It was a long process but we finally launched the new version of our app.', color: 'bg-primary', icon: 'rocket_launch' },
        { title: 'Meeting with the team', time: '12:30 PM', text: 'Discussing the new marketing strategy for Q4.', color: 'bg-emerald-500', icon: 'groups' },
        { title: 'Design Review', time: '2:00 PM', text: 'Reviewing the new prototypes with the design team.', color: 'bg-amber-500', icon: 'palette' },
        { title: 'Client Call', time: '4:45 PM', text: 'Weekly sync with the client to discuss progress.', color: 'bg-rose-500', icon: 'phone_in_talk' },
        { title: 'Project Finished', time: '6:00 PM', text: 'Finalized the project and sent the deliverables.', color: 'bg-blue-500', icon: 'check_circle' },
    ];

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold text-textPrimary mb-8">Timeline</h1>
            <div className="relative border-l-2 border-white/10 ml-6 space-y-8 pb-12">
                {events.map((event, i) => (
                    <div key={i} className="relative pl-8 group">
                        {/* Dot */}
                        <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-[#1e1e2d] ${event.color} group-hover:scale-125 transition duration-300`}></div>

                        {/* Content */}
                        <div className="glass-card p-5 hover:border-white/10 transition duration-300 relative">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-textPrimary text-lg">{event.title}</h3>
                                <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-md bg-white/5 ${event.color.replace('bg-', 'text-')}`}>
                                    <span className="material-icons-round text-sm">{event.icon}</span>
                                    {event.time}
                                </div>
                            </div>
                            <p className="text-tertiary text-sm leading-relaxed">{event.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
