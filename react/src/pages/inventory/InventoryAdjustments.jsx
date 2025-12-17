import React from 'react';
import { RotateCw, Plus, Minus, AlertTriangle } from 'lucide-react';

export default function InventoryAdjustments() {
  const stats = [
    { label: 'Total Adjustments', value: '356', color: 'bg-blue-500' },
    { label: 'This Month', value: '47', color: 'bg-green-500' },
    { label: 'Pending Review', value: '8', color: 'bg-orange-500' },
    { label: 'Variance %', value: '0.8%', color: 'bg-purple-500' }
  ];

  const adjustments = [
    { id: 1, sku: 'SKU-001', reason: 'Inventory Count', adjustment: '+15', type: 'Increase', status: 'Approved', date: '2024-01-15' },
    { id: 2, sku: 'SKU-002', reason: 'Damage Report', adjustment: '-5', type: 'Decrease', status: 'Approved', date: '2024-01-14' },
    { id: 3, sku: 'SKU-003', reason: 'Transfer In', adjustment: '+30', type: 'Increase', status: 'Approved', date: '2024-01-13' },
    { id: 4, sku: 'SKU-004', reason: 'Expiry Removal', adjustment: '-8', type: 'Decrease', status: 'Pending', date: '2024-01-13' },
    { id: 5, sku: 'SKU-005', reason: 'Physical Count', adjustment: '+5', type: 'Increase', status: 'Approved', date: '2024-01-12' },
    { id: 6, sku: 'SKU-006', reason: 'System Error Fix', adjustment: '-12', type: 'Decrease', status: 'Approved', date: '2024-01-11' },
    { id: 7, sku: 'SKU-007', reason: 'Supplier Return', adjustment: '+20', type: 'Increase', status: 'Pending', date: '2024-01-10' },
    { id: 8, sku: 'SKU-008', reason: 'Quality Issue', adjustment: '-3', type: 'Decrease', status: 'Approved', date: '2024-01-09' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-black">Adjustments</h1>
          <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-slate-900 px-4 py-2 rounded-lg transition">
            <Plus className="w-4 h-4" /> New Adjustment
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

        {/* Adjustments Table */}
        <div className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-300">
            <h2 className="text-xl font-bold text-black">Recent Adjustments</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100/50">
                <tr className="border-b border-gray-300">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">SKU</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Reason</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Adjustment</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Type</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Date</th>
                </tr>
              </thead>
              <tbody>
                {adjustments.map((adjustment, index) => {
                  const isIncrease = adjustment.type === 'Increase';
                  
                  return (
                    <tr key={index} className="border-b border-gray-300 hover:bg-white/20 transition">
                      <td className="px-6 py-4 text-sm font-semibold text-black">{adjustment.sku}</td>
                      <td className="px-6 py-4 text-sm text-black">{adjustment.reason}</td>
                      <td className="px-6 py-4 text-sm font-semibold">
                        <div className="flex items-center gap-2">
                          {isIncrease ? (
                            <>
                              <Plus className="w-4 h-4 text-green-600" />
                              <span className="text-green-600">{adjustment.adjustment}</span>
                            </>
                          ) : (
                            <>
                              <Minus className="w-4 h-4 text-red-600" />
                              <span className="text-red-600">{adjustment.adjustment}</span>
                            </>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-black">{adjustment.type}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          adjustment.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {adjustment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-black">{adjustment.date}</td>
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
