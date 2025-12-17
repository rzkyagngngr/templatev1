import React, { useState } from 'react';
import { AlertCircle, CheckCircle, XCircle, Info, AlertTriangle, Lock, Zap, Bell, User, Eye } from 'lucide-react';

export default function UIAlerts() {
  const [dismissedAlerts, setDismissedAlerts] = useState([]);

  const handleDismiss = (id) => {
    setDismissedAlerts([...dismissedAlerts, id]);
  };

  const alerts = [
    { id: 'primary', type: 'primary', icon: Info, title: 'Well done!', message: 'You successfully read this important alert message.' },
    { id: 'success', type: 'success', icon: CheckCircle, title: 'Success!', message: 'Your action has been completed successfully.' },
    { id: 'warning', type: 'warning', icon: AlertTriangle, title: 'Warning!', message: 'Please be careful with this action.' },
    { id: 'danger', type: 'danger', icon: XCircle, title: 'Error!', message: 'Something went wrong. Please try again.' },
    { id: 'info', type: 'info', icon: AlertCircle, title: 'Info', message: 'Here is some additional information for you.' },
    { id: 'security', type: 'danger', icon: Lock, title: 'Security Alert', message: 'Unusual login activity detected from a new location.' },
    { id: 'notification', type: 'info', icon: Bell, title: 'New Notification', message: 'You have received a new message from your team.' },
    { id: 'update', type: 'primary', icon: Zap, title: 'System Update', message: 'An update is available. Please restart your application.' },
    { id: 'permission', type: 'warning', icon: User, title: 'Permission Required', message: 'This action requires additional authentication.' },
    { id: 'viewing', type: 'success', icon: Eye, title: 'Viewing Enabled', message: 'You now have access to view all documents.' },
  ];

  const colorMap = {
    primary: 'bg-blue-500/20 border-blue-400 text-blue-900',
    success: 'bg-green-500/20 border-green-400 text-green-900',
    warning: 'bg-yellow-500/20 border-yellow-400 text-yellow-900',
    danger: 'bg-red-500/20 border-red-400 text-red-900',
    info: 'bg-cyan-500/20 border-cyan-400 text-cyan-900',
  };

  const outlineColorMap = {
    primary: 'border-blue-300 text-blue-800',
    success: 'border-green-300 text-green-800',
    warning: 'border-yellow-300 text-yellow-800',
    danger: 'border-red-300 text-red-800',
    info: 'border-cyan-300 text-cyan-800',
  };

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div>
        <h4 className="text-2xl font-bold text-gray-800 tracking-wide">UI Alerts</h4>
        <div className="text-sm text-gray-600 mt-2">
          <span>Dashboard</span>
          <span className="mx-2">/</span>
          <span>UI Elements</span>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">Alerts</span>
        </div>
      </div>

      {/* Solid Alerts */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg">
        <h5 className="text-lg font-bold text-gray-800 mb-6">Solid Alerts</h5>
        <div className="space-y-4">
          {alerts.map((alert) => {
            const Icon = alert.icon;
            const isVisible = !dismissedAlerts.includes(alert.id);
            
            return isVisible && (
              <div
                key={alert.id}
                className={`backdrop-blur-md ${colorMap[alert.type]} border-l-4 rounded-lg p-4 flex items-start gap-4 hover:shadow-md transition-all`}
              >
                <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h6 className="font-semibold text-gray-900">{alert.title}</h6>
                  <p className="text-sm text-gray-800 mt-1">{alert.message}</p>
                </div>
                <button
                  onClick={() => handleDismiss(alert.id)}
                  className="text-gray-600 hover:text-gray-900 ml-4 flex-shrink-0"
                >
                  âœ•
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Outline Alerts */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg">
        <h5 className="text-lg font-bold text-gray-800 mb-6">Outline Alerts</h5>
        <div className="space-y-4">
          {alerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <div
                key={`outline-${alert.id}`}
                className={`backdrop-blur-md bg-white/20 border-2 ${outlineColorMap[alert.type]} rounded-lg p-4 flex items-start gap-4 hover:bg-white/30 transition-all`}
              >
                <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h6 className="font-semibold">{alert.title}</h6>
                  <p className="text-sm mt-1">{alert.message}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dismissible Alerts */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg">
        <h5 className="text-lg font-bold text-gray-800 mb-6">Dismissible Alerts</h5>
        <div className="space-y-4">
          {[
            { id: 'dismiss1', type: 'primary', title: 'Alert Title', message: 'This alert can be dismissed by clicking the X button' },
            { id: 'dismiss2', type: 'success', title: 'Success Alert', message: 'You can close this notification' },
          ].map((alert) => !dismissedAlerts.includes(alert.id) && (
            <div
              key={alert.id}
              className={`backdrop-blur-md ${colorMap[alert.type]} border-l-4 rounded-lg p-4 flex items-start justify-between hover:shadow-md transition-all`}
            >
              <div>
                <h6 className="font-semibold text-gray-900">{alert.title}</h6>
                <p className="text-sm text-gray-800 mt-1">{alert.message}</p>
              </div>
              <button
                onClick={() => handleDismiss(alert.id)}
                className="text-gray-600 hover:text-gray-900 ml-4 flex-shrink-0 font-bold"
              >
                âœ•
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Left Border Alerts */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg">
        <h5 className="text-lg font-bold text-gray-800 mb-6">Left Border Alerts</h5>
        <div className="space-y-4">
          {[
            { id: 'left1', type: 'primary', color: 'border-blue-500', bgColor: 'bg-blue-50' },
            { id: 'left2', type: 'success', color: 'border-green-500', bgColor: 'bg-green-50' },
            { id: 'left3', type: 'warning', color: 'border-yellow-500', bgColor: 'bg-yellow-50' },
            { id: 'left4', type: 'danger', color: 'border-red-500', bgColor: 'bg-red-50' },
          ].map((alert) => (
            <div
              key={alert.id}
              className={`backdrop-blur-md ${alert.bgColor} border-l-4 ${alert.color} rounded-lg p-4 text-gray-800 hover:shadow-md transition-all`}
            >
              <p className="font-medium">Alert with left border accent</p>
              <p className="text-sm text-gray-700 mt-1">This style emphasizes the alert type with a colored left border.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
