
import React, { useState } from 'react';
import { Edit2, Trash2, Plus, Users, Calendar, CheckCircle } from 'lucide-react';

const HospitalPatients = () => {
  const [patients] = useState([
    { id: 1, name: 'Donald Gardner', age: 36, patientId: '#1236', address: 'B28 University Street US', mobile: '+123456789', lastVisit: '18/07/2019', status: 'Approved' },
    { id: 2, name: 'Keith Jacobson', age: 48, patientId: '#1237', address: 'C45 Market Street US', mobile: '+123456788', lastVisit: '18/07/2019', status: 'Approved' },
    { id: 3, name: 'Greg Crosby', age: 27, patientId: '#1238', address: 'D67 Park Avenue US', mobile: '+123456787', lastVisit: '18/07/2019', status: 'Approved' },
    { id: 4, name: 'Fred Godina', age: 22, patientId: '#1239', address: 'E89 Main Road US', mobile: '+123456786', lastVisit: '18/07/2019', status: 'Approved' },
    { id: 5, name: 'Peggy Doe', age: 51, patientId: '#7851', address: 'F12 Church Lane US', mobile: '+123456785', lastVisit: '20/07/2019', status: 'Pending' },
    { id: 6, name: 'Jennifer Doss', age: 18, patientId: '#3654', address: 'G34 Hospital Road US', mobile: '+123456784', lastVisit: '19/07/2019', status: 'Pending' },
    { id: 7, name: 'Robert Miller', age: 55, patientId: '#2145', address: 'H56 School Street US', mobile: '+123456783', lastVisit: '17/07/2019', status: 'Approved' },
    { id: 8, name: 'Patricia Lee', age: 42, patientId: '#5678', address: 'I78 College Drive US', mobile: '+123456782', lastVisit: '16/07/2019', status: 'Pending' },
  ]);

  const handleEdit = (id) => console.log('Edit patient:', id);
  const handleDelete = (id) => console.log('Delete patient:', id);

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
              <span className="text-gray-900 font-semibold">Patients</span>
            </nav>
            <h1 className="text-4xl font-bold text-gray-900">Hospital Patients</h1>
            <p className="text-gray-600 mt-2">Complete patient registry and records</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl hover:shadow-xl hover:shadow-blue-400/30 transition-all duration-300">
            <Plus size={20} />
            <span className="font-semibold">Add Patient</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Total Patients', value: '248', icon: Users, color: 'blue' },
            { label: 'Approved', value: '198', icon: CheckCircle, color: 'green' },
            { label: 'Pending', value: '50', icon: Calendar, color: 'amber' },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            const colorClass = {
              blue: 'from-blue-400/20 to-blue-600/5 border-blue-200/40 text-blue-600',
              green: 'from-green-400/20 to-green-600/5 border-green-200/40 text-green-600',
              amber: 'from-amber-400/20 to-amber-600/5 border-amber-200/40 text-amber-600',
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
          <div className="px-8 py-6 border-b border-white/40 bg-gradient-to-r from-blue-600/10 to-blue-600/5">
            <h2 className="text-xl font-bold text-gray-900">Patient Records</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/40">
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Patient</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">ID</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Address</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Contact</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Last Visit</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-8 py-4 text-center text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id} className="border-b border-white/30 hover:bg-white/40 transition-colors">
                    <td className="px-8 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
                          {patient.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-indigo-900">{patient.name}</p>
                          <p className="text-indigo-600/60 text-sm">Age: {patient.age}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-4 text-indigo-900 font-mono text-sm">{patient.patientId}</td>
                    <td className="px-8 py-4 text-indigo-900 text-sm">{patient.address}</td>
                    <td className="px-8 py-4 text-indigo-900 text-sm">{patient.mobile}</td>
                    <td className="px-8 py-4 text-indigo-900 text-sm">{patient.lastVisit}</td>
                    <td className="px-8 py-4">
                      <span className={`inline-block px-4 py-2 rounded-2xl text-xs font-bold backdrop-blur-xl border border-white/60 ${
                        patient.status === 'Approved' 
                          ? 'bg-gradient-to-br from-green-400/20 to-green-600/5 border-green-200/40 text-green-700'
                          : 'bg-gradient-to-br from-yellow-400/20 to-yellow-600/5 border-yellow-200/40 text-yellow-700'
                      }`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="px-8 py-4 text-sm">
                      <div className="flex items-center justify-center gap-3">
                        <button
                          onClick={() => handleEdit(patient.id)}
                          className="p-2 rounded-2xl bg-blue-100/60 text-blue-600 hover:bg-blue-200/60 hover:shadow-lg hover:shadow-blue-400/30 transition-all"
                          title="Edit"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(patient.id)}
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

export default HospitalPatients;
