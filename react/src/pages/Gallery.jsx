import React from 'react';

export default function Gallery() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-textPrimary">Gallery</h1>
                <div className="flex gap-2">
                    <button className="px-3 py-1 rounded-full bg-primary text-white text-sm font-medium">All</button>
                    <button className="px-3 py-1 rounded-full bg-white/5 text-tertiary hover:text-white hover:bg-white/10 text-sm font-medium transition">Development</button>
                    <button className="px-3 py-1 rounded-full bg-white/5 text-tertiary hover:text-white hover:bg-white/10 text-sm font-medium transition">Design</button>
                    <button className="px-3 py-1 rounded-full bg-white/5 text-tertiary hover:text-white hover:bg-white/10 text-sm font-medium transition">Mobile</button>
                </div>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                    <div key={i} className="break-inside-avoid glass-card p-0 overflow-hidden group relative cursor-pointer">
                        <div className={`w-full bg-white/5 ${i % 2 === 0 ? 'h-64' : 'h-48'} relative overflow-hidden`}>
                            {/* Placeholder pattern */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
                                <span className="material-icons-round text-primary text-4xl opacity-50 group-hover:scale-125 transition duration-500">image</span>
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                                <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-primary flex items-center justify-center text-white backdrop-blur-md transition transform translate-y-4 group-hover:translate-y-0 duration-300">
                                    <span className="material-icons-round">zoom_in</span>
                                </button>
                                <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-emerald-500 flex items-center justify-center text-white backdrop-blur-md transition transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                                    <span className="material-icons-round">link</span>
                                </button>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-textPrimary">Project Image {i}</h3>
                            <p className="text-xs text-tertiary">Design, Development</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
