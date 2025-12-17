import React from 'react';

export default function CryptoSettings() {
  const [settings, setSettings] = React.useState({
    notifications: true,
    twoFA: true,
    emailAlerts: false,
    darkMode: false
  });

  return (
    <div className="w-full space-y-6 p-6">
      <div>
        <h4 className="text-2xl font-bold text-black">Settings</h4>
        <div className="text-sm text-black mt-2">Glacia / Crypto / Settings</div>
      </div>

      <div className="glass-card p-6 border border-gray-300 max-w-2xl">
        <h5 className="text-lg font-semibold text-black mb-6">Notification Settings</h5>
        <div className="space-y-4">
          {[
            { key: 'notifications', label: 'Enable Notifications', desc: 'Receive real-time crypto alerts' },
            { key: 'twoFA', label: 'Two-Factor Authentication', desc: 'Enhance account security' },
            { key: 'emailAlerts', label: 'Email Alerts', desc: 'Get updates via email' },
            { key: 'darkMode', label: 'Dark Mode', desc: 'Use dark theme' }
          ].map((setting) => (
            <div key={setting.key} className="flex justify-between items-center border-b border-gray-200 pb-4">
              <div>
                <p className="font-semibold text-black">{setting.label}</p>
                <p className="text-sm text-gray-600">{setting.desc}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings[setting.key]}
                  onChange={(e) => setSettings({ ...settings, [setting.key]: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
