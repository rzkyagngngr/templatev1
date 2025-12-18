import React, { useState } from 'react';

const AdvancedRibbons = () => {
  const [selectedColor, setSelectedColor] = useState('indigo');

  const colors = {
    indigo: {
      bg: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
      shadow: 'shadow-indigo-400/50',
      text: 'text-indigo-600',
    },
    emerald: {
      bg: 'bg-gradient-to-r from-emerald-500 to-emerald-600',
      shadow: 'shadow-emerald-400/50',
      text: 'text-emerald-600',
    },
    rose: {
      bg: 'bg-gradient-to-r from-rose-500 to-rose-600',
      shadow: 'shadow-rose-400/50',
      text: 'text-rose-600',
    },
    amber: {
      bg: 'bg-gradient-to-r from-amber-500 to-amber-600',
      shadow: 'shadow-amber-400/50',
      text: 'text-amber-600',
    },
    purple: {
      bg: 'bg-gradient-to-r from-purple-500 to-purple-600',
      shadow: 'shadow-purple-400/50',
      text: 'text-purple-600',
    },
  };

  const ribbonPositions = [
    {
      id: 'top-left',
      label: 'Top Left',
      ribbonClass:
        'absolute -top-3 -left-16 w-48 py-2 text-center text-white font-bold text-sm transform -rotate-45',
      containerClass: 'relative overflow-hidden',
    },
    {
      id: 'top-right',
      label: 'Top Right',
      ribbonClass:
        'absolute -top-3 -right-16 w-48 py-2 text-center text-white font-bold text-sm transform rotate-45',
      containerClass: 'relative overflow-hidden',
    },
    {
      id: 'bottom-left',
      label: 'Bottom Left',
      ribbonClass:
        'absolute -bottom-3 -left-16 w-48 py-2 text-center text-white font-bold text-sm transform rotate-45',
      containerClass: 'relative overflow-hidden',
    },
    {
      id: 'bottom-right',
      label: 'Bottom Right',
      ribbonClass:
        'absolute -bottom-3 -right-16 w-48 py-2 text-center text-white font-bold text-sm transform -rotate-45',
      containerClass: 'relative overflow-hidden',
    },
    {
      id: 'left-top',
      label: 'Left Top',
      ribbonClass:
        'absolute -left-16 -top-8 w-48 py-2 text-center text-white font-bold text-sm transform -rotate-90',
      containerClass: 'relative overflow-hidden',
    },
    {
      id: 'left-bottom',
      label: 'Left Bottom',
      ribbonClass:
        'absolute -left-16 -bottom-8 w-48 py-2 text-center text-white font-bold text-sm transform rotate-90',
      containerClass: 'relative overflow-hidden',
    },
    {
      id: 'right-top',
      label: 'Right Top',
      ribbonClass:
        'absolute -right-16 -top-8 w-48 py-2 text-center text-white font-bold text-sm transform rotate-90',
      containerClass: 'relative overflow-hidden',
    },
    {
      id: 'right-bottom',
      label: 'Right Bottom',
      ribbonClass:
        'absolute -right-16 -bottom-8 w-48 py-2 text-center text-white font-bold text-sm transform -rotate-90',
      containerClass: 'relative overflow-hidden',
    },
  ];

  const textVariants = ['Normal', 'Rotated', 'Shadow', 'Outline', 'Gradient'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Advanced Ribbons</h1>
        <div className="flex gap-2 text-sm text-slate-600">
          <span className="hover:text-indigo-600 cursor-pointer">Dashboard</span>
          <span>/</span>
          <span className="hover:text-indigo-600 cursor-pointer">Advanced</span>
          <span>/</span>
          <span className="text-indigo-600 font-medium">Ribbons</span>
        </div>
      </div>

      {/* Color Selection */}
      <div className="mb-8 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Select Color Theme</h3>
        <div className="flex flex-wrap gap-3">
          {Object.entries(colors).map(([colorKey, colorConfig]) => (
            <button
              key={colorKey}
              onClick={() => setSelectedColor(colorKey)}
              className={`px-6 py-2 rounded-xl font-medium transition-all capitalize ${
                selectedColor === colorKey
                  ? `${colorConfig.bg} text-white shadow-lg ${colorConfig.shadow}`
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {colorKey}
            </button>
          ))}
        </div>
      </div>

      {/* Text Variants Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Text Variants</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Normal */}
          <div className={`${ribbonPositions[0].containerClass} backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-12 h-48`}>
            <div className={ribbonPositions[0].ribbonClass + ' ' + colors[selectedColor].bg}>
              NORMAL
            </div>
            <div className="flex items-center justify-center h-full">
              <img
                src={`https://picsum.photos/150/150?random=${Math.random()}`}
                alt="Random"
                className="rounded-full w-24 h-24 object-cover"
              />
            </div>
          </div>

          {/* Rotated Text */}
          <div className={`${ribbonPositions[1].containerClass} backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-12 h-48`}>
            <div
              className={ribbonPositions[1].ribbonClass + ' ' + colors[selectedColor].bg + ' transition-transform'}
              style={{ transform: 'rotate(45deg) skewY(-10deg)' }}
            >
              ROTATED
            </div>
            <div className="flex items-center justify-center h-full">
              <img
                src={`https://picsum.photos/150/150?random=${Math.random()}`}
                alt="Random"
                className="rounded-full w-24 h-24 object-cover"
              />
            </div>
          </div>

          {/* Shadow Effect */}
          <div
            className={`${ribbonPositions[0].containerClass} backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-12 h-48`}
          >
            <div className={ribbonPositions[0].ribbonClass + ' ' + colors[selectedColor].bg + ' shadow-2xl'}>
              SHADOW
            </div>
            <div className="flex items-center justify-center h-full">
              <img
                src={`https://picsum.photos/150/150?random=${Math.random()}`}
                alt="Random"
                className="rounded-full w-24 h-24 object-cover"
              />
            </div>
          </div>

          {/* Outline */}
          <div className={`${ribbonPositions[2].containerClass} backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-12 h-48`}>
            <div
              className={ribbonPositions[2].ribbonClass}
              style={{
                background: 'transparent',
                WebkitTextStroke: '2px white',
                color: colors[selectedColor].text,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              OUTLINE
            </div>
            <div className="flex items-center justify-center h-full">
              <img
                src={`https://picsum.photos/150/150?random=${Math.random()}`}
                alt="Random"
                className="rounded-full w-24 h-24 object-cover"
              />
            </div>
          </div>

          {/* Gradient */}
          <div className={`${ribbonPositions[3].containerClass} backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-12 h-48`}>
            <div
              className={ribbonPositions[3].ribbonClass}
              style={{
                background: 'linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              GRADIENT
            </div>
            <div className="flex items-center justify-center h-full">
              <img
                src={`https://picsum.photos/150/150?random=${Math.random()}`}
                alt="Random"
                className="rounded-full w-24 h-24 object-cover"
              />
            </div>
          </div>

          {/* Double Ribbon */}
          <div className={`${ribbonPositions[0].containerClass} backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-12 h-48`}>
            <div className={ribbonPositions[0].ribbonClass + ' ' + colors[selectedColor].bg}>
              DOUBLE
            </div>
            <div className={ribbonPositions[3].ribbonClass + ' ' + colors[selectedColor].bg}>
              RIBBON
            </div>
            <div className="flex items-center justify-center h-full">
              <img
                src={`https://picsum.photos/150/150?random=${Math.random()}`}
                alt="Random"
                className="rounded-full w-24 h-24 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Position Showcase */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">All Positions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ribbonPositions.map((position, idx) => (
            <div
              key={position.id}
              className={`${position.containerClass} backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-8 min-h-40`}
            >
              <div className={position.ribbonClass + ' ' + colors[selectedColor].bg}>
                {position.label.toUpperCase()}
              </div>

              {/* Content */}
              <div className="flex flex-col items-center justify-center gap-4 py-8">
                <img
                  src={`https://picsum.photos/120/120?random=${idx}`}
                  alt={position.label}
                  className="rounded-2xl w-20 h-20 object-cover"
                />
                <p className="text-sm font-semibold text-slate-700">{position.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Depth & Shadow Effects */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Depth & Shadow Effects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['No Shadow', 'Soft Shadow', 'Medium Shadow', 'Hard Shadow', 'Inner Shadow', 'Layered Shadow'].map(
            (shadowType, idx) => (
              <div
                key={shadowType}
                className={`relative overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-8 min-h-40 flex items-center justify-center`}
                style={{
                  boxShadow:
                    shadowType === 'No Shadow'
                      ? 'none'
                      : shadowType === 'Soft Shadow'
                        ? '0 10px 30px rgba(0,0,0,0.1)'
                        : shadowType === 'Medium Shadow'
                          ? '0 15px 40px rgba(0,0,0,0.2)'
                          : shadowType === 'Hard Shadow'
                            ? '0 20px 50px rgba(0,0,0,0.35)'
                            : shadowType === 'Inner Shadow'
                              ? 'inset 0 10px 20px rgba(0,0,0,0.1)'
                              : '0 5px 15px rgba(0,0,0,0.15), 0 10px 30px rgba(0,0,0,0.1)',
                }}
              >
                <div className={`absolute -top-6 -left-12 w-40 py-2 text-center text-white font-bold text-sm transform -rotate-45 ${colors[selectedColor].bg}`}>
                  {shadowType}
                </div>

                <div className="text-center pt-4">
                  <p className="text-sm font-semibold text-slate-700">{shadowType}</p>
                  <p className="text-xs text-slate-500 mt-2">Depth effect showcase</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedRibbons;
