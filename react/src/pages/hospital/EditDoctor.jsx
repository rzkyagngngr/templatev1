import React, { useState } from 'react';

export default function EditDoctor() {
    const [formData, setFormData] = useState({
        firstName: 'Wendy',
        lastName: 'Keen',
        email: 'wendy.keen@hospital.com',
        phone: '+1 (555) 123-4567',
        department: 'orthopedic',
        specialty: 'MD Orthopedic',
        degree: 'MBBS, MD',
        experience: '4',
        joinDate: '2020-01-15',
        address: '123 Medical Plaza, Suite 400',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        bloodGroup: 'A+',
        gender: 'female',
        dateOfBirth: '1985-03-15',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form updated:', formData);
    };

    return (
        <div className="w-full space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h4 className="text-xl font-bold text-slate-900 tracking-wide">Edit Doctor</h4>
                    <div className="text-sm text-slate-700 mt-1">
                        <span className="hover:text-slate-900 cursor-pointer">Glacia</span>
                        <span className="mx-2">/</span>
                        <span className="hover:text-slate-900 cursor-pointer">Hospital</span>
                        <span className="mx-2">/</span>
                        <span className="text-slate-900">Edit Doctor</span>
                    </div>
                </div>
            </div>

            {/* Form Card */}
            <form onSubmit={handleSubmit}>
                <div className="glass-card p-6">
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-purple-500/30 flex items-center justify-center border-4 border-white/20">
                            <span className="text-2xl text-slate-900 font-bold">WK</span>
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold =">Dr. Wendy Keen</h5>
                            <p className="text-sm text-slate-400">Orthopedic Specialist</p>
                            <button type="button" className="text-xs text-primary hover:text-primary/80 mt-1">
                                Change Photo
                            </button>
                        </div>
                    </div>

                    <h5 className="text-lg font-semibold text-slate-900 mb-6">Doctor Information</h5>
                    
                    {/* Personal Information */}
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
                            <label className="text-xs text-slate-700 mb-2 block">Email *</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                                required
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
                            <label className="text-xs text-slate-700 mb-2 block">Blood Group</label>
                            <select
                                value={formData.bloodGroup}
                                onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
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

                    {/* Professional Information */}
                    <h5 className="text-lg font-semibold text-slate-900 mb-6 mt-8">Professional Details</h5>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">Department *</label>
                            <select
                                value={formData.department}
                                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                                required
                            >
                                <option value="cardiology">Cardiology</option>
                                <option value="orthopedic">Orthopedic</option>
                                <option value="neurology">Neurology</option>
                                <option value="pediatrics">Pediatrics</option>
                                <option value="oncology">Oncology</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">Specialty *</label>
                            <input
                                type="text"
                                value={formData.specialty}
                                onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">Degree *</label>
                            <input
                                type="text"
                                value={formData.degree}
                                onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">Experience (Years) *</label>
                            <input
                                type="number"
                                value={formData.experience}
                                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                                required
                            />
                        </div>
                    </div>

                    {/* Address Information */}
                    <h5 className="text-lg font-semibold text-slate-900 mb-6 mt-8">Address Details</h5>
                    
                    <div className="grid grid-cols-1 gap-6 mb-6">
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">Address</label>
                            <textarea
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50 min-h-[100px]"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">City</label>
                            <input
                                type="text"
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">State</label>
                            <input
                                type="text"
                                value={formData.state}
                                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">Zip Code</label>
                            <input
                                type="text"
                                value={formData.zipCode}
                                onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                            />
                        </div>
                    </div>

                    {/* Form Actions */}
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
                            Update Doctor
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
