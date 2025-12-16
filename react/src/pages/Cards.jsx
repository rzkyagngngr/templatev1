import React from 'react';

export default function Cards() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-textPrimary">UI Cards</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-6">
                    <h3 className="text-lg font-bold text-textPrimary mb-2">Basic Card</h3>
                    <p className="text-sm text-tertiary">This is a basic glassmorphism card. It uses backdrop-blur and semi-transparent backgrounds.</p>
                </div>

                <div className="glass-card p-0 overflow-hidden">
                    <div className="h-32 bg-gradient-to-r from-purple-500 to-pink-500 relative">
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-lg font-bold text-textPrimary mb-2">Image Card</h3>
                        <p className="text-sm text-tertiary mb-4">Card with a header image or gradient.</p>
                        <button className="text-primary text-sm font-bold">Read More</button>
                    </div>
                </div>

                <div className="glass-card p-6 border-l-4 border-l-emerald-500">
                    <h3 className="text-lg font-bold text-textPrimary mb-2">Bordered Card</h3>
                    <p className="text-sm text-tertiary">A card with a side accent border.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1e1e2d] to-[#2a2a3c] border border-white/5 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition duration-500"></div>
                    <h3 className="text-xl font-bold text-white mb-2 relative z-10">Neon Glow</h3>
                    <p className="text-gray-400 relative z-10">Dark theme card with subtle neon glow effects.</p>
                </div>

                <div className="glass-card p-6 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        JS
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-textPrimary">Profile Card</h3>
                        <p className="text-sm text-tertiary">Senior Javascript Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
