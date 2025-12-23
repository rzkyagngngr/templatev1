import React, { useState, useEffect, useRef } from 'react';

export default function TopNav({ onNavigate }) {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [lang, setLang] = useState({ code: 'EN', flag: '🇺🇸' });

    const isFileProtocol = typeof window !== 'undefined' && window.location.protocol === 'file:';
    const logoSrc = 'https://s3-ptos-m.s3.ap-southeast-3.amazonaws.com/LAMPIRAN_UPDATE/icon.png';

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
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/icon?family=Material+Icons+Round');
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
                
                * {
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                }
                
                body {
                    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                    margin: 0;
                    padding: 0;
                }
                
                .liquid-glass-nav {
                    background: rgba(255, 255, 255, 0.12);
                    backdrop-filter: blur(1.5rem) saturate(1.8);
                    -webkit-backdrop-filter: blur(1.5rem) saturate(1.8);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
                    box-shadow: 
                        0 4px 30px rgba(0, 0, 0, 0.1),
                        0 0 0 1px rgba(255, 255, 255, 0.1) inset;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .liquid-glass-nav:hover {
                    background: rgba(255, 255, 255, 0.18);
                    box-shadow: 
                        0 8px 40px rgba(0, 0, 0, 0.15),
                        0 0 0 1px rgba(255, 255, 255, 0.15) inset;
                }
                
                .logo-orb {
                    position: relative;
                    animation: float 6s ease-in-out infinite;
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-5px) rotate(2deg); }
                }
                
                .logo-glow {
                    position: absolute;
                    inset: -8px;
                    background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
                    border-radius: 24px;
                    opacity: 0;
                    filter: blur(20px);
                    transition: opacity 0.5s ease;
                }
                
                .logo-orb:hover .logo-glow {
                    opacity: 0.6;
                    animation: pulse 2s ease-in-out infinite;
                }
                
                @keyframes pulse {
                    0%, 100% { opacity: 0.6; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(1.05); }
                }
                
                .logo-core {
                    position: relative;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .logo-orb:hover .logo-core {
                    transform: scale(1.05) rotate(5deg);
                    box-shadow: 
                        0 12px 48px rgba(59, 130, 246, 0.4),
                        inset 0 1px 0 rgba(255, 255, 255, 0.6);
                }
                
                .liquid-search {
                    background: rgba(255, 255, 255, 0.6);
                    backdrop-filter: blur(20px) saturate(180%);
                    -webkit-backdrop-filter: blur(20px) saturate(180%);
                    border: 1px solid rgba(255, 255, 255, 0.9);
                    box-shadow: 
                        0 2px 8px rgba(0, 0, 0, 0.04),
                        inset 0 1px 0 rgba(255, 255, 255, 1);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .liquid-search:hover, .liquid-search:focus-within {
                    background: rgba(255, 255, 255, 0.8);
                    box-shadow: 
                        0 4px 16px rgba(59, 130, 246, 0.12),
                        0 2px 8px rgba(0, 0, 0, 0.06),
                        inset 0 1px 0 rgba(255, 255, 255, 1);
                    border-color: rgba(59, 130, 246, 0.3);
                    transform: translateY(-1px);
                }
                
                .liquid-button {
                    background: rgba(255, 255, 255, 0.5);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.8);
                    box-shadow: 
                        0 2px 8px rgba(0, 0, 0, 0.04),
                        inset 0 1px 0 rgba(255, 255, 255, 0.9);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .liquid-button:hover {
                    background: rgba(255, 255, 255, 0.8);
                    border-color: rgba(59, 130, 246, 0.3);
                    box-shadow: 
                        0 4px 12px rgba(59, 130, 246, 0.15),
                        inset 0 1px 0 rgba(255, 255, 255, 1);
                    transform: translateY(-1px);
                }
                
                .liquid-button-active {
                    background: rgba(255, 255, 255, 0.95);
                    border-color: rgba(59, 130, 246, 0.4);
                    box-shadow: 
                        0 6px 20px rgba(59, 130, 246, 0.2),
                        inset 0 1px 0 rgba(255, 255, 255, 1);
                }
                
                .liquid-dropdown {
                    background: rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(40px) saturate(180%);
                    -webkit-backdrop-filter: blur(40px) saturate(180%);
                    border: 1px solid rgba(255, 255, 255, 0.9);
                    box-shadow: 
                        0 20px 60px rgba(0, 0, 0, 0.12),
                        0 4px 16px rgba(0, 0, 0, 0.08),
                        inset 0 1px 0 rgba(255, 255, 255, 1);
                    animation: dropdownSlide 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                
                @keyframes dropdownSlide {
                    from {
                        opacity: 0;
                        transform: translateY(-10px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                
                .notif-badge {
                    background: linear-gradient(135deg, #ef4444, #dc2626);
                    box-shadow: 
                        0 4px 12px rgba(239, 68, 68, 0.4),
                        inset 0 1px 0 rgba(255, 255, 255, 0.3);
                    animation: badgePulse 2s ease-in-out infinite;
                }
                
                @keyframes badgePulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
                
                .notif-ring {
                    animation: ringPulse 2s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                
                @keyframes ringPulse {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
                
                .status-online {
                    background: linear-gradient(135deg, #10b981, #059669);
                    box-shadow: 
                        0 2px 8px rgba(16, 185, 129, 0.4),
                        inset 0 1px 0 rgba(255, 255, 255, 0.5);
                    animation: statusPulse 3s ease-in-out infinite;
                }
                
                @keyframes statusPulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }
                
                .kbd-key {
                    background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.9));
                    border: 1px solid rgba(226, 232, 240, 0.8);
                    box-shadow: 
                        0 1px 2px rgba(0, 0, 0, 0.05),
                        inset 0 1px 0 rgba(255, 255, 255, 1);
                    transition: all 0.2s ease;
                }
                
                .liquid-search:focus-within .kbd-key {
                    background: linear-gradient(180deg, rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.05));
                    border-color: rgba(59, 130, 246, 0.3);
                }
                
                .dropdown-item {
                    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                }
                
                .dropdown-item::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.05), transparent);
                    transform: translateX(-100%);
                    transition: transform 0.6s ease;
                }
                
                .dropdown-item:hover::before {
                    transform: translateX(100%);
                }
                
                .gradient-orb {
                    box-shadow: 
                        0 4px 16px rgba(0, 0, 0, 0.1),
                        inset 0 1px 0 rgba(255, 255, 255, 0.4);
                }
                
                .unread-indicator {
                    background: linear-gradient(135deg, #3b82f6, #2563eb);
                    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.4);
                    animation: indicatorPulse 2s ease-in-out infinite;
                }
                
                @keyframes indicatorPulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.7; transform: scale(0.9); }
                }
                
                .storage-bar {
                    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
                    box-shadow: 
                        0 2px 8px rgba(59, 130, 246, 0.3),
                        inset 0 1px 0 rgba(255, 255, 255, 0.3);
                    animation: shimmer 3s linear infinite;
                    background-size: 200% 100%;
                }
                
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                
                .material-icons-round {
                    font-family: 'Material Icons Round';
                    font-weight: normal;
                    font-style: normal;
                    font-size: 24px;
                    line-height: 1;
                    letter-spacing: normal;
                    text-transform: none;
                    display: inline-block;
                    white-space: nowrap;
                    word-wrap: normal;
                    direction: ltr;
                    -webkit-font-smoothing: antialiased;
                }
            `}</style>
            
            <nav className="liquid-glass-nav sticky top-0 z-50 flex items-center justify-between px-6 py-2.5" ref={dropdownRef}>
                {/* Logo Section */}
                <div className="flex-none flex items-center gap-3">
                    <div className="logo-orb">
                        <div className="logo-glow"></div>
                        <div className="logo-core w-9 h-9 rounded-2xl flex items-center justify-center overflow-hidden">
                            <img src={logoSrc} alt="Glacia" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <h2 className="text-slate-800 text-xl font-black tracking-tight ">
                        Glacia
                    </h2>
                </div>

                {/* Search Bar */}
                <div className="flex-1 flex justify-center px-6">
                    <div className="liquid-search flex items-center px-5 py-2.5 rounded-full w-[26rem] max-w-full">
                        <span className="material-icons-round text-slate-500 text-lg mr-3">search</span>
                        <input
                            type="text"
                            placeholder="Search anything..."
                            className="bg-transparent border-none outline-none text-sm flex-1 text-slate-700 placeholder-slate-400 font-medium"
                        />
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex-none flex items-center gap-3">
                    {/* Language Selector */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown('lang')}
                            className={`liquid-button ${activeDropdown === 'lang' ? 'liquid-button-active' : ''} flex items-center justify-center p-2.5 rounded-full text-xl`}
                        >
                            <span>{lang.flag}</span>
                        </button>

                        {activeDropdown === 'lang' && (
                            <div className="liquid-dropdown absolute top-[calc(100%+0.75rem)] right-0 min-w-[11rem] rounded-3xl py-2 z-50">
                                {[
                                    { code: 'EN', flag: '🇺🇸', name: 'English' },
                                    { code: 'ID', flag: '🇮🇩', name: 'Indonesia' },
                                    { code: 'JP', flag: '🇯🇵', name: '日本語' },
                                    { code: 'CN', flag: '🇨🇳', name: '中文' }
                                ].map((l) => (
                                    <button
                                        key={l.code}
                                        onClick={() => changeLang(l.code, l.flag)}
                                        className={`dropdown-item w-full flex items-center gap-3 px-5 py-3.5 text-sm font-semibold transition-all duration-200 rounded-2xl mx-2 ${
                                            lang.code === l.code 
                                                ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600' 
                                                : 'text-slate-700 hover:bg-white/60'
                                        }`}
                                    >
                                        <span className="text-xl">{l.flag}</span> {l.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Notifications */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown('notif')}
                            className="liquid-button relative p-2.5 text-slate-600 hover:text-blue-600 rounded-full"
                        >
                            <span className="material-icons-round text-lg">notifications</span>
                            <span className="notif-badge absolute -top-0.5 -right-0.5 flex items-center justify-center w-4 h-4 text-[0.6rem] font-black text-white rounded-full">
                                3
                            </span>
                            <span className="notif-ring absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full opacity-75"></span>
                        </button>

                        {activeDropdown === 'notif' && (
                            <div className="liquid-dropdown absolute top-[calc(100%+0.75rem)] right-0 w-[24rem] rounded-3xl shadow-2xl py-0 z-50 overflow-hidden">
                                <div className="flex justify-between items-center px-6 py-4 border-b border-white/60">
                                    <span className="font-black text-sm text-slate-800">Notifications</span>
                                    <button className="text-xs text-blue-600 hover:text-blue-700 font-bold transition-colors">
                                        Mark all read
                                    </button>
                                </div>

                                <div className="max-h-[26rem] overflow-y-auto">
                                    {[
                                        { icon: 'person_add', color: 'from-blue-400 to-blue-600', title: 'New user registered', desc: 'John Doe just signed up', time: '2 min ago', unread: true },
                                        { icon: 'check_circle', color: 'from-emerald-400 to-emerald-600', title: 'Payment successful', desc: 'Invoice #8832 paid', time: '15 min ago', unread: true },
                                        { icon: 'warning', color: 'from-amber-400 to-amber-600', title: 'Low storage', desc: 'Only 10% space remaining', time: '1 hour ago', unread: false }
                                    ].map((notif, i) => (
                                        <div 
                                            key={i} 
                                            className={`dropdown-item flex items-start gap-4 px-6 py-4 hover:bg-white/70 cursor-pointer ${
                                                notif.unread ? 'bg-blue-50/40' : ''
                                            }`}
                                        >
                                            <div className={`gradient-orb w-11 h-11 rounded-2xl bg-gradient-to-br ${notif.color} flex items-center justify-center flex-shrink-0`}>
                                                <span className="material-icons-round text-slate-900 text-lg">{notif.icon}</span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-bold text-slate-800">{notif.title}</p>
                                                <p className="text-xs text-slate-500 mt-1 font-medium">{notif.desc}</p>
                                                <p className="text-[0.7rem] text-slate-700 mt-2 font-semibold">{notif.time}</p>
                                            </div>
                                            {notif.unread && (
                                                <span className="unread-indicator w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5"></span>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="px-6 py-4 border-t border-white/60 text-center bg-white/30">
                                    <button className="text-xs font-black text-blue-600 hover:text-blue-700 transition-colors">
                                        View all notifications
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* User Profile */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown('user')}
                            className={`liquid-button ${activeDropdown === 'user' ? 'liquid-button-active' : ''} flex items-center gap-2.5 px-3 py-2 rounded-full`}
                        >
                            <div className="relative">
                                <img 
                                    src="https://ui-avatars.com/api/?name=Admin&background=3b82f6&color=fff&bold=true" 
                                    alt="User" 
                                    className="w-8 h-8 rounded-lg shadow-lg border-2 border-white/80" 
                                />
                                <span className="status-online absolute -bottom-0.5 -right-0.5 w-3 h-3 border-2 border-white rounded-full"></span>
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-[0.7rem] font-black text-slate-800">Admin</span>
                                <span className="text-[0.6rem] text-slate-500 font-semibold">Administrator</span>
                            </div>
                            <span className={`material-icons-round text-slate-700 text-sm transition-transform duration-400 ${activeDropdown === 'user' ? 'rotate-180' : ''}`}>
                                expand_more
                            </span>
                        </button>

                        {activeDropdown === 'user' && (
                            <div className="liquid-dropdown absolute top-[calc(100%+0.75rem)] right-0 w-80 rounded-3xl shadow-2xl py-0 z-50 overflow-hidden">
                                {/* Profile Header */}
                                <div className="relative flex items-start gap-4 p-6 border-b border-white/60 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-transparent">
                                    <div className="relative">
                                        <img 
                                            src="https://ui-avatars.com/api/?name=Admin&background=3b82f6&color=fff&bold=true" 
                                            alt="User" 
                                            className="w-16 h-16 rounded-2xl shadow-xl border-[3px] border-white" 
                                        />
                                        <span className="status-online absolute -bottom-1 -right-1 w-5 h-5 border-[3px] border-white rounded-full"></span>
                                    </div>
                                    <div className="flex flex-col">
                                        <strong className="text-sm text-slate-800 font-black">Admin User</strong>
                                        <small className="text-xs text-slate-500 mt-1 font-semibold">admin@glacia.com</small>
                                        <span className="mt-2.5 px-3 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-[0.65rem] font-black rounded-xl w-fit shadow-sm">
                                            Administrator
                                        </span>
                                    </div>
                                </div>

                                {/* Stats Section */}
                                <div className="p-5 bg-gradient-to-br from-slate-50/30 to-transparent border-b border-white/60">
                                    <div className="flex items-start gap-3 py-2.5">
                                        <span className="material-icons-round text-slate-700 text-xl mt-0.5">schedule</span>
                                        <div>
                                            <span className="block text-[0.65rem] text-slate-500 uppercase tracking-wider font-black">
                                                Last Login
                                            </span>
                                            <span className="text-xs font-bold text-slate-700 mt-1.5 block">Today, 09:45 AM</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 py-2.5 mt-2">
                                        <span className="material-icons-round text-slate-700 text-xl mt-0.5">cloud</span>
                                        <div className="w-full">
                                            <span className="block text-[0.65rem] text-slate-500 uppercase tracking-wider font-black">
                                                Storage
                                            </span>
                                            <div className="w-full h-2.5 bg-slate-200/70 rounded-full my-2.5 overflow-hidden shadow-inner">
                                                <div className="storage-bar h-full w-[65%] rounded-full"></div>
                                            </div>
                                            <span className="text-xs font-bold text-slate-700">6.5 GB / 10 GB</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Menu Items */}
                                <div className="py-2">
                                    {[
                                        { icon: 'photo_camera', text: 'Change Image' },
                                        { icon: 'lock', text: 'Change Password', path: '/auth-recover' },
                                        { icon: 'settings', text: 'Settings', path: '/pages/profile/overview' }
                                    ].map((item, i) => (
                                        <button
                                            key={i}
                                            onClick={() => item.path && onNavigate(item.path)}
                                            className="dropdown-item w-full flex items-center gap-3 px-6 py-3.5 text-sm font-bold text-slate-700 hover:bg-white/70 hover:text-blue-600 group"
                                        >
                                            <span className="material-icons-round text-slate-700 group-hover:text-blue-600 text-xl transition-colors">
                                                {item.icon}
                                            </span>
                                            {item.text}
                                        </button>
                                    ))}
                                    <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-2 mx-5"></div>
                                    <button 
                                        onClick={() => onNavigate('/auth-login')} 
                                        className="dropdown-item w-full flex items-center gap-3 px-6 py-3.5 text-sm font-bold text-red-600 hover:bg-red-50/70 group"
                                    >
                                        <span className="material-icons-round text-xl">logout</span>
                                        Logout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}
