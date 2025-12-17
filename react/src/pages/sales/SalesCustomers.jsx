import React, { useState } from 'react';
import { Mail, Phone, MapPin, Star } from 'lucide-react';

export default function SalesCustomers() {
  const [sortBy, setSortBy] = useState('name');

  const customers = [
    { id: 1, name: 'Acme Corporation', email: 'contact@acme.com', phone: '+1-555-0101', city: 'New York', lifetime: '$245,680', rating: 5 },
    { id: 2, name: 'Tech Solutions Inc', email: 'hello@techsol.com', phone: '+1-555-0102', city: 'San Francisco', lifetime: '$156,420', rating: 4 },
    { id: 3, name: 'Global Traders Ltd', email: 'info@globaltraders.com', phone: '+1-555-0103', city: 'London', lifetime: '$432,100', rating: 5 },
    { id: 4, name: 'Local Business Co', email: 'sales@local.com', phone: '+1-555-0104', city: 'Boston', lifetime: '$87,650', rating: 3 },
    { id: 5, name: 'Enterprise Plus', email: 'contact@enterprise.com', phone: '+1-555-0105', city: 'Chicago', lifetime: '$678,900', rating: 5 },
    { id: 6, name: 'Market Leaders', email: 'info@market.com', phone: '+1-555-0106', city: 'Los Angeles', lifetime: '$523,400', rating: 4 },
    { id: 7, name: 'Startup Labs', email: 'hello@startup.com', phone: '+1-555-0107', city: 'Austin', lifetime: '$45,200', rating: 3 },
    { id: 8, name: 'Digital Group', email: 'contact@digital.com', phone: '+1-555-0108', city: 'Seattle', lifetime: '$234,560', rating: 4 },
  ];

  const renderStars = (rating) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className={i < rating ? 'fill-yellow-400 text-yellow-600' : 'text-gray-300'} />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-black">Sales Customers</h1>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white/50 text-black focus:outline-none"
          >
            <option value="name">Sort by Name</option>
            <option value="revenue">Sort by Lifetime Value</option>
            <option value="rating">Sort by Rating</option>
          </select>
        </div>

        {/* Customer Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <p className="text-gray-600 text-sm mb-2">Total Customers</p>
            <p className="text-4xl font-bold text-black">{customers.length}</p>
          </div>
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <p className="text-gray-600 text-sm mb-2">Average Lifetime Value</p>
            <p className="text-4xl font-bold text-black">$337,789</p>
          </div>
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <p className="text-gray-600 text-sm mb-2">Total Revenue</p>
            <p className="text-4xl font-bold text-black">$2.7M</p>
          </div>
        </div>

        {/* Customers Table */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Phone</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">City</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Lifetime Value</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Rating</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black">{customer.name}</td>
                  <td className="px-6 py-4 text-gray-600 flex items-center gap-2">
                    <Mail size={16} />
                    <a href={`mailto:${customer.email}`} className="text-blue-600 hover:underline">{customer.email}</a>
                  </td>
                  <td className="px-6 py-4 text-black flex items-center gap-2">
                    <Phone size={16} className="text-gray-500" />
                    {customer.phone}
                  </td>
                  <td className="px-6 py-4 text-black flex items-center gap-2">
                    <MapPin size={16} className="text-gray-500" />
                    {customer.city}
                  </td>
                  <td className="px-6 py-4 font-bold text-black">{customer.lifetime}</td>
                  <td className="px-6 py-4">
                    {renderStars(customer.rating)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
