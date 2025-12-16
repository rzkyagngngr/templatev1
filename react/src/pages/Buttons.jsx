import React from 'react';

export default function Buttons() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-textPrimary">UI Buttons</h1>

            <div className="glass-card p-6 space-y-6">
                <div>
                    <h3 className="font-bold text-textPrimary mb-4">Solid Buttons</h3>
                    <div className="flex flex-wrap gap-3">
                        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition shadow-lg shadow-primary/30">Primary</button>
                        <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition shadow-lg shadow-emerald-500/30">Success</button>
                        <button className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition shadow-lg shadow-rose-500/30">Danger</button>
                        <button className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition shadow-lg shadow-amber-500/30">Warning</button>
                        <button className="px-4 py-2 bg-slate-500 text-white rounded-lg hover:bg-slate-600 transition shadow-lg shadow-slate-500/30">Secondary</button>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-textPrimary mb-4">Outline Buttons</h3>
                    <div className="flex flex-wrap gap-3">
                        <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition">Primary</button>
                        <button className="px-4 py-2 border border-emerald-500 text-emerald-500 rounded-lg hover:bg-emerald-500 hover:text-white transition">Success</button>
                        <button className="px-4 py-2 border border-rose-500 text-rose-500 rounded-lg hover:bg-rose-500 hover:text-white transition">Danger</button>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-textPrimary mb-4">Gradient Buttons</h3>
                    <div className="flex flex-wrap gap-3">
                        <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition transform hover:-translate-y-0.5">Gradient Blue</button>
                        <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg hover:shadow-pink-500/30 transition transform hover:-translate-y-0.5">Gradient Pink</button>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-textPrimary mb-4">Icon Buttons</h3>
                    <div className="flex flex-wrap gap-3">
                        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition"><span className="material-icons-round">home</span></button>
                        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-emerald-500 transition"><span className="material-icons-round">check</span></button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 text-white rounded-lg hover:bg-white/10 transition">
                            <span className="material-icons-round text-sm">download</span> Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
