import React, { useState } from 'react';
import { Settings, Bell, Lock, Eye } from 'lucide-react';

export default function TravelSettings() {
  const [preferences, setPreferences] = useState({
    notifications: true,
    emailDigest: true,
    budgetAlerts: true,
    policyReminders: true,
    twoFactor: false,
  });

  const settings = [
    { id: 1, label: 'Email Notifications', icon: Bell, enabled: true },
    { id: 2, label: 'Weekly Digest', icon: Eye, enabled: true },
    { id: 3, label: 'Budget Alerts', icon: Bell, enabled: true },
    { id: 4, label: 'Policy Reminders', icon: Bell, enabled: false },
    { id: 5, label: 'Two-Factor Authentication', icon: Lock, enabled: false },
  ];

  const policies = [
    { label: 'Default Currency', value: 'USD' },
    { label: 'Cost Center', value: 'CORP-001' },
    { label: 'Approval Level', value: 'Manager' },
    { label: 'Travel Booking Tool', value: 'Concur' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Travel Settings</h1>

        {/* Preferences */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
            <Bell size={24} />
            Notification Preferences
          </h2>
          <div className="space-y-4">
            {settings.map((setting) => {
              const Icon = setting.icon;
              return (
                <div key={setting.id} className="flex items-center justify-between p-4 border border-gray-300 rounded-lg hover:bg-white/50 transition">
                  <div className="flex items-center gap-3">
                    <Icon size={20} className="text-gray-700" />
                    <span className="font-semibold text-black">{setting.label}</span>
                  </div>
                  <div className="relative inline-flex w-12 h-6 bg-gray-200 rounded-full cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={setting.enabled}
                      className="sr-only"
                    />
                    <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${setting.enabled ? 'translate-x-6 bg-green-500' : ''}`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Preferences */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
            <Settings size={24} />
            Default Settings
          </h2>
          <div className="space-y-4">
            {policies.map((policy, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                <span className="font-semibold text-black">{policy.label}</span>
                <span className="px-4 py-2 bg-gray-100 border border-gray-300 rounded text-black">{policy.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Account */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <h2 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
            <Lock size={24} />
            Account Security
          </h2>
          <div className="space-y-3">
            <button className="w-full px-4 py-2 bg-blue-100 text-blue-700 border border-blue-300 rounded-lg font-semibold hover:bg-blue-200 transition">
              Change Password
            </button>
            <button className="w-full px-4 py-2 bg-purple-100 text-purple-700 border border-purple-300 rounded-lg font-semibold hover:bg-purple-200 transition">
              Manage API Keys
            </button>
            <button className="w-full px-4 py-2 bg-red-100 text-red-700 border border-red-300 rounded-lg font-semibold hover:bg-red-200 transition">
              Sign Out All Devices
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
