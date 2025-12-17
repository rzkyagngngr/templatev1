import React from 'react';
import { Send, Mail } from 'lucide-react';

export default function ReportDistribution() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-6">
        <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
          CREATED
        </div>
        <h1 className="text-4xl font-bold text-black mt-4">Report Distribution</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-black">Distribute Reports</h2>
            <Send className="text-black" />
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">Select Report</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-white/60">
                <option>Select Report</option>
                <option>Sales Report</option>
                <option>Revenue Report</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">Recipients</label>
              <textarea placeholder="Enter email addresses (comma separated)" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-white/60"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">Distribution Method</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-white/60">
                <option>Email</option>
                <option>Slack</option>
                <option>Teams</option>
              </select>
            </div>
            <button className="w-full bg-black text-slate-900 py-2 rounded-lg font-semibold hover:bg-gray-800">Distribute</button>
          </form>
        </div>

        <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-black">Distribution History</h2>
            <Mail className="text-black" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-black">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Report</th>
                  <th className="px-4 py-2 text-left">Recipients</th>
                  <th className="px-4 py-2 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2">Sales Report</td>
                  <td className="px-4 py-2">3 users</td>
                  <td className="px-4 py-2">Dec 16, 2024</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2">Revenue Report</td>
                  <td className="px-4 py-2">5 users</td>
                  <td className="px-4 py-2">Dec 15, 2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
