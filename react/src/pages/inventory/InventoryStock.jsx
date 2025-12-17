import React from 'react';
import { BarChart3, TrendingDown, AlertTriangle, Activity } from 'lucide-react';

export default function InventoryStock() {
  const stats = [
    { label: 'Total Stock Value', value: '$2.4M', color: 'bg-blue-500' },
    { label: 'Average Stock Level', value: '156 units', color: 'bg-green-500' },
    { label: 'Stock Variance', value: '-2.3%', color: 'bg-red-500' },
    { label: 'Turnover Rate', value: '8.5x', color: 'bg-purple-500' }
  ];

  const stockLevels = [
    { id: 1, product: 'Laptop Pro 15', warehouse: 'WH-01', current: 145, minimum: 100, maximum: 500, trend: 'up' },
    { id: 2, product: 'USB Monitor', warehouse: 'WH-02', current: 42, minimum: 50, maximum: 200, trend: 'down' },
    { id: 3, product: 'Mechanical Keyboard', warehouse: 'WH-03', current: 280, minimum: 150, maximum: 400, trend: 'up' },
    { id: 4, product: 'Wireless Mouse', warehouse: 'WH-01', current: 8, minimum: 30, maximum: 150, trend: 'down' },
    { id: 5, product: 'HDMI Cable', warehouse: 'WH-04', current: 500, minimum: 200, maximum: 1000, trend: 'stable' },
    { id: 6, product: 'USB-C Charger', warehouse: 'WH-02', current: 125, minimum: 80, maximum: 300, trend: 'up' },
    { id: 7, product: 'Bluetooth Speaker', warehouse: 'WH-03', current: 35, minimum: 40, maximum: 200, trend: 'down' },
    { id: 8, product: 'Gaming Headset', warehouse: 'WH-01', current: 200, minimum: 100, maximum: 500, trend: 'up' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">Stock Levels</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-xl p-6 shadow-lg">
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              <p className="text-3xl font-bold text-black mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Stock Levels Table */}
        <div className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-300">
            <h2 className="text-xl font-bold text-black">Current Stock Levels</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100/50">
                <tr className="border-b border-gray-300">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Product</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Warehouse</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Current</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Min/Max</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Utilization</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Trend</th>
                </tr>
              </thead>
              <tbody>
                {stockLevels.map((item, index) => {
                  const utilization = ((item.current - item.minimum) / (item.maximum - item.minimum)) * 100;
                  const isLow = item.current < item.minimum;
                  
                  return (
                    <tr key={index} className="border-b border-gray-300 hover:bg-white/20 transition">
                      <td className="px-6 py-4 text-sm font-semibold text-black">{item.product}</td>
                      <td className="px-6 py-4 text-sm text-black">{item.warehouse}</td>
                      <td className="px-6 py-4 text-sm text-black font-semibold">{item.current}</td>
                      <td className="px-6 py-4 text-sm text-black">{item.minimum} / {item.maximum}</td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-300 rounded-full h-2">
                            <div className={`h-2 rounded-full ${isLow ? 'bg-red-500' : 'bg-green-500'}`} style={{width: `${Math.max(0, Math.min(100, utilization))}%`}}></div>
                          </div>
                          <span className="text-black text-xs">{Math.max(0, Math.min(100, utilization)).toFixed(0)}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`${
                          item.trend === 'up' ? 'text-green-600 font-semibold' :
                          item.trend === 'down' ? 'text-red-600 font-semibold' :
                          'text-gray-600'
                        }`}>
                          {item.trend === 'up' ? 'â†‘' : item.trend === 'down' ? 'â†“' : 'â†’'} {item.trend}
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
