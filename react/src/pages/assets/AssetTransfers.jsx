import React from 'react';
import { ArrowRightLeft, User, Calendar, CheckCircle } from 'lucide-react';

export default function AssetTransfers() {
  const transfers = [
    { id: 'TRANS-001', asset: 'Server A', fromDept: 'IT', toDept: 'Operations', date: '2024-12-15', status: 'Completed' },
    { id: 'TRANS-002', asset: 'Vehicle #2', fromDept: 'Fleet', toDept: 'Sales', date: '2024-12-16', status: 'Pending' },
    { id: 'TRANS-003', asset: 'Furniture Set', fromDept: 'HR', toDept: 'Finance', date: '2024-12-14', status: 'Completed' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Asset Transfers</h1>

        <div className="grid grid-cols-1 gap-6">
          {transfers.map(transfer => (
            <div key={transfer.id} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-black font-bold text-lg">{transfer.asset}</p>
                  <p className="text-black text-sm mt-1">{transfer.id}</p>
                </div>
                <span className={`px-3 py-1 rounded text-xs font-semibold ${transfer.status === 'Completed' ? 'bg-green-100 text-black' : 'bg-yellow-100 text-black'}`}>
                  {transfer.status}
                </span>
              </div>
              <div className="flex gap-8 mt-4 items-center">
                <div>
                  <p className="text-black text-xs font-semibold uppercase">From</p>
                  <p className="text-black text-sm">{transfer.fromDept}</p>
                </div>
                <ArrowRightLeft size={20} className="text-black" />
                <div>
                  <p className="text-black text-xs font-semibold uppercase">To</p>
                  <p className="text-black text-sm">{transfer.toDept}</p>
                </div>
                <div className="ml-auto">
                  <p className="text-black text-xs font-semibold uppercase">Date</p>
                  <p className="text-black text-sm">{transfer.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <span className="inline-block bg-green-500 text-slate-900 text-xs px-2 py-1 rounded">CREATED</span>
        </div>
      </div>
    </div>
  );
}
