import React from 'react';
import { Archive, Download } from 'lucide-react';

export default function ReportArchive() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-6">
        <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
          CREATED
        </div>
        <h1 className="text-4xl font-bold text-black mt-4">Report Archive</h1>
      </div>

      <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-black">Archived Reports</h2>
          <Archive className="text-black" />
        </div>
        
        <div className="mb-6 flex gap-4">
          <input type="text" placeholder="Search reports..." className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-black bg-white/60" />
          <button className="px-6 py-2 bg-black text-slate-900 rounded-lg font-semibold hover:bg-gray-800">Search</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-black">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Report Name</th>
                <th className="px-4 py-2 text-left">Created Date</th>
                <th className="px-4 py-2 text-left">Size</th>
                <th className="px-4 py-2 text-left">Format</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2">Q4 Sales Report</td>
                <td className="px-4 py-2">Nov 30, 2024</td>
                <td className="px-4 py-2">2.4 MB</td>
                <td className="px-4 py-2">PDF</td>
                <td className="px-4 py-2">
                  <button className="flex items-center text-blue-600 hover:text-blue-800">
                    <Download size={16} className="mr-1" /> Download
                  </button>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2">Q3 Revenue Report</td>
                <td className="px-4 py-2">Oct 31, 2024</td>
                <td className="px-4 py-2">1.8 MB</td>
                <td className="px-4 py-2">PDF</td>
                <td className="px-4 py-2">
                  <button className="flex items-center text-blue-600 hover:text-blue-800">
                    <Download size={16} className="mr-1" /> Download
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
