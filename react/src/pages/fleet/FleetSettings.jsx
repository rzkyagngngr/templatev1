import React, { useState } from 'react';
import { Settings, Bell, Lock, User } from 'lucide-react';

export default function FleetSettings() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: true,
    maintenanceReminders: true,
    autoReports: false,
    twoFactor: true,
    dataBackup: true,
  });

  const handleToggle = (key) => {
    setSettings({
      ...settings,
      [key]: !settings[key],
    });
  };

  const settingSections = [
    {
      title: 'Notifications',
      icon: Bell,
      settings: [
        { key: 'notifications', label: 'Enable Notifications', description: 'Receive alerts for fleet events' },
        { key: 'emailAlerts', label: 'Email Alerts', description: 'Get important updates via email' },
        { key: 'maintenanceReminders', label: 'Maintenance Reminders', description: 'Notify about scheduled maintenance' },
      ],
    },
    {
      title: 'Reports',
      icon: Settings,
      settings: [
        { key: 'autoReports', label: 'Auto-Generate Reports', description: 'Automatically generate monthly reports' },
      ],
    },
    {
      title: 'Security',
      icon: Lock,
      settings: [
        { key: 'twoFactor', label: 'Two-Factor Authentication', description: 'Add extra security to your account' },
        { key: 'dataBackup', label: 'Automatic Backups', description: 'Backup data regularly' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Fleet Settings</h1>

        {/* Settings Sections */}
        <div className="space-y-6">
          {settingSections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div key={idx} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Icon size={24} className="text-black" />
                  <h2 className="text-xl font-bold text-black">{section.title}</h2>
                </div>
                <div className="space-y-4">
                  {section.settings.map((setting) => (
                    <div key={setting.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-300">
                      <div>
                        <p className="text-black font-semibold">{setting.label}</p>
                        <p className="text-gray-600 text-sm">{setting.description}</p>
                      </div>
                      <button
                        onClick={() => handleToggle(setting.key)}
                        className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                          settings[setting.key] ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                            settings[setting.key] ? 'translate-x-7' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Account Settings */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6 mt-6">
          <div className="flex items-center gap-3 mb-6">
            <User size={24} className="text-black" />
            <h2 className="text-xl font-bold text-black">Account Settings</h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-300">
              <p className="text-black font-semibold">Fleet Administrator</p>
              <p className="text-gray-600 text-sm">admin@fleetmanagement.com</p>
              <button className="mt-2 text-blue-600 hover:text-blue-800 font-semibold">Edit Profile</button>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-300">
              <p className="text-black font-semibold">Password</p>
              <p className="text-gray-600 text-sm">Last changed 90 days ago</p>
              <button className="mt-2 text-blue-600 hover:text-blue-800 font-semibold">Change Password</button>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex gap-4 mt-8">
          <button className="bg-blue-600 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">
            Save Changes
          </button>
          <button className="bg-gray-300 text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-400">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
