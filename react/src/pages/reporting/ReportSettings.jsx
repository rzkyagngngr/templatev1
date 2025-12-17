import React from 'react';
import { Settings, Toggle2 } from 'lucide-react';

export default function ReportSettings() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-6">
        <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
          CREATED
        </div>
        <h1 className="text-4xl font-bold text-black mt-4">Report Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-black">General Settings</h2>
            <Settings className="text-black" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-gray-300">
              <label className="text-black font-medium">Auto-generate Reports</label>
              <input type="checkbox" className="w-4 h-4" defaultChecked />
            </div>
            <div className="flex items-center justify-between pb-4 border-b border-gray-300">
              <label className="text-black font-medium">Email Notifications</label>
              <input type="checkbox" className="w-4 h-4" defaultChecked />
            </div>
            <div className="flex items-center justify-between pb-4 border-b border-gray-300">
              <label className="text-black font-medium">Archive Old Reports</label>
              <input type="checkbox" className="w-4 h-4" />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">Archive Period (months)</label>
              <input type="number" defaultValue="6" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-white/60" />
            </div>
          </div>
        </div>

        <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-black">Export Settings</h2>
            <Toggle2 className="text-black" />
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">Default Export Format</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-white/60">
                <option>PDF</option>
                <option>Excel</option>
                <option>CSV</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">File Naming Convention</label>
              <input type="text" defaultValue="Report-YYYY-MM-DD" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-white/60" />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">Storage Location</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-white/60">
                <option>Local</option>
                <option>Cloud</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button className="px-6 py-2 bg-black text-slate-900 rounded-lg font-semibold hover:bg-gray-800">Save Settings</button>
        <button className="px-6 py-2 border border-gray-300 text-black rounded-lg font-semibold hover:bg-gray-100">Cancel</button>
      </div>
    </div>
  );
}
