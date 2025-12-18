import React, { useState } from 'react';
import {
  AlertCircle,
  CheckCircle,
  XCircle,
  HelpCircle,
  Info,
  Zap,
  Loader,
  Package,
  Lock,
  ChevronRight,
} from 'lucide-react';

const Breadcrumb = () => (
  <div className="flex items-center space-x-2 text-sm text-white/70 mb-8">
    <span className="hover:text-white/90 cursor-pointer transition">Dashboard</span>
    <ChevronRight className="w-4 h-4" />
    <span className="hover:text-white/90 cursor-pointer transition">Advanced</span>
    <ChevronRight className="w-4 h-4" />
    <span className="text-white/90">Sweet Alerts</span>
  </div>
);

const AlertButton = ({ icon: Icon, label, onClick, color }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${color}`}
  >
    <Icon className="w-4 h-4" />
    {label}
  </button>
);

const AlertModal = ({ type, onClose }) => {
  const alertConfigs = {
    success: {
      icon: CheckCircle,
      title: 'Success!',
      message: 'Your operation completed successfully.',
      color: 'from-emerald-500 to-green-600',
      bgColor: 'bg-gradient-to-br from-emerald-500/10 to-green-600/10',
    },
    error: {
      icon: XCircle,
      title: 'Error!',
      message: 'Something went wrong. Please try again.',
      color: 'from-red-500 to-rose-600',
      bgColor: 'bg-gradient-to-br from-red-500/10 to-rose-600/10',
    },
    warning: {
      icon: AlertCircle,
      title: 'Warning!',
      message: 'Please review the information before proceeding.',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-amber-500/10 to-orange-600/10',
    },
    info: {
      icon: Info,
      title: 'Information',
      message: 'Here is some important information for you.',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-blue-500/10 to-cyan-600/10',
    },
    question: {
      icon: HelpCircle,
      title: 'Question',
      message: 'Do you want to continue with this action?',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-purple-500/10 to-pink-600/10',
    },
    confirm: {
      icon: Zap,
      title: 'Confirm Action',
      message: 'Are you sure you want to proceed?',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-indigo-500/10 to-purple-600/10',
    },
    custom: {
      icon: Package,
      title: 'Custom Alert',
      message: 'This is a custom styled alert with your branding.',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-teal-500/10 to-cyan-600/10',
    },
    loading: {
      icon: Loader,
      title: 'Processing',
      message: 'Please wait while we process your request...',
      color: 'from-slate-500 to-blue-600',
      bgColor: 'bg-gradient-to-br from-slate-500/10 to-blue-600/10',
      isLoading: true,
    },
    confirmation: {
      icon: Lock,
      title: 'Confirm Your Action',
      message: 'Please enter "CONFIRM" to proceed with deletion.',
      color: 'from-red-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-red-500/10 to-orange-600/10',
      hasInput: true,
    },
    premium: {
      icon: Package,
      title: 'Premium Feature',
      message: 'Upgrade to Premium to unlock this exclusive feature.',
      color: 'from-yellow-500 to-amber-600',
      bgColor: 'bg-gradient-to-br from-yellow-500/10 to-amber-600/10',
    },
  };

  const config = alertConfigs[type];
  const Icon = config.icon;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div
        className={`w-full max-w-md ${config.bgColor} backdrop-blur-2xl rounded-3xl border border-white/60 shadow-2xl p-8 transform transition-all duration-300`}
      >
        {/* Header Image */}
        <div className="mb-6 h-40 rounded-2xl overflow-hidden">
          <img
            src={`https://picsum.photos/400/200?random=${Math.random()}`}
            alt="Alert header"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Icon */}
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${config.color} flex items-center justify-center mb-6 mx-auto`}>
          {config.isLoading ? (
            <Icon className="w-8 h-8 text-white animate-spin" />
          ) : (
            <Icon className="w-8 h-8 text-white" />
          )}
        </div>

        {/* Title & Message */}
        <h3 className="text-xl font-bold text-white text-center mb-3">{config.title}</h3>
        <p className="text-white/80 text-center mb-6">{config.message}</p>

        {/* Input Field (for confirmation alert) */}
        {config.hasInput && (
          <input
            type="text"
            placeholder="Type CONFIRM"
            className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-2 text-white placeholder-white/50 mb-6 focus:outline-none focus:border-white/60 transition"
          />
        )}

        {/* Buttons */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-medium transition-all duration-200"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className={`flex-1 px-4 py-2 rounded-xl bg-gradient-to-r ${config.color} text-white font-medium hover:shadow-lg transition-all duration-200`}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default function AdvancedSweetAlerts() {
  const [activeAlert, setActiveAlert] = useState(null);

  const alerts = [
    { id: 'success', label: 'Success Alert', icon: CheckCircle, color: 'bg-emerald-500 hover:bg-emerald-600' },
    { id: 'error', label: 'Error Alert', icon: XCircle, color: 'bg-red-500 hover:bg-red-600' },
    { id: 'warning', label: 'Warning Alert', icon: AlertCircle, color: 'bg-amber-500 hover:bg-amber-600' },
    { id: 'info', label: 'Info Alert', icon: Info, color: 'bg-blue-500 hover:bg-blue-600' },
    { id: 'question', label: 'Question Alert', icon: HelpCircle, color: 'bg-purple-500 hover:bg-purple-600' },
    { id: 'confirm', label: 'Confirm Alert', icon: Zap, color: 'bg-indigo-500 hover:bg-indigo-600' },
    { id: 'custom', label: 'Custom Alert', icon: Package, color: 'bg-teal-500 hover:bg-teal-600' },
    { id: 'loading', label: 'Loading Alert', icon: Loader, color: 'bg-slate-500 hover:bg-slate-600' },
    { id: 'confirmation', label: 'Confirmation Input', icon: Lock, color: 'bg-rose-500 hover:bg-rose-600' },
    { id: 'premium', label: 'Premium Alert', icon: Package, color: 'bg-yellow-500 hover:bg-yellow-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb />

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">Advanced Sweet Alerts</h1>
          <p className="text-white/60 text-lg">Click any button below to trigger different alert types</p>
        </div>

        {/* Glass Card */}
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl border border-white/60 shadow-2xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {alerts.map((alert) => (
              <AlertButton
                key={alert.id}
                icon={alert.icon}
                label={alert.label}
                onClick={() => setActiveAlert(alert.id)}
                color={`${alert.color} text-white transition-all duration-200 flex-1 flex justify-center items-center gap-2 px-3 py-3 rounded-xl font-medium`}
              />
            ))}
          </div>
        </div>

        {/* Alert Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { title: '10 Alert Types', desc: 'Success, error, warning, info, question, and more' },
            { title: 'Smooth Animations', desc: 'Beautiful transitions and backdrop blur effects' },
            { title: 'iOS 26 Design', desc: 'Modern liquid glass morphism styling' },
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

      {/* Alert Modal */}
      {activeAlert && <AlertModal type={activeAlert} onClose={() => setActiveAlert(null)} />}
    </div>
  );
}
