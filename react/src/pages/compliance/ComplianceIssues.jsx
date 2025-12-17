import React, { useState } from 'react';
import { AlertTriangle, Clock, TrendingDown } from 'lucide-react';

const ComplianceIssues = () => {
  const [status] = useState('CREATED');

  const issues = [
    { id: 1, title: 'Missing Policy Documentation', severity: 'High', priority: 'Urgent', dueDate: '2025-12-20', assignee: 'Alice Chen' },
    { id: 2, title: 'Outdated Security Protocols', severity: 'High', priority: 'High', dueDate: '2025-12-25', assignee: 'Bob Martinez' },
    { id: 3, title: 'Incomplete Training Records', severity: 'Medium', priority: 'High', dueDate: '2025-12-28', assignee: 'Carol Singh' },
    { id: 4, title: 'Data Retention Issue', severity: 'Critical', priority: 'Urgent', dueDate: '2025-12-19', assignee: 'David Park' },
    { id: 5, title: 'Access Control Gaps', severity: 'Medium', priority: 'Medium', dueDate: '2026-01-05', assignee: 'Emma Taylor' }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Critical':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'High':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Low':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Compliance Issues</h1>
        <p className="text-gray-600">Status: <span className="font-semibold text-green-600">{status}</span></p>
      </div>

      <div className="glass-card border border-gray-300 rounded-lg p-6 backdrop-blur-md bg-white bg-opacity-60">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-4 px-6 text-black font-semibold">Issue Title</th>
                <th className="text-left py-4 px-6 text-black font-semibold">Severity</th>
                <th className="text-left py-4 px-6 text-black font-semibold">Priority</th>
                <th className="text-left py-4 px-6 text-black font-semibold">Due Date</th>
                <th className="text-left py-4 px-6 text-black font-semibold">Assignee</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((issue) => (
                <tr key={issue.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-black font-medium flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                    {issue.title}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`${getSeverityColor(issue.severity)} px-3 py-1 rounded-full text-sm font-semibold border`}>
                      {issue.severity}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-black font-medium">{issue.priority}</td>
                  <td className="py-4 px-6 text-black flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    {issue.dueDate}
                  </td>
                  <td className="py-4 px-6 text-black">{issue.assignee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComplianceIssues;
