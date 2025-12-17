import React from 'react';
import { Trash2, Calendar, User, AlertCircle } from 'lucide-react';

export default function AssetDisposal() {
  const disposals = [
    { id: 'DISP-001', asset: 'Old Server', reason: 'End of Life', disposalDate: '2024-12-20', method: 'Recycling', status: 'Approved' },
    { id: 'DISP-002', asset: 'Broken Monitor', reason: 'Defective', disposalDate: '2024-12-25', method: 'Salvage', status: 'Pending' },
    { id: 'DISP-003', asset: 'Old Furniture', reason: 'Replaced', disposalDate: '2024-12-18', method: 'Donation', status: 'Approved' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Asset Disposal</h1>

        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/50">
              <tr>
                <th className="px-6 py-3 text-left text-black font-semibold">Disposal ID</th>
                <th className="px-6 py-3 text-left text-black font-semibold flex items-center gap-2"><Trash2 size={16} /> Asset</th>
                <th className="px-6 py-3 text-left text-black font-semibold">Reason</th>
                <th className="px-6 py-3 text-left text-black font-semibold">Method</th>
                <th className="px-6 py-3 text-left text-black font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {disposals.map(disposal => (
                <tr key={disposal.id} className="border-t border-gray-300">
                  <td className="px-6 py-3 text-black">{disposal.id}</td>
                  <td className="px-6 py-3 text-black">{disposal.asset}</td>
                  <td className="px-6 py-3 text-black">{disposal.reason}</td>
                  <td className="px-6 py-3 text-black">{disposal.method}</td>
                  <td className="px-6 py-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${disposal.status === 'Approved' ? 'bg-green-100 text-black' : 'bg-yellow-100 text-black'}`}>
                      {disposal.status}
                    </span>
                  </td>
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
