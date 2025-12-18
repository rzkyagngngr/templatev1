import React from 'react';
import { Mail, Send } from 'lucide-react';

export default function EmailBasic() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <div className="w-full space-y-6">
                <div>
                    <nav className="flex text-gray-600 text-sm mb-3">
                        <span className="hover:text-gray-900 cursor-pointer transition">Glacia</span>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-semibold">Email Template - Basic</span>
                    </nav>
                    <h1 className="text-4xl font-bold text-gray-900">Email Templates</h1>
                </div>
                <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl overflow-hidden shadow-xl shadow-black/5 p-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 pb-6 border-b border-white/40">
                            <Mail className="w-6 h-6 text-gray-700" />
                            <div>
                                <p className="text-gray-900 font-bold">Subject:</p>
                                <p className="text-gray-700">Welcome to our platform</p>
                            </div>
                        </div>
                        <div className="backdrop-blur-2xl bg-white/50 rounded-3xl p-6 border border-white/40">
                            <p className="text-gray-900 font-semibold mb-4">Hi John,</p>
                            <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                                Welcome to our platform. We're excited to have you on board. With our service, you'll be able to manage your projects more efficiently and collaborate seamlessly with your team.
                            </p>
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-4 text-center mb-6 shadow-lg shadow-blue-300/30">
                                <button className="text-white font-bold flex items-center justify-center gap-2 w-full">
                                    <Send size={18} /> Get Started
                                </button>
                            </div>
                            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                                If you have any questions or need support, please don't hesitate to reach out to our team.
                            </p>
                            <div className="mt-8 pt-6 border-t border-white/40">
                                <p className="text-gray-900 font-semibold mb-2">Best regards,</p>
                                <p className="text-gray-700 text-sm">The Platform Team</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
