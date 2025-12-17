import React, { useState } from 'react';
import { Settings, Bell, Lock, Eye } from 'lucide-react';

export default function QASettings() {
  const [settings] = useState({
    notifications: true,
    emailAlerts: true,
    autoAssign: false,
    slackIntegration: true
  });

  const [settingsGroups] = useState([
    {
      category: 'Notifications',
      icon: Bell,
      items: [
        { name: 'Email Alerts', description: 'Receive email notifications for test failures', enabled: true },
        { name: 'Slack Notifications', description: 'Send alerts to Slack channel', enabled: true },
        { name: 'SMS Alerts', description: 'Critical issues via SMS', enabled: false }
      ]
    },
    {
      category: 'Automation',
      icon: Settings,
      items: [
        { name: 'Auto-assign Defects', description: 'Automatically assign defects to team members', enabled: false },
        { name: 'Schedule Tests', description: 'Enable scheduled test runs', enabled: true },
        { name: 'Parallel Execution', description: 'Run tests in parallel', enabled: true }
      ]
    },
    {
      category: 'Security',
      icon: Lock,
      items: [
        { name: 'Two-Factor Auth', description: 'Enable 2FA for account access', enabled: true },
        { name: 'API Key Rotation', description: 'Auto-rotate API keys monthly', enabled: false },
        { name: 'Encrypted Reports', description: 'Encrypt sensitive test reports', enabled: true }
      ]
    },
    {
      category: 'Visibility',
      icon: Eye,
      items: [
        { name: 'Public Dashboard', description: 'Make dashboard accessible to public', enabled: false },
        { name: 'Share Reports', description: 'Allow sharing of test reports', enabled: true },
        { name: 'Team Access', description: 'Enable team-wide access to metrics', enabled: true }
      ]
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">QA Settings</h1>

        {/* Settings Categories */}
        <div className="space-y-6">
          {settingsGroups.map((group, groupIdx) => {
            const Icon = group.icon;
            return (
              <div key={groupIdx} className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-300">
                  <Icon className="w-6 h-6 text-blue-600" />
                  <h2 className="text-lg font-bold text-black">{group.category}</h2>
                </div>

                <div className="space-y-4">
                  {group.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center justify-between p-4 bg-white/30 border border-gray-300 rounded-lg hover:bg-white/50 transition">
                      <div className="flex-1">
                        <p className="font-semibold text-black">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <label className="flex items-center cursor-pointer">
                        <div className="relative">
                          <input 
                            type="checkbox" 
                            className="sr-only" 
                            checked={item.enabled}
                            readOnly
                          />
                          <div className={`w-10 h-6 rounded-full transition ${item.enabled ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition ${item.enabled ? 'translate-x-4' : ''}`}></div>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-slate-900 font-semibold rounded-lg transition">
            Save Changes
          </button>
          <button className="px-6 py-2 bg-white/50 border border-gray-300 text-black font-semibold rounded-lg hover:bg-white/70 transition">
            Reset to Defaults
          </button>
        </div>
      </div>
    </div>
  );
}
