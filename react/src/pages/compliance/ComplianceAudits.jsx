import React, { useState } from 'react';
import { Calendar, User, CheckCircle } from 'lucide-react';

const ComplianceAudits = () => {
  const [status] = useState('CREATED');

  const audits = [
    { id: 1, name: 'Annual Financial Audit', auditor: 'John Smith', date: '2025-12-10', result: 'Passed' },
    { id: 2, name: 'IT Security Audit', auditor: 'Sarah Johnson', date: '2025-12-12', result: 'Passed with Issues' },
    { id: 3, name: 'Quality Control Audit', auditor: 'Mike Davis', date: '2025-12-14', result: 'Pending' },
    { id: 4, name: 'Environmental Compliance', auditor: 'Lisa Brown', date: '2025-12-16', result: 'In Progress' },
    { id: 5, name: 'Data Privacy Audit', auditor: 'Tom Wilson', date: '2025-12-18', result: 'Scheduled' }
  ];

  const getStatusColor = (result) => {
    switch (result) {
      case 'Passed':
        return 'bg-green-100 text-green-800';
      case 'Passed with Issues':
        return 'bg-yellow-100 text-yellow-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-gray-100 text-gray-800';
      case 'Scheduled':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Compliance Audits</h1>
        <p className="text-gray-600">Status: <span className="font-semibold text-green-600">{status}</span></p>
      </div>

      <div className="glass-card border border-gray-300 rounded-lg p-6 backdrop-blur-md bg-white bg-opacity-60">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-4 px-6 text-black font-semibold">Audit Name</th>
                <th className="text-left py-4 px-6 text-black font-semibold">Auditor</th>
                <th className="text-left py-4 px-6 text-black font-semibold">Date</th>
                <th className="text-left py-4 px-6 text-black font-semibold">Result</th>
              </tr>
            </thead>
            <tbody>
              {audits.map((audit) => (
                <tr key={audit.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-black font-medium">{audit.name}</td>
                  <td className="py-4 px-6 text-black flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-500" />
                    {audit.auditor}
                  </td>
                  <td className="py-4 px-6 text-black flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    {audit.date}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`${getStatusColor(audit.result)} px-3 py-1 rounded-full text-sm font-semibold inline-flex items-center gap-2`}>
                      {audit.result === 'Passed' && <CheckCircle className="w-4 h-4" />}
                      {audit.result}
                    </span>
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

export default ComplianceAudits;
