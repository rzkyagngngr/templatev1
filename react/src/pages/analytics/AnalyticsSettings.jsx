import React from 'react';
import { Settings, Shield, Database } from 'lucide-react';

export default function AnalyticsSettings() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-6">
        <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
          CREATED
        </div>
        <h1 className="text-4xl font-bold text-black mt-4">Analytics Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-black">Tracking Settings</h2>
            <Shield className="text-black" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-gray-300">
              <label className="text-black font-medium">Track Page Views</label>
              <input type="checkbox" className="w-4 h-4" defaultChecked />
            </div>
            <div className="flex items-center justify-between pb-4 border-b border-gray-300">
              <label className="text-black font-medium">Track User Events</label>
              <input type="checkbox" className="w-4 h-4" defaultChecked />
            </div>
            <div className="flex items-center justify-between pb-4 border-b border-gray-300">
              <label className="text-black font-medium">Track Conversions</label>
              <input type="checkbox" className="w-4 h-4" defaultChecked />
            </div>
            <div className="flex items-center justify-between pb-4 border-b border-gray-300">
              <label className="text-black font-medium">Anonymous Tracking</label>
              <input type="checkbox" className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-black">Data Settings</h2>
            <Database className="text-black" />
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">Data Retention (days)</label>
              <input type="number" defaultValue="90" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-white/60" />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">Sampling Rate (%)</label>
              <input type="number" defaultValue="100" min="1" max="100" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-white/60" />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">Time Zone</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-white/60">
                <option>UTC</option>
                <option>EST</option>
                <option>PST</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-black">Integration Settings</h2>
          <Settings className="text-black" />
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-black">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Integration</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Last Sync</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2">Google Analytics</td>
                <td className="px-4 py-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">Connected</span></td>
                <td className="px-4 py-2">Dec 16, 2024 02:30 PM</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2">Segment</td>
                <td className="px-4 py-2"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Pending</span></td>
                <td className="px-4 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="px-6 py-2 bg-black text-slate-900 rounded-lg font-semibold hover:bg-gray-800">Save Settings</button>
        <button className="px-6 py-2 border border-gray-300 text-black rounded-lg font-semibold hover:bg-gray-100">Cancel</button>
      </div>
    </div>
  );
}
