import React from 'react';
import { Calendar, AlertTriangle, Clock, TrendingDown } from 'lucide-react';

export default function InventoryExpiry() {
  const stats = [
    { label: 'Total Items Tracked', value: '1,240', color: 'bg-blue-500' },
    { label: 'Expiring Soon', value: '34', color: 'bg-orange-500' },
    { label: 'Already Expired', value: '5', color: 'bg-red-500' },
    { label: 'Days to Review', value: '7', color: 'bg-purple-500' }
  ];

  const expiryItems = [
    { id: 1, sku: 'SKU-001', product: 'Laptop Pro', warehouse: 'WH-01', quantity: 15, expiryDate: '2024-02-15', daysLeft: 32, status: 'Good' },
    { id: 2, sku: 'SKU-002', product: 'Monitor', warehouse: 'WH-02', quantity: 8, expiryDate: '2024-01-25', daysLeft: 10, status: 'Warning' },
    { id: 3, sku: 'SKU-003', product: 'Keyboard', warehouse: 'WH-03', quantity: 20, expiryDate: '2024-01-18', daysLeft: 3, status: 'Critical' },
    { id: 4, sku: 'SKU-004', product: 'Mouse', warehouse: 'WH-01', quantity: 5, expiryDate: '2024-01-12', daysLeft: -3, status: 'Expired' },
    { id: 5, sku: 'SKU-005', product: 'Cable', warehouse: 'WH-04', quantity: 50, expiryDate: '2024-03-30', daysLeft: 74, status: 'Good' },
    { id: 6, sku: 'SKU-006', product: 'Charger', warehouse: 'WH-02', quantity: 12, expiryDate: '2024-01-20', daysLeft: 5, status: 'Critical' },
    { id: 7, sku: 'SKU-007', product: 'Speaker', warehouse: 'WH-03', quantity: 10, expiryDate: '2024-02-28', daysLeft: 44, status: 'Good' },
    { id: 8, sku: 'SKU-008', product: 'Headset', warehouse: 'WH-04', quantity: 25, expiryDate: '2024-01-22', daysLeft: 7, status: 'Warning' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">Expiry Management</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-xl p-6 shadow-lg">
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              <p className="text-3xl font-bold text-black mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Expiry Table */}
        <div className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-300">
            <h2 className="text-xl font-bold text-black">Expiry Tracking</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100/50">
                <tr className="border-b border-gray-300">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">SKU</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Product</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Warehouse</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Quantity</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Expiry Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Days Left</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
                </tr>
              </thead>
              <tbody>
                {expiryItems.map((item, index) => {
                  const statusColor = item.status === 'Good' ? 'bg-green-100 text-green-800' :
                                     item.status === 'Warning' ? 'bg-yellow-100 text-yellow-800' :
                                     item.status === 'Critical' ? 'bg-orange-100 text-orange-800' :
                                     'bg-red-100 text-red-800';
                  
                  return (
                    <tr key={index} className="border-b border-gray-300 hover:bg-white/20 transition">
                      <td className="px-6 py-4 text-sm font-semibold text-black">{item.sku}</td>
                      <td className="px-6 py-4 text-sm text-black">{item.product}</td>
                      <td className="px-6 py-4 text-sm text-black">{item.warehouse}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-black">{item.quantity}</td>
                      <td className="px-6 py-4 text-sm text-black flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {item.expiryDate}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`font-semibold ${item.daysLeft < 0 ? 'text-red-600' : 'text-black'}`}>
                          {item.daysLeft > 0 ? item.daysLeft + ' days' : 'Expired'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
