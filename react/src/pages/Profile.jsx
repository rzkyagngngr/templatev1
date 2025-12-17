import React, { useState } from 'react';
// import MobileNavbar from '../components/MobileNavbar'; // Assuming we might want mobile nav here too, but Layout handles it.
// Profile View

const getAvatar = (name) => `https://ui-avatars.com/api/?name=${name}&background=random&color=fff`;

const Post = ({ author, time, text, images, likes, comments }) => (
    <div className="glass-card p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
                <img src={getAvatar(author)} className="w-10 h-10 rounded-full" alt="" />
                <div>
                    <h4 className="font-bold text-textPrimary text-sm">{author}</h4>
                    <p className="text-xs text-tertiary">{time}</p>
                </div>
            </div>
            <button className="text-tertiary hover:="><span className="material-icons-round">more_horiz</span></button>
        </div>
        <p className="text-textPrimary text-sm mb-4 leading-relaxed">{text}</p>
        {images && (
            <div className={`grid gap-2 mb-4 ${images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {images.map((img, i) => <div key={i} className="h-48 bg-white/5 rounded-lg"></div>)}
            </div>
        )}
        <div className="flex items-center gap-6 border-t border-white/5 pt-4">
            <button className="flex items-center gap-2 text-tertiary hover:text-rose-500 transition text-sm">
                <span className="material-icons-round text-lg">favorite_border</span>
                {likes}
            </button>
            <button className="flex items-center gap-2 text-tertiary hover:text-blue-500 transition text-sm">
                <span className="material-icons-round text-lg">chat_bubble_outline</span>
                {comments}
            </button>
            <button className="flex items-center gap-2 text-tertiary hover:text-emerald-500 transition text-sm ml-auto">
                <span className="material-icons-round text-lg">share</span>
            </button>
        </div>
    </div>
);

export default function Profile() {
    const [activeTab, setActiveTab] = useState('posts');

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="glass-card p-0 overflow-hidden relative group">
                <div className="h-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <button className="absolute top-4 right-4 bg-black/30 text-slate-900 px-3 py-1 rounded-full text-xs hover:bg-black/50 transition">Change Cover</button>
                </div>
                <div className="px-6 pb-6 relative">
                    <div className="flex flex-col md:flex-row items-end -mt-12 mb-4 gap-6">
                        <div className="relative">
                            <img src={getAvatar('Rosa Dodson')} className="w-24 h-24 rounded-full border-4 border-[#1e1e2d] shadow-xl" alt="" />
                            <div className="absolute bottom-2 right-2 w-5 h-5 bg-emerald-500 border-4 border-[#1e1e2d] rounded-full"></div>
                        </div>
                        <div className="flex-1 mb-2">
                            <h2 className="text-2xl font-bold text-textPrimary">Rosa Dodson</h2>
                            <p className="text-tertiary">Senior UX Designer â€¢ San Francisco, CA</p>
                        </div>
                        <div className="flex gap-3 mb-2">
                            <button className="px-4 py-2 bg-primary text-slate-900 rounded-lg shadow-lg shadow-primary/30 hover:bg-primary-dark transition font-medium text-sm">Follow</button>
                            <button className="px-4 py-2 bg-white/5 text-textPrimary rounded-lg hover:bg-white/10 transition font-medium text-sm">Message</button>
                        </div>
                    </div>

                    <div className="flex border-t border-white/5 pt-1">
                        {['posts', 'about', 'photos', 'videos'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-3 text-sm font-medium border-b-2 transition ${activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-tertiary hover:='}`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Sidebar Info */}
                <div className="space-y-6">
                    <div className="glass-card p-6">
                        <h4 className="font-bold text-textPrimary mb-4">About</h4>
                        <p className="text-sm text-tertiary leading-relaxed mb-4">
                            Hi I'm Rosa Dodson, has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-tertiary">
                                <span className="material-icons-round text-lg">email</span>
                                rosa.dodson@example.com
                            </div>
                            <div className="flex items-center gap-3 text-sm text-tertiary">
                                <span className="material-icons-round text-lg">language</span>
                                www.rosadodson.com
                            </div>
                            <div className="flex items-center gap-3 text-sm text-tertiary">
                                <span className="material-icons-round text-lg">place</span>
                                USA
                            </div>
                        </div>
                    </div>
                    <div className="glass-card p-6">
                        <h4 className="font-bold text-textPrimary mb-4">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                            {['UX Design', 'Figma', 'HTML5', 'React', 'CSS3', 'Photoshop'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-xs text-textPrimary border border-white/5">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Feed */}
                <div className="lg:col-span-2">
                    <Post
                        author="Rosa Dodson"
                        time="15 min ago"
                        text="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
                        likes="24"
                        comments="4"
                    />
                    <Post
                        author="Rosa Dodson"
                        time="2 hours ago"
                        text="Designing the new dashboard for Glacia. It's coming along nicely! ðŸŽ¨âœ¨"
                        images={['img1']}
                        likes="156"
                        comments="32"
                    />
                </div>
            </div>
        </div>
    );
}
