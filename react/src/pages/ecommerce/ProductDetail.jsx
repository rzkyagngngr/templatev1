import React, { useState } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';

export default function ProductDetail() {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('Space Gray');
    const [selectedSize, setSelectedSize] = useState('One Size');
    const [activeTab, setActiveTab] = useState('description');
    const [showCompare, setShowCompare] = useState(false);
    const [inWishlist, setInWishlist] = useState(false);
    const [selectedWarranty, setSelectedWarranty] = useState('standard');
    const [reviewFilter, setReviewFilter] = useState('all');
    const [showQA, setShowQA] = useState(false);

    const product = {
        name: 'Premium Wireless Headphones Pro Max',
        brand: 'AudioMax',
        sku: 'AMX-WH-2024-PRO',
        price: 299.99,
        oldPrice: 399.99,
        discount: 25,
        rating: 4.8,
        reviews: 342,
        sold: 1250,
        views: 8450,
        description: 'Experience superior sound quality with our Premium Wireless Headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for all-day wear. Industry-leading ANC technology blocks out ambient noise for immersive listening.',
        longDescription: 'Engineered for audiophiles and professionals, these headphones deliver studio-quality sound with deep bass, clear mids, and crisp highs. The adaptive noise cancellation adjusts to your environment automatically. Premium materials including memory foam ear cushions and aircraft-grade aluminum ensure durability and comfort.',
        features: [
            { icon: 'mdi-headphones', title: 'Active Noise Cancellation', desc: 'Industry-leading ANC blocks 99% ambient noise' },
            { icon: 'mdi-battery-high', title: '30-Hour Battery Life', desc: 'All-day listening with quick charge support' },
            { icon: 'mdi-memory', title: 'Premium Memory Foam', desc: 'Ultra-comfortable for extended wear' },
            { icon: 'mdi-bluetooth', title: 'Bluetooth 5.0', desc: 'Stable connection up to 30m range' },
            { icon: 'mdi-microphone', title: 'HD Microphone', desc: 'Crystal clear calls with noise reduction' },
            { icon: 'mdi-folder', title: 'Foldable Design', desc: 'Compact storage with premium case' },
            { icon: 'mdi-water', title: 'Water Resistant', desc: 'IPX4 rated for sweat and rain' },
            { icon: 'mdi-equalizer', title: 'Customizable EQ', desc: 'Personalize your sound profile' }
        ],
        specs: {
            'Driver Size': '40mm Dynamic Drivers',
            'Frequency Response': '20Hz - 40kHz',
            'Impedance': '32 Ohms',
            'Weight': '250g',
            'Bluetooth Version': '5.0 with aptX HD',
            'Charging Time': '2 hours (USB-C)',
            'Battery Life': '30 hours (ANC on), 40 hours (ANC off)',
            'Connectivity': 'Bluetooth 5.0, 3.5mm aux',
            'Codecs': 'AAC, aptX, aptX HD, LDAC',
            'Microphone': 'Dual beam-forming mics'
        },
        colors: [
            { name: 'Space Gray', hex: '#4A5568', available: true },
            { name: 'Silver', hex: '#CBD5E0', available: true },
            { name: 'Rose Gold', hex: '#ED8936', available: true },
            { name: 'Midnight Blue', hex: '#2C5282', available: false }
        ],
        sizes: ['One Size'],
        images: [
            'https://picsum.photos/seed/prod1/800/800',
            'https://picsum.photos/seed/prod1a/800/800',
            'https://picsum.photos/seed/prod1b/800/800',
            'https://picsum.photos/seed/prod1c/800/800',
            'https://picsum.photos/seed/prod1d/800/800',
            'https://picsum.photos/seed/prod1e/800/800'
        ],
        stock: 45,
        category: 'Audio',
        warranty: [
            { id: 'standard', name: 'Standard Warranty', duration: '1 Year', price: 0 },
            { id: 'extended', name: 'Extended Warranty', duration: '2 Years', price: 29.99 },
            { id: 'premium', name: 'Premium Care', duration: '3 Years + Accidental', price: 59.99 }
        ],
        shipping: {
            standard: { time: '5-7 days', price: 0 },
            express: { time: '2-3 days', price: 15.00 },
            overnight: { time: '1 day', price: 35.00 }
        },
        inStock: true,
        returnPolicy: '30-day money-back guarantee',
        seller: 'AudioMax Official Store',
        sellerRating: 4.9,
        sellerSales: 15420
    };

    const reviews = [
        { id: 1, name: 'John Smith', rating: 5, date: '2 days ago', verified: true, helpful: 45, comment: 'Amazing sound quality! The noise cancellation is top-notch. Battery lasts exactly as advertised.', images: ['https://picsum.photos/seed/rev1/200/200', 'https://picsum.photos/seed/rev2/200/200'] },
        { id: 2, name: 'Sarah Johnson', rating: 4, date: '1 week ago', verified: true, helpful: 32, comment: 'Great headphones, very comfortable for long use. Only wish the case was a bit more compact.', images: [] },
        { id: 3, name: 'Mike Wilson', rating: 5, date: '2 weeks ago', verified: true, helpful: 28, comment: 'Best purchase this year. Highly recommended for music producers and audiophiles!', images: ['https://picsum.photos/seed/rev3/200/200'] },
        { id: 4, name: 'Emily Chen', rating: 5, date: '3 weeks ago', verified: true, helpful: 21, comment: 'Perfect for travel. ANC blocks out airplane noise completely. Comfortable for 10+ hour flights.', images: [] },
        { id: 5, name: 'David Brown', rating: 4, date: '1 month ago', verified: true, helpful: 18, comment: 'Excellent sound and build quality. Slightly heavy but worth it for the features.', images: [] },
        { id: 6, name: 'Lisa Anderson', rating: 5, date: '1 month ago', verified: true, helpful: 15, comment: 'Love the customizable EQ! App integration is seamless. Battery life is incredible.', images: ['https://picsum.photos/seed/rev4/200/200'] }
    ];

    const qaItems = [
        { question: 'Is this compatible with iPhone?', answer: 'Yes, fully compatible with all iOS devices via Bluetooth. Also supports Android and Windows.', helpful: 34, date: '1 week ago' },
        { question: 'Can I use these while exercising?', answer: 'Yes, they are IPX4 rated for sweat and light rain resistance. Perfect for gym use.', helpful: 28, date: '2 weeks ago' },
        { question: 'How long does shipping take?', answer: 'Standard shipping is 5-7 days. Express (2-3 days) and overnight options are available.', helpful: 22, date: '3 weeks ago' },
        { question: 'Does it come with a warranty?', answer: 'Yes, includes 1-year standard warranty. Extended warranty options available at checkout.', helpful: 19, date: '1 month ago' }
    ];

    const relatedProducts = [
        { name: 'Wireless Earbuds Pro', price: 149.99, oldPrice: 199.99, rating: 4.7, image: 'https://picsum.photos/seed/rel1/200/200' },
        { name: 'USB-C Charging Cable', price: 19.99, oldPrice: 29.99, rating: 4.5, image: 'https://picsum.photos/seed/rel2/200/200' },
        { name: 'Headphone Stand', price: 39.99, oldPrice: 49.99, rating: 4.6, image: 'https://picsum.photos/seed/rel3/200/200' },
        { name: 'Travel Case Premium', price: 29.99, oldPrice: 39.99, rating: 4.8, image: 'https://picsum.photos/seed/rel4/200/200' }
    ];

    const ratingDistribution = {
        labels: ['5★', '4★', '3★', '2★', '1★'],
        datasets: [{
            data: [210, 85, 32, 10, 5],
            backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#f97316', '#ef4444']
        }]
    };

    const priceHistory = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Price',
            data: [399, 379, 349, 329, 319, 299],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        }]
    };

    const handleAddToCart = () => {
        // Add to cart logic
        alert(`Added ${quantity} ${product.name} to cart`);
    };

    const filteredReviews = reviewFilter === 'all' ? reviews : reviews.filter(r => r.rating === parseInt(reviewFilter));

    const warrantyPrice = product.warranty.find(w => w.id === selectedWarranty)?.price || 0;
    const totalPrice = (product.price + warrantyPrice) * quantity;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <nav className="text-sm text-slate-600 backdrop-blur-xl bg-white/40 px-4 py-2 rounded-2xl border border-white/60 shadow-lg shadow-blue-100/50 mb-6 inline-flex">
                <span className="hover:text-slate-900 cursor-pointer">Glacia</span>
                <span className="mx-2">/</span>
                <span className="hover:text-slate-900 cursor-pointer">Ecommerce</span>
                <span className="mx-2">/</span>
                <span className="hover:text-slate-900 cursor-pointer">{product.category}</span>
                <span className="mx-2">/</span>
                <span className="text-slate-900 font-semibold">{product.name}</span>
            </nav>

            <div className="flex items-center gap-3 mb-6">
                <button className="backdrop-blur-xl bg-white/60 hover:bg-white/80 px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 border border-white/60 shadow-lg transition-all">
                    <i className="mdi mdi-arrow-left mr-2"></i>Back to Products
                </button>
                <div className="flex items-center gap-2 ml-auto">
                    <button 
                        onClick={() => setInWishlist(!inWishlist)}
                        className={`p-3 rounded-xl transition-all ${inWishlist ? 'bg-pink-500 text-white shadow-xl shadow-pink-500/40' : 'bg-white/60 hover:bg-white/80 text-slate-700'} border border-white/60`}
                    >
                        <i className="mdi mdi-heart"></i>
                    </button>
                    <button className="p-3 bg-white/60 hover:bg-white/80 text-slate-700 rounded-xl border border-white/60 transition-all">
                        <i className="mdi mdi-share-variant"></i>
                    </button>
                    <button 
                        onClick={() => setShowCompare(!showCompare)}
                        className="p-3 bg-white/60 hover:bg-white/80 text-slate-700 rounded-xl border border-white/60 transition-all"
                    >
                        <i className="mdi mdi-compare"></i>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Left: Images */}
                <div>
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40 mb-4 relative">
                        <img src={product.images[selectedImage]} alt={product.name} className="w-full h-[500px] object-cover" />
                        {product.discount > 0 && (
                            <div className="absolute top-5 right-5 w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center flex-col shadow-2xl">
                                <div className="text-xl font-black leading-none">-{product.discount}%</div>
                                <div className="text-[10px] font-semibold">OFF</div>
                            </div>
                        )}
                        <div className="absolute bottom-5 left-5 flex gap-2">
                            <div className="backdrop-blur-xl bg-white/90 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700">
                                <i className="mdi mdi-eye mr-1"></i>{product.views} views
                            </div>
                            <div className="backdrop-blur-xl bg-white/90 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700">
                                <i className="mdi mdi-cart mr-1"></i>{product.sold} sold
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-3">
                        {product.images.map((img, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setSelectedImage(idx)}
                                className={`backdrop-blur-xl rounded-2xl overflow-hidden border-2 transition-all hover:scale-105 ${selectedImage === idx ? 'border-blue-500 scale-105 shadow-xl' : 'border-white/60'}`}
                            >
                                <img src={img} alt="" className="w-full h-20 object-cover" />
                            </button>
                        ))}
                    </div>

                    {/* Price History Chart */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 p-6 mt-6 shadow-2xl shadow-blue-200/40">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Price History</h3>
                        <Line data={priceHistory} options={{ 
                            responsive: true, 
                            maintainAspectRatio: false,
                            plugins: { legend: { display: false } },
                            scales: {
                                x: { grid: { display: false } },
                                y: { grid: { color: 'rgba(241, 245, 249, 0.5)' }, ticks: { callback: value => '$' + value } }
                            }
                        }} height={150} />
                        <div className="mt-4 text-sm text-slate-600 text-center">
                            Lowest price in 6 months: <span className="font-bold text-emerald-600">${product.price}</span>
                        </div>
                    </div>
                </div>

                {/* Right: Details */}
                <div>
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 p-8 shadow-2xl shadow-blue-200/40">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs font-semibold text-blue-600 px-3 py-1 bg-blue-100 rounded-full">{product.brand}</span>
                            <span className="text-xs font-semibold text-slate-600">SKU: {product.sku}</span>
                            {product.inStock && (
                                <span className="ml-auto text-xs font-bold text-emerald-600 px-3 py-1 bg-emerald-100 rounded-full">
                                    ✓ In Stock
                                </span>
                            )}
                        </div>
                        
                        <h1 className="text-3xl font-bold text-slate-900 mb-4">{product.name}</h1>
                        
                        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/40">
                            <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className={`mdi mdi-star ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-slate-300'}`}></i>
                                    ))}
                                </div>
                                <span className="text-sm font-semibold text-slate-900">{product.rating}</span>
                                <span className="text-sm text-slate-600">({product.reviews} reviews)</span>
                            </div>
                            <div className="text-sm text-slate-600">
                                <i className="mdi mdi-truck-fast text-emerald-600 mr-1"></i>
                                {product.sold} sold
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-baseline gap-4">
                                <div className="text-5xl font-black text-blue-600">${product.price}</div>
                                <div className="text-2xl text-slate-500 line-through">${product.oldPrice}</div>
                                <div className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-bold">
                                    Save ${(product.oldPrice - product.price).toFixed(2)}
                                </div>
                            </div>
                            <div className="mt-2 text-sm text-slate-600">
                                Tax included • Free shipping on orders over $50
                            </div>
                        </div>

                        {/* Seller Info */}
                        <div className="mb-6 p-4 bg-white/60 rounded-2xl border border-white/60">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-bold text-slate-900">{product.seller}</div>
                                    <div className="flex items-center gap-2 mt-1">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <i key={i} className={`mdi mdi-star text-xs ${i < Math.floor(product.sellerRating) ? 'text-amber-400' : 'text-slate-300'}`}></i>
                                            ))}
                                        </div>
                                        <span className="text-xs text-slate-600">{product.sellerRating} • {product.sellerSales.toLocaleString()} sales</span>
                                    </div>
                                </div>
                                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-sm font-semibold transition-all">
                                    Visit Store
                                </button>
                            </div>
                        </div>

                        {/* Color Selection */}
                        <div className="mb-6">
                            <label className="block text-sm font-bold text-slate-900 mb-3">
                                Color: <span className="text-blue-600">{selectedColor}</span>
                            </label>
                            <div className="flex gap-3">
                                {product.colors.map((color) => (
                                    <button 
                                        key={color.name}
                                        onClick={() => color.available && setSelectedColor(color.name)}
                                        disabled={!color.available}
                                        className={`relative px-5 py-3 rounded-xl font-semibold transition-all ${selectedColor === color.name ? 'bg-blue-500 text-white shadow-xl shadow-blue-500/40' : 'bg-white/60 text-slate-700 hover:bg-white/80'} ${!color.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 rounded-full border-2 border-white shadow-lg" style={{ backgroundColor: color.hex }}></div>
                                            <span>{color.name}</span>
                                        </div>
                                        {!color.available && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-full h-0.5 bg-red-500 rotate-45"></div>
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Warranty Selection */}
                        <div className="mb-6">
                            <label className="block text-sm font-bold text-slate-900 mb-3">Warranty Protection</label>
                            <div className="space-y-2">
                                {product.warranty.map((w) => (
                                    <label 
                                        key={w.id}
                                        className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${selectedWarranty === w.id ? 'border-blue-500 bg-blue-50/60' : 'border-white/60 bg-white/40 hover:bg-white/60'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <input 
                                                type="radio"
                                                name="warranty"
                                                checked={selectedWarranty === w.id}
                                                onChange={() => setSelectedWarranty(w.id)}
                                                className="w-5 h-5"
                                            />
                                            <div>
                                                <div className="font-bold text-slate-900">{w.name}</div>
                                                <div className="text-xs text-slate-600">{w.duration}</div>
                                            </div>
                                        </div>
                                        <div className="font-bold text-blue-600">
                                            {w.price === 0 ? 'Included' : `+$${w.price.toFixed(2)}`}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="mb-6">
                            <label className="block text-sm font-bold text-slate-900 mb-3">Quantity</label>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-3 bg-white/60 rounded-xl p-2">
                                    <button 
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-10 bg-white rounded-lg hover:bg-blue-50 transition-all flex items-center justify-center"
                                    >
                                        <i className="mdi mdi-minus text-slate-700"></i>
                                    </button>
                                    <span className="w-16 text-center font-bold text-slate-900 text-lg">{quantity}</span>
                                    <button 
                                        onClick={() => setQuantity(Math.min(10, quantity + 1))}
                                        className="w-10 h-10 bg-white rounded-lg hover:bg-blue-50 transition-all flex items-center justify-center"
                                    >
                                        <i className="mdi mdi-plus text-slate-700"></i>
                                    </button>
                                </div>
                                <div className="text-sm text-slate-600">
                                    <span className="font-bold text-emerald-600">{product.stock}</span> items available • Max 10 per order
                                </div>
                            </div>
                        </div>

                        {/* Total Price */}
                        <div className="mb-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm text-slate-600 mb-1">Total Price</div>
                                    <div className="text-3xl font-black text-blue-600">${totalPrice.toFixed(2)}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-slate-600">You save</div>
                                    <div className="text-lg font-bold text-emerald-600">
                                        ${((product.oldPrice - product.price) * quantity).toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 mb-6">
                            <button 
                                onClick={handleAddToCart}
                                className="flex-1 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-2xl font-bold shadow-2xl shadow-blue-500/40 transition-all"
                            >
                                <i className="mdi mdi-cart mr-2"></i>Add to Cart
                            </button>
                            <button className="flex-1 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-2xl font-bold shadow-2xl shadow-emerald-500/40 transition-all">
                                <i className="mdi mdi-lightning-bolt mr-2"></i>Buy Now
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { icon: 'shield-check', text: 'Secure Payment', color: 'emerald' },
                                { icon: 'truck-fast', text: 'Free Shipping', color: 'blue' },
                                { icon: 'undo-variant', text: '30-Day Returns', color: 'purple' }
                            ].map((badge, i) => (
                                <div key={i} className={`text-center p-3 bg-${badge.color}-50 rounded-xl border border-${badge.color}-200`}>
                                    <i className={`mdi mdi-${badge.icon} text-2xl text-${badge.color}-500 mb-1`}></i>
                                    <div className={`text-xs font-semibold text-${badge.color}-700`}>{badge.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40 mb-8">
                <div className="border-b border-white/40">
                    <div className="flex gap-2 p-2">
                        {[
                            { id: 'description', label: 'Description', icon: 'file-document' },
                            { id: 'specifications', label: 'Specifications', icon: 'format-list-bulleted' },
                            { id: 'reviews', label: `Reviews (${product.reviews})`, icon: 'star' },
                            { id: 'qa', label: 'Q&A', icon: 'help-circle' }
                        ].map((tab) => (
                            <button 
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 px-6 py-4 rounded-2xl font-bold text-sm transition-all ${activeTab === tab.id ? 'bg-blue-500 text-white shadow-xl shadow-blue-500/40' : 'bg-transparent text-slate-600 hover:bg-white/40'}`}
                            >
                                <i className={`mdi mdi-${tab.icon} mr-2`}></i>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="p-8">
                    {activeTab === 'description' && (
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Product Description</h3>
                            <p className="text-slate-700 leading-relaxed mb-6">{product.description}</p>
                            <p className="text-slate-700 leading-relaxed mb-8">{product.longDescription}</p>
                            
                            <h4 className="text-xl font-bold text-slate-900 mb-4">Key Features</h4>
                            <div className="grid grid-cols-2 gap-4">
                                {product.features.map((feature, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-white/60 rounded-2xl border border-white/60">
                                        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                                            <i className={`mdi ${feature.icon} text-2xl`}></i>
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900">{feature.title}</div>
                                            <div className="text-sm text-slate-600">{feature.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'specifications' && (
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Specifications</h3>
                            <div className="grid grid-cols-2 gap-6">
                                {Object.entries(product.specs).map(([key, value]) => (
                                    <div key={key} className="flex justify-between py-4 border-b border-white/40">
                                        <span className="font-semibold text-slate-700">{key}</span>
                                        <span className="text-slate-900 font-medium">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'reviews' && (
                        <div>
                            <div className="grid grid-cols-3 gap-6 mb-8">
                                <div className="col-span-1">
                                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                                        <div className="text-6xl font-black text-blue-600 mb-2">{product.rating}</div>
                                        <div className="flex items-center justify-center gap-1 mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <i key={i} className={`mdi mdi-star text-xl ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-slate-300'}`}></i>
                                            ))}
                                        </div>
                                        <div className="text-sm text-slate-600">{product.reviews} reviews</div>
                                    </div>
                                    <div className="mt-4">
                                        <Doughnut data={ratingDistribution} options={{ 
                                            responsive: true, 
                                            maintainAspectRatio: false,
                                            plugins: { legend: { position: 'bottom' } }
                                        }} height={200} />
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-bold text-slate-900">Customer Reviews</h3>
                                        <select 
                                            value={reviewFilter}
                                            onChange={(e) => setReviewFilter(e.target.value)}
                                            className="px-4 py-2 bg-white/60 border border-white/80 rounded-xl text-slate-900 font-semibold"
                                        >
                                            <option value="all">All Ratings</option>
                                            <option value="5">5 Stars</option>
                                            <option value="4">4 Stars</option>
                                            <option value="3">3 Stars</option>
                                            <option value="2">2 Stars</option>
                                            <option value="1">1 Star</option>
                                        </select>
                                    </div>
                                    <div className="space-y-4">
                                        {filteredReviews.map((review) => (
                                            <div key={review.id} className="p-5 bg-white/60 rounded-2xl border border-white/60">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <div className="font-bold text-slate-900">{review.name}</div>
                                                            {review.verified && (
                                                                <span className="text-xs px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-bold">
                                                                    ✓ Verified Purchase
                                                                </span>
                                                            )}
                                                        </div>
                                                        <div className="text-sm text-slate-600">{review.date}</div>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        {[...Array(5)].map((_, i) => (
                                                            <i key={i} className={`mdi mdi-star text-sm ${i < review.rating ? 'text-amber-400' : 'text-slate-300'}`}></i>
                                                        ))}
                                                    </div>
                                                </div>
                                                <p className="text-slate-700 mb-3">{review.comment}</p>
                                                {review.images.length > 0 && (
                                                    <div className="flex gap-2 mb-3">
                                                        {review.images.map((img, i) => (
                                                            <img key={i} src={img} alt="" className="w-20 h-20 rounded-xl object-cover" />
                                                        ))}
                                                    </div>
                                                )}
                                                <div className="flex items-center gap-4 text-sm">
                                                    <button className="text-slate-600 hover:text-blue-600 font-semibold">
                                                        <i className="mdi mdi-thumb-up mr-1"></i>Helpful ({review.helpful})
                                                    </button>
                                                    <button className="text-slate-600 hover:text-blue-600 font-semibold">
                                                        <i className="mdi mdi-comment mr-1"></i>Reply
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'qa' && (
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-slate-900">Questions & Answers</h3>
                                <button className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold transition-all">
                                    <i className="mdi mdi-plus mr-2"></i>Ask a Question
                                </button>
                            </div>
                            <div className="space-y-4">
                                {qaItems.map((qa, i) => (
                                    <div key={i} className="p-5 bg-white/60 rounded-2xl border border-white/60">
                                        <div className="flex items-start gap-4 mb-3">
                                            <div className="p-2 bg-blue-100 text-blue-600 rounded-xl">
                                                <i className="mdi mdi-help-circle text-xl"></i>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold text-slate-900 mb-1">{qa.question}</div>
                                                <div className="text-sm text-slate-600">{qa.date}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 pl-14">
                                            <div className="p-2 bg-emerald-100 text-emerald-600 rounded-xl">
                                                <i className="mdi mdi-comment-check text-xl"></i>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-slate-700 mb-2">{qa.answer}</div>
                                                <button className="text-sm text-slate-600 hover:text-blue-600 font-semibold">
                                                    <i className="mdi mdi-thumb-up mr-1"></i>Helpful ({qa.helpful})
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Related Products */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
                <div className="p-6 border-b border-white/40">
                    <h2 className="text-2xl font-bold text-slate-900">You May Also Like</h2>
                </div>
                <div className="p-6 grid grid-cols-4 gap-6">
                    {relatedProducts.map((item, i) => (
                        <div key={i} className="p-4 bg-white/60 rounded-2xl border border-white/60 hover:scale-105 transition-transform cursor-pointer">
                            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-xl mb-3" />
                            <p className="text-sm font-semibold text-slate-900 mb-2 line-clamp-2">{item.name}</p>
                            <div className="flex items-center gap-1 mb-2">
                                {[...Array(5)].map((_, j) => (
                                    <i key={j} className={`mdi mdi-star text-xs ${j < Math.floor(item.rating) ? 'text-amber-400' : 'text-slate-300'}`}></i>
                                ))}
                                <span className="text-xs text-slate-600 ml-1">{item.rating}</span>
                            </div>
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <div className="text-xs text-slate-500 line-through">${item.oldPrice}</div>
                                    <div className="text-xl font-bold text-blue-600">${item.price}</div>
                                </div>
                            </div>
                            <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl text-sm font-bold transition-all">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
