import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { navConfig } from '../config/navConfig';

export default function GlassSplitLayout({ activeTab }) { // activeTab comes from BottomNav (apps, pages, ui)
    const location = useLocation();
    const navigate = useNavigate();

    // Find current active category data
    const categoryData = navConfig[activeTab];

    // State for selected Submenu Item (Left Panel)
    const [activeSubItem, setActiveSubItem] = useState(null);

    // Effect to internalize URL state to UI state
    useEffect(() => {
        if (!categoryData) return;

        // Try to find the active subItem based on the current path
        const foundSubItem = categoryData.items.find(item =>
            location.pathname.includes(`/apps/${item.id}`) ||
            location.pathname.includes(`/ui/${item.id}`) ||
            location.pathname.includes(`/pages/${item.id}`) ||
            (item.subItems && item.subItems.some(sub => location.pathname === sub.path))
        );

        if (foundSubItem) {
            setActiveSubItem(foundSubItem.id);
        } else if (categoryData.items.length > 0 && location.pathname === `/${activeTab}`) {
            // Default to first item if just visited the tab root? 
            // Or maybe we don't auto-select. Let's auto-select for better UX.
            setActiveSubItem(categoryData.items[0].id);
            // Optionally navigate to it? No, let user explore ? 
            // Actually, if we are in a 3-col layout, we probably want to show something.
        }
    }, [location.pathname, categoryData, activeTab]);

    const handleSubItemClick = (itemId) => {
        setActiveSubItem(itemId);
        // If the item has no sub-sub items (like Chat might maybe?), navigate to it directly?
        // But our config has subItems for most. 
        // If it has subItems, we default to the first one?
        const item = categoryData.items.find(i => i.id === itemId);
        if (item && item.subItems && item.subItems.length > 0) {
            navigate(item.subItems[0].path);
        }
    };

    if (!categoryData) return <Outlet />;

    return (
        <div className="flex h-[calc(100vh-8rem)] gap-6 p-2 mx-auto max-w-[90rem]">
            {/* Column 1: Submenu (Left Panel) */}
            <div className="w-16 md:w-20 lg:w-64 flex-none flex flex-col gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-y-auto custom-scrollbar">
                <div className="text-xs font-bold =/40 uppercase tracking-widest px-2 mb-2 hidden lg:block">
                    {categoryData.label}
                </div>
                {categoryData.items.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleSubItemClick(item.id)}
                        className={`group flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 ${activeSubItem === item.id
                                ? 'bg-primary/20 shadow-[0_0_20px_rgba(14,165,233,0.3)] border border-primary/30'
                                : 'hover:bg-white/10 border border-transparent'
                            }`}
                    >
                        <span className={`material-icons-round text-2xl transition-colors ${activeSubItem === item.id ? 'text-primary' : 'text-slate-700 group-hover:='
                            }`}>
                            {item.icon}
                        </span>
                        <span className={`text-sm font-medium hidden lg:block transition-colors ${activeSubItem === item.id ? '=' : 'text-slate-700 group-hover:='
                            }`}>
                            {item.label}
                        </span>
                    </button>
                ))}
            </div>

            {/* Column 2: Sub-Sub Menu (Right Panel) - Detail List */}
            {/* Only show if the activeSubItem has subItems */}
            {(() => {
                const activeItemData = categoryData.items.find(i => i.id === activeSubItem);
                if (!activeItemData || !activeItemData.subItems || activeItemData.subItems.length === 0) {
                    return null;
                }

                return (
                    <div className="w-48 lg:w-60 flex-none flex flex-col gap-1 bg-white/5 backdrop-blur-md border border-white/5 rounded-3xl p-3 shadow-lg overflow-y-auto custom-scrollbar">
                        <div className="text-xs font-bold =/30 uppercase tracking-widest px-3 py-2 mb-1">
                            {activeItemData.label}
                        </div>
                        {activeItemData.subItems.map((subItem) => (
                            <button
                                key={subItem.id}
                                onClick={() => navigate(subItem.path)}
                                className={`text-left px-4 py-3 rounded-xl text-sm transition-all duration-200 ${location.pathname === subItem.path
                                        ? 'bg-white/10 text-slate-900 font-medium shadow-inner'
                                        : 'text-slate-700 hover:text-slate-900 hover:bg-white/5'
                                    }`}
                            >
                                {subItem.label}
                            </button>
                        ))}
                    </div>
                );
            })()}

            {/* Column 3: Main Content (Center) */}
            <div className="flex-1 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-y-auto custom-scrollbar relative">
                {/* Decorative glow */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>

                <Outlet />
            </div>
        </div>
    );
}
