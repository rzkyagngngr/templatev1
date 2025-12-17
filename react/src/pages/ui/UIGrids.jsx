import React from 'react';
export default function UIGrids() {
    return (<div className="w-full space-y-6"><div><h4 className="text-xl font-bold text-slate-900 tracking-wide">Grid System</h4><div className="text-sm text-slate-700 mt-1"><span>Glacia</span><span className="mx-2">/</span><span>UI</span><span className="mx-2">/</span><span className="text-slate-900">Grids</span></div></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><div className="glass-card p-6"><h5 className="text-slate-900 font-semibold">Grid Item 1</h5></div><div className="glass-card p-6"><h5 className="text-slate-900 font-semibold">Grid Item 2</h5></div><div className="glass-card p-6"><h5 className="text-slate-900 font-semibold">Grid Item 3</h5></div></div></div>);
}
