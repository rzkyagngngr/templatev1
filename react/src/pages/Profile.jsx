import React, { useState } from 'react';
import { Briefcase, MapPin, Mail, Phone, Code, Users, Clock, Award, ExternalLink } from 'lucide-react';

const getAvatar = (name) => `https://picsum.photos/400/400?random=${Math.floor(Math.random() * 1000)}`;

const Activity = ({ author, time, action, type }) => {
    const icons = {
        post: '📝',
        comment: '💬',
        follow: '👤',
        like: '❤️'
    };
    return (
        <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl p-4 hover:bg-white/50 transition-all duration-300">
            <div className="flex items-start gap-3">
                <span className="text-xl">{icons[type] || '✨'}</span>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{author}</p>
                    <p className="text-xs text-gray-600">{action}</p>
                    <p className="text-xs text-gray-500 mt-1">{time}</p>
                </div>
            </div>
        </div>
    );
};

export default function Profile() {
    const [activeTab, setActiveTab] = useState('overview');

    const profileData = {
        name: 'Rosa Dodson',
        role: 'Senior UX Designer',
        location: 'San Francisco, CA',
        email: 'rosa.dodson@example.com',
        phone: '+1 (555) 123-4567',
        website: 'www.rosadodson.com',
        bio: 'Passionate UX designer with 8+ years crafting beautiful, intuitive digital experiences. Specialized in design systems and user research.',
        avatar: getAvatar('Rosa Dodson'),
        followers: 2543,
        following: 487,
        posts: 847,
        joinDate: 'Jan 2020',
        skills: ['UX Design', 'Figma', 'User Research', 'Design Systems', 'Prototyping', 'HTML/CSS'],
        activity: 'Active now'
    };

    const recentActivity = [
        { author: 'Rosa Dodson', action: 'Posted a new design article', type: 'post', time: '2 hours ago' },
        { author: 'John Smith', action: 'Commented on your portfolio review', type: 'comment', time: '5 hours ago' },
        { author: 'Sarah Chen', action: 'Started following you', type: 'follow', time: '1 day ago' },
        { author: 'Design Team', action: 'Liked your latest project', type: 'like', time: '2 days ago' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            {/* Hero Profile Section */}
            <div className="max-w-5xl mx-auto mb-12">
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    
                    {/* Cover Banner */}
                    <div className="h-40 bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm"></div>
                        <div className="absolute top-4 right-4 backdrop-blur-xl bg-white/30 border border-white/50 px-4 py-2 rounded-2xl text-xs font-medium text-white/90 hover:bg-white/40 hover:shadow-lg transition-all duration-300">
                            ✨ Premium Profile
                        </div>
                    </div>

                    {/* Profile Content */}
                    <div className="px-8 pb-8 pt-0 relative">
                        {/* Avatar & Main Info */}
                        <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
                            <div className="relative -mt-20 flex-shrink-0">
                                <img
                                    src={profileData.avatar}
                                    alt={profileData.name}
                                    className="w-40 h-40 rounded-3xl border-4 border-white shadow-2xl shadow-blue-300/50 object-cover hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute bottom-3 right-3 w-6 h-6 bg-emerald-400 border-4 border-white rounded-full shadow-lg"></div>
                            </div>

                            <div className="flex-1 mt-8 md:mt-0">
                                <div className="mb-4">
                                    <h2 className="text-3xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-1">{profileData.name}</h2>
                                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                                        <span className="px-3 py-1 backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-purple-400/50 border border-white/50 rounded-2xl text-sm font-medium text-blue-900 shadow-lg">
                                            {profileData.role}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs px-3 py-1 backdrop-blur-xl bg-emerald-400/50 border border-white/50 rounded-2xl text-emerald-900 shadow-lg">
                                            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> {profileData.activity}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-6">{profileData.bio}</p>
                                
                                {/* Quick Actions */}
                                <div className="flex flex-wrap gap-3">
                                    <button className="px-5 py-2.5 backdrop-blur-xl bg-gradient-to-br from-blue-500/50 to-blue-600/50 border border-white/50 rounded-2xl text-white font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                        Follow
                                    </button>
                                    <button className="px-5 py-2.5 backdrop-blur-xl bg-white/50 border border-white/60 rounded-2xl text-gray-700 font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                        Message
                                    </button>
                                    <button className="px-5 py-2.5 backdrop-blur-xl bg-white/50 border border-white/60 rounded-2xl text-gray-700 font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                        Share Profile
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 py-8 border-t border-white/30">
                            {[
                                { label: 'Followers', value: profileData.followers, icon: Users },
                                { label: 'Following', value: profileData.following, icon: Users },
                                { label: 'Posts', value: profileData.posts, icon: Award },
                                { label: 'Joined', value: profileData.joinDate, icon: Clock },
                            ].map((stat, i) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={i} className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl p-4 text-center hover:bg-white/50 transition-all duration-300 group">
                                        <Icon size={20} className="mx-auto mb-2 text-blue-500 group-hover:text-purple-500 transition-colors" />
                                        <div className="text-2xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                                        </div>
                                        <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Contact & Location Info */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-t border-white/30">
                            <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl p-4 hover:bg-white/50 transition-all duration-300">
                                <div className="flex items-center gap-3">
                                    <Mail size={20} className="text-blue-500 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs text-gray-600">Email</p>
                                        <p className="text-sm font-medium text-gray-900 truncate">{profileData.email}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl p-4 hover:bg-white/50 transition-all duration-300">
                                <div className="flex items-center gap-3">
                                    <Phone size={20} className="text-blue-500 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs text-gray-600">Phone</p>
                                        <p className="text-sm font-medium text-gray-900">{profileData.phone}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl p-4 hover:bg-white/50 transition-all duration-300">
                                <div className="flex items-center gap-3">
                                    <MapPin size={20} className="text-blue-500 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs text-gray-600">Location</p>
                                        <p className="text-sm font-medium text-gray-900">{profileData.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Two Column Layout */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Skills Section */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-purple-200/40 overflow-hidden p-6 hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <Code size={24} className="text-blue-600" />
                            <h3 className="text-lg font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent">Skills</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {profileData.skills.map((skill, i) => (
                                <span key={i} className="px-3 py-1.5 backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-purple-400/50 border border-white/50 rounded-2xl text-xs font-medium text-blue-900 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-purple-200/40 overflow-hidden p-6 hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">About</h3>
                        <p className="text-sm text-gray-700 leading-relaxed mb-4">{profileData.bio}</p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <ExternalLink size={16} className="text-blue-500 flex-shrink-0" />
                                <a href={`https://${profileData.website}`} className="text-sm text-blue-600 hover:text-blue-700 truncate">
                                    {profileData.website}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Tab Navigation */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden p-6 shadow-xl shadow-blue-200/40">
                        <div className="flex gap-4 border-b border-white/30 pb-4">
                            {['overview', 'posts', 'projects'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                        activeTab === tab
                                            ? 'bg-gradient-to-br from-blue-500/50 to-blue-600/50 border border-white/50 text-white shadow-lg'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-white/30'
                                    }`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Activity Feed */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-gray-900 px-1">Recent Activity</h3>
                        {recentActivity.map((item, i) => (
                            <Activity key={i} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
