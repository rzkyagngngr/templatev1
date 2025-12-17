import React, { useState } from 'react';

export default function FormEditors() {
  const [htmlContent, setHtmlContent] = useState('<p>Enter your HTML content here...</p>');
  const [markdownContent, setMarkdownContent] = useState('# Enter Markdown\n\nStart typing...');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Form Editors</h1>
        <nav className="text-sm text-gray-600">
          <span>UI / </span>
          <span>Forms / </span>
          <span className="text-gray-900 font-medium">Editors</span>
        </nav>
      </div>

      {/* Code Editor */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Code Editor</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-black mb-2">HTML Editor</label>
            <textarea
              value={htmlContent}
              onChange={(e) => setHtmlContent(e.target.value)}
              className="w-full h-48 px-4 py-2 border border-gray-300 rounded-lg text-black font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">Preview</label>
            <div className="w-full h-48 px-4 py-2 border border-gray-300 rounded-lg bg-white overflow-auto text-black">
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
          </div>
        </div>
      </div>

      {/* Markdown Editor */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 mb-6 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Markdown Editor</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-black mb-2">Markdown Input</label>
            <textarea
              value={markdownContent}
              onChange={(e) => setMarkdownContent(e.target.value)}
              className="w-full h-48 px-4 py-2 border border-gray-300 rounded-lg text-black font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">Output</label>
            <div className="w-full h-48 px-4 py-2 border border-gray-300 rounded-lg bg-white overflow-auto text-black text-sm">
              {markdownContent.split('\n').map((line, idx) => (
                <div key={idx} className={line.startsWith('#') ? 'font-bold text-lg' : ''}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rich Text Editor Simulation */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Rich Text Formatting</h2>
        <div className="mb-4 border border-gray-300 rounded-lg p-2 bg-gray-50 flex flex-wrap gap-2">
          <button className="px-3 py-1 bg-white border border-gray-300 rounded text-black text-sm hover:bg-gray-100">
            <strong>Bold</strong>
          </button>
          <button className="px-3 py-1 bg-white border border-gray-300 rounded text-black text-sm hover:bg-gray-100">
            <em>Italic</em>
          </button>
          <button className="px-3 py-1 bg-white border border-gray-300 rounded text-black text-sm hover:bg-gray-100">
            UÌ²nÌ²dÌ²eÌ²rÌ²lÌ²iÌ²nÌ²eÌ²
          </button>
          <div className="border-l border-gray-300"></div>
          <button className="px-3 py-1 bg-white border border-gray-300 rounded text-black text-sm hover:bg-gray-100">
            H1
          </button>
          <button className="px-3 py-1 bg-white border border-gray-300 rounded text-black text-sm hover:bg-gray-100">
            H2
          </button>
          <button className="px-3 py-1 bg-white border border-gray-300 rounded text-black text-sm hover:bg-gray-100">
            H3
          </button>
          <div className="border-l border-gray-300"></div>
          <button className="px-3 py-1 bg-white border border-gray-300 rounded text-black text-sm hover:bg-gray-100">
            â€¢ List
          </button>
          <button className="px-3 py-1 bg-white border border-gray-300 rounded text-black text-sm hover:bg-gray-100">
            1. Ordered
          </button>
        </div>
        <textarea
          className="w-full h-40 px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Start typing your formatted content..."
        />
      </div>
    </div>
  );
}
