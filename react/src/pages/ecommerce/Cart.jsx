import React, { useState } from 'react';

export default function Cart() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Premium Wireless Headphones', price: 299.99, quantity: 1, image: 'https://picsum.photos/seed/prod1/200/200', color: 'Space Gray', size: 'One Size', warranty: '2 Years', inStock: true, seller: 'TechStore Official', shipping: 'Free' },
        { id: 2, name: 'Smart Fitness Watch', price: 199.99, quantity: 2, image: 'https://picsum.photos/seed/prod2/200/200', color: 'Silver', size: '42mm', warranty: '1 Year', inStock: true, seller: 'WatchHub', shipping: 'Free' },
        { id: 3, name: 'Portable Bluetooth Speaker', price: 79.99, quantity: 1, image: 'https://picsum.photos/seed/prod3/200/200', color: 'Blue', size: 'Standard', warranty: '6 Months', inStock: true, seller: 'AudioMax', shipping: '$5.00' },
        { id: 4, name: 'Wireless Gaming Mouse', price: 89.99, quantity: 1, image: 'https://picsum.photos/seed/prod6/200/200', color: 'Black', size: 'Standard', warranty: '1 Year', inStock: false, seller: 'GamerGear', shipping: 'Free' }
    ]);

    const [selectedItems, setSelectedItems] = useState([1, 2, 3]);
    const [couponCode, setCouponCode] = useState('');
    const [appliedCoupon, setAppliedCoupon] = useState(null);
    const [shippingMethod, setShippingMethod] = useState('standard');
    const [giftWrap, setGiftWrap] = useState(false);
    const [savedForLater, setSavedForLater] = useState([]);

    const coupons = [
        { code: 'SAVE20', discount: 20, type: 'percentage', minOrder: 100 },
        { code: 'FLAT50', discount: 50, type: 'fixed', minOrder: 200 },
        { code: 'FREESHIP', discount: 15, type: 'shipping', minOrder: 0 }
    ];

    const shippingOptions = [
        { id: 'standard', name: 'Standard Shipping', time: '5-7 days', price: 15.00 },
        { id: 'express', name: 'Express Shipping', time: '2-3 days', price: 35.00 },
        { id: 'overnight', name: 'Overnight Shipping', time: '1 day', price: 65.00 }
    ];

    const recommendations = [
        { name: 'USB-C Cable', price: 19.99, image: 'https://picsum.photos/seed/rec1/100/100' },
        { name: 'Phone Case', price: 24.99, image: 'https://picsum.photos/seed/rec2/100/100' },
        { name: 'Screen Protector', price: 14.99, image: 'https://picsum.photos/seed/rec3/100/100' },
        { name: 'Wireless Charger', price: 39.99, image: 'https://picsum.photos/seed/rec4/100/100' }
    ];

    const updateQuantity = (id, delta) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, Math.min(10, item.quantity + delta)) } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
        setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    };

    const saveForLater = (id) => {
        const item = cartItems.find(item => item.id === id);
        setSavedForLater([...savedForLater, item]);
        removeItem(id);
    };

    const moveToCart = (item) => {
        setCartItems([...cartItems, item]);
        setSavedForLater(savedForLater.filter(i => i.id !== item.id));
    };

    const toggleItemSelection = (id) => {
        setSelectedItems(prev => 
            prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
        );
    };

    const applyCoupon = () => {
        const coupon = coupons.find(c => c.code === couponCode.toUpperCase());
        if (coupon && subtotal >= coupon.minOrder) {
            setAppliedCoupon(coupon);
        }
    };

    const selectedCartItems = cartItems.filter(item => selectedItems.includes(item.id));
    const subtotal = selectedCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingCost = shippingOptions.find(opt => opt.id === shippingMethod)?.price || 0;
    const giftWrapCost = giftWrap ? 5.00 * selectedCartItems.length : 0;
    const tax = subtotal * 0.1;
    
    let discount = 0;
    if (appliedCoupon) {
        if (appliedCoupon.type === 'percentage') {
            discount = subtotal * (appliedCoupon.discount / 100);
        } else if (appliedCoupon.type === 'fixed') {
            discount = appliedCoupon.discount;
        } else if (appliedCoupon.type === 'shipping') {
            discount = shippingCost;
        }
    }

    const total = subtotal + tax + shippingCost + giftWrapCost - discount;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <nav className="text-sm text-slate-600 backdrop-blur-xl bg-white/40 px-4 py-2 rounded-2xl border border-white/60 shadow-lg shadow-blue-100/50 mb-6 inline-flex">
                <span className="hover:text-slate-900 cursor-pointer">Glacia</span>
                <span className="mx-2">/</span>
                <span className="hover:text-slate-900 cursor-pointer">Ecommerce</span>
                <span className="mx-2">/</span>
                <span className="text-slate-900 font-semibold">Shopping Cart</span>
            </nav>

            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900">Shopping Cart</h1>
                    <p className="text-slate-600 mt-2">{selectedCartItems.length} of {cartItems.length} items selected • {savedForLater.length} saved for later</p>
                </div>
                <div className="flex gap-3">
                    <button className="backdrop-blur-xl bg-white/60 hover:bg-white/80 px-5 py-2.5 rounded-2xl text-sm font-semibold text-slate-700 border border-white/60 shadow-lg transition-all">
                        <i className="mdi mdi-store mr-2"></i>Continue Shopping
                    </button>
                    <button className="backdrop-blur-xl bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-5 py-2.5 rounded-2xl text-sm font-bold text-white shadow-2xl shadow-red-500/40 transition-all">
                        <i className="mdi mdi-delete mr-2"></i>Clear Cart
                    </button>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 p-6 mb-6 shadow-2xl shadow-blue-200/40">
                <div className="flex items-center justify-between mb-4">
                    {['Cart', 'Shipping', 'Payment', 'Confirmation'].map((step, i) => (
                        <div key={i} className="flex items-center">
                            <div className={`flex items-center gap-3 ${i > 0 ? 'ml-4' : ''}`}>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${i === 0 ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white' : 'bg-white/60 text-slate-400'}`}>
                                    {i + 1}
                                </div>
                                <span className={`font-semibold ${i === 0 ? 'text-slate-900' : 'text-slate-500'}`}>{step}</span>
                            </div>
                            {i < 3 && <div className="w-24 h-1 bg-white/60 rounded-full mx-4"></div>}
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    {/* Select All */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 p-4 shadow-2xl shadow-blue-200/40">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input 
                                type="checkbox"
                                checked={selectedItems.length === cartItems.length}
                                onChange={(e) => setSelectedItems(e.target.checked ? cartItems.map(i => i.id) : [])}
                                className="w-5 h-5 rounded border-2 border-slate-300"
                            />
                            <span className="font-semibold text-slate-900">Select All Items ({cartItems.length})</span>
                        </label>
                    </div>

                    {/* Cart Items */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
                        <div className="p-6 border-b border-white/40 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-slate-900">Cart Items</h2>
                            <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold">
                                Sort by: Price ↓
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className={`p-5 backdrop-blur-xl rounded-2xl border transition-all ${selectedItems.includes(item.id) ? 'bg-blue-50/60 border-blue-300/60' : 'bg-white/40 border-white/60'} hover:bg-white/60`}>
                                    <div className="flex gap-5">
                                        <input 
                                            type="checkbox"
                                            checked={selectedItems.includes(item.id)}
                                            onChange={() => toggleItemSelection(item.id)}
                                            className="mt-1 w-5 h-5 rounded border-2 border-slate-300"
                                        />
                                        <img src={item.image} alt={item.name} className="w-24 h-24 rounded-2xl object-cover shadow-lg" />
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between mb-2">
                                                <div>
                                                    <h3 className="font-bold text-slate-900 text-lg mb-1">{item.name}</h3>
                                                    <p className="text-sm text-slate-600">Sold by: <span className="font-semibold text-blue-600">{item.seller}</span></p>
                                                    {!item.inStock && (
                                                        <span className="inline-block mt-1 px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-lg">
                                                            Out of Stock
                                                        </span>
                                                    )}
                                                </div>
                                                <button 
                                                    onClick={() => removeItem(item.id)}
                                                    className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-all"
                                                >
                                                    <i className="mdi mdi-close text-xl"></i>
                                                </button>
                                            </div>
                                            <div className="flex items-center gap-4 mb-3">
                                                <div className="text-sm text-slate-600">
                                                    <span className="font-semibold">Color:</span> {item.color}
                                                </div>
                                                <div className="text-sm text-slate-600">
                                                    <span className="font-semibold">Size:</span> {item.size}
                                                </div>
                                                <div className="text-sm text-slate-600">
                                                    <span className="font-semibold">Warranty:</span> {item.warranty}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4 mb-3">
                                                <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded-lg font-semibold">
                                                    {item.shipping === 'Free' ? '🚚 Free Shipping' : `🚚 Shipping: ${item.shipping}`}
                                                </span>
                                                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-lg font-semibold">
                                                    ✓ Verified Seller
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3 bg-white/60 rounded-xl p-2">
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="w-8 h-8 bg-white rounded-lg hover:bg-blue-50 transition-all flex items-center justify-center"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <i className="mdi mdi-minus text-slate-700"></i>
                                                    </button>
                                                    <span className="w-12 text-center font-bold text-slate-900">{item.quantity}</span>
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="w-8 h-8 bg-white rounded-lg hover:bg-blue-50 transition-all flex items-center justify-center"
                                                        disabled={item.quantity >= 10}
                                                    >
                                                        <i className="mdi mdi-plus text-slate-700"></i>
                                                    </button>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div className="text-right">
                                                        <div className="text-xs text-slate-500 line-through">${(item.price * 1.2 * item.quantity).toFixed(2)}</div>
                                                        <div className="text-2xl font-black text-blue-600">${(item.price * item.quantity).toFixed(2)}</div>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <button 
                                                            onClick={() => saveForLater(item.id)}
                                                            className="text-xs text-slate-600 hover:text-blue-600 font-semibold whitespace-nowrap"
                                                        >
                                                            💾 Save for later
                                                        </button>
                                                        <button className="text-xs text-slate-600 hover:text-blue-600 font-semibold whitespace-nowrap">
                                                            🔄 Compare
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Saved for Later */}
                    {savedForLater.length > 0 && (
                        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
                            <div className="p-6 border-b border-white/40">
                                <h2 className="text-xl font-bold text-slate-900">Saved for Later ({savedForLater.length})</h2>
                            </div>
                            <div className="p-6 grid grid-cols-4 gap-4">
                                {savedForLater.map((item) => (
                                    <div key={item.id} className="p-3 bg-white/60 rounded-2xl border border-white/60">
                                        <img src={item.image} alt={item.name} className="w-full h-24 object-cover rounded-xl mb-2" />
                                        <p className="text-sm font-semibold text-slate-900 mb-1 truncate">{item.name}</p>
                                        <p className="text-lg font-bold text-blue-600 mb-2">${item.price}</p>
                                        <button 
                                            onClick={() => moveToCart(item)}
                                            className="w-full py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs font-semibold transition-all"
                                        >
                                            Move to Cart
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Recommendations */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
                        <div className="p-6 border-b border-white/40">
                            <h2 className="text-xl font-bold text-slate-900">Frequently Bought Together</h2>
                        </div>
                        <div className="p-6 grid grid-cols-4 gap-4">
                            {recommendations.map((item, i) => (
                                <div key={i} className="p-3 bg-white/60 rounded-2xl border border-white/60 hover:scale-105 transition-transform cursor-pointer">
                                    <img src={item.image} alt={item.name} className="w-full h-24 object-cover rounded-xl mb-2" />
                                    <p className="text-sm font-semibold text-slate-900 mb-1 truncate">{item.name}</p>
                                    <p className="text-lg font-bold text-blue-600 mb-2">${item.price}</p>
                                    <button className="w-full py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-lg text-xs font-semibold transition-all">
                                        + Add to Cart
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Coupon Code */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-emerald-500/90 to-emerald-600/90 rounded-3xl p-6 text-white border border-emerald-400/30 shadow-2xl shadow-emerald-400/40">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-3 bg-white/20 rounded-2xl">
                                <i className="mdi mdi-ticket-percent text-2xl"></i>
                            </div>
                            <div>
                                <h3 className="font-bold">Have a Coupon?</h3>
                                <p className="text-xs text-emerald-100">Enter code to get discount</p>
                            </div>
                        </div>
                        <div className="flex gap-2 mb-3">
                            <input 
                                type="text" 
                                placeholder="Enter coupon code"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                className="flex-1 px-4 py-2.5 bg-white/20 border border-white/40 rounded-xl text-sm font-semibold text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                            <button 
                                onClick={applyCoupon}
                                className="px-5 py-2.5 bg-white text-emerald-600 rounded-xl text-sm font-bold hover:bg-emerald-50 transition-all"
                            >
                                Apply
                            </button>
                        </div>
                        {appliedCoupon && (
                            <div className="p-3 bg-white/20 rounded-xl">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold">✓ {appliedCoupon.code} Applied</span>
                                    <button onClick={() => setAppliedCoupon(null)} className="text-white/80 hover:text-white">
                                        <i className="mdi mdi-close"></i>
                                    </button>
                                </div>
                            </div>
                        )}
                        <div className="mt-3 text-xs text-emerald-100">
                            Available: SAVE20 (20% off), FLAT50 ($50 off), FREESHIP (Free shipping)
                        </div>
                    </div>

                    {/* Shipping Method */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-purple-200/40">
                        <div className="p-6 border-b border-white/40">
                            <h2 className="text-xl font-bold text-slate-900">Shipping Method</h2>
                        </div>
                        <div className="p-6 space-y-3">
                            {shippingOptions.map((option) => (
                                <label key={option.id} className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${shippingMethod === option.id ? 'border-blue-500 bg-blue-50/60' : 'border-white/60 bg-white/40 hover:bg-white/60'}`}>
                                    <div className="flex items-center gap-3">
                                        <input 
                                            type="radio"
                                            name="shipping"
                                            checked={shippingMethod === option.id}
                                            onChange={() => setShippingMethod(option.id)}
                                            className="w-5 h-5"
                                        />
                                        <div>
                                            <div className="font-bold text-slate-900">{option.name}</div>
                                            <div className="text-xs text-slate-600">{option.time}</div>
                                        </div>
                                    </div>
                                    <div className="font-bold text-blue-600">${option.price.toFixed(2)}</div>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Gift Wrap */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 p-6 shadow-2xl shadow-purple-200/40">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input 
                                type="checkbox"
                                checked={giftWrap}
                                onChange={(e) => setGiftWrap(e.target.checked)}
                                className="w-5 h-5 rounded border-2 border-slate-300"
                            />
                            <div className="flex-1">
                                <div className="font-bold text-slate-900">🎁 Add Gift Wrapping</div>
                                <div className="text-xs text-slate-600">$5.00 per item</div>
                            </div>
                            <div className="font-bold text-blue-600">${(5 * selectedCartItems.length).toFixed(2)}</div>
                        </label>
                    </div>

                    {/* Order Summary */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-purple-200/40 sticky top-6">
                        <div className="p-6 border-b border-white/40">
                            <h2 className="text-xl font-bold text-slate-900">Order Summary</h2>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-600 font-semibold">Subtotal ({selectedCartItems.length} items)</span>
                                <span className="text-slate-900 font-bold">${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-600 font-semibold">Shipping</span>
                                <span className="text-slate-900 font-bold">${shippingCost.toFixed(2)}</span>
                            </div>
                            {giftWrap && (
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-600 font-semibold">Gift Wrapping</span>
                                    <span className="text-slate-900 font-bold">${giftWrapCost.toFixed(2)}</span>
                                </div>
                            )}
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-600 font-semibold">Tax (10%)</span>
                                <span className="text-slate-900 font-bold">${tax.toFixed(2)}</span>
                            </div>
                            {discount > 0 && (
                                <div className="flex justify-between text-sm">
                                    <span className="text-emerald-600 font-semibold">Discount</span>
                                    <span className="text-emerald-600 font-bold">-${discount.toFixed(2)}</span>
                                </div>
                            )}
                            <div className="pt-4 border-t border-white/40">
                                <div className="flex justify-between">
                                    <span className="text-lg font-bold text-slate-900">Total</span>
                                    <span className="text-3xl font-black text-blue-600">${total.toFixed(2)}</span>
                                </div>
                                {discount > 0 && (
                                    <div className="text-xs text-emerald-600 text-right mt-1">
                                        You saved ${discount.toFixed(2)}!
                                    </div>
                                )}
                            </div>
                            <button 
                                disabled={selectedCartItems.length === 0 || selectedCartItems.some(item => !item.inStock)}
                                className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-2xl text-sm font-bold shadow-2xl shadow-blue-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Proceed to Checkout <i className="mdi mdi-arrow-right ml-2"></i>
                            </button>
                            <div className="text-xs text-slate-500 text-center">
                                Secure checkout powered by SSL encryption
                            </div>
                        </div>
                        
                        {/* Trust Badges */}
                        <div className="px-6 pb-6">
                            <div className="grid grid-cols-3 gap-2">
                                <div className="text-center p-2 bg-white/60 rounded-xl">
                                    <i className="mdi mdi-shield-check text-2xl text-emerald-500"></i>
                                    <div className="text-xs font-semibold text-slate-700 mt-1">Secure</div>
                                </div>
                                <div className="text-center p-2 bg-white/60 rounded-xl">
                                    <i className="mdi mdi-truck-fast text-2xl text-blue-500"></i>
                                    <div className="text-xs font-semibold text-slate-700 mt-1">Fast Ship</div>
                                </div>
                                <div className="text-center p-2 bg-white/60 rounded-xl">
                                    <i className="mdi mdi-undo-variant text-2xl text-purple-500"></i>
                                    <div className="text-xs font-semibold text-slate-700 mt-1">Easy Return</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
