import React from 'react';
import { DollarSign, Download } from 'lucide-react';

export default function EmailBilling() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <div className="w-full space-y-6">
                <div>
                    <nav className="flex text-gray-600 text-sm mb-3">
                        <span className="hover:text-gray-900 cursor-pointer transition">Glacia</span>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-semibold">Email Template - Billing</span>
                    </nav>
                    <h1 className="text-4xl font-bold text-gray-900">Billing Email Template</h1>
                </div>
                <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl overflow-hidden shadow-xl shadow-black/5 p-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 pb-6 border-b border-white/40">
                            <DollarSign className="w-8 h-8 text-green-600" />
                            <div>
                                <p className="text-gray-900 font-bold text-lg">Invoice #2024-001</p>
                                <p className="text-gray-700 text-sm">Billing statement for your account</p>
                            </div>
                        </div>
                        <div className="backdrop-blur-2xl bg-white/50 rounded-3xl p-6 border border-white/40">
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Subscription Plan:</span>
                                    <span className="text-gray-900 font-semibold">Premium</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Billing Period:</span>
                                    <span className="text-gray-900 font-semibold">Jan 1 - Jan 31, 2024</span>
                                </div>
                                <div className="border-t border-white/40 pt-4 flex justify-between">
                                    <span className="text-gray-900 font-bold">Amount Due:</span>
                                    <span className="text-2xl font-bold text-green-600">$1,500.00</span>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-4 text-center shadow-lg shadow-green-300/30">
                                <button className="text-white font-bold flex items-center justify-center gap-2 w-full">
                                    <Download size={18} /> View Invoice
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
