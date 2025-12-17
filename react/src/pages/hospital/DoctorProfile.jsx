import React from 'react';

export default function DoctorProfile() {
    const doctor = {
        name: 'Dr. Wendy Keen',
        specialty: 'MD Orthopedic',
        degree: 'MBBS, MD',
        experience: '4 years',
        email: 'wendy.keen@hospital.com',
        phone: '+1 (555) 123-4567',
        department: 'Orthopedic',
        joinDate: 'Jan 15, 2020',
        address: '123 Medical Plaza, Suite 400, New York, NY 10001',
        bloodGroup: 'A+',
        dateOfBirth: 'March 15, 1985',
        gender: 'Female',
    };

    const appointments = [
        { id: 1, patient: 'John Doe', date: '2024-12-18', time: '10:00 AM', type: 'Consultation', status: 'Scheduled' },
        { id: 2, patient: 'Jane Smith', date: '2024-12-18', time: '11:30 AM', type: 'Follow-up', status: 'Scheduled' },
        { id: 3, patient: 'Mike Johnson', date: '2024-12-18', time: '02:00 PM', type: 'Surgery', status: 'Confirmed' },
        { id: 4, patient: 'Sarah Williams', date: '2024-12-19', time: '09:00 AM', type: 'Consultation', status: 'Scheduled' },
    ];

    return (
        <div className="w-full space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h4 className="text-xl font-bold text-slate-900 tracking-wide">Doctor Profile</h4>
                    <div className="text-sm text-slate-700 mt-1">
                        <span className="hover:text-slate-900 cursor-pointer">Glacia</span>
                        <span className="mx-2">/</span>
                        <span className="hover:text-slate-900 cursor-pointer">Hospital</span>
                        <span className="mx-2">/</span>
                        <span className="text-slate-900">Doctor Profile</span>
                    </div>
                </div>
                <button className="glass-card px-4 py-2 text-sm font-medium text-slate-900 hover:bg-primary/20 transition-all">
                    <span className="material-icons-round text-sm mr-1 align-middle">edit</span>
                    Edit Profile
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile Card */}
                <div className="glass-card p-6">
                    <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/30 to-purple-500/30 flex items-center justify-center border-4 border-white/20">
                            <span className="text-4xl text-slate-900 font-bold">WK</span>
                        </div>
                        <h5 className="text-xl font-bold text-slate-900 mb-1">{doctor.name}</h5>
                        <p className="text-slate-700 text-sm mb-4">{doctor.specialty}</p>
                        <div className="flex gap-2 justify-center mb-6">
                            <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">{doctor.department}</span>
                            <span className="px-3 py-1 bg-success/20 text-success text-xs rounded-full">Active</span>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4 pt-6 border-t border-white/10">
                        <div className="flex items-start gap-3">
                            <span className="material-icons-round text-primary text-lg">email</span>
                            <div className="flex-1">
                                <p className="text-xs text-slate-400">Email</p>
                                <p className="text-sm =">{doctor.email}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="material-icons-round text-primary text-lg">phone</span>
                            <div className="flex-1">
                                <p className="text-xs text-slate-400">Phone</p>
                                <p className="text-sm =">{doctor.phone}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="material-icons-round text-primary text-lg">location_on</span>
                            <div className="flex-1">
                                <p className="text-xs text-slate-400">Address</p>
                                <p className="text-sm =">{doctor.address}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Details & Appointments */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Professional Details */}
                    <div className="glass-card p-6">
                        <h5 className="text-lg font-semibold text-slate-900 mb-6">Professional Details</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="text-xs text-slate-700 mb-1">Degree</p>
                                <p className="text-sm text-slate-900 font-medium">{doctor.degree}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-700 mb-1">Experience</p>
                                <p className="text-sm text-slate-900 font-medium">{doctor.experience}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-700 mb-1">Department</p>
                                <p className="text-sm text-slate-900 font-medium">{doctor.department}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-700 mb-1">Join Date</p>
                                <p className="text-sm text-slate-900 font-medium">{doctor.joinDate}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-700 mb-1">Blood Group</p>
                                <p className="text-sm text-slate-900 font-medium">{doctor.bloodGroup}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-700 mb-1">Date of Birth</p>
                                <p className="text-sm text-slate-900 font-medium">{doctor.dateOfBirth}</p>
                            </div>
                        </div>
                    </div>

                    {/* Today's Appointments */}
                    <div className="glass-card p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h5 className="text-lg font-semibold =">Upcoming Appointments</h5>
                            <button className="text-xs text-primary hover:text-primary/80 font-medium">View All</button>
                        </div>
                        <div className="space-y-3">
                            {appointments.map((apt) => (
                                <div key={apt.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                            <span className="material-icons-round text-primary text-sm">person</span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-900 font-medium">{apt.patient}</p>
                                            <p className="text-xs text-slate-400">{apt.type}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm =">{apt.time}</p>
                                        <p className="text-xs text-slate-400">{apt.date}</p>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs ${
                                        apt.status === 'Confirmed' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'
                                    }`}>
                                        {apt.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
