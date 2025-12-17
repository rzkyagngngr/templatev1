import React, { useState } from 'react';
import { ChevronRight, Copy, Check } from 'lucide-react';

export default function AdvancedClipboard() {
  const [copied, setCopied] = useState(null);

  const clipboardExamples = [
    { title: 'Simple Copy', code: 'npm install' },
    { title: 'Copy Command', code: 'git commit -m "your message"' },
    { title: 'API Endpoint', code: 'https://api.example.com/v1/users' },
    { title: 'JSON Data', code: '{"status": "success", "code": 200}' },
    { title: 'Configuration', code: 'NEXT_PUBLIC_API_URL=https://api.example.com' },
  ];

  const copyToClipboard = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopied(idx);
    setTimeout(() => setCopied(null), 2000);
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
          <span className="text-gray-900 font-semibold">Clipboard</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Advanced Clipboard</h1>
      </div>

      {/* Examples */}
      <div className="grid gap-4">
        {clipboardExamples.map((example, idx) => (
          <div key={idx} className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">{example.title}</h3>
            <div className="flex items-center justify-between bg-white/50 p-3 rounded border border-gray-300">
              <code className="text-sm text-gray-900 font-mono">{example.code}</code>
              <button
                onClick={() => copyToClipboard(example.code, idx)}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                {copied === idx ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
