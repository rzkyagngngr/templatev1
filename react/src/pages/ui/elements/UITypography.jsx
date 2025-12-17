import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export default function UITypography() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold =">Typography</h1>
          <nav className="flex items-center space-x-2 text-gray-400">
            <Home className="w-5 h-5" />
            <ChevronRight className="w-4 h-4" />
            <span>UI Kit</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">Typography</span>
          </nav>
        </div>
      </div>

      {/* Typography Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Headings */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Headings</h3>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-black">Heading 1</h1>
            <h2 className="text-3xl font-bold text-black">Heading 2</h2>
            <h3 className="text-2xl font-bold text-black">Heading 3</h3>
            <h4 className="text-xl font-bold text-black">Heading 4</h4>
            <h5 className="text-lg font-bold text-black">Heading 5</h5>
            <h6 className="text-base font-bold text-black">Heading 6</h6>
          </div>
        </div>

        {/* Font Weights */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Font Weights</h3>
          <div className="space-y-2">
            <p className="text-black font-thin">Thin Text - 100</p>
            <p className="text-black font-light">Light Text - 300</p>
            <p className="text-black font-normal">Normal Text - 400</p>
            <p className="text-black font-medium">Medium Text - 500</p>
            <p className="text-black font-semibold">Semibold Text - 600</p>
            <p className="text-black font-bold">Bold Text - 700</p>
            <p className="text-black font-extrabold">Extra Bold Text - 800</p>
          </div>
        </div>

        {/* Font Sizes */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Font Sizes</h3>
          <div className="space-y-2">
            <p className="text-xs text-black">Extra Small - 12px</p>
            <p className="text-sm text-black">Small - 14px</p>
            <p className="text-base text-black">Base - 16px</p>
            <p className="text-lg text-black">Large - 18px</p>
            <p className="text-xl text-black">Extra Large - 20px</p>
            <p className="text-2xl text-black">2XL - 24px</p>
            <p className="text-3xl text-black">3XL - 30px</p>
          </div>
        </div>

        {/* Text Styles */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Text Styles</h3>
          <div className="space-y-2">
            <p className="text-black italic">Italic Text</p>
            <p className="text-black underline">Underlined Text</p>
            <p className="text-black line-through">Strikethrough Text</p>
            <p className="text-black uppercase">uppercase text</p>
            <p className="text-black lowercase">LOWERCASE TEXT</p>
            <p className="text-black capitalize">capitalize text</p>
          </div>
        </div>

        {/* Text Colors */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Text Colors</h3>
          <div className="space-y-2">
            <p className="text-black">Black Text</p>
            <p className="text-gray-600">Gray Text</p>
            <p className="text-blue-600">Blue Text</p>
            <p className="text-green-600">Green Text</p>
            <p className="text-red-600">Red Text</p>
            <p className="text-yellow-600">Yellow Text</p>
            <p className="text-purple-600">Purple Text</p>
          </div>
        </div>

        {/* Text Alignment */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Text Alignment</h3>
          <div className="space-y-3">
            <p className="text-left text-black">Left Aligned Text</p>
            <p className="text-center text-black">Center Aligned Text</p>
            <p className="text-right text-black">Right Aligned Text</p>
            <p className="text-justify text-black">Justified text that spans multiple lines to demonstrate text justification alignment.</p>
          </div>
        </div>

        {/* Lists */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Text Overflow</h3>
          <div className="space-y-3">
            <p className="text-black truncate">This is a very long text that will be truncated with ellipsis at the end of the line</p>
            <p className="text-black line-clamp-2">This is a very long text that spans multiple lines and will be clamped to show only two lines with ellipsis at the end of the last line</p>
          </div>
        </div>

        {/* Quotes & Emphasis */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Quotes & Emphasis</h3>
          <div className="space-y-3">
            <blockquote className="border-l-4 border-blue-600 pl-4 text-black italic">
              "This is a blockquote with emphasis on important content."
            </blockquote>
            <p className="text-black"><mark className="bg-yellow-200">Highlighted text</mark> for emphasis</p>
            <p className="text-black"><code className="bg-gray-200 px-2 py-1 rounded text-sm">code snippet</code></p>
          </div>
        </div>

        {/* Line Height */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Line Height</h3>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-black font-semibold mb-1">Tight (1)</p>
              <p className="text-black leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <p className="text-xs text-black font-semibold mb-1">Normal (1.5)</p>
              <p className="text-black leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <p className="text-xs text-black font-semibold mb-1">Relaxed (2)</p>
              <p className="text-black leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>

        {/* Letter Spacing */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Letter Spacing</h3>
          <div className="space-y-3">
            <p className="text-black tracking-tight">Tight Letter Spacing</p>
            <p className="text-black tracking-normal">Normal Letter Spacing</p>
            <p className="text-black tracking-wide">Wide Letter Spacing</p>
            <p className="text-black tracking-wider">Wider Letter Spacing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
