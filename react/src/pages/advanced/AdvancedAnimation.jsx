import React, { useState } from 'react';
export default function AdvancedAnimation() {
    const [animate, setAnimate] = useState(false);
    return (<div className="w-full space-y-6"><div><h4 className="text-xl font-bold text-slate-900 tracking-wide">Advanced Animations</h4><div className="text-sm text-slate-700 mt-1"><span>Glacia</span><span className="mx-2">/</span><span>Advanced</span><span className="mx-2">/</span><span className="text-slate-900">Animations</span></div></div><div className="glass-card p-8"><div className="flex items-center justify-center gap-8"><div className={`w-20 h-20 bg-primary rounded-lg transition-all duration-700 ${animate ? 'rotate-180 scale-110' : ''}`}></div><button onClick={() => setAnimate(!animate)} className="px-6 py-2.5 bg-primary hover:bg-primary/90 rounded-lg text-slate-900 font-medium">Animate</button></div></div></div>);
}
