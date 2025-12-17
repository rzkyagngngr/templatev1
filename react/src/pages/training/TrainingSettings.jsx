import React, { useState } from 'react';
import { Settings, Bell, Lock, Globe } from 'lucide-react';

export default function TrainingSettings() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailReminders: true,
    certificateNotifications: true,
    publicProfile: false,
  });

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const settingsList = [
    { key: 'notifications', label: 'Enable Notifications', icon: Bell },
    { key: 'emailReminders', label: 'Email Reminders', icon: Lock },
    { key: 'certificateNotifications', label: 'Certificate Notifications', icon: Bell },
    { key: 'publicProfile', label: 'Public Profile', icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Training Settings</h1>

        {/* Settings List */}
        <div className="space-y-4 mb-8">
          {settingsList.map((setting) => {
            const Icon = setting.icon;
            return (
              <div key={setting.key} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Icon className="w-6 h-6 text-black" />
                    <p className="font-bold text-black">{setting.label}</p>
                  </div>
                  <button
                    onClick={() => handleToggle(setting.key)}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition ${
                      settings[setting.key] ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition ${
                        settings[setting.key] ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Status */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <h2 className="text-xl font-bold text-black mb-4">Status</h2>
          <p className="text-black">CREATED</p>
        </div>
      </div>
    </div>
  );
}
