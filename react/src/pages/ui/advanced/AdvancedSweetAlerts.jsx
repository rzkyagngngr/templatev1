import React, { useState } from 'react';
import { ChevronRight, AlertCircle, CheckCircle, HelpCircle, Zap } from 'lucide-react';

export default function AdvancedSweetAlerts() {
  const [activeAlert, setActiveAlert] = useState(null);

  const alerts = [
    { id: 'success', title: 'Success!', message: 'Your operation completed successfully', icon: CheckCircle, color: 'text-green-600' },
    { id: 'error', title: 'Error!', message: 'Something went wrong. Please try again', icon: AlertCircle, color: 'text-red-600' },
    { id: 'warning', title: 'Warning!', message: 'Are you sure about this action?', icon: AlertCircle, color: 'text-yellow-600' },
    { id: 'info', title: 'Info!', message: 'Here is some important information', icon: HelpCircle, color: 'text-blue-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span>Glacia</span>
          <ChevronRight size={16} />
          <span>UI Kit</span>
          <ChevronRight size={16} />
          <span className="text-gray-900 font-semibold">Sweet Alerts</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Advanced Sweet Alerts</h1>
      </div>

      {/* Examples */}
      <div className="grid md:grid-cols-2 gap-6">
        {alerts.map((alert) => {
          const Icon = alert.icon;
          return (
            <div key={alert.id} className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-sm">
              <div className="text-center">
                <Icon size={48} className={`${alert.color} mx-auto mb-4`} />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{alert.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{alert.message}</p>
                <button
                  onClick={() => setActiveAlert(alert.id)}
                  className="px-4 py-2 text-sm font-medium text-slate-900 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Show Alert
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
