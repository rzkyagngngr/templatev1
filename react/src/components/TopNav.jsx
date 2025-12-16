import React, { useState, useEffect, useRef } from 'react';

export default function TopNav({ onNavigate }) {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [lang, setLang] = useState({ code: 'EN', flag: '🇺🇸' });

    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const changeLang = (code, flag) => {
        setLang({ code, flag });
        setActiveDropdown(null);
    };

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-3 mr-4 border-b border-white/20 bg-white/6 backdrop-blur-3xl shadow-sm" ref={dropdownRef}>
            <div className="flex-none flex items-center gap-2">
                <span>
                    <img src="/assets/images/logo-sm.png" alt="logo-small" className="h-8" />
                </span>
                <span>
                    <img src="/assets/images/logo-dark.png" alt="logo-large" className="h-5 hidden md:block" />
                </span>
            </div>

            <div className="flex-1 flex justify-center px-8">
                <div className="flex items-center bg-white/50 backdrop-blur-md px-4 py-2 rounded-xl w-80 max-w-full border border-black/5 transition-all focus-within:bg-white/80 focus-within:ring-4 focus-within:ring-primary/15 focus-within:border-primary/30 shadow-inner">
                    <span className="material-icons-round text-tertiary text-lg mr-2">search</span>
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent border-none outline-none text-sm flex-1 text-textPrimary placeholder-tertiary"
                    />
                    <span className="text-[0.65rem] text-tertiary bg-black/5 px-1.5 py-0.5 rounded font-medium ml-2">⌘K</span>
                </div>
            </div>

            <div className="flex-none flex items-center gap-4">
                {/* Language Selector */}
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown('lang')}
                        className={`flex items-center gap-1.5 px-2.5 py-1.5 bg-white/40 border border-black/5 rounded-lg text-xs text-textPrimary transition hover:bg-white/60 ${activeDropdown === 'lang' ? 'bg-white/60' : ''}`}
                    >
                        <span className="text-base">{lang.flag}</span>
                        <span className="font-semibold text-xs">{lang.code}</span>
                        <span className={`material-icons-round text-tertiary text-base transition-transform ${activeDropdown === 'lang' ? 'rotate-180' : ''}`}>expand_more</span>
                    </button>

                    {activeDropdown === 'lang' && (
                        <div className="absolute top-[calc(100%+0.5rem)] right-0 min-w-[10rem] bg-white/95 backdrop-blur-xl border border-black/10 rounded-xl py-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                            {[
                                { code: 'EN', flag: '🇺🇸', name: 'English' },
                                { code: 'ID', flag: '🇮🇩', name: 'Indonesia' },
                                { code: 'JP', flag: '🇯🇵', name: '日本語' },
                                { code: 'CN', flag: '🇨🇳', name: '中文' }
                            ].map((l) => (
                                <button
                                    key={l.code}
                                    onClick={() => changeLang(l.code, l.flag)}
                                    className={`w-full flex items-center gap-2 px-4 py-2.5 text-xs text-textPrimary hover:bg-primary/10 hover:text-primary transition ${lang.code === l.code ? 'bg-primary/10 text-primary font-semibold' : ''}`}
                                >
                                    <span className="text-base">{l.flag}</span> {l.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Notifications */}
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown('notif')}
                        className="relative p-1.5 text-secondary hover:bg-black/5 rounded-lg transition"
                    >
                        <span className="material-icons-round">notifications</span>
                        <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-[0.55rem] font-bold text-white bg-danger border-2 border-white rounded-full">3</span>
                    </button>

                    {activeDropdown === 'notif' && (
                        <div className="absolute top-[calc(100%+0.5rem)] right-0 w-80 bg-white/95 backdrop-blur-xl border border-black/10 rounded-xl shadow-2xl py-0 z-50 overflow-hidden">
                            <div className="flex justify-between items-center px-4 py-3 border-b border-black/5 bg-gray-50/50">
                                <span className="font-semibold text-sm">Notifications</span>
                                <button className="text-[0.7rem] text-primary hover:underline">Mark all read</button>
                            </div>

                            <div className="max-h-[20rem] overflow-y-auto">
                                {[
                                    { icon: 'person_add', color: 'bg-primary/15 text-primary', title: 'New user registered', desc: 'John Doe just signed up', time: '2 min ago', unread: true },
                                    { icon: 'check_circle', color: 'bg-success/15 text-success', title: 'Payment successful', desc: 'Invoice #8832 paid', time: '15 min ago', unread: true },
                                    { icon: 'warning', color: 'bg-warning/15 text-warning', title: 'Low storage', desc: 'Only 10% space remaining', time: '1 hour ago', unread: false }
                                ].map((notif, i) => (
                                    <div key={i} className={`flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition cursor-pointer ${notif.unread ? 'bg-primary/5' : ''}`}>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${notif.color}`}>
                                            <span className="material-icons-round text-base">{notif.icon}</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs font-bold text-textPrimary truncate">{notif.title}</p>
                                            <p className="text-[0.7rem] text-secondary truncate">{notif.desc}</p>
                                            <p className="text-[0.65rem] text-tertiary mt-1">{notif.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="px-4 py-3 border-t border-black/5 text-center bg-gray-50/50">
                                <button className="text-xs font-bold text-primary hover:text-primary/80">View all notifications</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* User Profile */}
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown('user')}
                        className={`flex items-center gap-2 px-2 py-1.5 bg-white/30 border border-black/5 rounded-full hover:bg-white/50 transition ${activeDropdown === 'user' ? 'bg-white/50' : ''}`}
                    >
                        <img src="https://ui-avatars.com/api/?name=Admin&background=0ea5e9&color=fff" alt="User" className="w-8 h-8 rounded-full" />
                        <div className="flex flex-col items-start pr-1">
                            <span className="text-xs font-bold text-textPrimary">Admin</span>
                            <span className="text-[0.65rem] text-tertiary">Administrator</span>
                        </div>
                        <span className={`material-icons-round text-tertiary text-base transition-transform ${activeDropdown === 'user' ? 'rotate-180' : ''}`}>expand_more</span>
                    </button>

                    {activeDropdown === 'user' && (
                        <div className="absolute top-[calc(100%+0.5rem)] right-0 w-64 bg-white/95 backdrop-blur-xl border border-black/10 rounded-xl shadow-2xl py-0 z-50 overflow-hidden">
                            <div className="flex items-start gap-3 p-4 border-b border-black/5 bg-gradient-to-br from-primary/10 to-transparent">
                                <div className="relative flex-shrink-0">
                                    <img src="https://ui-avatars.com/api/?name=Admin&background=0ea5e9&color=fff" alt="User" className="w-11 h-11 rounded-full border-2 border-white shadow-sm" />
                                    <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-success border-2 border-white rounded-full"></span>
                                </div>
                                <div className="flex flex-col">
                                    <strong className="text-sm">Admin User</strong>
                                    <small className="text-[0.7rem] text-tertiary">admin@ptos.com</small>
                                    <span className="mt-1 px-2 py-0.5 bg-primary/15 text-primary text-[0.6rem] font-bold rounded-full w-fit">Administrator</span>
                                </div>
                            </div>

                            <div className="p-3 bg-black/5 border-b border-black/5">
                                <div className="flex items-start gap-2 py-1">
                                    <span className="material-icons-round text-tertiary text-base mt-0.5">schedule</span>
                                    <div>
                                        <span className="block text-[0.65rem] text-tertiary uppercase tracking-wide">Last Login</span>
                                        <span className="text-xs font-medium text-textPrimary">Today, 09:45 AM</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2 py-1 mt-2">
                                    <span className="material-icons-round text-tertiary text-base mt-0.5">cloud</span>
                                    <div className="w-full">
                                        <span className="block text-[0.65rem] text-tertiary uppercase tracking-wide">Storage</span>
                                        <div className="w-full h-1.5 bg-black/10 rounded-full my-1 overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-primary to-navAccent w-[65%] rounded-full"></div>
                                        </div>
                                        <span className="text-xs font-medium text-textPrimary">6.5 GB / 10 GB</span>
                                    </div>
                                </div>
                            </div>

                            <div className="py-2">
                                {[
                                    { icon: 'photo_camera', text: 'Change Image' },
                                    { icon: 'lock', text: 'Change Password', path: '/auth-recover' },
                                    { icon: 'settings', text: 'Settings', path: '/pages/profile/overview' }
                                ].map((item, i) => (
                                    <button
                                        key={i}
                                        onClick={() => item.path && onNavigate(item.path)}
                                        className="w-full flex items-center gap-2 px-4 py-2 text-xs text-textPrimary hover:bg-primary/10 hover:text-primary transition group"
                                    >
                                        <span className="material-icons-round text-textSecondary group-hover:text-primary text-lg">{item.icon}</span>
                                        {item.text}
                                    </button>
                                ))}
                                <div className="h-px bg-black/5 my-1 mx-2"></div>
                                <button onClick={() => onNavigate('/auth-login')} className="w-full flex items-center gap-2 px-4 py-2 text-xs text-danger hover:bg-danger/10 transition group">
                                    <span className="material-icons-round text-danger text-lg">logout</span>
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
