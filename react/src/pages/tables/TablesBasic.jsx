import React from 'react';
import { Activity, TrendingUp, Users } from 'lucide-react';

export default function TablesBasic() {
    const data = [
        { id: 1, name: 'Quantum Computing', category: 'Technology', status: 'Active', value: '$2,400', growth: '+12.5%' },
        { id: 2, name: 'Renewable Energy', category: 'Sustainability', status: 'Active', value: '$1,221', growth: '+8.2%' },
        { id: 3, name: 'AI Development', category: 'Innovation', status: 'Pending', value: '$929', growth: '+15.3%' },
        { id: 4, name: 'Cloud Services', category: 'Infrastructure', status: 'Active', value: '$1,560', growth: '+4.7%' },
        { id: 5, name: 'Blockchain', category: 'Finance', status: 'Active', value: '$2,210', growth: '+19.2%' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <div className="w-full space-y-6">
                {/* Header */}
                <div>
                    <nav className="flex text-indigo-600/60 text-sm mb-3">
                        <span className="hover:text-indigo-700 cursor-pointer transition">Glacia</span>
                        <span className="mx-2">/</span>
                        <span className="hover:text-indigo-700 cursor-pointer transition">UI</span>
                        <span className="mx-2">/</span>
                        <span className="hover:text-indigo-700 cursor-pointer transition">Tables</span>
                        <span className="mx-2">/</span>
                        <span className="text-indigo-900 font-semibold">Basic</span>
                    </nav>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Basic Tables</h1>
                    <p className="text-indigo-600/70 mt-2">Clean and structured data presentation</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { label: 'Total Items', value: '5', icon: Activity, color: 'indigo' },
                        { label: 'Active', value: '4', icon: Users, color: 'green' },
                        { label: 'Growth', value: '+15.3%', icon: TrendingUp, color: 'blue' },
                    ].map((stat, idx) => {
                        const Icon = stat.icon;
                        const colorClass = {
                            indigo: 'from-indigo-400/20 to-indigo-600/5 border-indigo-200/40 text-indigo-600',
                            green: 'from-green-400/20 to-green-600/5 border-green-200/40 text-green-600',
                            blue: 'from-blue-400/20 to-blue-600/5 border-blue-200/40 text-blue-600',
                        }[stat.color];
                        return (
                            <div key={idx} className={`backdrop-blur-2xl bg-gradient-to-br ${colorClass} border border-white/60 rounded-3xl p-6 shadow-xl shadow-black/5`}>
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-indigo-600/70 text-sm font-medium">{stat.label}</p>
                                        <p className="text-3xl font-bold text-indigo-900 mt-2">{stat.value}</p>
                                    </div>
                                    <Icon size={28} className="opacity-60" />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Table */}
                <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 overflow-hidden">
                    <div className="px-8 py-6 border-b border-white/40 bg-gradient-to-r from-indigo-600/10 to-purple-600/10">
                        <h2 className="text-xl font-bold text-indigo-900">Data Table</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/40">
                                    <th className="px-8 py-4 text-left text-sm font-semibold text-indigo-900">ID</th>
                                    <th className="px-8 py-4 text-left text-sm font-semibold text-indigo-900">Name</th>
                                    <th className="px-8 py-4 text-left text-sm font-semibold text-indigo-900">Category</th>
                                    <th className="px-8 py-4 text-left text-sm font-semibold text-indigo-900">Value</th>
                                    <th className="px-8 py-4 text-left text-sm font-semibold text-indigo-900">Growth</th>
                                    <th className="px-8 py-4 text-left text-sm font-semibold text-indigo-900">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id} className="border-b border-white/30 hover:bg-white/40 transition-colors">
                                        <td className="px-8 py-4 text-sm font-semibold text-indigo-900">#{item.id}</td>
                                        <td className="px-8 py-4 text-sm font-semibold text-indigo-900">{item.name}</td>
                                        <td className="px-8 py-4 text-sm">
                                            <span className="inline-block px-3 py-1.5 rounded-2xl bg-blue-100/60 text-blue-700 text-xs font-medium">{item.category}</span>
                                        </td>
                                        <td className="px-8 py-4 text-sm text-indigo-900 font-bold">{item.value}</td>
                                        <td className="px-8 py-4 text-sm">
                                            <span className="inline-flex items-center gap-1 text-green-600 font-semibold">
                                                <TrendingUp size={16} />
                                                {item.growth}
                                            </span>
                                        </td>
                                        <td className="px-8 py-4 text-sm">
                                            <span className={`inline-block px-3 py-1.5 rounded-2xl text-xs font-bold backdrop-blur-xl border border-white/60 ${
                                                item.status === 'Active' 
                                                    ? 'bg-gradient-to-br from-green-400/20 to-green-600/5 border-green-200/40 text-green-700'
                                                    : 'bg-gradient-to-br from-yellow-400/20 to-yellow-600/5 border-yellow-200/40 text-yellow-700'
                                            }`}>
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
