import React from 'react';
import { FileText, Download, Filter, Calendar } from 'lucide-react';

export default function SupportReports() {
  const reports = [
    { id: 1, name: 'Monthly Support Summary', date: '2025-01-10', type: 'PDF' },
    { id: 2, name: 'Ticket Performance Report', date: '2025-01-05', type: 'PDF' },
    { id: 3, name: 'Customer Satisfaction Report', date: '2024-12-31', type: 'Excel' },
    { id: 4, name: 'Resolution Time Analysis', date: '2024-12-25', type: 'PDF' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Reports - CREATED</h1>

        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6 mb-8">
          <div className="flex gap-4">
            <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg">
              <Calendar className="w-5 h-5 text-black" />
              <input type="date" className="text-black bg-transparent outline-none" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-black hover:bg-white/50">
              <Filter className="w-5 h-5" />
              Filter
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {reports.map((report) => (
            <div key={report.id} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <FileText className="w-6 h-6 text-black" />
                <div>
                  <h3 className="font-semibold text-black">{report.name}</h3>
                  <p className="text-sm text-black">{report.date} â€¢ {report.type}</p>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-slate-900 rounded-lg hover:bg-blue-600">
                <Download className="w-5 h-5" />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
