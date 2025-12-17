import React from 'react';
import { Package, Plus, Search, Filter } from 'lucide-react';

export default function InventoryProducts() {
  const stats = [
    { label: 'Total Products', value: '2,458', color: 'bg-blue-500' },
    { label: 'Active SKUs', value: '1,890', color: 'bg-green-500' },
    { label: 'Discontinued', value: '568', color: 'bg-gray-500' },
    { label: 'Last Updated', value: 'Today', color: 'bg-purple-500' }
  ];

  const products = [
    { id: 1, sku: 'SKU-001', name: 'Laptop Pro 15', category: 'Electronics', stock: 145, price: '$1,299', status: 'Active' },
    { id: 2, sku: 'SKU-002', name: 'USB Monitor', category: 'Accessories', stock: 42, price: '$299', status: 'Low Stock' },
    { id: 3, sku: 'SKU-003', name: 'Mechanical Keyboard', category: 'Peripherals', stock: 280, price: '$149', status: 'Active' },
    { id: 4, sku: 'SKU-004', name: 'Wireless Mouse', category: 'Accessories', stock: 8, price: '$39', status: 'Critical' },
    { id: 5, sku: 'SKU-005', name: 'HDMI Cable 2m', category: 'Cables', stock: 500, price: '$12', status: 'Active' },
    { id: 6, sku: 'SKU-006', name: 'USB-C Charger', category: 'Chargers', stock: 125, price: '$45', status: 'Active' },
    { id: 7, sku: 'SKU-007', name: 'Bluetooth Speaker', category: 'Audio', stock: 35, price: '$89', status: 'Low Stock' },
    { id: 8, sku: 'SKU-008', name: 'Gaming Headset', category: 'Audio', stock: 200, price: '$159', status: 'Active' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-black">Products</h1>
          <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-slate-900 px-4 py-2 rounded-lg transition">
            <Plus className="w-4 h-4" /> Add Product
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

        {/* Search and Filter */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input type="text" placeholder="Search products..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white/50 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur-md border border-gray-300 rounded-lg text-black hover:bg-white/60 transition">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>

        {/* Products Table */}
        <div className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100/50">
                <tr className="border-b border-gray-300">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">SKU</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Product Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Category</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Stock</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Price</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index} className="border-b border-gray-300 hover:bg-white/20 transition">
                    <td className="px-6 py-4 text-sm font-semibold text-black">{product.sku}</td>
                    <td className="px-6 py-4 text-sm text-black">{product.name}</td>
                    <td className="px-6 py-4 text-sm text-black">{product.category}</td>
                    <td className="px-6 py-4 text-sm text-black font-semibold">{product.stock}</td>
                    <td className="px-6 py-4 text-sm text-black">{product.price}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.status === 'Active' ? 'bg-green-100 text-green-800' :
                        product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {product.status}
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
