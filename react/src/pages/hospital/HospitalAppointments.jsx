
import React, { useState } from 'react';
import { Edit2, Trash2, Plus } from 'lucide-react';

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
    <div className="w-full space-y-6 p-6">
      <div className="flex justify-between items-start">
        <div>
          <nav className="flex text-gray-500 text-sm mb-2">
            <span className="hover:text-gray-900 cursor-pointer">Glacia</span>
            <span className="mx-2">/</span>
            <span className="hover:text-gray-900 cursor-pointer">Hospital</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-semibold">All Appointments</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 transition">
          <Plus size={18} />
          Add New Appointment
        </button>
      </div>

      <div className="backdrop-blur-md bg-white/30 border border-gray-300 rounded-xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Patient Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Age</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Department</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Doctor</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Time</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Mobile</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/50">
              {appointments.map((appt) => (
                <tr key={appt.id} className="hover:bg-white/20 transition">
                  <td className="px-6 py-4 text-sm text-gray-900">{appt.patientName}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{appt.age}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{appt.department}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{appt.doctor}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{appt.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{appt.time}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{appt.mobile}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={() => handleEdit(appt.id)}
                        className="text-gray-600 hover:text-blue-600 transition"
                        title="Edit"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(appt.id)}
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

export default HospitalAppointments;
