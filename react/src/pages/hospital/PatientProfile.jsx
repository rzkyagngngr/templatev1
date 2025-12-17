import React from 'react';

export default function PatientProfile() {
    const patient = {
        name: 'John Doe',
        patientId: 'PT-2024-001',
        age: '45 years',
        gender: 'Male',
        bloodGroup: 'O+',
        phone: '+1 (555) 123-4567',
        email: 'john.doe@example.com',
        address: '456 Patient Street, New York, NY 10002',
        admitDate: 'Dec 10, 2024',
        assignedDoctor: 'Dr. Wendy Keen',
        roomNumber: 'A-101',
        insuranceProvider: 'Blue Cross Blue Shield',
        insuranceNumber: 'BCBS123456789',
        emergencyContact: 'Jane Doe',
        emergencyPhone: '+1 (555) 987-6543',
    };

    const medicalHistory = [
        { id: 1, date: 'Dec 15, 2024', condition: 'Hypertension', doctor: 'Dr. Wendy Keen', notes: 'Blood pressure medication prescribed' },
        { id: 2, date: 'Nov 20, 2024', condition: 'Type 2 Diabetes', doctor: 'Dr. Helen White', notes: 'Diet plan and insulin therapy initiated' },
        { id: 3, date: 'Oct 05, 2024', condition: 'Knee Pain', doctor: 'Dr. Wendy Keen', notes: 'Recommended physiotherapy' },
    ];

    const appointments = [
        { id: 1, date: '2024-12-20', time: '10:00 AM', doctor: 'Dr. Wendy Keen', type: 'Follow-up', status: 'Scheduled' },
        { id: 2, date: '2024-12-22', time: '02:00 PM', doctor: 'Dr. Helen White', type: 'Consultation', status: 'Confirmed' },
    ];

    const medications = [
        { id: 1, name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', prescribedBy: 'Dr. Wendy Keen' },
        { id: 2, name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', prescribedBy: 'Dr. Helen White' },
        { id: 3, name: 'Aspirin', dosage: '81mg', frequency: 'Once daily', prescribedBy: 'Dr. Wendy Keen' },
    ];

    return (
        <div className="w-full space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h4 className="text-xl font-bold text-slate-900 tracking-wide">Patient Profile</h4>
                    <div className="text-sm text-slate-700 mt-1">
                        <span className="hover:text-slate-900 cursor-pointer">Glacia</span>
                        <span className="mx-2">/</span>
                        <span className="hover:text-slate-900 cursor-pointer">Hospital</span>
                        <span className="mx-2">/</span>
                        <span className="text-slate-900">Patient Profile</span>
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
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-success/30 to-primary/30 flex items-center justify-center border-4 border-white/20">
                            <span className="text-4xl text-slate-900 font-bold">JD</span>
                        </div>
                        <h5 className="text-xl font-bold text-slate-900 mb-1">{patient.name}</h5>
                        <p className="text-slate-700 text-sm mb-1">{patient.patientId}</p>
                        <div className="flex gap-2 justify-center mb-6">
                            <span className="px-3 py-1 bg-success/20 text-success text-xs rounded-full">Active Patient</span>
                        </div>
                    </div>

                    {/* Quick Info */}
                    <div className="space-y-3 pt-6 border-t border-white/10">
                        <div className="flex justify-between">
                            <span className="text-xs text-slate-400">Age</span>
                            <span className="text-sm text-slate-900 font-medium">{patient.age}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-xs text-slate-400">Gender</span>
                            <span className="text-sm text-slate-900 font-medium">{patient.gender}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-xs text-slate-400">Blood Group</span>
                            <span className="text-sm text-slate-900 font-medium">{patient.bloodGroup}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-xs text-slate-400">Room No.</span>
                            <span className="text-sm text-slate-900 font-medium">{patient.roomNumber}</span>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4 pt-6 border-t border-white/10 mt-6">
                        <div className="flex items-start gap-3">
                            <span className="material-icons-round text-primary text-lg">phone</span>
                            <div className="flex-1">
                                <p className="text-xs text-slate-400">Phone</p>
                                <p className="text-sm =">{patient.phone}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="material-icons-round text-primary text-lg">email</span>
                            <div className="flex-1">
                                <p className="text-xs text-slate-400">Email</p>
                                <p className="text-sm =">{patient.email}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="material-icons-round text-primary text-lg">location_on</span>
                            <div className="flex-1">
                                <p className="text-xs text-slate-400">Address</p>
                                <p className="text-sm =">{patient.address}</p>
                            </div>
                        </div>
                    </div>

                    {/* Emergency Contact */}
                    <div className="pt-6 border-t border-white/10 mt-6">
                        <h6 className="text-sm font-semibold text-slate-900 mb-4">Emergency Contact</h6>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-xs text-slate-400">Name</span>
                                <span className="text-sm text-slate-900 font-medium">{patient.emergencyContact}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-xs text-slate-400">Phone</span>
                                <span className="text-sm text-slate-900 font-medium">{patient.emergencyPhone}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Details & Records */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Hospital Details */}
                    <div className="glass-card p-6">
                        <h5 className="text-lg font-semibold text-slate-900 mb-6">Hospital Information</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="text-xs text-slate-700 mb-1">Admit Date</p>
                                <p className="text-sm text-slate-900 font-medium">{patient.admitDate}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-700 mb-1">Assigned Doctor</p>
                                <p className="text-sm text-slate-900 font-medium">{patient.assignedDoctor}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-700 mb-1">Insurance Provider</p>
                                <p className="text-sm text-slate-900 font-medium">{patient.insuranceProvider}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-700 mb-1">Insurance Number</p>
                                <p className="text-sm text-slate-900 font-medium">{patient.insuranceNumber}</p>
                            </div>
                        </div>
                    </div>

                    {/* Current Medications */}
                    <div className="glass-card p-6">
                        <h5 className="text-lg font-semibold text-slate-900 mb-6">Current Medications</h5>
                        <div className="space-y-3">
                            {medications.map((med) => (
                                <div key={med.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                            <span className="material-icons-round text-primary text-sm">medication</span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-900 font-medium">{med.name}</p>
                                            <p className="text-xs text-slate-400">{med.dosage} - {med.frequency}</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-slate-400">By: {med.prescribedBy}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Upcoming Appointments */}
                    <div className="glass-card p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h5 className="text-lg font-semibold =">Upcoming Appointments</h5>
                            <button className="text-xs text-primary hover:text-primary/80 font-medium">View All</button>
                        </div>
                        <div className="space-y-3">
                            {appointments.map((apt) => (
                                <div key={apt.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                                            <span className="material-icons-round text-success text-sm">event</span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-900 font-medium">{apt.doctor}</p>
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

                    {/* Medical History */}
                    <div className="glass-card p-6">
                        <h5 className="text-lg font-semibold text-slate-900 mb-6">Medical History</h5>
                        <div className="space-y-4">
                            {medicalHistory.map((record) => (
                                <div key={record.id} className="p-4 bg-white/5 rounded-lg border-l-4 border-primary">
                                    <div className="flex justify-between items-start mb-2">
                                        <h6 className="text-sm font-semibold =">{record.condition}</h6>
                                        <span className="text-xs text-slate-400">{record.date}</span>
                                    </div>
                                    <p className="text-xs text-slate-700 mb-2">Doctor: {record.doctor}</p>
                                    <p className="text-sm text-slate-300">{record.notes}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
