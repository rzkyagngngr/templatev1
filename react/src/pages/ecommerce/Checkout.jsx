import React, { useState } from 'react';

export default function Checkout() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zipCode: '',
        country: '',
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: ''
    });

    const orderItems = [
        { name: 'Premium Wireless Headphones', quantity: 1, price: 299.99 },
        { name: 'Smart Fitness Watch', quantity: 2, price: 399.98 },
        { name: 'Portable Bluetooth Speaker', quantity: 1, price: 79.99 }
    ];

    const subtotal = 779.96;
    const shipping = 15.00;
    const tax = 77.99;
    const total = 872.95;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <nav className="text-sm text-slate-600 backdrop-blur-xl bg-white/40 px-4 py-2 rounded-2xl border border-white/60 shadow-lg shadow-blue-100/50 mb-6 inline-flex">
                <span className="hover:text-slate-900 cursor-pointer">Glacia</span>
                <span className="mx-2">/</span>
                <span className="hover:text-slate-900 cursor-pointer">Ecommerce</span>
                <span className="mx-2">/</span>
                <span className="text-slate-900 font-semibold">Checkout</span>
            </nav>

            <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900">Checkout</h1>
                <p className="text-slate-600 mt-2">Complete your purchase</p>
            </div>

            <div className="flex justify-center mb-8">
                <div className="flex items-center gap-4">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= s ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl shadow-blue-500/40' : 'bg-white/60 text-slate-400 border-2 border-white/80'}`}>
                                {s}
                            </div>
                            {s < 3 && <div className={`w-20 h-1 rounded-full ${step > s ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : 'bg-white/60'}`}></div>}
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40 p-6">
                        {step === 1 && (
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Shipping Information</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                                        <input 
                                            type="email"
                                            placeholder="you@example.com"
                                            className="w-full px-4 py-3 bg-white/60 border border-white/80 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                                            <input 
                                                type="text"
                                                placeholder="John"
                                                className="w-full px-4 py-3 bg-white/60 border border-white/80 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                                            <input 
                                                type="text"
                                                placeholder="Doe"
                                                className="w-full px-4 py-3 bg-white/60 border border-white/80 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Address</label>
                                        <input 
                                            type="text"
                                            placeholder="123 Main St"
                                            className="w-full px-4 py-3 bg-white/60 border border-white/80 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">City</label>
                                            <input 
                                                type="text"
                                                placeholder="New York"
                                                className="w-full px-4 py-3 bg-white/60 border border-white/80 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">ZIP Code</label>
                                            <input 
                                                type="text"
                                                placeholder="10001"
                                                className="w-full px-4 py-3 bg-white/60 border border-white/80 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                            />
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => setStep(2)}
                                        className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-2xl font-bold shadow-2xl shadow-blue-500/40 transition-all"
                                    >
                                        Continue to Payment
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Payment Method</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Card Number</label>
                                        <input 
                                            type="text"
                                            placeholder="1234 5678 9012 3456"
                                            className="w-full px-4 py-3 bg-white/60 border border-white/80 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Cardholder Name</label>
                                        <input 
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3 bg-white/60 border border-white/80 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Expiry Date</label>
                                            <input 
                                                type="text"
                                                placeholder="MM/YY"
                                                className="w-full px-4 py-3 bg-white/60 border border-white/80 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">CVV</label>
                                            <input 
                                                type="text"
                                                placeholder="123"
                                                className="w-full px-4 py-3 bg-white/60 border border-white/80 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <button 
                                            onClick={() => setStep(1)}
                                            className="flex-1 py-4 bg-white/60 hover:bg-white/80 text-slate-700 rounded-2xl font-bold border border-white/80 transition-all"
                                        >
                                            Back
                                        </button>
                                        <button 
                                            onClick={() => setStep(3)}
                                            className="flex-1 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-2xl font-bold shadow-2xl shadow-blue-500/40 transition-all"
                                        >
                                            Review Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Review & Confirm</h2>
                                <div className="p-6 bg-white/60 rounded-2xl border border-white/80 mb-6">
                                    <h3 className="font-bold text-slate-900 mb-3">Shipping To:</h3>
                                    <p className="text-slate-700">John Doe</p>
                                    <p className="text-slate-700">123 Main St</p>
                                    <p className="text-slate-700">New York, 10001</p>
                                </div>
                                <div className="p-6 bg-white/60 rounded-2xl border border-white/80 mb-6">
                                    <h3 className="font-bold text-slate-900 mb-3">Payment Method:</h3>
                                    <p className="text-slate-700">Card ending in 3456</p>
                                </div>
                                <div className="flex gap-3">
                                    <button 
                                        onClick={() => setStep(2)}
                                        className="flex-1 py-4 bg-white/60 hover:bg-white/80 text-slate-700 rounded-2xl font-bold border border-white/80 transition-all"
                                    >
                                        Back
                                    </button>
                                    <button className="flex-1 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-2xl font-bold shadow-2xl shadow-emerald-500/40 transition-all">
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-purple-200/40">
                        <div className="p-6 border-b border-white/40">
                            <h2 className="text-xl font-bold text-slate-900">Order Summary</h2>
                        </div>
                        <div className="p-6">
                            <div className="space-y-3 mb-6">
                                {orderItems.map((item, idx) => (
                                    <div key={idx} className="flex justify-between text-sm">
                                        <div>
                                            <p className="font-semibold text-slate-900">{item.name}</p>
                                            <p className="text-slate-600">Qty: {item.quantity}</p>
                                        </div>
                                        <span className="font-bold text-slate-900">${item.price.toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-3 pt-4 border-t border-white/40">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-600 font-semibold">Subtotal</span>
                                    <span className="text-slate-900 font-bold">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-600 font-semibold">Shipping</span>
                                    <span className="text-slate-900 font-bold">${shipping.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-600 font-semibold">Tax</span>
                                    <span className="text-slate-900 font-bold">${tax.toFixed(2)}</span>
                                </div>
                                <div className="pt-4 border-t border-white/40">
                                    <div className="flex justify-between">
                                        <span className="text-lg font-bold text-slate-900">Total</span>
                                        <span className="text-3xl font-black text-blue-600">${total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
