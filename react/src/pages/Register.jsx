import React from 'react';

export default function Register() {
    return (
        <div className="w-full max-w-md glass-card p-8 animate-in fade-in zoom-in duration-300">
            <div className="text-center mb-8">
                <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-slate-900 mb-4 shadow-lg shadow-pink-500/30">
                    <span className="material-icons-round text-2xl">person_add</span>
                </div>
                <h2 className="text-2xl font-bold text-textPrimary mb-2">Create Account</h2>
                <p className="text-tertiary text-sm">Join us today! It takes only few steps.</p>
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
                    <label className="block text-xs font-bold text-tertiary uppercase tracking-wider mb-2">Email</label>
                    <div className="relative">
                        <span className="material-icons-round absolute left-3 top-2.5 text-tertiary text-lg">email</span>
                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-textPrimary focus:bg-white/10 focus:border-primary/50 outline-none transition" placeholder="Enter email" />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-tertiary uppercase tracking-wider mb-2">Password</label>
                    <div className="relative">
                        <span className="material-icons-round absolute left-3 top-2.5 text-tertiary text-lg">key</span>
                        <input type="password" className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-textPrimary focus:bg-white/10 focus:border-primary/50 outline-none transition" placeholder="Enter password" />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-tertiary uppercase tracking-wider mb-2">Confirm Password</label>
                    <div className="relative">
                        <span className="material-icons-round absolute left-3 top-2.5 text-tertiary text-lg">check_circle</span>
                        <input type="password" className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-textPrimary focus:bg-white/10 focus:border-primary/50 outline-none transition" placeholder="Confirm password" />
                    </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-tertiary">
                    <input type="checkbox" className="rounded bg-white/10 border-white/20 text-primary focus:ring-0 checked:bg-primary" />
                    I agree to the <a href="#" className="text-primary hover:underline">Terms of Use</a>
                </div>

                <button type="button" className="w-full py-3 bg-purple-500 text-slate-900 font-bold rounded-xl shadow-lg shadow-purple-500/30 hover:scale-105 transition transform active:scale-95">Register</button>
            </form>

            <div className="mt-8 text-center text-sm text-tertiary">
                Already have an account? <span className="text-textPrimary font-bold cursor-pointer hover:underline">Log In</span>
            </div>
        </div>
    );
}
