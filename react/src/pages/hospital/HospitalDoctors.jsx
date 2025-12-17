
import React, { useState } from 'react';
import { Edit2, Trash2 } from 'lucide-react';

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

  return (
    <div className="w-full space-y-6 p-6">
      <div>
        <nav className="flex text-gray-500 text-sm mb-2">
          <span className="hover:text-gray-900 cursor-pointer">Glacia</span>
          <span className="mx-2">/</span>
          <span className="hover:text-gray-900 cursor-pointer">Hospital</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-semibold">All Doctors</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900">All Doctors</h1>
      </div>

      <div className="backdrop-blur-md bg-white/30 border border-gray-300 rounded-xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Doctor Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Specialty</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Experience</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Hospital</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/50">
              {doctors.map((doctor) => (
                <tr key={doctor.id} className="hover:bg-white/20 transition">
                  <td className="px-6 py-4 text-sm text-gray-900">{doctor.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{doctor.specialty}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{doctor.experience}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{doctor.hospital}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      doctor.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {doctor.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={() => handleEdit(doctor.id)}
                        className="text-gray-600 hover:text-blue-600 transition"
                        title="Edit"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(doctor.id)}
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

export default HospitalDoctors;
