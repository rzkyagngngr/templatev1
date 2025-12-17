import React from 'react';

export default function PillLayout({ title, bills, activePill, onPillChange, children }) {
    // bills prop is the list of pills/tabs (e.g. ['Index', 'Exchange', 'Wallet'])

    return (
        <div className="space-y-6">
            <header className="flex flex-col md:flex-row justify-between items-end gap-4 mb-2">
                <div>
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-textPrimary to-secondary tracking-tight">
                        {title}
                    </h2>
                </div>

                {/* iOS 26 Glass Segmented Control */}
                <div className="p-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex overflow-x-auto no-scrollbar max-w-full shadow-inner">
                    {bills.map((pill) => {
                        const isActive = activePill === pill.id;
                        return (
                            <button
                                key={pill.id}
                                onClick={() => onPillChange(pill.id)}
                                className={`
                  relative px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap z-10
                  ${isActive ? 'text-textPrimary text-shadow-sm' : 'text-tertiary hover:text-textPrimary'}
                `}
                            >
                                {isActive && (
                                    <span className="absolute inset-0 bg-white/40 shadow-[0_2px_8px_rgba(0,0,0,0.05)] backdrop-blur-md rounded-lg -z-10 animate-fade-in transition-all"></span>
                                )}
                                {pill.label}
                            </button>
                        );
                    })}
                </div>
            </header>

            {/* Content Area with Fade Transition */}
            <div className="animate-slide-up-fade">
                {children}
            </div>
        </div>
    );
}
