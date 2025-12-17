import React from 'react';
import { CheckCircle, AlertCircle, Calendar, User } from 'lucide-react';

export default function AssetAudit() {
  const audits = [
    { id: 'AUDIT-001', asset: 'Server A', auditDate: '2024-12-16', auditor: 'John Smith', status: 'Verified', findings: 'None' },
    { id: 'AUDIT-002', asset: 'Vehicle #3', auditDate: '2024-12-15', auditor: 'Sarah Lee', status: 'Issues Found', findings: '2 items' },
    { id: 'AUDIT-003', asset: 'Equipment B', auditDate: '2024-12-14', auditor: 'Mike Chen', status: 'Verified', findings: 'None' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Asset Audit</h1>

        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/50">
              <tr>
                <th className="px-6 py-3 text-left text-black font-semibold">Audit ID</th>
                <th className="px-6 py-3 text-left text-black font-semibold">Asset</th>
                <th className="px-6 py-3 text-left text-black font-semibold flex items-center gap-2"><Calendar size={16} /> Date</th>
                <th className="px-6 py-3 text-left text-black font-semibold flex items-center gap-2"><User size={16} /> Auditor</th>
                <th className="px-6 py-3 text-left text-black font-semibold">Status</th>
                <th className="px-6 py-3 text-left text-black font-semibold">Findings</th>
              </tr>
            </thead>
            <tbody>
              {audits.map(audit => (
                <tr key={audit.id} className="border-t border-gray-300">
                  <td className="px-6 py-3 text-black">{audit.id}</td>
                  <td className="px-6 py-3 text-black">{audit.asset}</td>
                  <td className="px-6 py-3 text-black">{audit.auditDate}</td>
                  <td className="px-6 py-3 text-black">{audit.auditor}</td>
                  <td className="px-6 py-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold flex items-center gap-1 w-fit ${audit.status === 'Verified' ? 'bg-green-100 text-black' : 'bg-orange-100 text-black'}`}>
                      {audit.status === 'Verified' ? <CheckCircle size={14} /> : <AlertCircle size={14} />}
                      {audit.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-black">{audit.findings}</td>
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
