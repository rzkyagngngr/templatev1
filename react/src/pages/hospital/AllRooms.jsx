import React from 'react';

export default function AllRooms() {
    const rooms = [
        { id: 'A-101', type: 'Single', floor: '1st', status: 'Occupied', patient: 'John Doe', charges: '$500/day' },
        { id: 'A-102', type: 'Double', floor: '1st', status: 'Available', patient: '-', charges: '$350/day' },
        { id: 'A-103', type: 'ICU', floor: '1st', status: 'Occupied', patient: 'Mike Johnson', charges: '$2000/day' },
        { id: 'B-201', type: 'Single', floor: '2nd', status: 'Available', patient: '-', charges: '$500/day' },
        { id: 'B-202', type: 'Double', floor: '2nd', status: 'Occupied', patient: 'Sarah Williams', charges: '$350/day' },
        { id: 'B-203', type: 'Single', floor: '2nd', status: 'Maintenance', patient: '-', charges: '$500/day' },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Occupied': return 'bg-warning/20 text-warning';
            case 'Available': return 'bg-success/20 text-success';
            case 'Maintenance': return 'bg-danger/20 text-danger';
            default: return 'bg-slate-500/20 text-slate-400';
        }
    };

    return (
        <div className="w-full space-y-6">
            <div><h4 className="text-xl font-bold text-slate-900 tracking-wide">Room Allotments</h4><div className="text-sm text-slate-700 mt-1"><span>Glacia</span><span className="mx-2">/</span><span>Hospital</span><span className="mx-2">/</span><span className="text-slate-900">Room Allotments</span></div></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-6"><div className="flex items-center justify-between"><div><p className="text-xs text-slate-700 mb-1">Total Rooms</p><h4 className="text-2xl font-bold =">6</h4></div><div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center"><span className="material-icons-round text-primary">door_front</span></div></div></div>
                <div className="glass-card p-6"><div className="flex items-center justify-between"><div><p className="text-xs text-slate-700 mb-1">Occupied</p><h4 className="text-2xl font-bold text-warning">3</h4></div><div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center"><span className="material-icons-round text-warning">person</span></div></div></div>
                <div className="glass-card p-6"><div className="flex items-center justify-between"><div><p className="text-xs text-slate-700 mb-1">Available</p><h4 className="text-2xl font-bold text-success">2</h4></div><div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center"><span className="material-icons-round text-success">check_circle</span></div></div></div>
            </div>

            <div className="glass-card p-6 overflow-hidden">
                <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full">
                        <thead><tr className="border-b border-white/10"><th className="text-left py-4 px-4 text-sm font-semibold text-slate-300">Room ID</th><th className="text-left py-4 px-4 text-sm font-semibold text-slate-300">Type</th><th className="text-left py-4 px-4 text-sm font-semibold text-slate-300">Floor</th><th className="text-left py-4 px-4 text-sm font-semibold text-slate-300">Patient</th><th className="text-left py-4 px-4 text-sm font-semibold text-slate-300">Charges</th><th className="text-center py-4 px-4 text-sm font-semibold text-slate-300">Status</th><th className="text-center py-4 px-4 text-sm font-semibold text-slate-300">Actions</th></tr></thead>
                        <tbody>
                            {rooms.map((room) => (
                                <tr key={room.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-4"><span className="text-slate-900 text-sm font-medium">{room.id}</span></td>
                                    <td className="py-4 px-4"><span className="text-slate-600 text-sm">{room.type}</span></td>
                                    <td className="py-4 px-4"><span className="text-slate-700 text-sm">{room.floor}</span></td>
                                    <td className="py-4 px-4"><span className="text-slate-900 text-sm">{room.patient}</span></td>
                                    <td className="py-4 px-4"><span className="text-slate-900 text-sm">{room.charges}</span></td>
                                    <td className="py-4 px-4 text-center"><span className={`text-xs px-3 py-1 rounded-full ${getStatusColor(room.status)}`}>{room.status}</span></td>
                                    <td className="py-4 px-4"><div className="flex items-center justify-center gap-2"><button className="p-1.5 hover:bg-white/10 rounded-lg"><span className="material-icons-round text-sm text-primary">edit</span></button><button className="p-1.5 hover:bg-white/10 rounded-lg"><span className="material-icons-round text-sm text-danger">delete</span></button></div></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
