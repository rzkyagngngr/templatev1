import React, { useState } from 'react';
import { Package, Search, Plus } from 'lucide-react';

export default function AssetInventory() {
  const assets = [
    { id: 'ASSET-001', name: 'Server Rack A1', category: 'IT Equipment', quantity: 5, status: 'Active', location: 'Warehouse 1' },
    { id: 'ASSET-002', name: 'Office Furniture', category: 'Furniture', quantity: 120, status: 'Active', location: 'Office Main' },
    { id: 'ASSET-003', name: 'Vehicles', category: 'Transportation', quantity: 8, status: 'Active', location: 'Garage' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black">Asset Inventory</h1>
          <button className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg px-4 py-2 text-black flex items-center gap-2">
            <Plus size={18} /> Add Asset
          </button>
        </div>

        <div className="mb-6">
          <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-4 flex items-center gap-2">
            <Search size={20} className="text-black" />
            <input type="text" placeholder="Search assets..." className="bg-transparent text-black placeholder-gray-500 outline-none w-full" />
          </div>
        </div>

        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/50">
              <tr>
                <th className="px-6 py-3 text-left text-black font-semibold">Asset ID</th>
                <th className="px-6 py-3 text-left text-black font-semibold">Name</th>
                <th className="px-6 py-3 text-left text-black font-semibold">Category</th>
                <th className="px-6 py-3 text-left text-black font-semibold">Qty</th>
                <th className="px-6 py-3 text-left text-black font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {assets.map(asset => (
                <tr key={asset.id} className="border-t border-gray-300">
                  <td className="px-6 py-3 text-black">{asset.id}</td>
                  <td className="px-6 py-3 text-black">{asset.name}</td>
                  <td className="px-6 py-3 text-black">{asset.category}</td>
                  <td className="px-6 py-3 text-black">{asset.quantity}</td>
                  <td className="px-6 py-3"><span className="bg-green-100 text-black px-2 py-1 rounded text-sm">{asset.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <span className="inline-block bg-green-500 text-slate-900 text-xs px-2 py-1 rounded">CREATED</span>
        </div>
      </div>
    </div>
  );
}
