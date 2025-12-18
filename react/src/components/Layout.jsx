import React from 'react';
import TopNav from './TopNav';
import BottomNav from './BottomNav';

export default function Layout({ children, activePage, onNavigate }) {
    const isAuthPage = activePage === 'auth' || activePage.startsWith('auth-');

    if (isAuthPage) {
        return (
            <div className="min-h-screen bg-bg text-textPrimary flex items-center justify-center p-4">
                {children}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-bg text-textPrimary bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pb-28">
            <TopNav onNavigate={onNavigate} />
            <main className="max-w-[75rem] mx-auto px-4 py-6">
                {children}
            </main>
            <BottomNav activeTab={activePage} onNavigate={onNavigate} />
        </div>
    );
}
