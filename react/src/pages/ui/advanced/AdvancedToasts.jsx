import React, { useState } from 'react';
import { ChevronRight, Bell, CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export default function AdvancedToasts() {
  const [toasts, setToasts] = useState([]);

  const showToast = (type, message) => {
    const id = Date.now();
    setToasts([...toasts, { id, type, message }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  };

  const toastTypes = [
    { type: 'success', label: 'Success Toast', message: 'Success! Your changes have been saved.' },
    { type: 'error', label: 'Error Toast', message: 'Error! Something went wrong.' },
    { type: 'info', label: 'Info Toast', message: 'Info: Please update your profile.' },
    { type: 'warning', label: 'Warning Toast', message: 'Warning: This action cannot be undone.' },
  ];

  const getToastStyles = (type) => {
    const styles = {
      success: 'bg-green-50 border-green-300 text-green-900',
      error: 'bg-red-50 border-red-300 text-red-900',
      info: 'bg-blue-50 border-blue-300 text-blue-900',
      warning: 'bg-yellow-50 border-yellow-300 text-yellow-900',
    };
    return styles[type] || styles.info;
  };

  const getToastIcon = (type) => {
    const icons = {
      success: <CheckCircle size={20} />,
      error: <AlertCircle size={20} />,
      info: <Info size={20} />,
      warning: <AlertCircle size={20} />,
    };
    return icons[type] || icons.info;
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
          <span className="text-gray-900 font-semibold">Toasts</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Advanced Toasts</h1>
      </div>

      {/* Examples */}
      <div className="grid md:grid-cols-2 gap-6">
        {toastTypes.map((toast) => (
          <button
            key={toast.type}
            onClick={() => showToast(toast.type, toast.message)}
            className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-sm hover:bg-white/60 transition-colors text-left"
          >
            <h3 className="text-lg font-semibold text-gray-900">{toast.label}</h3>
            <p className="text-sm text-gray-600 mt-2">{toast.message}</p>
          </button>
        ))}
      </div>

      {/* Toast Container */}
      <div className="fixed bottom-4 right-4 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-4 shadow-lg ${getToastStyles(toast.type)} flex items-start gap-3 animate-pulse`}
          >
            <div className="flex-shrink-0">{getToastIcon(toast.type)}</div>
            <div className="flex-1">
              <p className="text-sm font-medium">{toast.message}</p>
            </div>
            <button
              onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
              className="flex-shrink-0 text-gray-500 hover:text-gray-700"
            >
              <X size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
