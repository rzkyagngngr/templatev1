import React, { useState } from 'react';

const HorizontalStarter = () => {
  const [settings, setSettings] = useState({
    autoUpdates: false,
    locationPermission: true,
    showOfflineContacts: false,
    showOnline: false,
    notificationSound: true,
  });

  const handleSettingChange = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const statsCards = [
    { title: 'Total Users', value: '12,450', icon: '👥', change: '+5.2%' },
    { title: 'Revenue', value: '$45,230', icon: '💰', change: '+12.8%' },
    { title: 'Orders', value: '3,245', icon: '📦', change: '+3.1%' },
    { title: 'Tasks', value: '156', icon: '✓', change: '+8.9%' },
  ];

  const recentActivity = [
    { action: 'New user registration', time: '2 min ago', icon: '✨' },
    { action: 'Order #2341 completed', time: '15 min ago', icon: '✓' },
    { action: 'Payment received', time: '1 hour ago', icon: '💳' },
    { action: 'System backup finished', time: '3 hours ago', icon: '💾' },
  ];

  return (
    <div className="page-wrapper">
      <div className="page-content-tab">
        <div className="container-fluid">
          {/* Page Title */}
          <div className="row mb-6">
            <div className="col-sm-12">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold text-black mb-2">Starter Dashboard</h2>
                  <div className="text-sm text-gray-600">
                    <span className="mx-1">Dastone</span>
                    <span className="mx-1">/</span>
                    <span className="mx-1">Pages</span>
                    <span className="mx-1">/</span>
                    <span className="text-black font-semibold">Starter</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-black hover:bg-white/50 transition-all text-sm">
                    📅 Today
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-black hover:bg-white/50 transition-all text-sm">
                    ⬇️ Download
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {statsCards.map((card, idx) => (
              <div
                key={idx}
                className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-black text-sm font-semibold mb-2">{card.title}</p>
                    <h3 className="text-2xl font-bold text-black mb-2">{card.value}</h3>
                    <p className="text-xs text-green-600 font-medium">{card.change}</p>
                  </div>
                  <div className="text-3xl">{card.icon}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-black mb-6">Recent Activity</h4>
                <div className="space-y-4">
                  {recentActivity.map((activity, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-white/30 rounded-lg border border-gray-300/50">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl">{activity.icon}</div>
                        <div>
                          <p className="text-black font-medium">{activity.action}</p>
                          <p className="text-gray-600 text-sm">{activity.time}</p>
                        </div>
                      </div>
                      <div className="text-gray-400">→</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Settings Panel */}
            <div>
              <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-black mb-6">Settings</h4>

                {/* Account Settings */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-black mb-3">Account Settings</h5>
                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.autoUpdates}
                        onChange={() => handleSettingChange('autoUpdates')}
                        className="w-4 h-4 rounded border-gray-300 text-blue-500 cursor-pointer"
                      />
                      <span className="ml-3 text-sm text-black">Auto updates</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.locationPermission}
                        onChange={() => handleSettingChange('locationPermission')}
                        className="w-4 h-4 rounded border-gray-300 text-blue-500 cursor-pointer"
                      />
                      <span className="ml-3 text-sm text-black">Location Permission</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.showOfflineContacts}
                        onChange={() => handleSettingChange('showOfflineContacts')}
                        className="w-4 h-4 rounded border-gray-300 text-blue-500 cursor-pointer"
                      />
                      <span className="ml-3 text-sm text-black">Show offline Contacts</span>
                    </label>
                  </div>
                </div>

                {/* General Settings */}
                <div className="pt-6 border-t border-gray-300">
                  <h5 className="text-sm font-semibold text-black mb-3">General Settings</h5>
                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.showOnline}
                        onChange={() => handleSettingChange('showOnline')}
                        className="w-4 h-4 rounded border-gray-300 text-blue-500 cursor-pointer"
                      />
                      <span className="ml-3 text-sm text-black">Show me Online</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.notificationSound}
                        onChange={() => handleSettingChange('notificationSound')}
                        className="w-4 h-4 rounded border-gray-300 text-blue-500 cursor-pointer"
                      />
                      <span className="ml-3 text-sm text-black">Notification Sound</span>
                    </label>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 space-y-2">
                  <button className="w-full px-4 py-2 bg-blue-500 = rounded-lg hover:bg-blue-600 transition-all font-medium text-sm">
                    Save Settings
                  </button>
                  <button className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg hover:bg-white/50 transition-all font-medium text-sm">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-black mb-4">Performance</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-black">Page Load Speed</span>
                  <span className="text-black font-semibold">2.3s</span>
                </div>
                <div className="w-full bg-gray-200/50 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="flex justify-between text-sm mt-4">
                  <span className="text-black">Uptime</span>
                  <span className="text-black font-semibold">99.8%</span>
                </div>
                <div className="w-full bg-gray-200/50 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '99' }}></div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-black mb-4">Quick Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-black">Active Users</span>
                  <span className="text-black font-bold">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">Conversion Rate</span>
                  <span className="text-black font-bold">3.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">Avg. Session Time</span>
                  <span className="text-black font-bold">4m 32s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalStarter;
