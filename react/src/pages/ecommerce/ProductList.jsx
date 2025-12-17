import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

export default function ProductList() {
    const [viewMode, setViewMode] = useState('grid');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [sortBy, setSortBy] = useState('popular');
    const [showFilters, setShowFilters] = useState(true);
    const [compareList, setCompareList] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const products = [
        { id: 1, name: 'Premium Wireless Headphones', brand: 'AudioMax', category: 'Audio', price: 299.99, oldPrice: 399.99, rating: 4.8, reviews: 342, stock: 45, image: 'https://picsum.photos/seed/prod1/400/400', status: 'Active', badge: 'Bestseller', discount: 25, sold: 1250, features: ['ANC', '30h Battery', 'Bluetooth 5.0'] },
        { id: 2, name: 'Smart Fitness Watch Pro', brand: 'FitTech', category: 'Wearables', price: 199.99, oldPrice: 249.99, rating: 4.6, reviews: 521, stock: 32, image: 'https://picsum.photos/seed/prod2/400/400', status: 'Active', badge: 'New Arrival', discount: 20, sold: 890, features: ['Heart Rate', 'GPS', 'Waterproof'] },
        { id: 3, name: 'Portable Bluetooth Speaker', brand: 'AudioMax', category: 'Audio', price: 79.99, oldPrice: 99.99, rating: 4.7, reviews: 234, stock: 8, image: 'https://picsum.photos/seed/prod3/400/400', status: 'Low Stock', badge: 'Hot Deal', discount: 20, sold: 560, features: ['360° Sound', 'IPX7', '12h Battery'] },
        { id: 4, name: '4K Ultra HD Monitor 32"', brand: 'ViewTech', category: 'Electronics', price: 449.99, oldPrice: 599.99, rating: 4.9, reviews: 189, stock: 15, image: 'https://picsum.photos/seed/prod4/400/400', status: 'Active', badge: 'Bestseller', discount: 25, sold: 320, features: ['4K UHD', 'HDR10', '144Hz'] },
        { id: 5, name: 'Mechanical Keyboard RGB', brand: 'GamerPro', category: 'Accessories', price: 129.99, oldPrice: 179.99, rating: 4.5, reviews: 412, stock: 52, image: 'https://picsum.photos/seed/prod5/400/400', status: 'Active', badge: 'Top Rated', discount: 28, sold: 780, features: ['RGB', 'Mechanical', 'Hot-swappable'] },
        { id: 6, name: 'Wireless Gaming Mouse', brand: 'GamerPro', category: 'Accessories', price: 89.99, oldPrice: 119.99, rating: 4.7, reviews: 298, stock: 0, image: 'https://picsum.photos/seed/prod6/400/400', status: 'Out of Stock', badge: '', discount: 25, sold: 650, features: ['20K DPI', 'Wireless', 'RGB'] },
        { id: 7, name: 'USB-C Hub 7-in-1', brand: 'TechConnect', category: 'Accessories', price: 49.99, oldPrice: 69.99, rating: 4.4, reviews: 167, stock: 28, image: 'https://picsum.photos/seed/prod7/400/400', status: 'Active', badge: 'Value Pick', discount: 29, sold: 420, features: ['7 Ports', 'USB-C PD', '4K HDMI'] },
        { id: 8, name: 'HD Webcam with Mic', brand: 'StreamCam', category: 'Electronics', price: 69.99, oldPrice: 89.99, rating: 4.6, reviews: 201, stock: 19, image: 'https://picsum.photos/seed/prod8/400/400', status: 'Active', badge: 'New Arrival', discount: 22, sold: 380, features: ['1080p', 'Auto Focus', 'Noise Cancel'] },
        { id: 9, name: 'Wireless Earbuds Pro', brand: 'AudioMax', category: 'Audio', price: 149.99, oldPrice: 199.99, rating: 4.8, reviews: 456, stock: 42, image: 'https://picsum.photos/seed/prod9/400/400', status: 'Active', badge: 'Bestseller', discount: 25, sold: 920, features: ['ANC', '8h Battery', 'IPX5'] },
        { id: 10, name: 'Smart Home Hub', brand: 'HomeTech', category: 'Electronics', price: 129.99, oldPrice: 179.99, rating: 4.5, reviews: 234, stock: 25, image: 'https://picsum.photos/seed/prod10/400/400', status: 'Active', badge: 'Smart Choice', discount: 28, sold: 290, features: ['Alexa', 'Google', 'Zigbee'] },
        { id: 11, name: 'Laptop Stand Aluminum', brand: 'ErgoDesk', category: 'Accessories', price: 39.99, oldPrice: 59.99, rating: 4.7, reviews: 178, stock: 67, image: 'https://picsum.photos/seed/prod11/400/400', status: 'Active', badge: 'Ergonomic', discount: 33, sold: 540, features: ['Adjustable', 'Aluminum', 'Cooling'] },
        { id: 12, name: 'Wireless Charger 15W', brand: 'ChargeFast', category: 'Accessories', price: 34.99, oldPrice: 49.99, rating: 4.4, reviews: 312, stock: 89, image: 'https://picsum.photos/seed/prod12/400/400', status: 'Active', badge: 'Fast Charge', discount: 30, sold: 670, features: ['15W Fast', 'Qi Certified', 'LED Indicator'] }
    ];

    const brands = ['AudioMax', 'FitTech', 'ViewTech', 'GamerPro', 'TechConnect', 'StreamCam', 'HomeTech', 'ErgoDesk', 'ChargeFast'];
    const categories = ['All', 'Audio', 'Wearables', 'Electronics', 'Accessories'];

    const salesData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Monthly Sales',
            data: [1200, 1900, 1500, 2300, 2100, 2800],
            backgroundColor: 'rgba(59, 130, 246, 0.6)',
            borderRadius: 8
        }]
    };

    const getStatusColor = (status) => {
        if (status === 'Active') return 'bg-emerald-100 text-emerald-700';
        if (status === 'Low Stock') return 'bg-amber-100 text-amber-700';
        return 'bg-red-100 text-red-700';
    };

    const getBadgeColor = (badge) => {
        const colors = {
            'Bestseller': 'bg-gradient-to-r from-amber-500 to-orange-600',
            'New Arrival': 'bg-gradient-to-r from-blue-500 to-indigo-600',
            'Hot Deal': 'bg-gradient-to-r from-red-500 to-pink-600',
            'Top Rated': 'bg-gradient-to-r from-purple-500 to-purple-600',
            'Value Pick': 'bg-gradient-to-r from-emerald-500 to-emerald-600',
            'Smart Choice': 'bg-gradient-to-r from-cyan-500 to-blue-600',
            'Ergonomic': 'bg-gradient-to-r from-teal-500 to-teal-600',
            'Fast Charge': 'bg-gradient-to-r from-indigo-500 to-indigo-600'
        };
        return colors[badge] || 'bg-gradient-to-r from-slate-500 to-slate-600';
    };

    const toggleBrand = (brand) => {
        setSelectedBrands(prev => 
            prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
        );
    };

    const toggleCompare = (id) => {
        setCompareList(prev => 
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id].slice(-3)
        );
    };

    const toggleWishlist = (id) => {
        setWishlist(prev => 
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const filteredProducts = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
        const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(p.brand);
        const matchesRating = selectedRatings.length === 0 || selectedRatings.some(r => p.rating >= r);
        return matchesSearch && matchesCategory && matchesPrice && matchesBrand && matchesRating;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'popular') return b.sold - a.sold;
        if (sortBy === 'newest') return b.id - a.id;
        return 0;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <nav className="text-sm text-slate-600 backdrop-blur-xl bg-white/40 px-4 py-2 rounded-2xl border border-white/60 shadow-lg shadow-blue-100/50 mb-6 inline-flex">
                <span className="hover:text-slate-900 cursor-pointer">Glacia</span>
                <span className="mx-2">/</span>
                <span className="hover:text-slate-900 cursor-pointer">Ecommerce</span>
                <span className="mx-2">/</span>
                <span className="text-slate-900 font-semibold">Product List</span>
            </nav>

            {/* Top Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                    { label: 'Total Products', value: products.length, icon: 'mdi-package-variant', color: 'from-blue-500 to-indigo-600' },
                    { label: 'In Stock', value: products.filter(p => p.stock > 0).length, icon: 'mdi-check-circle', color: 'from-emerald-500 to-emerald-600' },
                    { label: 'Low Stock', value: products.filter(p => p.stock > 0 && p.stock < 10).length, icon: 'mdi-alert', color: 'from-amber-500 to-amber-600' },
                    { label: 'Out of Stock', value: products.filter(p => p.stock === 0).length, icon: 'mdi-close-circle', color: 'from-red-500 to-red-600' }
                ].map((stat, i) => (
                    <div key={i} className={`backdrop-blur-2xl bg-gradient-to-br ${stat.color} rounded-3xl p-5 text-white border border-white/30 shadow-2xl hover:scale-105 transition-transform duration-300`}>
                        <div className="flex items-center justify-between mb-2">
                            <i className={`mdi ${stat.icon} text-3xl`}></i>
                            <div className="text-3xl font-black">{stat.value}</div>
                        </div>
                        <div className="text-sm font-semibold text-white/80">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Sales Chart */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 p-6 mb-6 shadow-2xl shadow-blue-200/40">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Sales Performance</h3>
                <Bar 
                    key="sales-chart"
                    data={salesData} 
                    options={{ 
                        responsive: true, 
                        maintainAspectRatio: false,
                        plugins: { 
                            legend: { display: false }
                        },
                        scales: {
                            x: { grid: { display: false } },
                            y: { 
                                grid: { color: 'rgba(241, 245, 249, 0.5)' },
                                beginAtZero: true
                            }
                        }
                    }} 
                    height={120} 
                />
            </div>

            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900">Product Catalog</h1>
                    <p className="text-slate-600 mt-2">
                        Showing {sortedProducts.length} of {products.length} products
                        {compareList.length > 0 && <span className="ml-2 text-blue-600 font-semibold">• {compareList.length} selected for compare</span>}
                        {wishlist.length > 0 && <span className="ml-2 text-pink-600 font-semibold">• {wishlist.length} in wishlist</span>}
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="backdrop-blur-xl bg-white/60 hover:bg-white/80 px-5 py-2.5 rounded-2xl text-sm font-semibold text-slate-700 border border-white/60 shadow-lg transition-all">
                        <i className="mdi mdi-export mr-2"></i>Export
                    </button>
                    <button className="backdrop-blur-xl bg-gradient-to-r from-blue-500/90 to-indigo-600/90 hover:from-blue-600/90 hover:to-indigo-700/90 px-5 py-2.5 rounded-2xl text-sm font-semibold text-white border border-blue-400/30 shadow-xl shadow-blue-500/30 transition-all">
                        <i className="mdi mdi-plus-circle mr-2"></i>Add New Product
                    </button>
                </div>
            </div>

            {/* Compare Bar */}
            {compareList.length > 0 && (
                <div className="backdrop-blur-2xl bg-gradient-to-r from-purple-500/90 to-pink-600/90 rounded-3xl p-4 mb-6 text-white flex items-center justify-between shadow-2xl">
                    <div className="flex items-center gap-3">
                        <i className="mdi mdi-compare text-2xl"></i>
                        <span className="font-bold">{compareList.length} Products Selected for Comparison</span>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-5 py-2 bg-white text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-all">
                            Compare Now
                        </button>
                        <button 
                            onClick={() => setCompareList([])}
                            className="px-5 py-2 bg-white/20 hover:bg-white/30 rounded-xl font-bold transition-all"
                        >
                            Clear
                        </button>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-12 gap-6">
                {/* Filters Sidebar */}
                {showFilters && (
                    <div className="col-span-3 space-y-6">
                        {/* Search */}
                        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 p-5 shadow-2xl shadow-blue-200/40">
                            <h3 className="font-bold text-slate-900 mb-3">Search</h3>
                            <input 
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-3 bg-white/60 border border-white/80 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            />
                        </div>

                        {/* Categories */}
                        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 p-5 shadow-2xl shadow-blue-200/40">
                            <h3 className="font-bold text-slate-900 mb-3">Categories</h3>
                            <div className="space-y-2">
                                {categories.map((cat) => (
                                    <button 
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat.toLowerCase())}
                                        className={`w-full text-left px-4 py-2 rounded-xl font-semibold transition-all ${selectedCategory === cat.toLowerCase() ? 'bg-blue-500 text-white shadow-lg' : 'bg-white/60 text-slate-700 hover:bg-white/80'}`}
                                    >
                                        {cat}
                                        <span className="float-right text-xs opacity-60">
                                            ({products.filter(p => cat === 'All' || p.category === cat).length})
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Price Range */}
                        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 p-5 shadow-2xl shadow-blue-200/40">
                            <h3 className="font-bold text-slate-900 mb-3">Price Range</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <input 
                                        type="number" 
                                        value={priceRange[0]}
                                        onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                                        className="flex-1 px-3 py-2 bg-white/60 border border-white/80 rounded-lg text-slate-900 text-sm"
                                        placeholder="Min"
                                    />
                                    <span className="text-slate-400">-</span>
                                    <input 
                                        type="number" 
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                                        className="flex-1 px-3 py-2 bg-white/60 border border-white/80 rounded-lg text-slate-900 text-sm"
                                        placeholder="Max"
                                    />
                                </div>
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="1000" 
                                    step="10"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                                    className="w-full"
                                />
                                <div className="flex justify-between text-xs text-slate-500">
                                    <span>$0</span>
                                    <span>$1000</span>
                                </div>
                            </div>
                        </div>

                        {/* Brands */}
                        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 p-5 shadow-2xl shadow-blue-200/40">
                            <h3 className="font-bold text-slate-900 mb-3">Brands</h3>
                            <div className="space-y-2 max-h-64 overflow-y-auto">
                                {brands.map((brand) => (
                                    <label key={brand} className="flex items-center gap-3 cursor-pointer hover:bg-white/60 p-2 rounded-lg transition-all">
                                        <input 
                                            type="checkbox"
                                            checked={selectedBrands.includes(brand)}
                                            onChange={() => toggleBrand(brand)}
                                            className="w-4 h-4 rounded border-2 border-slate-300"
                                        />
                                        <span className="text-sm font-semibold text-slate-700">{brand}</span>
                                        <span className="ml-auto text-xs text-slate-500">({products.filter(p => p.brand === brand).length})</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Ratings */}
                        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 p-5 shadow-2xl shadow-blue-200/40">
                            <h3 className="font-bold text-slate-900 mb-3">Ratings</h3>
                            <div className="space-y-2">
                                {[5, 4, 3, 2, 1].map((rating) => (
                                    <label key={rating} className="flex items-center gap-3 cursor-pointer hover:bg-white/60 p-2 rounded-lg transition-all">
                                        <input 
                                            type="checkbox"
                                            checked={selectedRatings.includes(rating)}
                                            onChange={() => {
                                                setSelectedRatings(prev => 
                                                    prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]
                                                );
                                            }}
                                            className="w-4 h-4 rounded border-2 border-slate-300"
                                        />
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <i key={i} className={`mdi mdi-star text-sm ${i < rating ? 'text-amber-400' : 'text-slate-300'}`}></i>
                                            ))}
                                        </div>
                                        <span className="text-sm text-slate-600">& up</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Clear Filters */}
                        <button 
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedCategory('all');
                                setPriceRange([0, 1000]);
                                setSelectedBrands([]);
                                setSelectedRatings([]);
                            }}
                            className="w-full py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-2xl font-bold shadow-xl shadow-red-500/30 transition-all"
                        >
                            <i className="mdi mdi-filter-remove mr-2"></i>Clear All Filters
                        </button>
                    </div>
                )}

                {/* Products Grid */}
                <div className={`${showFilters ? 'col-span-9' : 'col-span-12'}`}>
                    {/* Toolbar */}
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 p-4 mb-6 shadow-2xl shadow-blue-200/40">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <button 
                                    onClick={() => setShowFilters(!showFilters)}
                                    className="px-4 py-2 bg-white/60 hover:bg-white/80 rounded-xl font-semibold text-slate-700 transition-all"
                                >
                                    <i className={`mdi mdi-filter${showFilters ? '-remove' : ''} mr-2`}></i>
                                    {showFilters ? 'Hide' : 'Show'} Filters
                                </button>
                                <select 
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="px-4 py-2 bg-white/60 border border-white/80 rounded-xl text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                >
                                    <option value="popular">Most Popular</option>
                                    <option value="newest">Newest First</option>
                                    <option value="price-asc">Price: Low to High</option>
                                    <option value="price-desc">Price: High to Low</option>
                                    <option value="rating">Highest Rated</option>
                                </select>
                            </div>
                            <div className="flex gap-2">
                                <button 
                                    onClick={() => setViewMode('grid')}
                                    className={`p-3 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-blue-500 text-white shadow-lg' : 'bg-white/60 text-slate-600 hover:bg-white/80'}`}
                                >
                                    <i className="mdi mdi-view-grid"></i>
                                </button>
                                <button 
                                    onClick={() => setViewMode('list')}
                                    className={`p-3 rounded-xl transition-all ${viewMode === 'list' ? 'bg-blue-500 text-white shadow-lg' : 'bg-white/60 text-slate-600 hover:bg-white/80'}`}
                                >
                                    <i className="mdi mdi-view-list"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Products */}
                    {viewMode === 'grid' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {sortedProducts.map((product) => (
                                <div key={product.id} className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40 hover:scale-105 transition-all duration-300 cursor-pointer group">
                                    <div className="relative">
                                        <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                                        {product.badge && (
                                            <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white ${getBadgeColor(product.badge)}`}>
                                                {product.badge}
                                            </div>
                                        )}
                                        {product.discount > 0 && (
                                            <div className="absolute top-3 right-3 w-14 h-14 bg-red-500 text-white rounded-full flex items-center justify-center flex-col shadow-xl">
                                                <div className="text-lg font-black leading-none">-{product.discount}%</div>
                                                <div className="text-[8px] font-semibold">OFF</div>
                                            </div>
                                        )}
                                        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
                                                className={`p-2 rounded-full shadow-xl transition-all ${wishlist.includes(product.id) ? 'bg-pink-500 text-white' : 'bg-white/90 text-slate-700 hover:bg-pink-500 hover:text-white'}`}
                                            >
                                                <i className="mdi mdi-heart"></i>
                                            </button>
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); toggleCompare(product.id); }}
                                                className={`p-2 rounded-full shadow-xl transition-all ${compareList.includes(product.id) ? 'bg-purple-500 text-white' : 'bg-white/90 text-slate-700 hover:bg-purple-500 hover:text-white'}`}
                                            >
                                                <i className="mdi mdi-compare"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <div className="text-xs font-semibold text-blue-600 mb-1">{product.brand} • {product.category}</div>
                                        <h3 className="font-bold text-slate-900 mb-2 line-clamp-2">{product.name}</h3>
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <i key={i} className={`mdi mdi-star text-sm ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-slate-300'}`}></i>
                                                ))}
                                            </div>
                                            <span className="text-xs text-slate-600">({product.reviews})</span>
                                            <span className="ml-auto text-xs text-slate-500">{product.sold} sold</span>
                                        </div>
                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {product.features.map((feature, i) => (
                                                <span key={i} className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-lg font-semibold">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <div className="text-sm text-slate-500 line-through">${product.oldPrice}</div>
                                                <div className="text-2xl font-black text-blue-600">${product.price}</div>
                                            </div>
                                            <div>
                                                <span className={`text-xs px-2 py-1 rounded-full font-bold ${getStatusColor(product.status)}`}>
                                                    {product.status}
                                                </span>
                                                <div className="text-xs text-slate-600 mt-1 text-right">{product.stock} left</div>
                                            </div>
                                        </div>
                                        <button 
                                            disabled={product.stock === 0}
                                            className="w-full py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-white/40">
                                            <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Product</th>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Brand</th>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase">Category</th>
                                            <th className="px-6 py-4 text-right text-xs font-bold text-slate-700 uppercase">Price</th>
                                            <th className="px-6 py-4 text-center text-xs font-bold text-slate-700 uppercase">Stock</th>
                                            <th className="px-6 py-4 text-center text-xs font-bold text-slate-700 uppercase">Rating</th>
                                            <th className="px-6 py-4 text-center text-xs font-bold text-slate-700 uppercase">Sold</th>
                                            <th className="px-6 py-4 text-center text-xs font-bold text-slate-700 uppercase">Status</th>
                                            <th className="px-6 py-4 text-center text-xs font-bold text-slate-700 uppercase">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sortedProducts.map((product) => (
                                            <tr key={product.id} className="border-b border-white/20 hover:bg-white/40 transition-all">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <img src={product.image} alt={product.name} className="w-16 h-16 rounded-xl object-cover shadow-md" />
                                                        <div>
                                                            <div className="font-semibold text-slate-900">{product.name}</div>
                                                            {product.badge && (
                                                                <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full text-white ${getBadgeColor(product.badge)}`}>
                                                                    {product.badge}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-slate-600">{product.brand}</td>
                                                <td className="px-6 py-4 text-sm text-slate-600">{product.category}</td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="text-xs text-slate-500 line-through">${product.oldPrice}</div>
                                                    <div className="text-lg font-bold text-blue-600">${product.price}</div>
                                                </td>
                                                <td className="px-6 py-4 text-center text-sm text-slate-600">{product.stock}</td>
                                                <td className="px-6 py-4 text-center">
                                                    <div className="flex items-center justify-center gap-1">
                                                        <i className="mdi mdi-star text-amber-400 text-sm"></i>
                                                        <span className="text-sm font-semibold text-slate-900">{product.rating}</span>
                                                    </div>
                                                    <div className="text-xs text-slate-500">({product.reviews})</div>
                                                </td>
                                                <td className="px-6 py-4 text-center text-sm font-semibold text-slate-900">{product.sold}</td>
                                                <td className="px-6 py-4 text-center">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(product.status)}`}>
                                                        {product.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex gap-2 justify-center">
                                                        <button className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-all">
                                                            <i className="mdi mdi-eye"></i>
                                                        </button>
                                                        <button className="p-2 bg-pink-100 hover:bg-pink-200 text-pink-600 rounded-lg transition-all">
                                                            <i className="mdi mdi-heart"></i>
                                                        </button>
                                                        <button className="p-2 bg-purple-100 hover:bg-purple-200 text-purple-600 rounded-lg transition-all">
                                                            <i className="mdi mdi-compare"></i>
                                                        </button>
                                                        <button className="p-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-600 rounded-lg transition-all">
                                                            <i className="mdi mdi-cart"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Pagination */}
                    <div className="mt-6 flex items-center justify-between">
                        <div className="text-sm text-slate-600">
                            Showing <span className="font-semibold text-slate-900">1-{sortedProducts.length}</span> of <span className="font-semibold text-slate-900">{products.length}</span> products
                        </div>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((page) => (
                                <button 
                                    key={page}
                                    className={`w-10 h-10 rounded-xl font-bold transition-all ${page === 1 ? 'bg-blue-500 text-white shadow-lg' : 'bg-white/60 text-slate-700 hover:bg-white/80'}`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
