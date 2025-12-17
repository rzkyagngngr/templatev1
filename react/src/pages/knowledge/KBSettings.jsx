import React from 'react';
import { Settings, Bell, Lock, Eye } from 'lucide-react';

export default function KBSettings() {
  const settings = [
    { id: 1, name: 'Email Notifications', description: 'Receive notifications for article updates', enabled: true, icon: Bell },
    { id: 2, name: 'Auto-publish Approved Articles', description: 'Automatically publish approved articles', enabled: true, icon: Settings },
    { id: 3, name: 'Require Approval', description: 'Require approval before publishing', enabled: true, icon: Lock },
    { id: 4, name: 'Public Comments', description: 'Allow public comments on articles', enabled: false, icon: Eye },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Settings - CREATED</h1>

        <div className="space-y-4 max-w-2xl">
          {settings.map((setting) => {
            const Icon = setting.icon;
            return (
              <div key={setting.id} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Icon className="w-6 h-6 text-black" />
                  <div>
                    <h3 className="font-semibold text-black">{setting.name}</h3>
                    <p className="text-sm text-black">{setting.description}</p>
                  </div>
                </div>
                <div className={`w-12 h-6 rounded-full ${setting.enabled ? 'bg-green-500' : 'bg-gray-300'} cursor-pointer`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
