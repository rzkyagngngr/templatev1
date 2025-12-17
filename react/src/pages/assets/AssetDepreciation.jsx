import React from 'react';
import { TrendingDown, DollarSign, Calendar } from 'lucide-react';

export default function AssetDepreciation() {
  const assets = [
    { id: 'ASSET-001', name: 'Server A', originalCost: '$15,000', currentValue: '$9,000', depreciation: '40%', years: '3 years' },
    { id: 'ASSET-002', name: 'Vehicle #1', originalCost: '$35,000', currentValue: '$21,000', depreciation: '40%', years: '4 years' },
    { id: 'ASSET-003', name: 'Equipment B', originalCost: '$8,500', currentValue: '$5,100', depreciation: '40%', years: '5 years' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Asset Depreciation</h1>

        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/50">
              <tr>
                <th className="px-6 py-3 text-left text-black font-semibold">Asset</th>
                <th className="px-6 py-3 text-left text-black font-semibold flex items-center gap-2"><DollarSign size={16} /> Original Cost</th>
                <th className="px-6 py-3 text-left text-black font-semibold">Current Value</th>
                <th className="px-6 py-3 text-left text-black font-semibold flex items-center gap-2"><TrendingDown size={16} /> Depreciation</th>
                <th className="px-6 py-3 text-left text-black font-semibold">Age</th>
              </tr>
            </thead>
            <tbody>
              {assets.map(asset => (
                <tr key={asset.id} className="border-t border-gray-300">
                  <td className="px-6 py-3 text-black">{asset.name}</td>
                  <td className="px-6 py-3 text-black">{asset.originalCost}</td>
                  <td className="px-6 py-3 text-black">{asset.currentValue}</td>
                  <td className="px-6 py-3 text-black">{asset.depreciation}</td>
                  <td className="px-6 py-3 text-black">{asset.years}</td>
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
