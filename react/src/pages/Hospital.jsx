import React, { useState } from 'react';
import {
    Calendar, Users, Activity, Stethoscope, UserPlus, DollarSign,
    CheckCircle2, Phone, TrendingUp, Star, Clock
} from 'lucide-react';

export default function Hospital() {
    const [timeframe, setTimeframe] = useState('This Month');

    // 6 stat cards matching original
    const stats = [
        { value: '42', label: 'Appointments', icon: Calendar, iconClass: 'text-slate-400' },
        { value: '18', label: 'All Patients', icon: Users, iconClass: 'text-slate-400' },
        { value: '12', label: 'Operations', icon: Activity, iconClass: 'text-slate-400' },
        { value: '14', label: 'Doctors', icon: Stethoscope, iconClass: 'text-slate-400' },
        { value: '32', label: 'Nurses', icon: UserPlus, iconClass: 'text-slate-400' },
        { value: '$41,520', label: 'Earnings', icon: DollarSign, iconClass: 'text-slate-400' },
    ];

    const doctors = [
        { name: 'Dr.Helen White', specialty: 'MS Cardiology', hospital: 'Apollo Hospital', time: '11:00am to 03:00pm', appointments: 68, rating: 4.9, reviews: 1021 },
        { name: 'Dr.Wendy Keen', specialty: 'MD Neurology', hospital: 'Kaiser Foundation Hospital', time: '01:00pm to 04:00pm', appointments: 42, rating: 4.9, reviews: 1021 },
        { name: 'Dr.Lisa King', specialty: 'MD Orthopedic', hospital: 'Florida Hospital', time: '09:00am to 11:30am', appointments: 35, rating: 4.9, reviews: 1021 },
    ];

    const patients = [
        { id: '#1236', name: 'Donald Gardner', age: 36, address: 'B28 University Street US', mobile: '+123456789', lastVisit: '18/07/2021', disease: 'Cancer', diseaseColor: 'red' },
        { id: '#1236', name: 'Keith Jacobson', age: 48, address: 'B28 University Street US', mobile: '+123456789', lastVisit: '18/07/2021', disease: 'Ulcers', diseaseColor: 'green' },
        { id: '#1236', name: 'Greg Crosby', age: 27, address: 'B28 University Street US', mobile: '+123456789', lastVisit: '18/07/2021', disease: 'HIV', diseaseColor: 'red' },
        { id: '#1236', name: 'Fred Godina', age: 22, address: 'B28 University Street US', mobile: '+123456789', lastVisit: '18/07/2021', disease: 'Virus Fever', diseaseColor: 'green' },
        { id: '#7851', name: 'Peggy Doe', age: 51, address: 'B28 University Street US', mobile: '+123456789', lastVisit: '20/07/2021', disease: 'Heart Attack', diseaseColor: 'green' },
        { id: '#3654', name: 'Jennifer Doss', age: 18, address: 'B28 University Street US', mobile: '+123456789', lastVisit: '19/07/2021', disease: 'Ebola', diseaseColor: 'red' },
    ];

    const activities = [
        { user: 'Donald', action: 'updated the status of Refund #1234 to awaiting customer response', time: '10 Min ago', icon: Clock },
        { user: 'Lucy Peterson', action: 'was added to the group, group name is Overtake', time: '50 Min ago', icon: Clock },
        { user: 'Joseph Rust', action: 'opened new showcase Mannat #112233 with theme market', time: '10 hours ago', icon: CheckCircle2 },
        { user: 'Donald', action: 'updated the status of Refund #1234 to awaiting customer response', time: 'Yesterday', icon: Clock },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            {/* Page Title */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <h4 className="text-3xl font-bold text-slate-900">Dashboard</h4>
                    <nav className="text-sm text-slate-600 backdrop-blur-xl bg-white/40 px-4 py-2 rounded-2xl border border-white/60 shadow-lg shadow-blue-100/50">
                        <span>Glacia</span> › <span>Hospital</span> › <span className="text-slate-900 font-semibold">Dashboard</span>
                    </nav>
                </div>
            </div>

            {/* 6 Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
                {stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                        <div key={idx} className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 rounded-3xl border border-white/60 p-5 relative overflow-hidden hover:shadow-2xl hover:shadow-blue-200/40 hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-100/30">
                            <div className="relative z-10">
                                <h4 className="text-2xl font-bold text-slate-900 mb-2">{stat.value}</h4>
                                <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">{stat.label}</p>
                            </div>
                            <Icon className={`w-20 h-20 ${stat.iconClass} opacity-[0.07] absolute -right-3 -bottom-3`} />
                        </div>
                    );
                })}
            </div>

            {/* Hospital Survey & Covid-19 */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                {/* Hospital Survey */}
                <div className="lg:col-span-3 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
                    <div className="p-6 border-b border-white/40 flex items-center justify-between">
                        <h4 className="text-xl font-bold text-slate-900">Hospital Survey</h4>
                        <select 
                            value={timeframe}
                            onChange={(e) => setTimeframe(e.target.value)}
                            className="text-sm border border-white/50 rounded-2xl px-4 py-2 text-slate-700 bg-white/50 backdrop-blur-xl shadow-lg shadow-blue-100/30 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                        >
                            <option>Today</option>
                            <option>Last Week</option>
                            <option>Last Month</option>
                            <option>This Month</option>
                            <option>This Year</option>
                        </select>
                    </div>
                    <div className="p-6">
                        <div className="flex gap-4 mb-6 backdrop-blur-xl bg-white/30 rounded-2xl p-4 border border-white/40">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-300/50">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h6 className="text-slate-900 font-bold mb-1 flex items-center gap-2">
                                    76% Deals Successfull <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                </h6>
                                <p className="text-slate-600 text-sm">This is a simple hero unit, a simple jumbotron-style component.</p>
                            </div>
                        </div>
                        <div className="h-64 backdrop-blur-xl bg-white/20 rounded-2xl flex items-center justify-center border border-white/30">
                            <div className="text-center">
                                <TrendingUp className="w-16 h-16 text-slate-300 mx-auto mb-3" />
                                <p className="text-slate-500 text-sm font-medium">Survey Chart Placeholder</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Covid-19 Patients */}
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
                    <div className="p-6 border-b border-white/40">
                        <h4 className="text-xl font-bold text-slate-900">Covid-19 Patients</h4>
                    </div>
                    <div className="p-6">
                        <div className="h-32 backdrop-blur-xl bg-white/20 rounded-2xl flex items-center justify-center mb-4 border border-white/30">
                            <p className="text-slate-500 text-sm font-medium">Chart</p>
                        </div>
                        <h4 className="text-3xl font-bold text-slate-900">1,41,520</h4>
                        <p className="text-xs font-bold text-slate-600 uppercase mt-2 mb-4 tracking-wider">Total Covid-19 Reports</p>
                        <div className="h-3 bg-gradient-to-r from-slate-200 to-slate-100 rounded-full overflow-hidden mb-4 shadow-inner">
                            <div className="h-full flex">
                                <div className="bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg" style={{ width: '30%' }}></div>
                                <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 shadow-lg" style={{ width: '70%' }}></div>
                            </div>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-center justify-between text-sm font-semibold backdrop-blur-xl bg-white/20 rounded-2xl p-3 border border-white/30">
                                <span className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-300/50"></span>
                                    Positive
                                </span>
                                <span className="text-slate-900 font-bold">24,212</span>
                            </li>
                            <li className="flex items-center justify-between text-sm font-semibold backdrop-blur-xl bg-white/20 rounded-2xl p-3 border border-white/30">
                                <span className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500 shadow-lg shadow-cyan-300/50"></span>
                                    Negative
                                </span>
                                <span className="text-slate-900 font-bold">81,564</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Doctors Available & Patient Reports */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Today available Doctors */}
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
                    <div className="p-6 border-b border-white/40">
                        <h4 className="text-xl font-bold text-slate-900">Today available Doctors</h4>
                    </div>
                    <div className="p-6">
                        {doctors.map((doc, idx) => (
                            <div key={idx} className={`${idx > 0 ? 'mt-5 pt-5 border-t border-white/40' : ''}`}>
                                <h6 className="text-sm font-bold text-slate-900 mb-4 px-3">{doc.hospital}</h6>
                                <div className="flex gap-4 mb-4">
                                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex-shrink-0 shadow-xl shadow-purple-300/50"></div>
                                    <div>
                                        <h5 className="text-base font-bold text-slate-900 mb-1">{doc.name}</h5>
                                        <p className="text-sm text-slate-600 mb-2">
                                            <span className="text-slate-700 font-semibold">{doc.specialty}</span><br />
                                            <span className="text-xs">{doc.time}</span>
                                        </p>
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-current drop-shadow-sm" />
                                            ))}
                                            <span className="text-xs text-slate-600 ml-1 font-medium">{doc.rating}/5 ({doc.reviews})</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-4 border border-white/50">
                                    <div className="flex gap-4 items-center">
                                        <h3 className="text-4xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">{doc.appointments}</h3>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 uppercase tracking-wide">Appointments</p>
                                            <p className="text-xs text-slate-600 font-medium">Last Saturday 52 Appointments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Patient Reports */}
                <div className="lg:col-span-2 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
                    <div className="p-6 border-b border-white/40 flex items-center justify-between">
                        <h4 className="text-xl font-bold text-slate-900">Patient Reports</h4>
                        <button className="text-sm text-blue-600 hover:text-blue-700 font-bold backdrop-blur-xl bg-blue-50/50 px-4 py-2 rounded-2xl border border-blue-200/50 hover:shadow-lg hover:shadow-blue-200/50 transition-all">View All</button>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-2 gap-5 mb-5">
                            <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/90 to-blue-600/90 rounded-3xl p-6 text-center text-white border border-blue-400/30 shadow-2xl shadow-blue-400/40 hover:scale-105 transition-transform duration-300">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-300/30">
                                    <Users className="w-8 h-8" />
                                </div>
                                <h4 className="text-3xl font-bold mb-2 drop-shadow-lg">1,20,521</h4>
                                <p className="text-xs font-bold uppercase opacity-90 mb-3 tracking-wider">Admit</p>
                                <p className="text-xs flex items-center justify-center gap-1 mb-3 backdrop-blur-xl bg-white/10 rounded-2xl py-2">
                                    <TrendingUp className="w-4 h-4" />
                                    <span className="font-bold">+10.5%</span>
                                    <span>Up From Last Week</span>
                                </p>
                                <button className="w-full px-4 py-2 text-sm font-bold bg-white/20 hover:bg-white/30 rounded-2xl transition-all backdrop-blur-xl border border-white/20 shadow-lg">
                                    More Details
                                </button>
                            </div>
                            <div className="backdrop-blur-xl bg-gradient-to-br from-pink-500/90 to-pink-600/90 rounded-3xl p-6 text-center text-white border border-pink-400/30 shadow-2xl shadow-pink-400/40 hover:scale-105 transition-transform duration-300">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-pink-300/30">
                                    <Activity className="w-8 h-8" />
                                </div>
                                <h4 className="text-3xl font-bold mb-2 drop-shadow-lg">1,15,200</h4>
                                <p className="text-xs font-bold uppercase opacity-90 mb-3 tracking-wider">Discharge</p>
                                <p className="text-xs flex items-center justify-center gap-1 mb-3 backdrop-blur-xl bg-white/10 rounded-2xl py-2">
                                    <TrendingUp className="w-4 h-4" />
                                    <span className="font-bold">+18.5%</span>
                                    <span>Up From Last Week</span>
                                </p>
                                <button className="w-full px-4 py-2 text-sm font-bold bg-white/20 hover:bg-white/30 rounded-2xl transition-all backdrop-blur-xl border border-white/20 shadow-lg">
                                    More Details
                                </button>
                            </div>
                        </div>
                        <div className="h-48 backdrop-blur-xl bg-white/20 rounded-3xl flex items-center justify-center border border-white/40">
                            <div className="text-center">
                                <TrendingUp className="w-16 h-16 text-slate-400 mx-auto mb-3" />
                                <p className="text-slate-500 text-sm font-semibold">Patient Reports Chart</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* New Patients & Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* New Patients Table */}
                <div className="lg:col-span-2 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
                    <div className="p-6 border-b border-white/40 flex items-center justify-between">
                        <h4 className="text-xl font-bold text-slate-900">New Patients</h4>
                        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-bold backdrop-blur-xl bg-blue-50/50 px-4 py-2 rounded-2xl border border-blue-200/50 hover:shadow-lg hover:shadow-blue-200/50 transition-all">View All</a>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="backdrop-blur-xl bg-white/30 border-b border-white/40">
                                <tr className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                                    <th className="px-6 py-4 text-left">Patient Name</th>
                                    <th className="px-4 py-4 text-left">Age</th>
                                    <th className="px-4 py-4 text-left">ID</th>
                                    <th className="px-4 py-4 text-left">Address</th>
                                    <th className="px-4 py-4 text-left">Mobile No</th>
                                    <th className="px-4 py-4 text-left">Last Visit</th>
                                    <th className="px-4 py-4 text-left">Diseases</th>
                                    <th className="px-6 py-4 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/30">
                                {patients.map((patient, idx) => (
                                    <tr key={idx} className="text-sm hover:bg-white/20 transition-all">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 shadow-lg shadow-purple-300/50"></div>
                                                <span className="font-semibold text-slate-900">{patient.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-slate-700 font-medium">{patient.age}</td>
                                        <td className="px-4 py-4 text-slate-700 font-medium">{patient.id}</td>
                                        <td className="px-4 py-4 text-slate-700">{patient.address}</td>
                                        <td className="px-4 py-4 text-slate-700">{patient.mobile}</td>
                                        <td className="px-4 py-4 text-slate-700">{patient.lastVisit}</td>
                                        <td className="px-4 py-4">
                                            <span className={`inline-block px-3 py-1.5 text-xs font-bold rounded-2xl backdrop-blur-xl border shadow-lg ${
                                                patient.diseaseColor === 'red' 
                                                    ? 'bg-red-100/80 text-red-700 border-red-200/50 shadow-red-200/50' 
                                                    : 'bg-emerald-100/80 text-emerald-700 border-emerald-200/50 shadow-emerald-200/50'
                                            }`}>
                                                {patient.disease}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-slate-400 hover:text-blue-600 mx-1 w-8 h-8 rounded-xl hover:bg-blue-50 transition-all">✎</button>
                                            <button className="text-slate-400 hover:text-red-600 mx-1 w-8 h-8 rounded-xl hover:bg-red-50 transition-all">🗑</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Activity */}
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
                    <div className="p-6 border-b border-white/40 flex items-center justify-between">
                        <h4 className="text-xl font-bold text-slate-900">Activity</h4>
                        <select className="text-sm border border-white/50 rounded-2xl px-3 py-2 text-slate-700 bg-white/50 backdrop-blur-xl shadow-lg shadow-blue-100/30 focus:outline-none focus:ring-2 focus:ring-blue-400/50 font-semibold">
                            <option>All</option>
                            <option>Purchases</option>
                            <option>Emails</option>
                        </select>
                    </div>
                    <div className="p-6 max-h-[440px] overflow-y-auto">
                        <div className="space-y-4">
                            {activities.map((activity, idx) => {
                                const Icon = activity.icon;
                                return (
                                    <div key={idx} className="flex gap-4 backdrop-blur-xl bg-white/20 rounded-2xl p-4 border border-white/40 hover:bg-white/30 transition-all hover:scale-105 duration-200">
                                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-300/50">
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between gap-2">
                                                <p className="text-sm text-slate-700">
                                                    <span className="font-bold text-slate-900">{activity.user}</span> {activity.action}
                                                </p>
                                                <span className="text-xs text-slate-500 whitespace-nowrap font-medium backdrop-blur-xl bg-white/30 px-2 py-1 rounded-xl">{activity.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
