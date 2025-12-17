import React, { useState } from 'react';
import { Settings, Bell, Lock, User } from 'lucide-react';

export default function SalesSettings() {
  const [activeTab, setActiveTab] = useState('general');

  const settingsSections = {
    general: [
      { label: 'Company Name', value: 'Sales Department', type: 'text' },
      { label: 'Department Code', value: 'SALES-001', type: 'text' },
      { label: 'Default Currency', value: 'USD', type: 'select' },
      { label: 'Fiscal Year Start', value: 'January', type: 'select' },
    ],
    notifications: [
      { label: 'Email Notifications', enabled: true },
      { label: 'Order Alerts', enabled: true },
      { label: 'Commission Updates', enabled: true },
      { label: 'Target Notifications', enabled: false },
      { label: 'Weekly Reports', enabled: true },
      { label: 'Monthly Summary', enabled: false },
    ],
    commission: [
      { label: 'Commission Structure', value: 'Tiered', type: 'select' },
      { label: 'Base Commission Rate', value: '5%', type: 'text' },
      { label: 'Commission Frequency', value: 'Monthly', type: 'select' },
      { label: 'Payment Terms', value: '15 days after month-end', type: 'select' },
    ],
    security: [
      { label: 'Two-Factor Authentication', enabled: true },
      { label: 'Session Timeout (minutes)', value: '30', type: 'text' },
      { label: 'IP Whitelist', enabled: false },
      { label: 'Password Expiration', value: '90 days', type: 'select' },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Sales Settings</h1>

        {/* Tabs */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg mb-6">
          <div className="flex border-b border-gray-300">
            <button
              onClick={() => setActiveTab('general')}
              className={`flex-1 px-6 py-4 font-semibold text-center transition ${
                activeTab === 'general'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-black hover:text-blue-600'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Settings size={18} />
                General
              </div>
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`flex-1 px-6 py-4 font-semibold text-center transition ${
                activeTab === 'notifications'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-black hover:text-blue-600'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Bell size={18} />
                Notifications
              </div>
            </button>
            <button
              onClick={() => setActiveTab('commission')}
              className={`flex-1 px-6 py-4 font-semibold text-center transition ${
                activeTab === 'commission'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-black hover:text-blue-600'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <User size={18} />
                Commission
              </div>
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`flex-1 px-6 py-4 font-semibold text-center transition ${
                activeTab === 'security'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-black hover:text-blue-600'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Lock size={18} />
                Security
              </div>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'general' && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-black">General Settings</h3>
                {settingsSections.general.map((setting, idx) => (
                  <div key={idx} className="pb-6 border-b border-gray-200 last:border-b-0">
                    <label className="block text-sm font-semibold text-black mb-2">{setting.label}</label>
                    {setting.type === 'text' ? (
                      <input
                        type="text"
                        value={setting.value}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/50 text-black focus:outline-none focus:border-blue-500"
                      />
                    ) : (
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/50 text-black focus:outline-none focus:border-blue-500">
                        <option>{setting.value}</option>
                      </select>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-black mb-4">Notification Preferences</h3>
                {settingsSections.notifications.map((notif, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-white/50 rounded-lg border border-gray-200">
                    <p className="text-black font-semibold">{notif.label}</p>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked={notif.enabled}
                        className="w-5 h-5 rounded border-gray-300"
                      />
                    </label>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'commission' && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-black">Commission Settings</h3>
                {settingsSections.commission.map((setting, idx) => (
                  <div key={idx} className="pb-6 border-b border-gray-200 last:border-b-0">
                    <label className="block text-sm font-semibold text-black mb-2">{setting.label}</label>
                    {setting.type === 'text' ? (
                      <input
                        type="text"
                        value={setting.value}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/50 text-black focus:outline-none focus:border-blue-500"
                      />
                    ) : (
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/50 text-black focus:outline-none focus:border-blue-500">
                        <option>{setting.value}</option>
                      </select>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-black mb-4">Security Settings</h3>
                {settingsSections.security.map((setting, idx) => (
                  <div key={idx} className="pb-4 border-b border-gray-200 last:border-b-0">
                    {typeof setting.enabled !== 'undefined' ? (
                      <div className="flex items-center justify-between p-4 bg-white/50 rounded-lg border border-gray-200">
                        <p className="text-black font-semibold">{setting.label}</p>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultChecked={setting.enabled}
                            className="w-5 h-5 rounded border-gray-300"
                          />
                        </label>
                      </div>
                    ) : (
                      <div>
                        <label className="block text-sm font-semibold text-black mb-2">{setting.label}</label>
                        <input
                          type="text"
                          value={setting.value}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/50 text-black focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-end">
          <button className="px-6 py-2 border border-gray-300 rounded-lg text-black hover:bg-white/70 transition bg-white/50">
            Cancel
          </button>
          <button className="px-6 py-2 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 transition font-semibold">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
