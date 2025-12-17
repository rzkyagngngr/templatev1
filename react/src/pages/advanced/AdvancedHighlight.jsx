import React from 'react';
export default function AdvancedHighlight() {
    return (<div className="w-full space-y-6"><div><h4 className="text-xl font-bold text-slate-900 tracking-wide">Code Highlighting</h4><div className="text-sm text-slate-700 mt-1"><span>Glacia</span><span className="mx-2">/</span><span>Advanced</span><span className="mx-2">/</span><span className="text-slate-900">Highlight</span></div></div><div className="glass-card p-6"><pre className="bg-white/5 rounded p-4 overflow-x-auto"><code className="text-emerald-600 text-sm">{`function hello() {
  console.log('Hello World');
}`}</code></pre></div></div>);
}
