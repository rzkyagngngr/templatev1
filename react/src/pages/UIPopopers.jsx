import React, { useState } from 'react';
import { Info, AlertCircle, HelpCircle, Heart, Star, MessageSquare } from 'lucide-react';

export default function UIPopopers() {
  const [tooltips, setTooltips] = useState({
    basicTop: false,
    basicBottom: false,
    basicLeft: false,
    basicRight: false,
    withIcon: false,
    customContent: false,
    popover1: false,
    popover2: false,
    richPopover: false,
    positioning: false,
    hover: false,
    click: false,
  });

  const toggleTooltip = (name) => {
    setTooltips(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const Tooltip = ({ children, content, position = 'top', isOpen }) => {
    const positionClasses = {
      top: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
      bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
      left: 'right-full mr-2 top-1/2 -translate-y-1/2',
      right: 'left-full ml-2 top-1/2 -translate-y-1/2',
    };

    return (
      <div className="relative inline-block">
        {children}
        {isOpen && (
          <div className={`absolute ${positionClasses[position]} backdrop-blur-xl bg-gradient-to-br from-gray-900/95 to-gray-800/95 text-white px-3 py-2 rounded-xl whitespace-nowrap text-sm shadow-xl z-20`}>
            {content}
          </div>
        )}
      </div>
    );
  };

  const Popover = ({ isOpen, content, title }) => {
    if (!isOpen) return null;
    return (
      <div className="absolute top-full mt-2 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-blue-200/40 p-4 w-64 z-20">
        {title && <h3 className="font-bold text-gray-800 mb-2">{title}</h3>}
        <p className="text-gray-600 text-sm">{content}</p>
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
          <span className="text-sm text-blue-600 font-medium">Popovers</span>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Tooltips & Popovers
        </h1>
        <p className="text-gray-600">Beautiful tooltip and popover components</p>
      </div>

      {/* Basic Tooltips */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Basic Tooltips</h2>
        <p className="text-gray-600 mb-6">Simple hover tooltips on elements</p>
        <div className="flex gap-4 flex-wrap">
          <Tooltip content="Top tooltip" position="top" isOpen={tooltips.basicTop}>
            <button
              onMouseEnter={() => toggleTooltip('basicTop')}
              onMouseLeave={() => toggleTooltip('basicTop')}
              className="backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-blue-300/50 rounded-2xl border border-white/50 px-6 py-3 transition-all hover:scale-105 shadow-blue-200/40 font-medium text-blue-700"
            >
              Top
            </button>
          </Tooltip>

          <Tooltip content="Bottom tooltip" position="bottom" isOpen={tooltips.basicBottom}>
            <button
              onMouseEnter={() => toggleTooltip('basicBottom')}
              onMouseLeave={() => toggleTooltip('basicBottom')}
              className="backdrop-blur-xl bg-gradient-to-br from-purple-400/50 to-purple-300/50 rounded-2xl border border-white/50 px-6 py-3 transition-all hover:scale-105 shadow-purple-200/40 font-medium text-purple-700"
            >
              Bottom
            </button>
          </Tooltip>

          <Tooltip content="Left tooltip" position="left" isOpen={tooltips.basicLeft}>
            <button
              onMouseEnter={() => toggleTooltip('basicLeft')}
              onMouseLeave={() => toggleTooltip('basicLeft')}
              className="backdrop-blur-xl bg-gradient-to-br from-green-400/50 to-green-300/50 rounded-2xl border border-white/50 px-6 py-3 transition-all hover:scale-105 shadow-green-200/40 font-medium text-green-700"
            >
              Left
            </button>
          </Tooltip>

          <Tooltip content="Right tooltip" position="right" isOpen={tooltips.basicRight}>
            <button
              onMouseEnter={() => toggleTooltip('basicRight')}
              onMouseLeave={() => toggleTooltip('basicRight')}
              className="backdrop-blur-xl bg-gradient-to-br from-pink-400/50 to-pink-300/50 rounded-2xl border border-white/50 px-6 py-3 transition-all hover:scale-105 shadow-pink-200/40 font-medium text-pink-700"
            >
              Right
            </button>
          </Tooltip>
        </div>
      </div>

      {/* Tooltips with Icons */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tooltips with Icons</h2>
        <p className="text-gray-600 mb-6">Icons with descriptive tooltips</p>
        <div className="flex gap-6 flex-wrap">
          <Tooltip content="Information" position="top" isOpen={tooltips.withIcon}>
            <button
              onMouseEnter={() => toggleTooltip('withIcon')}
              onMouseLeave={() => toggleTooltip('withIcon')}
              className="p-3 backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-blue-300/50 rounded-full transition-all hover:scale-110 shadow-blue-200/40 text-blue-600"
            >
              <Info size={24} />
            </button>
          </Tooltip>

          <Tooltip content="Warning" position="top" isOpen={tooltips.customContent}>
            <button
              onMouseEnter={() => toggleTooltip('customContent')}
              onMouseLeave={() => toggleTooltip('customContent')}
              className="p-3 backdrop-blur-xl bg-gradient-to-br from-yellow-400/50 to-yellow-300/50 rounded-full transition-all hover:scale-110 shadow-yellow-200/40 text-yellow-600"
            >
              <AlertCircle size={24} />
            </button>
          </Tooltip>

          <button className="p-3 backdrop-blur-xl bg-gradient-to-br from-red-400/50 to-red-300/50 rounded-full transition-all hover:scale-110 shadow-red-200/40 text-red-600 group relative">
            <Heart size={24} />
            <div className="invisible group-hover:visible absolute top-full mt-2 backdrop-blur-xl bg-red-900/95 text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap shadow-xl">
              Like this
            </div>
          </button>

          <button className="p-3 backdrop-blur-xl bg-gradient-to-br from-purple-400/50 to-purple-300/50 rounded-full transition-all hover:scale-110 shadow-purple-200/40 text-purple-600 group relative">
            <HelpCircle size={24} />
            <div className="invisible group-hover:visible absolute top-full mt-2 backdrop-blur-xl bg-purple-900/95 text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap shadow-xl">
              Get help
            </div>
          </button>
        </div>
      </div>

      {/* Tooltips with Custom Content */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tooltips with Custom Content</h2>
        <p className="text-gray-600 mb-6">Rich content tooltips</p>
        <button className="backdrop-blur-xl bg-gradient-to-br from-indigo-400/50 to-indigo-300/50 rounded-2xl border border-white/50 px-6 py-3 transition-all hover:scale-105 shadow-indigo-200/40 font-medium text-indigo-700 group relative">
          Hover for details
          <div className="invisible group-hover:visible absolute top-full mt-2 left-1/2 -translate-x-1/2 backdrop-blur-xl bg-gradient-to-br from-indigo-900/95 to-indigo-800/95 text-white px-4 py-3 rounded-xl shadow-xl w-48 z-20">
            <p className="font-semibold mb-1">Tooltip Title</p>
            <p className="text-sm">This is a more detailed tooltip with custom content and formatting.</p>
          </div>
        </button>
      </div>

      {/* Popover Boxes */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Popover Boxes</h2>
        <p className="text-gray-600 mb-6">Interactive popover components</p>
        <div className="relative inline-block">
          <button
            onClick={() => toggleTooltip('popover1')}
            className="backdrop-blur-xl bg-gradient-to-br from-cyan-400/50 to-cyan-300/50 rounded-2xl border border-white/50 px-6 py-3 transition-all hover:scale-105 shadow-cyan-200/40 font-medium text-cyan-700"
          >
            Click for Popover
          </button>
          <Popover
            isOpen={tooltips.popover1}
            title="Information"
            content="This is a popover that displays additional information. Click outside to dismiss."
          />
        </div>
      </div>

      {/* Rich Popovers with Images */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Rich Popovers with Images</h2>
        <p className="text-gray-600 mb-6">Popovers with media content</p>
        <div className="relative inline-block">
          <button
            onClick={() => toggleTooltip('richPopover')}
            className="backdrop-blur-xl bg-gradient-to-br from-teal-400/50 to-teal-300/50 rounded-2xl border border-white/50 px-6 py-3 transition-all hover:scale-105 shadow-teal-200/40 font-medium text-teal-700"
          >
            Media Popover
          </button>
          {tooltips.richPopover && (
            <div className="absolute top-full mt-2 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-teal-200/40 p-0 w-72 z-20 overflow-hidden">
              <img
                src="https://picsum.photos/300/200?random=1"
                alt="Popover"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-2">Featured Item</h3>
                <p className="text-gray-600 text-sm">This popover contains an image and additional information.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Popover Positioning */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Popover Positioning</h2>
        <p className="text-gray-600 mb-6">Popovers positioned in different directions</p>
        <div className="grid grid-cols-2 gap-8">
          {/* Top Position */}
          <div className="relative">
            <button
              onClick={() => toggleTooltip('positioning')}
              className="backdrop-blur-xl bg-gradient-to-br from-orange-400/50 to-orange-300/50 rounded-2xl border border-white/50 px-4 py-2 transition-all hover:scale-105 shadow-orange-200/40 font-medium text-orange-700 text-sm"
            >
              Top
            </button>
            {tooltips.positioning && (
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-orange-200/40 p-3 w-56">
                <p className="text-gray-700 text-sm">Popover positioned on top</p>
              </div>
            )}
          </div>

          {/* Right Position */}
          <div className="relative">
            <button
              onClick={() => toggleTooltip('positioning')}
              className="backdrop-blur-xl bg-gradient-to-br from-orange-400/50 to-orange-300/50 rounded-2xl border border-white/50 px-4 py-2 transition-all hover:scale-105 shadow-orange-200/40 font-medium text-orange-700 text-sm"
            >
              Right
            </button>
            {tooltips.positioning && (
              <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-orange-200/40 p-3 w-56">
                <p className="text-gray-700 text-sm">Popover positioned on right</p>
              </div>
            )}
          </div>

          {/* Bottom Position */}
          <div className="relative">
            <button
              onClick={() => toggleTooltip('positioning')}
              className="backdrop-blur-xl bg-gradient-to-br from-orange-400/50 to-orange-300/50 rounded-2xl border border-white/50 px-4 py-2 transition-all hover:scale-105 shadow-orange-200/40 font-medium text-orange-700 text-sm"
            >
              Bottom
            </button>
            {tooltips.positioning && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-orange-200/40 p-3 w-56">
                <p className="text-gray-700 text-sm">Popover positioned on bottom</p>
              </div>
            )}
          </div>

          {/* Left Position */}
          <div className="relative">
            <button
              onClick={() => toggleTooltip('positioning')}
              className="backdrop-blur-xl bg-gradient-to-br from-orange-400/50 to-orange-300/50 rounded-2xl border border-white/50 px-4 py-2 transition-all hover:scale-105 shadow-orange-200/40 font-medium text-orange-700 text-sm"
            >
              Left
            </button>
            {tooltips.positioning && (
              <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-orange-200/40 p-3 w-56">
                <p className="text-gray-700 text-sm">Popover positioned on left</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hover-triggered Popovers */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Hover-Triggered Popovers</h2>
        <p className="text-gray-600 mb-6">Popovers that appear on hover</p>
        <button
          onMouseEnter={() => toggleTooltip('hover')}
          onMouseLeave={() => toggleTooltip('hover')}
          className="backdrop-blur-xl bg-gradient-to-br from-red-400/50 to-red-300/50 rounded-2xl border border-white/50 px-6 py-3 transition-all hover:scale-105 shadow-red-200/40 font-medium text-red-700 relative"
        >
          Hover over me
          {tooltips.hover && (
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-red-200/40 p-4 w-56 z-20">
              <p className="text-gray-800 font-semibold mb-1">Hover Content</p>
              <p className="text-gray-600 text-sm">This popover appears when you hover over the button.</p>
            </div>
          )}
        </button>
      </div>

      {/* Click-triggered Popovers */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Click-Triggered Popovers</h2>
        <p className="text-gray-600 mb-6">Popovers that appear on click</p>
        <div className="relative inline-block">
          <button
            onClick={() => toggleTooltip('click')}
            className="backdrop-blur-xl bg-gradient-to-br from-green-400/50 to-green-300/50 rounded-2xl border border-white/50 px-6 py-3 transition-all hover:scale-105 shadow-green-200/40 font-medium text-green-700"
          >
            Click for Popover
          </button>
          {tooltips.click && (
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-2xl border border-white/60 shadow-xl shadow-green-200/40 p-4 w-56 z-20">
              <div className="flex items-start gap-3">
                <Star className="text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-800 font-semibold mb-1">Click Popover</p>
                  <p className="text-gray-600 text-sm">This popover appears when clicked and persists until you click elsewhere.</p>
                </div>
              </div>
              <button
                onClick={() => toggleTooltip('click')}
                className="mt-3 w-full backdrop-blur-xl bg-gradient-to-br from-gray-400/50 to-gray-300/50 rounded-xl border border-white/50 px-3 py-2 text-gray-700 text-sm font-medium transition-all hover:scale-105"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
