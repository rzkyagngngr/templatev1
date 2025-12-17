import React from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function ReportScheduler() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-6">
        <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
          CREATED
        </div>
        <h1 className="text-4xl font-bold text-black mt-4">Report Scheduler</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-black">Schedule Reports</h2>
            <Calendar className="text-black" />
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">Report Name</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-white/60">
                <option>Select Report</option>
                <option>Monthly Sales</option>
                <option>Quarterly Revenue</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">Frequency</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-white/60">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">Time</label>
              <input type="time" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-white/60" />
            </div>
            <button className="w-full bg-black text-slate-900 py-2 rounded-lg font-semibold hover:bg-gray-800">Schedule</button>
          </form>
        </div>

        <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-black">Scheduled Reports</h2>
            <Clock className="text-black" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-black">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Report</th>
                  <th className="px-4 py-2 text-left">Frequency</th>
                  <th className="px-4 py-2 text-left">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2">Sales Report</td>
                  <td className="px-4 py-2">Daily</td>
                  <td className="px-4 py-2">08:00 AM</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2">Revenue Report</td>
                  <td className="px-4 py-2">Weekly</td>
                  <td className="px-4 py-2">09:00 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
