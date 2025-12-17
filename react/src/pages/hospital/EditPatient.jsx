import React, { useState } from 'react';

export default function EditPatient() {
    const [formData, setFormData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        gender: 'male',
        dateOfBirth: '1979-05-15',
        bloodGroup: 'O+',
        address: '456 Patient Street',
        city: 'New York',
        state: 'NY',
        zipCode: '10002',
        emergencyContact: 'Jane Doe',
        emergencyPhone: '+1 (555) 987-6543',
        insuranceProvider: 'Blue Cross Blue Shield',
        insuranceNumber: 'BCBS123456789',
        admitDate: '2024-12-10',
        assignedDoctor: '1',
        roomNumber: 'A-101',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Patient updated:', formData);
    };

    return (
        <div className="w-full space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h4 className="text-xl font-bold text-slate-900 tracking-wide">Edit Patient</h4>
                    <div className="text-sm text-slate-700 mt-1">
                        <span className="hover:text-slate-900 cursor-pointer">Glacia</span>
                        <span className="mx-2">/</span>
                        <span className="hover:text-slate-900 cursor-pointer">Hospital</span>
                        <span className="mx-2">/</span>
                        <span className="text-slate-900">Edit Patient</span>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="glass-card p-6">
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-success/30 to-primary/30 flex items-center justify-center border-4 border-white/20">
                            <span className="text-2xl text-slate-900 font-bold">JD</span>
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold =">John Doe</h5>
                            <p className="text-sm text-slate-400">Patient ID: PT-2024-001</p>
                        </div>
                    </div>

                    <h5 className="text-lg font-semibold text-slate-900 mb-6">Patient Information</h5>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">First Name *</label>
                            <input
                                type="text"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">Last Name *</label>
                            <input
                                type="text"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">Phone *</label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">Gender *</label>
                            <select
                                value={formData.gender}
                                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                                required
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">Date of Birth *</label>
                            <input
                                type="date"
                                value={formData.dateOfBirth}
                                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">Blood Group *</label>
                            <select
                                value={formData.bloodGroup}
                                onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                                required
                            >
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>
                    </div>

                    <h5 className="text-lg font-semibold text-slate-900 mb-6 mt-8">Emergency Contact</h5>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">Contact Name *</label>
                            <input
                                type="text"
                                value={formData.emergencyContact}
                                onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">Contact Phone *</label>
                            <input
                                type="tel"
                                value={formData.emergencyPhone}
                                onChange={(e) => setFormData({ ...formData, emergencyPhone: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                                required
                            />
                        </div>
                    </div>

                    <h5 className="text-lg font-semibold text-slate-900 mb-6 mt-8">Insurance Details</h5>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">Insurance Provider</label>
                            <input
                                type="text"
                                value={formData.insuranceProvider}
                                onChange={(e) => setFormData({ ...formData, insuranceProvider: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">Insurance Number</label>
                            <input
                                type="text"
                                value={formData.insuranceNumber}
                                onChange={(e) => setFormData({ ...formData, insuranceNumber: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                            />
                        </div>
                    </div>

                    <h5 className="text-lg font-semibold text-slate-900 mb-6 mt-8">Hospital Assignment</h5>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">Admit Date *</label>
                            <input
                                type="date"
                                value={formData.admitDate}
                                onChange={(e) => setFormData({ ...formData, admitDate: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">Assigned Doctor *</label>
                            <select
                                value={formData.assignedDoctor}
                                onChange={(e) => setFormData({ ...formData, assignedDoctor: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                                required
                            >
                                <option value="1">Dr. Wendy Keen</option>
                                <option value="2">Dr. Helen White</option>
                                <option value="3">Dr. Robert Fox</option>
                                <option value="4">Dr. Sarah Johnson</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">Room Number</label>
                            <input
                                type="text"
                                value={formData.roomNumber}
                                onChange={(e) => setFormData({ ...formData, roomNumber: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                            />
                        </div>
                    </div>

                    <div className="flex gap-4 justify-end mt-8 pt-6 border-t border-white/10">
                        <button
                            type="button"
                            className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-slate-900 text-sm font-medium transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2.5 bg-primary hover:bg-primary/90 rounded-lg text-slate-900 text-sm font-medium transition-all shadow-[0_0_1rem_rgba(14,165,233,0.3)]"
                        >
                            <span className="material-icons-round text-sm mr-1 align-middle">save</span>
                            Update Patient
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
