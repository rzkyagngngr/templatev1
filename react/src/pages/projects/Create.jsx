import React from 'react';

export default function Create() {
    return (
        <div className="w-full">
            {/* Header / Breadcrumb */}
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold text-white tracking-wide">Create Project</h4>
                <div className="text-sm text-slate-400">
                    <span className="hover:text-white cursor-pointer">Metrica</span>
                    <span className="mx-2">/</span>
                    <span className="hover:text-white cursor-pointer">Projects</span>
                    <span className="mx-2">/</span>
                    <span className="text-white">Create</span>
                </div>
            </div>

            <div className="glass-card p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Form Section */}
                    <div>
                        <div className="form-group mb-4">
                            <label className="text-sm text-slate-400 mb-1 block">Project Name :</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600" placeholder="Enter project name" />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="text-sm text-slate-400 mb-1 block">Project Start Date</label>
                                <input type="date" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" />
                            </div>
                            <div>
                                <label className="text-sm text-slate-400 mb-1 block">Project End Date</label>
                                <input type="date" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="text-sm text-slate-400 mb-1 block">Rate</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600" placeholder="Enter rate" />
                            </div>
                            <div>
                                <label className="text-sm text-slate-400 mb-1 block">Price Type</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all">
                                    <option>Hourly</option>
                                    <option>Daily</option>
                                    <option>Fixed</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div>
                                <label className="text-sm text-slate-400 mb-1 block">Required</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all">
                                    <option>--Select--</option>
                                    <option>UI/UX Design</option>
                                    <option>Development</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-sm text-slate-400 mb-1 block">Invoice Time</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all">
                                    <option>30 Days</option>
                                    <option>3 Months</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-sm text-slate-400 mb-1 block">Priority</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all">
                                    <option>High</option>
                                    <option>Medium</option>
                                    <option>Low</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group mb-6">
                            <label className="text-sm text-slate-400 mb-1 block">Message</label>
                            <textarea rows="5" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600" placeholder="writing here.."></textarea>
                        </div>

                        <div className="flex gap-3">
                            <button className="px-6 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-medium transition-colors shadow-lg shadow-primary/20">
                                Create Project
                            </button>
                            <button className="px-6 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 text-sm font-medium transition-colors">
                                Cancel
                            </button>
                        </div>
                    </div>

                    {/* Avatar & Team Section */}
                    <div>
                        <div className="form-group mb-6 text-center lg:text-left">
                            <label className="text-sm text-slate-400 mb-3 block">Project Avatar</label>
                            <div className="relative inline-block group">
                                <img src="https://mannatthemes.com/metrica/default/assets/images/small/project-3.jpg" alt="" className="w-full max-w-sm rounded-lg border-4 border-white/5 shadow-xl" />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                                    <button className="px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-lg text-white text-sm font-medium border border-white/20">Change Avatar</button>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl bg-blue-500/5 border border-blue-500/10 mb-6">
                            <p className="text-blue-200/80 text-sm italic">
                                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised."
                            </p>
                        </div>

                        <div className="form-group">
                            <label className="text-sm text-slate-400 mb-3 block">Project Team Members</label>
                            <div className="flex flex-wrap gap-2">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <img key={i} src={`https://mannatthemes.com/metrica/default/assets/images/users/user-${i + 4}.jpg`} className="w-10 h-10 rounded-full border-2 border-slate-800 hover:scale-110 transition-transform cursor-pointer" alt="" />
                                ))}
                                <button className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-800 flex items-center justify-center text-xs text-white hover:bg-slate-600 transition-colors">
                                    <span className="material-icons-round font-bold">+</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
