import React, { useState } from 'react';
import PillLayout from '../components/PillLayout';

// Mock Data
const USERS = [
    { id: 1, name: 'Donald Gardner', status: 'online', lastMsg: 'I will send the files by evening.', time: '10 min', count: 2 },
    { id: 2, name: 'Nikolay Krivov', status: 'offline', lastMsg: 'Meeting cancelled.', time: '30 min', count: 0 },
    { id: 3, name: 'Matt Rosales', status: 'online', lastMsg: 'Thanks due!', time: 'Yesterday', count: 0 },
    { id: 4, name: 'Barbara Kelly', status: 'away', lastMsg: 'See you tomorrow', time: 'Yesterday', count: 0 },
];

const MESSAGES = [
    { id: 1, sender: 'other', text: 'Good morning! How is the project going?', time: '10:00 AM' },
    { id: 2, sender: 'me', text: 'Hey Donald! It is going great. I just need a few more assets.', time: '10:05 AM' },
    { id: 3, sender: 'other', text: 'Sure, I will send the files by evening.', time: '10:10 AM' },
];

const getAvatar = (name) => `https://ui-avatars.com/api/?name=${name}&background=random&color=fff`;

export default function Chat() {
    // Chat doesn't really fit PillLayout perfectly if we want side-by-side, 
    // but we can use PillLayout to switch between "Recent" and "Active Chat" on mobile,
    // or just implement a custom layout wrapper. 
    // Let's implement a custom layout inside the page, but since we need the header, 
    // we might just reuse the style of PillLayout but without pills, or use PillLayout just for the title.

    // Actually, let's make it a 2-pane fixed height view.

    const [activeUser, setActiveUser] = useState(USERS[0]);

    return (
        <div className="h-[calc(100vh-100px)] flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-textPrimary">Chat</h1>
            </div>

            <div className="flex-1 flex gap-6 overflow-hidden">
                {/* Sidebar (User List) */}
                <div className="w-80 glass-card flex flex-col p-0 overflow-hidden hidden md:flex">
                    <div className="p-4 border-b border-white/5">
                        <div className="relative">
                            <span className="material-icons-round absolute left-3 top-2.5 text-tertiary text-sm">search</span>
                            <input type="text" className="w-full bg-white/5 rounded-full pl-9 pr-4 py-2 text-sm text-textPrimary placeholder-tertiary border-none outline-none focus:bg-white/10 transition" placeholder="Search contacts..." />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {USERS.map(user => (
                            <div
                                key={user.id}
                                onClick={() => setActiveUser(user)}
                                className={`p-4 flex gap-3 cursor-pointer border-b border-white/5 last:border-0 hover:bg-white/5 transition ${activeUser.id === user.id ? 'bg-primary/10 border-l-2 border-l-primary' : ''}`}
                            >
                                <div className="relative">
                                    <img src={getAvatar(user.name)} className="w-10 h-10 rounded-full flex-shrink-0" alt="" />
                                    <span className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-[#1e1e2d] rounded-full ${user.status === 'online' ? 'bg-emerald-500' : user.status === 'away' ? 'bg-amber-500' : 'bg-slate-500'}`}></span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className={`text-sm font-medium ${activeUser.id === user.id ? 'text-primary' : 'text-textPrimary'}`}>{user.name}</h4>
                                        <span className="text-xs text-tertiary">{user.time}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-xs text-tertiary truncate">{user.lastMsg}</p>
                                        {user.count > 0 && <span className="bg-primary text-slate-900 text-[10px] font-bold px-1.5 py-0.5 rounded-full">{user.count}</span>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Chat Area */}
                <div className="flex-1 glass-card p-0 flex flex-col overflow-hidden">
                    {/* Header */}
                    <div className="p-4 border-b border-white/5 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <img src={getAvatar(activeUser.name)} className="w-10 h-10 rounded-full" alt="" />
                            <div>
                                <h3 className="font-bold text-textPrimary">{activeUser.name}</h3>
                                <span className="text-xs text-emerald-500 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    Online
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-tertiary transition">
                                <span className="material-icons-round text-sm">phone</span>
                            </button>
                            <button className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-tertiary transition">
                                <span className="material-icons-round text-sm">videocam</span>
                            </button>
                            <button className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-tertiary transition">
                                <span className="material-icons-round text-sm">more_vert</span>
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {MESSAGES.map((msg, i) => (
                            <div key={i} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[70%] p-3 rounded-2xl text-sm ${msg.sender === 'me'
                                        ? 'bg-primary text-slate-900 rounded-tr-none'
                                        : 'bg-white/10 text-textPrimary rounded-tl-none'
                                    }`}>
                                    <p>{msg.text}</p>
                                    <div className={`text-[10px] mt-1 text-right ${msg.sender === 'me' ? '=/70' : 'text-tertiary'}`}>{msg.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-white/5 flex gap-3 items-center">
                        <button className="text-tertiary hover:text-slate-900 transition"><span className="material-icons-round">sentiment_satisfied</span></button>
                        <button className="text-tertiary hover:text-slate-900 transition"><span className="material-icons-round">attach_file</span></button>
                        <input type="text" className="flex-1 bg-white/5 rounded-full px-4 py-2 text-sm text-textPrimary placeholder-tertiary border-none outline-none focus:bg-white/10 transition" placeholder="Type a message..." />
                        <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-slate-900 shadow-lg shadow-primary/30 hover:scale-105 transition">
                            <span className="material-icons-round text-lg">send</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
