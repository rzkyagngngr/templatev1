import React from 'react';

export default function Login() {
    return (
        <div className="w-full max-w-md glass-card p-8 animate-in fade-in zoom-in duration-300">
            <div className="text-center mb-8">
                <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-cyan-500/30">
                    <span className="material-icons-round text-2xl">lock</span>
                </div>
                <h2 className="text-2xl font-bold text-textPrimary mb-2">Welcome Back!</h2>
                <p className="text-tertiary text-sm">Sign in to continue to Metrica.</p>
            </div>

            <form className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-tertiary uppercase tracking-wider mb-2">Username</label>
                    <div className="relative">
                        <span className="material-icons-round absolute left-3 top-2.5 text-tertiary text-lg">person</span>
                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-textPrimary focus:bg-white/10 focus:border-primary/50 outline-none transition" placeholder="Enter username" />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-tertiary uppercase tracking-wider mb-2">Password</label>
                    <div className="relative">
                        <span className="material-icons-round absolute left-3 top-2.5 text-tertiary text-lg">key</span>
                        <input type="password" className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-textPrimary focus:bg-white/10 focus:border-primary/50 outline-none transition" placeholder="Enter password" />
                    </div>
                </div>

                <div className="flex justify-between items-center text-xs">
                    <label className="flex items-center gap-2 cursor-pointer text-tertiary hover:text-white transition">
                        <input type="checkbox" className="rounded bg-white/10 border-white/20 text-primary focus:ring-0 checked:bg-primary" />
                        Remember me
                    </label>
                    <a href="#" className="text-primary hover:text-primary-dark transition">Forgot password?</a>
                </div>

                <button type="button" className="w-full py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:scale-105 transition transform active:scale-95">Log In</button>
            </form>

            <div className="mt-8 text-center text-sm text-tertiary">
                Don't have an account? <span className="text-textPrimary font-bold cursor-pointer hover:underline">Register</span>
            </div>
        </div>
    );
}
