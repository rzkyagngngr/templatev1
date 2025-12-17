import React, { useState } from 'react';
import { Settings, Bell, Lock, Eye, Globe, Volume2, Mail, Save } from 'lucide-react';

export default function Settings() {
  const [settings, setSettings] = useState({
    profileVisible: true,
    emailNotifications: true,
    pushNotifications: false,
    twoFactorAuth: true,
    darkMode: false,
    soundEnabled: true,
    language: 'English',
    timezone: 'UTC-5'
  });

  const [activeTab, setActiveTab] = useState('account');
  const [saved, setSaved] = useState(false);

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    setSaved(false);
  };

  const handleSelectChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const tabs = [
    { id: 'account', label: 'Account', icon: Settings },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'privacy', label: 'Privacy', icon: Eye },
    { id: 'appearance', label: 'Appearance', icon: Globe }
  ];

  const SettingItem = ({ label, description, value, onChange, type = 'toggle' }) => (
    <div className="flex items-center justify-between py-4 px-4 hover:bg-gray-50 transition border-b border-gray-300">
      <div>
        <p className="text-black font-medium">{label}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      {type === 'toggle' && (
        <button
          onClick={onChange}
          className={`relative w-12 h-6 rounded-full transition ${
            value ? 'bg-blue-600' : 'bg-gray-300'
          }`}
        >
          <div
            className={`absolute w-5 h-5 bg-white rounded-full transition-transform top-0.5 ${
              value ? 'translate-x-6' : 'translate-x-0.5'
            }`}
          />
        </button>
      )}
    </div>
  );

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div>
        <h4 className="text-2xl font-bold text-black">Settings</h4>
        <div className="text-sm text-gray-600 mt-2">Glacia / Pages / Settings</div>
      </div>

      {/* Success Message */}
      {saved && (
        <div className="glass-card border border-green-300 bg-green-50 p-4 rounded-lg">
          <p className="text-green-700 font-medium flex items-center gap-2">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            Settings saved successfully!
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="glass-card border border-gray-300 p-4 sticky top-6">
            <nav className="space-y-2">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                      activeTab === tab.id
                        ? 'bg-blue-600 ='
                        : 'text-black hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="glass-card border border-gray-300 p-6">
            {/* Account Settings */}
            {activeTab === 'account' && (
              <div className="space-y-4">
                <h5 className="text-lg font-semibold text-black mb-6">Account Settings</h5>
                
                <div className="p-4 border-b border-gray-300">
                  <label className="text-black font-medium block mb-2">Email Address</label>
                  <input type="email" value="user@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black" readOnly />
                </div>

                <div className="p-4 border-b border-gray-300">
                  <label className="text-black font-medium block mb-2">Full Name</label>
                  <input type="text" placeholder="Your Name" defaultValue="John Doe" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" />
                </div>

                <div className="p-4 border-b border-gray-300">
                  <label className="text-black font-medium block mb-2">Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 123-4567" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" />
                </div>

                <SettingItem
                  label="Make Profile Public"
                  description="Allow others to view your profile"
                  value={settings.profileVisible}
                  onChange={() => handleToggle('profileVisible')}
                />
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div className="space-y-4">
                <h5 className="text-lg font-semibold text-black mb-6">Notification Settings</h5>
                
                <SettingItem
                  label="Email Notifications"
                  description="Receive updates via email"
                  value={settings.emailNotifications}
                  onChange={() => handleToggle('emailNotifications')}
                />

                <SettingItem
                  label="Push Notifications"
                  description="Receive browser push notifications"
                  value={settings.pushNotifications}
                  onChange={() => handleToggle('pushNotifications')}
                />

                <SettingItem
                  label="Sound Notifications"
                  description="Play sound for alerts"
                  value={settings.soundEnabled}
                  onChange={() => handleToggle('soundEnabled')}
                />

                <div className="p-4 border-b border-gray-300">
                  <label className="text-black font-medium block mb-3">Email Digest Frequency</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
                    <option>Instant</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="space-y-4">
                <h5 className="text-lg font-semibold text-black mb-6">Security Settings</h5>
                
                <SettingItem
                  label="Two-Factor Authentication"
                  description="Enhance your account security"
                  value={settings.twoFactorAuth}
                  onChange={() => handleToggle('twoFactorAuth')}
                />

                <div className="p-4 border-b border-gray-300">
                  <label className="text-black font-medium block mb-3">Change Password</label>
                  <button className="px-4 py-2 border border-gray-300 text-black rounded-lg hover:bg-gray-50 transition font-medium">
                    Update Password
                  </button>
                </div>

                <div className="p-4 border-b border-gray-300">
                  <label className="text-black font-medium block mb-2">Login History</label>
                  <p className="text-sm text-gray-600 mb-3">Last login: December 16, 2024 at 2:30 PM</p>
                  <button className="text-blue-600 hover:underline text-sm font-medium">View all login activity</button>
                </div>

                <div className="p-4">
                  <label className="text-black font-medium block mb-2">Active Sessions</label>
                  <p className="text-sm text-gray-600 mb-3">You have 2 active sessions</p>
                  <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition font-medium">
                    Sign Out All Devices
                  </button>
                </div>
              </div>
            )}

            {/* Privacy Settings */}
            {activeTab === 'privacy' && (
              <div className="space-y-4">
                <h5 className="text-lg font-semibold text-black mb-6">Privacy Settings</h5>
                
                <SettingItem
                  label="Profile Visibility"
                  description="Control who can see your profile"
                  value={settings.profileVisible}
                  onChange={() => handleToggle('profileVisible')}
                />

                <div className="p-4 border-b border-gray-300">
                  <label className="text-black font-medium block mb-3">Who can contact you?</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
                    <option>Everyone</option>
                    <option>Contacts only</option>
                    <option>Nobody</option>
                  </select>
                </div>

                <div className="p-4 border-b border-gray-300">
                  <label className="text-black font-medium block mb-3">Activity Status</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
                    <option>Visible</option>
                    <option>Hidden</option>
                  </select>
                </div>

                <div className="p-4">
                  <label className="text-black font-medium block mb-2">Download Your Data</label>
                  <p className="text-sm text-gray-600 mb-3">Get a copy of your personal data</p>
                  <button className="px-4 py-2 border border-gray-300 text-black rounded-lg hover:bg-gray-50 transition font-medium">
                    Request Data Export
                  </button>
                </div>
              </div>
            )}

            {/* Appearance Settings */}
            {activeTab === 'appearance' && (
              <div className="space-y-4">
                <h5 className="text-lg font-semibold text-black mb-6">Appearance Settings</h5>
                
                <SettingItem
                  label="Dark Mode"
                  description="Switch to dark theme"
                  value={settings.darkMode}
                  onChange={() => handleToggle('darkMode')}
                />

                <div className="p-4 border-b border-gray-300">
                  <label className="text-black font-medium block mb-3">Language</label>
                  <select value={settings.language} onChange={(e) => handleSelectChange('language', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                    <option>Chinese</option>
                  </select>
                </div>

                <div className="p-4 border-b border-gray-300">
                  <label className="text-black font-medium block mb-3">Timezone</label>
                  <select value={settings.timezone} onChange={(e) => handleSelectChange('timezone', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
                    <option>UTC-8</option>
                    <option>UTC-5</option>
                    <option>UTC+0</option>
                    <option>UTC+1</option>
                    <option>UTC+8</option>
                  </select>
                </div>

                <div className="p-4">
                  <label className="text-black font-medium block mb-3">Date Format</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
                    <option>MM/DD/YYYY</option>
                    <option>DD/MM/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Save Button */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              <Save size={18} /> Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="glass-card border border-red-300 bg-red-50 p-6">
        <h5 className="text-lg font-semibold text-red-700 mb-4">Danger Zone</h5>
        <p className="text-black mb-4">These actions are permanent and cannot be undone.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="px-6 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-100 transition font-medium">
            Deactivate Account
          </button>
          <button className="px-6 py-2 border border-red-600 bg-red-600 text-slate-900 rounded-lg hover:bg-red-700 transition font-medium">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
