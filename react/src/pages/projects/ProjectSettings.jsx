import React, { useState } from 'react';
import { Save, X } from 'lucide-react';

export default function ProjectSettings() {
  const [settings, setSettings] = useState({
    projectName: 'Website Redesign Project',
    description: 'Complete redesign of company website',
    status: 'active',
    visibility: 'private',
    notifications: true,
    autoArchive: true,
  });

  const [formData, setFormData] = useState(settings);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSave = () => {
    setSettings(formData);
  };

  const notificationSettings = [
    { label: 'Email Notifications', key: 'email', enabled: true },
    { label: 'In-App Notifications', key: 'inApp', enabled: true },
    { label: 'Slack Integration', key: 'slack', enabled: false },
    { label: 'Task Reminders', key: 'reminders', enabled: true },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-black mb-8">Project Settings</h1>

      <div className="grid grid-cols-3 gap-6">
        {/* Settings Menu */}
        <div className="glass-card border border-gray-300 rounded-lg p-4 bg-white h-96">
          <h2 className="font-bold text-black mb-4">Settings</h2>
          <div className="space-y-2">
            {['General', 'Notifications', 'Team', 'Advanced'].map((item, idx) => (
              <button
                key={idx}
                className={`w-full text-left px-3 py-2 rounded-lg ${
                  idx === 0
                    ? 'bg-blue-100 text-blue-800 font-semibold'
                    : 'text-black hover:bg-gray-100'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* General Settings */}
        <div className="col-span-2">
          <div className="glass-card border border-gray-300 rounded-lg p-6 bg-white mb-6">
            <h2 className="text-xl font-bold text-black mb-6">General Settings</h2>

            <div className="space-y-4">
              {/* Project Name */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Project Name</label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Project Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>active</option>
                  <option>paused</option>
                  <option>completed</option>
                  <option>archived</option>
                </select>
              </div>

              {/* Visibility */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Visibility</label>
                <select
                  name="visibility"
                  value={formData.visibility}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>public</option>
                  <option>private</option>
                  <option>team</option>
                </select>
              </div>

              <button
                onClick={handleSave}
                className="w-full bg-blue-500 text-slate-900 py-2 rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2"
              >
                <Save size={18} /> Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="glass-card border border-gray-300 rounded-lg p-6 bg-white mb-6">
        <h2 className="text-xl font-bold text-black mb-4">Notification Settings</h2>
        <div className="space-y-3">
          {notificationSettings.map((notif, idx) => (
            <div key={idx} className="flex items-center justify-between border border-gray-300 rounded-lg p-3 bg-white">
              <label className="font-semibold text-black text-sm cursor-pointer">{notif.label}</label>
              <input
                type="checkbox"
                defaultChecked={notif.enabled}
                className="w-5 h-5 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Danger Zone */}
      <div className="glass-card border border-red-300 rounded-lg p-6 bg-red-50">
        <h2 className="text-lg font-bold text-red-600 mb-4">Danger Zone</h2>
        <div className="space-y-3">
          <button className="w-full border border-red-300 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 flex items-center justify-center gap-2">
            <X size={18} /> Delete Project
          </button>
        </div>
      </div>
    </div>
  );
}
