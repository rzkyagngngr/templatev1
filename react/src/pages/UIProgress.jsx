import React, { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';

export default function UIProgress() {
  const [progressValues, setProgressValues] = useState({
    basic: 0,
    animated: 0,
    circular: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValues(prev => ({
        basic: prev.basic < 85 ? prev.basic + 1 : prev.basic,
        animated: prev.animated < 72 ? prev.animated + 1 : prev.animated,
        circular: prev.circular < 65 ? prev.circular + 1 : prev.circular,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const ProgressBar = ({ value, color, showLabel = true, striped = false, animated = false }) => {
    const colorClasses = {
      blue: 'from-blue-400/50 to-blue-300/50 shadow-blue-200/40',
      green: 'from-green-400/50 to-green-300/50 shadow-green-200/40',
      yellow: 'from-yellow-400/50 to-yellow-300/50 shadow-yellow-200/40',
      red: 'from-red-400/50 to-red-300/50 shadow-red-200/40',
    };

    return (
      <div className="w-full">
        <div className="backdrop-blur-xl bg-gradient-to-br from-gray-400/20 to-gray-300/20 rounded-full h-3 overflow-hidden border border-white/40">
          <div
            className={`h-full bg-gradient-to-r ${colorClasses[color]} transition-all duration-500 ${
              striped ? 'bg-gradient-to-r from-transparent to-transparent' : ''
            } ${animated ? 'animate-pulse' : ''}`}
            style={{ width: `${value}%` }}
          />
        </div>
        {showLabel && (
          <p className="text-sm text-gray-600 mt-2">{value}%</p>
        )}
      </div>
    );
  };

  const CircularProgress = ({ value, color = 'blue' }) => {
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (value / 100) * circumference;

    const colorClasses = {
      blue: 'text-blue-500',
      green: 'text-green-500',
      red: 'text-red-500',
      purple: 'text-purple-500',
    };

    return (
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke="rgba(200, 200, 200, 0.3)"
            strokeWidth="8"
          />
          <circle
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className={`${colorClasses[color]} transition-all duration-500`}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-center">
          <span className={`text-2xl font-bold ${colorClasses[color]}`}>{value}%</span>
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400/50 to-blue-300/50 flex items-center justify-center">
            <span className="text-sm font-bold text-blue-600">UI</span>
          </div>
          <span className="text-sm font-medium text-gray-600">UI Elements</span>
          <span className="text-sm text-gray-400">/</span>
          <span className="text-sm text-blue-600 font-medium">Progress</span>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Progress Bars & Indicators
        </h1>
        <p className="text-gray-600">Progress visualization components</p>
      </div>

      {/* Basic Progress Bars */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Basic Progress Bars</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Blue Progress</label>
            <ProgressBar value={45} color="blue" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Green Progress</label>
            <ProgressBar value={72} color="green" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Yellow Progress</label>
            <ProgressBar value={60} color="yellow" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Red Progress</label>
            <ProgressBar value={35} color="red" />
          </div>
        </div>
      </div>

      {/* Progress with Labels */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Progress with Labels</h2>
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">Download Progress</label>
              <span className="text-sm font-semibold text-blue-600">58%</span>
            </div>
            <ProgressBar value={58} color="blue" showLabel={false} />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">Upload Progress</label>
              <span className="text-sm font-semibold text-green-600">82%</span>
            </div>
            <ProgressBar value={82} color="green" showLabel={false} />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">Processing Progress</label>
              <span className="text-sm font-semibold text-purple-600">43%</span>
            </div>
            <ProgressBar value={43} color="green" showLabel={false} />
          </div>
        </div>
      </div>

      {/* Striped Progress Bars */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Striped Progress Bars</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Striped Blue</label>
            <div className="backdrop-blur-xl bg-gradient-to-br from-gray-400/20 to-gray-300/20 rounded-full h-4 overflow-hidden border border-white/40 relative">
              <div
                className="h-full bg-gradient-to-r from-blue-400/50 to-blue-300/50 shadow-blue-200/40 transition-all duration-500"
                style={{
                  width: '65%',
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)',
                }}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Striped Green</label>
            <div className="backdrop-blur-xl bg-gradient-to-br from-gray-400/20 to-gray-300/20 rounded-full h-4 overflow-hidden border border-white/40 relative">
              <div
                className="h-full bg-gradient-to-r from-green-400/50 to-green-300/50 shadow-green-200/40 transition-all duration-500"
                style={{
                  width: '78%',
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animated Progress */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Animated Progress</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Auto-progressing</label>
            <ProgressBar value={progressValues.animated} color="blue" showLabel={true} animated={true} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Basic Animation</label>
            <div className="backdrop-blur-xl bg-gradient-to-br from-gray-400/20 to-gray-300/20 rounded-full h-3 overflow-hidden border border-white/40">
              <div
                className="h-full bg-gradient-to-r from-yellow-400/50 to-yellow-300/50 shadow-yellow-200/40 animate-pulse"
                style={{ width: '55%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Circular Progress Indicators */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Circular Progress Indicators</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex justify-center">
            <CircularProgress value={progressValues.circular} color="blue" />
          </div>
          <div className="flex justify-center">
            <CircularProgress value={85} color="green" />
          </div>
          <div className="flex justify-center">
            <CircularProgress value={60} color="red" />
          </div>
          <div className="flex justify-center">
            <CircularProgress value={92} color="purple" />
          </div>
        </div>
      </div>

      {/* Progress with Percentages */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Progress with Percentages</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="w-24 text-sm font-medium text-gray-700">HTML</span>
            <div className="flex-1">
              <ProgressBar value={85} color="blue" showLabel={false} />
            </div>
            <span className="w-12 text-right text-sm font-semibold text-gray-700">85%</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-sm font-medium text-gray-700">CSS</span>
            <div className="flex-1">
              <ProgressBar value={72} color="green" showLabel={false} />
            </div>
            <span className="w-12 text-right text-sm font-semibold text-gray-700">72%</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-sm font-medium text-gray-700">JavaScript</span>
            <div className="flex-1">
              <ProgressBar value={68} color="yellow" showLabel={false} />
            </div>
            <span className="w-12 text-right text-sm font-semibold text-gray-700">68%</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-sm font-medium text-gray-700">React</span>
            <div className="flex-1">
              <ProgressBar value={55} color="red" showLabel={false} />
            </div>
            <span className="w-12 text-right text-sm font-semibold text-gray-700">55%</span>
          </div>
        </div>
      </div>

      {/* Multiple Progress Bars */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Multiple Progress Bars</h2>
        <div className="space-y-3">
          <ProgressBar value={80} color="blue" showLabel={false} />
          <ProgressBar value={65} color="green" showLabel={false} />
          <ProgressBar value={90} color="yellow" showLabel={false} />
          <ProgressBar value={45} color="red" showLabel={false} />
        </div>
      </div>

      {/* Progress with Icons */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Progress with Icons</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-blue-600 flex-shrink-0" size={20} />
            <div className="flex-1">
              <ProgressBar value={78} color="blue" showLabel={false} />
            </div>
            <span className="text-sm font-semibold text-gray-700">78%</span>
          </div>
          <div className="flex items-center gap-3">
            <TrendingUp className="text-green-600 flex-shrink-0" size={20} />
            <div className="flex-1">
              <ProgressBar value={92} color="green" showLabel={false} />
            </div>
            <span className="text-sm font-semibold text-gray-700">92%</span>
          </div>
          <div className="flex items-center gap-3">
            <TrendingUp className="text-red-600 flex-shrink-0" size={20} />
            <div className="flex-1">
              <ProgressBar value={35} color="red" showLabel={false} />
            </div>
            <span className="text-sm font-semibold text-gray-700">35%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
