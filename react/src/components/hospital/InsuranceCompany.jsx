import React, { useState } from 'react';

export default function InsuranceCompany() {
  const [formData, setFormData] = useState({
    companyName: '',
    companyCode: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    coverage: '',
    maxCoverageAmount: '',
    documentFile: null,
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
      documentFile: e.target.files[0],
    }));
  };

  const handleSave = () => {
    console.log('Saving insurance company:', formData);
  };

  const handleCancel = () => {
    setFormData({
      companyName: '',
      companyCode: '',
      contactPerson: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      coverage: '',
      maxCoverageAmount: '',
      documentFile: null,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/30 backdrop-blur-md border border-gray-300 rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-black mb-6">Insurance Company</h1>
          
          <form className="space-y-6">
            {/* Company Name and Code */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-black font-semibold mb-2">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter company name"
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Company Code</label>
                <input
                  type="text"
                  name="companyCode"
                  value={formData.companyCode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter company code"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-black font-semibold mb-2">Contact Person</label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter contact person"
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter email"
                />
              </div>
            </div>

            {/* Phone and Address */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-black font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter address"
                />
              </div>
            </div>

            {/* City and Postal Code */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-black font-semibold mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter city"
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter postal code"
                />
              </div>
            </div>

            {/* Coverage and Max Amount */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-black font-semibold mb-2">Coverage Type</label>
                <select
                  name="coverage"
                  value={formData.coverage}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select coverage type</option>
                  <option value="basic">Basic</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                </select>
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Max Coverage Amount</label>
                <input
                  type="number"
                  name="maxCoverageAmount"
                  value={formData.maxCoverageAmount}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter max amount"
                />
              </div>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-black font-semibold mb-2">Agreement Document</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 justify-end pt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 bg-gray-400 text-black font-semibold rounded-lg hover:bg-gray-500 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="px-6 py-2 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-600 transition"
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
