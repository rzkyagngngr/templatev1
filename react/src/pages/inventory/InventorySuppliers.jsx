import React from 'react';
import { Building2, Phone, Mail, TrendingUp } from 'lucide-react';

export default function InventorySuppliers() {
  const stats = [
    { label: 'Total Suppliers', value: '87', color: 'bg-blue-500' },
    { label: 'Active Contracts', value: '65', color: 'bg-green-500' },
    { label: 'Performance Score', value: '4.7/5', color: 'bg-purple-500' },
    { label: 'Avg Lead Time', value: '5.2 days', color: 'bg-orange-500' }
  ];

  const suppliers = [
    { id: 1, name: 'TechCorp International', contact: 'John Smith', phone: '+1-800-555-0123', email: 'john@techcorp.com', rating: 4.8, status: 'Active' },
    { id: 2, name: 'DisplayInc Ltd', contact: 'Sarah Johnson', phone: '+1-800-555-0124', email: 'sarah@displayinc.com', rating: 4.5, status: 'Active' },
    { id: 3, name: 'KeyMaster Solutions', contact: 'Mike Chen', phone: '+1-800-555-0125', email: 'mike@keymaster.com', rating: 4.6, status: 'Active' },
    { id: 4, name: 'PointTech Manufacturing', contact: 'Emma Wilson', phone: '+1-800-555-0126', email: 'emma@pointtech.com', rating: 4.3, status: 'Active' },
    { id: 5, name: 'ConnectHub Global', contact: 'David Brown', phone: '+1-800-555-0127', email: 'david@connecthub.com', rating: 4.7, status: 'Active' },
    { id: 6, name: 'PowerPlus Energy', contact: 'Lisa Garcia', phone: '+1-800-555-0128', email: 'lisa@powerplus.com', rating: 4.4, status: 'Inactive' },
    { id: 7, name: 'SoundBox Audio', contact: 'Tom Martinez', phone: '+1-800-555-0129', email: 'tom@soundbox.com', rating: 4.6, status: 'Active' },
    { id: 8, name: 'AudioPro Enterprises', contact: 'Anna Lee', phone: '+1-800-555-0130', email: 'anna@audiopro.com', rating: 4.9, status: 'Active' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">Suppliers</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-xl p-6 shadow-lg">
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              <p className="text-3xl font-bold text-black mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Suppliers Table */}
        <div className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-300">
            <h2 className="text-xl font-bold text-black">All Suppliers</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100/50">
                <tr className="border-b border-gray-300">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Supplier Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Contact Person</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Phone</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Email</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Rating</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
                </tr>
              </thead>
              <tbody>
                {suppliers.map((supplier, index) => (
                  <tr key={index} className="border-b border-gray-300 hover:bg-white/20 transition">
                    <td className="px-6 py-4 text-sm font-semibold text-black flex items-center gap-2">
                      <Building2 className="w-4 h-4" /> {supplier.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-black">{supplier.contact}</td>
                    <td className="px-6 py-4 text-sm text-black flex items-center gap-2">
                      <Phone className="w-4 h-4" /> {supplier.phone}
                    </td>
                    <td className="px-6 py-4 text-sm text-black flex items-center gap-2">
                      <Mail className="w-4 h-4" /> {supplier.email}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">â˜…</span>
                        <span className="font-semibold text-black">{supplier.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        supplier.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {supplier.status}
                      </span>
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
}
