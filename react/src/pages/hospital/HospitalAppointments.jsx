
import React, { useState } from 'react';
import { Edit2, Trash2, Plus, Calendar, Clock, Phone, User, Stethoscope } from 'lucide-react';

const HospitalAppointments = () => {
  const [appointments] = useState([
    { id: 1, patientName: 'Donald Gardner', age: 36, department: 'Orthopedic', doctor: 'Dr. Thomas Fant', date: '18/07/2019', time: '10:15 am', mobile: '+123456789' },
    { id: 2, patientName: 'Keith Jacobson', age: 48, department: 'Neurology', doctor: 'Dr. Helen White', date: '18/07/2019', time: '11:30 am', mobile: '+123456788' },
    { id: 3, patientName: 'Greg Crosby', age: 27, department: 'Cardiology', doctor: 'Dr. Aretha Garland', date: '19/07/2019', time: '12:30 pm', mobile: '+123456787' },
    { id: 4, patientName: 'Fred Godina', age: 22, department: 'Physiotherapy', doctor: 'Dr. Justin Williams', date: '19/07/2019', time: '02:15 pm', mobile: '+123456786' },
    { id: 5, patientName: 'Peggy Doe', age: 51, department: 'Psychology', doctor: 'Dr. William Gonzalez', date: '20/07/2019', time: '10:45 am', mobile: '+123456785' },
    { id: 6, patientName: 'Jennifer Doss', age: 18, department: 'Gynaecology', doctor: 'Dr. Lea Sanchez', date: '20/07/2019', time: '03:30 pm', mobile: '+123456784' },
    { id: 7, patientName: 'Robert Miller', age: 45, department: 'Orthopedic', doctor: 'Dr. Wendy Keen', date: '21/07/2019', time: '09:00 am', mobile: '+123456783' },
    { id: 8, patientName: 'Patricia Lee', age: 38, department: 'Cardiology', doctor: 'Dr. Helen White', date: '21/07/2019', time: '02:00 pm', mobile: '+123456782' },
  ]);

  const handleEdit = (id) => {
    console.log('Edit appointment:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete appointment:', id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="w-full space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <nav className="flex text-gray-600 text-sm mb-3">
              <span className="hover:text-gray-900 cursor-pointer transition">Dashboard</span>
              <span className="mx-2">/</span>
              <span className="hover:text-gray-900 cursor-pointer transition">Hospital</span>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-semibold">Appointments</span>
            </nav>
            <h1 className="text-4xl font-bold text-gray-900">Hospital Appointments</h1>
            <p className="text-gray-600 mt-2">Manage and schedule patient appointments</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl hover:shadow-xl hover:shadow-blue-400/30 transition-all duration-300 backdrop-blur-xl">
            <Plus size={20} />
            <span className="font-semibold">Add Appointment</span>
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Appointments', value: '42', icon: Calendar, color: 'blue' },
            { label: 'Today', value: '8', icon: Clock, color: 'blue' },
            { label: 'Pending', value: '12', icon: User, color: 'amber' },
            { label: 'Doctors', value: '14', icon: Stethoscope, color: 'green' },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            const colorClass = {
              blue: 'from-blue-400/20 to-blue-600/5 border-blue-200/40 text-blue-600',
              amber: 'from-amber-400/20 to-amber-600/5 border-amber-200/40 text-amber-600',
              green: 'from-green-400/20 to-green-600/5 border-green-200/40 text-green-600',
            }[stat.color];
            return (
              <div key={idx} className={`backdrop-blur-2xl bg-gradient-to-br ${colorClass} border border-white/60 rounded-3xl p-6 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300`}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  </div>
                  <Icon size={28} className="opacity-60" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Appointments Table */}
        <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 overflow-hidden">
          <div className="px-8 py-6 border-b border-white/40 bg-gradient-to-r from-blue-600/10 to-blue-600/5">
            <h2 className="text-xl font-bold text-gray-900">Recent Appointments</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/40 hover:bg-white/30 transition">
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Patient</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Department</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Doctor</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Date & Time</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Contact</th>
                  <th className="px-8 py-4 text-center text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt) => (
                  <tr key={appt.id} className="border-b border-white/30 hover:bg-white/40 transition-colors duration-200">
                    <td className="px-8 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white font-bold text-sm">
                          {appt.patientName.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-indigo-900">{appt.patientName}</p>
                          <p className="text-indigo-600/60 text-sm">Age: {appt.age}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-4">
                      <span className="inline-block px-4 py-2 rounded-2xl bg-indigo-100/60 text-indigo-700 text-sm font-medium">{appt.department}</span>
                    </td>
                    <td className="px-8 py-4 text-indigo-900 font-medium">{appt.doctor}</td>
                    <td className="px-8 py-4">
                      <div className="flex items-center gap-2 text-indigo-600">
                        <Calendar size={16} />
                        <span className="text-sm">{appt.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-indigo-600 mt-1">
                        <Clock size={16} />
                        <span className="text-sm">{appt.time}</span>
                      </div>
                    </td>
                    <td className="px-8 py-4">
                      <div className="flex items-center gap-2 text-indigo-600">
                        <Phone size={16} />
                        <span className="text-sm">{appt.mobile}</span>
                      </div>
                    </td>
                    <td className="px-8 py-4 text-sm">
                      <div className="flex items-center justify-center gap-3">
                        <button
                          onClick={() => handleEdit(appt.id)}
                          className="p-2 rounded-2xl bg-blue-100/60 text-blue-600 hover:bg-blue-200/60 hover:shadow-lg hover:shadow-blue-400/30 transition-all duration-200"
                          title="Edit"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(appt.id)}
                          className="p-2 rounded-2xl bg-red-100/60 text-red-600 hover:bg-red-200/60 hover:shadow-lg hover:shadow-red-400/30 transition-all duration-200"
                          title="Delete"
                        >
                          <Trash2 size={18} />
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
    </div>
  );
};

export default HospitalAppointments;
