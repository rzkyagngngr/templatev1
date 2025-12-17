import React, { useState } from 'react';
import { Save, Bell, Lock, Eye } from 'lucide-react';

const ComplianceSettings = () => {
  const [status] = useState('CREATED');
  const [settings, setSettings] = useState({
    enableNotifications: true,
    autoAudit: false,
    dataRetention: '7',
    auditFrequency: 'quarterly'
  });

  const handleChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Compliance Settings</h1>
        <p className="text-gray-600">Status: <span className="font-semibold text-green-600">{status}</span></p>
      </div>

      <div className="space-y-6">
        {/* Notifications Settings */}
        <div className="glass-card border border-gray-300 rounded-lg p-6 backdrop-blur-md bg-white bg-opacity-60">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-bold text-black">Notification Settings</h2>
          </div>
          
          <table className="w-full">
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-6 text-black font-medium">Enable Compliance Alerts</td>
                <td className="py-4 px-6 text-right">
                  <input
                    type="checkbox"
                    checked={settings.enableNotifications}
                    onChange={(e) => handleChange('enableNotifications', e.target.checked)}
                    className="w-5 h-5 text-blue-600 rounded"
                  />
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-6 text-black font-medium">Enable Auto-Audit</td>
                <td className="py-4 px-6 text-right">
                  <input
                    type="checkbox"
                    checked={settings.autoAudit}
                    onChange={(e) => handleChange('autoAudit', e.target.checked)}
                    className="w-5 h-5 text-blue-600 rounded"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Data Settings */}
        <div className="glass-card border border-gray-300 rounded-lg p-6 backdrop-blur-md bg-white bg-opacity-60">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-5 h-5 text-purple-600" />
            <h2 className="text-xl font-bold text-black">Data Management</h2>
          </div>
          
          <table className="w-full">
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-6 text-black font-medium">Data Retention Period (Years)</td>
                <td className="py-4 px-6 text-right">
                  <input
                    type="number"
                    value={settings.dataRetention}
                    onChange={(e) => handleChange('dataRetention', e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 text-black w-24 text-right"
                  />
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-6 text-black font-medium">Audit Frequency</td>
                <td className="py-4 px-6 text-right">
                  <select
                    value={settings.auditFrequency}
                    onChange={(e) => handleChange('auditFrequency', e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 text-black"
                  >
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="biannually">Bi-annually</option>
                    <option value="annually">Annually</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Security Settings */}
        <div className="glass-card border border-gray-300 rounded-lg p-6 backdrop-blur-md bg-white bg-opacity-60">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="w-5 h-5 text-green-600" />
            <h2 className="text-xl font-bold text-black">Security Preferences</h2>
          </div>
          
          <table className="w-full">
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-6 text-black font-medium">Require Two-Factor Authentication</td>
                <td className="py-4 px-6 text-right">
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600 rounded" />
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 text-black font-medium">Enable Audit Logging</td>
                <td className="py-4 px-6 text-right">
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600 rounded" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="bg-green-600 hover:bg-green-700 text-slate-900 px-6 py-3 rounded-lg flex items-center gap-2 font-semibold">
            <Save className="w-4 h-4" />
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplianceSettings;
