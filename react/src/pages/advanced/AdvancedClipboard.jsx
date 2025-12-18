import React, { useState } from 'react';
import { Copy, Check, Trash2, Code, Mail, Link2 } from 'lucide-react';

const AdvancedClipboard = () => {
  const [history, setHistory] = useState([]);
  const [copied, setCopied] = useState(null);

  const copyScenarios = [
    {
      id: 'text',
      name: 'Text',
      icon: Code,
      content: 'Hello World! This is plain text copy.',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      id: 'json',
      name: 'JSON',
      icon: Code,
      content: JSON.stringify({ name: 'John', age: 30, city: 'New York' }, null, 2),
      color: 'from-purple-400 to-pink-400',
    },
    {
      id: 'code',
      name: 'Code',
      icon: Code,
      content: `const greeting = () => {
  return "Hello, React!";
};`,
      color: 'from-emerald-400 to-green-400',
    },
    {
      id: 'url',
      name: 'URL',
      icon: Link2,
      content: 'https://example.com/api/v1/users?id=123',
      color: 'from-orange-400 to-red-400',
    },
    {
      id: 'email',
      name: 'Email',
      icon: Mail,
      content: 'contact@example.com, support@example.com',
      color: 'from-indigo-400 to-blue-400',
    },
    {
      id: 'custom',
      name: 'Custom',
      icon: Code,
      content: 'npm install react-copy-to-clipboard@latest',
      color: 'from-yellow-400 to-orange-400',
    },
  ];

  const handleCopy = (content, id) => {
    navigator.clipboard.writeText(content);
    setCopied(id);
    const newEntry = { id: Date.now(), content, scenario: id };
    setHistory([newEntry, ...history.slice(0, 4)]);
    setTimeout(() => setCopied(null), 2000);
  };

  const clearHistory = () => setHistory([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Advanced Clipboard</h1>
        <div className="flex gap-2 text-sm text-slate-600">
          <span className="hover:text-indigo-600 cursor-pointer">Dashboard</span>
          <span>/</span>
          <span className="hover:text-indigo-600 cursor-pointer">Advanced</span>
          <span>/</span>
          <span className="text-indigo-600 font-medium">Clipboard</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Copy Scenarios */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Copy Scenarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {copyScenarios.map((scenario) => {
              const Icon = scenario.icon;
              return (
                <div
                  key={scenario.id}
                  className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 p-5 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${scenario.color} text-white`}>
                      <Icon size={20} />
                    </div>
                    <button
                      onClick={() => handleCopy(scenario.content, scenario.id)}
                      className="rounded-2xl border border-white/50 hover:scale-105 transition-all duration-300 p-2 bg-gradient-to-br from-indigo-50 to-blue-50 hover:shadow-lg"
                    >
                      {copied === scenario.id ? (
                        <Check size={18} className="text-emerald-500" />
                      ) : (
                        <Copy size={18} className="text-slate-600" />
                      )}
                    </button>
                  </div>

                  <h3 className="font-semibold text-slate-900 mb-2">{scenario.name}</h3>
                  <pre className="text-xs bg-slate-50/50 rounded-lg p-3 overflow-x-auto text-slate-600 max-h-24">
                    {scenario.content}
                  </pre>

                  <div className="mt-3 text-xs text-slate-500">
                    {copied === scenario.id && (
                      <span className="text-emerald-500 font-medium">✓ Copied!</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Copy History */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-900">Copy History</h2>
            {history.length > 0 && (
              <button
                onClick={clearHistory}
                className="rounded-2xl border border-white/50 hover:scale-105 transition-all duration-300 p-2 bg-gradient-to-br from-red-50 to-rose-50 hover:shadow-lg"
              >
                <Trash2 size={16} className="text-red-500" />
              </button>
            )}
          </div>

          <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-4 space-y-2 max-h-96 overflow-y-auto">
            {history.length === 0 ? (
              <div className="text-center py-8 text-slate-500">
                <Copy size={32} className="mx-auto mb-2 opacity-30" />
                <p className="text-sm">No copy history yet</p>
              </div>
            ) : (
              history.map((entry, idx) => (
                <div key={entry.id} className="p-3 bg-slate-50/50 rounded-xl">
                  <p className="text-xs text-slate-500 mb-1">#{idx + 1}</p>
                  <p className="text-xs text-slate-700 font-mono truncate">{entry.content.substring(0, 40)}...</p>
                  <p className="text-xs text-slate-400 mt-1">{entry.scenario}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedClipboard;
