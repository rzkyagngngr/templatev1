import React from 'react';
import { Wrench, Calendar, AlertCircle, CheckCircle } from 'lucide-react';

export default function AssetMaintenance() {
  const maintenance = [
    { id: 'MAINT-001', asset: 'Server A', type: 'Preventive', dueDate: '2025-01-15', status: 'Scheduled' },
    { id: 'MAINT-002', asset: 'Vehicle #3', type: 'Corrective', dueDate: '2024-12-18', status: 'Overdue' },
    { id: 'MAINT-003', asset: 'Pump B1', type: 'Preventive', dueDate: '2025-02-01', status: 'Scheduled' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Asset Maintenance</h1>

        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/50">
              <tr>
                <th className="px-6 py-3 text-left text-black font-semibold flex items-center gap-2"><Wrench size={16} /> Maintenance ID</th>
                <th className="px-6 py-3 text-left text-black font-semibold">Asset</th>
                <th className="px-6 py-3 text-left text-black font-semibold">Type</th>
                <th className="px-6 py-3 text-left text-black font-semibold flex items-center gap-2"><Calendar size={16} /> Due Date</th>
                <th className="px-6 py-3 text-left text-black font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {maintenance.map(item => (
                <tr key={item.id} className="border-t border-gray-300">
                  <td className="px-6 py-3 text-black">{item.id}</td>
                  <td className="px-6 py-3 text-black">{item.asset}</td>
                  <td className="px-6 py-3 text-black">{item.type}</td>
                  <td className="px-6 py-3 text-black">{item.dueDate}</td>
                  <td className="px-6 py-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${item.status === 'Overdue' ? 'bg-red-100 text-black' : 'bg-blue-100 text-black'}`}>
                      {item.status}
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
