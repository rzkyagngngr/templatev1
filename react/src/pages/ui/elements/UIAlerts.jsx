import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export default function UIAlerts() {
  const alerts = [
    { type: 'primary', title: 'Well done!', message: 'You successfully read this important alert message.' },
    { type: 'success', title: 'Success!', message: 'Your action was completed successfully.' },
    { type: 'warning', title: 'Warning!', message: 'Please review before proceeding.' },
    { type: 'danger', title: 'Error!', message: 'Something went wrong. Please try again.' },
  ];

  const alertColors = {
    primary: 'bg-blue-50 border-blue-300 text-black',
    success: 'bg-green-50 border-green-300 text-black',
    warning: 'bg-yellow-50 border-yellow-300 text-black',
    danger: 'bg-red-50 border-red-300 text-black',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold =">Alerts</h1>
          <nav className="flex items-center space-x-2 text-gray-400">
            <Home className="w-5 h-5" />
            <ChevronRight className="w-4 h-4" />
            <span>UI Kit</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">Alerts</span>
          </nav>
        </div>
      </div>

      {/* Alerts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Alerts */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Basic Alerts</h3>
          <div className="space-y-3">
            {alerts.map((alert, idx) => (
              <div key={idx} className={`border-l-4 p-3 rounded ${alertColors[alert.type]}`}>
                <p className="font-semibold text-black">{alert.title}</p>
                <p className="text-sm text-black">{alert.message}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dismissible Alerts */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Dismissible Alerts</h3>
          <div className="space-y-3">
            {alerts.slice(0, 3).map((alert, idx) => (
              <div key={idx} className={`border-l-4 p-3 rounded flex justify-between items-start ${alertColors[alert.type]}`}>
                <div>
                  <p className="font-semibold text-black">{alert.title}</p>
                  <p className="text-sm text-black">{alert.message}</p>
                </div>
                <button className="text-black hover:text-gray-600">âœ•</button>
              </div>
            ))}
          </div>
        </div>

        {/* Outlined Alerts */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Outlined Alerts</h3>
          <div className="space-y-3">
            {alerts.map((alert, idx) => (
              <div key={idx} className={`border-2 p-3 rounded ${alertColors[alert.type]}`}>
                <p className="font-semibold text-black">{alert.title}</p>
                <p className="text-sm text-black">{alert.message}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Alert with Icon */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Alerts with Icon</h3>
          <div className="space-y-3">
            {alerts.map((alert, idx) => (
              <div key={idx} className={`border-l-4 p-3 rounded flex items-center gap-3 ${alertColors[alert.type]}`}>
                <span className="text-lg">â„¹ï¸</span>
                <div>
                  <p className="font-semibold text-black">{alert.title}</p>
                  <p className="text-sm text-black">{alert.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
