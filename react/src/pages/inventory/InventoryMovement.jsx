import React from 'react';
import { ArrowRightLeft, Send, Receive, TrendingUp } from 'lucide-react';

export default function InventoryMovement() {
  const stats = [
    { label: 'Total Movements', value: '1,247', color: 'bg-blue-500' },
    { label: 'Inbound Today', value: '45', color: 'bg-green-500' },
    { label: 'Outbound Today', value: '38', color: 'bg-orange-500' },
    { label: 'Avg Daily Volume', value: '82 units', color: 'bg-purple-500' }
  ];

  const movements = [
    { id: 1, product: 'SKU-001 Laptop', from: 'Receiving', to: 'Storage-A', quantity: 50, type: 'Inbound', date: '2024-01-15 10:30' },
    { id: 2, product: 'SKU-002 Monitor', from: 'Storage-B', to: 'Shipping', quantity: 20, type: 'Outbound', date: '2024-01-15 09:45' },
    { id: 3, product: 'SKU-003 Keyboard', from: 'Storage-A', to: 'Storage-C', quantity: 75, type: 'Transfer', date: '2024-01-14 14:20' },
    { id: 4, product: 'SKU-004 Mouse', from: 'Receiving', to: 'Storage-B', quantity: 100, type: 'Inbound', date: '2024-01-14 11:00' },
    { id: 5, product: 'SKU-005 Cable', from: 'Storage-C', to: 'Shipping', quantity: 150, type: 'Outbound', date: '2024-01-14 08:30' },
    { id: 6, product: 'SKU-006 Charger', from: 'Storage-A', to: 'Storage-B', quantity: 60, type: 'Transfer', date: '2024-01-13 16:15' },
    { id: 7, product: 'SKU-007 Speaker', from: 'Receiving', to: 'Storage-C', quantity: 80, type: 'Inbound', date: '2024-01-13 13:45' },
    { id: 8, product: 'SKU-008 Headset', from: 'Storage-B', to: 'Shipping', quantity: 40, type: 'Outbound', date: '2024-01-13 10:00' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">Stock Movement</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-xl p-6 shadow-lg">
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              <p className="text-3xl font-bold text-black mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Movements Table */}
        <div className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-300">
            <h2 className="text-xl font-bold text-black">Recent Movements</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100/50">
                <tr className="border-b border-gray-300">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Product</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">From</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">To</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Quantity</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Type</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {movements.map((movement, index) => {
                  const typeColor = movement.type === 'Inbound' ? 'bg-green-100 text-green-800' :
                                   movement.type === 'Outbound' ? 'bg-orange-100 text-orange-800' :
                                   'bg-blue-100 text-blue-800';
                  
                  return (
                    <tr key={index} className="border-b border-gray-300 hover:bg-white/20 transition">
                      <td className="px-6 py-4 text-sm font-semibold text-black">{movement.product}</td>
                      <td className="px-6 py-4 text-sm text-black">{movement.from}</td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center gap-2 text-black">
                          <ArrowRightLeft className="w-4 h-4" /> {movement.to}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-black">{movement.quantity}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColor}`}>
                          {movement.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-black">{movement.date}</td>
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
