import React from 'react';
import { ChevronRight, Home, Star, Heart, ShoppingCart, User, TrendingUp, Calendar, MapPin, DollarSign, Zap } from 'lucide-react';

const UICards = () => {
  const products = [
    { id: 1, name: 'Premium Headphones', price: 199.99, rating: 4.5, reviews: 128 },
    { id: 2, name: 'Wireless Speaker', price: 79.99, rating: 4.8, reviews: 256 },
    { id: 3, name: 'Smart Watch', price: 299.99, rating: 4.3, reviews: 89 },
  ];

  const testimonials = [
    { name: 'Sarah Mitchell', role: 'Product Manager', text: 'Exceptional service and quality. Highly recommend!' },
    { name: 'John Davis', role: 'Startup Founder', text: 'Best investment we made for our team productivity.' },
    { name: 'Emma Wilson', role: 'Designer', text: 'Intuitive interface and powerful features combined.' },
  ];

  const stats = [
    { label: 'Total Users', value: '24.5K', color: 'from-blue-500 to-blue-600' },
    { label: 'Revenue', value: '$127K', color: 'from-green-500 to-green-600' },
    { label: 'Growth Rate', value: '32%', color: 'from-purple-500 to-purple-600' },
    { label: 'Active Sessions', value: '8.2K', color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8">
        <a href="/" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
          <Home size={18} /> Dashboard
        </a>
        <ChevronRight size={18} className="text-gray-400" />
        <span className="text-gray-900 font-medium">UI Components</span>
        <ChevronRight size={18} className="text-gray-400" />
        <span className="text-blue-600 font-medium">Cards</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Card Components</h1>
        <p className="text-gray-600">Complete showcase of card layouts and variations</p>
      </div>

      {/* Basic Cards */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Cards</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((card) => (
            <div key={`basic-${card}`} className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title {card}</h3>
              <p className="text-gray-600 mb-4">This is a basic card component with simple content and styling.</p>
              <button className="w-full px-4 py-2 font-semibold text-white backdrop-blur-xl rounded-2xl border border-white/50 bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-200/40 hover:scale-105 hover:shadow-2xl transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cards with Images - Top */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-purple-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Cards with Images (Top)</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((card) => (
            <div key={`img-top-${card}`} className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-purple-200/40 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <img
                src={`https://picsum.photos/400/250?random=${card}`}
                alt={`Card ${card}`}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Image Card {card}</h3>
                <p className="text-gray-600 text-sm">Beautiful card with image on top and content below.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cards with Images - Bottom */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-green-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Cards with Images (Bottom)</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[4, 5, 6].map((card) => (
            <div key={`img-bottom-${card}`} className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-green-200/40 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Card with Image {card}</h3>
                <p className="text-gray-600 text-sm mb-4">Content above the image in this variation.</p>
              </div>
              <img
                src={`https://picsum.photos/400/200?random=${card}`}
                alt={`Card ${card}`}
                className="w-full h-32 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Feature Cards */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-yellow-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Feature Cards (Icon + Text)</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: 'Lightning Fast', desc: 'Optimized performance and instant load times' },
            { icon: Star, title: 'Premium Quality', desc: 'High-quality components and materials' },
            { icon: Heart, title: 'User Loved', desc: 'Trusted by thousands of happy customers' },
          ].map(({ icon: Icon, title, desc }, idx) => (
            <div key={`feature-${idx}`} className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-yellow-200/40 p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-200/40">
                  <Icon size={32} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-pink-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Stats Cards</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={`stat-${idx}`} className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-pink-200/40 p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <p className="text-gray-600 text-sm font-medium mb-2">{stat.label}</p>
              <h3 className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </h3>
              <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${stat.color}`} style={{ width: `${75 + Math.random() * 25}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Cards */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-indigo-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Cards with Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={`product-${product.id}`} className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-indigo-200/40 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <img
                src={`https://picsum.photos/400/300?random=${product.id + 10}`}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                  <span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  <button className="p-2 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white hover:scale-110 transition-all duration-300">
                    <Heart size={20} />
                  </button>
                </div>
                <button className="w-full px-4 py-2 font-semibold text-white backdrop-blur-xl rounded-2xl border border-white/50 bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-200/40 hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2">
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-cyan-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Testimonial Cards</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={`testimonial-${idx}`} className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-cyan-200/40 p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={`https://picsum.photos/50/50?random=${idx + 20}`}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white/60"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User Profile Cards */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-rose-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">User Profile Cards</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((profile) => (
            <div key={`profile-${profile}`} className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-rose-200/40 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="px-6 pb-6 relative">
                <div className="flex justify-center -mt-12 mb-4">
                  <img
                    src={`https://picsum.photos/100/100?random=${profile + 30}`}
                    alt={`User ${profile}`}
                    className="w-24 h-24 rounded-full border-4 border-white/80 object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-1">User Name {profile}</h3>
                <p className="text-gray-600 text-center text-sm mb-4">@username{profile}</p>
                <button className="w-full px-4 py-2 font-semibold text-white backdrop-blur-xl rounded-2xl border border-white/50 bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-200/40 hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Cards */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-orange-200/40 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Cards</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((event) => (
            <div key={`event-${event}`} className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-orange-200/40 p-6 hover:shadow-2xl hover:scale-102 transition-all duration-300 flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex flex-col items-center justify-center text-white">
                  <span className="text-2xl font-bold">15</span>
                  <span className="text-sm">Dec</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Event Title {event}</h3>
                <div className="space-y-1 text-gray-600 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} /> 15 Dec 2024, 2:00 PM
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} /> San Francisco, CA
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center">
                <button className="px-6 py-2 font-semibold text-white backdrop-blur-xl rounded-2xl border border-white/50 bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-200/40 hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  Attend
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UICards;
