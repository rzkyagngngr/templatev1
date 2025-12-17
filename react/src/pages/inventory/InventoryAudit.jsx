import React from 'react';
import { CheckCircle, AlertCircle, User, Calendar } from 'lucide-react';

export default function InventoryAudit() {
  const stats = [
    { label: 'Total Audits', value: '24', color: 'bg-blue-500' },
    { label: 'Completed', value: '19', color: 'bg-green-500' },
    { label: 'In Progress', value: '3', color: 'bg-orange-500' },
    { label: 'Variance Found', value: '2.4%', color: 'bg-red-500' }
  ];

  const audits = [
    { id: 1, auditNo: 'AUD-2024-001', warehouse: 'WH-01 Main', auditor: 'John Smith', startDate: '2024-01-10', endDate: '2024-01-12', discrepancy: '12 units', status: 'Completed' },
    { id: 2, auditNo: 'AUD-2024-002', warehouse: 'WH-02 Secondary', auditor: 'Sarah Johnson', startDate: '2024-01-12', endDate: '2024-01-15', discrepancy: '5 units', status: 'In Progress' },
    { id: 3, auditNo: 'AUD-2024-003', warehouse: 'WH-03 Regional', auditor: 'Mike Chen', startDate: '2024-01-08', endDate: '2024-01-10', discrepancy: '0 units', status: 'Completed' },
    { id: 4, auditNo: 'AUD-2024-004', warehouse: 'WH-04 Distribution', auditor: 'Emma Wilson', startDate: '2024-01-13', endDate: '2024-01-16', discrepancy: '8 units', status: 'In Progress' },
    { id: 5, auditNo: 'AUD-2024-005', warehouse: 'WH-01 Main', auditor: 'David Brown', startDate: '2024-01-06', endDate: '2024-01-08', discrepancy: '3 units', status: 'Completed' },
    { id: 6, auditNo: 'AUD-2024-006', warehouse: 'WH-02 Secondary', auditor: 'Lisa Garcia', startDate: '2024-01-15', endDate: 'TBD', discrepancy: '15 units', status: 'Pending' },
    { id: 7, auditNo: 'AUD-2024-007', warehouse: 'WH-03 Regional', auditor: 'Tom Martinez', startDate: '2024-01-05', endDate: '2024-01-07', discrepancy: '1 unit', status: 'Completed' },
    { id: 8, auditNo: 'AUD-2024-008', warehouse: 'WH-04 Distribution', auditor: 'Anna Lee', startDate: '2024-01-14', endDate: '2024-01-18', discrepancy: '6 units', status: 'In Progress' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">Inventory Audit</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-xl p-6 shadow-lg">
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              <p className="text-3xl font-bold text-black mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Audits Table */}
        <div className="bg-white/40 backdrop-blur-md border border-gray-300 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-300">
            <h2 className="text-xl font-bold text-black">Audit Records</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100/50">
                <tr className="border-b border-gray-300">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Audit No.</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Warehouse</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Auditor</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Start Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">End Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Discrepancy</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-black">Status</th>
                </tr>
              </thead>
              <tbody>
                {audits.map((audit, index) => {
                  const hasDiscrepancy = audit.discrepancy !== '0 units';
                  
                  return (
                    <tr key={index} className="border-b border-gray-300 hover:bg-white/20 transition">
                      <td className="px-6 py-4 text-sm font-semibold text-black">{audit.auditNo}</td>
                      <td className="px-6 py-4 text-sm text-black">{audit.warehouse}</td>
                      <td className="px-6 py-4 text-sm text-black flex items-center gap-2">
                        <User className="w-4 h-4" /> {audit.auditor}
                      </td>
                      <td className="px-6 py-4 text-sm text-black flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {audit.startDate}
                      </td>
                      <td className="px-6 py-4 text-sm text-black">{audit.endDate}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`font-semibold flex items-center gap-2 ${
                          hasDiscrepancy ? 'text-orange-600' : 'text-green-600'
                        }`}>
                          {hasDiscrepancy ? <AlertCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                          {audit.discrepancy}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          audit.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          audit.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {audit.status}
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
