import React from 'react';
import { Package, Warehouse, AlertCircle, TrendingUp } from 'lucide-react';

export default function InventoryDashboard() {
  const stats = [
    { label: 'Total Products', value: '2,458', icon: Package, color: 'bg-blue-500' },
    { label: 'Active Warehouses', value: '12', icon: Warehouse, color: 'bg-green-500' },
    { label: 'Low Stock Items', value: '47', icon: AlertCircle, color: 'bg-red-500' },
    { label: 'Monthly Growth', value: '12.5%', icon: TrendingUp, color: 'bg-purple-500' }
  ];

  const recentActivity = [
    { id: 1, product: 'SKU-001 Laptop', warehouse: 'WH-01 Main', quantity: 150, status: 'In Stock', date: '2024-01-15' },
    { id: 2, product: 'SKU-002 Monitor', warehouse: 'WH-02 Secondary', quantity: 42, status: 'Low Stock', date: '2024-01-14' },
    { id: 3, product: 'SKU-003 Keyboard', warehouse: 'WH-03 Regional', quantity: 280, status: 'In Stock', date: '2024-01-13' },
    { id: 4, product: 'SKU-004 Mouse', warehouse: 'WH-01 Main', quantity: 8, status: 'Critical', date: '2024-01-12' },
    { id: 5, product: 'SKU-005 Cable', warehouse: 'WH-04 Distribution', quantity: 500, status: 'In Stock', date: '2024-01-11' },
    { id: 6, product: 'SKU-006 Charger', warehouse: 'WH-02 Secondary', quantity: 125, status: 'In Stock', date: '2024-01-10' },
    { id: 7, product: 'SKU-007 Speaker', warehouse: 'WH-03 Regional', quantity: 35, status: 'Low Stock', date: '2024-01-09' },
    { id: 8, product: 'SKU-008 Headset', warehouse: 'WH-04 Distribution', quantity: 200, status: 'In Stock', date: '2024-01-08' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">Inventory Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold text-black mt-2">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-4 rounded-lg`}>
                    <Icon className="w-6 h-6 =" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Activity Table */}
        <div className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-300">
            <h2 className="text-xl font-bold text-black">Recent Activity</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100/50">
                <tr className="border-b border-gray-300">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Product</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Warehouse</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Quantity</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((item, index) => (
                  <tr key={index} className="border-b border-gray-300 hover:bg-white/20 transition">
                    <td className="px-6 py-4 text-sm text-black">{item.product}</td>
                    <td className="px-6 py-4 text-sm text-black">{item.warehouse}</td>
                    <td className="px-6 py-4 text-sm text-black font-semibold">{item.quantity}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'In Stock' ? 'bg-green-100 text-green-800' :
                        item.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-black">{item.date}</td>
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
