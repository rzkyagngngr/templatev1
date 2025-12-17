import React, { useState } from 'react';
import { TrendingUp, Users, ShoppingCart, DollarSign } from 'lucide-react';

export default function SalesDashboard() {
  const [timeframe] = useState('month');

  const metrics = [
    { label: 'Total Revenue', value: '$245,680', change: '+12.5%', icon: DollarSign, color: 'bg-blue-100' },
    { label: 'Total Orders', value: '1,234', change: '+8.2%', icon: ShoppingCart, color: 'bg-green-100' },
    { label: 'Active Customers', value: '892', change: '+5.3%', icon: Users, color: 'bg-purple-100' },
    { label: 'Conversion Rate', value: '3.45%', change: '+2.1%', icon: TrendingUp, color: 'bg-orange-100' },
  ];

  const topProducts = [
    { id: 1, name: 'Product A', sales: 1250, revenue: '$18,750' },
    { id: 2, name: 'Product B', sales: 980, revenue: '$15,680' },
    { id: 3, name: 'Product C', sales: 756, revenue: '$12,100' },
    { id: 4, name: 'Product D', sales: 543, revenue: '$8,645' },
    { id: 5, name: 'Product E', sales: 432, revenue: '$7,680' },
  ];

  const recentOrders = [
    { id: 'ORD-001', customer: 'Acme Corp', amount: '$2,450', status: 'Completed', date: '2024-12-15' },
    { id: 'ORD-002', customer: 'Tech Solutions', amount: '$1,890', status: 'Pending', date: '2024-12-15' },
    { id: 'ORD-003', customer: 'Global Traders', amount: '$3,120', status: 'Shipped', date: '2024-12-14' },
    { id: 'ORD-004', customer: 'Local Business', amount: '$890', status: 'Completed', date: '2024-12-14' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Sales Dashboard</h1>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6 hover:bg-white/80 transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`${metric.color} p-3 rounded-lg`}>
                    <Icon size={24} className="text-gray-700" />
                  </div>
                  <span className="text-green-600 text-sm font-semibold">{metric.change}</span>
                </div>
                <p className="text-gray-600 text-sm mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-black">{metric.value}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Products */}
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <h2 className="text-xl font-bold text-black mb-4">Top Products</h2>
            <div className="space-y-3">
              {topProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-3 bg-white/50 rounded border border-gray-200">
                  <div>
                    <p className="font-semibold text-black">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.sales} sales</p>
                  </div>
                  <p className="font-bold text-black">{product.revenue}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
            <h2 className="text-xl font-bold text-black mb-4">Recent Orders</h2>
            <div className="space-y-2">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 bg-white/50 rounded border border-gray-200">
                  <div>
                    <p className="font-semibold text-black text-sm">{order.id}</p>
                    <p className="text-xs text-gray-600">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-black text-sm">{order.amount}</p>
                    <span className={`text-xs px-2 py-1 rounded ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
