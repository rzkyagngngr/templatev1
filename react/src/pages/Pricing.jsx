import React from 'react';

export default function Pricing() {
    return (
        <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-textPrimary mb-4">Simple, Transparent Pricing</h1>
                <p className="text-tertiary">Choose the plan that's right for you. Change or cancel at any time.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Basic */}
                <div className="glass-card p-8 flex flex-col relative overflow-hidden group hover:-translate-y-2 transition duration-300">
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-textPrimary">Basic</h3>
                        <p className="text-sm text-tertiary">For individuals</p>
                    </div>
                    <div className="text-4xl font-bold text-textPrimary mb-6">$19 <span className="text-base font-normal text-tertiary">/mo</span></div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center gap-3 text-sm text-tertiary"><span className="material-icons-round text-emerald-500 text-lg">check</span> 5 Projects</li>
                        <li className="flex items-center gap-3 text-sm text-tertiary"><span className="material-icons-round text-emerald-500 text-lg">check</span> 5 GB Storage</li>
                        <li className="flex items-center gap-3 text-sm text-tertiary"><span className="material-icons-round text-emerald-500 text-lg">check</span> Basic Support</li>
                    </ul>
                    <button className="w-full py-3 rounded-xl border border-white/10 text-textPrimary font-bold hover:bg-white/5 transition">Get Started</button>
                </div>

                {/* Pro */}
                <div className="glass-card p-8 flex flex-col relative overflow-hidden transform md:-translate-y-4 border-2 border-primary/50 group hover:-translate-y-6 transition duration-300 z-10">
                    <div className="absolute top-0 right-0 bg-primary text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-textPrimary">Pro</h3>
                        <p className="text-sm text-tertiary">For small teams</p>
                    </div>
                    <div className="text-4xl font-bold text-primary mb-6">$49 <span className="text-base font-normal text-tertiary">/mo</span></div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center gap-3 text-sm text-textPrimary"><span className="material-icons-round text-emerald-500 text-lg">check</span> 20 Projects</li>
                        <li className="flex items-center gap-3 text-sm text-textPrimary"><span className="material-icons-round text-emerald-500 text-lg">check</span> 50 GB Storage</li>
                        <li className="flex items-center gap-3 text-sm text-textPrimary"><span className="material-icons-round text-emerald-500 text-lg">check</span> Priority Support</li>
                        <li className="flex items-center gap-3 text-sm text-textPrimary"><span className="material-icons-round text-emerald-500 text-lg">check</span> Analytics</li>
                    </ul>
                    <button className="w-full py-3 rounded-xl bg-primary text-slate-900 font-bold shadow-lg shadow-primary/30 hover:bg-primary-dark transition">Get Started</button>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                </div>

                {/* Enterprise */}
                <div className="glass-card p-8 flex flex-col relative overflow-hidden group hover:-translate-y-2 transition duration-300">
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-textPrimary">Enterprise</h3>
                        <p className="text-sm text-tertiary">For large organizations</p>
                    </div>
                    <div className="text-4xl font-bold text-textPrimary mb-6">$99 <span className="text-base font-normal text-tertiary">/mo</span></div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center gap-3 text-sm text-tertiary"><span className="material-icons-round text-emerald-500 text-lg">check</span> Unlimited Projects</li>
                        <li className="flex items-center gap-3 text-sm text-tertiary"><span className="material-icons-round text-emerald-500 text-lg">check</span> Unlimited Storage</li>
                        <li className="flex items-center gap-3 text-sm text-tertiary"><span className="material-icons-round text-emerald-500 text-lg">check</span> 24/7 Dedicated Support</li>
                        <li className="flex items-center gap-3 text-sm text-tertiary"><span className="material-icons-round text-emerald-500 text-lg">check</span> Custom Integrations</li>
                    </ul>
                    <button className="w-full py-3 rounded-xl border border-white/10 text-textPrimary font-bold hover:bg-white/5 transition">Contact Us</button>
                </div>
            </div>
        </div>
    );
}
