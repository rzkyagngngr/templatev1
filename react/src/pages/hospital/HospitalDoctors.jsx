
import React, { useState } from 'react';
import { Edit2, Trash2, Plus, Stethoscope, Award, Building2 } from 'lucide-react';

const HospitalDoctors = () => {
  const [doctors] = useState([
    { id: 1, name: 'Dr. Wendy Keen', specialty: 'MD Orthopedic', experience: '4 years', hospital: 'Apollo Hospital', status: 'Active' },
    { id: 2, name: 'Dr. Helen White', specialty: 'MS Cardiology', experience: '3 years', hospital: 'Apollo Hospital', status: 'Active' },
    { id: 3, name: 'Dr. Thomas Fant', specialty: 'MD Neurology', experience: '10 years', hospital: 'Apollo Hospital', status: 'Active' },
    { id: 4, name: 'Dr. Justin Williams', specialty: 'MS Psychology', experience: '4 years', hospital: 'Apollo Hospital', status: 'Active' },
    { id: 5, name: 'Dr. Aretha Garland', specialty: 'MD Pediatrics', experience: '6 years', hospital: 'Apollo Hospital', status: 'Active' },
    { id: 6, name: 'Dr. William Gonzalez', specialty: 'MS Gastroenterology', experience: '8 years', hospital: 'Apollo Hospital', status: 'Inactive' },
    { id: 7, name: 'Dr. Lea Sanchez', specialty: 'MD Gynaecology', experience: '5 years', hospital: 'Apollo Hospital', status: 'Active' },
    { id: 8, name: 'Dr. Marcus Johnson', specialty: 'MD Radiology', experience: '7 years', hospital: 'Apollo Hospital', status: 'Active' },
  ]);

  const handleEdit = (id) => {
    console.log('Edit doctor:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete doctor:', id);
  };

  const getSpecialtyColor = (specialty) => {
    if (specialty.includes('Cardiology')) return 'from-red-400/20 to-red-600/5 border-red-200/40 text-red-600';
    if (specialty.includes('Neurology')) return 'from-blue-400/20 to-blue-600/5 border-blue-200/40 text-blue-600';
    if (specialty.includes('Orthopedic')) return 'from-blue-400/20 to-blue-600/5 border-blue-200/40 text-blue-600';
    return 'from-green-400/20 to-green-600/5 border-green-200/40 text-green-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="w-full space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <nav className="flex text-gray-600 text-sm mb-3">
              <span className="hover:text-gray-900 cursor-pointer transition">Dashboard</span>
              <span className="mx-2">/</span>
              <span className="hover:text-gray-900 cursor-pointer transition">Hospital</span>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-semibold">Doctors</span>
            </nav>
            <h1 className="text-4xl font-bold text-gray-900">Hospital Doctors</h1>
            <p className="text-gray-600 mt-2">Medical professionals directory</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl hover:shadow-xl hover:shadow-blue-400/30 transition-all duration-300 backdrop-blur-xl">
            <Plus size={20} />
            <span className="font-semibold">Add Doctor</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Total Doctors', value: '14', icon: Stethoscope, color: 'blue' },
            { label: 'Active', value: '12', icon: Award, color: 'green' },
            { label: 'Specialties', value: '8', icon: Building2, color: 'blue' },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            const colorClass = {
              blue: 'from-blue-400/20 to-blue-600/5 border-blue-200/40 text-blue-600',
              green: 'from-green-400/20 to-green-600/5 border-green-200/40 text-green-600',
            }[stat.color];
            return (
              <div key={idx} className={`backdrop-blur-2xl bg-gradient-to-br ${colorClass} border border-white/60 rounded-3xl p-6 shadow-xl shadow-black/5`}>
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

        {/* Table */}
        <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 overflow-hidden">
          <div className="px-8 py-6 border-b border-white/40 bg-gradient-to-r from-indigo-600/10 to-purple-600/10">
            <h2 className="text-xl font-bold text-indigo-900">Medical Staff</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/40">
                  <th className="px-8 py-4 text-left text-sm font-semibold text-indigo-900">Doctor</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-indigo-900">Specialty</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-indigo-900">Experience</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-indigo-900">Hospital</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-indigo-900">Status</th>
                  <th className="px-8 py-4 text-center text-sm font-semibold text-indigo-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor) => (
                  <tr key={doctor.id} className="border-b border-white/30 hover:bg-white/40 transition-colors">
                    <td className="px-8 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white font-bold text-sm">
                          {doctor.name.split(' ')[1].charAt(0)}
                        </div>
                        <p className="font-semibold text-indigo-900">{doctor.name}</p>
                      </div>
                    </td>
                    <td className="px-8 py-4">
                      <span className={`inline-block px-4 py-2 rounded-2xl bg-gradient-to-br ${getSpecialtyColor(doctor.specialty)} border border-current/20 text-sm font-medium`}>
                        {doctor.specialty}
                      </span>
                    </td>
                    <td className="px-8 py-4">
                      <div className="flex items-center gap-2">
                        <Award size={16} className="text-amber-600" />
                        <span className="text-indigo-900 font-medium">{doctor.experience}</span>
                      </div>
                    </td>
                    <td className="px-8 py-4 text-indigo-900">{doctor.hospital}</td>
                    <td className="px-8 py-4">
                      <span className={`inline-block px-4 py-2 rounded-2xl text-xs font-bold backdrop-blur-xl border border-white/60 ${
                        doctor.status === 'Active' 
                          ? 'bg-gradient-to-br from-green-400/20 to-green-600/5 border-green-200/40 text-green-700'
                          : 'bg-gradient-to-br from-red-400/20 to-red-600/5 border-red-200/40 text-red-700'
                      }`}>
                        {doctor.status}
                      </span>
                    </td>
                    <td className="px-8 py-4 text-sm">
                      <div className="flex items-center justify-center gap-3">
                        <button
                          onClick={() => handleEdit(doctor.id)}
                          className="p-2 rounded-2xl bg-blue-100/60 text-blue-600 hover:bg-blue-200/60 hover:shadow-lg hover:shadow-blue-400/30 transition-all"
                          title="Edit"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(doctor.id)}
                          className="p-2 rounded-2xl bg-red-100/60 text-red-600 hover:bg-red-200/60 hover:shadow-lg hover:shadow-red-400/30 transition-all"
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

export default HospitalDoctors;
