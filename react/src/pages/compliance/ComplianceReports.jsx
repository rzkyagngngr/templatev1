import React, { useState } from 'react';
import { FileText, Download, Eye } from 'lucide-react';

const ComplianceReports = () => {
  const [status] = useState('CREATED');

  const reports = [
    { id: 1, name: 'Annual Compliance Report 2024', type: 'PDF', date: '2025-12-01', size: '2.4 MB', status: 'Published' },
    { id: 2, name: 'Q4 Audit Summary', type: 'PDF', date: '2025-12-10', size: '1.8 MB', status: 'Published' },
    { id: 3, name: 'Risk Assessment Report', type: 'XLSX', date: '2025-12-12', size: '890 KB', status: 'Draft' },
    { id: 4, name: 'Policy Compliance Analysis', type: 'PDF', date: '2025-12-14', size: '3.2 MB', status: 'Published' },
    { id: 5, name: 'Monthly Compliance Metrics', type: 'XLSX', date: '2025-12-15', size: '1.1 MB', status: 'Draft' }
  ];

  const getStatusColor = (status) => {
    return status === 'Published' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Compliance Reports</h1>
        <p className="text-gray-600">Status: <span className="font-semibold text-green-600">{status}</span></p>
      </div>

      <div className="glass-card border border-gray-300 rounded-lg p-6 backdrop-blur-md bg-white bg-opacity-60">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-4 px-6 text-black font-semibold">Report Name</th>
                <th className="text-left py-4 px-6 text-black font-semibold">Type</th>
                <th className="text-left py-4 px-6 text-black font-semibold">Date</th>
                <th className="text-left py-4 px-6 text-black font-semibold">Size</th>
                <th className="text-left py-4 px-6 text-black font-semibold">Status</th>
                <th className="text-left py-4 px-6 text-black font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-black font-medium flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-500" />
                    {report.name}
                  </td>
                  <td className="py-4 px-6 text-black">{report.type}</td>
                  <td className="py-4 px-6 text-black">{report.date}</td>
                  <td className="py-4 px-6 text-black">{report.size}</td>
                  <td className="py-4 px-6">
                    <span className={`${getStatusColor(report.status)} px-3 py-1 rounded-full text-sm font-semibold`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800 p-1">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-800 p-1">
                      <Download className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComplianceReports;
