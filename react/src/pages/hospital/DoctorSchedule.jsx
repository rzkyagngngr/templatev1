import React, { useState } from 'react';

export default function DoctorSchedule() {
    const [selectedDoctor, setSelectedDoctor] = useState('all');

    const schedule = [
        { id: 1, doctor: 'Dr. Wendy Keen', specialty: 'Orthopedic', monday: '09:00 - 17:00', tuesday: '09:00 - 17:00', wednesday: 'Off', thursday: '09:00 - 17:00', friday: '09:00 - 17:00', saturday: '10:00 - 14:00', sunday: 'Off' },
        { id: 2, doctor: 'Dr. Helen White', specialty: 'Cardiology', monday: '10:00 - 18:00', tuesday: '10:00 - 18:00', wednesday: '10:00 - 18:00', thursday: 'Off', friday: '10:00 - 18:00', saturday: 'Off', sunday: 'Off' },
        { id: 3, doctor: 'Dr. Robert Fox', specialty: 'Neurology', monday: '08:00 - 16:00', tuesday: '08:00 - 16:00', wednesday: '08:00 - 16:00', thursday: '08:00 - 16:00', friday: 'Off', saturday: '09:00 - 13:00', sunday: 'Off' },
        { id: 4, doctor: 'Dr. Sarah Johnson', specialty: 'Pediatrics', monday: '09:00 - 17:00', tuesday: '09:00 - 17:00', wednesday: '09:00 - 17:00', thursday: '09:00 - 17:00', friday: '09:00 - 17:00', saturday: 'Off', sunday: 'Off' },
    ];

    return (
        <div className="w-full space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h4 className="text-xl font-bold text-slate-900 tracking-wide">Doctor Schedule</h4>
                    <div className="text-sm text-slate-700 mt-1">
                        <span className="hover:text-slate-900 cursor-pointer">Glacia</span>
                        <span className="mx-2">/</span>
                        <span className="hover:text-slate-900 cursor-pointer">Hospital</span>
                        <span className="mx-2">/</span>
                        <span className="text-slate-900">Doctor Schedule</span>
                    </div>
                </div>
                <button className="glass-card px-4 py-2 text-sm font-medium text-slate-900 hover:bg-primary/20 transition-all">
                    <span className="material-icons-round text-sm mr-1 align-middle">add</span>
                    Add Schedule
                </button>
            </div>

            {/* Filter Card */}
            <div className="glass-card p-6">
                <div className="flex flex-wrap gap-4 items-center">
                    <div className="flex-1 min-w-[200px]">
                        <label className="text-xs text-slate-700 mb-2 block">Select Doctor</label>
                        <select 
                            value={selectedDoctor}
                            onChange={(e) => setSelectedDoctor(e.target.value)}
                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                        >
                            <option value="all">All Doctors</option>
                            <option value="wendy">Dr. Wendy Keen</option>
                            <option value="helen">Dr. Helen White</option>
                            <option value="robert">Dr. Robert Fox</option>
                            <option value="sarah">Dr. Sarah Johnson</option>
                        </select>
                    </div>
                    <div className="flex-1 min-w-[200px]">
                        <label className="text-xs text-slate-700 mb-2 block">Department</label>
                        <select className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50">
                            <option>All Departments</option>
                            <option>Orthopedic</option>
                            <option>Cardiology</option>
                            <option>Neurology</option>
                            <option>Pediatrics</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Schedule Table */}
            <div className="glass-card p-6 overflow-hidden">
                <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-300">Doctor</th>
                                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-300">Specialty</th>
                                <th className="text-center py-4 px-4 text-sm font-semibold text-slate-300">Monday</th>
                                <th className="text-center py-4 px-4 text-sm font-semibold text-slate-300">Tuesday</th>
                                <th className="text-center py-4 px-4 text-sm font-semibold text-slate-300">Wednesday</th>
                                <th className="text-center py-4 px-4 text-sm font-semibold text-slate-300">Thursday</th>
                                <th className="text-center py-4 px-4 text-sm font-semibold text-slate-300">Friday</th>
                                <th className="text-center py-4 px-4 text-sm font-semibold text-slate-300">Saturday</th>
                                <th className="text-center py-4 px-4 text-sm font-semibold text-slate-300">Sunday</th>
                                <th className="text-center py-4 px-4 text-sm font-semibold text-slate-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {schedule.map((item) => (
                                <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-4">
                                        <div className="text-slate-900 font-medium text-sm">{item.doctor}</div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="text-slate-700 text-sm">{item.specialty}</div>
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <span className={`text-xs px-2 py-1 rounded ${item.monday === 'Off' ? 'bg-danger/20 text-danger' : 'bg-success/20 text-success'}`}>
                                            {item.monday}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <span className={`text-xs px-2 py-1 rounded ${item.tuesday === 'Off' ? 'bg-danger/20 text-danger' : 'bg-success/20 text-success'}`}>
                                            {item.tuesday}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <span className={`text-xs px-2 py-1 rounded ${item.wednesday === 'Off' ? 'bg-danger/20 text-danger' : 'bg-success/20 text-success'}`}>
                                            {item.wednesday}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <span className={`text-xs px-2 py-1 rounded ${item.thursday === 'Off' ? 'bg-danger/20 text-danger' : 'bg-success/20 text-success'}`}>
                                            {item.thursday}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <span className={`text-xs px-2 py-1 rounded ${item.friday === 'Off' ? 'bg-danger/20 text-danger' : 'bg-success/20 text-success'}`}>
                                            {item.friday}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <span className={`text-xs px-2 py-1 rounded ${item.saturday === 'Off' ? 'bg-danger/20 text-danger' : 'bg-success/20 text-success'}`}>
                                            {item.saturday}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <span className={`text-xs px-2 py-1 rounded ${item.sunday === 'Off' ? 'bg-danger/20 text-danger' : 'bg-success/20 text-success'}`}>
                                            {item.sunday}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <button className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
                                                <span className="material-icons-round text-sm text-primary">edit</span>
                                            </button>
                                            <button className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
                                                <span className="material-icons-round text-sm text-danger">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
