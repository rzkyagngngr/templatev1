import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Zap } from 'lucide-react';

const AdvancedAnimation = () => {
  const [activeAnimation, setActiveAnimation] = useState('fade');
  const [speed, setSpeed] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  const animations = [
    { id: 'fade', name: 'Fade', icon: '👁️', class: 'animate-pulse' },
    { id: 'slide', name: 'Slide', icon: '➡️', class: 'animate-bounce' },
    { id: 'bounce', name: 'Bounce', icon: '🎾', class: 'animate-bounce' },
    { id: 'spin', name: 'Spin', icon: '🌀', class: 'animate-spin' },
    { id: 'pulse', name: 'Pulse', icon: '💓', class: 'animate-pulse' },
    { id: 'flip', name: 'Flip', icon: '🎴', class: 'animate-flip' },
    { id: 'scale', name: 'Scale', icon: '📏', class: 'animate-pulse' },
    { id: 'skew', name: 'Skew', icon: '📐', class: 'animate-pulse' },
  ];

  const animationDuration = {
    fade: 2000,
    slide: 1500,
    bounce: 1000,
    spin: 2000,
    pulse: 2000,
    flip: 1500,
    scale: 1500,
    skew: 1500,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Advanced Animations</h1>
        <div className="flex gap-2 text-sm text-slate-600">
          <span className="hover:text-indigo-600 cursor-pointer">Dashboard</span>
          <span>/</span>
          <span className="hover:text-indigo-600 cursor-pointer">Advanced</span>
          <span>/</span>
          <span className="text-indigo-600 font-medium">Animations</span>
        </div>
      </div>

      {/* Control Panel */}
      <div className="mb-6 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="rounded-2xl border border-white/50 hover:scale-105 transition-all duration-300 p-3 bg-gradient-to-br from-indigo-50 to-blue-50 hover:shadow-lg"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button
              onClick={() => setSpeed(1)}
              className="rounded-2xl border border-white/50 hover:scale-105 transition-all duration-300 p-3 bg-gradient-to-br from-indigo-50 to-blue-50 hover:shadow-lg"
            >
              <RotateCcw size={20} />
            </button>
          </div>
          <div className="flex items-center gap-3 flex-1 max-w-xs">
            <Zap size={18} className="text-yellow-500" />
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={speed}
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
              className="w-full h-2 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full appearance-none cursor-pointer"
            />
            <span className="text-sm font-medium text-slate-700 min-w-fit">{speed.toFixed(1)}x</span>
          </div>
        </div>
      </div>

      {/* Animation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {animations.map((anim) => (
          <div
            key={anim.id}
            onClick={() => setActiveAnimation(anim.id)}
            className={`backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border-2 shadow-xl p-6 cursor-pointer transition-all duration-300 ${
              activeAnimation === anim.id
                ? 'border-indigo-300 shadow-indigo-200'
                : 'border-white/60 hover:shadow-indigo-100 hover:scale-105'
            }`}
          >
            <div className="flex flex-col items-center gap-4 h-full">
              <div className="text-5xl">{anim.icon}</div>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center ${isPlaying && activeAnimation === anim.id ? anim.class : ''}`}
                style={{
                  animationDuration: `${animationDuration[anim.id] / speed}ms`,
                  animationPlayState: isPlaying && activeAnimation === anim.id ? 'running' : 'paused',
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-400"></div>
              </div>
              <h3 className="font-semibold text-slate-900">{anim.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Section */}
      <div className="mt-8 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Live Preview</h2>
        <div className="flex justify-center items-center min-h-60">
          <div
            className={`w-32 h-32 rounded-3xl bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white text-3xl ${
              isPlaying ? (animations.find(a => a.id === activeAnimation)?.class || '') : ''
            }`}
            style={{
              animationDuration: `${animationDuration[activeAnimation] / speed}ms`,
              animationPlayState: isPlaying ? 'running' : 'paused',
            }}
          >
            {animations.find(a => a.id === activeAnimation)?.icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnimation;
