import React, { useState } from 'react';

export default function AddDoctor() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        department: '',
        specialty: '',
        degree: '',
        experience: '',
        joinDate: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        bloodGroup: '',
        gender: '',
        dateOfBirth: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="w-full space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h4 className="text-xl font-bold text-slate-900 tracking-wide">Add Doctor</h4>
                    <div className="text-sm text-slate-700 mt-1">
                        <span className="hover:text-slate-900 cursor-pointer">Glacia</span>
                        <span className="mx-2">/</span>
                        <span className="hover:text-slate-900 cursor-pointer">Hospital</span>
                        <span className="mx-2">/</span>
                        <span className="text-slate-900">Add Doctor</span>
                    </div>
                </div>
            </div>

            {/* Form Card */}
            <form onSubmit={handleSubmit}>
                <div className="glass-card p-6">
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
                                placeholder="Enter first name"
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
                                placeholder="Enter last name"
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
                                placeholder="doctor@example.com"
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
                                placeholder="+1 (555) 000-0000"
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
                                <option value="">Select Gender</option>
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
                                <option value="">Select Blood Group</option>
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
                                <option value="">Select Department</option>
                                <option value="cardiology">Cardiology</option>
                                <option value="orthopedic">Orthopedic</option>
                                <option value="neurology">Neurology</option>
                                <option value="pediatrics">Pediatrics</option>
                                <option value="oncology">Oncology</option>
                                <option value="dermatology">Dermatology</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">Specialty *</label>
                            <input
                                type="text"
                                value={formData.specialty}
                                onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                                placeholder="e.g., MD Cardiology"
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
                                placeholder="e.g., MBBS, MD"
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
                                placeholder="Years of experience"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">Join Date *</label>
                            <input
                                type="date"
                                value={formData.joinDate}
                                onChange={(e) => setFormData({ ...formData, joinDate: e.target.value })}
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
                                placeholder="Enter full address"
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
                                placeholder="City"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">State</label>
                            <input
                                type="text"
                                value={formData.state}
                                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                                placeholder="State"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-slate-700 mb-2 block">Zip Code</label>
                            <input
                                type="text"
                                value={formData.zipCode}
                                onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-primary/50"
                                placeholder="Zip Code"
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
                            Save Doctor
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
