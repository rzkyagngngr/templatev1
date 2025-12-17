
import React, { useState } from 'react';
import { Edit2, Trash2 } from 'lucide-react';

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

  const handleEdit = (id) => {
    console.log('Edit patient:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete patient:', id);
  };

  return (
    <div className="w-full space-y-6 p-6">
      <div>
        <nav className="flex text-gray-500 text-sm mb-2">
          <span className="hover:text-gray-900 cursor-pointer">Glacia</span>
          <span className="mx-2">/</span>
          <span className="hover:text-gray-900 cursor-pointer">Hospital</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-semibold">All Patients</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900">All Patients</h1>
      </div>

      <div className="backdrop-blur-md bg-white/30 border border-gray-300 rounded-xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Patient Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Age</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Address</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Mobile</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Last Visit</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/50">
              {patients.map((patient) => (
                <tr key={patient.id} className="hover:bg-white/20 transition">
                  <td className="px-6 py-4 text-sm text-gray-900">{patient.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{patient.age}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{patient.patientId}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{patient.address}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{patient.mobile}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{patient.lastVisit}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      patient.status === 'Approved' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={() => handleEdit(patient.id)}
                        className="text-gray-600 hover:text-blue-600 transition"
                        title="Edit"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(patient.id)}
                        className="text-gray-600 hover:text-red-600 transition"
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
  );
};

export default HospitalPatients;
