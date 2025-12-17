import React from 'react';

export default function Alerts() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-textPrimary">UI Alerts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card p-6 space-y-4">
                    <h3 className="font-bold text-textPrimary mb-2">Default Alerts</h3>
                    <div className="p-4 rounded-xl bg-primary/20 text-primary border border-primary/20">
                        <strong>Well done!</strong> You successfully read this important alert message.
                    </div>
                    <div className="p-4 rounded-xl bg-emerald-500/20 text-emerald-500 border border-emerald-500/20">
                        <strong>Success!</strong> Your details have been saved successfully.
                    </div>
                    <div className="p-4 rounded-xl bg-amber-500/20 text-amber-500 border border-amber-500/20">
                        <strong>Warning!</strong> Better check yourself, you're not looking too good.
                    </div>
                    <div className="p-4 rounded-xl bg-rose-500/20 text-rose-500 border border-rose-500/20">
                        <strong>Oh snap!</strong> Change a few things up and try submitting again.
                    </div>
                </div>

                <div className="glass-card p-6 space-y-4">
                    <h3 className="font-bold text-textPrimary mb-2">Icon Alerts</h3>
                    <div className="p-4 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 flex items-center gap-3">
                        <span className="material-icons-round">info</span>
                        <span>A simple info alert with an icon.</span>
                    </div>
                    <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center gap-3">
                        <span className="material-icons-round">check_circle</span>
                        <span>Your changes have been saved!</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
