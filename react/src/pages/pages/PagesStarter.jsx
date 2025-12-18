import React from 'react';
import { ChevronRight, Zap, Layers, Smartphone, Palette, Code, BarChart3 } from 'lucide-react';

export default function PagesStarter() {
  const features = [
    { icon: Layers, title: 'Modern Components', description: 'Pre-built, reusable components' },
    { icon: Smartphone, title: 'Fully Responsive', description: 'Works perfectly on all devices' },
    { icon: Palette, title: 'Customizable', description: 'Tailor to your brand' },
    { icon: Code, title: 'Clean Code', description: 'Well-organized and documented' },
    { icon: Zap, title: 'High Performance', description: 'Optimized for speed' },
    { icon: BarChart3, title: 'Analytics Ready', description: 'Track everything' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm">
        <span className="text-gray-600">Glacia</span>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="text-gray-600">Pages</span>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Starter</span>
      </div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 overflow-hidden p-12 text-center hover:shadow-2xl transition-all duration-300">
          <div className="mb-6 flex justify-center">
            <div className="p-4 backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-purple-400/50 border border-white/50 rounded-3xl shadow-lg">
              <Zap size={48} className="text-blue-600" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">Welcome to Glacia</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">A modern admin dashboard template with glass morphism design, built with React and Tailwind CSS. Perfect for building beautiful, responsive web applications.</p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 backdrop-blur-xl bg-gradient-to-br from-blue-500/50 to-blue-600/50 border border-white/50 rounded-2xl text-white font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Get Started
            </button>
            <button className="px-8 py-3 backdrop-blur-xl bg-white/50 border border-white/60 rounded-2xl text-gray-700 font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">Key Features</h2>
          <p className="text-gray-600 text-lg">Everything you need to build amazing dashboards</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                <div className="p-4 backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-purple-400/50 border border-white/50 rounded-2xl shadow-lg mb-6 w-fit group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto">
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-purple-200/40 p-12 text-center hover:shadow-2xl transition-all duration-300">
          <h2 className="text-3xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-8 text-lg">Join thousands of developers building with Glacia</p>
          <button className="px-10 py-3 backdrop-blur-xl bg-gradient-to-br from-blue-500/50 to-blue-600/50 border border-white/50 rounded-2xl text-white font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Start Building Now
          </button>
        </div>
      </div>
    </div>
  );
}
