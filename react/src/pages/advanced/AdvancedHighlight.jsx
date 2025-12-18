import React, { useState } from 'react';
import { Copy, Check, Sun, Moon, Copy as CopyIcon } from 'lucide-react';

const AdvancedHighlight = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const codeSamples = [
    {
      id: 'javascript',
      name: 'JavaScript',
      lang: 'js',
      code: `const greeting = (name) => {
  return \`Hello, \${name}!\`;
};

console.log(greeting('React'));`,
    },
    {
      id: 'html',
      name: 'HTML',
      lang: 'html',
      code: `<div class="container">
  <h1>Welcome</h1>
  <p>This is a sample HTML code.</p>
</div>`,
    },
    {
      id: 'css',
      name: 'CSS',
      lang: 'css',
      code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}`,
    },
    {
      id: 'json',
      name: 'JSON',
      lang: 'json',
      code: `{
  "name": "React App",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.0.0"
  }
}`,
    },
    {
      id: 'python',
      name: 'Python',
      lang: 'python',
      code: `def greet(name):
    return f"Hello, {name}!"

print(greet("Python"))`,
    },
  ];

  const currentSample = codeSamples.find((s) => s.id === selectedLanguage);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSample.code);
    setCopiedId(selectedLanguage);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getLineNumbers = () => {
    return currentSample.code.split('\n').length;
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 -m-6 p-6 ${
      isDarkTheme
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className={`text-3xl font-bold mb-2 ${isDarkTheme ? 'text-white' : 'text-slate-900'}`}>
            Code Highlighting
          </h1>
          <div className={`flex gap-2 text-sm ${isDarkTheme ? 'text-slate-400' : 'text-slate-600'}`}>
            <span className="hover:text-indigo-400 cursor-pointer">Dashboard</span>
            <span>/</span>
            <span className="hover:text-indigo-400 cursor-pointer">Advanced</span>
            <span>/</span>
            <span className={`font-medium ${isDarkTheme ? 'text-indigo-400' : 'text-indigo-600'}`}>Highlight</span>
          </div>
        </div>
        <button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className="rounded-2xl border border-white/50 hover:scale-105 transition-all duration-300 p-3 bg-gradient-to-br from-indigo-50 to-blue-50 hover:shadow-lg"
        >
          {isDarkTheme ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-slate-600" />}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Language Selector */}
        <div className={`backdrop-blur-2xl bg-gradient-to-br ${
          isDarkTheme ? 'from-slate-800/90 to-slate-800/50' : 'from-white/90 to-white/50'
        } rounded-3xl border border-white/60 shadow-xl p-6`}>
          <h3 className={`font-bold mb-4 ${isDarkTheme ? 'text-white' : 'text-slate-900'}`}>Languages</h3>
          <div className="space-y-2">
            {codeSamples.map((sample) => (
              <button
                key={sample.id}
                onClick={() => setSelectedLanguage(sample.id)}
                className={`w-full rounded-2xl border transition-all duration-300 p-3 text-left font-medium ${
                  selectedLanguage === sample.id
                    ? 'border-indigo-300 bg-gradient-to-r from-indigo-100 to-purple-100 text-slate-900 shadow-lg'
                    : isDarkTheme
                    ? 'border-white/20 bg-slate-700/50 text-slate-200 hover:border-indigo-400'
                    : 'border-white/50 hover:border-indigo-300 text-slate-600 hover:bg-indigo-50/50'
                }`}
              >
                {sample.name}
              </button>
            ))}
          </div>
        </div>

        {/* Code Display */}
        <div className="lg:col-span-3">
          {/* Toolbar */}
          <div className={`backdrop-blur-2xl bg-gradient-to-br ${
            isDarkTheme ? 'from-slate-800/90 to-slate-800/50' : 'from-white/90 to-white/50'
          } rounded-3xl border border-white/60 shadow-xl p-4 mb-4 flex items-center justify-between`}>
            <div>
              <p className={`font-semibold ${isDarkTheme ? 'text-white' : 'text-slate-900'}`}>
                {currentSample.name}
              </p>
              <p className={`text-xs ${isDarkTheme ? 'text-slate-400' : 'text-slate-500'}`}>
                {currentSample.lang.toUpperCase()} • {getLineNumbers()} lines
              </p>
            </div>
            <button
              onClick={handleCopy}
              className="rounded-2xl border border-white/50 hover:scale-105 transition-all duration-300 p-2 bg-gradient-to-br from-indigo-50 to-blue-50 hover:shadow-lg"
            >
              {copiedId === selectedLanguage ? (
                <Check size={18} className="text-emerald-500" />
              ) : (
                <CopyIcon size={18} className="text-slate-600" />
              )}
            </button>
          </div>

          {/* Code Block */}
          <div className={`backdrop-blur-2xl bg-gradient-to-br ${
            isDarkTheme ? 'from-slate-900/90 to-slate-900/50' : 'from-white/90 to-white/50'
          } rounded-3xl border border-white/60 shadow-xl p-6 overflow-x-auto`}>
            <pre className="flex">
              {/* Line Numbers */}
              <div className={`mr-4 pr-4 border-r ${isDarkTheme ? 'border-slate-600 text-slate-500' : 'border-slate-200 text-slate-400'}`}>
                {Array.from({ length: getLineNumbers() }).map((_, i) => (
                  <div key={i} className="font-mono text-sm">
                    {i + 1}
                  </div>
                ))}
              </div>

              {/* Code */}
              <code className={`font-mono text-sm ${isDarkTheme ? 'text-slate-200' : 'text-slate-800'}`}>
                {currentSample.code}
              </code>
            </pre>
          </div>

          {/* Theme Info */}
          {copiedId === selectedLanguage && (
            <div className={`mt-4 backdrop-blur-2xl bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-200 p-3 flex items-center gap-2`}>
              <Check size={18} className="text-emerald-600" />
              <span className="text-sm text-emerald-700">Code copied to clipboard!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedHighlight;
