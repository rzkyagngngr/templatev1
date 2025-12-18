import React from 'react';
import { Airplay, BarChart2, Bell, BookOpen, Box, Briefcase, Calendar, Camera } from 'lucide-react';

export default function IconsFeather() {
    const icons = [
        { name: 'Airplay', icon: Airplay },
        { name: 'Chart', icon: BarChart2 },
        { name: 'Bell', icon: Bell },
        { name: 'Book', icon: BookOpen },
        { name: 'Box', icon: Box },
        { name: 'Briefcase', icon: Briefcase },
        { name: 'Calendar', icon: Calendar },
        { name: 'Camera', icon: Camera },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <div className="w-full space-y-6">
                <div>
                    <nav className="flex text-gray-600 text-sm mb-3">
                        <span className="hover:text-gray-900 cursor-pointer transition">Glacia</span>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-semibold">Feather Icons</span>
                    </nav>
                    <h1 className="text-4xl font-bold text-gray-900">Feather Icons</h1>
                </div>
                <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
                        {icons.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={idx} className="flex flex-col items-center justify-center p-4 rounded-3xl bg-white/50 border border-white/40 hover:border-amber-200/80 hover:shadow-lg hover:shadow-amber-200/30 transition-all duration-300 cursor-pointer group">
                                    <Icon size={40} className="text-gray-900 group-hover:text-amber-600 mb-3 transition-colors" />
                                    <p className="text-xs text-gray-900 font-medium text-center">{item.name}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
