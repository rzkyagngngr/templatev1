import React from 'react';
import { ShoppingCart, Truck, Clock, DollarSign } from 'lucide-react';

export default function InventoryOrders() {
  const stats = [
    { label: 'Total Orders', value: '542', color: 'bg-blue-500' },
    { label: 'Pending Delivery', value: '23', color: 'bg-orange-500' },
    { label: 'Total Value', value: '$450K', color: 'bg-green-500' },
    { label: 'Avg Order Value', value: '$831', color: 'bg-purple-500' }
  ];

  const orders = [
    { id: 1, orderNo: 'PO-2024-001', supplier: 'TechCorp', items: 50, orderDate: '2024-01-10', dueDate: '2024-01-20', status: 'Delivered', value: '$12,500' },
    { id: 2, orderNo: 'PO-2024-045', supplier: 'DisplayInc', items: 25, orderDate: '2024-01-12', dueDate: '2024-01-22', status: 'In Transit', value: '$8,750' },
    { id: 3, orderNo: 'PO-2024-089', supplier: 'KeyMaster', items: 100, orderDate: '2024-01-14', dueDate: '2024-01-24', status: 'Processing', value: '$9,999' },
    { id: 4, orderNo: 'PO-2024-102', supplier: 'PointTech', items: 75, orderDate: '2024-01-15', dueDate: '2024-01-25', status: 'Pending', value: '$5,625' },
    { id: 5, orderNo: 'PO-2024-156', supplier: 'ConnectHub', items: 200, orderDate: '2024-01-13', dueDate: '2024-01-23', status: 'Delivered', value: '$2,400' },
    { id: 6, orderNo: 'PO-2024-201', supplier: 'PowerPlus', items: 60, orderDate: '2024-01-11', dueDate: '2024-01-21', status: 'In Transit', value: '$2,700' },
    { id: 7, orderNo: 'PO-2024-267', supplier: 'SoundBox', items: 40, orderDate: '2024-01-09', dueDate: '2024-01-19', status: 'Delivered', value: '$3,560' },
    { id: 8, orderNo: 'PO-2024-301', supplier: 'AudioPro', items: 55, orderDate: '2024-01-15', dueDate: '2024-01-26', status: 'Pending', value: '$8,745' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-black">Purchase Orders</h1>
          <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-slate-900 px-4 py-2 rounded-lg transition">
            <ShoppingCart className="w-4 h-4" /> New Order
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-xl p-6 shadow-lg">
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              <p className="text-3xl font-bold text-black mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Orders Table */}
        <div className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-300">
            <h2 className="text-xl font-bold text-black">Recent Orders</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100/50">
                <tr className="border-b border-gray-300">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Order No.</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Supplier</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Items</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Order Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Due Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Value</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className="border-b border-gray-300 hover:bg-white/20 transition">
                    <td className="px-6 py-4 text-sm font-semibold text-black">{order.orderNo}</td>
                    <td className="px-6 py-4 text-sm text-black">{order.supplier}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-black">{order.items}</td>
                    <td className="px-6 py-4 text-sm text-black">{order.orderDate}</td>
                    <td className="px-6 py-4 text-sm text-black flex items-center gap-2">
                      <Clock className="w-4 h-4" /> {order.dueDate}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'Processing' ? 'bg-purple-100 text-purple-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-black flex items-center gap-2">
                      <DollarSign className="w-4 h-4" /> {order.value}
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
