import React from 'react';
import { BarChart, PieChart, TrendingUp, Calendar } from 'lucide-react';

export default function TrainingReports() {
  const reports = [
    { id: 'RPT-001', title: 'Enrollment Report', type: 'Monthly', generatedDate: '2025-01-15', status: 'Available' },
    { id: 'RPT-002', title: 'Completion Rate Analysis', type: 'Quarterly', generatedDate: '2025-01-10', status: 'Available' },
    { id: 'RPT-003', title: 'Course Performance', type: 'Weekly', generatedDate: '2025-01-14', status: 'Available' },
    { id: 'RPT-004', title: 'Certification Trends', type: 'Annual', generatedDate: '2024-12-31', status: 'Available' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Training Reports</h1>

        {/* Reports List */}
        <div className="space-y-4 mb-8">
          {reports.map((report) => (
            <div key={report.id} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <BarChart className="w-6 h-6 text-black" />
                  <div>
                    <p className="font-bold text-black">{report.title}</p>
                    <p className="text-gray-600 text-sm">{report.id} â€¢ {report.type}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-right">
                  <p className="text-gray-600 text-sm">Generated: {report.generatedDate}</p>
                  <p className="font-bold text-black">{report.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Status */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <h2 className="text-xl font-bold text-black mb-4">Status</h2>
          <p className="text-black">CREATED</p>
        </div>
      </div>
    </div>
  );
}
