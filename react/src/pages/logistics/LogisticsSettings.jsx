import React, { useState } from 'react';
import { Settings, Bell, Lock, Database, Save } from 'lucide-react';

export default function LogisticsSettings() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: true,
    autoOptimize: false,
    dataBackup: true,
  });

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const settingsSections = [
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        { key: 'notifications', label: 'Enable Notifications', description: 'Receive real-time logistics updates' },
        { key: 'emailAlerts', label: 'Email Alerts', description: 'Get email notifications for critical events' },
      ],
    },
    {
      title: 'Operations',
      icon: Settings,
      items: [
        { key: 'autoOptimize', label: 'Auto-optimize Routes', description: 'Automatically optimize delivery routes' },
        { key: 'dataBackup', label: 'Automatic Backups', description: 'Backup logistics data automatically' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">Logistics Settings</h1>
          <p className="text-black text-opacity-70 mt-2">CREATED</p>
        </div>

        {/* Settings Sections */}
        {settingsSections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <div key={idx} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <Icon className="w-6 h-6 text-black" />
                <h2 className="text-xl font-bold text-black">{section.title}</h2>
              </div>

              <div className="space-y-4">
                {section.items.map((item) => (
                  <div key={item.key} className="flex items-center justify-between p-4 border border-gray-200 rounded">
                    <div>
                      <p className="font-semibold text-black">{item.label}</p>
                      <p className="text-black text-opacity-70 text-sm">{item.description}</p>
                    </div>
                    <button
                      onClick={() => handleToggle(item.key)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                        settings[item.key] ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                          settings[item.key] ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Save Button */}
        <div className="flex justify-end gap-4">
          <button className="px-6 py-2 border border-gray-300 rounded-lg text-black font-medium hover:bg-gray-100">
            Cancel
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-slate-900 rounded-lg font-medium hover:bg-blue-700">
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
