import React, { useState } from 'react';
import { Save, X } from 'lucide-react';

export default function AddStaff() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: '',
    position: '',
    joinDate: '',
    qualification: '',
    experience: '',
    documents: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      documents: e.target.files[0],
    }));
  };

  const handleSave = () => {
    console.log('Saving staff:', formData);
  };

  const handleCancel = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      department: '',
      position: '',
      joinDate: '',
      qualification: '',
      experience: '',
      documents: null,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-2xl shadow-black/10 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Add Staff</h1>
          
          <form className="space-y-6">
            {/* Name Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-900 font-semibold mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 border border-white/60 rounded-2xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-200/50 shadow-sm"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 border border-white/60 rounded-2xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-200/50 shadow-sm"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            {/* Contact Info Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 border border-white/60 rounded-2xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-200/50 shadow-sm"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 border border-white/60 rounded-2xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-200/50 shadow-sm"
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            {/* Department and Position */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Department</label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 border border-white/60 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-200/50 shadow-sm"
                >
                  <option value="">Select department</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="nursing">Nursing</option>
                  <option value="administration">Administration</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Position</label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 border border-white/60 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-200/50 shadow-sm"
                >
                  <option value="">Select position</option>
                  <option value="doctor">Doctor</option>
                  <option value="nurse">Nurse</option>
                  <option value="technician">Technician</option>
                  <option value="manager">Manager</option>
                </select>
              </div>
            </div>

            {/* Join Date and Experience */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Join Date</label>
                <input
                  type="date"
                  name="joinDate"
                  value={formData.joinDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 border border-white/60 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-200/50 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Experience (Years)</label>
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 border border-white/60 rounded-2xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-200/50 shadow-sm"
                  placeholder="Enter years"
                />
              </div>
            </div>

            {/* Qualification */}
            <div>
              <label className="block text-gray-900 font-semibold mb-2">Qualification</label>
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/50 border border-white/60 rounded-2xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-200/50 shadow-sm"
                placeholder="Enter qualification"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-gray-900 font-semibold mb-2">Certification Documents</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-4 py-2 bg-white/50 border border-white/60 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-200/50 shadow-sm"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 justify-end pt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 bg-gray-200 text-gray-900 font-semibold rounded-2xl hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-blue-800 transition shadow-lg shadow-blue-500/30"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
