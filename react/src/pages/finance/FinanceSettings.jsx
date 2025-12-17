import React from 'react';
import { Settings, Save, ChevronRight } from 'lucide-react';

export default function FinanceSettings() {
  const settingGroups = [
    {
      title: 'Account Settings',
      settings: [
        { label: 'Company Name', value: 'Acme Corporation', type: 'text' },
        { label: 'Tax ID', value: '12-3456789', type: 'text' },
        { label: 'Fiscal Year End', value: 'December 31', type: 'select' },
        { label: 'Currency', value: 'USD ($)', type: 'select' },
      ]
    },
    {
      title: 'Reporting Settings',
      settings: [
        { label: 'Default Report Period', value: 'Monthly', type: 'select' },
        { label: 'Reporting Language', value: 'English', type: 'select' },
        { label: 'Include Forecasts', value: true, type: 'toggle' },
        { label: 'Audit Trail Enabled', value: true, type: 'toggle' },
      ]
    },
    {
      title: 'Integration Settings',
      settings: [
        { label: 'Bank Feed Integration', value: 'Connected', type: 'status' },
        { label: 'Accounting Software', value: 'QuickBooks Online', type: 'text' },
        { label: 'Sync Frequency', value: 'Daily', type: 'select' },
        { label: 'Auto-Reconciliation', value: false, type: 'toggle' },
      ]
    },
    {
      title: 'Notification Settings',
      settings: [
        { label: 'Invoice Reminders', value: true, type: 'toggle' },
        { label: 'Payment Due Alerts', value: true, type: 'toggle' },
        { label: 'Budget Alert Threshold', value: '85%', type: 'text' },
        { label: 'Email Notifications', value: true, type: 'toggle' },
      ]
    },
  ];

  const users = [
    { id: 1, name: 'John Admin', email: 'john@company.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Sarah Accountant', email: 'sarah@company.com', role: 'Accountant', status: 'Active' },
    { id: 3, name: 'Mike Viewer', email: 'mike@company.com', role: 'Viewer', status: 'Active' },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Finance Settings</h1>
          <p className="text-gray-600 mt-2">Configure financial system preferences</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-slate-900 rounded-lg hover:bg-blue-600 transition-all">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      <div className="space-y-6">
        {settingGroups.map((group, idx) => (
          <div key={idx} className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-600" />
              {group.title}
            </h2>
            <div className="space-y-4">
              {group.settings.map((setting, settingIdx) => (
                <div key={settingIdx} className="flex items-center justify-between p-4 bg-white/20 rounded border border-gray-200 hover:border-gray-300">
                  <label className="text-gray-900 font-medium">{setting.label}</label>
                  <div className="flex items-center gap-3">
                    {setting.type === 'text' && (
                      <input 
                        type="text" 
                        defaultValue={setting.value}
                        className="px-3 py-2 bg-white border border-gray-300 rounded text-gray-900 text-sm w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    )}
                    {setting.type === 'select' && (
                      <select 
                        defaultValue={setting.value}
                        className="px-3 py-2 bg-white border border-gray-300 rounded text-gray-900 text-sm w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>{setting.value}</option>
                      </select>
                    )}
                    {setting.type === 'toggle' && (
                      <div className="flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          defaultChecked={setting.value}
                          className="w-5 h-5 text-blue-600 rounded cursor-pointer"
                        />
                        <span className="text-gray-700 text-sm">{setting.value ? 'Enabled' : 'Disabled'}</span>
                      </div>
                    )}
                    {setting.type === 'status' && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                        {setting.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">User Management</h2>
          <div className="space-y-3">
            {users.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 bg-white/20 rounded border border-gray-200 hover:border-gray-300">
                <div>
                  <p className="text-gray-900 font-semibold">{user.name}</p>
                  <p className="text-gray-600 text-sm">{user.email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-xs font-semibold">
                    {user.role}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded text-xs font-semibold">
                    {user.status}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
            <button className="w-full py-2 mt-2 border-2 border-dashed border-gray-300 rounded text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-all font-medium">
              + Add User
            </button>
          </div>
        </div>

        <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Security & Privacy</h2>
          <div className="space-y-3">
            <div className="p-4 bg-white/20 rounded border border-gray-200">
              <p className="text-gray-900 font-semibold mb-2">Two-Factor Authentication</p>
              <p className="text-gray-600 text-sm mb-3">Add extra security to your account</p>
              <button className="px-3 py-1 bg-blue-500 text-slate-900 rounded text-sm hover:bg-blue-600 transition-all">
                Enable
              </button>
            </div>
            <div className="p-4 bg-white/20 rounded border border-gray-200">
              <p className="text-gray-900 font-semibold mb-2">Data Encryption</p>
              <p className="text-gray-600 text-sm mb-3">All financial data is encrypted at rest and in transit</p>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded text-xs font-semibold">
                Enabled
              </span>
            </div>
            <div className="p-4 bg-white/20 rounded border border-gray-200">
              <p className="text-gray-900 font-semibold mb-2">Password Policy</p>
              <p className="text-gray-600 text-sm mb-3">Enforce strong password requirements</p>
              <button className="px-3 py-1 bg-gray-500 text-slate-900 rounded text-sm hover:bg-gray-600 transition-all">
                Configure
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/40 backdrop-blur border border-gray-300 rounded-lg p-6 shadow-sm mt-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">System Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white/20 rounded">
            <p className="text-gray-600 text-sm font-medium">System Version</p>
            <p className="text-gray-900 font-bold mt-1">3.2.1</p>
          </div>
          <div className="p-4 bg-white/20 rounded">
            <p className="text-gray-600 text-sm font-medium">Last Backup</p>
            <p className="text-gray-900 font-bold mt-1">Dec 15, 2024 11:30 PM</p>
          </div>
          <div className="p-4 bg-white/20 rounded">
            <p className="text-gray-600 text-sm font-medium">Database Size</p>
            <p className="text-gray-900 font-bold mt-1">2.4 GB</p>
          </div>
          <div className="p-4 bg-white/20 rounded">
            <p className="text-gray-600 text-sm font-medium">Data Retention</p>
            <p className="text-gray-900 font-bold mt-1">7 Years (Compliant)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
