import React, { useState } from 'react';
import { Search, Filter, Download, Plus } from 'lucide-react';

export default function SalesOrders() {
  const [searchTerm, setSearchTerm] = useState('');

  const orders = [
    { id: 'ORD-2024-001', customer: 'Acme Corporation', amount: '$12,450', status: 'Completed', date: '2024-12-15', items: 5 },
    { id: 'ORD-2024-002', customer: 'Tech Solutions Ltd', amount: '$8,920', status: 'Pending', date: '2024-12-15', items: 3 },
    { id: 'ORD-2024-003', customer: 'Global Traders', amount: '$15,680', status: 'Shipped', date: '2024-12-14', items: 8 },
    { id: 'ORD-2024-004', customer: 'Local Business Inc', amount: '$4,230', status: 'Completed', date: '2024-12-14', items: 2 },
    { id: 'ORD-2024-005', customer: 'Enterprise Co', amount: '$22,100', status: 'Processing', date: '2024-12-13', items: 12 },
    { id: 'ORD-2024-006', customer: 'Startup Labs', amount: '$3,450', status: 'Pending', date: '2024-12-13', items: 1 },
    { id: 'ORD-2024-007', customer: 'Digital Group', amount: '$11,200', status: 'Completed', date: '2024-12-12', items: 6 },
    { id: 'ORD-2024-008', customer: 'Market Leaders', amount: '$19,850', status: 'Shipped', date: '2024-12-12', items: 9 },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Completed': 'bg-green-100 text-green-700',
      'Pending': 'bg-yellow-100 text-yellow-700',
      'Shipped': 'bg-blue-100 text-blue-700',
      'Processing': 'bg-purple-100 text-purple-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-black">Sales Orders</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-slate-900 px-4 py-2 rounded-lg flex items-center gap-2 transition">
            <Plus size={20} />
            New Order
          </button>
        </div>

        {/* Filters */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="Search by order ID or customer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black bg-white/50"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/50 border border-gray-300 rounded-lg hover:bg-white/70 transition text-black">
              <Filter size={20} />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/50 border border-gray-300 rounded-lg hover:bg-white/70 transition text-black">
              <Download size={20} />
              Export
            </button>
          </div>
        </div>

        {/* Orders Table */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-white/50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Order ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Customer</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Items</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-200 hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-black">{order.id}</td>
                  <td className="px-6 py-4 text-black">{order.customer}</td>
                  <td className="px-6 py-4 font-semibold text-black">{order.amount}</td>
                  <td className="px-6 py-4 text-black">{order.items}</td>
                  <td className="px-6 py-4 text-gray-600">{order.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
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
