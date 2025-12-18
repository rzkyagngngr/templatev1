import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle,
  AlertCircle,
  Info,
  MessageCircle,
  Zap,
  ChevronRight,
} from 'lucide-react';

const Breadcrumb = () => (
  <div className="flex items-center space-x-2 text-sm text-white/70 mb-8">
    <span className="hover:text-white/90 cursor-pointer transition">Dashboard</span>
    <ChevronRight className="w-4 h-4" />
    <span className="hover:text-white/90 cursor-pointer transition">Advanced</span>
    <ChevronRight className="w-4 h-4" />
    <span className="text-white/90">Toasts</span>
  </div>
);

const Toast = ({ id, type, title, message, duration, onClose, position }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.max(prev - (100 / (duration * 10)), 0));
    }, 100);

    const timer = setTimeout(() => {
      onClose(id);
    }, duration * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [id, duration, onClose]);

  const toastConfigs = {
    success: {
      icon: CheckCircle,
      color: 'from-emerald-500 to-green-600',
      bgColor: 'bg-gradient-to-br from-emerald-500/10 to-green-600/10',
      borderColor: 'border-emerald-500/40',
    },
    error: {
      icon: AlertCircle,
      color: 'from-red-500 to-rose-600',
      bgColor: 'bg-gradient-to-br from-red-500/10 to-rose-600/10',
      borderColor: 'border-red-500/40',
    },
    warning: {
      icon: AlertCircle,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-amber-500/10 to-orange-600/10',
      borderColor: 'border-amber-500/40',
    },
    info: {
      icon: Info,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-blue-500/10 to-cyan-600/10',
      borderColor: 'border-blue-500/40',
    },
    default: {
      icon: MessageCircle,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-purple-500/10 to-pink-600/10',
      borderColor: 'border-purple-500/40',
    },
    action: {
      icon: Zap,
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-indigo-500/10 to-purple-600/10',
      borderColor: 'border-indigo-500/40',
    },
  };

  const config = toastConfigs[type] || toastConfigs.default;
  const Icon = config.icon;

  return (
    <div
      className={`${config.bgColor} backdrop-blur-2xl rounded-2xl border ${config.borderColor} shadow-xl overflow-hidden animate-in fade-in slide-in-from-right-4 duration-300 w-96`}
    >
      <div className="flex items-start gap-4 p-4">
        {/* Icon */}
        <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${config.color} flex items-center justify-center`}>
          <Icon className="w-5 h-5 text-white" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm">{title}</p>
          <p className="text-white/70 text-xs mt-1">{message}</p>
        </div>

        {/* Close Button */}
        <button
          onClick={() => onClose(id)}
          className="flex-shrink-0 text-white/60 hover:text-white/90 transition-colors duration-200"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-white/10">
        <div
          className={`h-full bg-gradient-to-r ${config.color} transition-all duration-100`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default function AdvancedToasts() {
  const [toasts, setToasts] = useState([]);
  const [position, setPosition] = useState('top-right');
  const [duration, setDuration] = useState(5);

  const mockToasts = [
    { type: 'success', title: 'Success!', message: 'Your action completed successfully.' },
    { type: 'error', title: 'Error!', message: 'Something went wrong. Please try again.' },
    { type: 'warning', title: 'Warning!', message: 'Please review the information before proceeding.' },
    { type: 'info', title: 'Information', message: 'Here is some important information for you.' },
    { type: 'default', title: 'Notification', message: 'You have a new notification.' },
    { type: 'action', title: 'Action Required', message: 'Please take action to continue.' },
  ];

  const addToast = (toastData) => {
    const newToast = {
      id: Date.now(),
      ...toastData,
      duration,
    };
    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const getPositionClasses = () => {
    const baseClass = 'fixed space-y-3 pointer-events-none';
    const positions = {
      'top-left': 'top-8 left-8',
      'top-right': 'top-8 right-8',
      'top-center': 'top-8 left-1/2 transform -translate-x-1/2',
      'bottom-left': 'bottom-8 left-8',
      'bottom-right': 'bottom-8 right-8',
      'bottom-center': 'bottom-8 left-1/2 transform -translate-x-1/2',
    };
    return `${baseClass} ${positions[position]}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb />

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">Advanced Toast Notifications</h1>
          <p className="text-white/60 text-lg">Configure and trigger toast notifications with different styles</p>
        </div>

        {/* Main Glass Card */}
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl border border-white/60 shadow-2xl p-12 space-y-8">
          {/* Position Selector */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Position</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'].map((pos) => (
                <button
                  key={pos}
                  onClick={() => setPosition(pos)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                    position === pos
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {pos.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Duration Slider */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Duration: <span className="text-blue-400">{duration}s</span>
            </h3>
            <input
              type="range"
              min="1"
              max="10"
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value))}
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-xs text-white/50 mt-2">
              <span>1s</span>
              <span>10s</span>
            </div>
          </div>

          {/* Toast Buttons */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Trigger Toast</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockToasts.map((toast, idx) => (
                <button
                  key={idx}
                  onClick={() => addToast(toast)}
                  className="px-4 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 justify-center bg-white/10 text-white/90 hover:bg-white/20 border border-white/20 hover:border-white/40"
                >
                  {toast.title}
                </button>
              ))}
            </div>
          </div>

          {/* Toast Stack Preview */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Active Toasts: <span className="text-blue-400">{toasts.length}</span>
            </h3>
            <div className="bg-white/5 rounded-2xl border border-white/20 p-4 min-h-24">
              {toasts.length === 0 ? (
                <p className="text-white/50 text-center text-sm">No active toasts. Click buttons above to trigger them.</p>
              ) : (
                <div className="space-y-2">
                  {toasts.map((toast) => (
                    <div key={toast.id} className="bg-white/10 rounded-lg p-3 text-sm text-white/70">
                      <span className="font-medium">{toast.title}</span> • {toast.message}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {[
            { title: '6 Toast Types', desc: 'Success, error, warning, info, default, and action toasts' },
            { title: '6 Positions', desc: 'Top/bottom, left/right/center combinations' },
            { title: 'Duration Control', desc: 'Adjustable auto-dismiss with 1-10s range' },
            { title: 'iOS 26 Design', desc: 'Modern liquid glass with smooth animations' },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl border border-white/60 shadow-xl p-6"
            >
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Toast Container */}
      <div className={getPositionClasses()}>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onClose={removeToast} position={position} />
        ))}
      </div>
    </div>
  );
}
