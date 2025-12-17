import React from 'react';
import { Package, Barcode, AlertCircle, Tag } from 'lucide-react';

export default function InventorySKU() {
  const stats = [
    { label: 'Total SKUs', value: '2,458', color: 'bg-blue-500' },
    { label: 'Active SKUs', value: '1,890', color: 'bg-green-500' },
    { label: 'Inactive', value: '568', color: 'bg-gray-500' },
    { label: 'New This Month', value: '127', color: 'bg-purple-500' }
  ];

  const skus = [
    { id: 1, sku: 'SKU-001', name: 'Laptop Pro 15', category: 'Electronics', supplier: 'TechCorp', status: 'Active', lastActivity: '2024-01-15' },
    { id: 2, sku: 'SKU-002', name: 'Monitor 27"', category: 'Peripherals', supplier: 'DisplayInc', status: 'Active', lastActivity: '2024-01-14' },
    { id: 3, sku: 'SKU-003', name: 'Mechanical KB', category: 'Accessories', supplier: 'KeyMaster', status: 'Active', lastActivity: '2024-01-13' },
    { id: 4, sku: 'SKU-004', name: 'Wireless Mouse', category: 'Accessories', supplier: 'PointTech', status: 'Active', lastActivity: '2024-01-12' },
    { id: 5, sku: 'SKU-005', name: 'HDMI 2.0 Cable', category: 'Cables', supplier: 'ConnectHub', status: 'Active', lastActivity: '2024-01-11' },
    { id: 6, sku: 'SKU-006', name: 'USB-C Charger', category: 'Chargers', supplier: 'PowerPlus', status: 'Inactive', lastActivity: '2024-01-10' },
    { id: 7, sku: 'SKU-007', name: 'BT Speaker', category: 'Audio', supplier: 'SoundBox', status: 'Active', lastActivity: '2024-01-09' },
    { id: 8, sku: 'SKU-008', name: 'Gaming Headset', category: 'Audio', supplier: 'AudioPro', status: 'Active', lastActivity: '2024-01-08' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">SKU Management</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-xl p-6 shadow-lg">
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              <p className="text-3xl font-bold text-black mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* SKU Table */}
        <div className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-300">
            <h2 className="text-xl font-bold text-black">SKU Catalog</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100/50">
                <tr className="border-b border-gray-300">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">SKU</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Product Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Category</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Supplier</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Last Activity</th>
                </tr>
              </thead>
              <tbody>
                {skus.map((sku, index) => (
                  <tr key={index} className="border-b border-gray-300 hover:bg-white/20 transition">
                    <td className="px-6 py-4 text-sm font-semibold text-black flex items-center gap-2">
                      <Barcode className="w-4 h-4" /> {sku.sku}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-black">{sku.name}</td>
                    <td className="px-6 py-4 text-sm text-black">{sku.category}</td>
                    <td className="px-6 py-4 text-sm text-black">{sku.supplier}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        sku.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {sku.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-black">{sku.lastActivity}</td>
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
