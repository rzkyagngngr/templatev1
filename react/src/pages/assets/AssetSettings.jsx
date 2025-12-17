import React, { useState } from 'react';
import { Settings, Save, Sliders } from 'lucide-react';

export default function AssetSettings() {
  const [settings, setSettings] = useState({
    depreciationMethod: 'Straight Line',
    depreciationRate: '20',
    assetLifeSpan: '5',
    maintenanceAlertDays: '30',
    trackingInterval: '5',
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Asset Settings</h1>

        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-8 space-y-6">
          <div>
            <label className="block text-black font-semibold mb-2">Depreciation Method</label>
            <select className="w-full backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg px-4 py-2 text-black">
              <option>Straight Line</option>
              <option>Declining Balance</option>
              <option>Sum of Years Digits</option>
            </select>
          </div>

          <div>
            <label className="block text-black font-semibold mb-2">Annual Depreciation Rate (%)</label>
            <input type="number" value={settings.depreciationRate} className="w-full backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg px-4 py-2 text-black" />
          </div>

          <div>
            <label className="block text-black font-semibold mb-2">Asset Life Span (Years)</label>
            <input type="number" value={settings.assetLifeSpan} className="w-full backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg px-4 py-2 text-black" />
          </div>

          <div>
            <label className="block text-black font-semibold mb-2">Maintenance Alert (Days before Due)</label>
            <input type="number" value={settings.maintenanceAlertDays} className="w-full backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg px-4 py-2 text-black" />
          </div>

          <div>
            <label className="block text-black font-semibold mb-2">Tracking Update Interval (Minutes)</label>
            <input type="number" value={settings.trackingInterval} className="w-full backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg px-4 py-2 text-black" />
          </div>

          <button className="w-full backdrop-blur-md bg-blue-100 border border-gray-300 rounded-lg px-4 py-2 text-black font-semibold flex items-center justify-center gap-2 hover:bg-blue-200">
            <Save size={18} /> Save Settings
          </button>
        </div>

        <div className="mt-8 backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <span className="inline-block bg-green-500 text-slate-900 text-xs px-2 py-1 rounded">CREATED</span>
        </div>
      </div>
    </div>
  );
}
