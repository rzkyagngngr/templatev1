import React, { useState } from 'react';

export default function EditStaff() {
    const [formData, setFormData] = useState({ firstName: 'Maria', lastName: 'Gibson', email: 'maria@hospital.com', phone: '+1 (555) 111-1111', role: 'nurse', department: 'general', joinDate: '2020-01-15', address: '123 Staff Ave', city: 'New York', state: 'NY', zipCode: '10001', gender: 'female', dateOfBirth: '1990-05-20', salary: '65000' });

    const handleSubmit = (e) => { e.preventDefault(); console.log('Staff updated:', formData); };

    return (
        <div className="w-full space-y-6">
            <div><h4 className="text-xl font-bold text-slate-900 tracking-wide">Edit Staff</h4><div className="text-sm text-slate-700 mt-1"><span>Glacia</span><span className="mx-2">/</span><span>Hospital</span><span className="mx-2">/</span><span className="text-slate-900">Edit Staff</span></div></div>

            <form onSubmit={handleSubmit}>
                <div className="glass-card p-6">
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-purple-500/30 flex items-center justify-center border-4 border-white/20"><span className="text-2xl text-slate-900 font-bold">MG</span></div>
                        <div><h5 className="text-lg font-semibold =">Maria Gibson</h5><p className="text-sm text-slate-400">Chief Nurse</p></div>
                    </div>

                    <h5 className="text-lg font-semibold text-slate-900 mb-6">Staff Information</h5>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div><label className="text-xs text-slate-700 mb-2 block">First Name *</label><input type="text" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50" required /></div>
                        <div><label className="text-xs text-slate-700 mb-2 block">Last Name *</label><input type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50" required /></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div><label className="text-xs text-slate-700 mb-2 block">Email *</label><input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50" required /></div>
                        <div><label className="text-xs text-slate-700 mb-2 block">Phone *</label><input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50" required /></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div><label className="text-xs text-slate-700 mb-2 block">Role *</label><select value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50" required><option value="nurse">Nurse</option><option value="pharmacist">Pharmacist</option></select></div>
                        <div><label className="text-xs text-slate-700 mb-2 block">Department *</label><select value={formData.department} onChange={(e) => setFormData({ ...formData, department: e.target.value })} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50" required><option value="general">General</option><option value="pharmacy">Pharmacy</option></select></div>
                        <div><label className="text-xs text-slate-700 mb-2 block">Salary</label><input type="text" value={formData.salary} onChange={(e) => setFormData({ ...formData, salary: e.target.value })} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50" /></div>
                    </div>

                    <div className="flex gap-4 justify-end mt-8 pt-6 border-t border-white/10">
                        <button type="button" className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-slate-900 text-sm font-medium transition-all">Cancel</button>
                        <button type="submit" className="px-6 py-2.5 bg-primary hover:bg-primary/90 rounded-lg text-slate-900 text-sm font-medium transition-all shadow-[0_0_1rem_rgba(14,165,233,0.3)]"><span className="material-icons-round text-sm mr-1 align-middle">save</span>Update</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
