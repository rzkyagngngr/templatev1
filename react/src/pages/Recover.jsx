import React from 'react';

export default function Recover() {
    return (
        <div className="w-full max-w-md glass-card p-8 animate-in fade-in zoom-in duration-300">
            <div className="text-center mb-8">
                <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-orange-500/30">
                    <span className="material-icons-round text-2xl">lock_reset</span>
                </div>
                <h2 className="text-2xl font-bold text-textPrimary mb-2">Reset Password</h2>
                <p className="text-tertiary text-sm">Enter your email and we'll send you instructions to reset your password.</p>
            </div>

            <form className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-tertiary uppercase tracking-wider mb-2">Email</label>
                    <div className="relative">
                        <span className="material-icons-round absolute left-3 top-2.5 text-tertiary text-lg">email</span>
                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-textPrimary focus:bg-white/10 focus:border-primary/50 outline-none transition" placeholder="Enter email" />
                    </div>
                </div>

                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-400 flex items-start gap-2">
                    <span className="material-icons-round text-sm">info</span>
                    <span>Remembered your password? <a href="#" className="underline font-bold">Log In</a></span>
                </div>

                <button type="button" className="w-full py-3 bg-amber-500 text-white font-bold rounded-xl shadow-lg shadow-amber-500/30 hover:scale-105 transition transform active:scale-95">Reset</button>
            </form>

            <div className="mt-8 text-center text-sm text-tertiary">
                Wait, I remember my password... <span className="text-textPrimary font-bold cursor-pointer hover:underline">Log In</span>
            </div>
        </div>
    );
}
