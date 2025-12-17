import React from 'react';
import { ChevronRight, AlertCircle, CheckCircle, Info } from 'lucide-react';

export default function AdvancedRibbons() {
  const ribbons = [
    { type: 'info', title: 'Information', message: 'This is an informational ribbon message', icon: Info },
    { type: 'success', title: 'Success', message: 'Operation completed successfully', icon: CheckCircle },
    { type: 'warning', title: 'Warning', message: 'Please review before proceeding', icon: AlertCircle },
    { type: 'error', title: 'Error', message: 'An error occurred, please try again', icon: AlertCircle },
  ];

  const getStyles = (type) => {
    const styles = {
      info: 'bg-blue-50 border-blue-300 text-blue-900',
      success: 'bg-green-50 border-green-300 text-green-900',
      warning: 'bg-yellow-50 border-yellow-300 text-yellow-900',
      error: 'bg-red-50 border-red-300 text-red-900',
    };
    return styles[type] || styles.info;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span>Glacia</span>
          <ChevronRight size={16} />
          <span>UI Kit</span>
          <ChevronRight size={16} />
          <span className="text-gray-900 font-semibold">Ribbons</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Advanced Ribbons</h1>
      </div>

      {/* Examples */}
      <div className="grid gap-4">
        {ribbons.map((ribbon, idx) => {
          const Icon = ribbon.icon;
          return (
            <div key={idx} className={`backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg shadow-sm ${getStyles(ribbon.type)}`}>
              <div className="flex items-start gap-4 p-4">
                <Icon size={24} className="flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-1">{ribbon.title}</h3>
                  <p className="text-sm opacity-90">{ribbon.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
